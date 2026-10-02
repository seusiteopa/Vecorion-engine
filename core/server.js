'use strict';
const http=require('http'),fs=require('fs'),path=require('path'),crypto=require('crypto');
const O=require('./orquestrador');
const ROOT=path.join(__dirname,'..');
const PORT=process.env.PORT!==undefined?+process.env.PORT:O.CFG.porta,HOST=process.env.HOST||O.CFG.host,TOKEN=process.env.VECORION_TOKEN||'';
if(!['127.0.0.1','localhost','::1'].includes(HOST)&&!TOKEN){console.error('Recusado: HOST fora do loopback exige VECORION_TOKEN.');process.exit(1)}
const ORIGENS=(process.env.VECORION_ORIGENS||'').split(',').map(x=>x.trim().toLowerCase()).filter(Boolean);
const hostDe=o=>{try{return new URL(o).host.toLowerCase()}catch(e){return''}};
const cook=req=>'vt='+encodeURIComponent(TOKEN)+'; HttpOnly; SameSite=Strict; Path=/'+((process.env.VECORION_SECURE==='1'||req.headers['x-forwarded-proto']==='https')?'; Secure':'');
const H={'X-Content-Type-Options':'nosniff','X-Frame-Options':'DENY','Referrer-Policy':'no-referrer','Cache-Control':'no-store'};
const CSP="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; base-uri 'none'; form-action 'self'";
const MIME={html:'text/html',svg:'image/svg+xml',json:'application/json',txt:'text/plain',mp4:'video/mp4'};
const send=(res,c,b,h={})=>{res.writeHead(c,{...H,'Content-Type':'application/json; charset=utf-8',...h});res.end(JSON.stringify(b))};
const eq=(a,b)=>{a=Buffer.from(a);b=Buffer.from(b);return a.length===b.length&&crypto.timingSafeEqual(a,b)};
const auth=req=>{if(!TOKEN)return true;const c=(req.headers.cookie||'').match(/(?:^|;\s*)vt=([^;]+)/);return(c&&eq(decodeURIComponent(c[1]),TOKEN))||eq((req.headers.authorization||'').replace(/^Bearer /,''),TOKEN)};
const body=req=>new Promise((ok,no)=>{let n=0;const c=[];req.on('data',d=>{n+=d.length;if(n>O.CFG.max_corpo_bytes){no({s:413,m:'Corpo grande demais.'});req.destroy();return}c.push(d)});req.on('end',()=>{try{ok(c.length?JSON.parse(Buffer.concat(c)):{})}catch(e){no({s:400,m:'JSON inválido.'})}});req.on('error',()=>no({s:400,m:'Erro de leitura.'}))});
const server=http.createServer(async(req,res)=>{try{
 const u=new URL(req.url,'http://x'),p=u.pathname;
 if(req.method==='GET'&&(p==='/'||p==='/index.html')){
  if(TOKEN&&u.searchParams.get('t')&&eq(u.searchParams.get('t'),TOKEN)){res.writeHead(302,{...H,'Set-Cookie':cook(req),Location:'/'});return res.end()}
  if(!auth(req))return send(res,401,{erro:'Não autorizado.'});
  res.writeHead(200,{...H,'Content-Type':'text/html; charset=utf-8','Content-Security-Policy':CSP});return res.end(fs.readFileSync(path.join(ROOT,'interface','index.html')))}
 if(req.method==='GET'&&p==='/saude')return send(res,200,{ok:true});
 if(req.method==='GET'&&p==='/api/entrar'){if(TOKEN&&!eq(u.searchParams.get('t')||'',TOKEN))return send(res,401,{erro:'Token inválido.'});res.writeHead(302,{...H,...(TOKEN?{'Set-Cookie':cook(req)}:{}),Location:'/'});return res.end()}
 if(!p.startsWith('/api/'))return send(res,404,{erro:'Não encontrado.'});
 if(!auth(req))return send(res,401,{erro:'Não autorizado.'});
 if(req.method!=='GET'&&req.headers.origin){const oh=hostDe(req.headers.origin);if(!oh||(oh!==String(req.headers.host).toLowerCase()&&!ORIGENS.includes(oh)))return send(res,403,{erro:'Origem não permitida.'})}
 const s=p.split('/').slice(2);
 if(req.method==='GET'&&s[0]==='motores'&&!s[1])return send(res,200,O.motores());
 if(s[0]==='pedidos'&&req.method==='POST'){const r=O.criar(await body(req));return r.erro?send(res,400,r):send(res,201,O.publico(r))}
 if(s[0]==='projetos'&&!s[1]&&req.method==='GET')return send(res,200,O.listar());
 if(s[0]==='projetos'&&s[1]){const pr=O.obter(s[1]);if(!pr)return send(res,404,{erro:'Projeto não encontrado.'});
  if(!s[2]&&req.method==='GET')return send(res,200,O.publico(pr));
  if(s[2]==='aprovar'&&req.method==='POST')return send(res,200,O.publico(O.aprovar(s[1])));
  if(s[2]==='cancelar'&&req.method==='POST'){const b=await body(req);return send(res,200,O.publico(O.cancelar(s[1],b.apagar_arquivos)))}
  if(s[2]==='eventos'&&req.method==='GET'){res.writeHead(200,{...H,'Content-Type':'text/event-stream','Connection':'keep-alive'});res.write('data: '+JSON.stringify(O.ouvir(s[1],res))+'\n\n');return}
  if(s[2]==='arquivos'&&s[3]&&req.method==='GET'){const f=O.arquivo(s[1],decodeURIComponent(s[3]));if(!f)return send(res,404,{erro:'Arquivo não encontrado.'});
   res.writeHead(200,{...H,'Content-Type':MIME[f.split('.').pop()]||'application/octet-stream','Content-Disposition':'attachment; filename="'+path.basename(f)+'"','Content-Security-Policy':'sandbox'});return fs.createReadStream(f).pipe(res)}}
 return send(res,404,{erro:'Não encontrado.'})
}catch(e){if(e&&e.s)return send(res,e.s,{erro:e.m});console.error(e);send(res,500,{erro:'Erro interno.'})}});
server.listen(PORT,HOST,()=>console.log('Vecorion Engine em http://'+HOST+':'+server.address().port));
