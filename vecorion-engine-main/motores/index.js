'use strict';
// Motor de Vídeos v0: abertura animada (fundo em gradiente, título com fade, barra de progresso) em MP4/H.264.
// Usa o FFmpeg instalado na máquina (variável VECORION_FFMPEG para indicar o caminho). Sem dependências npm.
// Segurança: o texto do pedido NUNCA entra nos argumentos do processo. Vai para um arquivo de texto lido
// pelo filtro com expansion=none. Os argumentos são fixos, sem shell, com prazo e limite de tamanho.
const fs=require('fs'),path=require('path'),{spawn,spawnSync}=require('child_process');
const FF=process.env.VECORION_FFMPEG||'ffmpeg',MAX_SEG=60,PRAZO_MS=120000,PADRAO_SEG=8,W=1280,H=720,FPS=30;
const erro=m=>Object.assign(new Error(m),{publico:true});
exports.disponivel=()=>{try{return spawnSync(FF,['-version'],{timeout:5000,stdio:'ignore'}).status===0}catch(e){return false}};
const FONTES=['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf','/usr/share/fonts/dejavu/DejaVuSans-Bold.ttf','/Library/Fonts/Arial Bold.ttf','/System/Library/Fonts/Supplemental/Arial Bold.ttf','C:/Windows/Fonts/arialbd.ttf','C:/Windows/Fonts/arial.ttf'];
const fonte=()=>FONTES.find(f=>fs.existsSync(f))||null;
const fesc=s=>String(s).replace(/\\/g,'/').replace(/[:,'\[\];]/g,c=>'\\'+c);
function segundos(p){if(p.dur>0)return p.dur*60;const m=p.texto.match(/(\d+(?:[.,]\d+)?)\s*(segundos?|seg|minutos?|min)\b/i);
 if(m){const n=parseFloat(m[1].replace(',','.'));return /^m/i.test(m[2])?n*60:n}return PADRAO_SEG}
function quebrar(t,max){const out=[];let l='';for(const w of t.split(/\s+/)){if((l+' '+w).trim().length>max&&l){out.push(l);l=w}else l=(l+' '+w).trim()}if(l)out.push(l);return out.slice(0,5).join('\n')}
exports.executar=async({pedido,dir,tentativa})=>{
 if(!exports.disponivel())throw erro('O motor de vídeos precisa do FFmpeg instalado nesta máquina (ou VECORION_FFMPEG apontando para ele).');
 const seg=Math.round(segundos(pedido)*10)/10;
 if(!(seg>0)||seg>MAX_SEG)throw erro('O motor de vídeos (v0) gera até '+MAX_SEG+' s por vídeo, e o pedido pede '+seg+' s. Reduza a duração.');
 fs.mkdirSync(dir,{recursive:true});
 const txt=path.join(dir,'.titulo.txt'),saida='video.mp4',tmp='.video.tmp.mp4',f=fonte();
 fs.writeFileSync(txt,quebrar(pedido.texto.slice(0,120),28));
 // tentativa 2 (correção automática): sem texto, caso a fonte/drawtext não funcione nesta máquina
 const comTexto=tentativa<2&&f;
 let g='[0:v]format=yuv420p[bg];[1:v]format=yuv420p[bar];[bg][bar]overlay=x=\'-W+W*t/'+seg+'\':y=H-10[v0]';
 g+=comTexto?';[v0]drawtext=fontfile=\''+fesc(f)+'\':textfile=.titulo.txt:expansion=none:fontsize=56:fontcolor=white:line_spacing=12:x=(w-text_w)/2:y=(h-text_h)/2:alpha=\'min(1,min(t/1,('+seg+'-t)/1))\'[v]':';[v0]null[v]';
 const args=['-nostdin','-y','-loglevel','error','-f','lavfi','-i','gradients=s='+W+'x'+H+':d='+seg+':r='+FPS+':c0=0x0A0E14:c1=0x1B3A5C:speed=0.03',
  '-f','lavfi','-i','color=c=0x2EE6C5:s='+W+'x10:d='+seg+':r='+FPS,'-filter_complex',g,'-map','[v]','-t',String(seg),
  '-c:v','libx264','-preset','veryfast','-crf','23','-pix_fmt','yuv420p','-movflags','+faststart','-fs','100000000',tmp];
 let err='';
 const cod=await new Promise(ok=>{const c=spawn(FF,args,{cwd:dir,shell:false,stdio:['ignore','ignore','pipe']});
  const to=setTimeout(()=>c.kill('SIGKILL'),PRAZO_MS);c.stderr.on('data',d=>{err=(err+d).slice(-600)});
  c.on('error',e=>{err=String(e.message);clearTimeout(to);ok(-1)});c.on('close',x=>{clearTimeout(to);ok(x)})});
 fs.rmSync(txt,{force:true});
 if(cod!==0){fs.rmSync(path.join(dir,tmp),{force:true});console.error('ffmpeg falhou (tentativa '+tentativa+'):',err);return []}
 fs.renameSync(path.join(dir,tmp),path.join(dir,saida));
 return [{nome:saida}]};
