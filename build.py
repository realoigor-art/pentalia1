import os
D=os.path.dirname(os.path.abspath(__file__))
import re
h=open(D+'/base11.html').read()
def rep(a,b):
    global h
    assert h.count(a)==1,(a[:60],h.count(a))
    h=h.replace(a,b)
rep("function help(o){",open(D+'/editor.js').read()+"\n"+open(D+'/teacher.js').read()+"\nfunction help(o){")
rep("<button id=\"tB\" aria-pressed=\"false\">","<button id=\"tS\" aria-pressed=\"false\">Partitura</button><button id=\"tB\" aria-pressed=\"false\">")
rep("$('tB').textContent=T('nB');","$('tB').textContent=T('nB');$('tS').textContent=T('nS');")
rep("$('tJ').onclick=()=>setV('J');","$('tJ').onclick=()=>setV('J');$('tS').onclick=()=>setV('S');")
rep("$('tB').setAttribute('aria-pressed',v==='B');","$('tB').setAttribute('aria-pressed',v==='B');$('tS').setAttribute('aria-pressed',v==='S');")
rep("v==='B'?free():parents()}","v==='B'?free():v==='S'?scoreUI():v==='T'?teacher():parents()}")
rep('<button id="tP" aria-pressed="false">','<button id="tT" aria-pressed="false">Professor</button><button id="tP" aria-pressed="false">')
rep("$('tB').textContent=T('nB');$('tS')","$('tT').textContent=T('nT');$('tB').textContent=T('nB');$('tS')") if False else None
rep("$('tS').textContent=T('nS');","$('tS').textContent=T('nS');$('tT').textContent=T('nT');")
rep("$('tS').onclick=()=>setV('S');","$('tS').onclick=()=>setV('S');$('tT').onclick=()=>setV('T');")
rep("$('tS').setAttribute('aria-pressed',v==='S');","$('tS').setAttribute('aria-pressed',v==='S');$('tT').setAttribute('aria-pressed',v==='T');")

rep("function help(o){",open(D+'/guitar.js').read()+"\nfunction help(o){") if False else None
h=h.replace("function help(o){",open(D+'/guitar.js').read()+"\nfunction help(o){",1)
rep("function play(ms,vol){whenReady(c=>{","function play(ms,vol){if(INST==='guitar'&&view==='B'){gtPlay(ms,vol);return}whenReady(c=>{")
rep("<div class=\"cname\" id=\"cn\">&nbsp;</div><div class=\"msg\" id=\"sl\"></div><div class=\"pk\">`;","${instBar()}<div class=\"cname\" id=\"cn\">&nbsp;</div><div class=\"msg\" id=\"sl\"></div>${INST==='guitar'?gtBoardBox(gtBoard()):'<div class=\"pk\">'}`;")
rep(" W.forEach(([i,o],k)=>h+="," (INST==='guitar'?[]:W).forEach(([i,o],k)=>h+=")
rep(" B.forEach(([a,b,m])=>h+="," (INST==='guitar'?[]:B).forEach(([a,b,m])=>h+=")
rep(" h+='</div>';\n if(fm==='a')h+=`<div class=\"row\"><button class=\"btn\" id=\"hn\">"," h+=INST==='guitar'?'':'</div>';\n if(fm==='a')h+=`<div class=\"row\"><button class=\"btn\" id=\"hn\">")
rep(" $('m1').onclick=()=>{fm='n';sel=[];free()};$('m2').onclick=()=>{fm='a';sel=[];hint=false;free()};\n"," instBind();if(INST==='guitar')gtBind(press);\n $('m1').onclick=()=>{fm='n';sel=[];free()};$('m2').onclick=()=>{fm='a';sel=[];hint=false;free()};\n")
rep("$('cn').textContent=T('tap');","$('cn').textContent=T(INST==='guitar'?'gtTap':'tap');")
rep("${pianoDiag(c)}</div><p style=\"font-size:12px;color:var(--mute);margin:4px 0 8px\">${T('chScroll')}</p>","${INST==='guitar'?gtChordHtml(c):pianoDiag(c)}</div><p style=\"font-size:12px;color:var(--mute);margin:4px 0 8px\">${INST==='guitar'?'':T('chScroll')}</p>")
rep("$('chP').onclick=()=>{play(ms);chFlash(ms)};","$('chP').onclick=()=>{if(INST==='guitar'&&GTV[0])gtPlay(GTV[0].midis,1,.05);else{play(ms);chFlash(ms)}};")
rep("TM=[];ms.forEach((m,k)=>TM.push(setTimeout(()=>{play([m]);chFlash([m])},k*420)))};\n const e=document.getElementById('k'+Math.min(...ms))","TM=[];(INST==='guitar'&&GTV[0]?GTV[0].midis:ms).forEach((m,k)=>TM.push(setTimeout(()=>{play([m]);chFlash([m])},k*420)))};\n const e=document.getElementById('k'+Math.min(...ms))")
rep(" play(ms);chFlash(ms)}\nfunction chBind"," gtBindDiagrams();if(INST==='guitar'&&GTV[0])gtPlay(GTV[0].midis,1,.05);else{play(ms);chFlash(ms)}}\nfunction chBind")
rep("${pianoDiag({items:sc.items},'s')}","${INST==='guitar'?gtScaleHtml(sc):pianoDiag({items:sc.items},'s')}")
h=re.sub(r"chInst:\[[^\]]*\]","chInst:['Som sintetizado com as notas reais do acorde. Troque entre piano e violão acima.','Synthesized sound with the chord’s real notes. Switch between piano and guitar above.','Sonido sintetizado con las notas reales del acorde. Cambia entre piano y guitarra arriba.','Son synthétisé avec les vraies notes de l’accord. Passez du piano à la guitare ci-dessus.']",h)
h=re.sub(r"bT:\['Praticar no piano','Practice at the piano','Practicar con el piano','Pratiquer au piano'\]","bT:['Praticar','Practice','Practicar','Pratiquer']",h)

rep("function setV(v){TM.forEach(clearTimeout);","function setV(v){if(v!=='S')document.body.classList.remove('scm');TM.forEach(clearTimeout);")
rep("const VER='versão de teste 11 · 18/10/2026'","const VER='versão de teste 50 · 18/11/2026'")
css="""
.sc .tb{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:8px;margin-top:8px}.sc .tr{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:4px 0}.sc .tr label{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:700}
.sc .sb{padding:6px 11px;font-size:14px;min-height:40px}.sc input,.sc select,.sc textarea{font:600 14px Nunito,sans-serif;border:2px solid var(--ink);border-radius:10px;padding:6px 8px;background:var(--card);color:var(--ink);min-height:38px;max-width:100%}
.sc #scTi,.sc #scCo{flex:1;min-width:120px}.scw{overflow:auto;background:var(--card);border:1px solid var(--line);border-radius:12px;margin-top:8px;-webkit-overflow-scrolling:touch;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
.sc .msg{min-height:50px;font-size:14px;line-height:1.35;display:flex;align-items:center;justify-content:center}
.scw{margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);border-radius:0;border-left:0;border-right:0}body.scm{overflow-x:hidden}
.pal{position:fixed;right:12px;bottom:12px;z-index:30;width:min(348px,calc(100vw - 24px));background:var(--card);color:var(--ink);border:2px solid var(--ink);border-radius:20px;box-shadow:0 10px 30px rgba(0,0,0,.4)}
.pal:after{content:"";position:absolute;right:26px;bottom:-11px;width:18px;height:18px;background:var(--card);border-right:2px solid var(--ink);border-bottom:2px solid var(--ink);transform:rotate(45deg)}
.pal.hide{display:none}.pal.min .pal-b{display:none}
.pal-h{display:flex;align-items:center;gap:2px;padding:6px 6px;cursor:grab;touch-action:none;border-bottom:1px solid var(--line);-webkit-user-select:none;user-select:none}
.pal-h .grip{font-weight:700;color:var(--mute);letter-spacing:-3px;padding:0 4px 0 2px}.pal.min .pal-h{border-bottom:0}
.tabb{font:700 11.5px Nunito,sans-serif;border:1.5px solid var(--line);background:transparent;color:var(--ink);border-radius:999px;padding:5px 6px;min-height:32px;cursor:pointer;white-space:nowrap}.tabb.p{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.pal-b{padding:8px;max-height:46vh;overflow:auto;position:relative;z-index:1}.pg{display:grid;gap:6px;margin-bottom:6px}.g6{grid-template-columns:repeat(6,1fr)}.g8{grid-template-columns:repeat(8,1fr)}.g5{grid-template-columns:repeat(5,1fr)}.g4{grid-template-columns:repeat(4,1fr)}.g3{grid-template-columns:repeat(3,1fr)}.g2{grid-template-columns:repeat(2,1fr)}
.pk2{min-height:46px;border:2px solid var(--line);border-radius:12px;background:var(--bg);color:var(--ink);font:700 13px Nunito,sans-serif;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:2px;-webkit-user-select:none;user-select:none;touch-action:manipulation}
.pk2 svg{width:26px;height:34px}.pk2.p{background:var(--ink);color:var(--bg);border-color:var(--ink)}.pk2.big{font-size:20px;font-family:serif}.pk2.dy{font:italic 800 17px serif}
.pal label{display:flex;flex-direction:column;gap:3px;font-size:12px;font-weight:700}.pal .tip{font-size:12px;line-height:1.35;margin:6px 0 0;color:var(--mute)}
.g1{grid-template-columns:1fr}.pal-h{flex-wrap:wrap}.pk2.ck{font-size:14px;min-height:40px}.pk2.tg.p{background:var(--card);color:var(--ink);border-color:var(--ink)}
.scfab{position:fixed;right:14px;bottom:14px;z-index:29;width:48px;height:48px;border-radius:50%;border:2px solid var(--ink);background:var(--card);color:var(--ink);opacity:.55;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 3px 10px rgba(0,0,0,.18);animation:scfl 5.5s ease-in-out infinite;transition:opacity .2s}
.scfab:hover,.scfab:focus-visible,.scfab:active{opacity:1}.scfab:after{content:"";position:absolute;inset:-2px;border-radius:50%;border:2px solid var(--ink);opacity:0;animation:scrg 5.5s ease-out infinite}
@keyframes scfl{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}@keyframes scrg{0%,70%{transform:scale(1);opacity:0}78%{opacity:.35}100%{transform:scale(1.55);opacity:0}}
@keyframes scpop{from{opacity:0;transform:translate(24px,24px) scale(.55)}to{opacity:1;transform:none}}.pal.open{animation:scpop .24s cubic-bezier(.2,.9,.3,1.2);transform-origin:100% 100%}
.bub{position:fixed;z-index:40;display:flex;gap:6px;align-items:center;background:var(--card);border:2px solid var(--ink);border-radius:14px;padding:6px;box-shadow:0 8px 24px rgba(0,0,0,.35)}.bub input{width:130px;font:700 16px Nunito,sans-serif}.bub.hide{display:none}
@media(prefers-reduced-motion:reduce){.scfab,.scfab:after,.pal.open{animation:none}}
.rib{display:flex;flex-wrap:wrap;gap:2px;margin-top:8px;border-bottom:2px solid var(--ink)}.rt{font:800 14px Nunito,sans-serif;background:transparent;color:var(--ink);border:0;border-radius:10px 10px 0 0;padding:9px 12px;min-height:40px;cursor:pointer}.rt.p{background:var(--ink);color:var(--bg)}
.rp{display:flex;flex-wrap:wrap;gap:0;background:var(--card);border:1px solid var(--line);border-top:0;border-radius:0 0 12px 12px;padding:6px 4px}.rg{display:flex;flex-direction:column;padding:2px 10px;border-right:1px solid var(--line);min-width:0;max-width:100%}.rg:last-child{border-right:0}
.rgb{display:flex;gap:6px;align-items:center;flex:1;min-height:50px;flex-wrap:wrap}.rgb.wrap{max-width:450px}.rgl{font-size:11px;font-weight:700;color:var(--mute);text-align:center;margin-top:2px}.pk2.rb{padding:4px 12px;min-width:46px}.pk2.rb.tg{justify-content:flex-start}.rl2{display:flex;flex-direction:row!important;align-items:center;gap:6px!important;font-size:13px;font-weight:700}.rp input,.rp select{min-height:38px}.rp #scTi,.rp #scCo{width:170px}.rp #scTp{width:70px}
g.ev.ph,g.ev.ph *{color:#e11d48}
#scpp{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:60;display:flex;align-items:center;gap:10px;background:var(--ink);color:var(--bg);padding:8px 8px 8px 14px;border-radius:999px;box-shadow:0 10px 28px rgba(0,0,0,.35);font:800 14px Nunito,sans-serif;animation:ppin .22s ease-out}#scpp button{border:0;border-radius:999px;background:rgba(255,255,255,.16);color:var(--bg);font:800 13px Nunito,sans-serif;min-height:38px;padding:0 14px;cursor:pointer}#scpp .ppx{min-width:38px;padding:0}#scpp button:hover{background:rgba(255,255,255,.28)}@keyframes ppin{from{opacity:0;transform:translate(-50%,14px)}to{opacity:1;transform:translate(-50%,0)}}
.rp.closed{display:none}.rp.opening{animation:rpin .24s ease-out;transform-origin:top}@keyframes rpin{from{opacity:0;transform:translateY(-8px) scaleY(.92)}to{opacity:1;transform:none}}@media (prefers-reduced-motion:reduce){.rp.opening,#scpp{animation:none}}
.sclog{border:2px solid var(--line);border-radius:14px;background:var(--card);margin-top:10px;padding:8px 10px;font-size:13px}.sclog .lgh{display:flex;flex-wrap:wrap;gap:6px 10px;align-items:center;justify-content:space-between;margin-bottom:6px}.sclog .lgs{color:var(--mute);font-weight:700}.sclog .lgb{display:flex;gap:6px}.sclog button{border:2px solid var(--line);background:var(--bg);color:var(--ink);border-radius:10px;min-height:34px;padding:0 10px;font:700 12.5px Nunito,sans-serif;cursor:pointer}.sclog .lge{border-top:1px solid var(--line);padding:6px 0;display:flex;flex-wrap:wrap;gap:6px;align-items:center;justify-content:space-between}.sclog .lge.ok .lgv{color:var(--ok)}.sclog .lge.bad .lgv{color:var(--bad)}.sclog .lgt{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1 1 260px}.sclog .lgw{color:var(--mute)}.sclog .lgx{color:var(--bad);font-weight:800}.sclog .lgv{display:flex;gap:6px;font-weight:800}.sclog .lgc{flex-basis:100%;display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.scref{border:2px solid var(--line);border-radius:14px;background:var(--card);margin-bottom:8px;overflow:hidden}.scref-h{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:6px 10px;border-bottom:1px solid var(--line);font-size:13px}.scref-h b{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scref-c{display:flex;align-items:center;gap:6px;flex-shrink:0}.scref-c button{border:2px solid var(--line);background:var(--bg);color:var(--ink);border-radius:10px;min-width:36px;min-height:34px;font:700 13px Nunito,sans-serif;cursor:pointer}.scref-b{max-height:42vh;overflow:auto;padding:6px;text-align:center;background:#fff}.scref-b img,.scref-b canvas{max-width:none;display:block;margin:0 auto}.soon{font-size:10px;font-weight:800;background:var(--line);border-radius:6px;padding:1px 6px;margin-left:4px;text-transform:uppercase}
#scbal{display:flex;gap:4px;background:var(--ink);color:var(--bg);padding:6px;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,.35)}#scbal button{border:0;background:transparent;color:var(--bg);font:700 14px Nunito,sans-serif;padding:8px 12px;border-radius:10px;cursor:pointer;min-height:40px}#scbal button:hover,#scbal button:focus-visible{background:rgba(255,255,255,.16)}#scbal i{position:absolute;left:50%;bottom:-6px;width:12px;height:12px;background:var(--ink);transform:translateX(-50%) rotate(45deg);border-radius:2px;pointer-events:none}
.wheels{position:relative;display:flex;gap:8px;margin-bottom:8px}.wheels:after{content:"";position:absolute;left:0;right:0;top:54px;height:36px;border-radius:10px;background:color-mix(in srgb,var(--ink) 9%,transparent);pointer-events:none}
.wh{flex:1;min-width:0;height:144px;overflow-y:scroll;scroll-snap-type:y mandatory;padding:54px 0;box-sizing:border-box;scrollbar-width:none;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;-webkit-mask-image:linear-gradient(transparent,#000 28%,#000 72%,transparent);mask-image:linear-gradient(transparent,#000 28%,#000 72%,transparent);touch-action:pan-y}.wh::-webkit-scrollbar{display:none}
.wh>button{display:block;width:100%;height:36px;scroll-snap-align:center;border:0;background:none;color:var(--ink);font:700 14px Nunito,sans-serif;padding:0 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.wh .whd{font:italic 800 20px serif}
@media print{body.prt main>*:not(#v),body.prt #v>*:not(.sc),body.prt .sc>*:not(.scw),body.prt #fab,body.prt #fab2,body.prt .set,body.prt .pal{display:none!important}body.prt .scw{overflow:visible;border:0;background:#fff}body.prt #scsvg{color:#000!important}body.prt{background:#fff}}
"""
rep("\n.hide{display:none}\n","\n.hide{display:none}"+css)
open(D+'/../index.html','w').write(h)
import re
open(D+'/chk.js','w').write(re.search(r'<script>(.*)</script>',h,re.S).group(1))
