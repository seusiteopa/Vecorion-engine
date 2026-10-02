'use strict';
const fs=require('fs'),path=require('path');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
exports.executar=async({pedido,dir})=>{
 const t=esc(pedido.texto.slice(0,120));
 const html='<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+t+'</title><meta name="description" content="'+t+'"><style>:root{color-scheme:light dark;--bg:#0A0E14;--t:#E8EEF7;--a:#3BA7FF}@media(prefers-color-scheme:light){:root{--bg:#F6F8FB;--t:#0F1A2B;--a:#0B6FD6}}body{margin:0;font:1rem/1.6 system-ui,sans-serif;background:var(--bg);color:var(--t)}main{max-width:60ch;margin:0 auto;padding:12vh 1.25rem}h1{font-size:clamp(1.75rem,5vw,3rem);line-height:1.15}.nota{opacity:.75}</style></head><body><main><h1>'+t+'</h1><p class="nota">Página-base gerada pelo Motor de Sites. O conteúdo ainda precisa ser definido: nenhum texto comercial foi inventado.</p></main></body></html>';
 fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),html);
 return [{nome:'index.html'}]};
