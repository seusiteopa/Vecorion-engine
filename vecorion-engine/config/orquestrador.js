'use strict';
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const ROOT=path.join(__dirname,'..');
const CFG=JSON.parse(fs.readFileSync(path.join(ROOT,'config','config.json'),'utf8'));
const DATA=path.resolve(process.env.VECORION_DATA||path.join(ROOT,'dados'));
const RITMO=process.env.VECORION_RITMO_MS!==undefined?+process.env.VECORION_RITMO_MS:CFG.ritmo_ms;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const MOTORES={};
for(const d of fs.readdirSync(path.join(ROOT,'motores'))){const dir=path.join(ROOT,'motores',d),mf=path.join(dir,'manifesto.json');if(!fs.existsSync(mf))continue;const m=JSON.parse(fs.readFileSync(mf,'utf8')),impl=path.join(dir,'index.js');const mod=fs.existsSync(impl)?require(impl):null;m.estado=mod&&(!mod.disponivel||mod.disponivel())?'disponivel':'indisponivel';m.executar=m.estado==='disponivel'?mod.executar:null;MOTORES[m.id]=m}
const P=new Map(),L=new Map(),ID=/^[a-f0-9]{12}$/,NOME=/^[\w.-]{1,80}$/;
const pdir=id=>path.join(DATA,'projetos',id),fdir=id=>path.join(pdir(id),'arquivos');
function salvar(p){fs.mkdirSync(pdir(p.id),{recursive:true});fs.writeFileSync(path.join(pdir(p.id),'projeto.json'),JSON.stringify(p))}
const publico=p=>({id:p.id,title:p.title,kind:p.kind,steps:p.steps,i:p.i,st:p.st,log:p.log.slice(-200),files:p.arquivos.map(a=>a.nome),arquivos:p.arquivos,erro:p.erro||'',env:p.pedido.env});
function emit(p){salvar(p);const s=L.get(p.id);if(s)for(const r of s)r.write('data: '+JSON.stringify(publico(p))+'\n\n')}
try{for(const id of fs.readdirSync(path.join(DATA,'projetos'))){if(!ID.test(id))continue;try{const p=JSON.parse(fs.readFileSync(path.join(pdir(id),'projeto.json'),'utf8'));if(['exec','fix'].includes(p.st)){p.st='fail';p.erro='Interrompido por reinício do servidor.'}P.set(id,p)}catch(e){}}}catch(e){}
function planejar(q){const t=q.texto,vid=/v[ií]deo/i.test(t)||q.modo==='Vídeos',site=/site/i.test(t)||q.modo==='Sites',img=/imagen|imagem/i.test(t)||q.modo==='Imagens';
 const s=[{n:'Entender o pedido'}];
 if(vid)s.push({n:'Montar o vídeo',m:'vid'});else if(img&&!site)s.push({n:'Criar as imagens',m:'img'});else{s.push({n:'Montar o site',m:'site'});if(img)s.push({n:'Criar as imagens',m:'img'})}
 s.push({n:'Conferir o resultado'},{n:'Preparar a entrega'});return{kind:vid?'vídeo':img&&!site?'conjunto de imagens':'site',steps:s}}
function validar(arts,dir){if(!Array.isArray(arts)||!arts.length)return'nenhum arquivo gerado';
 for(const a of arts){if(!a||!NOME.test(a.nome||''))return'nome de arquivo inválido';const f=path.join(dir,a.nome);if(!fs.existsSync(f))return a.nome+' não existe';if(a.nome.endsWith('.mp4')){const b=fs.readFileSync(f);if(b.length<1000||b.slice(4,8).toString()!=='ftyp')return a.nome+' não é MP4 válido';continue}const c=fs.readFileSync(f,'utf8');if(!c.length)return a.nome+' está vazio';
  if(a.nome.endsWith('.html')&&!/<html[\s>]/i.test(c))return a.nome+' não é HTML válido';if(a.nome.endsWith('.svg')&&!/<svg[\s>]/.test(c))return a.nome+' não é SVG válido'}return true}
function falhar(p,m){p.st='fail';p.erro=m;p.log.push(m);emit(p)}
async function executar(p){p.st='exec';
 try{for(p.i=0;p.i<p.steps.length;p.i++){if(p.st==='cancel')return;const s=p.steps[p.i];p.log.push('Etapa: '+s.n+(s.m?' ('+MOTORES[s.m].nome+')':''));emit(p);await sleep(RITMO);if(p.st==='cancel')return;
  if(s.m){const mo=MOTORES[s.m];if(mo.estado!=='disponivel')return falhar(p,'O motor de '+mo.nome.replace('Motor de ','').toLowerCase()+' ainda não está disponível neste ambiente.');
   let ok=false;for(let t=1;t<=CFG.max_tentativas&&!ok;t++){const arts=await mo.executar({pedido:p.pedido,dir:fdir(p.id),tentativa:t});if(p.st==='cancel')return;const v=validar(arts,fdir(p.id));
    if(v===true){for(const a of arts)if(!p.arquivos.some(x=>x.nome===a.nome))p.arquivos.push({nome:a.nome,motor:s.m});ok=true}else{s.fixed=1;p.st='fix';p.log.push('Validação falhou: '+v+'. Corrigindo.');emit(p);await sleep(RITMO);if(p.st==='fix')p.st='exec'}}
   if(!ok)return falhar(p,'A saída do motor não passou na validação após '+CFG.max_tentativas+' tentativas.')}
  else if(s.n==='Conferir o resultado'){const v=validar(p.arquivos,fdir(p.id));if(v!==true)return falhar(p,'Conferência final falhou: '+v+'.')}
  s.done=1}
  if(p.st==='cancel')return;p.i=p.steps.length;p.st='ok';p.log.push('Concluído.');emit(p)}
 catch(e){if(e&&e.publico)return falhar(p,e.message);console.error(e);falhar(p,'Erro inesperado em um motor.')}}
function criar(b){const MODOS=['Automático','Sites','Imagens','Vídeos'],ENVS=['Automático','Local','Nuvem','Híbrido'];
 const texto=typeof b.texto==='string'?b.texto.trim():'';if(!texto||texto.length>CFG.max_texto)return{erro:'Descreva o pedido em até '+CFG.max_texto+' caracteres.'};
 const modo=b.modo===undefined?'Automático':b.modo,env=b.env===undefined?'Automático':b.env,plano=b.plano==='r'?'r':'a',dur=b.dur===undefined?0:+b.dur;
 if(!MODOS.includes(modo)||!ENVS.includes(env)||!Number.isFinite(dur)||dur<0||dur>1e6)return{erro:'Opções inválidas.'};
 const id=crypto.randomBytes(6).toString('hex'),pl=planejar({texto,modo});
 const p={id,title:texto.slice(0,60),kind:pl.kind,steps:pl.steps,i:0,st:plano==='r'?'plan':'exec',log:['Pedido recebido. O Core está planejando.'],arquivos:[],erro:'',pedido:{texto,modo,env,plano,dur},criado:Date.now()};
 P.set(id,p);if(plano==='r'){p.log.push('Plano pronto, '+p.steps.length+' etapas.');emit(p)}else executar(p);return p}
const aprovar=id=>{const p=P.get(id);if(p&&p.st==='plan'){p.log.push('Plano aprovado. Execução iniciada.');executar(p)}return p};
const cancelar=(id,ap)=>{const p=P.get(id);if(!p||['ok','cancel','fail'].includes(p.st))return p;p.st='cancel';p.log.push('Cancelado.');if(ap===true){fs.rmSync(fdir(id),{recursive:true,force:true});p.arquivos=[]}emit(p);return p};
const arquivo=(id,nome)=>{if(!ID.test(id)||!NOME.test(nome))return null;const p=P.get(id);if(!p||!p.arquivos.some(a=>a.nome===nome))return null;const f=path.join(fdir(id),nome);return fs.existsSync(f)?f:null};
const ouvir=(id,res)=>{const p=P.get(id);if(!p)return null;if(!L.has(id))L.set(id,new Set());L.get(id).add(res);res.on('close',()=>L.get(id).delete(res));return publico(p)};
module.exports={CFG,ID,publico,criar,aprovar,cancelar,arquivo,ouvir,obter:id=>ID.test(id)?P.get(id):null,listar:()=>[...P.values()].sort((a,b)=>b.criado-a.criado).map(publico),motores:()=>Object.values(MOTORES).map(m=>({id:m.id,nome:m.nome,descricao:m.descricao,estado:m.estado,formatos:m.formatos,nota:m.nota}))};
