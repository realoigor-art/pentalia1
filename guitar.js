/* ---------- violão ---------- */
let INST=(()=>{try{return localStorage.getItem('pent_inst')==='guitar'?'guitar':'piano'}catch(e){return 'piano'}})();
Object.assign(X,{instL:['Instrumento','Instrument','Instrumento','Instrument'],instP:['Piano','Piano','Piano','Piano'],instG:['Violão','Guitar','Guitarra','Guitare'],
gtV:['Posições no violão (toque para ouvir)','Guitar shapes (tap to hear)','Posiciones en la guitarra (toca para oír)','Positions à la guitare (touchez pour écouter)'],
gtNo:['Não achei uma posição simples para esse acorde.','I could not find a simple shape for this chord.','No encontré una posición simple para este acorde.','Je n’ai pas trouvé de position simple pour cet accord.'],
gtScr:['Deslize para ver todas as casas →','Swipe to see all the frets →','Desliza para ver todos los trastes →','Faites défiler pour voir toutes les cases →'],
gtTap:['Toque numa casa do braço do violão.','Tap a fret on the guitar neck.','Toca un traste del mástil.','Touchez une case du manche.'],
gtStr:['cordas','strings','cuerdas','cordes'],gtFret:['casa','fret','traste','case'],gtMute:['não toque','mute','no tocar','ne pas jouer']});
const GTS=[40,45,50,55,59,64];
function pluck(c,m,t,v){const f=A4*Math.pow(2,(m-69)/12),sr=c.sampleRate,n=Math.floor(sr*1.5),buf=c.createBuffer(1,n,sr),d=buf.getChannelData(0),N=Math.max(3,Math.round(sr/f)),r=new Float32Array(N);
 let z=0;for(let i=0;i<N;i++){z=z*.62+(Math.random()*2-1)*.38;r[i]=z}
 let p=0,pr=r[N-1];for(let i=0;i<n;i++){d[i]=r[p];const q=(p+1)%N,nv=(pr+2*r[p]+r[q])*.25*.9955;pr=r[p];r[p]=nv;p=q}
 const s=c.createBufferSource(),g=c.createGain(),lp=c.createBiquadFilter(),lp2=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=Math.min(2400,Math.max(900,f*4.5));lp.Q.value=.4;lp2.type='lowpass';lp2.frequency.value=3200;
 s.buffer=buf;g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(v*1.05,t+.006);g.gain.exponentialRampToValueAtTime(v*.5,t+.35);g.gain.exponentialRampToValueAtTime(.0006,t+1.4);s.connect(lp).connect(lp2).connect(g).connect(mst);s.start(t)}
function gtPlay(ms,vol,gap){whenReady(c=>{const t=c.currentTime+.01;ms.forEach((m,k)=>pluck(c,m,t+k*(gap||.045),(vol||1)*.3/Math.sqrt(Math.max(1,ms.length*.6))))})}
function setInst(i){INST=i;try{localStorage.setItem('pent_inst',i)}catch(e){}}
function instBar(){return `<div class="row" style="justify-content:flex-start;gap:8px;margin:2px 0 6px;flex-wrap:wrap"><b style="font-size:14px">${T('instL')}</b><button class="btn${INST==='piano'?' p':''}" id="inP" style="padding:5px 14px">${T('instP')}</button><button class="btn${INST==='guitar'?' p':''}" id="inG" style="padding:5px 14px">${T('instG')}</button></div>`}
function instBind(){const a=$('inP'),b=$('inG');if(a)a.onclick=()=>{setInst('piano');sel=[];free()};if(b)b.onclick=()=>{setInst('guitar');sel=[];free()}}
/* braço interativo */
function gtBoard(opt){opt=opt||{};const FW=50,LW=34,SH=32,NF=13,W=LW+NF*FW+8,H=6*SH+30,pcs=opt.pcs||null,root=opt.root;
 let o=`<svg id="gtb" class="gtb" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block;touch-action:pan-x;color:var(--ink)" role="img" aria-label="${T('instG')}">`;
 o+=`<rect x="${LW}" y="10" width="${NF*FW}" height="${5*SH+0}" fill="var(--card)" opacity="0"/>`;
 for(let f=0;f<=NF;f++){const x=LW+f*FW;o+=`<line x1="${x}" x2="${x}" y1="${SH/2+6}" y2="${5.5*SH+6}" stroke="currentColor" stroke-width="${f===0?5:1.5}" opacity="${f===0?1:.6}"/>`;if(f>0)o+=`<text x="${x-FW/2}" y="${H-4}" text-anchor="middle" font-size="11" fill="var(--mute)">${f}</text>`}
 [3,5,7,9,12].forEach(f=>{const x=LW+(f-.5)*FW,y=3*SH+6;if(f===12){o+=`<circle cx="${x}" cy="${y-SH}" r="4.5" fill="var(--line)"/><circle cx="${x}" cy="${y+SH}" r="4.5" fill="var(--line)"/>`}else o+=`<circle cx="${x}" cy="${y}" r="4.5" fill="var(--line)"/>`});
 for(let r=0;r<6;r++){const s=5-r,y=r*SH+SH/2+6;o+=`<line x1="${LW}" x2="${LW+NF*FW}" y1="${y}" y2="${y}" stroke="currentColor" stroke-width="${(1+r*.4).toFixed(1)}" opacity=".8"/><text x="8" y="${y+4}" font-size="12" font-weight="700" fill="var(--mute)">${['E','B','G','D','A','E'][r]}</text>`}
 if(pcs){for(let r=0;r<6;r++){const s=5-r,y=r*SH+SH/2+6;for(let f=0;f<=NF;f++){const m=GTS[s]+f;if(!pcs.includes(m%12))continue;const x=f===0?LW-14:LW+(f-.5)*FW,rt=m%12===root;o+=`<circle cx="${x}" cy="${y}" r="11" fill="${rt?'var(--acc)':'var(--ink)'}" opacity="${rt?1:.85}" data-m="${m}" id="gs${s}_${f}"/><text x="${x}" y="${y+4}" text-anchor="middle" font-size="10.5" font-weight="800" fill="${rt?'var(--accink)':'var(--bg)'}" pointer-events="none">${opt.lab?opt.lab(m%12):''}</text>`}}}
 else for(let r=0;r<6;r++){const s=5-r,y=r*SH+SH/2+6;for(let f=0;f<=NF;f++){const x=f===0?LW-14:LW+(f-.5)*FW;o+=`<rect class="gtc" x="${f===0?LW-30:LW+(f-1)*FW}" y="${y-SH/2}" width="${f===0?30:FW}" height="${SH}" fill="transparent" data-s="${s}" data-f="${f}" data-cx="${x}" data-cy="${y}"/>`}}
 return o+'</svg>'}
function gtBind(press){const sv=$('gtb');if(!sv)return;sv.querySelectorAll('.gtc').forEach(r=>r.addEventListener('pointerdown',e=>{const s=+r.dataset.s,f=+r.dataset.f,m=GTS[s]+f,cx=+r.dataset.cx,cy=+r.dataset.cy;
  const d=document.createElementNS('http://www.w3.org/2000/svg','circle');d.setAttribute('cx',cx);d.setAttribute('cy',cy);d.setAttribute('r',11);d.setAttribute('fill','var(--acc)');d.setAttribute('pointer-events','none');sv.appendChild(d);setTimeout(()=>d.remove(),380);press(m%12,m,d)}))}
function gtBoardBox(html){return `<div class="gtbox" style="overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:12px;border:1px solid var(--line);background:var(--card);padding:6px 0;margin:10px 0">${html}</div><p style="font-size:12px;color:var(--mute);margin:-4px 0 6px">${T('gtScr')}</p>`}
/* posições de acorde */
function gtVoicings(c){const nb=c.items.filter(i=>!i.bass),rootI=c.items.find(i=>i.root)||c.items[0],bassI=c.items.find(i=>i.bass),rootPc=rootI.m%12,bassPc=bassI?bassI.m%12:rootPc;
 let need=[...new Set(nb.map(i=>i.m%12))];const five=(rootPc+7)%12;if(need.length>4&&need.includes(five))need=need.filter(p=>p!==five);
 const all=new Set(c.items.map(i=>i.m%12)),res=[];
 for(let b=0;b<=10;b++){const opts=GTS.map(base=>{const o=[-1];if(b<=3)o.push(0);for(let f=Math.max(1,b);f<=b+3&&f<=14;f++)o.push(f);return o.map(f=>({f,m:f<0?-1:base+f}))});
  const cur=[];const rec=(s)=>{if(s===6){const pl=cur.filter(x=>x.f>=0);if(pl.length<(need.length<3?3:4))return;const fi=cur.findIndex(x=>x.f>=0);if(cur.slice(fi).some(x=>x.f<0&&cur.slice(cur.indexOf(x)+1).some(y=>y.f>=0)))return;
    if(cur[fi].m%12!==bassPc)return;const pcs=new Set(pl.map(x=>x.m%12));if(!need.every(p=>pcs.has(p)))return;if([...pcs].some(p=>!all.has(p)))return;
    const fr=pl.filter(x=>x.f>0).map(x=>x.f);if(!fr.length&&false)return;const mn=fr.length?Math.min(...fr):0,mx=fr.length?Math.max(...fr):0;if(mx-mn>3)return;
    const mut=6-pl.length,cm=fr.filter(x=>x===mn).length,fing=fr.length-(mn>0&&cm>=2?cm-1:0);let gap=0;cur.forEach((x,i)=>{if(mn>=2&&x.f===0&&cur.slice(0,i).some(y=>y.f>0)&&cur.slice(i+1).some(y=>y.f>0))gap++});const score=mn*1.2+mut*2+(mx-mn)*1.5+(fing>4?(fing-4)*3:0)+gap*2.5-(pl.length)*.6;res.push({fr:cur.map(x=>x.f),midis:pl.map(x=>x.m),mn,score,key:cur.map(x=>x.f).join(',')});return}
   for(const o of opts[s]){cur[s]=o;rec(s+1)}cur.length=s};rec(0)}
 res.sort((a,b)=>a.score-b.score);const out=[],seen=new Set();for(const v of res){if(seen.has(v.key))continue;if(out.every(w=>Math.abs((w.mn||0)-(v.mn||0))>=3)){out.push(v);seen.add(v.key)}if(out.length>=3)break}
 return out}
function gtDiagram(v,i){const W=132,H=156,x0=26,dx=17,y0=40,dy=21,mn=v.mn>1?v.mn:1,off=mn>1?mn-1:0;let o=`<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${T('instG')} ${i+1}" style="color:var(--ink)">`;
 if(off>0)o+=`<text x="4" y="${y0+dy*.7}" font-size="12" font-weight="800" fill="var(--ink)">${mn}</text>`;
 for(let s=0;s<6;s++)o+=`<line x1="${x0+s*dx}" x2="${x0+s*dx}" y1="${y0}" y2="${y0+4*dy}" stroke="currentColor" stroke-width="1.4"/>`;
 for(let f=0;f<=4;f++)o+=`<line x1="${x0}" x2="${x0+5*dx}" y1="${y0+f*dy}" y2="${y0+f*dy}" stroke="currentColor" stroke-width="${f===0&&!off?4:1.2}"/>`;
 v.fr.forEach((f,s)=>{const x=x0+s*dx;if(f<0)o+=`<text x="${x}" y="${y0-10}" text-anchor="middle" font-size="13" font-weight="800" fill="var(--mute)">×</text>`;else if(f===0)o+=`<circle cx="${x}" cy="${y0-13}" r="4.5" fill="none" stroke="currentColor" stroke-width="1.6"/>`;else{const y=y0+(f-off-.5)*dy;o+=`<circle cx="${x}" cy="${y}" r="7" fill="currentColor"/>`}});
 return o+'</svg>'}
let GTV=[];
function gtChordHtml(c){GTV=gtVoicings(c);if(!GTV.length)return `<p style="color:var(--mute);font-size:14px;margin:8px 0">${T('gtNo')}</p>`;
 return `<p style="margin:6px 0;color:var(--mute);font-size:14px">${T('gtV')}</p><div style="display:flex;flex-wrap:wrap;gap:8px">${GTV.map((v,i)=>`<button class="btn" data-gv="${i}" style="padding:4px;border-radius:14px">${gtDiagram(v,i)}</button>`).join('')}</div>`}
function gtBindDiagrams(){document.querySelectorAll('[data-gv]').forEach(b=>b.onclick=()=>gtPlay(GTV[+b.dataset.gv].midis,1,.05))}
function gtScaleHtml(sc){const pcs=sc.items.map(x=>x.m%12),map={};sc.items.forEach(x=>map[x.m%12]=x.letter);return gtBoard({pcs,root:sc.rpc,lab:pc=>map[pc]||''})}
