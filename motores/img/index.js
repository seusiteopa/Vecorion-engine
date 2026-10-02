'use strict';
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rng=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
exports.executar=async({pedido,dir})=>{
 const r=rng(parseInt(crypto.createHash('sha1').update(pedido.texto).digest('hex').slice(0,8),16)),W=1200,H=630,cx=W/2,cy=270,pts=[];
 for(let i=0;i<22;i++){const a=r()*6.283,d=110+r()*430;pts.push([cx+Math.cos(a)*d,cy+Math.sin(a)*d*.62])}
 let l='',c='';pts.forEach((p,i)=>{const q=pts[(i+1)%22];l+='<line x1="'+p[0].toFixed(1)+'" y1="'+p[1].toFixed(1)+'" x2="'+q[0].toFixed(1)+'" y2="'+q[1].toFixed(1)+'"/><line x1="'+p[0].toFixed(1)+'" y1="'+p[1].toFixed(1)+'" x2="'+cx+'" y2="'+cy+'" opacity=".4"/>';c+='<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="'+(2+r()*3).toFixed(1)+'"/>'});
 const t=esc(pedido.texto.slice(0,70));
 const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+t+'"><defs><radialGradient id="g"><stop offset="0" stop-color="#2EE6C5"/><stop offset="1" stop-color="#3BA7FF" stop-opacity="0"/></radialGradient></defs><rect width="'+W+'" height="'+H+'" fill="#0A0E14"/><g fill="none" stroke="#26334A"><circle cx="'+cx+'" cy="'+cy+'" r="150"/><circle cx="'+cx+'" cy="'+cy+'" r="270"/></g><g stroke="#3BA7FF" stroke-opacity=".35">'+l+'</g><g fill="#3BA7FF" fill-opacity=".7">'+c+'</g><circle cx="'+cx+'" cy="'+cy+'" r="30" fill="url(#g)"/><circle cx="'+cx+'" cy="'+cy+'" r="6" fill="#2EE6C5"/><text x="48" y="'+(H-48)+'" fill="#E8EEF7" font-family="system-ui,sans-serif" font-size="32">'+t+'</text></svg>';
 fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'imagem.svg'),svg);
 return [{nome:'imagem.svg'}]};
