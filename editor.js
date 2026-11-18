/* ===== ESCREVER PARTITURA ===== */
Object.assign(X,{
mW:['Escrever partitura','Write a score','Escribir partitura','Écrire une partition'],
scNew:['Nova','New','Nueva','Nouvelle'],scSolo:['1 pauta','1 staff','1 pentagrama','1 portée'],scPiano:['Piano (2 pautas)','Piano (2 staves)','Piano (2 pentagramas)','Piano (2 portées)'],
scTitle:['Título','Title','Título','Titre'],scComp:['Compositor','Composer','Compositor','Compositeur'],scKey:['Tonalidade','Key','Tonalidad','Tonalité'],scTime:['Compasso','Time','Compás','Mesure'],scTempo:['Andamento (♩ =)','Tempo (♩ =)','Tempo (♩ =)','Tempo (♩ =)'],
scPlay:['▶ Tocar','▶ Play','▶ Tocar','▶ Jouer'],scStop:['■ Parar','■ Stop','■ Parar','■ Arrêter'],scUndo:['↶ Desfazer','↶ Undo','↶ Deshacer','↶ Annuler'],scRedo:['↷ Refazer','↷ Redo','↷ Rehacer','↷ Rétablir'],
scDel:['Apagar','Delete','Borrar','Effacer'],scRest:['Pausa','Rest','Silencio','Silence'],scDot:['Ponto ·','Dot ·','Puntillo ·','Point ·'],scTie:['Ligadura','Tie','Ligadura','Liaison'],scChord:['Acorde','Chord','Acorde','Accord'],
scAddM:['+ Compasso','+ Measure','+ Compás','+ Mesure'],scDelM:['− Compasso','− Measure','− Compás','− Mesure'],
scB1:['Barra simples','Single barline','Barra simple','Barre simple'],scB2:['Barra dupla','Double barline','Barra doble','Double barre'],scB3:['Barra final','Final barline','Barra final','Barre finale'],scB4:['Fim de repetição','Repeat end','Fin de repetición','Fin de reprise'],scRS:['Início de repetição','Repeat start','Inicio de repetición','Début de reprise'],
scDyn:['Dinâmica','Dynamic','Dinámica','Nuance'],scArt:['Articulação','Articulation','Articulación','Articulation'],scA0:['Nenhuma','None','Ninguna','Aucune'],scA1:['Stacato','Staccato','Staccato','Staccato'],scA2:['Acento','Accent','Acento','Accent'],scA3:['Tenuto','Tenuto','Tenuto','Tenuto'],
scAcc:['Acidente','Accidental','Alteración','Altération'],scAuto:['auto','auto','auto','auto'],
scD:[['Semibreve (1)','Whole (1)','Redonda (1)','Ronde (1)'][0],'Whole (1)','Redonda (1)','Ronde (1)'],
scD2:['Mínima (1/2)','Half (1/2)','Blanca (1/2)','Blanche (1/2)'],scD3:['Semínima (1/4)','Quarter (1/4)','Negra (1/4)','Noire (1/4)'],scD4:['Colcheia (1/8)','Eighth (1/8)','Corchea (1/8)','Croche (1/8)'],scD5:['Semicolcheia (1/16)','16th (1/16)','Semicorchea (1/16)','Double croche (1/16)'],scDbg:['Diagnóstico da escrita','Handwriting log','Diagnóstico de escritura','Journal d’écriture'],scDbgOk:['Diagnóstico salvo. Envie o arquivo para melhorar o reconhecimento.','Log saved. Send the file to improve recognition.','Diagnóstico guardado. Envía el archivo para mejorar el reconocimiento.','Journal enregistré. Envoyez le fichier pour améliorer la reconnaissance.'],scDbgNo:['Não consegui salvar o diagnóstico.','Could not save the log.','No pude guardar el diagnóstico.','Impossible d’enregistrer le journal.'],gDbg:['Suporte','Support','Soporte','Assistance'],scD0:['Breve (2)','Breve (2)','Cuadrada (2)','Brève (2)'],scD7:['Semifusa (1/64)','64th (1/64)','Semifusa (1/64)','Quadruple croche (1/64)'],scD6:['Fusa (1/32)','32nd (1/32)','Fusa (1/32)','Triple croche (1/32)'],
scXml:['Exportar MusicXML','Export MusicXML','Exportar MusicXML','Exporter MusicXML'],scPrint:['Imprimir / PDF','Print / PDF','Imprimir / PDF','Imprimer / PDF'],
scCode:['Código','Code','Código','Code'],scGen:['Gerar código','Make code','Generar código','Générer le code'],scOpen:['Abrir código','Open code','Abrir código','Ouvrir le code'],scBad:['Código inválido.','Invalid code.','Código no válido.','Code invalide.'],scOk:['Partitura aberta.','Score opened.','Partitura abierta.','Partition ouverte.'],
scNewQ:['Começar uma partitura nova? A atual será apagada.','Start a new score? The current one will be erased.','¿Empezar una partitura nueva? Se borrará la actual.','Nouvelle partition ? L’actuelle sera effacée.'],
scMsg:['Escreva na pauta com a caneta ou toque para colocar a nota. Pinça com dois dedos = zoom; um dedo rola.','Write on the staff with the pen, or tap to place a note. Pinch with two fingers = zoom; one finger scrolls.','Escribe en el pentagrama con el lápiz o toca para colocar la nota. Pellizco con dos dedos = zoom; un dedo desplaza.','Écrivez sur la portée au stylet ou touchez pour placer la note. Pincez à deux doigts = zoom ; un doigt fait défiler.'],
scPen:['✎ Apple Pencil detectado: a caneta escreve; o dedo só rola a tela. Rabisque sobre notas para apagar.','✎ Apple Pencil detected: the pen writes; fingers only scroll. Scribble over notes to erase.','✎ Apple Pencil detectado: el lápiz escribe; el dedo solo desplaza. Garabatea sobre las notas para borrar.','✎ Apple Pencil détecté : le stylet écrit ; le doigt fait seulement défiler. Griffonnez sur des notes pour effacer.'],
scNoSel:['Selecione uma nota primeiro.','Select a note first.','Selecciona una nota primero.','Sélectionnez d’abord une note.'],
scPlaying:['Tocando compasso {0}','Playing measure {0}','Tocando compás {0}','Mesure {0}'],
scXmlOk:['MusicXML salvo como .txt: troque o final para .musicxml e abra no MuseScore, Sibelius ou Finale. O texto também está no campo abaixo.','MusicXML saved as .txt: rename it to .musicxml and open in MuseScore, Sibelius or Finale. The text is also in the box below.','MusicXML guardado como .txt: cámbiale la extensión a .musicxml y ábrelo en MuseScore, Sibelius o Finale. El texto también está en el cuadro de abajo.','MusicXML enregistré en .txt : renommez-le en .musicxml et ouvrez-le dans MuseScore, Sibelius ou Finale. Le texte est aussi dans la zone ci-dessous.'],scXmlCp:['MusicXML no campo abaixo: copie e cole num arquivo .musicxml.','MusicXML in the box below: copy it into a .musicxml file.','MusicXML en el cuadro de abajo: cópialo en un archivo .musicxml.','MusicXML dans la zone ci-dessous : copiez-le dans un fichier .musicxml.'],
scKeys:['Teclado: A–G nota · 1–6 duração · . ponto · R pausa · ↑↓ altura · Del apaga · Espaço toca','Keyboard: A–G note · 1–6 length · . dot · R rest · ↑↓ pitch · Del erase · Space play','Teclado: A–G nota · 1–6 duración · . puntillo · R silencio · ↑↓ altura · Supr borra · Espacio toca','Clavier : A–G note · 1–6 durée · . point · R silence · ↑↓ hauteur · Suppr efface · Espace joue'],
scHelp:['Como usar: escolha a duração, toque na pauta na altura da nota. Com a Apple Pencil, escreva direto; o dedo rola a página. Dica: "Acorde" soma notas no mesmo tempo.','How to use: pick a length, tap the staff at the pitch. With Apple Pencil, write directly; fingers scroll the page. Tip: "Chord" stacks notes on the same beat.','Cómo usar: elige la duración y toca el pentagrama a la altura de la nota. Con Apple Pencil escribe directo; el dedo desplaza. Consejo: "Acorde" apila notas.','Mode d’emploi : choisissez la durée, touchez la portée à la hauteur voulue. Avec l’Apple Pencil, écrivez directement ; le doigt fait défiler. Astuce : « Accord » empile des notes.']
});
Object.assign(X,{
scTabN:['Notas','Notes','Notas','Notes'],scTabA:['Acid.','Acc.','Alt.','Alt.'],scTabR:['Artic.','Artic.','Artic.','Artic.'],scTabD:['Dinâm.','Dyn.','Dinám.','Nuan.'],scTabC:['Comp.','Bars','Comp.','Mes.'],scTabH:['✎','✎','✎','✎'],
scKb:['Teclado','Keypad','Teclado','Clavier'],scHand:['✎ Escrita à mão','✎ Handwriting','✎ Escritura a mano','✎ Écriture manuscrite'],scFinger:['☝ Dedo também escreve','☝ Finger writes too','☝ El dedo también escribe','☝ Le doigt écrit aussi'],
scNoRec:['Não reconheci o desenho. Tente de novo, um pouco maior e com traços firmes.','I could not recognize that. Try again, a bit bigger and with firm strokes.','No reconocí el dibujo. Inténtalo de nuevo, un poco más grande y con trazos firmes.','Dessin non reconnu. Réessayez, un peu plus grand et avec des traits nets.'],
scRecN:['Reconhecido: {0}','Recognized: {0}','Reconocido: {0}','Reconnu : {0}'],scRestOf:['pausa de {0}','{0} rest','silencio de {0}','pause : {0}'],
scN32:['semibreve','whole note','redonda','ronde'],scN16:['mínima','half note','blanca','blanche'],scN8:['semínima','quarter note','negra','noire'],scN4:['colcheia','eighth note','corchea','croche'],scN2:['semicolcheia','16th note','semicorchea','double croche'],scN64:['breve','breve','cuadrada','brève'],'scN0.5':['semifusa','64th note','semifusa','quadruple croche'],scN1:['fusa','32nd note','fusa','triple croche'],
scAstac:['Staccato','Staccato','Staccato','Staccato'],scAacc:['Acento','Accent','Acento','Accent'],scAten:['Tenuto','Tenuto','Tenuto','Tenuto'],scAmarc:['Marcato','Marcato','Marcato','Marcato'],scAferm:['Fermata','Fermata','Fermata','Fermate'],
scTips:['Escreva com a caneta (ou o mouse) direto na pauta e espere meio segundo. Bolinha cheia = semínima; bolinha vazia = mínima; vazia sem haste = semibreve. Haste + 1 bandeirola = colcheia, 2 = semicolcheia (ou desenhe 1–2 vigas ligando hastes). Vários acordes: bolinhas alinhadas na mesma haste. Pausas: zigue-zague = semínima; traço curto sob a 4ª linha = semibreve; sobre a 3ª linha = mínima; ponto + barra inclinada "/" = colcheia. Ponto à direita da nota = pontuada. ♯ (cerquilha) ou ♭ (haste + bojo) desenhados logo à esquerda de uma nota. Rabisque sobre as notas para apagar. Um toque curto escreve a nota escolhida no teclado.','Write with the pen (or mouse) right on the staff and wait half a second. Filled dot = quarter note; open dot = half note; open without stem = whole note. Stem + 1 flag = eighth, 2 = sixteenth (or draw 1–2 beams joining stems). Chords: dots stacked on one stem. Rests: zigzag = quarter; short bar under the 4th line = whole; on the 3rd line = half; dot + slanted "/" = eighth. A dot to the right of a note = dotted. ♯ (hash) or ♭ (stem + bowl) drawn just left of a note. Scribble over notes to erase. A short tap writes the note chosen in the keypad.','Escribe con el lápiz (o el ratón) directo en el pentagrama y espera medio segundo. Punto lleno = negra; punto vacío = blanca; vacío sin plica = redonda. Plica + 1 corchete = corchea, 2 = semicorchea (o dibuja 1–2 barras que unan plicas). Acordes: puntos apilados en una plica. Silencios: zigzag = negra; trazo corto bajo la 4.ª línea = redonda; sobre la 3.ª línea = blanca; punto + barra inclinada "/" = corchea. Un punto a la derecha de la nota = con puntillo. ♯ o ♭ (plica + panza) dibujados justo a la izquierda de una nota. Garabatea sobre las notas para borrar. Un toque corto escribe la nota elegida en el teclado.','Écrivez au stylet (ou à la souris) directement sur la portée et attendez une demi-seconde. Point plein = noire ; point vide = blanche ; vide sans hampe = ronde. Hampe + 1 crochet = croche, 2 = double croche (ou 1–2 barres reliant les hampes). Accords : points empilés sur une hampe. Silences : zigzag = noire ; trait court sous la 4e ligne = pause ; sur la 3e ligne = demi-pause ; point + barre inclinée « / » = croche. Un point à droite de la note = pointée. ♯ ou ♭ (hampe + panse) dessinés juste à gauche d’une note. Griffonnez sur les notes pour effacer. Un appui bref écrit la note choisie dans le clavier.']
});
Object.assign(X,{
scTabX:['Cifra','Chord','Cifra','Accord'],scTabH:['✎','✎','✎','✎'],
scChPh:['Am7, C♯m, G7/B','Am7, C♯m, G7/B','Am7, Do♯m, G7/B','Am7, Do♯m, G7/B'],scChIns:['Inserir no cursor','Insert at cursor','Insertar en el cursor','Insérer au curseur'],
scChTip:['Digite ou toque nas teclas e depois toque na faixa acima da pauta para colocar a cifra. Ou escreva a cifra à mão ali (ex.: Am7, G7/B). Toque numa cifra para corrigir ou apagar.','Type or tap keys, then tap the band above the staff to place the chord. Or handwrite it there (e.g. Am7, G7/B). Tap a chord to edit or delete it.','Escribe o toca las teclas y luego toca la franja sobre el pentagrama. O escríbela a mano allí (p. ej. Am7, G7/B). Toca una cifra para corregirla o borrarla.','Saisissez ou touchez les touches, puis touchez la bande au-dessus de la portée. Ou écrivez l’accord à la main (ex. Am7, G7/B). Touchez un accord pour le corriger ou le supprimer.'],
scChBad:['Cifra não reconhecida — corrija o texto (ex.: Am7, C♯m, G7/B).','Chord not valid — fix the text (e.g. Am7, C♯m, G7/B).','Cifra no válida — corrige el texto (p. ej. Am7, C♯m, G7/B).','Accord non valide — corrigez le texte (ex. Am7, C♯m, G7/B).'],
scChSet:['Cifra: {0}','Chord: {0}','Cifra: {0}','Accord : {0}'],scChRead:['Li “{0}” — confirme ou corrija','Read “{0}” — confirm or fix','Leí “{0}” — confirma o corrige','Lu « {0} » — confirmez ou corrigez'],
scHandOff:['Modo escrita: a caneta só desenha símbolos. Toque numa nota para selecioná-la. Para colocar a nota da paleta, desligue ✎ Escrita à mão.','Writing mode: the pen only draws symbols. Tap a note to select it. To place the palette note, turn off ✎ Handwriting.','Modo escritura: el lápiz solo dibuja símbolos. Toca una nota para seleccionarla. Para colocar la nota de la paleta, desactiva ✎ Escritura a mano.','Mode écriture : le stylet ne dessine que des symboles. Touchez une note pour la sélectionner. Pour placer la note de la palette, désactivez ✎ Écriture manuscrite.'],
scHsAmend:['Completar com traços tardios (ponto, haste, bandeirola)','Complete with late strokes (dot, stem, flag)','Completar con trazos tardíos (punto, plica, corchete)','Compléter avec des traits tardifs (point, hampe, crochet)'],
scHsSnd:['Som ao escrever','Sound when writing','Sonido al escribir','Son à l’écriture'],scHsChp:['Tocar cifras na reprodução','Play chords on playback','Tocar cifras al reproducir','Jouer les accords à la lecture'],
scFab:['Abrir teclado de notas','Open note keypad','Abrir teclado de notas','Ouvrir le clavier de notes'],scTabHt:['Escrita à mão','Handwriting','Escritura a mano','Écriture manuscrite']
});
(function(){const d=X.scD;X.scD=['Semibreve (1)',d[1],d[2],d[3]]})();
const VL=[64,48,32,24,16,12,8,6,4,3,2,1.5,1,.5],SL=[64,32,16,8,4,2,1,.5],DOT=[48,24,12,6,3,1.5],DK={64:'scD0',32:'scD',16:'scD2',8:'scD3',4:'scD4',2:'scD5',1:'scD6',.5:'scD7'},SLET=[0,2,4,5,7,9,11],LN=['C','D','E','F','G','A','B'];
const TIMES=[[2,4],[3,4],[4,4],[5,4],[6,4],[2,2],[3,2],[3,8],[6,8],[9,8],[12,8]];
const DYN=['','ppp','pp','p','mp','mf','f','ff','fff','sfz'],ARTS=['','stac','acc','ten','marc','ferm'];
const ED={z:1,zUser:false,selX:false,grp:[],hand:true,finger:false,kb:true,tab:'n',palMin:false,sc:null,sel:null,cur:{m:0,s:0,t:0},dur:8,dot:false,rest:false,acc:null,chord:false,pen:false,und:[],red:[],pt:0,G:[],EV:[],W:700,lastD:[32,20],msg:'',panel:false};
ED.hs=(()=>{let h={};try{h=JSON.parse(localStorage.getItem('pent_hs'))||{}}catch(e){}return{aiAuto:!!h.aiAuto,wait:['fast','normal','long'].includes(h.wait)?h.wait:'normal',amend:h.am2===1?!!h.amend:true,snd:h.snd!==false,chp:h.chp!==false,met:h.met!==false,cnt:!!h.cnt,fol:h.fol!==false,inst:['piano','marimba','vibes','epiano','organ','musicbox','nylon','strings'].includes(h.inst)?h.inst:'piano'}})();ED.kb=false;ED.csel=null;ED.CHB=[];ED.MN=[];ED.msel=null;ED.clip=(()=>{try{return JSON.parse(localStorage.getItem('pent_clip'))}catch(e){return null}})();ED.gType='pen';ED.bub=null;
const hsSave=()=>{try{localStorage.setItem('pent_hs',JSON.stringify({...ED.hs,am2:1}))}catch(e){}};
const WAITK={fast:.65,normal:1,long:1.6},inkWait=(onlyTaps,chord)=>{const k=WAITK[ED.hs.wait||'normal'];if(!ED.hand)return onlyTaps?350:500;if(onlyTaps&&ED.tab==='x'&&ED.kb)return Math.round(350*k);return Math.round((chord?2200:1500)*k)};
const capOf=sc=>sc.num*32/sc.den;
const decomp=n=>{const o=[];while(n>0){const v=VL.find(x=>x<=n);if(!v)break;o.push(v);n-=v}return o};
const blankM=sc=>({st:sc.clefs.map(()=>decomp(capOf(sc)).map(l=>({n:null,len:l}))),bar:'n',rs:false,ch:[]});
function newScore(two){const sc={title:'',comp:'',tempo:80,f:0,num:4,den:4,clefs:two?['g','f']:['g'],ms:[]};for(let i=0;i<4;i++)sc.ms.push(blankM(sc));return sc}
const clefAt=(sc,mi,s)=>{for(let i=mi;i>=0;i--){const c=sc.ms[i]&&sc.ms[i].cl&&sc.ms[i].cl[s];if(c)return c}return sc.clefs[s]};
const dB=(sc,s)=>clefAt(sc,ED._rm==null?0:ED._rm,s)==='g'?30:18;
const keyAlt=(f,l)=>{const S=[3,0,4,1,5,2,6],F=[6,2,5,1,4,0,3];if(f>0&&S.slice(0,f).includes(l))return 1;if(f<0&&F.slice(0,-f).includes(l))return -1;return 0};
const sAlt=(sc,n)=>n.a==null?keyAlt(sc.f,((n.d%7)+7)%7):n.a;
const midiOf=(sc,n)=>SLET[((n.d%7)+7)%7]+12*(Math.floor(n.d/7)+1)+sAlt(sc,n);
function normStaff(evs,cap){const out=[];
 for(const e of evs){if(!e.n||!e.n.length){const l=out[out.length-1];if(l&&!l.n)l.len+=e.len;else out.push({n:null,len:e.len})}else out.push({...e,n:e.n.map(x=>({...x}))})}
 const res=[];
 for(const e of out){if(!e.n)decomp(e.len).forEach(l=>res.push({n:null,len:l}));else if(VL.includes(e.len))res.push(e);else{const ps=decomp(e.len);ps.forEach((l,k)=>res.push({...e,n:e.n.map(x=>({...x})),len:l,tie:k<ps.length-1?true:e.tie}))}}
 let sum=res.reduce((a,e)=>a+e.len,0);
 if(sum<cap)decomp(cap-sum).forEach(l=>res.push({n:null,len:l}));
 while(sum>cap&&res.length){const l=res[res.length-1];if(sum-l.len>=cap){sum-=l.len;res.pop()}else{const k=sum-cap;l.len-=k;sum-=k;if(!VL.includes(l.len)){res.pop();decomp(l.len).forEach(x=>res.push({...l,len:x}))}}}
 return res}
function idxAt(evs,t){let p=0;for(let i=0;i<evs.length;i++){if(t<p+evs[i].len)return i;p+=evs[i].len}return evs.length-1}
function putAt(sc,mi,si,t,len,n){const cap=capOf(sc);const m0=mi,t0=t;let rem=len;
 while(rem>0){if(mi>=sc.ms.length)sc.ms.push(blankM(sc));
  const take=Math.min(rem,cap-t),parts=decomp(take),out=[];let p=0;
  for(const e of sc.ms[mi].st[si]){const s=p,en=p+e.len;p=en;
   if(en<=t||s>=t+take)out.push({s,en,e});
   else{if(s<t)out.push({s,en:t,e:{...e,tie:undefined}});if(en>t+take)out.push({s:t+take,en,e:{n:null}}) }}
  let q=t;parts.forEach((l,k)=>{const last=k===parts.length-1&&rem-take<=0;out.push({s:q,en:q+l,e:{n:n?n.map(x=>({...x})):null,tie:n&&!last?true:undefined}});q+=l});
  out.sort((a,b)=>a.s-b.s);
  sc.ms[mi].st[si]=normStaff(out.map(o=>({...o.e,len:o.en-o.s})),cap);
  rem-=take;t+=take;if(t>=cap&&rem>0){mi++;t=0}}
 let nm=mi,nt=t;if(nt>=cap){nm=mi+1;nt=0}
 if(nm>=sc.ms.length)sc.ms.push(blankM(sc));
 return{sel:{m:m0,s:si,i:idxAt(sc.ms[m0].st[si],t0)},cur:{m:nm,s:si,t:nt}}}
const evStart=(evs,i)=>evs.slice(0,i).reduce((a,e)=>a+e.len,0);
function snap(){return JSON.stringify(ED.sc)}
function pushU(){ED.und.push(snap());if(ED.und.length>80)ED.und.shift();ED.red=[]}
function undo(){{const le=ED.hlog&&ED.hlog[ED.hlog.length-1];if(le&&!ED._noMark&&le.ok===null&&le.rec!==null&&Date.now()-le.at<10000&&ED.und.length===le.und){le.ok=false;le.auto=T('lgUndone');le.want=le.want||'—';hlSave();setTimeout(logRender,0)}}if(ED.lastAI&&Date.now()-ED.lastAI.at<10000){ED.lib=ED.lib.filter(e=>!ED.lastAI.ids.includes(e.id));libSave();ED.lastAI=null}if(!ED.und.length)return;ED.red.push(snap());ED.sc=JSON.parse(ED.und.pop());fixSel();redraw()}
function redo(){if(!ED.red.length)return;ED.und.push(snap());ED.sc=JSON.parse(ED.red.pop());fixSel();redraw()}
function fixSel(){const s=ED.sel;if(s&&!(ED.sc.ms[s.m]&&ED.sc.ms[s.m].st[s.s]&&ED.sc.ms[s.m].st[s.s][s.i]))ED.sel=null;const c=ED.cur;if(c.m>=ED.sc.ms.length||c.s>=ED.sc.clefs.length)ED.cur={m:0,s:0,t:0}}
function sSave(){try{localStorage.setItem('pent_score',JSON.stringify(ED.sc))}catch(e){}}
function curLen(){let L=ED.dur;if(ED.dot&&VL.includes(L*1.5))L=L*1.5;return L}
function selEv(){const s=ED.sel;return s?ED.sc.ms[s.m].st[s.s][s.i]:null}
function place(mi,si,t,d){const sc=ED.sc,L=curLen();
 if(d!=null)ED.lastD[si]=d;
 const evs=sc.ms[mi].st[si];
 if(ED.chord&&!ED.rest&&d!=null){const i=idxAt(evs,t),e=evs[i];if(e&&e.n&&evStart(evs,i)===t){pushU();if(!e.n.some(x=>x.d===d))e.n.push({d,a:ED.acc});e.n.sort((a,b)=>a.d-b.d);ED.sel={m:mi,s:si,i};sp([midiOf(sc,{d,a:ED.acc})]);ED.acc=null;sSave();redraw();return}}
 pushU();
 const notes=ED.rest||d==null?null:[{d,a:ED.acc}];
 const r=putAt(sc,mi,si,t,L,notes);ED.sel=r.sel;ED.selX=false;ED.cur=r.cur;
 if(notes){const e=selEv();if(e)buzz(12);sp([midiOf(sc,notes[0])],.9)}
 ED.acc=null;sSave();redraw()}
function delSel(){const s=ED.sel;if(!s)return;pushU();const evs=ED.sc.ms[s.m].st[s.s];evs[s.i]={n:null,len:evs[s.i].len};ED.sc.ms[s.m].st[s.s]=normStaff(evs,capOf(ED.sc));fixSel();sSave();redraw()}
function moveSel(dd){const e=selEv();if(!e||!e.n){return}pushU();e.n.forEach(n=>n.d=Math.max(8,Math.min(52,n.d+dd)));sSave();redraw();sp(e.n.map(n=>midiOf(ED.sc,n)),.8)}
function stepSel(k){const s=ED.sel;if(!s)return;let{m,s:st,i}=s;i+=k;if(i<0){m--;if(m<0)return;i=ED.sc.ms[m].st[st].length-1}else if(i>=ED.sc.ms[m].st[st].length){m++;if(m>=ED.sc.ms.length)return;i=0}ED.sel={m,s:st,i};ED.selX=true;redraw()}
function msg(t){ED.msg=t;const e=$('scmsg');if(e)e.textContent=t}
/* ---------- desenho ---------- */
const CLEF_G="M6.5 -40.4C6.3 -40.4 6 -40.4 5.8 -40.3C5.6 -40.2 5.7 -40.3 5.3 -40C4.9 -39.6 4 -38.8 3.5 -38.2C3.1 -37.5 2.8 -36.9 2.4 -36.2C2.1 -35.4 1.7 -34.5 1.5 -33.8C1.3 -33 1.1 -32.3 1 -31.7C0.9 -31.1 0.8 -30.8 0.7 -30.1C0.7 -29.3 0.6 -28.2 0.5 -27.2C0.5 -26.3 0.5 -25.6 0.6 -24.4C0.7 -23.3 1.8 -21.8 1.2 -20.5C0.5 -19.3 -2.1 -17.6 -3.1 -16.7C-4.1 -15.8 -4.1 -15.8 -4.6 -15.2C-5.2 -14.5 -6.1 -13.6 -6.6 -12.8C-7.1 -12.1 -7.4 -11.6 -7.7 -10.9C-8.1 -10.2 -8.6 -9.2 -8.9 -8.4C-9.2 -7.6 -9.4 -7 -9.6 -6.3C-9.8 -5.6 -9.9 -5 -10 -4.2C-10 -3.4 -10 -2.2 -10 -1.5C-9.9 -0.8 -9.8 -0.6 -9.7 -0.1C-9.6 0.4 -9.4 1 -9.2 1.5C-9 2 -8.7 2.6 -8.4 3.1C-8.2 3.5 -7.8 4 -7.6 4.4C-7.3 4.7 -7.3 4.7 -7 5.1C-6.7 5.5 -6 6.1 -5.5 6.5C-5.1 6.9 -4.9 7 -4.5 7.3C-4 7.6 -3.4 7.9 -2.8 8.2C-2.3 8.4 -1.6 8.7 -0.9 8.9C-0.3 9 0.4 9.2 1.1 9.3C1.9 9.3 3 9.3 3.6 9.3C4.2 9.3 4.5 9.3 4.9 9.3C5.4 9.2 5.9 9 6.2 9C6.5 9 6.4 8.5 6.5 9.1C6.7 9.7 6.9 11.6 7.1 12.6C7.2 13.6 7.3 14.2 7.3 15.1C7.4 16 7.4 17.3 7.3 18C7.3 18.7 7.2 18.9 7 19.3C6.9 19.7 6.7 20 6.5 20.3C6.4 20.6 6.3 20.8 6 21C5.7 21.3 5.3 21.7 4.9 21.9C4.5 22.2 4.1 22.4 3.6 22.6C3.1 22.7 2.6 22.9 2.1 23C1.6 23 1 23 0.7 23C0.4 23 0.4 23 0.1 23C-0.1 22.9 -0.5 22.8 -0.7 22.7C-1 22.6 -1.2 22.5 -1.5 22.3C-1.7 22.1 -1.9 21.8 -2 21.6C-2.2 21.5 -2.2 21.4 -2.2 21.3C-2.2 21.2 -2.4 21.2 -2.2 21.2C-1.9 21.1 -1.3 21 -0.8 20.8C-0.4 20.7 0.2 20.3 0.5 20.1C0.8 19.9 0.8 19.8 1 19.6C1.2 19.3 1.5 18.8 1.6 18.5C1.7 18.2 1.7 18.2 1.7 17.9C1.8 17.6 1.8 16.9 1.7 16.6C1.7 16.3 1.7 16.4 1.6 16.1C1.5 15.8 1.3 15.3 1.1 15C0.9 14.7 0.7 14.5 0.4 14.3C0.1 14.1 -0.4 13.9 -0.7 13.8C-1.1 13.7 -1.3 13.7 -1.6 13.7C-1.8 13.7 -2.1 13.7 -2.4 13.8C-2.7 13.9 -3 14 -3.3 14.2C-3.5 14.3 -3.7 14.4 -3.9 14.6C-4.2 14.8 -4.4 15.1 -4.6 15.4C-4.8 15.6 -4.9 15.8 -5 16.1C-5.2 16.4 -5.3 16.6 -5.3 17C-5.4 17.4 -5.5 17.9 -5.5 18.4C-5.4 18.9 -5.3 19.5 -5.2 19.9C-5.1 20.3 -4.9 20.7 -4.7 21.1C-4.4 21.5 -4.1 22 -3.8 22.3C-3.5 22.6 -3.2 22.8 -2.9 23C-2.5 23.2 -2.1 23.4 -1.7 23.5C-1.3 23.7 -1.1 23.8 -0.5 23.8C0.2 23.9 1.4 23.9 2.1 23.8C2.8 23.8 3.3 23.6 3.8 23.4C4.3 23.3 4.8 23 5.1 22.8C5.5 22.7 5.6 22.6 5.9 22.3C6.2 22.1 6.6 21.7 6.9 21.4C7.1 21.1 7.3 20.9 7.5 20.6C7.7 20.3 7.8 20 7.9 19.6C8 19.2 8.1 19.1 8.2 18.4C8.2 17.7 8.3 16.5 8.3 15.5C8.3 14.6 8.2 13.9 8.1 12.8C7.9 11.7 7.5 9.5 7.4 8.8C7.3 8.1 7.3 8.8 7.5 8.6C7.8 8.5 8.5 8.3 8.9 8.1C9.3 7.9 9.5 7.8 9.8 7.5C10.1 7.3 10.5 7.1 10.8 6.8C11.1 6.5 11.5 6 11.8 5.7C12.1 5.3 12.3 5 12.5 4.6C12.8 4.2 13 3.6 13.2 3.3C13.3 2.9 13.4 2.8 13.5 2.4C13.6 2 13.7 1.5 13.7 0.9C13.8 0.3 13.8 -0.5 13.7 -1.1C13.7 -1.6 13.6 -2.1 13.5 -2.5C13.3 -3 13.2 -3.5 13 -4C12.7 -4.6 12.3 -5.3 11.9 -5.8C11.4 -6.3 10.9 -6.9 10.3 -7.3C9.6 -7.7 8.9 -8.1 8.2 -8.4C7.5 -8.7 7 -8.8 6.3 -8.9C5.6 -9 4.6 -8.9 4.2 -8.9C3.8 -9 4.3 -8 4.1 -9.2C3.9 -10.3 2.9 -14.5 3 -15.8C3 -17.1 3.8 -16.5 4.3 -17C4.9 -17.5 5.6 -18.2 6.2 -18.8C6.7 -19.4 7 -19.7 7.4 -20.3C7.8 -20.9 8.3 -21.8 8.7 -22.4C9.1 -23.1 9.4 -23.8 9.6 -24.4C9.8 -25.1 10 -25.4 10.1 -26.1C10.3 -26.7 10.4 -27.5 10.5 -28.4C10.6 -29.2 10.6 -30.5 10.5 -31.3C10.5 -32.1 10.4 -32.3 10.3 -33C10.1 -33.7 9.8 -34.7 9.6 -35.4C9.4 -36.1 9.1 -36.7 8.8 -37.3C8.5 -38 8.1 -38.9 7.8 -39.4C7.5 -39.8 7.4 -40 7.2 -40.1C7.1 -40.3 7 -40.3 6.8 -40.4C6.7 -40.4 6.7 -40.5 6.5 -40.4ZM4.9 -5.5C5.2 -5.5 5.8 -5.5 6.2 -5.5C6.6 -5.4 6.8 -5.3 7.2 -5.2C7.6 -5 8.2 -4.8 8.5 -4.5C8.9 -4.3 9.1 -4.2 9.3 -4C9.5 -3.8 9.7 -3.6 9.9 -3.4C10.1 -3.1 10.4 -2.8 10.5 -2.5C10.7 -2.2 10.9 -1.8 11 -1.4C11.2 -1 11.3 -0.7 11.3 -0.2C11.4 0.3 11.4 1.1 11.3 1.7C11.3 2.3 11.1 2.9 10.9 3.5C10.7 4 10.4 4.6 10.1 5.1C9.8 5.6 9.5 5.9 9.2 6.2C8.9 6.5 8.6 6.6 8.3 6.8C8 7 7.5 7.3 7.4 7.3C7.2 7.4 7.5 9.3 7.1 7.3C6.7 5.2 5.2 -2.8 4.8 -4.9C4.4 -7 4.8 -5.3 4.8 -5.4C4.8 -5.5 4.7 -5.5 4.9 -5.5ZM2 -15.1C2.6 -15.5 1.9 -16 2.2 -15C2.4 -13.9 3.1 -9.9 3.3 -8.8C3.5 -7.8 3.4 -8.8 3.2 -8.7C3 -8.6 2.4 -8.5 2 -8.3C1.6 -8.1 1.2 -7.9 0.9 -7.6C0.5 -7.4 0.4 -7.3 0 -7C-0.3 -6.6 -0.9 -6.1 -1.3 -5.5C-1.6 -5 -1.9 -4.4 -2.1 -3.8C-2.3 -3.3 -2.4 -2.8 -2.5 -2.4C-2.6 -2 -2.6 -2 -2.6 -1.6C-2.6 -1.1 -2.6 -0.2 -2.5 0.3C-2.4 0.9 -2.1 1.4 -2 1.7C-1.8 2.1 -1.7 2.2 -1.5 2.5C-1.3 2.7 -1.2 2.8 -0.9 3.1C-0.6 3.3 0 3.7 0.5 4C0.9 4.2 1.8 4.5 1.8 4.4C1.9 4.3 1.1 3.8 0.8 3.4C0.5 3 0.1 2.5 -0 2.1C-0.2 1.7 -0.3 1.6 -0.3 1.1C-0.4 0.7 -0.4 -0 -0.3 -0.6C-0.2 -1.2 -0 -1.7 0.2 -2.3C0.4 -2.8 0.9 -3.4 1.1 -3.7C1.3 -4 1.4 -4 1.6 -4.2C1.8 -4.3 2.1 -4.6 2.4 -4.8C2.8 -5 3.5 -5.3 3.8 -5.3C4 -5.4 3.8 -6.2 4 -5.2C4.3 -4.2 4.9 -0.8 5.1 0.7C5.4 2.1 5.3 2.4 5.5 3.5C5.7 4.7 6.1 6.8 6.2 7.4C6.3 8.1 6.4 7.6 6.2 7.7C5.9 7.8 5.4 7.9 4.8 8C4.2 8.1 3.1 8.1 2.3 8.1C1.5 8.1 0.6 8 -0.1 7.9C-0.8 7.7 -1.3 7.6 -1.8 7.4C-2.4 7.1 -2.9 6.9 -3.5 6.5C-4 6.2 -4.5 5.7 -4.9 5.3C-5.3 4.9 -5.5 4.6 -5.8 4.1C-6.1 3.6 -6.5 3 -6.7 2.3C-7 1.6 -7.2 0.9 -7.3 0.1C-7.4 -0.6 -7.4 -1.4 -7.4 -2.1C-7.4 -2.8 -7.3 -3.3 -7.2 -4.1C-7 -4.8 -6.7 -5.8 -6.5 -6.4C-6.3 -7 -6.1 -7.3 -5.9 -7.8C-5.6 -8.3 -5.3 -8.8 -4.9 -9.3C-4.5 -9.8 -4.1 -10.2 -3.6 -10.7C-3.1 -11.2 -2.7 -11.6 -1.7 -12.3C-0.8 -13.1 1.3 -14.6 2 -15.1ZM7.3 -34.7C7.5 -34.7 7.7 -34.5 7.9 -34.4C8.1 -34.3 8.2 -34.2 8.4 -34C8.5 -33.8 8.7 -33.5 8.9 -33.2C9 -33 9 -33 9.1 -32.5C9.1 -32.1 9.2 -31.2 9.1 -30.6C9.1 -30.1 9 -29.7 8.7 -29.2C8.5 -28.6 8.2 -27.9 7.8 -27.2C7.4 -26.5 6.9 -25.7 6.3 -25C5.6 -24.2 4.7 -23.4 4.1 -22.8C3.4 -22.2 2.5 -21.6 2.2 -21.4C1.9 -21.2 2.2 -21 2.1 -21.5C2.1 -22 1.9 -23.5 1.9 -24.5C1.8 -25.5 1.8 -26.6 1.9 -27.4C1.9 -28.2 2 -28.5 2.1 -29.1C2.3 -29.7 2.4 -30.3 2.7 -30.9C2.9 -31.4 3.2 -32.1 3.5 -32.6C3.9 -33.1 4.2 -33.6 4.6 -33.9C5 -34.3 5.6 -34.6 5.9 -34.7C6.2 -34.9 6.3 -34.9 6.5 -34.9C6.7 -34.9 7 -34.8 7.3 -34.7Z";
const CLEF_F="M10.6 2.3C10.5 2.3 10.3 2.3 10.2 2.3C10 2.4 10 2.4 9.8 2.5C9.7 2.6 9.4 2.8 9.3 2.9C9.2 3.1 9.2 3.2 9.1 3.3C9.1 3.4 9 3.4 9 3.6C9 3.7 9 4 9 4.1C9 4.3 9 4.5 9.1 4.6C9.1 4.8 9.2 4.9 9.3 5C9.3 5.1 9.4 5.2 9.5 5.3C9.6 5.3 9.7 5.4 9.8 5.5C9.9 5.6 10 5.6 10.2 5.7C10.3 5.7 10.6 5.7 10.8 5.7C11 5.7 11.3 5.6 11.5 5.6C11.7 5.5 11.9 5.3 12 5.1C12.1 5 12.2 5 12.2 4.8C12.3 4.7 12.3 4.6 12.4 4.4C12.4 4.3 12.4 4 12.4 3.8C12.4 3.7 12.4 3.6 12.4 3.5C12.3 3.4 12.3 3.2 12.2 3.1C12.1 3 12 2.8 11.8 2.7C11.7 2.5 11.5 2.4 11.3 2.4C11.2 2.3 11.1 2.3 11 2.3C10.8 2.2 10.7 2.2 10.6 2.3ZM10.5 -5.7C10.4 -5.7 10.3 -5.7 10.1 -5.7C10 -5.6 10 -5.6 9.9 -5.5C9.7 -5.5 9.6 -5.4 9.5 -5.3C9.4 -5.2 9.4 -5.2 9.3 -5C9.2 -4.9 9 -4.6 9 -4.4C8.9 -4.2 9 -4 9 -3.9C9 -3.7 9 -3.7 9 -3.6C9.1 -3.4 9.1 -3.2 9.2 -3.1C9.3 -2.9 9.5 -2.8 9.6 -2.7C9.7 -2.6 9.7 -2.6 9.8 -2.5C9.9 -2.5 10.1 -2.4 10.2 -2.3C10.4 -2.3 10.7 -2.3 10.8 -2.3C11 -2.3 11 -2.3 11.2 -2.3C11.3 -2.4 11.4 -2.4 11.6 -2.5C11.7 -2.6 11.9 -2.7 12.1 -2.9C12.2 -3.1 12.3 -3.3 12.4 -3.5C12.4 -3.7 12.4 -4 12.4 -4.2C12.4 -4.3 12.4 -4.4 12.4 -4.5C12.3 -4.6 12.3 -4.7 12.2 -4.9C12.1 -5 12 -5.2 11.9 -5.3C11.7 -5.4 11.7 -5.5 11.5 -5.5C11.4 -5.6 11.4 -5.7 11.2 -5.7C11 -5.7 10.7 -5.7 10.5 -5.7ZM2.7 -7.2C2.3 -7.4 1.6 -7.7 1.2 -7.8C0.8 -7.9 0.7 -7.9 0.5 -7.9C0.2 -8 0 -8 -0.4 -8C-0.8 -8 -1.5 -8 -2 -8C-2.4 -7.9 -3 -7.8 -3.3 -7.7C-3.7 -7.6 -3.9 -7.5 -4.2 -7.4C-4.5 -7.3 -4.8 -7.2 -5.1 -7C-5.4 -6.8 -6 -6.4 -6.2 -6.2C-6.5 -6 -6.5 -6 -6.7 -5.8C-6.9 -5.7 -7.1 -5.4 -7.2 -5.3C-7.4 -5.1 -7.5 -4.9 -7.6 -4.7C-7.7 -4.5 -7.8 -4.4 -7.9 -4.1C-8.1 -3.8 -8.3 -3.1 -8.4 -2.8C-8.5 -2.5 -8.5 -2.5 -8.5 -2.3C-8.6 -2.1 -8.6 -1.8 -8.7 -1.4C-8.7 -1 -8.7 -0.2 -8.6 0.2C-8.6 0.5 -8.6 0.5 -8.5 0.7C-8.5 0.8 -8.4 1 -8.4 1.2C-8.3 1.3 -8.2 1.5 -8.1 1.7C-8 1.9 -7.9 2 -7.7 2.2C-7.6 2.4 -7.3 2.6 -7.2 2.7C-7 2.8 -6.9 2.9 -6.7 3C-6.6 3.1 -6.5 3.1 -6.3 3.2C-6.1 3.3 -5.9 3.3 -5.7 3.4C-5.5 3.4 -5.2 3.4 -4.9 3.4C-4.7 3.4 -4.5 3.4 -4.3 3.3C-4.1 3.2 -3.9 3.2 -3.7 3.1C-3.5 3 -3.3 2.9 -3.1 2.7C-3 2.6 -2.8 2.5 -2.7 2.3C-2.5 2.2 -2.4 1.9 -2.2 1.7C-2.1 1.5 -2 1.3 -2 1.1C-1.9 0.8 -1.9 0.7 -1.8 0.4C-1.8 0.2 -1.8 -0 -1.8 -0.3C-1.9 -0.5 -1.9 -0.7 -2 -0.9C-2.1 -1.2 -2.2 -1.4 -2.3 -1.6C-2.4 -1.8 -2.5 -2 -2.7 -2.2C-2.9 -2.4 -3.2 -2.6 -3.4 -2.7C-3.6 -2.9 -3.7 -2.9 -3.9 -3C-4.1 -3 -4.4 -3.1 -4.7 -3.2C-5 -3.2 -5.3 -3.2 -5.6 -3.2C-5.8 -3.1 -6 -3.1 -6.3 -3C-6.5 -2.9 -6.9 -2.7 -7 -2.7C-7.1 -2.7 -7 -2.9 -7 -3C-7 -3.1 -7 -3.3 -6.9 -3.4C-6.9 -3.5 -6.9 -3.7 -6.8 -3.9C-6.7 -4 -6.7 -4.2 -6.5 -4.4C-6.4 -4.6 -6.3 -4.8 -6.1 -5.1C-5.8 -5.3 -5.5 -5.7 -5.1 -5.9C-4.8 -6.1 -4.5 -6.2 -4.2 -6.4C-4 -6.5 -3.7 -6.6 -3.4 -6.7C-3 -6.8 -2.5 -6.9 -2.1 -6.9C-1.8 -7 -1.5 -7 -1.2 -6.9C-0.9 -6.9 -0.5 -6.8 -0.2 -6.7C0.1 -6.6 0.4 -6.5 0.6 -6.4C0.8 -6.3 0.9 -6.2 1 -6.1C1.2 -5.9 1.3 -5.8 1.5 -5.6C1.6 -5.5 1.7 -5.3 1.9 -5.1C2 -4.8 2.2 -4.4 2.4 -4.1C2.5 -3.8 2.6 -3.6 2.7 -3.2C2.8 -2.9 2.9 -2.5 3 -2.1C3 -1.7 3.1 -1.3 3.1 -0.7C3.2 -0.2 3.2 0.5 3.2 1.1C3.1 1.7 3.1 2.1 3.1 2.6C3 3.1 2.9 3.7 2.9 4.1C2.8 4.6 2.7 4.8 2.6 5.2C2.6 5.6 2.4 6 2.3 6.4C2.2 6.8 2.1 7.1 2 7.4C1.8 7.8 1.6 8.2 1.4 8.6C1.3 9 1.1 9.3 0.9 9.7C0.6 10.2 0.2 10.8 -0.1 11.3C-0.5 11.9 -0.9 12.4 -1.3 12.9C-1.7 13.3 -2 13.7 -2.4 14C-2.9 14.4 -3.3 14.8 -3.7 15.1C-4.1 15.3 -4.4 15.5 -4.8 15.8C-5.3 16 -5.9 16.3 -6.4 16.6C-7 16.9 -7.6 17.2 -8.2 17.4C-8.8 17.6 -9.7 17.9 -10 18C-10.3 18.1 -10 18 -10 18.1C-10 18.2 -10 18.4 -9.8 18.5C-9.6 18.5 -9.4 18.4 -8.9 18.3C-8.4 18.2 -7.7 18.1 -7 17.9C-6.3 17.7 -5.4 17.5 -4.8 17.3C-4.1 17 -3.7 16.8 -3.2 16.6C-2.8 16.4 -2.4 16.2 -2 16C-1.7 15.9 -1.4 15.7 -1.1 15.5C-0.8 15.3 -0.5 15.1 -0.2 14.9C0.2 14.7 0.6 14.4 0.9 14.1C1.2 13.8 1.5 13.6 1.8 13.3C2 13.1 2.1 13 2.4 12.7C2.7 12.4 3.1 12 3.4 11.6C3.8 11.2 4.1 10.8 4.4 10.3C4.7 9.9 5.2 9.1 5.5 8.7C5.7 8.3 5.9 8 6 7.7C6.2 7.3 6.3 7.2 6.4 6.8C6.6 6.4 6.8 5.8 7 5.4C7.1 5 7.1 4.9 7.2 4.5C7.3 4.1 7.4 3.6 7.5 3.2C7.6 2.8 7.6 2.5 7.6 2C7.7 1.5 7.7 0.7 7.7 0.3C7.7 -0.1 7.7 -0.3 7.6 -0.5C7.6 -0.8 7.6 -1 7.5 -1.3C7.4 -1.7 7.3 -2.1 7.2 -2.4C7.1 -2.7 7 -2.8 6.9 -3.1C6.8 -3.4 6.5 -3.8 6.3 -4.1C6.2 -4.4 6 -4.6 5.8 -4.9C5.6 -5.1 5.3 -5.4 5.1 -5.6C4.9 -5.8 4.7 -6 4.4 -6.1C4.2 -6.3 3.8 -6.6 3.5 -6.8C3.2 -7 3.1 -7.1 2.7 -7.2Z",CLEF_C="M-9.9 -15.9C-10.6 -15.9 -10 -21.2 -10 -15.9C-10 -10.6 -10.7 10.7 -10 16C-9.3 21.3 -6.7 21.3 -6 16C-5.4 10.7 -6 -10.6 -6 -15.9C-6 -21.2 -5.4 -15.9 -6.1 -15.9C-6.7 -16 -9.3 -16 -9.9 -15.9ZM8.3 -15.4C7.9 -15.6 7.3 -15.7 6.8 -15.8C6.4 -15.9 5.8 -16 5.5 -16C5.1 -16 4.9 -16 4.7 -16C4.4 -16 4.3 -16 4 -15.9C3.8 -15.9 3.5 -15.8 3.2 -15.8C2.9 -15.7 2.7 -15.7 2.4 -15.5C2.1 -15.4 1.5 -15.2 1.3 -15C1 -14.9 0.9 -14.7 0.7 -14.6C0.5 -14.5 0.4 -14.4 0.2 -14.2C0 -14 -0.2 -13.7 -0.3 -13.5C-0.4 -13.3 -0.5 -13.2 -0.5 -13.1C-0.6 -12.9 -0.7 -12.6 -0.7 -12.4C-0.7 -12.2 -0.7 -11.9 -0.7 -11.8C-0.7 -11.6 -0.6 -11.4 -0.6 -11.3C-0.5 -11.1 -0.4 -11 -0.3 -10.8C-0.2 -10.7 0 -10.4 0.1 -10.3C0.3 -10.2 0.3 -10.2 0.4 -10.1C0.6 -10 0.8 -9.9 1.1 -9.8C1.4 -9.8 1.9 -9.8 2.2 -9.8C2.5 -9.9 2.7 -10 2.8 -10C3 -10.1 3.1 -10.2 3.2 -10.3C3.4 -10.4 3.6 -10.7 3.7 -10.9C3.8 -11.1 3.9 -11.2 3.9 -11.4C3.9 -11.6 3.9 -11.9 3.9 -12.1C3.9 -12.2 4 -12.2 3.8 -12.4C3.7 -12.6 3.1 -13.2 2.9 -13.4C2.7 -13.7 2.6 -13.9 2.5 -14.1C2.5 -14.2 2.6 -14.3 2.6 -14.3C2.7 -14.4 2.7 -14.5 2.9 -14.6C3 -14.7 3.2 -14.8 3.3 -14.9C3.5 -14.9 3.7 -15 3.9 -15C4.1 -15 4.5 -15 4.7 -15C5 -15 5.2 -14.9 5.3 -14.9C5.5 -14.9 5.7 -14.8 5.9 -14.8C6.1 -14.7 6.3 -14.7 6.5 -14.5C6.7 -14.4 7 -14.2 7.2 -13.9C7.5 -13.7 7.6 -13.5 7.7 -13.2C7.9 -12.9 8 -12.6 8.1 -12.2C8.2 -11.8 8.3 -11.4 8.4 -10.9C8.4 -10.5 8.4 -10 8.4 -9.5C8.5 -8.9 8.5 -8.2 8.4 -7.6C8.4 -7 8.3 -6.4 8.3 -5.9C8.2 -5.4 8.1 -5 8 -4.7C7.8 -4.3 7.7 -4 7.6 -3.8C7.5 -3.6 7.4 -3.6 7.3 -3.5C7.1 -3.4 7 -3.3 6.8 -3.2C6.7 -3.1 6.5 -3 6.3 -3C6.1 -2.9 6.1 -2.9 5.8 -2.9C5.6 -2.9 5.1 -2.9 4.8 -2.9C4.5 -3 4.4 -3.1 4.2 -3.1C4 -3.2 3.9 -3.2 3.7 -3.3C3.6 -3.4 3.4 -3.6 3.3 -3.7C3.1 -3.8 3.1 -3.8 2.9 -4C2.7 -4.3 2.4 -4.7 2.2 -5C2 -5.3 1.9 -5.6 1.8 -6C1.6 -6.4 1.5 -7.3 1.4 -7.4C1.3 -7.4 1.3 -6.9 1.2 -6.5C1.1 -6.1 0.9 -5.6 0.8 -5.2C0.6 -4.7 0.3 -4.1 0.1 -3.7C-0.1 -3.4 -0.2 -3.2 -0.4 -2.9C-0.5 -2.6 -0.8 -2.2 -1 -1.9C-1.2 -1.6 -1.3 -1.4 -1.5 -1.2C-1.7 -1 -1.9 -0.9 -2 -0.7C-2.2 -0.6 -2.4 -0.4 -2.5 -0.4C-2.6 -0.3 -2.7 2.3 -2.7 -0.3C-2.8 -2.9 -2.7 -13.3 -2.8 -15.9C-2.8 -18.5 -2.6 -15.9 -2.8 -15.9C-3 -16 -3.8 -16 -4 -15.9C-4.2 -15.9 -4 -21.2 -4 -15.9C-4 -10.6 -4.2 10.7 -4 16C-3.8 21.3 -3 18.6 -2.8 16C-2.5 13.4 -2.8 3 -2.8 0.4C-2.8 -2.2 -2.8 0.3 -2.7 0.4C-2.6 0.4 -2.4 0.5 -2.2 0.7C-1.9 0.9 -1.6 1.2 -1.4 1.5C-1.2 1.8 -1 2 -0.8 2.3C-0.5 2.6 -0.3 3 -0.1 3.3C0.1 3.6 0.2 3.8 0.4 4.2C0.5 4.5 0.7 5 0.9 5.3C1 5.7 1.1 5.8 1.2 6.2C1.3 6.6 1.3 7.5 1.5 7.5C1.6 7.4 1.8 6.3 1.9 5.9C2 5.5 2.1 5.3 2.3 5.1C2.4 4.8 2.5 4.6 2.7 4.4C2.8 4.2 2.9 4.1 3.1 3.9C3.2 3.8 3.3 3.7 3.4 3.6C3.6 3.5 3.7 3.4 3.9 3.3C4.1 3.2 4.2 3.2 4.4 3.1C4.6 3.1 5.1 3 5.3 3C5.6 3 5.8 3 6 3.1C6.2 3.1 6.4 3.1 6.5 3.2C6.7 3.3 6.9 3.3 7 3.5C7.2 3.6 7.4 3.8 7.5 4C7.6 4.1 7.7 4.1 7.8 4.4C7.9 4.6 8.1 5.3 8.2 5.6C8.3 6 8.3 6.4 8.4 6.7C8.4 7.1 8.5 7.3 8.5 7.7C8.5 8.1 8.5 8.8 8.5 9.2C8.5 9.7 8.5 9.9 8.5 10.3C8.4 10.6 8.4 11 8.3 11.3C8.3 11.7 8.2 12.1 8.1 12.4C8 12.7 7.8 13.1 7.7 13.4C7.6 13.6 7.5 13.8 7.3 14C7.2 14.2 7 14.3 6.9 14.5C6.7 14.6 6.6 14.7 6.4 14.8C6.3 14.9 6 15 5.8 15C5.6 15.1 5.4 15.1 5.2 15.2C5 15.2 4.6 15.3 4.4 15.3C4.2 15.3 4.2 15.3 4 15.2C3.9 15.2 3.6 15.2 3.4 15.1C3.2 15 3 14.9 2.9 14.8C2.8 14.8 2.7 14.7 2.7 14.6C2.6 14.5 2.6 14.4 2.6 14.3C2.6 14.1 2.7 14 2.8 13.8C3 13.6 3.3 13.3 3.5 13.1C3.6 12.9 3.8 12.6 3.9 12.5C4 12.3 4 12.4 4 12.2C4 12.1 4 11.8 4 11.6C4 11.5 4 11.6 3.9 11.4C3.9 11.3 3.7 11 3.6 10.8C3.4 10.6 3.2 10.4 3 10.3C2.8 10.1 2.6 10.1 2.4 10C2.3 9.9 2.1 9.9 2 9.9C1.8 9.9 1.7 9.8 1.5 9.9C1.3 9.9 1 9.9 0.8 10C0.6 10.2 0.3 10.3 0.1 10.5C-0.1 10.7 -0.3 10.9 -0.4 11.1C-0.5 11.3 -0.6 11.5 -0.6 11.7C-0.7 12 -0.7 12.2 -0.6 12.5C-0.6 12.8 -0.5 13.1 -0.4 13.4C-0.3 13.7 -0.1 13.9 0 14.1C0.2 14.3 0.5 14.5 0.7 14.7C1 14.9 1.2 15.1 1.5 15.2C1.9 15.4 2.3 15.5 2.7 15.7C3 15.8 3.3 15.8 3.5 15.9C3.6 15.9 2.9 16 3.5 16C4.2 16 6.7 16 7.3 16C7.9 16 7.1 16 7.3 15.9C7.5 15.8 8.1 15.6 8.4 15.5C8.8 15.4 9 15.3 9.3 15.1C9.6 14.9 10.2 14.5 10.5 14.2C10.8 14 11 13.8 11.1 13.6C11.3 13.4 11.5 13.3 11.7 12.9C11.9 12.6 12.2 12 12.4 11.6C12.5 11.2 12.6 11.1 12.7 10.7C12.8 10.4 12.9 9.9 12.9 9.5C12.9 9 12.9 8.4 12.9 7.9C12.8 7.5 12.7 7.2 12.6 6.8C12.5 6.4 12.3 5.8 12.1 5.5C11.9 5.1 11.8 4.8 11.6 4.6C11.4 4.3 11.2 4 11 3.8C10.8 3.6 10.5 3.3 10.2 3.1C10 2.9 9.8 2.8 9.5 2.6C9.2 2.4 8.9 2.3 8.6 2.2C8.3 2.1 8.1 2 7.7 1.9C7.4 1.8 7.2 1.8 6.8 1.8C6.4 1.8 5.9 1.8 5.5 1.8C5.1 1.9 4.8 1.9 4.4 2C4 2.1 3.6 2.6 3.1 2.4C2.7 2.1 1.9 0.7 1.7 0.3C1.5 -0.2 1.5 0.2 1.7 -0.2C2 -0.6 2.7 -2 3.1 -2.2C3.5 -2.5 3.8 -1.9 4.2 -1.8C4.7 -1.7 5.3 -1.6 5.7 -1.6C6.2 -1.5 6.4 -1.5 6.7 -1.6C6.9 -1.6 6.9 -1.6 7.2 -1.6C7.6 -1.7 8.2 -1.8 8.6 -2C9 -2.1 9.4 -2.3 9.8 -2.5C10.2 -2.7 10.5 -3 10.8 -3.2C11 -3.4 11.1 -3.5 11.2 -3.7C11.4 -3.9 11.5 -4 11.7 -4.3C11.9 -4.6 12.2 -5.1 12.3 -5.5C12.5 -5.8 12.6 -6.1 12.7 -6.5C12.8 -6.9 12.8 -7.3 12.9 -7.8C12.9 -8.3 12.9 -8.9 12.9 -9.2C12.9 -9.6 12.8 -9.7 12.8 -9.9C12.8 -10.1 12.7 -10.4 12.7 -10.6C12.6 -10.9 12.6 -11.1 12.4 -11.4C12.3 -11.8 11.9 -12.4 11.7 -12.7C11.5 -13.1 11.5 -13.1 11.3 -13.3C11.1 -13.5 11 -13.7 10.7 -13.9C10.4 -14.2 10 -14.5 9.6 -14.7C9.3 -15 8.8 -15.2 8.3 -15.4Z";
function clefSvg(c,x,yb){
 if(c==='g')return `<g transform="translate(${x},${yb-8})" fill="currentColor"><path fill-rule="evenodd" d="${CLEF_G}"/></g>`

 if(c==='c'||c==='t')return `<g transform="translate(${x},${yb-(c==='c'?16:24)})" fill="currentColor"><path fill-rule="evenodd" d="${CLEF_C}"/></g>`
 return `<g transform="translate(${x},${yb-24})" fill="currentColor"><path fill-rule="evenodd" d="${CLEF_F}"/></g>`}
const KSP={s:[38,35,39,36,33,37,34],f:[34,37,33,36,32,35,31]};
function keySvg(sc,s,x,yb){let o='';const n=Math.abs(sc.f);if(!n)return o;const sh=sc.f>0,pos=(sh?KSP.s:KSP.f).slice(0,n),shift=dB(sc,s)===30?0:14,B=dB(sc,s);
 pos.forEach((d,k)=>{const y=yb-(d-shift-B)*4;o+=`<text x="${x+k*9}" y="${y+5}" font-size="17" text-anchor="middle" fill="currentColor" font-family="serif">${sh?'♯':'♭'}</text>`});return o}
function restSvg(len,x,yb,full,dot){const ym=yb-16;let o='';
 if(len>=64){o=`<rect x="${x-3}" y="${yb-24}" width="6" height="8" fill="currentColor"/>`}
 else if(full||len===32){o=`<rect x="${x-6}" y="${yb-24}" width="12" height="4.5" fill="currentColor"/>`}
 else if(len>=16){o=`<rect x="${x-6}" y="${yb-20.5}" width="12" height="4.5" fill="currentColor"/>`}
 else if(len>=8){o=`<path d="M${x-2},${ym-12} l6,7 l-6,7 l5,6 q-8,0 -4,8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>`}
 else{const fl=len>=4?1:len>=2?2:len>=1?3:4;for(let k=0;k<fl;k++){const yy=ym-6+k*7;o+=`<circle cx="${x-3-k*1.5}" cy="${yy}" r="2.2" fill="currentColor"/><path d="M${x-1-k*1.5},${yy+1} q4,0 6,-3" fill="none" stroke="currentColor" stroke-width="1.6"/>`}o+=`<path d="M${x+5},${ym-8} L${x-3-(fl-1)*1.5},${ym-6+(fl-1)*7+6}" stroke="currentColor" stroke-width="1.6"/>`}
 if(dot&&!full)o+=`<circle cx="${x+10}" cy="${ym-4}" r="1.8" fill="currentColor"/>`;return o}
function beamGroups(sc,evs,s,yb){const B=dB(sc,s),mid=B+4,beat=sc.den===8?(sc.num%3===0&&sc.num>=6?12:4):sc.den===2?16:8,out=new Map(),groups=[];let t=0,cur=null;
 evs.forEach((e,i)=>{const ok=!!e.n&&[4,2,1,.5].includes(e.len),b=Math.floor(t/beat);
  if(ok&&cur&&cur.b===b)cur.m.push(i);else{if(cur&&cur.m.length>1)groups.push(cur);cur=ok?{b,m:[i]}:null}t+=e.len});
 if(cur&&cur.m.length>1)groups.push(cur);
 groups.forEach(g=>{let sum=0;g.m.forEach(i=>{const ns=evs[i].n;sum+=ns.reduce((a,n)=>Math.abs(n.d-mid)>Math.abs(a-mid)?n.d:a,ns[0].d)-mid});const down=sum>=0;let tip=down?-1e9:1e9;
  g.m.forEach(i=>{const ds=evs[i].n.map(n=>n.d),lo=Math.min(...ds),hi=Math.max(...ds);tip=down?Math.max(tip,yb-(lo-B)*4+30):Math.min(tip,yb-(hi-B)*4-30)});
  g.down=down;g.tip=tip;g.m.forEach(i=>out.set(i,{down,tip}))});
 return{out,groups}}
function beamSvg(bg,evs){let o='';const R=(a,b,y,down)=>`<rect x="${a}" y="${down?y-4:y}" width="${Math.max(1,b-a)}" height="4" fill="currentColor"/>`;
 bg.groups.forEach(g=>{const P=g.m.map(i=>({x:bg.out.get(i).sx,len:evs[i].len}));if(P.some(p=>p.x==null))return;
  for(let lv=1;lv<=4;lv++){const thr=4/Math.pow(2,lv-1),off=(lv-1)*6,y=g.down?g.tip-off:g.tip+off;let k=0;
   while(k<P.length){if(P[k].len<=thr){let j=k;while(j+1<P.length&&P[j+1].len<=thr)j++;
     if(j>k)o+=R(P[k].x,P[j].x,y,g.down);else{const x0=P[k].x,x1=k>0?x0-8:x0+8;o+=R(Math.min(x0,x1),Math.max(x0,x1),y,g.down)}k=j+1}else k++}}});return o}
function evSvg(sc,e,x,yb,s,sel,full,nextSame,bm){
 const B=dB(sc,s),mid=B+4;let o='';const col=sel?'#2563eb':'currentColor';
 const base=VL.includes(e.len)?e.len:e.len,dotted=DOT.includes(e.len),bv=dotted?e.len/1.5:e.len;
 if(!e.n)return `<g color="${col}">${restSvg(bv,x,yb,full,dotted)}</g>`;
 const ns=[...e.n].sort((a,b)=>a.d-b.d),Y=n=>yb-(n.d-B)*4;
 const far=ns.reduce((a,n)=>Math.abs(n.d-mid)>Math.abs(a.d-mid)?n:a,ns[0]),down=bm?bm.down:far.d>=mid;
 const lo=ns[0],hi=ns[ns.length-1];
 let ledg='';for(let d=B-2;d>=lo.d;d-=2)ledg+=`<line x1="${x-9}" x2="${x+9}" y1="${yb-(d-B)*4}" y2="${yb-(d-B)*4}" stroke="currentColor" stroke-width="1.4"/>`;
 for(let d=B+10;d<=hi.d;d+=2)ledg+=`<line x1="${x-9}" x2="${x+9}" y1="${yb-(d-B)*4}" y2="${yb-(d-B)*4}" stroke="currentColor" stroke-width="1.4"/>`;
 o+=ledg;
 const open=bv>=16;let prevShift=false,shifts=[];
 ns.forEach((n,k)=>{let sh=0;if(k>0&&n.d-ns[k-1].d===1&&!shifts[k-1])sh=down?-9:9;if(down&&sh===0&&false)sh=0;shifts.push(sh)});
 ns.forEach((n,k)=>{const cx=x+shifts[k],cy=Y(n);
  o+=bv>=64?`<ellipse cx="${cx}" cy="${cy}" rx="6.2" ry="4.2" fill="none" stroke="${col}" stroke-width="2"/><line x1="${cx-9}" x2="${cx-9}" y1="${cy-5}" y2="${cy+5}" stroke="${col}" stroke-width="1.6"/><line x1="${cx+9}" x2="${cx+9}" y1="${cy-5}" y2="${cy+5}" stroke="${col}" stroke-width="1.6"/>`:bv===32?`<ellipse cx="${cx}" cy="${cy}" rx="6.2" ry="4.2" fill="none" stroke="${col}" stroke-width="2"/>`:`<ellipse cx="${cx}" cy="${cy}" rx="5.2" ry="3.8" transform="rotate(-20 ${cx} ${cy})" fill="${open?'none':col}" stroke="${col}" stroke-width="${open?1.8:1}"/>`;
  const al=sAlt(sc,n),ka=keyAlt(sc.f,((n.d%7)+7)%7);
  if(n.a!=null&&(n.a!==ka||n.a===0&&ka!==0)){if(n.a===2)o+=`<path d="M${cx-17},${cy-4} l8,8 M${cx-9},${cy-4} l-8,8" stroke="${col}" stroke-width="2"/>`;else{const g=n.a===0?'♮':n.a===1?'♯':n.a===-1?'♭':'♭♭';o+=`<text x="${cx-13}" y="${cy+5}" font-size="16" text-anchor="middle" fill="${col}" font-family="serif">${g}</text>`}}
  if(dotted)o+=`<circle cx="${cx+10}" cy="${cy-((n.d-B)%2===0?4:0)}" r="1.8" fill="${col}"/>`;
  if(e.tie){const up=down?false:true;const y0=cy+(up?-0:0);const ty=down?cy-6:cy+6;o+=`<path d="M${cx+4},${ty} q${nextSame?30:16},${down?-9:9} ${nextSame?60:32},0" fill="none" stroke="${col}" stroke-width="1.6"/>`}
 });
 if(bv<32){const sx=down?x-4.6+Math.min(0,...shifts):x+4.6+Math.max(0,...shifts);
  const y1=down?Y(hi):Y(lo),y2=down?Y(lo)+30:Y(hi)-30;
  const yEnd=down?Math.max(Y(lo)+30,yb-(mid+0)*0-(B-B)):y2;
  const ya=down?Y(hi):Y(lo),yb2=bm?bm.tip:(down?Y(lo)+30:Y(hi)-30);if(bm)bm.sx=sx;
  o+=`<line x1="${sx}" x2="${sx}" y1="${ya}" y2="${yb2}" stroke="${col}" stroke-width="1.5"/>`;
  const fl=bm?0:(bv<=.5?4:bv<=1?3:bv<=2?2:bv<=4?1:0);
  for(let k=0;k<fl;k++){const yy=down?yb2-k*6:yb2+k*6;o+=down?`<path d="M${sx},${yy} q8,-5 6,-14" fill="none" stroke="${col}" stroke-width="1.8"/>`:`<path d="M${sx},${yy} q9,6 6,15" fill="none" stroke="${col}" stroke-width="1.8"/>`}
  if(e.art){const ay=down?Y(hi)-10:Y(lo)+11;o+=artSvg(e.art,x,ORNA.includes(e.art)?Math.min(Y(hi)-14,yb-44):ay,col)}}
 else if(e.art){o+=artSvg(e.art,x,ORNA.includes(e.art)?Math.min(Y(hi)-14,yb-44):Y(lo)+11,col)}
 if(e.dyn)o+=`<text x="${x}" y="${yb+26}" font-size="14" font-style="italic" font-weight="700" font-family="serif" text-anchor="middle" fill="${col}" pointer-events="none">${DYS[e.dyn]||e.dyn}</text><rect class="nvs" data-k="dyn" x="${x-(DYS[e.dyn]||e.dyn).length*5-4}" y="${yb+12}" width="${(DYS[e.dyn]||e.dyn).length*10+8}" height="18" rx="4" fill="transparent" style="cursor:pointer"/>`;
 return o}
function artSvg(a,x,y,col){if(a==='marc')return `<path d="M${x-4},${y+4} L${x},${y-4} L${x+4},${y+4}" fill="none" stroke="${col}" stroke-width="1.6"/>`;if(a==='ferm')return `<path d="M${x-9},${y+3} Q${x},${y-13} ${x+9},${y+3}" fill="none" stroke="${col}" stroke-width="1.6"/><circle cx="${x}" cy="${y-1}" r="1.8" fill="${col}"/>`;if(a==='stac')return `<circle cx="${x}" cy="${y}" r="1.8" fill="${col}"/>`;if(a==='stacc')return `<path d="M${x},${y-5} L${x-2.4},${y+5} L${x+2.4},${y+5} Z" fill="${col}"/>`;if(a==='port')return `<line x1="${x-5}" x2="${x+5}" y1="${y+2}" y2="${y+2}" stroke="${col}" stroke-width="2"/><circle cx="${x}" cy="${y-3}" r="1.6" fill="${col}"/>`;if(a==='tr')return `<text x="${x}" y="${y+4}" font-size="15" font-weight="700" font-style="italic" font-family="serif" text-anchor="middle" fill="${col}">tr</text>`;if(a==='mord')return `<path d="M${x-8},${y} l3,-5 l3,5 l3,-5 l3,5 l3,-5" fill="none" stroke="${col}" stroke-width="1.6"/><line x1="${x-4}" x2="${x-4}" y1="${y-6}" y2="${y+6}" stroke="${col}" stroke-width="1.2"/>`;if(a==='turn')return `<path d="M${x-9},${y+3} C${x-9},${y-5} ${x-2},${y-5} ${x},${y} C${x+2},${y+5} ${x+9},${y+5} ${x+9},${y-3}" fill="none" stroke="${col}" stroke-width="1.6"/>`;if(a==='acc')return `<path d="M${x-5},${y-3} L${x+5},${y} L${x-5},${y+3}" fill="none" stroke="${col}" stroke-width="1.5"/>`;if(a==='ten')return `<line x1="${x-5}" x2="${x+5}" y1="${y}" y2="${y}" stroke="${col}" stroke-width="2"/>`;return''}
function barSvg(x,y1,y2,type,ybs){let o='';const c='currentColor';
 if(type==='n')return `<line x1="${x}" x2="${x}" y1="${y1}" y2="${y2}" stroke="${c}" stroke-width="1.3"/>`;
 if(type==='d')return `<line x1="${x-4}" x2="${x-4}" y1="${y1}" y2="${y2}" stroke="${c}" stroke-width="1.3"/><line x1="${x}" x2="${x}" y1="${y1}" y2="${y2}" stroke="${c}" stroke-width="1.3"/>`;
 if(type==='f')return `<line x1="${x-5}" x2="${x-5}" y1="${y1}" y2="${y2}" stroke="${c}" stroke-width="1.3"/><line x1="${x-1}" x2="${x-1}" y1="${y1}" y2="${y2}" stroke="${c}" stroke-width="4"/>`;
 if(type==='re'){const mid=(y1+y2)/2;return `<line x1="${x-6}" x2="${x-6}" y1="${y1}" y2="${y2}" stroke="${c}" stroke-width="1.3"/><line x1="${x-1}" x2="${x-1}" y1="${y1}" y2="${y2}" stroke="${c}" stroke-width="4"/>`+(ybs||[(y1+y2)/2+16]).map(yb=>`<circle cx="${x-12}" cy="${yb-20}" r="1.8" fill="${c}"/><circle cx="${x-12}" cy="${yb-12}" r="1.8" fill="${c}"/>`).join('')}
 return''}
function renderScore(){
 const sc=ED.sc,W=ED.W,LM=16,RM=16,ns=sc.clefs.length,cap=capOf(sc),kw=Math.abs(sc.f)*9+(sc.f?8:0);
 const pre0=44+kw+34,preN=44+kw,mwb=Math.max(150,cap*5.2+44),systems=[];let cur=[],used=0;
 const maxW=W-LM-RM-preN-6,mw=sc.ms.map(m=>{let mx=0;m.st.forEach(evs=>{const c={};let p=0;evs.forEach(e=>{if(e.n){const b=Math.floor(p/8);c[b]=(c[b]||0)+1}p+=e.len});Object.values(c).forEach(v=>{mx=Math.max(mx,v)})});return Math.min(maxW,Math.max(mwb,44+(cap/8)*mx*12))});
 sc.ms.forEach((m,i)=>{const pre=systems.length?preN:pre0,av=W-LM-RM-pre;if(cur.length&&used+mw[i]>av){systems.push({ms:cur,used,av});cur=[];used=0}cur.push(i);used+=mw[i]});
 {const pre=systems.length?preN:pre0;systems.push({ms:cur,used,av:W-LM-RM-pre,last:true})}
 const SYX=[],top=96,gap=64,sysH=(ns-1)*(32+gap)+32,sp=sysH+96;let o='';ED.G=[];ED.EV=[];ED.CHB=[];ED.MN=[];ED.SYY=[];ED.SP=sp;ED.SH=sysH;
 const H=top+systems.length*sp+10;ED.PH=H;
 o+=`<text x="${W/2}" y="34" text-anchor="middle" font-size="26" font-weight="700" font-family="serif" fill="currentColor">${esc(sc.title||'')}</text>`;
 if(sc.comp)o+=`<text x="${W-RM}" y="58" text-anchor="end" font-size="14" font-style="italic" font-family="serif" fill="currentColor">${esc(sc.comp)}</text>`;
 o+=`<text x="${LM}" y="58" font-size="13" font-family="serif" fill="currentColor" pointer-events="none">♩ = ${sc.tempo} ▾</text><line x1="${LM}" x2="${LM+74}" y1="62" y2="62" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" opacity=".5" pointer-events="none"/><rect id="scTpHit" x="${LM-6}" y="38" width="92" height="30" fill="transparent" style="cursor:pointer" role="button" aria-label="${T('tpTitle')}"/>`;
 systems.forEach((sy,si_)=>{const y0=top+si_*sp,pre=si_?preN:pre0;ED.SYY.push(y0);let scale=sy.av/sy.used;if(sy.last)scale=Math.min(scale,1.15);
  const xEnd=LM+pre+sy.used*scale;const sysX0=LM;
  for(let s=0;s<ns;s++){const yb=y0+s*(32+gap)+32;
   for(let k=0;k<5;k++){const y=yb-k*8;o+=`<line x1="${sysX0}" x2="${xEnd}" y1="${y}" y2="${y}" stroke="currentColor" stroke-width="1" opacity=".85"/>`}
   ED._rm=sy.ms[0];o+=clefSvg(clefAt(sc,sy.ms[0],s),sysX0+14,yb)+keySvg(sc,s,sysX0+44,yb);
   if(!si_){const tx=sysX0+44+kw+14;o+=`<text x="${tx}" y="${yb-17}" font-size="22" font-weight="700" font-family="serif" text-anchor="middle" fill="currentColor">${sc.num}</text><text x="${tx}" y="${yb-1}" font-size="22" font-weight="700" font-family="serif" text-anchor="middle" fill="currentColor">${sc.den}</text>`}}
  const yTop=y0,yBot=y0+(ns-1)*(32+gap)+32;
  o+=`<line x1="${sysX0}" x2="${sysX0}" y1="${yTop}" y2="${yBot}" stroke="currentColor" stroke-width="1.6"/>`;
  if(ns>1){const h=yBot-yTop;o+=`<path d="M${sysX0-3},${yTop} C${sysX0-14},${yTop+h*.15} ${sysX0-14},${yTop+h*.4} ${sysX0-8},${yTop+h/2} C${sysX0-14},${yTop+h*.6} ${sysX0-14},${yTop+h*.85} ${sysX0-3},${yBot}" fill="none" stroke="currentColor" stroke-width="3"/>`}
  let x=LM+pre;
  SYX.push({x0:LM+pre,x1:xEnd});
  sy.ms.forEach((mi,k)=>{ED._rm=mi;const m=sc.ms[mi],w=mw[mi]*scale,x1=x+w,rsPad=m.rs?10:0;
   if(ED.rpt&&ED.rpt.start===mi)o+=`<rect x="${x}" y="${yTop-6}" width="${w}" height="${yBot-yTop+12}" fill="#16a34a" opacity=".18" pointer-events="none"/>`;
   if(ED.msel&&mi>=ED.msel.a&&mi<=ED.msel.b)o+=`<rect x="${x}" y="${yTop-6}" width="${w}" height="${yBot-yTop+12}" fill="#2563eb" opacity=".14" pointer-events="none"/>`;ED.MN.push({m:mi,x:x,y:yTop-20,w:24,h:20});
   if(k===0||true)o+=`<text x="${x+2}" y="${yTop-8}" font-size="10" fill="currentColor" opacity=".7" font-family="sans-serif">${mi+1+(ED.mnOff||0)}</text>`;
   for(let s=0;s<ns;s++){const yb=y0+s*(32+gap)+32,xs=x+14+rsPad,xe=x1-16,evs=m.st[s];
    ED.G.push({m:mi,s,x0:xs,x1:xe,yb,dB:dB(sc,s),ns:x,ne:x1});
    if(m.cl&&m.cl[s]&&k>0)o+=`<g transform="translate(${x+3},${yb}) scale(.55) translate(${-(x+3)},${-yb})">${clefSvg(m.cl[s],x+3,yb)}</g>`;
    const bg=beamGroups(sc,evs,s,yb);let t=0;evs.forEach((e,i)=>{const ex=(evs.length===1&&!e.n&&e.len===cap)||(!e.n&&e.len===cap)?(xs+xe)/2:xs+(xe-xs)*t/cap+6;
     const sel=ED.sel&&ED.sel.m===mi&&ED.sel.s===s&&ED.sel.i===i;
     let nx=false;if(e.tie&&e.n){const nxt=evs[i+1]||(sc.ms[mi+1]&&sc.ms[mi+1].st[s][0]);nx=!!nxt}
     if(e.ly)o+=`<text x="${ex}" y="${yb+(s===ns-1?32:34)}" text-anchor="middle" font-size="13" font-family="serif" fill="currentColor" pointer-events="none">${esc(e.ly)}</text>`;
     o+=`<g class="ev" data-m="${mi}" data-s="${s}" data-i="${i}">${evSvg(sc,e,ex,yb,s,sel,!e.n&&e.len===cap,false,bg.out.get(i))}</g>`;
     ED.EV.push({m:mi,s,i,sy:SYX.length-1,yb,x:ex,y0:yb-32-30,y1:yb+30,ys:e.n?e.n.map(n=>yb-(n.d-dB(sc,s))*4).sort((a,b)=>a-b).reverse():[]});t+=e.len});
    o+=beamSvg(bg,evs);
    if(ED.cur.m===mi&&ED.cur.s===s){const cx=xs+(xe-xs)*ED.cur.t/cap;o+=`<line x1="${cx-6}" x2="${cx-6}" y1="${yb-44}" y2="${yb+12}" stroke="#2563eb" stroke-width="2" opacity=".75"/>`}}
   (m.ch||[]).forEach((c,ci)=>{const xs0=x+14+rsPad,cx=xs0+(x1-16-xs0)*c.t/cap,sl=ED.csel&&ED.csel.m===mi&&ED.csel.i===ci,tx=chFmt(c.x);o+=`<text x="${cx.toFixed(1)}" y="${yTop-24}" font-size="15" font-weight="700" font-family="Nunito,sans-serif" fill="${sl?'#2563eb':'currentColor'}" pointer-events="none">${esc(tx)}</text>`;ED.CHB.push({m:mi,i:ci,x:cx-4,y:yTop-44,w:tx.length*9+8,h:26,cx})});
   if(m.rs){o+=`<line x1="${x+3}" x2="${x+3}" y1="${yTop}" y2="${yBot}" stroke="currentColor" stroke-width="4"/><line x1="${x+8}" x2="${x+8}" y1="${yTop}" y2="${yBot}" stroke="currentColor" stroke-width="1.3"/>`;for(let s=0;s<ns;s++){const yb=y0+s*(32+gap)+32;o+=`<circle cx="${x+13}" cy="${yb-20}" r="1.8" fill="currentColor"/><circle cx="${x+13}" cy="${yb-12}" r="1.8" fill="currentColor"/>`}}
   o+=navSvg(m,x,x1,yTop,yBot,mi);
   const bt=m.bar;if(bt==='n'||k<sy.ms.length-1&&bt==='n')o+=barSvg(x1,yTop,yBot,'n');
   else o+=barSvg(x1,yTop,yBot,bt,sc.clefs.map((_,s)=>y0+s*(32+gap)+32));
   if(ns>1&&bt!=='n'){}
   x=x1});
  ED.G.forEach(g=>{});
 });
 o+=spansSvg(SYX);ED._rm=null;o+=`<line id="scplay" x1="-50" x2="-50" y1="0" y2="0" stroke="#e11d48" stroke-width="2.4" stroke-linecap="round" opacity=".75" pointer-events="none"/>`;
 o+=`<g id="scink" pointer-events="none" stroke="#2563eb" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ED.grp.map(p=>`<polyline points="${p.map(q=>q.x.toFixed(1)+','+q.y.toFixed(1)).join(' ')}"/>`).join('')}</g>`;
 o+=`<ellipse id="scgh" cx="-50" cy="-50" rx="5.2" ry="3.8" fill="#2563eb" opacity=".45" pointer-events="none" transform=""/>`;
 return `<svg id="scsvg" xmlns="http://www.w3.org/2000/svg" width="${Math.round(W*ED.z)}" height="${Math.round(H*ED.z)}" viewBox="0 0 ${W} ${H}" style="color:var(--ink);display:block;touch-action:none">${o}</svg>`}
function redraw(){const h=$('scsv');if(!h)return;h.innerHTML=renderScore();syncTB()}
/* ---------- interação ---------- */
const HU=8;
function sPt(ev){const sv=$('scsvg'),r=sv.getBoundingClientRect(),k=ED.W/r.width;return{x:(ev.clientX-r.left)*k,y:(ev.clientY-r.top)*k}}
function hitL(x,y,L,off){let best=null,bd=1e9;ED.G.forEach(g=>{if(x>=g.ns-4&&x<=g.ne+4&&y>=g.yb-32-34&&y<=g.yb+36){const dd=Math.abs(y-(g.yb-16));if(dd<bd){bd=dd;best=g}}});
 if(!best)return null;const cap=capOf(ED.sc);if(off==null)off=-4;const gr=Math.min(L,8);let raw=(x-best.x0-off)/(best.x1-best.x0)*cap,t=Math.round(raw/gr)*gr;t=Math.max(0,Math.min(t,Math.max(0,cap-L)));
 const d=Math.max(8,Math.min(52,best.dB+Math.round((best.yb-y)/4)));return{g:best,t,d}}
const hit=(x,y)=>hitL(x,y,curLen());
function ghost(ev){const h=sHit(ev),g=$('scgh');if(!g)return;if(!h||ED.rest||ED.hand){g.setAttribute('cx',-50);return}
 const cap=capOf(ED.sc),x=h.g.x0+(h.g.x1-h.g.x0)*h.t/cap+6,y=h.g.yb-(h.d-h.g.dB)*4;g.setAttribute('cx',x);g.setAttribute('cy',y)}
function sHit(ev){const p=sPt(ev);return hit(p.x,p.y)}
let sDown=null,inkT=null;
const drawsNow=t=>t==='pen'||t==='mouse'||(t==='touch'&&ED.finger);
const PTR=new Map();let PZ=null;
function pinchStart(){const q=[...PTR.values()],sv=$('scsvg'),r=sv.getBoundingClientRect(),mx=(q[0].x+q[1].x)/2,my=(q[0].y+q[1].y)/2;
 PZ={d0:Math.hypot(q[0].x-q[1].x,q[0].y-q[1].y)||1,z0:ED.z,z:ED.z,m:{x:mx,y:my},c:{x:mx,y:my},ox:mx-r.left,oy:my-r.top};
 const w=$('scw');w.style.overflow='hidden';sv.style.willChange='transform'}
function pinchMove(){if(!PZ)return;const q=[...PTR.values()];if(q.length<2)return;const d=Math.hypot(q[0].x-q[1].x,q[0].y-q[1].y),mx=(q[0].x+q[1].x)/2,my=(q[0].y+q[1].y)/2;
 PZ.z=Math.max(.6,Math.min(3.2,PZ.z0*d/PZ.d0));PZ.c={x:mx,y:my};const sv=$('scsvg');if(!sv)return;
 sv.style.transformOrigin=PZ.ox+'px '+PZ.oy+'px';sv.style.transform='translate('+(mx-PZ.m.x)+'px,'+(my-PZ.m.y)+'px) scale('+(PZ.z/ED.z)+')'}
function pinchEnd(){if(!PZ)return;const p=PZ;PZ=null;const sv=$('scsvg'),w=$('scw');if(w)w.style.overflow='';
 if(sv){sv.style.transform='';sv.style.transformOrigin='';sv.style.willChange=''}
 setZoom(p.z,p.m.x,p.m.y,p.c.x,p.c.y)}
function sPD0(ev){const pen=ev.pointerType==='pen';bubClose();
 if(ev.pointerType==='touch'){PTR.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});if(PTR.size>=2){if(sDown&&sDown.pl)sDown.pl.remove();sDown=null;ED.grp.length||0;pinchStart();return}}
 if(pen&&!ED.pen){ED.pen=true;const sv=$('scsvg');if(sv)sv.style.touchAction='none';msg(T('scPen'))}
 const dr=drawsNow(ev.pointerType);
 sDown={x:ev.clientX,y:ev.clientY,t:Date.now(),type:ev.pointerType,pts:[{...sPt(ev),t:Date.now()}],id:ev.pointerId,dr,sx:$('scw').scrollLeft,sy:window.scrollY};
 if(dr){clearTimeout(inkT);inkT=null;try{ev.target.setPointerCapture(ev.pointerId)}catch(e){}ev.preventDefault();
  const g=$('scink');if(g){const pl=document.createElementNS('http://www.w3.org/2000/svg','polyline');g.appendChild(pl);sDown.pl=pl}}}
function sPM0(ev){
 if(ev.pointerType==='touch'&&PTR.has(ev.pointerId)){const o=PTR.get(ev.pointerId);PTR.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});
  if(PZ&&PTR.size>=2){pinchMove();return}}
 if(sDown&&sDown.id===ev.pointerId){
  if(sDown.dr){const l=ev.getCoalescedEvents?ev.getCoalescedEvents():[];(l.length?l:[ev]).forEach(e=>sDown.pts.push({...sPt(e),t:Date.now()}));
   if(sDown.pl)sDown.pl.setAttribute('points',sDown.pts.map(q=>q.x.toFixed(1)+','+q.y.toFixed(1)).join(' '));ghost(ev)}
  else if(sDown.type==='touch'){const dx=ev.clientX-sDown.x,dy=ev.clientY-sDown.y;$('scw').scrollLeft=sDown.sx-dx;window.scrollTo(window.scrollX,sDown.sy-dy)}
  return}
 if(ev.pointerType==='pen'||ev.pointerType==='mouse')ghost(ev)}

/* ---------- arrastar a nota (segurar e mover para cima/baixo) ---------- */
let DRG={tm:0,on:false,c:null};
const dragKill=()=>{clearTimeout(DRG.tm);DRG.tm=0};
const pitchAtY=(g,y)=>Math.max(8,Math.min(52,g.dB+Math.round((g.yb-y)/4)));
function sPD(ev){if(ev.target&&ev.target.id==='scTpHit'){ev.preventDefault();tpOpen();return}balHide();NV0=null;if(ev.target&&ev.target.closest){const q=ev.target.closest('.nvs');if(q)NV0={id:ev.pointerId,el:q,x:ev.clientX,y:ev.clientY,t:Date.now()}}if(!NV0&&ED.nvSel){ED.nvSel=null;redraw()}if(ED.rpt&&ev.pointerType!=='pen'){ev.preventDefault();rptPick(ev);return}sPD0(ev);dragKill();DRG.on=false;DRG.c=null;if(!sDown||sDown.id!==ev.pointerId||PZ)return;
 const el=ev.target.closest&&ev.target.closest('g.ev');if(!el||ED.chord||ED.pend||ED.rest)return;
 const m=+el.dataset.m,s=+el.dataset.s,i=+el.dataset.i,e=ED.sc.ms[m]&&ED.sc.ms[m].st[s]&&ED.sc.ms[m].st[s][i];if(!e||!e.n)return;
 DRG.c={m,s,i,el,id:ev.pointerId};DRG.tm=setTimeout(dragStart,320)}
function dragStart(){DRG.tm=0;const c=DRG.c;if(!c||!sDown||sDown.id!==c.id||PZ)return;const g=ED.G.find(q=>q.m===c.m&&q.s===c.s),e=ED.sc.ms[c.m]&&ED.sc.ms[c.m].st[c.s][c.i];if(!g||!e||!e.n)return;
 if(sDown.pl){sDown.pl.remove();sDown.pl=null}sDown.dr=false;sDown.pts=[];ED.grp=[];const ink=$('scink');if(ink)ink.innerHTML='';
 const p=sPt({clientX:sDown.x,clientY:sDown.y});DRG.on=true;DRG.g=g;DRG.d0=pitchAtY(g,p.y);DRG.delta=0;DRG.base=e.n.map(n=>n.d);c.el.style.color='#2563eb';c.el.style.opacity='.9';buzz(15);msg(T('scDragOn'))}
function dragMove(ev){const c=DRG.c,p=sPt(ev),lo=Math.min(...DRG.base),hi=Math.max(...DRG.base);let dl=pitchAtY(DRG.g,p.y)-DRG.d0;dl=Math.max(8-lo,Math.min(52-hi,dl));
 if(dl!==DRG.delta){DRG.delta=dl;c.el.setAttribute('transform',`translate(0,${-dl*4})`);buzz(5);sp([midiOf(ED.sc,{d:DRG.base[DRG.base.length-1]+dl,a:null})],.7);msg(T('scDragNow',dName(DRG.base[DRG.base.length-1]+dl)))}}
function dragEnd(){const c=DRG.c;DRG.on=false;const dl=DRG.delta;if(!c)return;
 if(!dl){c.el.removeAttribute('transform');c.el.style.color='';c.el.style.opacity='';msg('');return}
 const e=ED.sc.ms[c.m].st[c.s][c.i];if(!e||!e.n){redraw();return}pushU();e.n.forEach((n,k)=>{n.d=DRG.base[k]+dl});ED.sel={m:c.m,s:c.s,i:c.i};ED.selX=true;sSave();redraw();msg(T('scDragDone',e.n.map(n=>dName(n.d)).join(' + ')))}
function sPM(ev){if(DRG.on&&sDown&&sDown.id===ev.pointerId){dragMove(ev);return}
 if(DRG.tm&&sDown&&sDown.id===ev.pointerId){const mv=Math.hypot(ev.clientX-sDown.x,ev.clientY-sDown.y);if(ev.pointerType==='mouse'&&mv>5){dragKill();dragStart();if(DRG.on){dragMove(ev);return}}else if(mv>9)dragKill()}
 sPM0(ev)}
function sPU(ev){if(NV0&&NV0.id===ev.pointerId){const q=NV0;NV0=null;if(Math.hypot(ev.clientX-q.x,ev.clientY-q.y)<9&&Date.now()-q.t<500){dragKill();DRG.on=false;if(sDown&&sDown.pl)sDown.pl.remove();sDown=null;if(ev.pointerType==='touch')PTR.delete(ev.pointerId);nvTap(q.el);return}}dragKill();if(DRG.on&&sDown&&sDown.id===ev.pointerId){dragEnd();sDown=null;if(ev.pointerType==='touch')PTR.delete(ev.pointerId);return}sPU0(ev)}
Object.assign(X,{scDragOn:['Arraste para cima ou para baixo e solte onde quiser a nota.','Drag up or down and release where you want the note.','Arrastra hacia arriba o abajo y suelta donde quieras la nota.','Glissez vers le haut ou le bas et relâchez où vous voulez la note.'],scDragNow:['Nota: {0}','Note: {0}','Nota: {0}','Note : {0}'],scDragDone:['Nota movida: {0}','Note moved: {0}','Nota movida: {0}','Note déplacée : {0}']});

/* ---------- memória da sua letra + IA (Claude) ---------- */
const KINDS=['dot','v','hz','zig','hf','ho','diag','fl','?'];
ED.lib=(()=>{try{const a=JSON.parse(localStorage.getItem('pent_lib'));return Array.isArray(a)?a.slice(-500):[]}catch(e){return[]}})();
const libSave=()=>{try{localStorage.setItem('pent_lib',JSON.stringify(ED.lib.slice(-500)))}catch(e){}};
function stVec(f){const m=Math.max(f.w,f.h,1),n=Math.min(f.w,f.h);return[f.w/HU,f.h/HU,Math.min(6,f.len/HU/2),Math.min(1,f.gap/(f.len+1)),Math.min(6,f.rx)/3,Math.min(6,f.ry)/3,n/m]}
function libPredict(f){if(ED.lib.length<25)return null;const v=stVec(f),d=ED.lib.map(e=>({k:e.k,d:Math.hypot(...e.v.map((x,i)=>x-v[i]))})).sort((a,b)=>a.d-b.d).slice(0,5);if(d[0].d>1.1)return null;
 const w={};let tot=0;d.forEach(e=>{const q=1/(e.d+.1);w[e.k]=(w[e.k]||0)+q;tot+=q});let bk=null,bw=0;for(const k in w)if(w[k]>bw){bw=w[k];bk=k}return bw/tot>=.75?bk:null}
function libKinds(SS){if(ED.lib.length<25)return null;const k=SS.map(q=>libPredict(stFeat(q)));return k.some(Boolean)?k:null}
function libAdd(f,k,id){ED.lib.push({k,v:stVec(f).map(x=>+x.toFixed(3)),id});if(ED.lib.length>500)ED.lib.shift()}
function aiBtnShow(){const b=$('aiBtn');if(b&&ED.aiOK)b.hidden=false}
function aiBtnHide(){const b=$('aiBtn');if(b)b.hidden=true}
function inkImage(SS){const all=SS.flat(),x0=Math.min(...all.map(p=>p.x))-26,x1=Math.max(...all.map(p=>p.x))+26,y0=Math.min(...all.map(p=>p.y))-26,y1=Math.max(...all.map(p=>p.y))+26,sc=Math.min(8,Math.max(3,520/Math.max(x1-x0,y1-y0))),cv=document.createElement('canvas');cv.width=Math.round((x1-x0)*sc);cv.height=Math.round((y1-y0)*sc);const c=cv.getContext('2d');c.fillStyle='#fff';c.fillRect(0,0,cv.width,cv.height);
 c.strokeStyle='#9aa4bd';c.lineWidth=1.4;ED.G.forEach(g=>{for(let k=0;k<5;k++){const y=(g.yb-k*8-y0)*sc;if(y>=-2&&y<=cv.height+2){c.beginPath();c.moveTo(0,y);c.lineTo(cv.width,y);c.stroke()}}});
 const cols=['#d62828','#1d4ed8','#15803d','#c2410c','#7e22ce','#0e7490','#a21caf','#4d7c0f'];
 SS.forEach((q,i)=>{c.strokeStyle=cols[i%8];c.lineWidth=2.6;c.lineCap='round';c.lineJoin='round';c.beginPath();q.forEach((p,j)=>{const X=(p.x-x0)*sc,Y=(p.y-y0)*sc;j?c.lineTo(X,Y):c.moveTo(X,Y)});c.stroke();c.fillStyle=cols[i%8];c.font='bold 18px sans-serif';c.fillText(String(i),(q[0].x-x0)*sc-14,(q[0].y-y0)*sc-8)});
 return new Promise(r=>cv.toBlob(r,'image/png'))}
const aiPrompt=n=>`You are the stroke classifier of a handwritten music-notation editor. The image shows ${n} pen stroke(s) drawn over a staff (the thin grey horizontal lines are staff lines, 8 units apart). Every stroke has its own colour and its index number (0..${n-1}) written at its starting point.
Label EACH stroke with exactly one of these codes:
dot = a tiny dot (augmentation dot or staccato)
v = a vertical straight line (note stem, barline)
hz = a horizontal line (beam, rest bar, ledger line)
zig = a zig-zag squiggle (quarter rest)
hf = a filled-in or scribbled-in oval note head
ho = an open, hollow oval note head
diag = a straight diagonal line
fl = a short curved hook (note flag)
? = anything else
Reply with only JSON like {"kinds":["hf","v","fl"],"meaning":"eighth note"} where "kinds" has exactly ${n} entries in stroke order and "meaning" is a very short musical reading of the whole drawing.`;
async function aiAsk(){const F=ED.lastFail;if(!F||ED.aiBusy)return;ED.aiBusy=true;aiBtnHide();msg(T('scAiAsk'));
 try{const sample=window.claude&&claude.use?await claude.use('sample'):null;if(!sample){msg(T('scAiNo'));return}
  const lim=await sample.limits().catch(()=>null);if(!lim||!lim.images){msg(T('scAiNo'));return}
  const blob=await inkImage(F.S),out=await sample.json(aiPrompt(F.S.length),{images:[blob],modelTier:'quick',cache:false}),kinds=out&&out.kinds;
  if(!Array.isArray(kinds)||kinds.length!==F.S.length||!kinds.every(k=>KINDS.includes(k))){msg(T('scAiNo'));return}
  const r=recog(F.S,kinds);if(!r){msg(T('scAiNo'));return}
  const n0=ED.und.length;applyRec(r);
  if(ED.und.length>n0){const id=Date.now();F.S.forEach((q,i)=>libAdd(stFeat(q),kinds[i],id));libSave();ED.lastAI={at:Date.now(),ids:[id]};ED.lastFail=null;if(out.meaning)msg(T('scAiOk',String(out.meaning).slice(0,60),ED.lib.length))}else msg(T('scAiNo'))
 }catch(e){msg(T(e&&e.code==='not_granted'?'scAiOff':'scAiNo'))}finally{ED.aiBusy=false}}
document.addEventListener('click',e=>{if(e.target&&e.target.id==='aiBtn')aiAsk()});
try{if(window.claude&&claude.use)claude.use('sample').then(f=>{ED.aiOK=!!f},()=>{})}catch(e){}
Object.assign(X,{scAiBtn:['Perguntar à IA','Ask the AI','Preguntar a la IA','Demander à l’IA'],scAiAsk:['Consultando a IA para entender o seu traço…','Asking the AI to read your stroke…','Consultando a la IA para entender tu trazo…','Consultation de l’IA pour lire votre trait…'],scAiNo:['A IA não conseguiu entender esse traço. Tente de novo, um pouco maior.','The AI could not read that stroke. Try again, a bit bigger.','La IA no pudo entender ese trazo. Inténtalo de nuevo, un poco más grande.','L’IA n’a pas pu lire ce trait. Réessayez, un peu plus grand.'],scAiOff:['O uso da IA não foi permitido neste aparelho.','AI use was not allowed on this device.','No se permitió el uso de la IA en este dispositivo.','L’utilisation de l’IA n’a pas été autorisée sur cet appareil.'],scAiOk:['IA entendeu: {0}. O app guardou seus traços ({1} na memória) e vai reconhecer melhor a sua letra.','AI read it as: {0}. Saved your strokes ({1} in memory) to recognize your handwriting better.','La IA entendió: {0}. Se guardaron tus trazos ({1} en memoria) para reconocer mejor tu letra.','L’IA a lu : {0}. Vos traits sont mémorisés ({1} en mémoire) pour mieux reconnaître votre écriture.'],scAiAuto:['Perguntar à IA sozinho quando eu errar','Ask the AI automatically when recognition fails','Preguntar a la IA sola cuando falle','Demander à l’IA seule en cas d’échec'],scLibReset:['Apagar memória da letra ({0})','Erase handwriting memory ({0})','Borrar memoria de la letra ({0})','Effacer la mémoire d’écriture ({0})'],scLibOff:['Memória da sua letra apagada.','Handwriting memory erased.','Memoria de la letra borrada.','Mémoire d’écriture effacée.'],gAi:['IA e memória','AI & memory','IA y memoria','IA et mémoire']});
/* ---------- notações: dinâmicas, textos, repetições, saltos (roda de rolagem) ---------- */
const DYS={n:'niente'},ORNA=['ferm','tr','mord','turn'];
const DVOL={pppp:.03,ppp:.05,pp:.07,p:.1,mp:.13,mf:.17,f:.22,ff:.28,fff:.34,ffff:.4,sfz:.3,sf:.3,sffz:.34,fz:.3,rf:.28,rfz:.3,fp:.2,sfp:.25,pf:.2,n:.02};
const dI=a=>({t:'dyn',v:a});
const tI=(s,k)=>({t:'tx',v:s,k,n:s});
const WHEEL=[
 {k:'wCdyn',items:['pppp','ppp','pp','p','mp','mf','f','ff','fff','ffff','fp','sf','sfz','sffz','sfp','fz','rf','rfz','pf','n'].map(dI)},
 {k:'wChp',items:[{t:'hp',v:'c',l:'wHc'},{t:'hp',v:'d',l:'wHd'}]},
 {k:'wCart',items:['stac','stacc','port','acc','ten','marc','ferm'].map(a=>({t:'art',v:a,l:'scA'+a}))},
 {k:'wCorn',items:['tr','mord','turn'].map(a=>({t:'art',v:a,l:'scA'+a}))},
 {k:'wCtempo',items:['Grave','Largo','Lento','Adagio','Andante','Andantino','Moderato','Allegretto','Allegro','Vivace','Presto','Prestissimo','Maestoso','a tempo','Tempo I','rit.','rall.','accel.','meno mosso','più mosso','poco rit.','Fermata'].map(s=>tI(s,'t'))},
 {k:'wCexp',items:['dolce','espress.','cantabile','legato','leggiero','marcato','sostenuto','tranquillo','con brio','con fuoco','scherzando','giocoso','sempre','subito','molto','poco','poco a poco','cresc.','dim.','morendo','perdendosi','calando','smorz.','pizz.','arco','Ped.','con ped.','senza ped.','sul pont.','con sord.'].map(s=>tI(s,'x'))},
 {k:'wCnav',items:[['rs','wNrs'],['re','wNre'],['vo1','wNv1'],['vo2','wNv2'],['seg','Segno'],['coda','Coda'],['tocoda','To Coda'],['fine','Fine'],['dc','D.C.'],['ds','D.S.'],['dcf','D.C. al Fine'],['dcc','D.C. al Coda'],['dsf','D.S. al Fine'],['dsc','D.S. al Coda'],['navclr','wNclr']].map(([v,l])=>({t:'nav',v,l}))},
 {k:'wCbar',items:[['n','scB1'],['d','scB2'],['f','scB3']].map(([v,l])=>({t:'bar',v,l}))}];
const WHH=36;
const itName=it=>it.n||(it.l?(/^[a-z]/.test(it.l)&&X[it.l]?T(it.l):it.l):(DYS[it.v]||it.v));
function whLab(it){if(it.t==='dyn')return `<i class="whd">${DYS[it.v]||it.v}</i>`;if(it.t==='art')return `<svg viewBox="0 0 28 28" width="22" height="22" aria-hidden="true" style="vertical-align:middle;margin-right:6px">${artSvg(it.v,14,14,'currentColor')}</svg>${esc(itName(it))}`;if(it.t==='nav'&&(it.v==='seg'||it.v==='coda'))return `<svg viewBox="0 0 28 28" width="22" height="22" aria-hidden="true" style="vertical-align:middle;margin-right:6px">${it.v==='seg'?segnoSvg(14,14):codaSvg(14,14,.9)}</svg>${esc(itName(it))}`;return esc(itName(it))}
function whTilt(el){const c=el.scrollTop/WHH;[...el.children].forEach((b,i)=>{const d=Math.max(-3,Math.min(3,i-c)),a=Math.abs(d);b.style.transform=`perspective(280px) rotateX(${(-d*20).toFixed(1)}deg) scale(${(1-.07*a).toFixed(3)})`;b.style.opacity=Math.max(.25,1-.3*a).toFixed(2)})}
const whItems=ci=>WHEEL[ci].items.map((it,i)=>`<button type="button" data-wi="${i}">${whLab(it)}</button>`).join('');
function whBody(){return `<div class="wheels"><div class="wh" id="whC" role="listbox" aria-label="${T('wCat')}"></div><div class="wh" id="whI" role="listbox" aria-label="${T('wItem')}"></div></div><div class="pg g2"><button class="pk2 p" data-a="whgo">${T('wGo')}</button><button class="pk2" data-a="whclr">${T('scA0')}</button></div><div class="pg g1" style="grid-template-columns:1fr auto"><input id="whTx" placeholder="${T('wFree')}" autocomplete="off" aria-label="${T('wFree')}"><button class="pk2" data-a="whtx" style="padding:0 14px">+</button></div><p class="tip">${T('wTip')}</p>`}
function whInit(){const C=$('whC'),I=$('whI');if(!C||!I)return;ED.wc=Math.min(ED.wc||0,WHEEL.length-1);ED.wi=Math.min(ED.wi||0,WHEEL[ED.wc].items.length-1);
 C.innerHTML=WHEEL.map((c,i)=>`<button type="button" data-wc="${i}">${T(c.k)}</button>`).join('');I.innerHTML=whItems(ED.wc);
 const wc0=ED.wc,wi0=ED.wi;C.scrollTop=wc0*WHH;I.scrollTop=wi0*WHH;ED.wc=wc0;ED.wi=wi0;whTilt(C);whTilt(I);
 let tc=0,ti=0;
 C.addEventListener('scroll',()=>{whTilt(C);clearTimeout(tc);tc=setTimeout(()=>{const i=Math.max(0,Math.min(WHEEL.length-1,Math.round(C.scrollTop/WHH)));if(i!==ED.wc){ED.wc=i;ED.wi=0;I.innerHTML=whItems(i);I.scrollTop=0;whTilt(I);buzz(4)}},90)},{passive:true});
 I.addEventListener('scroll',()=>{whTilt(I);clearTimeout(ti);ti=setTimeout(()=>{const i=Math.max(0,Math.min(WHEEL[ED.wc].items.length-1,Math.round(I.scrollTop/WHH)));if(i!==ED.wi){ED.wi=i;buzz(4)}},90)},{passive:true});
 C.onclick=e=>{const b=e.target.closest('[data-wc]');if(b)C.scrollTo({top:b.dataset.wc*WHH,behavior:'smooth'})};
 I.onclick=e=>{const b=e.target.closest('[data-wi]');if(!b)return;const i=+b.dataset.wi;if(i===ED.wi&&Math.abs(I.scrollTop-i*WHH)<4)whApply();else I.scrollTo({top:i*WHH,behavior:'smooth'})}}
function navToggle(m,v){m.nav=m.nav||{};
 if(v==='rs')m.rs=!m.rs;else if(v==='re')m.bar=m.bar==='re'?'n':'re';
 else if(v==='vo1'||v==='vo2'){const k=v==='vo1'?1:2;if(m.vo&&m.vo.length===1&&m.vo[0]===k)delete m.vo;else m.vo=[k]}
 else if(['seg','coda','tocoda','fine'].includes(v)){if(m.nav[v])delete m.nav[v];else m.nav[v]=1}
 else if(v==='navclr'){delete m.vo;m.nav={}}
 else{if(m.nav.jump===v)delete m.nav.jump;else m.nav.jump=v}
 if(!Object.keys(m.nav).length)delete m.nav}
function whTarget(){const mi=ED.sel?ED.sel.m:ED.cur.m;return ED.sc.ms[mi]}
function whApply(){const it=WHEEL[ED.wc]&&WHEEL[ED.wc].items[ED.wi];if(!it)return;if(ED.nvSel){const o=ED.nvSel,pre=snap();ED.nvSel=null;nvRemove(o);if(o.k==='dyn'){ED.sel={m:o.m,s:o.s,i:o.i}}else{ED.sel=null;ED.cur={m:o.m,s:ED.cur.s,t:0}}const n0=ED.und.length;whApply2(it);if(ED.und.length===n0+1)ED.und[n0]=pre;return}whApply2(it)}
function whApply2(it){const sc=ED.sc;
 if(it.t==='dyn'||it.t==='art'){const e=selEv();if(!e||!e.n){msg(T('scNoSel'));return}pushU();if(e[it.t]===it.v)delete e[it.t];else e[it.t]=it.v;sSave();redraw();msg(T('wDone',itName(it)));return}
 if(it.t==='hp'){spanApply('hp',it.v);return}
 const m=whTarget();if(!m){msg(T('scNoSel'));return}pushU();
 if(it.t==='tx')txToggle(m,it.v,it.k);else if(it.t==='bar')m.bar=it.v;else if(it.t==='nav'&&it.v==='rs'){ED.und.pop();rptStart();return}else if(it.t==='nav')navToggle(m,it.v);
 sSave();redraw();msg(T('wDone',itName(it)))}
function txToggle(m,s,k){m.tx=m.tx||[];const j=m.tx.findIndex(q=>q.s===s);if(j>=0)m.tx.splice(j,1);else{if(m.tx.length>=3)m.tx.shift();m.tx.push({s,k})}if(!m.tx.length)delete m.tx}
function whClear(){const e=selEv();if(e&&e.n&&(e.dyn||e.art)){pushU();delete e.dyn;delete e.art;sSave();redraw();return}const m=whTarget();if(!m){msg(T('scNoSel'));return}pushU();delete m.tx;delete m.vo;delete m.nav;sSave();redraw()}
function segnoSvg(x,y){const c='currentColor';return `<g fill="none" stroke="${c}" stroke-width="1.6"><path d="M${x+5},${y-7} C${x-1},${y-13} ${x-8},${y-9} ${x-6},${y-4} C${x-4},${y+1} ${x+5},${y} ${x+6},${y+6} C${x+7},${y+12} ${x-1},${y+13} ${x-6},${y+8}"/><line x1="${x+8}" y1="${y-11}" x2="${x-8}" y2="${y+13}" stroke-width="1.3"/></g><circle cx="${x-8}" cy="${y-5}" r="1.5" fill="${c}"/><circle cx="${x+8}" cy="${y+7}" r="1.5" fill="${c}"/>`}
function codaSvg(x,y,s){const c='currentColor',r=6*(s||1),e=11*(s||1);return `<g fill="none" stroke="${c}" stroke-width="1.4"><circle cx="${x}" cy="${y}" r="${r}"/><line x1="${x-e}" x2="${x+e}" y1="${y}" y2="${y}"/><line x1="${x}" x2="${x}" y1="${y-e}" y2="${y+e}"/></g>`}
const JUMPT={dc:'D.C.',ds:'D.S.',dcf:'D.C. al Fine',dcc:'D.C. al Coda',dsf:'D.S. al Fine',dsc:'D.S. al Coda'};
function navSvg(m,x,x1,yTop,yBot,mi){let o='';const c='currentColor',nv=m.nav||{};let lo=14;const sl=ED.nvSel;
 const hit=(k,xx,yy,w,h)=>`<rect class="nvs" data-m="${mi}" data-k="${k}" x="${xx.toFixed(1)}" y="${yy}" width="${w.toFixed(1)}" height="${h}" rx="4" fill="${sl&&sl.m===mi&&sl.k===k?'rgba(37,99,235,.22)':'transparent'}" style="cursor:pointer"/>`;
 if(m.vo&&m.vo.length){const y=yTop-44;o+=`<path d="M${x+5},${y+9} V${y} H${x1-4}" fill="none" stroke="${c}" stroke-width="1.3" pointer-events="none"/><text x="${x+9}" y="${y-3}" font-size="12" font-family="serif" fill="${c}" pointer-events="none">${m.vo.join(', ')}.</text>`+hit('vo',x+3,y-14,Math.min(60,x1-x-8),24);lo=28}
 if(nv.seg){o+=`<g pointer-events="none">${segnoSvg(x+12,yTop-57)}</g>`+hit('seg',x+1,yTop-74,22,34);lo=Math.max(lo,30)}
 if(nv.coda){o+=`<g pointer-events="none">${codaSvg(x+12,yTop-57)}</g>`+hit('coda',x+1,yTop-72,22,30);lo=Math.max(lo,30)}
 let xw=x+lo;(m.tx||[]).forEach((q,qi)=>{if(q.k!=='t')return;const w=q.s.length*7.6+4;o+=`<text x="${xw}" y="${yTop-50}" font-size="14" font-weight="700" font-style="italic" font-family="serif" fill="${c}" pointer-events="none">${esc(q.s)}</text>`+hit('tx:'+qi,xw-2,yTop-65,w,19);xw+=w+10});
 let xb=x+14;(m.tx||[]).forEach((q,qi)=>{if(q.k!=='x')return;const w=q.s.length*6.8+4;o+=`<text x="${xb}" y="${yBot+46}" font-size="13" font-style="italic" font-family="serif" fill="${c}" pointer-events="none">${esc(q.s)}</text>`+hit('tx:'+qi,xb-2,yBot+33,w,18);xb+=w+10});
 let rt='';if(nv.fine)rt='Fine';if(nv.jump)rt=JUMPT[nv.jump]||'';let rx=x1-6;
 if(rt){const w=rt.length*7.4+4;o+=`<text x="${rx}" y="${yTop-50}" text-anchor="end" font-size="13" font-weight="700" font-style="italic" font-family="serif" fill="${c}" pointer-events="none">${esc(rt)}</text>`+hit(nv.jump?'jump':'fine',rx-w,yTop-65,w+2,19);rx-=w+8}
 if(nv.tocoda){o+=`<text x="${rx-18}" y="${yTop-50}" text-anchor="end" font-size="13" font-weight="700" font-style="italic" font-family="serif" fill="${c}" pointer-events="none">To</text><g pointer-events="none">${codaSvg(rx-8,yTop-54,.8)}</g>`+hit('tocoda',rx-48,yTop-68,52,24)}
 if(m.rs)o+=hit('rs',x,yTop-4,15,yBot-yTop+8);
 if(m.bar==='re')o+=hit('re',x1-11,yTop-4,15,yBot-yTop+8);
 return o}
function navXml(m){let x='';(m.tx||[]).forEach(q=>{x+=`<direction placement="${q.k==='t'?'above':'below'}"><direction-type><words font-style="italic">${esc(q.s)}</words></direction-type></direction>\n`});const nv=m.nav||{};
 if(nv.seg)x+=`<direction placement="above"><direction-type><segno/></direction-type><sound segno="segno"/></direction>\n`;
 if(nv.coda)x+=`<direction placement="above"><direction-type><coda/></direction-type><sound coda="coda"/></direction>\n`;
 if(nv.tocoda)x+=`<direction placement="above"><direction-type><words>To Coda</words></direction-type><sound tocoda="coda"/></direction>\n`;
 if(nv.fine)x+=`<direction placement="above"><direction-type><words>Fine</words></direction-type><sound fine="yes"/></direction>\n`;
 if(nv.jump)x+=`<direction placement="above"><direction-type><words>${JUMPT[nv.jump]}</words></direction-type><sound ${nv.jump[1]==='c'?'dacapo="yes"':'dalsegno="segno"'}${nv.jump.length===3&&nv.jump[2]==='c'?' tocoda="coda"':''}${nv.jump.length===3&&nv.jump[2]==='f'?' fine="yes"':''}/></direction>\n`;return x}
function artXml(a){if(a==='ferm')return '<fermata/>';const A={stac:'staccato',acc:'accent',ten:'tenuto',marc:'strong-accent',stacc:'staccatissimo',port:'detached-legato'},O={tr:'trill-mark',mord:'mordent',turn:'turn'};return A[a]?`<articulations><${A[a]}/></articulations>`:O[a]?`<ornaments><${O[a]}/></ornaments>`:''}
Object.assign(X,{wCat:['Categoria','Category','Categoría','Catégorie'],wItem:['Símbolo','Symbol','Símbolo','Symbole'],wGo:['Inserir','Insert','Insertar','Insérer'],wFree:['Texto livre (ex.: dolce)','Free text (e.g. dolce)','Texto libre (p. ej. dolce)','Texte libre (ex. dolce)'],wDone:['Aplicado: {0}','Applied: {0}','Aplicado: {0}','Appliqué : {0}'],
wTip:['Gire as duas rodas: categoria e símbolo. Toque no símbolo do centro ou em Inserir. Dinâmicas e articulações vão na nota selecionada; textos, repetições e saltos, no compasso. Tocar de novo remove.','Spin the two wheels: category and symbol. Tap the centre symbol or Insert. Dynamics and articulations go on the selected note; text, repeats and jumps on the measure. Apply again to remove.','Gira las dos ruedas: categoría y símbolo. Toca el símbolo central o Insertar. Dinámicas y articulaciones van en la nota seleccionada; textos, repeticiones y saltos, en el compás. Repetir lo quita.','Tournez les deux roues : catégorie et symbole. Touchez le symbole central ou Insérer. Nuances et articulations vont sur la note sélectionnée ; textes, reprises et sauts sur la mesure. Réappliquer l’enlève.'],
wCdyn:['Dinâmicas','Dynamics','Dinámicas','Nuances'],wChp:['Crescendo / diminuendo','Hairpins','Reguladores','Soufflets'],wCart:['Articulações','Articulations','Articulaciones','Articulations'],wCorn:['Ornamentos','Ornaments','Adornos','Ornements'],wCtempo:['Andamento','Tempo','Tempo','Tempo'],wCexp:['Expressão e técnica','Expression & technique','Expresión y técnica','Expression et technique'],wCnav:['Repetições e saltos','Repeats & jumps','Repeticiones y saltos','Reprises et sauts'],wCbar:['Barras de compasso','Barlines','Barras de compás','Barres de mesure'],
wHc:['Crescendo ⟨','Crescendo ⟨','Crescendo ⟨','Crescendo ⟨'],wHd:['Diminuendo ⟩','Diminuendo ⟩','Diminuendo ⟩','Diminuendo ⟩'],
wNrs:['Início de repetição ‖:','Repeat start ‖:','Inicio de repetición ‖:','Début de reprise ‖:'],wNre:['Fim de repetição :‖','Repeat end :‖','Fin de repetición :‖','Fin de reprise :‖'],wNv1:['1ª casa (volta 1.)','1st ending (1.)','1.ª casilla (1.)','1re fois (1.)'],wNv2:['2ª casa (volta 2.)','2nd ending (2.)','2.ª casilla (2.)','2e fois (2.)'],wNclr:['Limpar navegação do compasso','Clear measure navigation','Quitar navegación del compás','Effacer la navigation'],
scAstacc:['Staccatissimo','Staccatissimo','Staccatissimo','Staccatissimo'],scAport:['Portato','Portato','Portato','Portato'],scAtr:['Trinado (tr)','Trill (tr)','Trino (tr)','Trille (tr)'],scAmord:['Mordente','Mordent','Mordente','Mordant'],scAturn:['Grupeto','Turn','Grupeto','Gruppetto']});

/* ---------- andamento: tocar no ♩ = 80 abre a roda de BPM ---------- */
const tpName=b=>b<45?'Grave':b<60?'Largo':b<66?'Lento':b<76?'Adagio':b<108?'Andante':b<120?'Moderato':b<156?'Allegro':b<176?'Vivace':b<200?'Presto':'Prestissimo';
function tpClose(){const o=$('tpbox');if(o)o.remove();document.removeEventListener('keydown',tpKey)}
function tpKey(e){if(e.key==='Escape')tpClose();else if(e.key==='Enter')tpOk()}
let tpV=80;
function tpOk(){const sc=ED.sc;if(tpV!==sc.tempo){pushU();sc.tempo=tpV;sSave();const i=$('scTp');if(i)i.value=tpV;redraw()}tpClose()}
function tpOpen(){tpClose();const sc=ED.sc;tpV=sc.tempo;const o=document.createElement('div');o.id='tpbox';o.setAttribute('role','dialog');o.setAttribute('aria-label',T('tpTitle'));
 o.style.cssText='position:fixed;inset:0;z-index:60;background:rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;padding:16px';
 let items='';for(let b=30;b<=240;b++)items+=`<button type="button" data-b="${b}" style="font-size:18px">${b}</button>`;
 o.innerHTML=`<div style="background:var(--card);color:var(--ink);border:2px solid var(--ink);border-radius:20px;padding:14px;width:min(300px,100%);box-shadow:0 10px 30px rgba(0,0,0,.4)"><div style="font:800 16px Nunito,sans-serif;text-align:center;margin-bottom:6px">${T('tpTitle')}</div><div style="text-align:center;font:italic 700 16px serif;min-height:22px" id="tpn"></div><div class="wheels" style="margin:6px 0"><div class="wh" id="tpw" role="listbox" aria-label="BPM">${items}</div></div><div class="pg g2"><button class="pk2" id="tpc">${T('tpCancel')}</button><button class="pk2 p" id="tpo">OK</button></div></div>`;
 document.body.appendChild(o);const w=$('tpw'),nm_=$('tpn');w.scrollTop=(tpV-30)*WHH;whTilt(w);nm_.textContent='♩ = '+tpV+' · '+tpName(tpV);let tm=0;
 w.addEventListener('scroll',()=>{whTilt(w);const b=Math.max(30,Math.min(240,30+Math.round(w.scrollTop/WHH)));if(b!==tpV){tpV=b;nm_.textContent='♩ = '+b+' · '+tpName(b);buzz(3)}},{passive:true});
 w.onclick=e=>{const b=e.target.closest('[data-b]');if(b)w.scrollTo({top:(b.dataset.b-30)*WHH,behavior:'smooth'})};
 $('tpc').onclick=tpClose;$('tpo').onclick=tpOk;o.addEventListener('pointerdown',e=>{if(e.target===o)tpClose()});document.addEventListener('keydown',tpKey)}
Object.assign(X,{tpTitle:['Andamento (BPM)','Tempo (BPM)','Tempo (BPM)','Tempo (BPM)'],tpCancel:['Cancelar','Cancel','Cancelar','Annuler']});

/* ---------- repetição: escolher o compasso final ---------- */
function rptStart(){const sc=ED.sc;
 if(ED.rpt){rptCancel();return}
 if(ED.msel&&ED.msel.b>ED.msel.a){rptApply(ED.msel.a,ED.msel.b);return}
 const mi=ED.msel?ED.msel.a:(ED.sel?ED.sel.m:ED.cur.m),m=sc.ms[mi];if(!m)return;
 if(m.rs){pushU();m.rs=false;sSave();redraw();return}
 ED.rpt={start:mi};msg(T('rptPick',mi+1));redraw()}
function rptCancel(){ED.rpt=null;msg(T('scMsg'));redraw()}
function rptApply(a,b){const sc=ED.sc;if(b<a){const t=a;a=b;b=t}pushU();sc.ms[a].rs=true;sc.ms[b].bar='re';ED.rpt=null;sSave();redraw();msg(T('rptDone',a+1,b+1))}
function rptPick(ev){const p=sPt(ev);let hit=null;ED.G.forEach(g=>{if(p.x>=g.ns&&p.x<=g.ne&&Math.abs(p.y-(g.yb-16))<70)hit=g.m});
 if(hit==null){const nm=ED.MN.find(q=>p.x>=q.x&&p.x<=q.x+q.w&&p.y>=q.y&&p.y<=q.y+q.h);if(nm)hit=nm.m}
 if(hit==null)return;rptApply(ED.rpt.start,hit)}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&ED.rpt)rptCancel()});
Object.assign(X,{rptPick:['Repetição começa no compasso {0}. Toque no compasso onde ela termina (Esc cancela).','Repeat starts at measure {0}. Tap the measure where it ends (Esc cancels).','La repetición empieza en el compás {0}. Toca el compás donde termina (Esc cancela).','La reprise commence à la mesure {0}. Touchez la mesure où elle se termine (Échap annule).'],rptDone:['Repetição dos compassos {0} a {1}.','Repeat of measures {0} to {1}.','Repetición de los compases {0} a {1}.','Reprise des mesures {0} à {1}.']});

/* ---------- tocar em símbolos (selecionar/substituir/apagar) e circular compassos para repetir ---------- */
let NV0=null,NVL=null;
function nvInfo(el){const m=+(el.dataset.m!=null?el.dataset.m:(el.closest('.ev')||{dataset:{}}).dataset.m),k=el.dataset.k,o={m,k};if(k==='dyn'){const g=el.closest('.ev');o.m=+g.dataset.m;o.s=+g.dataset.s;o.i=+g.dataset.i}return o}
function nvName(o){const M=ED.sc.ms[o.m];if(!M)return '';const k=o.k;if(k.startsWith('tx:')){const q=(M.tx||[])[+k.slice(3)];return q?q.s:''}if(k==='dyn'){const e=ED.sc.ms[o.m].st[o.s][o.i];return e&&e.dyn?(DYS[e.dyn]||e.dyn):''}return({seg:'Segno',coda:'Coda',tocoda:'To Coda',fine:'Fine',jump:JUMPT[(M.nav||{}).jump]||'',vo:T('wNv1').slice(0,0)+((M.vo||[]).join(',')+'.'),rs:T('wNrs'),re:T('wNre')})[k]||k}
function nvRemove(o){const M=ED.sc.ms[o.m];if(!M)return;const k=o.k;
 if(k.startsWith('tx:')){const j=+k.slice(3);if(M.tx){M.tx.splice(j,1);if(!M.tx.length)delete M.tx}}
 else if(k==='dyn'){const e=M.st[o.s][o.i];if(e)delete e.dyn}
 else if(k==='vo')delete M.vo;else if(k==='rs')M.rs=false;else if(k==='re')M.bar='n';
 else if(M.nav){delete M.nav[k];if(!Object.keys(M.nav).length)delete M.nav}}
function nvTap(el){const o=nvInfo(el),key=o.m+'|'+o.k+'|'+(o.i==null?'':o.s+'.'+o.i),now=Date.now();
 if(NVL&&NVL.key===key&&now-NVL.t<450){NVL=null;const nm_=nvName(o);pushU();nvRemove(o);ED.nvSel=null;sSave();redraw();msg(T('nvDel',nm_));return}
 NVL={key,t:now};ED.nvSel=o;const cat=o.k==='dyn'?0:o.k.startsWith('tx:')?((ED.sc.ms[o.m].tx||[])[+o.k.slice(3)]||{}).k==='x'?5:4:6;ED.wc=cat;ED.wi=0;if(ED.kb){ED.tab='d';ED.palMin=false;palRender()}redraw();msg(T('nvSel',nvName(o)))}
function closedLoop(p){if(p.length<12)return null;const f=stFeat(p),w=f.w,h=f.h;if(w<60||h<34)return null;const gap=Math.hypot(p[0].x-p[p.length-1].x,p[0].y-p[p.length-1].y);if(gap>.4*Math.max(w,h))return null;const a=w/2,b=h/2,per=Math.PI*(1.5*(a+b)-Math.sqrt(a*b));if(f.len<.8*per||f.len>1.7*per)return null;if(f.rx>3||f.ry>3)return null;return f}
function boxness(p,f){const t=Math.max(4,.14*Math.min(f.w,f.h));let n=0;p.forEach(q=>{if(Math.min(q.x-f.x0,f.x1-q.x,q.y-f.y0,f.y1-q.y)<=t)n++});return n/p.length}
function circleOf(p){const f=closedLoop(p);return f&&boxness(p,f)<.8?f:null}
function rectOf(p){const f=closedLoop(p);return f&&boxness(p,f)>=.8?f:null}
function rectMeasures(f){const r=new Set;ED.EV.forEach(e=>{if(e.ys&&e.ys.length&&e.x>=f.x0&&e.x<=f.x1&&e.yb-16>=f.y0-4&&e.yb-16<=f.y1+4)r.add(e.m)});if(!r.size)return circleMeasures(f);return[...r].sort((a,b)=>a-b)}
function rectApply(f){const ms=rectMeasures(f);if(!ms.length){msg(T('rptNone'));return}ED.msel={a:ms[0],b:ms[ms.length-1]};ED.sel=null;ED.rpt=null;redraw();msg(T('scSelM',ms.length,ms[0]+1,ms[ms.length-1]+1));balShow(f)}
Object.assign(X,{ppClose:['Fechar','Close','Cerrar','Fermer'],ppT:['Reprodução','Playback','Reproducción','Lecture'],ppStop:['Parar','Stop','Parar','Arrêter']});
function ppHide(){const p=$('scpp');if(p)p.remove()}
function ppShow(){ppHide();const p=document.createElement('div');p.id='scpp';p.setAttribute('role','dialog');p.setAttribute('aria-label',T('ppT'));p.innerHTML=`<span class="ppi">♪</span><b id="scppt">${T('ppT')}</b><button type="button" data-pp="stop">■ ${T('ppStop')}</button><button type="button" class="ppx" data-pp="x" aria-label="${T('ppClose')}">✕</button>`;p.onclick=e=>{if(e.target.closest('[data-pp]'))sStop()};document.body.appendChild(p)}
function ppSet(t){const e=$('scppt');if(e)e.textContent=t}
function balSel(){const q=ED.msel;if(!q)return;const gs=ED.G.filter(g=>g.m>=q.a&&g.m<=q.b);if(!gs.length)return;const f={x0:Math.min(...gs.map(g=>g.ns)),x1:Math.max(...gs.map(g=>g.ne)),y0:Math.min(...gs.map(g=>g.yb-46)),y1:Math.max(...gs.map(g=>g.yb+14))};balShow(f)}
function balHide(){const b=$('scbal');if(b)b.remove()}
function balShow(f){balHide();const sv=$('scsvg');if(!sv)return;const r=sv.getBoundingClientRect(),k=r.width/ED.W,b=document.createElement('div');b.id='scbal';b.setAttribute('role','toolbar');b.setAttribute('aria-label',T('balT'));
 const bt=[['c','scCopy'],['x','scCut'],['d','scDel'],['p','scPaste'],['u','scDup']];
 b.innerHTML=bt.map(([a,l])=>`<button type="button" data-bal="${a}">${T(l)}</button>`).join('')+'<i></i>';
 let x=r.left+(f.x0+f.x1)/2*k,y=r.top+f.y0*k-8;b.style.cssText=`position:fixed;left:${Math.max(8,Math.min(innerWidth-8,x))}px;top:${Math.max(8,y)}px;transform:translate(-50%,-100%);z-index:55`;
 b.addEventListener('pointerdown',e=>e.stopPropagation());
 b.onclick=e=>{const q=e.target.closest('[data-bal]');if(!q)return;const a=q.dataset.bal;balHide();if(a==='c')mCopy();else if(a==='x')mCopy(true);else if(a==='d')mClear();else if(a==='p')mPaste();else if(a==='u')mPaste(true)};
 document.body.appendChild(b)}
addEventListener('scroll',balHide,{passive:true});
function circleMeasures(f){const r=new Set;ED.G.forEach(g=>{const ox=Math.min(g.ne,f.x1)-Math.max(g.ns,f.x0);if(ox/(g.ne-g.ns)>=.5&&f.y0<=g.yb-6&&f.y1>=g.yb-26)r.add(g.m)});return[...r].sort((a,b)=>a-b)}
function circleApply(f){const ms=circleMeasures(f);if(!ms.length){msg(T('rptNone'));return}const a=ms[0],b=ms[ms.length-1];
 if(ED.rpt){rptApply(ED.rpt.start,b);return}
 if(b>a){rptApply(a,b);return}
 ED.rpt={start:a};msg(T('rptPick2',a+1));redraw()}
function rptPickAt(p){let hit=null;ED.G.forEach(g=>{if(p.x>=g.ns&&p.x<=g.ne&&Math.abs(p.y-(g.yb-16))<70)hit=g.m});if(hit!=null)rptApply(ED.rpt.start,hit)}
Object.assign(X,{nvSel:['Selecionado: {0}. Escolha outro na roda para substituir; toque duas vezes (ou Delete) para apagar.','Selected: {0}. Pick another on the wheel to replace it; double-tap (or Delete) to remove.','Seleccionado: {0}. Elige otro en la rueda para reemplazarlo; toca dos veces (o Supr) para borrar.','Sélectionné : {0}. Choisissez-en un autre sur la roue pour le remplacer ; touchez deux fois (ou Suppr) pour l’effacer.'],nvDel:['Apagado: {0}','Removed: {0}','Borrado: {0}','Supprimé : {0}'],rptNone:['Não encontrei compasso dentro do círculo.','No measure found inside the circle.','No encontré ningún compás dentro del círculo.','Aucune mesure trouvée dans le cercle.'],rptPick2:['Início da repetição no compasso {0}. Faça outro círculo (ou toque) no compasso final.','Repeat starts at measure {0}. Draw another circle (or tap) on the final measure.','La repetición empieza en el compás {0}. Dibuja otro círculo (o toca) en el compás final.','La reprise commence à la mesure {0}. Faites un autre cercle (ou touchez) sur la mesure finale.']});

/* ---------- referência: abrir PDF ou imagem para transcrever ---------- */
function pdfLib(){return new Promise((res,rej)=>{if(window.pdfjsLib)return res(window.pdfjsLib);const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';s.onload=()=>{try{pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';res(pdfjsLib)}catch(e){rej(e)}};s.onerror=()=>rej(new Error('lib'));document.head.appendChild(s);setTimeout(()=>rej(new Error('timeout')),15000)})}
async function refOpen(file){if(!file)return;const isPdf=/pdf$/i.test(file.type)||/\.pdf$/i.test(file.name);
 if(ED.ref&&ED.ref.url)try{URL.revokeObjectURL(ED.ref.url)}catch(e){}
 try{if(isPdf){msg(T('refLoading'));const lib=await pdfLib(),doc=await lib.getDocument({data:await file.arrayBuffer()}).promise;ED.ref={kind:'pdf',doc,n:doc.numPages,p:1,z:1,name:file.name}}
  else if(/^image\//.test(file.type)){ED.ref={kind:'img',url:URL.createObjectURL(file),n:1,p:1,z:1,name:file.name}}
  else{msg(T('refBad'));return}
  ED.refHide=false;msg(T('refOk',file.name));refRender();ribRender()}catch(e){msg(T('refFail'))}}
function refClose(){if(ED.ref&&ED.ref.url)try{URL.revokeObjectURL(ED.ref.url)}catch(e){}ED.ref=null;refRender();ribRender()}
let _rfT=0;
async function refRender(){const el=$('scref');if(!el)return;const R=ED.ref;if(!R||ED.refHide){el.hidden=true;el.innerHTML='';return}el.hidden=false;
 el.innerHTML=`<div class="scref-h"><b title="${esc(R.name)}">${esc(R.name)}</b><span class="scref-c"><button type="button" data-rf="prev" aria-label="${T('refPrev')}">◀</button><span>${R.p}/${R.n}</span><button type="button" data-rf="next" aria-label="${T('refNext')}">▶</button><button type="button" data-rf="zo" aria-label="−">−</button><button type="button" data-rf="zi" aria-label="+">+</button><button type="button" data-rf="hide">${T('refHide')}</button></span></div><div class="scref-b" id="screfB">${R.kind==='img'?`<img src="${R.url}" alt="${esc(R.name)}" style="width:${R.z*100}%">`:`<canvas id="screfC"></canvas>`}</div>`;
 el.onclick=e=>{const b=e.target.closest('[data-rf]');if(!b)return;const a=b.dataset.rf;if(a==='prev'&&R.p>1)R.p--;else if(a==='next'&&R.p<R.n)R.p++;else if(a==='zi')R.z=Math.min(3,R.z+.25);else if(a==='zo')R.z=Math.max(.5,R.z-.25);else if(a==='hide'){ED.refHide=true;refRender();ribRender();return}refRender()};
 if(R.kind==='pdf'){const c=$('screfC'),pg=await R.doc.getPage(R.p),w=Math.max(300,($('screfB')||el).clientWidth-4)*R.z,v0=pg.getViewport({scale:1}),k=w/v0.width,dpr=Math.min(2,window.devicePixelRatio||1),vp=pg.getViewport({scale:k*dpr});if(!c||ED.ref!==R)return;c.width=vp.width;c.height=vp.height;c.style.width=w+'px';c.style.height=(vp.height/dpr)+'px';await pg.render({canvasContext:c.getContext('2d'),viewport:vp}).promise}}
document.addEventListener('change',e=>{if(e.target&&e.target.id==='screfIn')refOpen(e.target.files&&e.target.files[0])});
Object.assign(X,{gImp:['Importar partitura','Import score','Importar partitura','Importer une partition'],gAiT:['Transcrição','Transcription','Transcripción','Transcription'],refOpen:['Abrir PDF ou imagem','Open PDF or image','Abrir PDF o imagen','Ouvrir PDF ou image'],refWeb:['Buscar PDF na internet','Search PDF online','Buscar PDF en internet','Chercher un PDF en ligne'],refSoon:['em breve','coming soon','próximamente','bientôt'],refAuto:['Transcrever automaticamente','Transcribe automatically','Transcribir automáticamente','Transcrire automatiquement'],refShow:['Mostrar referência','Show reference','Mostrar referencia','Afficher la référence'],refHide:['Ocultar','Hide','Ocultar','Masquer'],refClose:['Fechar referência','Close reference','Cerrar referencia','Fermer la référence'],refPrev:['Página anterior','Previous page','Página anterior','Page précédente'],refNext:['Próxima página','Next page','Página siguiente','Page suivante'],refLoading:['Abrindo o PDF…','Opening the PDF…','Abriendo el PDF…','Ouverture du PDF…'],refBad:['Escolha um PDF ou uma imagem.','Choose a PDF or an image.','Elige un PDF o una imagen.','Choisissez un PDF ou une image.'],refOk:['Referência aberta: {0}. Ela fica acima da partitura para você transcrever.','Reference opened: {0}. It stays above the score so you can transcribe.','Referencia abierta: {0}. Queda sobre la partitura para transcribir.','Référence ouverte : {0}. Elle reste au-dessus de la partition pour transcrire.'],refFail:['Não consegui abrir esse arquivo. Imagens (JPG, PNG) funcionam sempre; PDF precisa de internet para carregar o leitor.','Could not open that file. Images (JPG, PNG) always work; PDF needs internet to load the reader.','No pude abrir ese archivo. Las imágenes (JPG, PNG) siempre funcionan; el PDF necesita internet para cargar el lector.','Impossible d’ouvrir ce fichier. Les images (JPG, PNG) fonctionnent toujours ; le PDF nécessite internet pour charger le lecteur.']});
/* ---------- reconhecimento da escrita à mão ---------- */
function stFeat(p){let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9,len=0,rx=0,ry=0;
 p.forEach((q,i)=>{x0=Math.min(x0,q.x);x1=Math.max(x1,q.x);y0=Math.min(y0,q.y);y1=Math.max(y1,q.y);if(i)len+=Math.hypot(q.x-p[i-1].x,q.y-p[i-1].y)});
 let ax=p[0].x,ay=p[0].y,sx=0,sy=0;
 for(const q of p){if(Math.abs(q.x-ax)>3){const s=Math.sign(q.x-ax);if(sx&&s!==sx)rx++;sx=s;ax=q.x}if(Math.abs(q.y-ay)>3){const s=Math.sign(q.y-ay);if(sy&&s!==sy)ry++;sy=s;ay=q.y}}
 const a=p[0],b=p[p.length-1];return{p,x0,x1,y0,y1,w:x1-x0,h:y1-y0,cx:(x0+x1)/2,cy:(y0+y1)/2,len,gap:Math.hypot(b.x-a.x,b.y-a.y),rx,ry,a,b}}
function stKind(f){const m=Math.max(f.w,f.h),straight=f.len<1.3*Math.max(f.gap,1)+2;
 if(m<=7.5&&f.len<=18)return'dot';
 if(f.h>=14&&f.w<=.38*f.h&&straight)return'v';
 if(f.w>=9&&f.h<=.38*f.w&&(straight||f.h<=7))return'hz';
 if(f.h>=18&&f.rx>=2&&f.len>1.2*f.gap&&f.w>=5)return'zig';
 const closed=f.gap<=.5*m;
 if(m>=HU*.9&&m<=HU*3.4){const ratio=f.len/(Math.PI*(f.w+f.h)/2+1);
  if(ratio>=PB()||(m<=HU*1.4&&ratio>PB()*.815))return'hf';
  if(f.w>=.35*f.h&&f.h>=.35*f.w&&(closed||ratio>=.9&&f.gap<=.75*m))return'ho'}
 if(straight&&m>=9)return'diag';
 if(m<=HU*3&&!closed)return'fl';return'?'}
function evsIn(b){const sc=ED.sc;return ED.EV.filter(e=>{const ev=sc.ms[e.m].st[e.s][e.i];return ev&&ev.n&&e.x>=b.x0-8&&e.x<=b.x1+8&&b.y1>=e.y0&&b.y0<=e.y1})}
function accTarget(cx,cy){let best=null,bd=1e9;ED.EV.forEach(e=>{const dx=e.x-cx;if(dx>=2&&dx<=40&&e.ys)e.ys.forEach((y,k)=>{if(Math.abs(y-cy)<=11&&dx<bd){bd=dx;best={e,k}}})});return best}
function splitNote(p){if(p.length<10)return[p];const f=stFeat(p);if(f.h<20||f.w>44)return[p];
 const tail=pts=>{const n=pts.length,e=pts[n-1];let best=n-1;for(let i=n-2;i>=0;i--){const a=pts[i],dx=e.x-a.x,dy=e.y-a.y,L=Math.hypot(dx,dy)||1;let dev=0;for(let j=i+1;j<n-1;j++){dev=Math.max(dev,Math.abs((pts[j].x-a.x)*dy-(pts[j].y-a.y)*dx)/L)}if(dev>1.7||Math.abs(dx)>.35*Math.abs(dy)+2)break;best=i}return best},okH=h=>{const q=stFeat(h);return q.w>=HU*.9&&q.w<=HU*3.4&&q.h>=HU*.6&&q.h<=HU*3.4&&q.len>=1.15*Math.max(q.w,q.h)};
 let i=tail(p);if(p.length-i>=4&&Math.abs(p[i].y-p[p.length-1].y)>=14){const h=p.slice(0,i+1);if(okH(h))return[h,p.slice(i)]}
 const r=p.slice().reverse();i=tail(r);if(r.length-i>=4&&Math.abs(r[i].y-r[r.length-1].y)>=14){const h=r.slice(0,i+1).reverse();if(okH(h))return[r.slice(i).reverse(),h]}
 return[p]}
function recog(S,kinds){const F=S.map(stFeat);F.forEach((f,i)=>f.k=(kinds&&kinds[i])||stKind(f));
 if(F.length===1){const f=F[0];if(f.rx>=4&&f.w>=22&&f.w>=.6*f.h&&f.h<=110&&f.w<=190&&evsIn(f).length)return{erase:{x0:f.x0,x1:f.x1,y0:f.y0,y1:f.y1}}}
 const heads=F.filter(f=>f.k==='hf'||f.k==='ho'),vs=F.filter(f=>f.k==='v'),hz=F.filter(f=>f.k==='hz'),dots=F.filter(f=>f.k==='dot'),zig=F.filter(f=>f.k==='zig'),oth=F.filter(f=>['diag','fl','?'].includes(f.k));
 if(zig.length&&!heads.length&&!vs.length&&F.length===zig.length&&zig.every(f=>f.h>=20&&f.w<=26&&f.h<=70))return{ops:zig.map(f=>({k:'r',len:8,x:f.cx,y:f.cy}))};
 if(!heads.length){
  const sl=[...vs,...oth].filter(f=>f.h>=12&&f.w/f.h>=.12&&(f.b.x-f.a.x)*(f.b.y-f.a.y)<0);
  if(sl.length&&dots.length){const s=sl[0],dd=dots.filter(d=>d.cx<=s.cx+4&&d.cy<=s.cy+4);if(dd.length)return{ops:[{k:'r',len:dd.length>=3?1:dd.length>=2?2:4,x:s.cx,y:s.cy}]}}
  const hb=hz.filter(f=>f.w<=HU*3.6);
  if(hb.length&&hb.length===F.length){const f=hb[0],h=hitL(f.cx,f.cy,32);if(h&&f.cy<=h.g.yb-8&&f.cy>=h.g.yb-30)return{ops:[{k:'r',len:h.g.yb-f.cy>=20?32:16,x:f.cx,y:f.cy}]}}
  const lines=F.filter(f=>['v','hz','diag'].includes(f.k));
  if(lines.length>=3&&vs.length>=2&&lines.length>vs.length){const cx=F.reduce((a,f)=>a+f.cx,0)/F.length,cy=F.reduce((a,f)=>a+f.cy,0)/F.length;const t=accTarget(cx,cy);if(t)return{ops:[{k:'acc',a:1,t}]}}
  return null}
 // bemol: haste + bojo à direita e embaixo, ao lado esquerdo de uma nota existente
 if(heads.length===1&&heads[0].k==='ho'&&vs.length===1&&heads[0].cx>vs[0].cx&&heads[0].cy>vs[0].cy){const t=accTarget((heads[0].cx+vs[0].cx)/2,heads[0].cy);if(t)return{ops:[{k:'acc',a:-1,t}]}}
 heads.sort((a,b)=>a.cx-b.cx);const cols=[];
 heads.forEach(h=>{const c=cols.find(c=>Math.abs(c.cx-h.cx)<=9);if(c){c.h.push(h);c.cx=c.h.reduce((s,q)=>s+q.cx,0)/c.h.length}else cols.push({cx:h.cx,h:[h],flags:0})});
 cols.forEach(c=>{const ys=c.h.map(h=>h.cy),mn=Math.min(...ys),mx=Math.max(...ys);
  const cand=vs.filter(s=>!s.used&&Math.abs(s.cx-c.cx)<=13&&s.y0<=mx+10&&s.y1>=mn-10).sort((a,b)=>Math.abs(a.cx-c.cx)-Math.abs(b.cx-c.cx));
  if(cand[0]){c.stem=cand[0];c.stem.used=true;const mid=(mn+mx)/2;c.free=Math.abs(c.stem.y0-mid)>Math.abs(c.stem.y1-mid)?{x:c.stem.cx,y:c.stem.y0}:{x:c.stem.cx,y:c.stem.y1}}});
 const bmL=[...oth,...hz.filter(f=>f.w>=14)].sort((a,b)=>b.w-a.w),bmK=[];bmL.forEach(g=>{if(g.w>=14&&g.h<=.8*g.w&&bmK.some(k=>k.w>=14&&k.h<=.8*k.w&&Math.min(k.x1,g.x1)-Math.max(k.x0,g.x0)>=.6*Math.min(k.w,g.w)&&Math.abs(k.cy-g.cy)<3.0))return;bmK.push(g)});
 bmK.forEach(g=>{
  if(g.w>=14&&g.h<=.8*g.w){let n=0;cols.forEach(c=>{if(c.free&&c.free.x>=g.x0-8&&c.free.x<=g.x1+8){const yy=g.a.y+(g.b.y-g.a.y)*((c.free.x-g.a.x)/((g.b.x-g.a.x)||1));if(Math.abs(c.free.y-yy)<=14||Math.abs(c.free.y-g.cy)<=14){c.flags++;n++}}});if(n)return}
  let bc=null,bd=18;cols.forEach(c=>{if(c.free){const dd=Math.min(Math.hypot(c.free.x-g.cx,c.free.y-g.cy),Math.hypot(c.free.x-g.a.x,c.free.y-g.a.y));if(dd<bd){bd=dd;bc=c}}});if(bc)bc.flags++});
 const ops=[];
 cols.forEach(c=>{const open=c.h.some(h=>h.k==='ho'),dd=dots.some(d=>{const dx=d.cx-c.cx;return dx>=5&&dx<=28&&c.h.some(h=>Math.abs(d.cy-h.cy)<=10)});
  const base=c.stem?(open?16:[8,4,2,1,.5][Math.min(4,c.flags)]):(open?32:8);
  const len=dd&&VL.includes(base*1.5)?base*1.5:base;
  ops.push({k:'n',len,base,free:c.free,dotted:len!==base,heads:c.h.map(h=>({x:h.cx,y:h.cy})),x:c.cx,y:c.h.reduce((s,h)=>s+h.cy,0)/c.h.length})});
 return ops.length?{ops}:null}
const nmDur=v=>T('scN'+v);
const dName=d=>LAT[((d%7)+7)%7]+Math.floor(d/7);
function applyRec(r){const sc=ED.sc;ED.recLab=null;
 if(r.erase){if(!eraseBox(r.erase))msg(T('scNoRec'));return}
 pushU();const labels=[];let last=null;
 for(const o of r.ops){
  if(o.k==='acc'){const ev=sc.ms[o.t.e.m].st[o.t.e.s][o.t.e.i];const ns=[...ev.n].sort((a,b)=>a.d-b.d);const n=ns[o.t.k];if(n){n.a=o.a;last={};labels.push(o.a>0?'♯':'♭');if(ED.hs.snd)sp([midiOf(sc,n)],.8)}continue}
  const h=hitL(o.x,o.y,o.len,6);if(!h)continue;
  if(o.k==='r'){last=putAt(sc,h.g.m,h.g.s,h.t,o.len,null);labels.push(T('scRestOf',nmDur(o.base||o.len)+(o.len!==(o.base||o.len)?' ·':'')))}
  else{const ds=[...new Set(o.heads.map(q=>{const hh=hitL(q.x,q.y,o.len,6);return hh?hh.d:h.d}))].sort((a,b)=>a-b);
   last=putAt(sc,h.g.m,h.g.s,h.t,o.len,ds.map(d=>({d,a:null})));ED.lastD[h.g.s]=ds[0];
   ED.lastN={m:h.g.m,s:h.g.s,t:h.t,base:o.base,dotted:o.dotted,stem:!!o.free,free:o.free||null,x:o.x,hy:o.heads.map(q=>q.y),at:Date.now()};
   labels.push(nmDur(o.base)+(o.dotted?' ·':'')+' — '+ds.map(dName).join(' + '));
   if(ED.hs.snd)sp(ds.map(d=>midiOf(sc,{d,a:null})),.8)}}
 if(!last){ED.und.pop();msg(T('scNoRec'));redraw();return}
 ED.recLab=labels.join('; ');fixSel();sSave();redraw();msg(T('scRecN',labels.join('; ')));const L0=labelOf(r);if(L0)toast(L0.x,L0.y,L0.t,true)}
/* ---------- registro ao vivo da escrita (texto) + aprendizado ---------- */
Object.assign(X,{lgT:['Registro da escrita ao vivo','Live handwriting log','Registro de escritura en vivo','Journal d’écriture en direct'],lgEmpty:['Escreva com a caneta na partitura: cada traço aparece aqui em texto, com o que o app entendeu. Toque ✔ se acertou ou ✖ para corrigir; o app aprende com você.','Write on the score with the pen: every stroke shows up here as text with what the app understood. Tap ✔ if right or ✖ to fix it; the app learns from you.','Escribe en la partitura con el lápiz: cada trazo aparece aquí en texto con lo que entendió la app. Toca ✔ si acertó o ✖ para corregir; la app aprende de ti.','Écrivez sur la partition au stylet : chaque trait apparaît ici en texte avec ce que l’app a compris. Touchez ✔ si c’est juste ou ✖ pour corriger ; l’app apprend de vous.'],lgWrote:['Escrito','Written','Escrito','Écrit'],lgRead:['Entendi','Understood','Entendí','Compris'],lgFail:['não reconheci','not recognized','no reconocí','non reconnu'],lgOkB:['✔ Certo','✔ Right','✔ Bien','✔ Juste'],lgBadB:['✖ Errado','✖ Wrong','✖ Mal','✖ Faux'],lgWhat:['O que era?','What was it?','¿Qué era?','C’était quoi ?'],lgIgn:['Ignorar','Ignore','Ignorar','Ignorer'],lgRestL:['Pausa','Rest','Silencio','Pause'],lgCopy:['Copiar texto','Copy text','Copiar texto','Copier le texte'],lgClear:['Limpar','Clear','Limpiar','Effacer'],lgHide:['Ocultar','Hide','Ocultar','Masquer'],lgAcc:['Acerto','Accuracy','Acierto','Précision'],lgCal:['Calibração pessoal','Personal calibration','Calibración personal','Calibrage personnel'],lgOn:['Registro ao vivo','Live log','Registro en vivo','Journal en direct'],lgCopied:['Registro copiado como texto. Cole aqui na conversa para eu calibrar.','Log copied as text. Paste it in the chat so I can calibrate.','Registro copiado como texto. Pégalo en el chat para calibrar.','Journal copié en texte. Collez-le dans la discussion pour calibrer.'],lgSaved:['Anotado para calibrar. A partitura não foi alterada.','Noted for calibration. The score was not changed.','Anotado para calibrar. La partitura no cambió.','Noté pour le calibrage. La partition n’a pas changé.'],lgFixed:['Corrigido e aprendido: {0}','Fixed and learned: {0}','Corregido y aprendido: {0}','Corrigé et appris : {0}'],lgUndone:['desfeito','undone','deshecho','annulé'],
 lgK_dot:['ponto','dot','punto','point'],lgK_v:['haste','stem','plica','hampe'],lgK_hz:['traço reto','straight line','trazo recto','trait droit'],lgK_zig:['zigue-zague','zigzag','zigzag','zigzag'],lgK_hf:['cabeça cheia','filled head','cabeza llena','tête pleine'],lgK_ho:['cabeça vazia','open head','cabeza vacía','tête vide'],lgK_diag:['diagonal','diagonal','diagonal','diagonale'],lgK_fl:['gancho','hook','gancho','crochet'],'lgK_?':['?','?','?','?']});
ED.hlog=(()=>{try{const a=JSON.parse(localStorage.getItem('pent_hlog'));return Array.isArray(a)?a.slice(-150):[]}catch(e){return[]}})();
ED.logOn=(()=>{try{return localStorage.getItem('pent_logon')!=='0'}catch(e){return true}})();
ED.prof=(()=>{try{const p=JSON.parse(localStorage.getItem('pent_prof'));if(p&&Array.isArray(p.ho)&&Array.isArray(p.hf))return{B:p.B||null,ho:p.ho.slice(-40),hf:p.hf.slice(-40)}}catch(e){}return{B:null,ho:[],hf:[]}})();
const PB=()=>ED.prof&&ED.prof.B||1.9;
function hlSave(){try{localStorage.setItem('pent_hlog',JSON.stringify(ED.hlog.slice(-150).map(e=>({id:e.id,t:e.t,wr:e.wr,hs:e.hs,rec:e.rec,ok:e.ok,want:e.want,src:e.src,len:e.len,auto:e.auto}))));localStorage.setItem('pent_prof',JSON.stringify(ED.prof))}catch(e){}}
const curMsg=()=>{const m=$('scmsg');return m?m.textContent.replace(/^Recognized: |^Reconhecido: /,''):''};
const medOf=a=>{const b=a.slice().sort((x,y)=>x-y),n=b.length;return n?(n%2?b[(n-1)/2]:(b[n/2-1]+b[n/2])/2):0};
function profUpd(){const P=ED.prof;if(P.ho.length>=3&&P.hf.length>=3){const a=medOf(P.ho),b=medOf(P.hf);if(b>a+.25)P.B=Math.max(1.35,Math.min(2.4,+((a+b)/2).toFixed(2)))}}
function logAdd(SS,r,fail,lab,src){if(!ED.hand||!SS||!SS.length)return;const F=SS.map(q=>{const f=stFeat(q);f.k=stKind(f);return f});
 const hf=F.filter(f=>f.k==='hf'||f.k==='ho'),hs=hf.map(f=>({r:+(f.len/(Math.PI*(f.w+f.h)/2+1)).toFixed(2),k:f.k,w:Math.round(f.w),h:Math.round(f.h)})),all=SS.flat(),
  cx=(Math.min(...all.map(p=>p.x))+Math.max(...all.map(p=>p.x)))/2,cy=(Math.min(...all.map(p=>p.y))+Math.max(...all.map(p=>p.y)))/2,op=r&&r.ops?r.ops.find(o=>o.k==='n'):null;
 const e={id:Date.now()+Math.random(),t:new Date().toTimeString().slice(0,8),wr:F.map(f=>f.k+':'+Math.round(f.w)+'x'+Math.round(f.h)),hs,rec:fail?null:(r&&r.erase?'apagar':(lab||'')),ok:null,src:src||'',len:op?op.len:null,r:r||null,und:ED.und.length,S:SS,kinds:F.map(f=>f.k),hc:hf.map(f=>({x:f.cx,y:f.cy})),cx,cy,at:Date.now()};
 ED.hlog.push(e);if(ED.hlog.length>150)ED.hlog.shift();hlSave();logRender()}
function logLearn(e,len){if(len==null||!e.hs.length)return;const kk=len>=16?'ho':'hf';e.hs.forEach(h=>{ED.prof[kk].push(h.r);if(ED.prof[kk].length>40)ED.prof[kk].shift()});profUpd();
 if(e.S){const id=Date.now();e.S.forEach((q,i)=>{let k=e.kinds[i];if(k==='hf'||k==='ho')k=kk;if(KINDS.includes(k))libAdd(stFeat(q),k,id)});libSave()}}
function logMk(e,w){if(w.k==='r')return{ops:[{k:'r',len:w.len,base:w.len,x:e.cx,y:e.cy}]};const hc=e.hc.length?e.hc:[{x:e.cx,y:e.cy}];return{ops:[{k:'n',len:w.len,base:w.len,dotted:false,free:null,heads:hc,x:hc.reduce((a,q)=>a+q.x,0)/hc.length,y:hc.reduce((a,q)=>a+q.y,0)/hc.length}]}}
function logVerdict(id,ok,w){const e=ED.hlog.find(x=>x.id===id);if(!e)return;
 if(ok){e.ok=true;e.want=null;logLearn(e,e.len);hlSave();logRender();return}
 e.ok=false;e.open=false;
 if(!w){e.want='—';hlSave();logRender();return}
 const nm=(w.k==='r'?T('lgRestL')+' ':'')+nmDur(w.len);e.want=nm;
 if(e.r&&!e.r.erase&&ED.und.length===e.und&&e.und>0){ED._noMark=true;undo();ED._noMark=false}else if(!(e.rec===null&&ED.und.length===e.und)&&e.rec!==null){msg(T('lgSaved'));if(w.k==='n')logLearn(e,w.len);hlSave();logRender();return}
 const rr=logMk(e,w);applyRec(rr);const sv=ED.recLab;if(w.k==='n')logLearn(e,w.len);e.rec=sv||e.rec;e.r=rr;e.len=w.k==='n'?w.len:null;e.und=ED.und.length;msg(T('lgFixed',nm));hlSave();logRender()}
function logText(){const ok=ED.hlog.filter(e=>e.ok===true).length,bad=ED.hlog.filter(e=>e.ok===false).length,P=ED.prof;
 let o=`Pentalia · registro de escrita · ${VER_TXT()} · ${new Date().toISOString()}\n${T('lgAcc')}: ✔${ok} ✖${bad}${ok+bad?' ('+Math.round(100*ok/(ok+bad))+'%)':''} · limiar cabeça cheia=${PB()} (vazias n=${P.ho.length} med=${medOf(P.ho).toFixed(2)}; cheias n=${P.hf.length} med=${medOf(P.hf).toFixed(2)})\n`;
 ED.hlog.slice(-80).forEach((e,i)=>{o+=`#${i+1} ${e.t} | escrito: ${e.wr.join(' + ')}${e.hs.length?' | razão cabeça: '+e.hs.map(h=>h.r).join(','):''} | entendi: ${e.rec===null?'NÃO RECONHECIDO':e.rec}${e.src?' ['+e.src+']':''} | ${e.ok===true?'CERTO':e.ok===false?'ERRADO'+(e.want?' → era: '+e.want:'')+(e.auto?' ('+e.auto+')':''):'sem marcar'}\n`});return o}
async function logCopy(){const x=logText();let ok=false;try{await navigator.clipboard.writeText(x);ok=true}catch(e){}if(!ok){try{const d=window.claude&&claude.use?await claude.use('downloads'):null;if(d){await d.save({filename:'pentalia-registro.txt',data:x});ok=true}}catch(e){}}msg(ok?T('lgCopied'):T('scDbgNo'))}
function logRender(){const el=$('sclog');if(!el)return;if(!ED.logOn||!ED.hand&&!ED.hlog.length){el.hidden=true;el.innerHTML='';return}el.hidden=false;
 const ok=ED.hlog.filter(e=>e.ok===true).length,bad=ED.hlog.filter(e=>e.ok===false).length,acc=ok+bad?Math.round(100*ok/(ok+bad))+'%':'—';
 const L=ED.hlog.slice(-6).reverse(),chips=(e)=>{const nn=[32,16,8,4,2].map(v=>`<button type="button" data-lg="fix" data-id="${e.id}" data-k="n" data-len="${v}">${nmDur(v)}</button>`).join(''),rr=[32,16,8,4].map(v=>`<button type="button" data-lg="fix" data-id="${e.id}" data-k="r" data-len="${v}">${T('lgRestL')} ${nmDur(v)}</button>`).join('');return`<div class="lgc"><b>${T('lgWhat')}</b>${nn}${rr}<button type="button" data-lg="fix" data-id="${e.id}" data-k="x">${T('lgIgn')}</button></div>`};
 el.innerHTML=`<div class="lgh"><b>${T('lgT')}</b><span class="lgs">${T('lgAcc')}: ✔${ok} · ✖${bad} · ${acc}${ED.prof.B?' · '+T('lgCal')+': '+ED.prof.B:''}</span><span class="lgb"><button type="button" data-lg="copy">${T('lgCopy')}</button><button type="button" data-lg="clear">${T('lgClear')}</button><button type="button" data-lg="hide">${T('lgHide')}</button></span></div>`
  +(L.length?L.map(e=>`<div class="lge ${e.ok===true?'ok':e.ok===false?'bad':''}"><div class="lgt"><span class="lgw">${T('lgWrote')}: ${e.wr.map(w=>{const[k,d]=w.split(':');return T('lgK_'+k)+' '+d}).join(' + ')}</span><span class="lgr">${T('lgRead')}: <b>${e.rec===null?T('lgFail'):esc(e.rec)}</b>${e.src?' <i>'+esc(e.src)+'</i>':''}</span>${e.ok===false&&e.want?`<span class="lgx">${[e.want&&e.want!=='—'?'→ '+esc(e.want):'',e.auto?esc(e.auto):''].filter(Boolean).join(' · ')}</span>`:''}</div><div class="lgv">${e.ok===null||e.ok===false&&!e.want?`<button type="button" data-lg="ok" data-id="${e.id}">${T('lgOkB')}</button><button type="button" data-lg="bad" data-id="${e.id}">${T('lgBadB')}</button>`:e.ok?'✔':'✖'}</div>${e.open?chips(e):''}</div>`).join(''):`<p class="lge">${T('lgEmpty')}</p>`);
 el.onclick=ev=>{const b=ev.target.closest('[data-lg]');if(!b)return;const a=b.dataset.lg,id=+b.dataset.id;
  if(a==='copy')logCopy();else if(a==='clear'){ED.hlog=[];hlSave();logRender()}else if(a==='hide'){ED.logOn=false;try{localStorage.setItem('pent_logon','0')}catch(e){}logRender();ribRender()}
  else if(a==='ok')logVerdict(id,true);else if(a==='bad'){const e=ED.hlog.find(x=>x.id===id);if(e){e.open=!e.open;logRender()}}
  else if(a==='fix'){b.dataset.k==='x'?logVerdict(id,false,null):logVerdict(id,false,{k:b.dataset.k,len:+b.dataset.len})}}}
/* traço único com quinas (haste+ligadura+haste, haste+colcheia): divide em partes */
function resamp(p,st){const o=[p[0]];let acc=0,prev=p[0];for(let i=1;i<p.length;i++){let a=prev,b=p[i],d=Math.hypot(b.x-a.x,b.y-a.y);while(acc+d>=st){const t=(st-acc)/d;a={x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t};o.push(a);d=Math.hypot(b.x-a.x,b.y-a.y);acc=0}acc+=d;prev=b}if(Math.hypot(o[o.length-1].x-p[p.length-1].x,o[o.length-1].y-p[p.length-1].y)>1)o.push(p[p.length-1]);return o}
function splitCorner(p){if(p.length<10)return[p];const f0=stFeat(p);if(f0.h<14||f0.w>80||f0.len<24)return[p];const k0=stKind(f0);if(k0==='hf'||k0==='ho')return[p];
 const r=resamp(p,1.5),n=r.length;if(n<14)return[p];const ang=(a,b)=>Math.atan2(b.y-a.y,b.x-a.x),cs=[];
 for(let i=3;i<n-3;i++){let t=Math.abs(ang(r[i],r[i+3])-ang(r[i-3],r[i]));if(t>Math.PI)t=2*Math.PI-t;if(t>1.0)cs.push({i,t})}
 const pk=[];cs.forEach(c=>{const l=pk[pk.length-1];if(l&&c.i-l.i<=5){if(c.t>l.t)pk[pk.length-1]=c}else pk.push(c)});
 if(pk.length>3)return[p];const cuts=[0,...pk.map(c=>c.i),n-1];let parts=[];for(let k=0;k<cuts.length-1;k++){const q=r.slice(cuts[k],cuts[k+1]+1);if(q.length<3)return[p];parts.push(q)}
 const vrun=(q,end)=>{const m=q.length,e=end?q[m-1]:q[0];let j=end?m-1:0;const st=end?-1:1;let k=j;while(k+st>=0&&k+st<m&&Math.abs(q[k+st].x-e.x)<=2.4+.14*Math.abs(q[k+st].y-e.y))k+=st;return{k,len:Math.abs(q[k].y-e.y)}};
 const peeled=[];parts.forEach(q=>{const f=stFeat(q);if(stKind(f)==='v'||q.length<12){peeled.push(q);return}let cur=q,tail=null,lead=null;
  const t=vrun(cur,true);if(t.len>=12&&cur.length-1-(cur.length-1-t.k)>=5&&t.k>=5){tail=cur.slice(t.k);cur=cur.slice(0,t.k+1)}
  const h=vrun(cur,false);if(h.len>=12&&h.k>=3&&cur.length-h.k>=5){lead=cur.slice(0,h.k+1);cur=cur.slice(h.k)}
  if(lead)peeled.push(lead);peeled.push(cur);if(tail)peeled.push(tail)});
 parts=peeled;if(parts.length<2)return[p];if(parts.length>5)return[p];
 const F=parts.map(q=>{const f=stFeat(q);f.k=stKind(f);return f});
 if(F.some(f=>f.k==='hf'||f.k==='ho'))return[p];
 const stems=F.filter(f=>f.k==='v'&&f.h>=12);if(!stems.length)return[p];
 if(F.every(f=>f.k==='diag'||f.k==='hz'||f.k==='v')&&F.filter(f=>f.k==='diag').length>=1&&stems.length<2&&F.length>=3)return[p];
 return parts}
function procGroup(){inkT=null;let S=ED.grp;ED.grp=[];const ink=$('scink');if(ink)ink.innerHTML='';if(!S.length)return;
 if(S.length===1){const f=stFeat(S[0]);if(Math.max(f.w,f.h)<=8){if(ED.rpt){rptPickAt(S[0][0]);return}tapLone(S[0][0]);return}}
 if(ED.hand&&S.length===1){const rf=rectOf(S[0]);if(rf){rectApply(rf);return}const cf=circleOf(S[0]);if(cf){circleApply(cf);return}}
 if(S.length>1&&!ED.hand&&S.every(q=>{const f=stFeat(q);return Math.max(f.w,f.h)<=8})){S.forEach(q=>tapLone(q[0]));return}
 if(ED.hand&&chBandPts(S[0])){recChord(S);logAdd(S,null,false,curMsg(),'acorde');return}
 if(ED.hand&&S.some(q=>q.length>9)){const S2=S.flatMap(splitCorner);if(S2.length!==S.length)S=S2}
 if(ED.hand&&ED.hs.amend&&amend(S)){logAdd(S,null,false,curMsg(),'ajuste');return}
 aiBtnHide();const SS=ED.hand?S.flatMap(splitNote):S,LK=ED.hand?libKinds(SS):null;
 let r=ED.hand?(LK&&recog(SS,LK))||recog(SS):(S.length===1?(()=>{const f=stFeat(S[0]);return f.rx>=4&&f.w>=22&&f.w<=190&&f.h<=110&&evsIn(f).length?{erase:{x0:f.x0,x1:f.x1,y0:f.y0,y1:f.y1}}:null})():null);
 (ED.dbg=ED.dbg||[]).push({t:new Date().toISOString(),hand:ED.hand,z:ED.z,dur:ED.dur,strokes:S.map(q=>{const st=Math.max(1,Math.floor(q.length/40));return q.filter((_,i)=>i%st===0||i===q.length-1).map(a=>[+a.x.toFixed(1),+a.y.toFixed(1)])}),kinds:S.map(q=>{const f=stFeat(q);return stKind(f)+':'+f.w.toFixed(0)+'x'+f.h.toFixed(0)}),res:r?(r.erase?'erase':(r.ops||[]).map(o=>o.k+(o.len!=null?o.len:o.a!=null?o.a:''))):null});if(ED.dbg.length>25)ED.dbg.shift();
 if(!r){if(ED.hand){msg(T('scNoRec'));toast(S[0][0].x,S[0][0].y,'?',false);ED.lastFail={S:SS,at:Date.now()};logAdd(SS,null,true);aiBtnShow();if(ED.hs.aiAuto&&ED.aiOK)aiAsk()}return}const pk=ED.und.length;applyRec(r);if(ED.hand)logAdd(SS,r,ED.recLab==null&&!r.erase,ED.recLab)}
function amend(S){const L=ED.lastN;if(!L||Date.now()-L.at>12000)return false;const F=S.map(stFeat);F.forEach(f=>f.k=stKind(f));
 const sc=ED.sc,evs=sc.ms[L.m]&&sc.ms[L.m].st[L.s];if(!evs)return false;const i=idxAt(evs,L.t),ev=evs[i];if(!ev||!ev.n)return false;
 const ys=L.hy,ymin=Math.min(...ys),ymax=Math.max(...ys),hx=L.x;let base=L.base,dotted=L.dotted,stem=L.stem,free=L.free,flags=0,used=0;const add=[];
 for(const f of F){
  if(f.k==='dot'&&f.cx-hx>=5&&f.cx-hx<=28&&ys.some(y=>Math.abs(f.cy-y)<=10)){dotted=true;used++;continue}
  if(f.k==='v'&&!stem&&Math.abs(f.cx-hx)<=13&&f.y0<=ymax+10&&f.y1>=ymin-10){stem=true;const mid=(ymin+ymax)/2;free=Math.abs(f.y0-mid)>Math.abs(f.y1-mid)?{x:f.cx,y:f.y0}:{x:f.cx,y:f.y1};if(base===32)base=16;used++;continue}
  if((f.k==='hf'||f.k==='ho')&&Math.abs(f.cx-hx)<=9){add.push(f);used++;continue}
  if(stem&&free&&['fl','diag','?','hz'].includes(f.k)&&Math.hypot(f.cx-free.x,f.cy-free.y)<=26){flags++;used++;continue}}
 if(!used||used!==F.length)return false;
 if(flags&&(base===8||base===4||base===2||base===1||base===.5))base=[8,4,2,1,.5][Math.min(4,flags)];
 const len=dotted&&VL.includes(base*1.5)?base*1.5:base;
 const notes=ev.n.map(n=>({...n}));add.forEach(f=>{const h=hitL(f.cx,f.cy,len,6);if(h&&!notes.some(n=>n.d===h.d))notes.push({d:h.d,a:null})});notes.sort((a,b)=>a.d-b.d);
 pushU();const r=putAt(sc,L.m,L.s,L.t,len,notes);ED.sel=r.sel;ED.selX=false;ED.cur=r.cur;
 ED.lastN={...L,base,dotted:len!==base,stem,free,hy:[...ys,...add.map(f=>f.cy)],at:Date.now()};sSave();redraw();
 msg(T('scRecN',nmDur(base)+(len!==base?' ·':'')+' — '+notes.map(n=>dName(n.d)).join(' + ')));toast(L.x,ymin,nmDur(base)+(len!==base?' ·':''),true);return true}
function toast(x,y,txt,ok){const sv=$('scsvg');if(!sv)return;const old=$('sctoast');if(old)old.remove();
 const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.id='sctoast';g.setAttribute('pointer-events','none');
 const fs=13/ED.z,t=document.createElementNS('http://www.w3.org/2000/svg','text');t.textContent=txt;t.setAttribute('x',x);t.setAttribute('y',Math.max(fs+4,y-30));t.setAttribute('text-anchor','middle');t.setAttribute('font-size',fs);t.setAttribute('font-weight','700');t.setAttribute('font-family','Nunito,sans-serif');t.setAttribute('fill','#fff');
 g.appendChild(t);sv.appendChild(g);const bb=t.getBBox(),p=5/ED.z,r=document.createElementNS('http://www.w3.org/2000/svg','rect');
 r.setAttribute('x',bb.x-p);r.setAttribute('y',bb.y-p/2);r.setAttribute('width',bb.width+2*p);r.setAttribute('height',bb.height+p);r.setAttribute('rx',6/ED.z);r.setAttribute('fill',ok?'#1f9d63':'#2563eb');if(!ok)r.setAttribute('opacity','.85');g.insertBefore(r,t);
 clearTimeout(toast.t);toast.t=setTimeout(()=>{const e=$('sctoast');if(e)e.remove()},ok?1800:1200)}
function labelOf(r){if(!r)return null;if(r.erase)return{x:(r.erase.x0+r.erase.x1)/2,y:r.erase.y0,t:T('scDel')};const o=r.ops&&r.ops[0];if(!o)return null;
 if(o.k==='acc')return{x:o.t.e.x,y:Math.min(...o.t.e.ys),t:o.a>0?'♯':'♭'};
 if(o.k==='r')return{x:o.x,y:o.y,t:T('scRestOf',nmDur(o.base||o.len)+(o.len!==(o.base||o.len)?' ·':''))};
 const hh=o.heads.map(q=>{const h=hitL(q.x,q.y,o.len,6);return h?dName(h.d):''}).filter(Boolean);return{x:o.x,y:Math.min(...o.heads.map(q=>q.y)),t:nmDur(o.base)+(o.dotted?' ·':'')+(hh.length?' · '+hh.join('+'):'')}}
function previewGroup(){if(!ED.hand||!ED.grp.length)return;if(chBandPts(ED.grp[0])){try{const r=gRecognize(ED.grp);if(r.text)toast(r.x0,r.y0,r.text+' …',false)}catch(e){}return}try{const L=labelOf(recog(ED.grp));if(L)toast(L.x,L.y,L.t+' …',false);else toast(ED.grp[0][0].x,ED.grp[0][0].y,'…',false)}catch(e){}}
function eraseBox(b){const sc=ED.sc,hits=evsIn(b);if(!hits.length)return false;pushU();
 hits.forEach(h=>{const evs=sc.ms[h.m].st[h.s];if(evs[h.i])evs[h.i]={n:null,len:evs[h.i].len}});sc.ms.forEach(m=>m.st.forEach((e,s)=>{m.st[s]=normStaff(e,capOf(sc))}));ED.sel=null;sSave();redraw();return true}
function tapDot(p){if(!ED.hand||ED.rest)return false;const sc=ED.sc;let best=null;
 ED.EV.forEach(e=>{const dx=p.x-e.x;if(dx>=8&&dx<=24&&e.ys)e.ys.forEach(y=>{if(Math.abs(y-p.y)<=6)best=e})});
 if(!best)return false;const evs=sc.ms[best.m].st[best.s],ev=evs[best.i];if(!ev||!ev.n)return false;
 const nl=ev.len*1.5;if(!VL.includes(nl)||DOT.includes(ev.len))return false;
 pushU();const r=putAt(sc,best.m,best.s,evStart(evs,best.i),nl,ev.n);ED.sel=r.sel;ED.cur=r.cur;sSave();redraw();msg(T('scRecN',nmDur(ev.len)+' ·'));return true}
function tapLone(p){if(msTap(p))return;if(chTap(p))return;if(tapDot(p))return;const h=hit(p.x,p.y);if(!h){ED.sel=null;ED.csel=null;ED.msel=null;redraw();return}
 if(ED.hand&&ED.gType!=='mouse'){msg(T('scHandOff'));return}place(h.g.m,h.g.s,h.t,h.d)}
function tapAt(p){if(msTap(p))return;if(chTap(p))return;if(tapDot(p))return;const h=hit(p.x,p.y);if(!h){ED.sel=null;redraw();return}place(h.g.m,h.g.s,h.t,h.d)}
function sPU0(ev){if(ev.pointerType==='touch'){PTR.delete(ev.pointerId);if(PZ&&PTR.size<2){pinchEnd();if(sDown)sDown=null;return}}
 const d=sDown;if(!d||d.id!==ev.pointerId)return;sDown=null;
 const mv=Math.hypot(ev.clientX-d.x,ev.clientY-d.y),tap=mv<=7&&Date.now()-d.t<600;
 const evEl=ev.target.closest&&ev.target.closest('g.ev');let noteHit=evEl&&ED.sc.ms[+evEl.dataset.m]&&ED.sc.ms[+evEl.dataset.m].st[+evEl.dataset.s][+evEl.dataset.i].n;
 if(noteHit&&!ED.chord&&!ED.pend){const pp=sPt(ev),hh=hit(pp.x,pp.y),m=+evEl.dataset.m,s=+evEl.dataset.s,i=+evEl.dataset.i,evs=ED.sc.ms[m].st[s],st0=evStart(evs,i);if(hh&&hh.g.m===m&&hh.g.s===s&&(hh.t<st0||hh.t>=st0+evs[i].len))noteHit=false}
 if(d.dr&&(!tap||ED.grp.length||(d.type!=='mouse'&&!noteHit))){if(d.pl)d.pl.remove();if(tap&&d.pts.length<2)d.pts.push({...d.pts[0]});ED.grp.push(d.pts);ED.gType=d.type;
  const onlyTaps=ED.grp.every(p=>{const f=stFeat(p);return Math.max(f.w,f.h)<=8});
  const g=$('scink');if(g&&!tap){const pl=document.createElementNS('http://www.w3.org/2000/svg','polyline');pl.setAttribute('points',d.pts.map(q=>q.x.toFixed(1)+','+q.y.toFixed(1)).join(' '));g.appendChild(pl)}
  clearTimeout(inkT);inkT=setTimeout(procGroup,ED.hand&&ED.grp.length===1&&(rectOf(ED.grp[0])||circleOf(ED.grp[0]))?350:inkWait(onlyTaps,ED.hand&&chBandPts(ED.grp[0])));previewGroup();return}
 if(d.pl)d.pl.remove();
 if(!d.dr&&d.type==='touch'&&(ED.pen||mv>10||Date.now()-d.t>600))return;
 const p=sPt(ev);
 if(noteHit&&ED.pend){spanFinish(+evEl.dataset.m,+evEl.dataset.s,+evEl.dataset.i);return}
 if(noteHit&&!ED.chord){ED.msel=null;ED.selX=true;ED.sel={m:+evEl.dataset.m,s:+evEl.dataset.s,i:+evEl.dataset.i};const e=selEv();ED.cur={m:ED.sel.m,s:ED.sel.s,t:evStart(ED.sc.ms[ED.sel.m].st[ED.sel.s],ED.sel.i)};if(e&&e.n)sp(e.n.map(n=>midiOf(ED.sc,n)),.8);redraw();return}
 tapAt(p)}
function sKey(ev){if(view!=='S')return;const tg=ev.target&&ev.target.tagName;if(tg==='INPUT'||tg==='SELECT'||tg==='TEXTAREA')return;
 const k=ev.key,mod=ev.metaKey||ev.ctrlKey;
 if(mod&&k.toLowerCase()==='z'){ev.preventDefault();ev.shiftKey?redo():undo();return}
 if(mod){const kk=k.toLowerCase();if(kk==='c'){ev.preventDefault();mCopy()}else if(kk==='x'){ev.preventDefault();mCopy(true)}else if(kk==='v'){ev.preventDefault();mPaste()}else if(kk==='a'){ev.preventDefault();mAll()}else if(kk==='d'){ev.preventDefault();mPaste(true)}return}
 if(k==='Escape'&&ED.msel){mNone();return}
 if(ED.nvSel&&(k==='Delete'||k==='Backspace')){ev.preventDefault();const o=ED.nvSel,n_=nvName(o);pushU();nvRemove(o);ED.nvSel=null;sSave();redraw();msg(T('nvDel',n_));return}
 if(ED.msel&&(k==='Delete'||k==='Backspace')){ev.preventDefault();mClear();return}
 const L=k.toUpperCase();
 if(/^[A-G]$/.test(L)&&k.length===1){ev.preventDefault();const si=ED.cur.s,li=LN.indexOf(L);let best=null;for(let o=1;o<8;o++){const d=o*7+li;if(best===null||Math.abs(d-ED.lastD[si])<Math.abs(best-ED.lastD[si]))best=d}
  if(ED.cur.m>=ED.sc.ms.length)ED.sc.ms.push(blankM(ED.sc));place(ED.cur.m,si,ED.cur.t,best);return}
 if(/^[1-8]$/.test(k)){ED.dur=[1,2,4,8,16,32,.5,64][+k-1];if(ED.dur===32&&ED.dot)ED.dot=false;const e=selEv();syncTB();return}
 if(k==='.'){ED.dot=!ED.dot;syncTB();return}
 if(k==='r'||k==='R'){if(ED.sel||true){ED.rest=!ED.rest;syncTB()}return}
 if(k==='ArrowUp'){ev.preventDefault();moveSel(ev.shiftKey?7:1);return}
 if(k==='ArrowDown'){ev.preventDefault();moveSel(ev.shiftKey?-7:-1);return}
 if(k==='ArrowRight'){ev.preventDefault();stepSel(1);return}
 if(k==='ArrowLeft'){ev.preventDefault();stepSel(-1);return}
 if(k==='Delete'||k==='Backspace'){ev.preventDefault();delSel();return}
 if(k===' '){ev.preventDefault();sPlay();return}}
/* ---------- reprodução ---------- */
function mOrder(sc){const M=sc.ms,n=M.length,o=[],cnt={};let i=0,g=0,st=0,jumped=false,jt=null;const seg=M.findIndex(m=>m.nav&&m.nav.seg);
 while(i<n&&g++<900){const m=M[i],nv=m.nav||{};if(m.rs)st=i;const pass=(cnt[st]||0)+1;
  if(m.vo&&m.vo.length&&(jumped?(m.vo.length===1&&m.vo[0]===1):!m.vo.includes(pass))){i++;continue}
  o.push(i);
  if(jumped&&jt==='fine'&&nv.fine)break;
  if(jumped&&jt==='coda'&&nv.tocoda){let c=-1;for(let k=i+1;k<n;k++)if(M[k].nav&&M[k].nav.coda){c=k;break}if(c<0)c=M.findIndex(x=>x.nav&&x.nav.coda);if(c>=0){i=c;jt=null;continue}}
  if(!jumped&&m.bar==='re'){if(!cnt['d'+i]){cnt['d'+i]=1;cnt[st]=(cnt[st]||0)+1;i=st;continue}st=i+1}
  if(!jumped&&nv.jump){const j=nv.jump;jumped=true;jt=j.length===3?(j[2]==='f'?'fine':'coda'):null;i=j[1]==='s'?(seg>=0?seg:0):0;continue}
  i++}
 return o}

/* ---------- timbres, metrônomo e acompanhamento ---------- */
Object.assign(X,{gSound:['Som','Sound','Sonido','Sonido'],gMet:['Metrônomo e acompanhamento','Metronome & follow','Metrónomo y seguimiento','Métronome et suivi'],
gWait:['Escrita à mão','Handwriting','Escritura','Écriture'],scWaitL:['Espera da escrita à mão','Handwriting pause','Espera de la escritura','Pause d’écriture'],scWaitF:['Curta (1 s)','Short (1 s)','Corta (1 s)','Courte (1 s)'],scWaitN:['Normal (1,5 s)','Normal (1.5 s)','Normal (1,5 s)','Normal (1,5 s)'],scWaitG:['Longa (2,4 s)','Long (2.4 s)','Larga (2,4 s)','Longue (2,4 s)'],scWaitOk:['Pronto: o app espera esse tempo depois do último traço antes de reconhecer.','Done: the app waits this long after your last stroke before recognizing.','Listo: la app espera este tiempo tras el último trazo antes de reconocer.','Fait : l’app attend ce délai après le dernier trait avant de reconnaître.'],scInstL:['Instrumento','Instrument','Instrumento','Instrument'],
inPiano:['Piano','Piano','Piano','Piano'],inMarimba:['Marimba','Marimba','Marimba','Marimba'],inVibes:['Vibrafone','Vibraphone','Vibráfono','Vibraphone'],inEp:['Piano elétrico','Electric piano','Piano eléctrico','Piano électrique'],inOrgan:['Órgão','Organ','Órgano','Orgue'],inBox:['Caixa de música','Music box','Caja de música','Boîte à musique'],inNylon:['Violão nylon','Nylon guitar','Guitarra de nylon','Guitare nylon'],inStr:['Cordas (pad)','Strings (pad)','Cuerdas (pad)','Cordes (pad)'],
scMet:['Metrônomo (clique no tempo)','Metronome (click on the beat)','Metrónomo (clic en el pulso)','Métronome (clic sur le temps)'],scCnt:['Pré-contagem de 1 compasso','1-bar count-in','Cuenta previa de 1 compás','Décompte d’1 mesure'],scFol:['Seguir a nota tocada na tela','Follow the playing note on screen','Seguir la nota que suena en pantalla','Suivre la note jouée à l’écran'],
scCount:['Pré-contagem…','Count-in…','Cuenta previa…','Décompte…'],scBeatN:['Compasso {0} · tempo {1}','Bar {0} · beat {1}','Compás {0} · tiempo {1}','Mesure {0} · temps {1}']});
const SINST=[['piano','inPiano'],['marimba','inMarimba'],['vibes','inVibes'],['epiano','inEp'],['organ','inOrgan'],['musicbox','inBox'],['nylon','inNylon'],['strings','inStr']];
function sHold(c,m,t,dur,v){const k=ED.hs.inst||'piano';if(k==='piano'){hold(c,m,t,dur,v);return}
 const f=A4*Math.pow(2,(m-69)/12),osc=(fr,type,amp,att,dec,end,dest)=>{const o=c.createOscillator(),g=c.createGain();o.type=type||'sine';o.frequency.value=fr;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(amp,t+att);g.gain.exponentialRampToValueAtTime(Math.max(.0002,amp*.0006),t+Math.max(att+.02,dec));o.connect(g);g.connect(dest||mst);o.start(t);o.stop(t+Math.max(att+.03,dec)+.05);return g};
 if(k==='nylon'){pluck(c,m,t,v*1.3);return}
 if(k==='marimba'){const d=Math.max(.35,Math.min(1.5,360/f)),lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=Math.min(5000,f*9);lp.connect(mst);
  osc(f,'sine',v*3.4,.003,d,0,lp);osc(f*3.99,'sine',v*1.25,.002,Math.min(.22,d*.35),0,lp);osc(f*9.9,'sine',v*.32,.001,.06,0,lp);return}
 if(k==='vibes'){const d=Math.max(.9,Math.min(2.6,dur+.7)),g=osc(f,'sine',v*2.6,.004,d,0);osc(f*4,'sine',v*.5,.003,.35,0);const l=c.createOscillator(),lg=c.createGain();l.frequency.value=5.2;lg.gain.value=v*.9;l.connect(lg);const m2=c.createGain();m2.gain.value=1;l.start(t);l.stop(t+d+.1);return}
 if(k==='epiano'){const d=Math.max(.8,Math.min(2.2,dur+.5)),car=c.createOscillator(),mod=c.createOscillator(),mg=c.createGain(),g=c.createGain();car.frequency.value=f;mod.frequency.value=f;mg.gain.setValueAtTime(f*1.6,t);mg.gain.exponentialRampToValueAtTime(f*.12,t+.5);mod.connect(mg);mg.connect(car.frequency);
  g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v*2.4,t+.006);g.gain.exponentialRampToValueAtTime(v*.8,t+.35);g.gain.exponentialRampToValueAtTime(.0003,t+d);car.connect(g);g.connect(mst);car.start(t);mod.start(t);car.stop(t+d+.05);mod.stop(t+d+.05);return}
 if(k==='organ'){const d=Math.max(.2,dur);const g=c.createGain();g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v*1.3,t+.02);g.gain.setValueAtTime(v*1.3,t+Math.max(.03,d-.05));g.gain.linearRampToValueAtTime(.0001,t+d+.06);g.connect(mst);
  [[1,1],[2,.5],[3,.28],[4,.15]].forEach(([h,a])=>{const o=c.createOscillator(),gg=c.createGain();o.frequency.value=f*h;gg.gain.value=a;o.connect(gg);gg.connect(g);o.start(t);o.stop(t+d+.1)});return}
 if(k==='musicbox'){const ff=f*2;osc(ff,'sine',v*2.2,.002,1.1);osc(ff*2.76,'sine',v*.7,.001,.5);osc(ff*5.4,'sine',v*.25,.001,.2);return}
 if(k==='strings'){const d=Math.max(.35,dur),g=c.createGain(),lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=Math.min(3000,f*5);g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v*.9,t+.14);g.gain.setValueAtTime(v*.9,t+Math.max(.15,d-.05));g.gain.linearRampToValueAtTime(.0001,t+d+.25);lp.connect(g);g.connect(mst);
  [-6,6].forEach(dt=>{const o=c.createOscillator();o.type='sawtooth';o.frequency.value=f;o.detune.value=dt;const gg=c.createGain();gg.gain.value=.5;o.connect(gg);gg.connect(lp);o.start(t);o.stop(t+d+.3)});return}}
function sp(ms,vol){if((ED.hs.inst||'piano')==='piano'){play(ms,vol);return}whenReady(c=>{const t=c.currentTime+.01;ms.forEach((m,k)=>sHold(c,m,t+k*.03,.9,(vol||1)*.16/Math.sqrt(ms.length)))})}
function sClick(c,t,acc){const o=c.createOscillator(),g=c.createGain();o.type='triangle';o.frequency.value=acc?1760:1180;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(acc?.22:.13,t+.002);g.gain.exponentialRampToValueAtTime(.0001,t+.055);o.connect(g);g.connect(mst);o.start(t);o.stop(t+.07)}
const beatU=sc=>sc.den===8?(sc.num%3===0&&sc.num>=6?12:4):sc.den===2?16:8;
function playHL(mi,L){document.querySelectorAll('g.ev.ph').forEach(e=>e.classList.remove('ph'));let first=null;
 L.forEach(({s,i})=>{const g=document.querySelector(`g.ev[data-m="${mi}"][data-s="${s}"][data-i="${i}"]`);if(g)g.classList.add('ph');if(first===null)first={s,i}});
 const e=first&&ED.EV.find(q=>q.m===mi&&q.s===first.s&&q.i===first.i),ln=$('scplay');if(!e||!ln)return;const y0=ED.SYY[e.sy];ln.setAttribute('x1',e.x-9);ln.setAttribute('x2',e.x-9);ln.setAttribute('y1',y0-12);ln.setAttribute('y2',y0+ED.SH+12);
 if(ED.hs.fol&&ED._psy!==e.sy){ED._psy=e.sy;const sv=$('scsvg');if(sv){const r=sv.getBoundingClientRect(),ypx=r.top+y0*ED.z;if(ypx<90||ypx>innerHeight*.55)window.scrollTo({top:window.scrollY+ypx-innerHeight*.22,behavior:'smooth'})}}}
function playClear(){(ED.tmh||[]).forEach(clearTimeout);ED.tmh=[];ED._psy=null;document.querySelectorAll('g.ev.ph').forEach(e=>e.classList.remove('ph'));const ln=$('scplay');if(ln){ln.setAttribute('x1',-50);ln.setAttribute('x2',-50)}}

function sPlay(){if(ED.playing){sStop();return}const sc=ED.sc,ord=mOrder(sc),u=60/sc.tempo/8,cap=capOf(sc),beat=beatU(sc);ED.playing=true;const id=++ED.pt;ED.tmh=[];syncTB();ppShow();
 const nextOf=(mi,s,i)=>{const evs=sc.ms[mi].st[s];return evs[i+1]||(sc.ms[mi+1]&&sc.ms[mi+1].st[s][0])};
 const step=k=>{if(id!==ED.pt)return;if(k>=ord.length){ED.playing=false;playClear();msg('');ppHide();syncTB();return}
  const mi=ord[k];msg(T('scPlaying',mi+1));ppSet(T('scPlaying',mi+1));
  whenReady(c=>{const t0=c.currentTime+.05;
   if(ED.hs.met)for(let p=0,b=0;p<cap;p+=beat,b++){sClick(c,t0+p*u,p===0);ED.tmh.push(setTimeout(()=>{if(id===ED.pt)msg(T('scBeatN',mi+1,b+1))},(.05+p*u)*1000))}
   const starts=new Map();sc.ms[mi].st.forEach((evs,s)=>{let p=0;evs.forEach((e,i)=>{if(!starts.has(p))starts.set(p,[]);starts.get(p).push({s,i});p+=e.len})});
   starts.forEach((L,p)=>ED.tmh.push(setTimeout(()=>{if(id===ED.pt)playHL(mi,L)},(.05+p*u)*1000)));
   if(ED.hs.chp)(sc.ms[mi].ch||[]).forEach((cc,ci,arr)=>{const r=parseChord(cc.x);if(!r.ok)return;const nx=arr[ci+1]?arr[ci+1].t:cap,v=.05/Math.sqrt(r.items.length);r.items.forEach(it=>hold(c,it.m,t0+cc.t*u,(nx-cc.t)*u-.05,v))});
   sc.ms[mi].st.forEach((evs,s)=>{let p=0;evs.forEach((e,i)=>{if(e.n){const prev=i>0?evs[i-1]:(sc.ms[mi-1]&&sc.ms[mi-1].st[s][sc.ms[mi-1].st[s].length-1]);
     e.n.forEach(n=>{const tiedIn=prev&&prev.tie&&prev.n&&prev.n.some(q=>q.d===n.d&&sAlt(sc,q)===sAlt(sc,n));if(tiedIn&&k>0&&ord[k-1]===mi-1||tiedIn&&i>0)return;
      let dur=e.len,cm=mi,ci=i,ce=e;while(ce.tie){const nx=nextOf(cm,s,ci);if(!nx||!nx.n||!nx.n.some(q=>q.d===n.d&&sAlt(sc,q)===sAlt(sc,n)))break;dur+=nx.len;if(ci+1<sc.ms[cm].st[s].length)ci++;else{cm++;ci=0}ce=nx;if(dur>96)break}
      const v=(e.dyn?(DVOL[e.dyn]||.15):.15)/Math.sqrt(e.n.length),sd=e.art==='stac'?Math.min(dur,2):dur;sHold(c,midiOf(sc,n),t0+p*u,Math.max(.04,sd*u-.04),v*(e.art==='acc'||e.art==='marc'?1.4:1))})}p+=e.len})});
  });
  ED.tmh.push(setTimeout(()=>step(k+1),cap*u*1000))};
 if(ED.hs.cnt){msg(T('scCount'));whenReady(c=>{const t0=c.currentTime+.05;for(let p=0;p<cap;p+=beat)sClick(c,t0+p*u,p===0)});ED.tmh.push(setTimeout(()=>step(0),cap*u*1000+50))}else step(0)}
function sStop(){ED.pt++;ED.playing=false;playClear();msg('');ppHide();syncTB()}
/* ---------- MusicXML ---------- */
const TYN={64:'breve',32:'whole',16:'half',8:'quarter',4:'eighth',2:'16th',1:'32nd',.5:'64th'};
function harmXml(c){const mm=/^([A-G])([#b]?)(.*?)(?:\/([A-G])([#b]?))?$/.exec(c.x);if(!mm)return '';const al=a=>a==='#'?1:a==='b'?-1:0,R=mm[3];
 const K={'':'major','m':'minor','min':'minor','-':'minor','7':'dominant','maj7':'major-seventh','M7':'major-seventh','m7':'minor-seventh','dim':'diminished','dim7':'diminished-seventh','aug':'augmented','+':'augmented','sus4':'suspended-fourth','sus2':'suspended-second','6':'major-sixth','m6':'minor-sixth','9':'dominant-ninth','maj9':'major-ninth','m9':'minor-ninth','11':'dominant-11th','13':'dominant-13th','m7b5':'half-diminished','mMaj7':'major-minor'};
 return `<harmony><root><root-step>${mm[1]}</root-step>${al(mm[2])?`<root-alter>${al(mm[2])}</root-alter>`:''}</root><kind text="${esc(c.x)}">${K[R]||'other'}</kind>${mm[4]?`<bass><bass-step>${mm[4]}</bass-step>${al(mm[5])?`<bass-alter>${al(mm[5])}</bass-alter>`:''}</bass>`:''}${c.t?`<offset>${c.t}</offset>`:''}</harmony>\n`}
function toXML(sc){const cap=capOf(sc),ns=sc.clefs.length;let x=`<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">\n<score-partwise version="3.1">\n<work><work-title>${esc(sc.title||'Pentalia')}</work-title></work>\n<identification>${sc.comp?`<creator type="composer">${esc(sc.comp)}</creator>`:''}<encoding><software>Pentalia</software></encoding></identification>\n<part-list><score-part id="P1"><part-name>${ns>1?'Piano':'Staff'}</part-name></score-part></part-list>\n<part id="P1">\n`;
 const tieIn=sc.clefs.map(()=>null);
 sc.ms.forEach((m,mi)=>{x+=`<measure number="${mi+1}">\n`;
  {const vo=m.vo&&m.vo.length?m.vo:null;if(m.rs||vo)x+=`<barline location="left">${m.rs?'<bar-style>heavy-light</bar-style>':''}${vo?`<ending number="${vo.join(',')}" type="start"/>`:''}${m.rs?'<repeat direction="forward"/>':''}</barline>\n`}
  if(mi===0){x+=`<attributes><divisions>16</divisions><key><fifths>${sc.f}</fifths></key><time><beats>${sc.num}</beats><beat-type>${sc.den}</beat-type></time>${ns>1?`<staves>${ns}</staves>`:''}`;sc.clefs.forEach((c0,s)=>{const c=clefAt(sc,0,s);x+=`<clef${ns>1?` number="${s+1}"`:''}><sign>${c==='g'?'G':'F'}</sign><line>${c==='g'?2:4}</line></clef>`});x+=`</attributes>\n<direction placement="above"><direction-type><metronome><beat-unit>quarter</beat-unit><per-minute>${sc.tempo}</per-minute></metronome></direction-type><sound tempo="${sc.tempo}"/></direction>\n`}
  (m.ch||[]).forEach(c=>{x+=harmXml(c)});x+=navXml(m);
  if(mi>0&&m.cl&&m.cl.some(Boolean)){x+='<attributes>';m.cl.forEach((c,s)=>{if(c)x+=`<clef${ns>1?` number="${s+1}"`:''}><sign>${c==='g'?'G':'F'}</sign><line>${c==='g'?2:4}</line></clef>`});x+='</attributes>\n'}
  m.st.forEach((evs,s)=>{if(s>0)x+=`<backup><duration>${cap*2}</duration></backup>\n`;
   evs.forEach(e=>{
    if(e.hp)x+=`<direction placement="below"><direction-type><wedge type="${e.hp==='c'?'crescendo':e.hp==='d'?'diminuendo':'stop'}"/></direction-type>${ns>1?`<staff>${s+1}</staff>`:''}</direction>\n`;
    if(e.dyn)x+=`<direction placement="below"><direction-type><dynamics><${e.dyn}/></dynamics></direction-type>${ns>1?`<staff>${s+1}</staff>`:''}</direction>\n`;
    const dotted=DOT.includes(e.len),bv=dotted?e.len/1.5:e.len;
    if(!e.n){x+=`<note><rest${e.len===cap&&VL.includes(cap)?' measure="yes"':''}/><duration>${e.len*2}</duration><voice>1</voice>${e.len===cap&&false?'':`<type>${TYN[bv]}</type>`}${dotted?'<dot/>':''}${ns>1?`<staff>${s+1}</staff>`:''}</note>\n`;return}
    [...e.n].sort((a,b)=>a.d-b.d).forEach((n,k)=>{const al=sAlt(sc,n),st=LN[((n.d%7)+7)%7],oc=Math.floor(n.d/7),tin=tieIn[s]&&tieIn[s].some(q=>q.d===n.d&&q.al===al);
     x+=`<note>${k?'<chord/>':''}<pitch><step>${st}</step>${al?`<alter>${al}</alter>`:''}<octave>${oc}</octave></pitch><duration>${e.len*2}</duration>${tin?'<tie type="stop"/>':''}${e.tie?'<tie type="start"/>':''}<voice>1</voice><type>${TYN[bv]}</type>${dotted?'<dot/>':''}${n.a!=null&&n.a!==keyAlt(sc.f,((n.d%7)+7)%7)?`<accidental>${{0:'natural',1:'sharp','-1':'flat',2:'double-sharp','-2':'flat-flat'}[n.a]}</accidental>`:''}${ns>1?`<staff>${s+1}</staff>`:''}`;
     const nt=(k===0&&e.sl?`<slur type="${e.sl==='e'?'stop':'start'}" number="1"/>`:'')+(tin?'<tied type="stop"/>':'')+(e.tie?'<tied type="start"/>':'')+(e.art?artXml(e.art):'');
     x+=nt?`<notations>${nt}</notations>`:'';if(k===0&&e.ly){const hy=/-$/.test(e.ly);x+=`<lyric number="1"><syllabic>${hy?'begin':'single'}</syllabic><text>${esc(e.ly.replace(/-$/,''))}</text></lyric>`}x+=`</note>\n`});
    tieIn[s]=e.tie?e.n.map(n=>({d:n.d,al:sAlt(sc,n)})):null})});
  const bt={n:'',d:'light-light',f:'light-heavy',re:'light-heavy'}[m.bar];
  {const vo=m.vo&&m.vo.length?m.vo:null;if(m.bar!=='n'||vo)x+=`<barline location="right">${m.bar!=='n'?`<bar-style>${bt}</bar-style>`:''}${vo?`<ending number="${vo.join(',')}" type="${m.bar==='re'?'stop':'discontinue'}"/>`:''}${m.bar==='re'?'<repeat direction="backward"/>':''}</barline>\n`}
  x+=`</measure>\n`});
 return x+'</part>\n</score-partwise>\n'}
async function sXml(){const x=toXML(ED.sc),nm=(ED.sc.title||'pentalia').replace(/[^\w\-]+/g,'_');let ok=false;
 try{const d=window.claude&&claude.use?await claude.use('downloads'):null;if(d){await d.save({filename:nm+'.musicxml.txt',data:x});ok=true}}catch(e){}
 const pn=$('scpn'),t=$('sct');if(pn&&t){pn.classList.remove('hide');t.value=x}
 msg(T(ok?'scXmlOk':'scXmlCp'))}
function sCode(){const j=JSON.stringify(ED.sc);return 'PSCORE1.'+btoa(unescape(encodeURIComponent(j)))+'.'+hsh(j)}
function sOpen(c){try{const p=c.trim().split('.');if(p[0]!=='PSCORE1'||p.length!==3)throw 0;const j=decodeURIComponent(escape(atob(p[1])));if(hsh(j)!==p[2])throw 0;const sc=JSON.parse(j);if(!sc.ms||!sc.clefs)throw 0;ED.sc=sc;ED.sel=null;ED.cur={m:0,s:0,t:0};ED.und=[];ED.red=[];sSave();scoreUI();msg(T('scOk'));return true}catch(e){msg(T('scBad'));return false}}
/* ---------- interface ---------- */
function icoNote(v){const f=v<16,st=v<32,fl=v===4?1:v===2?2:v===1?3:v===.5?4:0;
 return `<svg viewBox="0 0 28 32" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="10" cy="24" rx="5" ry="3.7" transform="rotate(-20 10 24)" fill="${f?'currentColor':'none'}"/>${st?'<line x1="14.6" y1="23" x2="14.6" y2="4"/>':''}${v>=64?'<line x1="2" y1="20" x2="2" y2="28"/><line x1="18" y1="20" x2="18" y2="28"/>':''}${[...Array(fl)].map((_,k)=>`<path d="M14.6,${4+k*5} q8,5 5,13"/>`).join('')}</g></svg>`}
function icoRest(v){return `<svg viewBox="0 0 28 36" aria-hidden="true">${v>=16&&v<64?`<line x1="3" x2="25" y1="${v===32?10:18}" y2="${v===32?10:18}" stroke="currentColor"/>`:v>=64?`<line x1="3" x2="25" y1="10" y2="10" stroke="currentColor"/><line x1="3" x2="25" y1="18" y2="18" stroke="currentColor"/>`:''}${restSvg(v,14,34,false,false)}</svg>`}
function icoArt(a){const c='currentColor';return `<svg viewBox="0 0 28 28" aria-hidden="true">`+({stac:`<circle cx="14" cy="14" r="2.6" fill="${c}"/>`,acc:`<path d="M5,8 L23,14 L5,20" fill="none" stroke="${c}" stroke-width="2"/>`,ten:`<line x1="5" x2="23" y1="14" y2="14" stroke="${c}" stroke-width="3"/>`,marc:`<path d="M6,21 L14,6 L22,21" fill="none" stroke="${c}" stroke-width="2"/>`,ferm:`<path d="M4,18 Q14,0 24,18" fill="none" stroke="${c}" stroke-width="2"/><circle cx="14" cy="15" r="2.4" fill="${c}"/>`}[a]||'')+`</svg>`}
const PTABS=[['n','scTabN'],['a','scTabA'],['r','scTabR'],['d','scTabD'],['c','scTabC'],['x','scTabX'],['h','scTabH']];
function palBody(tab){const b=(a,l,x)=>`<button class="pk2" data-a="${a}" ${x||''}>${l}</button>`;
 if(tab==='n')return `<div class="pg g8">${[64,32,16,8,4,2,1,.5].map(v=>`<button class="pk2" data-d="${v}" data-r="0" title="${T(DK[v])}">${icoNote(v)}</button>`).join('')}${[64,32,16,8,4,2,1,.5].map(v=>`<button class="pk2" data-d="${v}" data-r="1" title="${T('scRestOf',nmDur(v))}">${icoRest(v)}</button>`).join('')}</div><div class="pg g4">${b('dot',T('scDot'))}${b('tie',T('scTie'))}${b('chord',T('scChord'))}${b('del',T('scDel'))}</div>`;
 if(tab==='a')return `<div class="pg g6">${[[-2,'♭♭'],[-1,'♭'],[0,'♮'],[1,'♯'],[2,'×♯'],['n',T('scAuto')]].map(([v,l])=>`<button class="pk2 big" data-ac="${v}">${l}</button>`).join('')}</div>`;
 if(tab==='r')return `<div class="pg g3">${b('slur',T('scSlur'))}${b('cres',T('scCres'))}${b('dimi',T('scDim'))}</div><div class="pg g2">${b('spclr',T('scSpClr'))}${b('lyr',T('scLyr'))}</div><div class="pg g6">${['stac','acc','ten','marc','ferm'].map(a=>`<button class="pk2" data-ar="${a}" title="${T('scA'+a)}">${icoArt(a)}</button>`).join('')}<button class="pk2" data-ar="">${T('scA0')}</button></div>`;
 if(tab==='d')return whBody();
 if(tab==='c')return `<div class="pg g2"><label>${T('scKey')} <select id="scKey">${[...Array(15)].map((_,i)=>{const f=i-7;return`<option value="${f}">${f===0?'C / Am':(f>0?f+' ♯':(-f)+' ♭')}</option>`}).join('')}</select></label><label>${T('scTime')} <select id="scTm">${TIMES.map(t=>`<option value="${t[0]}/${t[1]}">${t[0]}/${t[1]}</option>`).join('')}</select></label></div><div class="pg g3">${[['n',T('scB1')],['d',T('scB2')],['f',T('scB3')],['re',T('scB4')]].map(([v,l])=>`<button class="pk2" data-br="${v}">${l}</button>`).join('')}${b('rs',T('scRS'))}${b('addm',T('scAddM'))}${b('delm',T('scDelM'))}</div><div class="pg g4">${[['seg','Segno'],['coda','Coda'],['tocoda','To Coda'],['fine','Fine'],['dc','D.C.'],['ds','D.S.'],['dcf','D.C. al Fine'],['dsc','D.S. al Coda']].map(([v,l])=>`<button class="pk2" data-nv="${v}" style="font-size:12px">${v==='seg'?`<svg viewBox="0 0 28 28" width="22" height="22" aria-hidden="true">${segnoSvg(14,14)}</svg>`:v==='coda'?`<svg viewBox="0 0 28 28" width="22" height="22" aria-hidden="true">${codaSvg(14,14,.9)}</svg>`:l}</button>`).join('')}${b('vo1',T('wNv1'))}${b('vo2',T('wNv2'))}</div><div class="pg g3">${b('clg','𝄞 '+T('scClefG'))}${b('clf','𝄢 '+T('scClefF'))}${b('clx',T('scClefX'))}</div>`;
 if(tab==='x'){const tk=['A','B','C','D','E','F','G','♯','♭','m','7','maj7','9','sus4','dim','aug','6','13','add9','/'];
  return `<div class="pg g1"><input id="scChI" placeholder="${T('scChPh')}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="${T('scTabX')}"></div><div class="pg g5">${tk.map(k=>`<button class="pk2 ck" data-tk="${k}">${k}</button>`).join('')}</div><div class="pg g2">${b('chins',T('scChIns'))}${b('chdel',T('scDel'))}</div><p class="tip">${T('scChTip')}</p>`}
 const tg=(k,l)=>`<button class="pk2 tg ${ED.hs[k]?'p':''}" data-hs="${k}" style="justify-content:flex-start;text-align:left;padding:6px 10px;font-size:12.5px;min-height:40px">${ED.hs[k]?'☑':'☐'} ${l}</button>`;
 return `<div class="pg g2">${b('hand',T('scHand'))}${b('finger',T('scFinger'))}</div><div class="pg g1">${tg('amend',T('scHsAmend'))}${tg('snd',T('scHsSnd'))}${tg('chp',T('scHsChp'))}</div><p class="tip">${T('scTips')}</p>`}
function syncTB(){const r=$('sc');if(!r)return;const sc=ED.sc,e=selEv();
 r.querySelectorAll('[data-d]').forEach(b=>b.classList.toggle('p',+b.dataset.d===ED.dur&&(b.dataset.r==='1')===ED.rest));
 const on=(a,v)=>{r.querySelectorAll(`[data-a="${a}"]`).forEach(b=>b.classList.toggle('p',!!v))};
 on('dot',ED.dot);on('chord',ED.chord);on('tie',e&&e.tie);on('hand',ED.hand);on('finger',ED.finger);on('kb',ED.kb);
 r.querySelectorAll('[data-ac]').forEach(b=>b.classList.toggle('p',b.dataset.ac==='n'?ED.acc==null:String(ED.acc)===b.dataset.ac));
 r.querySelectorAll('[data-ar]').forEach(b=>b.classList.toggle('p',!!e&&(e.art||'')===b.dataset.ar&&b.dataset.ar!==''));
 r.querySelectorAll('[data-dy]').forEach(b=>b.classList.toggle('p',!!e&&(e.dyn||'')===b.dataset.dy&&b.dataset.dy!==''));
 const m=ED.sel?sc.ms[ED.sel.m]:sc.ms[ED.cur.m]||sc.ms[0];r.querySelectorAll('[data-br]').forEach(b=>b.classList.toggle('p',!!m&&m.bar===b.dataset.br));
 r.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('p',b.dataset.tab===ED.tab));
 const set=(id,v)=>{const el=$(id);if(el&&document.activeElement!==el)el.value=v};
 set('scInst',ED.hs.inst);set('scWait',ED.hs.wait||'normal');set('scKey',sc.f);set('scKeyR',sc.f);set('scTmR',sc.num+'/'+sc.den);set('scTm',sc.num+'/'+sc.den);set('scTp',sc.tempo);set('scTi',sc.title);set('scCo',sc.comp);
 r.querySelectorAll('[data-a="play"]').forEach(pb=>pb.textContent=ED.playing?T('scStop'):T('scPlay'));
 r.querySelectorAll('[data-a="zfit"]').forEach(b=>b.textContent='⤢ '+Math.round(ED.z*100)+'%');const pen=r.querySelector('.penb');r.querySelectorAll('[data-hs]').forEach(b=>{if(b.classList.contains('rb'))b.textContent=(ED.hs[b.dataset.hs]?'☑ ':'☐ ')+b.textContent.replace(/^[☑☐] /,'')});if(pen)pen.classList.toggle('hide',!ED.pen);
 const pal=$('scpal');if(pal){pal.classList.toggle('hide',!ED.kb);pal.classList.toggle('min',!!ED.palMin);if(ED.kb&&!ED._o){pal.classList.remove('open');void pal.offsetWidth;pal.classList.add('open')}ED._o=ED.kb}
 const fb=$('scfab');if(fb)fb.classList.toggle('hide',!!ED.kb)}
function palRender(){const b=$('scpb');if(!b)return;b.innerHTML=palBody(ED.tab);if(ED.tab==='d')whInit();syncTB()}
function palPlace(){const p=$('scpal');if(!p)return;let pos=null;try{pos=JSON.parse(localStorage.getItem('pent_pal'))}catch(e){}
 if(pos&&typeof pos.l==='number'){p.style.left=Math.max(0,Math.min(pos.l,innerWidth-120))+'px';p.style.top=Math.max(0,Math.min(pos.t,innerHeight-60))+'px';p.style.right='auto';p.style.bottom='auto'}}
function palDrag(){const h=$('scph');let st=null;
 h.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;const p=$('scpal'),r=p.getBoundingClientRect();st={dx:e.clientX-r.left,dy:e.clientY-r.top,id:e.pointerId};try{h.setPointerCapture(e.pointerId)}catch(x){}e.preventDefault()});
 h.addEventListener('pointermove',e=>{if(!st||st.id!==e.pointerId)return;const p=$('scpal');p.style.left=Math.max(0,Math.min(e.clientX-st.dx,innerWidth-80))+'px';p.style.top=Math.max(0,Math.min(e.clientY-st.dy,innerHeight-50))+'px';p.style.right='auto';p.style.bottom='auto'});
 h.addEventListener('pointerup',e=>{if(!st)return;const p=$('scpal'),r=p.getBoundingClientRect();st=null;try{localStorage.setItem('pent_pal',JSON.stringify({l:r.left,t:r.top}))}catch(x){}})}
/* ---------- reconhecedor de caracteres (cifras) — estilo $P ---------- */
const GN=32;
const GDEF={};
(function(){const W=.72,add=(c,...v)=>{(GDEF[c]=GDEF[c]||[]).push(...v)};
 const sc=(S,w)=>S.map(s=>s.map(p=>[p[0]*w,p[1]]));
 add('A',sc([[[0,1],[.5,0],[1,1]],[[.2,.66],[.8,.66]]],W),sc([[[0,1],[.5,0],[1,1]]],W),sc([[[.5,0],[0,1]],[[.5,0],[1,1]],[[.2,.66],[.8,.66]]],W));
 add('B',sc([[[0,0],[0,1]],[[0,0],[.7,0],[.92,.14],[.92,.36],[.7,.5],[0,.5]],[[0,.5],[.78,.5],[1,.68],[1,.86],[.78,1],[0,1]]],W),sc([[[0,0],[0,1],[0,0],[.7,0],[.92,.14],[.92,.36],[.7,.5],[0,.5],[.78,.5],[1,.68],[1,.86],[.78,1],[0,1]]],W));
 add('C',sc([[[1,.16],[.72,0],[.3,0],[0,.25],[0,.75],[.3,1],[.72,1],[1,.84]]],W),sc([[[.95,.12],[.55,0],[.15,.2],[0,.5],[.15,.8],[.55,1],[.95,.88]]],W));
 add('D',sc([[[0,0],[0,1]],[[0,0],[.6,0],[1,.25],[1,.75],[.6,1],[0,1]]],W),sc([[[0,0],[0,1],[.6,1],[1,.75],[1,.25],[.6,0],[0,0]]],W));
 add('E',sc([[[1,0],[0,0],[0,1],[1,1]],[[0,.5],[.72,.5]]],W),sc([[[0,0],[0,1]],[[0,0],[1,0]],[[0,.5],[.72,.5]],[[0,1],[1,1]]],W),sc([[[.95,.1],[.5,0],[.1,.15],[.45,.5],[.05,.85],[.5,1],[1,.9]]],W*.8));
 add('F',sc([[[1,0],[0,0],[0,1]],[[0,.5],[.72,.5]]],W),sc([[[0,0],[0,1]],[[0,0],[1,0]],[[0,.5],[.72,.5]]],W));
 add('G',sc([[[1,.16],[.72,0],[.3,0],[0,.25],[0,.75],[.3,1],[.72,1],[1,.82],[1,.52],[.58,.52]]],W),sc([[[1,.16],[.72,0],[.3,0],[0,.25],[0,.75],[.3,1],[.72,1],[1,.82]],[[1,.82],[1,.52],[.58,.52]]],W));
 add('#',[[[.3,0],[.24,1]],[[.62,0],[.56,1]],[[0,.34],[.9,.28]],[[0,.72],[.9,.66]]].map(s=>s.map(p=>[p[0]*.9,p[1]])));
 add('b',sc([[[0,0],[0,1]],[[0,.55],[.5,.45],[.92,.6],[.92,.85],[.5,1],[0,.95]]],.5),sc([[[0,0],[0,1],[0,.6],[.5,.48],[.9,.62],[.9,.86],[.5,1],[0,.94]]],.5));
 add('m',[[[0,.3],[0,1],[0,.45],[.17,.25],[.38,.3],[.4,1],[.4,.45],[.58,.25],[.8,.32],[.82,1]]],[[[0,.3],[0,1]],[[0,.45],[.18,.25],[.38,.3],[.4,1]],[[.4,.45],[.58,.25],[.8,.32],[.82,1]]]);
 add('M',[[[0,1],[0,0],[.5,.65],[1,0],[1,1]]].map(s=>s.map(p=>[p[0]*.9,p[1]])),[[[0,1],[0,0]],[[0,0],[.5,.65],[1,0]],[[1,0],[1,1]]].map(S=>S.map(p=>[p[0]*.9,p[1]])));
 add('7',sc([[[0,0],[1,0],[.4,1]]],.6),sc([[[0,0],[1,0],[.4,1]],[[.2,.52],[.8,.52]]],.6));
 add('9',sc([[[.92,.3],[.7,.05],[.3,.05],[.08,.3],[.3,.58],[.7,.58],[.92,.3],[.9,.7],[.6,1],[.2,1]]],.6),sc([[[.7,.3],[.5,.05],[.2,.2],[.2,.45],[.5,.6],[.72,.4],[.7,.3],[.72,.8],[.5,1],[.15,.95]]],.6));
 add('6',sc([[[.85,0],[.4,.2],[.1,.6],[.18,.95],[.6,1],[.92,.8],[.72,.55],[.3,.55],[.1,.72]]],.6));
 add('5',sc([[[.92,0],[.2,0],[.15,.45],[.6,.38],[.95,.64],[.82,.95],[.4,1],[.1,.85]]],.6),sc([[[.2,.5],[.15,0]],[[.92,0],[.15,0]],[[.15,.45],[.6,.38],[.95,.64],[.82,.95],[.4,1],[.1,.85]]],.6));
 add('4',sc([[[.7,0],[0,.68],[1,.68]],[[.72,.3],[.72,1]]],.7),sc([[[.7,0],[0,.68],[1,.68]],[[.72,0],[.72,1]]],.7));
 add('3',sc([[[.1,.1],[.6,0],[.85,.2],[.5,.45],[.88,.7],[.6,1],[.1,.9]]],.6));
 add('2',sc([[[.1,.2],[.4,0],[.82,.14],[.8,.4],[.1,1],[.95,1]]],.6));
 add('1',sc([[[.3,.22],[.62,0],[.62,1]]],.35),sc([[[.5,0],[.5,1]]],.12),sc([[[.3,.22],[.62,0],[.62,1]],[[.35,1],[.9,1]]],.5));
 add('+',[[[.5,0],[.5,1]],[[0,.5],[1,.5]]].map(S=>S.map(p=>[p[0]*.6,p[1]*.6])));
 add('-',[[[0,.5],[.6,.5]]]);
 add('/',[[[.8,0],[.1,1]]].map(S=>S.map(p=>[p[0]*.5,p[1]])));
})();
function gPts(S){const pts=[];S.forEach((s,id)=>s.forEach(p=>pts.push({x:p.x!=null?p.x:p[0],y:p.y!=null?p.y:p[1],id})));return pts}
function gResample(pts,n){const d=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);let L=0;for(let i=1;i<pts.length;i++)if(pts[i].id===pts[i-1].id)L+=d(pts[i-1],pts[i]);
 if(L===0)return Array.from({length:n},()=>({x:pts[0].x,y:pts[0].y,id:0}));
 const I=L/(n-1);let D=0;const P=pts.map(p=>({...p})),out=[{...P[0]}];
 for(let i=1;i<P.length;i++){if(P[i].id===P[i-1].id){const dd=d(P[i-1],P[i]);if(D+dd>=I){const t=(I-D)/dd,q={x:P[i-1].x+t*(P[i].x-P[i-1].x),y:P[i-1].y+t*(P[i].y-P[i-1].y),id:P[i].id};out.push(q);P.splice(i,0,q);D=0}else D+=dd}}
 if(out.length===n-1)out.push({...P[P.length-1]});while(out.length<n)out.push({...out[out.length-1]});return out.slice(0,n)}
function gNorm(pts){let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;pts.forEach(p=>{x0=Math.min(x0,p.x);x1=Math.max(x1,p.x);y0=Math.min(y0,p.y);y1=Math.max(y1,p.y)});
 const s=Math.max(x1-x0,y1-y0)||1;let cx=0,cy=0;const q=pts.map(p=>({x:(p.x-x0)/s,y:(p.y-y0)/s,id:p.id}));q.forEach(p=>{cx+=p.x;cy+=p.y});cx/=q.length;cy/=q.length;return q.map(p=>({x:p.x-cx,y:p.y-cy,id:p.id}))}
function gCloud(a,b,start){const n=a.length,m=new Array(n).fill(false);let sum=0,i=start;do{let idx=-1,mn=1e9;for(let j=0;j<n;j++)if(!m[j]){const d=Math.hypot(a[i].x-b[j].x,a[i].y-b[j].y);if(d<mn){mn=d;idx=j}}m[idx]=true;sum+=(1-((i-start+n)%n)/n)*mn;i=(i+1)%n}while(i!==start);return sum}
function gDist(a,b){const n=a.length,st=Math.floor(Math.pow(n,.5));let mn=1e9;for(let i=0;i<n;i+=st)mn=Math.min(mn,gCloud(a,b,i),gCloud(b,a,i));return mn}
let GT=null;
function gTemplates(){if(GT)return GT;GT=[];for(const c in GDEF)GDEF[c].forEach(S=>GT.push({c,p:gNorm(gResample(gPts(S),GN))}));return GT}
function gRank(strokes,allowed){const q=gNorm(gResample(gPts(strokes),GN)),best={};
 gTemplates().forEach(t=>{if(allowed&&!allowed.includes(t.c))return;const d=gDist(q,t.p);if(best[t.c]==null||d<best[t.c])best[t.c]=d});
 return Object.entries(best).sort((a,b)=>a[1]-b[1])}
const G_ROOT='ABCDEFG'.split(''),G_SUF=['#','b','m','M','+','-','/','1','2','3','4','5','6','7','9'];
function gCluster(S){const F=S.map(p=>{let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;p.forEach(q=>{x0=Math.min(x0,q.x);x1=Math.max(x1,q.x);y0=Math.min(y0,q.y);y1=Math.max(y1,q.y)});return{p,x0,x1,y0,y1,w:x1-x0,h:y1-y0,cx:(x0+x1)/2}}).sort((a,b)=>a.x0-b.x0);
 const cl=[];F.forEach(f=>{const c=cl[cl.length-1];if(c){const ov=Math.min(c.x1,f.x1)-Math.max(c.x0,f.x0),mw=Math.max(1,Math.min(c.x1-c.x0,f.w));if(f.x0<=c.x1+.5){c.s.push(f.p);c.x0=Math.min(c.x0,f.x0);c.x1=Math.max(c.x1,f.x1);c.y0=Math.min(c.y0,f.y0);c.y1=Math.max(c.y1,f.y1);return}}
  cl.push({s:[f.p],x0:f.x0,x1:f.x1,y0:f.y0,y1:f.y1})});return cl}
function gRecognize(S){const cl=gCluster(S);let out='',prev='',bad=0;
 cl.forEach((c,i)=>{const allowed=(i===0||prev==='/')?G_ROOT:G_SUF.concat(prev==='#'||prev==='b'||true?[]:[]);
  const r=gRank(c.s,allowed);let ch=r[0]?r[0][0]:'?';if(!r.length||r[0][1]>2.0){ch='?';bad++}out+=ch;prev=ch});
 return{text:out,bad,x0:cl.length?cl[0].x0:0,y0:cl.length?Math.min(...cl.map(c=>c.y0)):0,n:cl.length}}

/* ---------- ligaduras, crescendo e transposição ---------- */
function spanPairs(key,startVals){const out=[];for(let s=0;s<ED.sc.clefs.length;s++){const L=ED.EV.filter(e=>e.s===s);let open=null;L.forEach(e=>{const ev=ED.sc.ms[e.m].st[e.s][e.i];if(!ev||!ev.n)return;const v=ev[key];if(!v)return;if(startVals.includes(v)){open={e,v}}else if(open){out.push({a:open.e,b:e,v:open.v});open=null}})}return out}
function spansSvg(SYX){let o='';const c='currentColor';
 spanPairs('sl',['s']).forEach(({a,b})=>{const up=Math.min(...a.ys)<a.yb-16;const part=(x1,x2,y1,y2)=>{const ym=Math.min(y1,y2),yc=up?ym-16:Math.max(y1,y2)+16,dy=up?-4.2:4.2;return `<path d="M${x1},${y1} Q${(x1+x2)/2},${yc} ${x2},${y2} Q${(x1+x2)/2},${yc+dy} ${x1},${y1}Z" fill="${c}"/>`};
  const ya=(up?Math.min(...a.ys)-8:Math.max(...a.ys)+8),yb2=(up?Math.min(...b.ys)-8:Math.max(...b.ys)+8);
  if(a.sy===b.sy)o+=part(a.x,b.x,ya,yb2);else if(b.sy===a.sy+1&&SYX[a.sy]&&SYX[b.sy]){o+=part(a.x,SYX[a.sy].x1,ya,ya);o+=part(SYX[b.sy].x0+14,b.x,yb2,yb2)}});
 spanPairs('hp',['c','d']).forEach(({a,b,v})=>{const y=a.yb+22,wedge=(x1,x2,y1)=>v==='c'?`<path d="M${x2},${y1-5} L${x1},${y1} L${x2},${y1+5}" fill="none" stroke="${c}" stroke-width="1.5"/>`:`<path d="M${x1},${y1-5} L${x2},${y1} L${x1},${y1+5}" fill="none" stroke="${c}" stroke-width="1.5"/>`;
  if(a.sy===b.sy)o+=wedge(a.x-2,b.x+8,y);else if(SYX[a.sy])o+=wedge(a.x-2,SYX[a.sy].x1-4,y)});
 return o}
function spanApply(kind,val){const e=selEv();if(!e||!e.n){msg(T('scNoSel'));return}const s=ED.sel;ED.pend={kind,val,at:{m:s.m,s:s.s,i:s.i}};msg(T('scPendEnd'))}
function spanFinish(m,st,i){const p=ED.pend;ED.pend=null;if(!p||p.at.s!==st){msg(T('scPendBad'));return}let A=p.at,B={m,s:st,i};if(B.m<A.m||(B.m===A.m&&B.i<A.i)){const t=A;A=B;B=t}if(A.m===B.m&&A.i===B.i){msg(T('scPendBad'));return}
 const ea=ED.sc.ms[A.m].st[st][A.i],eb=ED.sc.ms[B.m].st[st][B.i];if(!ea.n||!eb.n){msg(T('scPendBad'));return}pushU();const key=p.kind;ea[key]=p.val;eb[key]=key==='sl'?'e':'x';ED.sel={m:B.m,s:st,i:B.i};sSave();redraw();msg(T('scSpanOk'))}
function spanClear(){const e=selEv();if(!e){msg(T('scNoSel'));return}pushU();const s=ED.sel,ev=ED.sc.ms[s.m].st[s.s];['sl','hp'].forEach(k=>{if(e[k]){const wasStart=['s','c','d'].includes(e[k]);delete e[k];if(wasStart){let m=s.m,i=s.i+1,go=true;while(go&&m<ED.sc.ms.length){const L=ED.sc.ms[m].st[s.s];for(;i<L.length;i++){if(L[i][k]){if(['e','x'].includes(L[i][k]))delete L[i][k];go=false;break}}if(go){m++;i=0}}}}});sSave();redraw()}
function setClef(c){const m=ED.msel?ED.msel.a:ED.sel?ED.sel.m:ED.cur.m,st=ED.sel?ED.sel.s:ED.cur.s,M=ED.sc.ms[m];if(!M)return;pushU();M.cl=M.cl||[];if(c==='-'||m===0&&false)delete M.cl[st];else M.cl[st]=c;if(m===0&&c!=='-')ED.sc.clefs[st]=c;sSave();redraw()}
function transp(k){const sc=ED.sc;const evs=[];if(ED.msel){for(let m=ED.msel.a;m<=ED.msel.b;m++)sc.ms[m].st.forEach(L=>L.forEach(e=>e.n&&evs.push(e)))}else{const e=selEv();if(e&&e.n)evs.push(e)}
 if(!evs.length){msg(T('scSelHint'));return}pushU();
 evs.forEach(e=>e.n.forEach(n=>{if(Math.abs(k)===12){n.d=Math.max(8,Math.min(52,n.d+(k>0?7:-7)));return}
  const md=midiOf(sc,n)+k,oc=Math.floor(md/12)-1,pc=((md%12)+12)%12;let li=SLET.indexOf(pc),a=0;if(li<0){if(k>0){li=SLET.indexOf(pc-1);a=1}else{li=SLET.indexOf(pc+1);a=-1}}
  n.d=Math.max(8,Math.min(52,oc*7+li));n.a=a===keyAlt(sc.f,li)?null:a}));
 sSave();redraw();const e0=evs[0];if(e0&&e0.n)sp(e0.n.map(n=>midiOf(sc,n)),.8)}
function lyrOpen(){const s=ED.sel;if(!s){msg(T('scNoSel'));return}const L=ED.sc.ms[s.m].st[s.s],e=L[s.i];if(!e||!e.n){msg(T('scNoSel'));return}const g=ED.EV.find(q=>q.m===s.m&&q.s===s.s&&q.i===s.i);if(!g)return;bubShow(g.x,g.yb+54,e.ly||'',{ly:{m:s.m,s:s.s,i:s.i}})}
function lyrSet(info,v){const e=ED.sc.ms[info.m].st[info.s][info.i];if(!e)return;pushU();if(v)e.ly=v;else delete e.ly;sSave()}
function lyrNext(info){let{m,s,i}=info;for(;;){i++;const L=ED.sc.ms[m].st[s];if(i>=L.length){m++;i=0;if(m>=ED.sc.ms.length)return null}const e=ED.sc.ms[m].st[s][i];if(e&&e.n)return{m,s,i}}}

/* ---------- PDF real (qualquer momento, mesmo incompleta) ---------- */
Object.assign(X,{gPdf:['PDF','PDF','PDF','PDF'],scPdf:['Baixar PDF','Download PDF','Descargar PDF','Télécharger le PDF'],scPdfS:['Compartilhar PDF','Share PDF','Compartir PDF','Partager le PDF'],
scPdfWait:['Preparando o PDF…','Preparing the PDF…','Preparando el PDF…','Préparation du PDF…'],scPdfOk:['PDF pronto ({0} página(s)).','PDF ready ({0} page(s)).','PDF listo ({0} página(s)).','PDF prêt ({0} page(s)).'],scPdfSel:['PDF só dos compassos selecionados ({0}–{1}).','PDF of the selected bars only ({0}–{1}).','PDF solo de los compases seleccionados ({0}–{1}).','PDF des mesures sélectionnées uniquement ({0}–{1}).'],
scPdfErr:['Não consegui gerar o PDF. Tente de novo.','Could not create the PDF. Please try again.','No pude crear el PDF. Inténtalo de nuevo.','Impossible de créer le PDF. Réessayez.'],scPdfShared:['PDF enviado pelo compartilhamento.','PDF sent through sharing.','PDF enviado por compartir.','PDF envoyé via le partage.']});
const PDF_W=840,PG_PX=[1654,2339],PG_MG=110;
async function pdfRender(){const sc0=ED.sc,bak={W:ED.W,sel:ED.sel,csel:ED.csel,msel:ED.msel,cur:ED.cur,pend:ED.pend,z:ED.z,off:ED.mnOff};
 let sc=sc0,sel=ED.msel;if(sel){const q=sel;sc=JSON.parse(JSON.stringify(sc0));sc.ms=sc.ms.slice(q.a,q.b+1);for(let s=0;s<sc.clefs.length;s++)sc.clefs[s]=clefAt(sc0,q.a,s);msg(T('scPdfSel',q.a+1,q.b+1))}
 let svg,SYY,sp,sysH;
 try{ED.sc=sc;ED.W=PDF_W;ED.sel=null;ED.csel=null;ED.msel=null;ED.cur={m:-1,s:0,t:0};ED.pend=null;ED.z=1;ED.mnOff=sel?sel.a:0;svg=renderScore();SYY=ED.SYY.slice();sp=ED.SP;sysH=ED.SH}
 finally{ED.sc=sc0;Object.assign(ED,{W:bak.W,sel:bak.sel,csel:bak.csel,msel:bak.msel,cur:bak.cur,pend:bak.pend,z:bak.z,mnOff:bak.off});redraw()}
 const inner=svg.slice(svg.indexOf('>')+1,svg.lastIndexOf('</svg>')).replace(/currentColor/g,'#000').replace(/var\(--ink\)/g,'#000'),H=+/viewBox="0 0 [\d.]+ ([\d.]+)"/.exec(svg)[1];
 const k=(PG_PX[0]-2*PG_MG)/PDF_W,pageH=(PG_PX[1]-2*PG_MG-30)/k,bs=y=>Math.max(0,y-54),be=y=>Math.min(H,y+sysH+44),pages=[];
 let i=0;while(i<SYY.length||!pages.length){let startY=pages.length?bs(SYY[i]):0,endY=startY,n=0;while(i<SYY.length&&be(SYY[i])-startY<=pageH){endY=be(SYY[i]);i++;n++}if(!n&&i<SYY.length){endY=be(SYY[i]);i++}if(!SYY.length)endY=Math.min(H,pageH);pages.push({y0:startY,y1:Math.max(endY,startY+50)});if(!SYY.length)break}
 const out=[];
 for(let p=0;p<pages.length;p++){const {y0,y1}=pages[p],h=y1-y0,s2=`<svg xmlns="http://www.w3.org/2000/svg" width="${Math.round(PDF_W*k)}" height="${Math.round(h*k)}" viewBox="0 ${y0} ${PDF_W} ${h}" style="color:#000"><rect x="0" y="${y0}" width="${PDF_W}" height="${h}" fill="#fff"/>${inner}</svg>`;
  const img=new Image();await new Promise((ok,no)=>{img.onload=ok;img.onerror=no;img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s2)});
  const cv=document.createElement('canvas');cv.width=PG_PX[0];cv.height=PG_PX[1];const g=cv.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,cv.width,cv.height);g.drawImage(img,PG_MG,PG_MG,Math.round(PDF_W*k),Math.round(h*k));
  g.fillStyle='#666';g.font='22px sans-serif';g.textAlign='center';g.fillText('Pentalia · '+(p+1)+'/'+pages.length,PG_PX[0]/2,PG_PX[1]-50);
  const blob=await new Promise(r=>cv.toBlob(r,'image/jpeg',.93));out.push({bytes:new Uint8Array(await blob.arrayBuffer()),w:cv.width,h:cv.height})}
 return out}
function pdfBuild(pages){const enc=new TextEncoder(),parts=[],offs=[];let len=0;const push=b=>{const u=typeof b==='string'?enc.encode(b):b;parts.push(u);len+=u.length};
 const obj=(n,body)=>{offs[n]=len;push(n+' 0 obj\n'+body+'\nendobj\n')},N=pages.length;push('%PDF-1.4\n');
 obj(1,'<< /Type /Catalog /Pages 2 0 R >>');obj(2,'<< /Type /Pages /Kids ['+pages.map((_,i)=>(3+3*i)+' 0 R').join(' ')+'] /Count '+N+' >>');
 pages.forEach((p,i)=>{const pg=3+3*i,ct=4+3*i,im=5+3*i,cs='q 595.28 0 0 841.89 0 0 cm /Im0 Do Q';
  obj(pg,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 '+im+' 0 R >> >> /Contents '+ct+' 0 R >>');
  obj(ct,'<< /Length '+cs.length+' >>\nstream\n'+cs+'\nendstream');
  offs[im]=len;push(im+' 0 obj\n<< /Type /XObject /Subtype /Image /Width '+p.w+' /Height '+p.h+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+p.bytes.length+' >>\nstream\n');push(p.bytes);push('\nendstream\nendobj\n')});
 const xr=len,T_=3+3*N;push('xref\n0 '+T_+'\n0000000000 65535 f \n');for(let n=1;n<T_;n++)push(String(offs[n]).padStart(10,'0')+' 00000 n \n');
 push('trailer\n<< /Size '+T_+' /Root 1 0 R >>\nstartxref\n'+xr+'\n%%EOF\n');const all=new Uint8Array(len);let o=0;parts.forEach(u=>{all.set(u,o);o+=u.length});return all}
async function sDbg(){const x=JSON.stringify({app:'Pentalia',ver:VER_TXT(),ua:navigator.userAgent,when:new Date().toISOString(),log:ED.dbg||[]});let ok=false;try{const d=window.claude&&claude.use?await claude.use('downloads'):null;if(d){await d.save({filename:'pentalia-diagnostico.json',data:x});ok=true}}catch(e){}
 if(!ok){try{await navigator.clipboard.writeText(x);ok=true}catch(e){}}msg(ok?T('scDbgOk'):T('scDbgNo'))}
const VER_TXT=()=>{const e=document.querySelector('footer,.ver');return e?e.textContent.slice(-60):''};
async function sPdf(share){if(ED.pdfBusy)return;ED.pdfBusy=true;sStop();const sc=ED.sc;msg(T('scPdfWait'));
 try{const pages=await pdfRender(),bytes=pdfBuild(pages),nm=((sc.title||'partitura').replace(/[^\w\-]+/g,'_')||'partitura')+'.pdf',file=new File([bytes],nm,{type:'application/pdf'});
  if(share&&navigator.canShare&&navigator.canShare({files:[file]})){try{await navigator.share({files:[file],title:sc.title||'Pentalia'});msg(T('scPdfShared'));return}catch(e){if(e&&e.name==='AbortError'){msg('');return}}}
  let ok=false;try{const d=window.claude&&claude.use?await claude.use('downloads'):null;if(d){await d.save({filename:nm,data:bytes});ok=true}}catch(e){if(e&&e.code==='declined'){msg('');return}}
  if(!ok){const url=URL.createObjectURL(file),a=document.createElement('a');a.href=url;a.download=nm;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),5000)}
  msg(T('scPdfOk',pages.length))}catch(e){msg(T('scPdfErr'))}finally{ED.pdfBusy=false}}

/* ---------- cifras ---------- */
const chNorm=t=>(t||'').trim().replace(/♯/g,'#').replace(/♭/g,'b').replace(/\s+/g,'');
const chFmt=x=>(x||'').replace(/#/g,'♯').replace(/([A-G0-9])b/g,'$1♭').replace(/^([A-G])b/,'$1♭');
function chBandAt(x,y){return ED.G.find(g=>g.s===0&&x>=g.ns&&x<=g.ne&&y>=g.yb-32-76&&y<=g.yb-32-14)||null}
function chBandPts(S){if(!S||!S.length)return null;let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;S.forEach(p=>{x0=Math.min(x0,p.x);x1=Math.max(x1,p.x);y0=Math.min(y0,p.y);y1=Math.max(y1,p.y)});
 const g=chBandAt((x0+x1)/2,y1);return g&&y1<=g.yb-32-14&&y0>=g.yb-32-110?g:null}
function chT(g,x){const cap=capOf(ED.sc);return Math.max(0,Math.min(cap-4,Math.round((x-g.x0)/(g.x1-g.x0)*cap/4)*4))}
function chPlay(txt){if(!ED.hs.snd)return;const r=parseChord(txt);if(r.ok)sp(r.items.map(i=>i.m+12),.7)}
function chPut(mi,t,txt,keepBub){const m=ED.sc.ms[mi];if(!m)return false;const x=chNorm(txt);const r=parseChord(x);if(!r.ok){msg(T('scChBad'));return false}
 pushU();m.ch=(m.ch||[]).filter(c=>c.t!==t);m.ch.push({t,x});m.ch.sort((a,b)=>a.t-b.t);const i=m.ch.findIndex(c=>c.t===t);ED.csel={m:mi,i};sSave();redraw();msg(T('scChSet',chFmt(x)));chPlay(x);return {m:mi,i}}
function chDel(mi,i){const m=ED.sc.ms[mi];if(!m||!m.ch||!m.ch[i])return;pushU();m.ch.splice(i,1);ED.csel=null;bubClose();sSave();redraw()}
function bubShow(x,y,txt,info){const b=$('scbub'),sv=$('scsvg');if(!b||!sv)return;const r=sv.getBoundingClientRect();ED.bub=info;
 b.classList.remove('hide');$('scbi').value=txt;const bw=b.offsetWidth||230;let l=r.left+x*ED.z-10,t=r.top+(y-6)*ED.z-52;l=Math.max(6,Math.min(l,innerWidth-bw-6));t=Math.max(6,t);b.style.left=l+'px';b.style.top=t+'px';
 setTimeout(()=>{const i=$('scbi');if(i){i.focus();i.select()}},30)}
function bubClose(){const b=$('scbub');if(b)b.classList.add('hide');ED.bub=null}
function bubOk(){const bb=ED.bub;if(!bb)return;const v=$('scbi').value;
 if(bb.ly){lyrSet(bb.ly,v.trim());const nx=lyrNext(bb.ly);ED.sel=nx?{m:nx.m,s:nx.s,i:nx.i}:ED.sel;redraw();if(nx){const g=ED.EV.find(q=>q.m===nx.m&&q.s===nx.s&&q.i===nx.i);if(g){bubShow(g.x,g.yb+54,(ED.sc.ms[nx.m].st[nx.s][nx.i].ly)||'',{ly:nx})}}else bubClose();return}
 if(bb.ci!=null){const m=ED.sc.ms[bb.m],c=m&&m.ch&&m.ch[bb.ci];if(!c){bubClose();return}if(!chNorm(v)){chDel(bb.m,bb.ci);return}const x=chNorm(v);if(!parseChord(x).ok){msg(T('scChBad'));$('scbi').focus();return}pushU();c.x=x;sSave();redraw();msg(T('scChSet',chFmt(x)));chPlay(x);bubClose();return}
 if(!chNorm(v)){bubClose();return}const r=chPut(bb.m,bb.t,v);if(r)bubClose();else $('scbi').focus()}
function bubDel(){const bb=ED.bub;if(bb&&bb.ly){lyrSet(bb.ly,'');redraw();bubClose();return}if(bb&&bb.ci!=null)chDel(bb.m,bb.ci);else bubClose()}
function msTap(p){const b=ED.MN.find(c=>p.x>=c.x-2&&p.x<=c.x+c.w&&p.y>=c.y&&p.y<=c.y+c.h);if(!b)return false;const q=ED.msel;
 if(q&&q.a===q.b&&q.a===b.m)ED.msel=null;else if(q&&q.a===q.b&&q.a!==b.m)ED.msel={a:Math.min(q.a,b.m),b:Math.max(q.a,b.m)};else ED.msel={a:b.m,b:b.m};
 ED.sel=null;ED.csel=null;ED.selX=false;if(ED.msel)ED.cur={m:ED.msel.a,s:0,t:0};redraw();msg(ED.msel?T('scSelM',ED.msel.b-ED.msel.a+1,ED.msel.a+1,ED.msel.b+1):T('scMsg'));if(ED.msel)balSel();else balHide();return true}
const cl_=o=>JSON.parse(JSON.stringify(o));
function mCopy(cut){const q=ED.msel;if(!q){const e=selEv();if(e&&e.n){ED.clip={note:{n:cl_(e.n),len:e.len}};try{localStorage.setItem('pent_clip',JSON.stringify(ED.clip))}catch(x){}if(cut)delSel();else msg(T('scCopied',1));return}msg(T('scSelHint'));return}const sc=ED.sc;ED.clip={cap:capOf(sc),ms:sc.ms.slice(q.a,q.b+1).map(m=>cl_({st:m.st,ch:m.ch||[]}))};try{localStorage.setItem('pent_clip',JSON.stringify(ED.clip))}catch(e){}
 if(cut)mClear();else{msg(T('scCopied',q.b-q.a+1));syncTB()}}
function mClear(){const q=ED.msel;if(!q){msg(T('scSelHint'));return}const sc=ED.sc;pushU();for(let i=q.a;i<=q.b;i++){const m=sc.ms[i];m.st=blankM(sc).st;m.ch=[]}sSave();redraw()}
function mPaste(dup){const c=ED.clip;if(c&&c.note&&!ED.msel){const sc=ED.sc,cu=ED.cur;pushU();const r=putAt(sc,cu.m,cu.s,cu.t,c.note.len,cl_(c.note.n));ED.sel=r.sel;ED.cur=r.cur;sSave();redraw();msg(T('scPasted',1,cu.m+1));return}
 if(!c||!c.ms||!c.ms.length){msg(T('scNoClip'));return}const sc=ED.sc;if(c.cap!==capOf(sc)){msg(T('scCapDiff'));return}
 const q=ED.msel,at=dup?(q?q.b+1:ED.cur.m+1):(q?q.a:ED.cur.m);pushU();
 c.ms.forEach((cm,i)=>{const idx=at+i;while(idx>=sc.ms.length)sc.ms.push(blankM(sc));const m=sc.ms[idx];cm.st.forEach((evs,si)=>{if(si<sc.clefs.length)m.st[si]=cl_(evs)});m.ch=cl_(cm.ch)});
 ED.msel={a:at,b:at+c.ms.length-1};ED.sel=null;ED.cur={m:at,s:0,t:0};sSave();redraw();msg(T('scPasted',c.ms.length,at+1))}
function mAll(){ED.msel={a:0,b:ED.sc.ms.length-1};ED.sel=null;redraw();msg(T('scSelM',ED.sc.ms.length,1,ED.sc.ms.length));balSel()}
function mNone(){ED.msel=null;balHide();redraw()}
function chTap(p){
 for(const c of ED.CHB){if(p.x>=c.x-3&&p.x<=c.x+c.w+3&&p.y>=c.y&&p.y<=c.y+c.h){ED.csel={m:c.m,i:c.i};redraw();const cc=ED.sc.ms[c.m].ch[c.i];chPlay(cc.x);bubShow(c.cx,c.y+10,chFmt(cc.x).replace(/♯/g,'#').replace(/♭/g,'b'),{m:c.m,ci:c.i});return true}}
 const g=chBandAt(p.x,p.y);if(!g)return false;
 const inp=$('scChI'),typed=inp&&ED.tab==='x'&&ED.kb?chNorm(inp.value):'';const t=chT(g,p.x);
 if(typed){chPut(g.m,t,typed);return true}
 if(ED.hand&&ED.gType!=='mouse'&&ED.tab!=='x'){return false}
 bubShow(p.x,g.yb-32-30,'',{m:g.m,t});return true}
function recChord(S){
 if(S.length===1){const f=stFeat(S[0]);if(f.rx>=4&&f.w>=18){const hit=ED.CHB.filter(c=>c.x<f.x1&&c.x+c.w>f.x0&&c.y<f.y1&&c.y+c.h>f.y0);if(hit.length){pushU();hit.sort((a,b)=>b.i-a.i).forEach(c=>{const m=ED.sc.ms[c.m];if(m&&m.ch)m.ch.splice(c.i,1)});ED.csel=null;sSave();redraw();msg(T('scDel'));return}}}
 const r=gRecognize(S),g=chBandAt(r.x0+2,Math.max(...S.map(p=>Math.max(...p.map(q=>q.y)))))||chBandPts(S[0]);if(!g)return;
 const txt=r.text,t=chT(g,r.x0),ok=!r.bad&&r.n&&parseChord(txt).ok,y=g.yb-32-30;
 if(ok){const rr=chPut(g.m,t,txt);if(rr){const c=ED.sc.ms[rr.m].ch[rr.i];bubShow(r.x0,y,txt,{m:rr.m,ci:rr.i});msg(T('scChRead',chFmt(txt)))}}
 else{msg(T('scChBad'));bubShow(r.x0,y,txt.replace(/\?/g,''),{m:g.m,t})}}

/* ---------- faixa de opções (estilo Sibelius) ---------- */
Object.assign(X,{gTr:['Transposição','Transpose','Transposición','Transposition'],gLyr:['Letra','Lyrics','Letra','Paroles'],scSlur:['Ligadura','Slur','Ligadura','Liaison'],scCres:['Crescendo','Crescendo','Crescendo','Crescendo'],scDim:['Diminuendo','Diminuendo','Diminuendo','Diminuendo'],scSpClr:['Remover ligadura/dinâmica','Remove slur/hairpin','Quitar ligadura/regulador','Retirer liaison/soufflet'],scLyr:['Letra na nota','Lyric on note','Letra en la nota','Parole sur la note'],scClefG:['Clave de sol','Treble clef','Clave de sol','Clé de sol'],scClefX:['Sem troca','No change','Sin cambio','Sans changement'],scClefF:['Clave de fá','Bass clef','Clave de fa','Clé de fa'],
scPendEnd:['Agora toque na nota final.','Now tap the last note.','Ahora toca la nota final.','Touchez maintenant la dernière note.'],scPendBad:['Escolha outra nota da mesma pauta.','Pick another note on the same staff.','Elige otra nota del mismo pentagrama.','Choisissez une autre note de la même portée.'],scSpanOk:['Pronto.','Done.','Listo.','Fait.'],gClip:['Área de transferência','Clipboard','Portapapeles','Presse-papiers'],gSel:['Seleção','Selection','Selección','Sélection'],scCopy:['Copiar','Copy','Copiar','Copier'],scCut:['Recortar','Cut','Cortar','Couper'],scPaste:['Colar','Paste','Pegar','Coller'],scDup:['Duplicar','Duplicate','Duplicar','Dupliquer'],scAll:['Selecionar tudo','Select all','Seleccionar todo','Tout sélectionner'],scNone:['Limpar seleção','Clear selection','Quitar selección','Désélectionner'],
scSelM:['{0} compasso(s) selecionado(s): {1}–{2}. Toque noutro número para ampliar.','{0} bar(s) selected: {1}–{2}. Tap another bar number to extend.','{0} compás(es) seleccionado(s): {1}–{2}. Toca otro número para ampliar.','{0} mesure(s) sélectionnée(s) : {1}–{2}. Touchez un autre numéro pour étendre.'],scSelHint:['Toque no número de um compasso para selecioná-lo (toque noutro para ampliar a seleção).','Tap a bar number to select it (tap another to extend the selection).','Toca el número de un compás para seleccionarlo (toca otro para ampliar).','Touchez le numéro d’une mesure pour la sélectionner (un autre pour étendre).'],scCopied:['{0} compasso(s) copiado(s).','{0} bar(s) copied.','{0} compás(es) copiado(s).','{0} mesure(s) copiée(s).'],scNoClip:['Nada copiado ainda.','Nothing copied yet.','Aún no hay nada copiado.','Rien de copié pour l’instant.'],scPasted:['Colado: {0} compasso(s) a partir do {1}.','Pasted: {0} bar(s) from bar {1}.','Pegado: {0} compás(es) desde el {1}.','Collé : {0} mesure(s) à partir de la {1}.'],scCapDiff:['A fórmula de compasso é diferente da copiada; não dá para colar.','The time signature differs from the copied bars; cannot paste.','El compás es distinto del copiado; no se puede pegar.','La mesure diffère de celle copiée ; collage impossible.'],
nS:['Partitura','Score','Partitura','Partition'],
rtF:['Arquivo','File','Archivo','Fichier'],rtH:['Início','Home','Inicio','Accueil'],rtN:['Entrada de notas','Note Input','Entrada de notas','Saisie des notes'],rtO:['Notações','Notations','Notaciones','Notations'],rtX:['Texto','Text','Texto','Texte'],rtP:['Reprodução','Play','Reproducción','Lecture'],rtL:['Layout','Layout','Diseño','Mise en page'],rtV:['Exibir','View','Ver','Affichage'],
gScore:['Partitura','Score','Partitura','Partition'],gCode:['Código e exportação','Code & export','Código y exportación','Code et export'],gHist:['Histórico','History','Historial','Historique'],gPlay:['Reprodução','Playback','Reproducción','Lecture'],gEdit:['Edição','Edit','Edición','Édition'],gKeypad:['Teclado','Keypad','Teclado','Clavier'],
gDur:['Notas','Notes','Notas','Notes'],gRest:['Pausas','Rests','Silencios','Pauses'],gAcc:['Acidentes','Accidentals','Alteraciones','Altérations'],gInput:['Modo de entrada','Input mode','Modo de entrada','Mode de saisie'],gArt:['Articulações','Articulations','Articulaciones','Articulations'],gDyn:['Dinâmicas','Dynamics','Dinámicas','Nuances'],gBar:['Barras de compasso','Barlines','Barras','Barres de mesure'],
gTitle:['Título e compositor','Title & composer','Título y compositor','Titre et compositeur'],gChord:['Cifras','Chord symbols','Cifras','Accords'],gKT:['Armadura e fórmula','Key & time','Armadura y compás','Armure et mesure'],gMeas:['Compassos','Bars','Compases','Mesures'],gZoom:['Zoom','Zoom','Zoom','Zoom'],gPrint:['Imprimir','Print','Imprimir','Imprimer'],gOpts:['Opções','Options','Opciones','Options'],
scOpenCh:['Abrir teclado de cifras','Open chord keypad','Abrir teclado de cifras','Ouvrir le clavier d’accords']});
const RTABS=[['f','rtF'],['h','rtH'],['x','rtX'],['p','rtP']];
function ribBody(tab){
 const B=(a,l,x)=>`<button class="pk2 rb" data-a="${a}" ${x||''}>${l}</button>`,G=(lab,body,c)=>`<div class="rg"><div class="rgb ${c||''}">${body}</div><div class="rgl">${T(lab)}</div></div>`;
 const tg=(k,l)=>`<button class="pk2 rb tg" data-hs="${k}">${ED.hs[k]?'☑':'☐'} ${l}</button>`;
 if(tab==='f')return G('gScore',B('new',T('scNew'))+B('new2',T('scPiano')))+G('gPdf',B('pdf','📄 '+T('scPdf'))+B('pdfs',T('scPdfS')))+G('gCode',B('xml',T('scXml'))+B('code',T('scCode')))+G('gImp',B('refopen','📂 '+T('refOpen'))+`<button class="pk2 rb" disabled title="${T('refSoon')}">🌐 ${T('refWeb')} <span class="soon">${T('refSoon')}</span></button>`+(ED.ref?B('refshow',ED.refHide?T('refShow'):T('refHide'))+B('refclose',T('refClose')):''),'wrap')+G('gAiT',`<button class="pk2 rb" disabled>✨ ${T('refAuto')} <span class="soon">${T('refSoon')}</span></button>`)+G('gDbg',B('dbg',T('scDbg'))+B('logtog',(ED.logOn?'☑ ':'☐ ')+T('lgOn'))+B('logcopy',T('lgCopy')));
 if(tab==='h'){const KN=['C♭ / A♭m','G♭ / E♭m','D♭ / B♭m','A♭ / Fm','E♭ / Cm','B♭ / Gm','F / Dm','C / Am','G / Em','D / Bm','A / F♯m','E / C♯m','B / G♯m','F♯ / D♯m','C♯ / A♯m'],cur=ED.sc,mini=c=>`<svg viewBox="0 0 52 76" width="34" height="50" aria-hidden="true" style="overflow:visible">${[0,1,2,3,4].map(k=>`<line x1="0" x2="52" y1="${52-k*8}" y2="${52-k*8}" stroke="currentColor" stroke-width="1" opacity=".5"/>`).join('')}${clefSvg(c,6,52)}</svg>`;
  let h=G('gClef',`<button class="pk2 rb" data-a="clg" title="${T('scClefG')}" style="min-height:62px;gap:6px">${mini('g')}<span>${T('scClefG')}</span></button><button class="pk2 rb" data-a="clf" title="${T('scClefF')}" style="min-height:62px;gap:6px">${mini('f')}<span>${T('scClefF')}</span></button>`)
  +G('gKeyT',`<label class="rl2">${T('scKey')} <select id="scKeyR">${[...Array(15)].map((_,i)=>{const f=i-7;return`<option value="${f}">${f===0?'':f>0?f+' ♯ · ':(-f)+' ♭ · '}${KN[i]}</option>`}).join('')}</select></label><label class="rl2">${T('scTime')} <select id="scTmR">${TIMES.map(t=>`<option value="${t[0]}/${t[1]}">${t[0]}/${t[1]}</option>`).join('')}</select></label>`)
  +G('gHist',B('undo',T('scUndo'))+B('redo',T('scRedo')))+G('gPlay',B('play',T('scPlay'),''))+G('gPdf',B('pdf','📄 '+T('scPdf')))+G('gZoom',B('zout','−')+B('zfit','⤢')+B('zin','+'))+G('gKeypad',B('kb','⌨ '+T('scKb'))+B('hmore',ED.hMore?'▴ '+T('hLess'):'▾ '+T('hMore')));
  if(ED.hMore)h+=G('gClip',B('mcopy',T('scCopy'))+B('mcut',T('scCut'))+B('mpaste',T('scPaste'))+B('mdup',T('scDup')))+G('gSel',B('mall',T('scAll'))+B('mnone',T('scNone')))+G('gTr',B('tr1','♯ +½')+B('tr-1','♭ −½')+B('tr12','8va ↑')+B('tr-12','8va ↓'))+G('gEdit',B('del',T('scDel'))+B('chdel',T('scTabX')+' ✕'));
  return h}
 if(tab==='n')return G('gDur',[64,32,16,8,4,2,1,.5].map(v=>`<button class="pk2" data-d="${v}" data-r="0" title="${T(DK[v])}">${icoNote(v)}</button>`).join('')+B('dot',T('scDot'))+B('tie',T('scTie'))+B('chord',T('scChord')),'wrap')
  +G('gRest',[64,32,16,8,4,2,1,.5].map(v=>`<button class="pk2" data-d="${v}" data-r="1" title="${T('scRestOf',nmDur(v))}">${icoRest(v)}</button>`).join(''),'wrap')
  +G('gAcc',[[-2,'♭♭'],[-1,'♭'],[0,'♮'],[1,'♯'],[2,'×♯'],['n',T('scAuto')]].map(([v,l])=>`<button class="pk2 big" data-ac="${v}">${l}</button>`).join(''),'wrap')
  +G('gInput',B('hand',T('scHand'))+B('finger',T('scFinger')));
 if(tab==='o')return G('gArt',['stac','acc','ten','marc','ferm'].map(a=>`<button class="pk2" data-ar="${a}" title="${T('scA'+a)}">${icoArt(a)}</button>`).join('')+`<button class="pk2" data-ar="">${T('scA0')}</button>`,'wrap')
  +G('gDyn',['ppp','pp','p','mp','mf','f','ff','fff','sfz'].map(a=>`<button class="pk2 dy" data-dy="${a}">${a}</button>`).join('')+`<button class="pk2" data-dy="">${T('scA0')}</button>`,'wrap')
  +G('gBar',[['n',T('scB1')],['d',T('scB2')],['f',T('scB3')],['re',T('scB4')]].map(([v,l])=>`<button class="pk2" data-br="${v}">${l}</button>`).join('')+B('rs',T('scRS')),'wrap');
 if(tab==='x')return G('gTitle',`<input id="scTi" placeholder="${T('scTitle')}" aria-label="${T('scTitle')}"><input id="scCo" placeholder="${T('scComp')}" aria-label="${T('scComp')}">`)+G('gChord',B('opench',T('scOpenCh')))+G('gLyr',B('lyr',T('scLyr')));
 if(tab==='p')return G('gPlay',B('play',T('scPlay'),'')+`<label class="rl2">${T('scTempo')} <input id="scTp" type="number" min="30" max="240"></label>`)+G('gSound',`<label class="rl2">${T('scInstL')} <select id="scInst">${SINST.map(([v,k])=>`<option value="${v}">${T(k)}</option>`).join('')}</select></label>`)+G('gWait',`<label class="rl2">${T('scWaitL')} <select id="scWait">${[['fast','scWaitF'],['normal','scWaitN'],['long','scWaitG']].map(([v,k])=>`<option value="${v}">${T(k)}</option>`).join('')}</select></label>`)+G('gAi',tg('aiAuto',T('scAiAuto'))+B('libreset',T('scLibReset',ED.lib.length)),'wrap')+G('gMet',tg('met',T('scMet'))+tg('cnt',T('scCnt'))+tg('fol',T('scFol'))+tg('chp',T('scHsChp'))+tg('snd',T('scHsSnd')),'wrap');
 if(tab==='l')return G('gKT',`<label class="rl2">${T('scKey')} <select id="scKey">${[...Array(15)].map((_,i)=>{const f=i-7;return`<option value="${f}">${f===0?'C / Am':(f>0?f+' ♯':(-f)+' ♭')}</option>`}).join('')}</select></label><label class="rl2">${T('scTime')} <select id="scTm">${TIMES.map(t=>`<option value="${t[0]}/${t[1]}">${t[0]}/${t[1]}</option>`).join('')}</select></label>`)+G('gMeas',B('addm',T('scAddM'))+B('delm',T('scDelM')));
 return G('gZoom',B('zout','−')+B('zfit','⤢')+B('zin','+'))+G('gKeypad',B('kb','⌨ '+T('scKb')))+G('gPrint',B('print',T('scPrint')));}
function ribRender(anim){const p=$('scrib');if(!p)return;p.classList.toggle('closed',ED.ribOpen===false);if(anim&&ED.ribOpen!==false){p.classList.remove('opening');void p.offsetWidth;p.classList.add('opening')}if(!RTABS.some(t=>t[0]===ED.rib))ED.rib='h';p.innerHTML=ribBody(ED.rib);document.querySelectorAll('[data-rib]').forEach(b=>{b.classList.toggle('p',b.dataset.rib===ED.rib);b.setAttribute('aria-selected',b.dataset.rib===ED.rib)});syncTB()}

function scoreUI(){ED.rpt=null;const sc=ED.sc||(ED.sc=loadScore());ED.msg=ED.pen?T('scPen'):'';
 const b=(a,l,c)=>`<button class="btn sb ${c||''}" data-a="${a}">${l}</button>`;
 $('v').innerHTML=`<h2 style="margin:4px 0 8px">${T('nS')}</h2>
<div class="sc" id="sc"><div class="rib" role="tablist">${RTABS.map(([t,k])=>`<button class="rt" role="tab" data-rib="${t}">${T(k)}</button>`).join('')}</div><div class="rp" id="scrib"></div>
<div class="msg" id="scmsg" aria-live="polite">${esc(ED.msg||T('scMsg'))}</div><button class="btn y" id="aiBtn" hidden style="margin:4px 0">🧠 ${T('scAiBtn')}</button><div id="scpn" class="hide"><textarea id="sct" rows="3" style="width:100%" aria-label="${T('scCode')}"></textarea><div class="tr">${b('gen',T('scGen'))}${b('opn',T('scOpen'))}</div></div>
<div id="scref" class="scref" hidden></div><input type="file" id="screfIn" accept="application/pdf,image/*" hidden><div class="scw" id="scw"><div id="scsv"></div></div><div id="sclog" class="sclog" hidden></div>
<p class="note">${T('scKeys')}</p><p class="note">${T('scHelp')}</p>
<div id="scpal" class="pal" role="dialog" aria-label="${T('scKb')}"><div class="pal-h" id="scph"><span class="grip" aria-hidden="true">⋮⋮</span>${PTABS.map(([t,k])=>`<button class="tabb" data-tab="${t}">${T(k)}</button>`).join('')}<button class="tabb" data-a="palmin" aria-label="−">−</button><button class="tabb" data-a="kb" aria-label="×">×</button></div><div class="pal-b" id="scpb"></div></div>
<button class="scfab" id="scfab" data-a="kb" aria-label="${T('scFab')}" title="${T('scFab')}"><svg viewBox="0 0 28 24" width="24" height="20" aria-hidden="true"><rect x="2" y="3" width="24" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 3v10M14 3v10M20 3v10" stroke="currentColor" stroke-width="2"/></svg></button><div class="bub hide" id="scbub"><input id="scbi" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="${T('scTabX')}"><button class="btn sb p" data-a="bok" aria-label="OK">✓</button><button class="btn sb" data-a="bdel" aria-label="${T('scDel')}">🗑</button></div></div>`;
 $('fab').classList.add('hide');document.body.classList.add('scm');try{const z=+localStorage.getItem('pent_z');if(z>=.6&&z<=3.2){ED.z=z;ED.zUser=true}}catch(e){}initZoom();
 $('scbi').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();bubOk()}else if(e.key==='Escape'){bubClose()}});
 const r=$('sc');
 r.onclick=e=>{const el=e.target.closest('[data-rib],[data-a],[data-d],[data-ac],[data-ar],[data-dy],[data-br],[data-tab],[data-hs],[data-tk],[data-nv]');if(!el)return;const sc=ED.sc;
  if(el.dataset.rib){if(ED.rib===el.dataset.rib)ED.ribOpen=ED.ribOpen===false;else{ED.rib=el.dataset.rib;ED.ribOpen=true}ribRender(true);return}
  if(el.dataset.hs&&!$('scpal').contains(el)){ED.hs[el.dataset.hs]=!ED.hs[el.dataset.hs];hsSave();ribRender();return}
  if(el.dataset.nv){const m=whTarget();if(!m){msg(T('scNoSel'));return}pushU();navToggle(m,el.dataset.nv);sSave();redraw();return}
  if(el.dataset.tab){ED.tab=el.dataset.tab;ED.palMin=false;palRender();return}
  if(el.dataset.hs){ED.hs[el.dataset.hs]=!ED.hs[el.dataset.hs];hsSave();palRender();return}
  if(el.dataset.tk){const i=$('scChI');if(i){i.value+=el.dataset.tk;i.focus()}return}
  if(el.dataset.d){ED.dur=+el.dataset.d;ED.rest=el.dataset.r==='1';if(ED.dur===32)ED.dot=false;const ev=ED.selX?selEv():null;if(ev){const s=ED.sel,st=evStart(sc.ms[s.m].st[s.s],s.i);pushU();const rr=putAt(sc,s.m,s.s,st,curLen(),ED.rest?null:ev.n);ED.sel=rr.sel;ED.cur=rr.cur;sSave()}redraw();return}
  if(el.dataset.ac!=null){const v=el.dataset.ac,val=v==='n'?null:+v,ev=ED.selX?selEv():null;if(ev&&ev.n){pushU();ev.n.forEach(n=>n.a=val);sSave();sp(ev.n.map(n=>midiOf(sc,n)),.8)}else ED.acc=val;redraw();return}
  if(el.dataset.ar!=null){const ev=selEv();if(!ev||!ev.n){msg(T('scNoSel'));return}pushU();ev.art=el.dataset.ar||undefined;sSave();redraw();return}
  if(el.dataset.dy!=null){const ev=selEv();if(!ev||!ev.n){msg(T('scNoSel'));return}pushU();ev.dyn=el.dataset.dy||undefined;sSave();redraw();return}
  if(el.dataset.br){pushU();const m=sc.ms[ED.sel?ED.sel.m:ED.cur.m];if(m){m.bar=el.dataset.br;sSave();redraw()}return}
  const a=el.dataset.a;
  if(a==='dot'){ED.dot=!ED.dot;redraw()}
  else if(a==='chord'){ED.chord=!ED.chord;redraw()}
  else if(a==='hand'){ED.hand=!ED.hand;redraw()}
  else if(a==='dbg'){sDbg()}else if(a==='logtog'){ED.logOn=!ED.logOn;try{localStorage.setItem('pent_logon',ED.logOn?'1':'0')}catch(e){}logRender();ribRender()}else if(a==='logcopy'){logCopy()}else if(a==='refopen'){const f=$('screfIn');if(f){f.value='';f.click()}}else if(a==='refshow'){ED.refHide=!ED.refHide;refRender();ribRender()}else if(a==='refclose'){refClose()}else if(a==='hmore'){ED.hMore=!ED.hMore;ribRender()}
  else if(a==='vo1'||a==='vo2'){const m=whTarget();if(m){pushU();navToggle(m,a);sSave();redraw()}}else if(a==='whgo'){whApply()}else if(a==='whclr'){whClear()}else if(a==='whtx'){const v=($('whTx').value||'').trim();const m=whTarget();if(v&&m){pushU();txToggle(m,v,'x');sSave();redraw();$('whTx').value=''}else if(!m)msg(T('scNoSel'))}
  else if(a==='libreset'){ED.lib=[];libSave();msg(T('scLibOff'));ribRender()}
  else if(a==='finger'){ED.finger=!ED.finger;redraw()}
  else if(a==='kb'){ED.kb=!ED.kb;syncTB()}
  else if(a==='slur')spanApply('sl','s');else if(a==='cres')spanApply('hp','c');else if(a==='dimi')spanApply('hp','d');else if(a==='spclr')spanClear();else if(a==='lyr')lyrOpen();
  else if(a==='clg')setClef('g');else if(a==='clf')setClef('f');else if(a==='clx')setClef('-');
  else if(a==='tr1')transp(1);else if(a==='tr-1')transp(-1);else if(a==='tr12')transp(12);else if(a==='tr-12')transp(-12);
  else if(a==='pdf')sPdf(false);else if(a==='pdfs')sPdf(true);
  else if(a==='mcopy')mCopy();else if(a==='mcut')mCopy(true);else if(a==='mpaste')mPaste();else if(a==='mdup')mPaste(true);else if(a==='mall')mAll();else if(a==='mnone')mNone();
  else if(a==='opench'){ED.tab='x';ED.kb=true;palRender()}
  else if(a==='chins'){const i=$('scChI');const t=(i&&i.value||'').trim();if(!t){if(i)i.focus();return}const cu=ED.cur||{m:0,t:0};chPut(cu.m,Math.floor(cu.t/4)*4,t)}
  else if(a==='chdel'){if(ED.csel){chDel(ED.csel.m,ED.csel.i)}else msg(T('scNoSel'))}
  else if(a==='bok')bubOk();else if(a==='bdel')bubDel();
  else if(a==='zin'||a==='zout'||a==='zfit')zoomBtn(a.slice(1))
  else if(a==='palmin'){ED.palMin=!ED.palMin;syncTB()}
  else if(a==='tie'){const ev=selEv();if(!ev||!ev.n){msg(T('scNoSel'));return}pushU();ev.tie=!ev.tie||undefined;sSave();redraw()}
  else if(a==='del'){if(ED.sel)delSel();else msg(T('scNoSel'))}
  else if(a==='addm'){pushU();const i=ED.sel?ED.sel.m+1:sc.ms.length;sc.ms.splice(i,0,blankM(sc));sSave();redraw()}
  else if(a==='delm'){if(sc.ms.length<2)return;pushU();const i=ED.sel?ED.sel.m:ED.cur.m;sc.ms.splice(Math.min(i,sc.ms.length-1),1);ED.sel=null;fixSel();sSave();redraw()}
  else if(a==='rs'){rptStart()}
  else if(a==='undo')undo();else if(a==='redo')redo();else if(a==='play')sPlay();else if(a==='xml')sXml();
  else if(a==='print'){document.body.classList.add('prt');try{window.print()}catch(e){}setTimeout(()=>document.body.classList.remove('prt'),800)}
  else if(a==='code'){$('scpn').classList.toggle('hide');$('sct').value=sCode()}
  else if(a==='gen'){$('sct').value=sCode()}
  else if(a==='opn'){sOpen($('sct').value)}
  else if(a==='new'||a==='new2'){if(confirm(T('scNewQ'))){sStop();pushU();ED.sc=newScore(a==='new2');ED.sel=null;ED.cur={m:0,s:0,t:0};ED.lastD=[32,20];sSave();scoreUI()}}};
 r.onchange=e=>{const id=e.target.id,sc=ED.sc,v=e.target.value;
  if(id==='scKey'||id==='scKeyR'){pushU();sc.f=+v}
  else if(id==='scTm'||id==='scTmR'){pushU();const[n,d]=v.split('/').map(Number);reTime(sc,n,d)}
  else if(id==='scWait'){ED.hs.wait=v;hsSave();msg(T('scWaitOk'));return}
  else if(id==='scInst'){ED.hs.inst=v;hsSave();sp([64,67,72],1);return}
  else if(id==='scTp'){sc.tempo=Math.max(30,Math.min(240,+v||80))}
  else if(id==='scTi')sc.title=v;else if(id==='scCo')sc.comp=v;
  else return;sSave();redraw()};
 const sv=$('scsv');sv.addEventListener('pointerdown',sPD);sv.addEventListener('pointermove',sPM);sv.addEventListener('pointerup',sPU);sv.addEventListener('pointercancel',e=>{if(e.pointerType==='touch'){PTR.delete(e.pointerId);if(PTR.size<2)pinchEnd();if(sDown&&sDown.pl)sDown.pl.remove();sDown=null}else sPU(e)});
 let _gz=null;['gesturestart','gesturechange','gestureend'].forEach(n=>$('scw').addEventListener(n,e=>{e.preventDefault();if(PTR.size>=2)return;if(n==='gesturestart')_gz=ED.z;else if(n==='gesturechange'&&_gz)zoomLater(_gz*e.scale,e.clientX,e.clientY)}));
 $('scw').addEventListener('wheel',e=>{if(e.ctrlKey){e.preventDefault();zoomLater(ED.z*Math.exp(-e.deltaY*.01),e.clientX,e.clientY)}},{passive:false});
 sv.addEventListener('contextmenu',e=>e.preventDefault());
 palDrag();palPlace();palRender();ribRender();redraw();refRender();logRender()}
function sel_(){sel=[]}
document.addEventListener('keydown',sKey);
function reTime(sc,n,d){const flat=sc.clefs.map((_,s)=>{const a=[];let p=0;sc.ms.forEach(m=>m.st[s].forEach(e=>{a.push({e,p});p+=e.len}));return a});
 const total=Math.max(...flat.map(a=>a.reduce((x,o)=>x+o.e.len,0)));
 const bars=sc.ms.map(m=>({bar:m.bar,rs:m.rs,cl:m.cl,vo:m.vo,nav:m.nav,tx:m.tx})),oc=capOf(sc),chs=[];sc.ms.forEach((m,i)=>(m.ch||[]).forEach(c=>chs.push({p:i*oc+c.t,x:c.x})));
 sc.num=n;sc.den=d;const cap=capOf(sc),nm=Math.max(4,Math.ceil(total/cap));sc.ms=[];for(let i=0;i<nm;i++){const m=blankM(sc);if(bars[i]){m.bar=bars[i].bar;m.rs=bars[i].rs;if(bars[i].cl)m.cl=bars[i].cl;if(bars[i].vo)m.vo=bars[i].vo;if(bars[i].nav)m.nav=bars[i].nav;if(bars[i].tx)m.tx=bars[i].tx}sc.ms.push(m)}
 flat.forEach((seq,s)=>seq.forEach(({e,p})=>{if(!e.n)return;const mi=Math.floor(p/cap),t=p%cap;putAt(sc,mi,s,t,e.len,e.n);
  const m0=sc.ms[mi].st[s],i0=idxAt(m0,t);if(m0[i0]){if(e.dyn)m0[i0].dyn=e.dyn;if(e.art)m0[i0].art=e.art;if(e.sl)m0[i0].sl=e.sl;if(e.hp)m0[i0].hp=e.hp;if(e.ly)m0[i0].ly=e.ly}
  const q=p+e.len-1,mq=Math.floor(q/cap),mm=sc.ms[mq].st[s],iq=idxAt(mm,q%cap);if(mm[iq]&&e.tie)mm[iq].tie=true}));
 chs.forEach(c=>{const mi=Math.floor(c.p/cap),m=sc.ms[mi];if(m)m.ch.push({t:Math.min(cap-4,Math.floor((c.p%cap)/4)*4),x:c.x})});
 ED.sel=null;ED.cur={m:0,s:0,t:0}}
function loadScore(){try{const s=JSON.parse(localStorage.getItem('pent_score'));if(s&&s.ms&&s.clefs)return s}catch(e){}return newScore(false)}

function initZoom(){const cw=($('scw')&&$('scw').clientWidth)||innerWidth;if(!ED.zUser)ED.z=Math.max(.9,Math.min(2.2,cw/560));ED.W=Math.max(320,Math.round(cw/ED.z))}
let _rz;addEventListener('resize',()=>{clearTimeout(_rz);_rz=setTimeout(()=>{if(view==='S'&&$('scw')){const w0=ED.W;initZoom();if(Math.abs(ED.W-w0)>8)redraw()}},200)});
function touchSync(e){if(view!=='S')return;const n=e.touches.length;if(n===0){PTR.clear();pinchEnd();return}
 if(n<PTR.size){if(PZ)pinchEnd();const t=e.touches[0];let best=null,bd=1e9;PTR.forEach((v,k)=>{const d=Math.hypot(v.x-t.clientX,v.y-t.clientY);if(d<bd){bd=d;best=k}});const keep=best!=null?PTR.get(best):null;PTR.clear();if(keep)PTR.set(best,keep)}}
document.addEventListener('touchend',touchSync,{passive:true});document.addEventListener('touchcancel',touchSync,{passive:true});addEventListener('blur',()=>{PTR.clear();pinchEnd()});
let _zq=null;
function setZoom(z,mx,my,lx,ly){if(lx==null){lx=mx;ly=my}z=Math.max(.6,Math.min(3.2,z));if(Math.abs(z-ED.z)<.005)return;const sv=$('scsvg'),w=$('scw');let am=null;
 if(sv&&mx!=null){const r=sv.getBoundingClientRect(),ux=(mx-r.left)/ED.z,uy=(my-r.top)/ED.z;let bd=1e9,anc=null;ED.G.forEach(g=>{const cx=Math.max(g.x0,Math.min(g.x1,ux)),d=Math.hypot(ux-cx,uy-(g.yb-16));if(d<bd){bd=d;anc=g}});if(anc)am={m:anc.m,s:anc.s,fx:(ux-anc.x0)/Math.max(1,anc.x1-anc.x0),dy:uy-(anc.yb-16)}}
 ED.z=z;ED.zUser=true;ED.W=Math.max(320,Math.round(w.clientWidth/z));redraw();
 if(am){const g2=ED.G.find(g=>g.m===am.m&&g.s===am.s),r2=$('scsvg').getBoundingClientRect();if(g2){const X=r2.left+(g2.x0+am.fx*(g2.x1-g2.x0))*z,Y=r2.top+(g2.yb-16+am.dy)*z;w.scrollLeft+=X-lx;window.scrollBy(0,Y-ly)}}
 try{localStorage.setItem('pent_z',String(ED.z))}catch(e){}}
function zoomLater(z,mx,my){_zq={z,mx,my};if(!zoomLater.p){zoomLater.p=1;requestAnimationFrame(()=>{zoomLater.p=0;const q=_zq;if(q)setZoom(q.z,q.mx,q.my)})}}
function zoomBtn(k){const r=$('scw').getBoundingClientRect(),my=Math.max(r.top,0)+Math.min(innerHeight,r.height)/2;if(k==='fit'){ED.zUser=false;try{localStorage.removeItem('pent_z')}catch(e){}const cw=$('scw').clientWidth;ED.z=Math.max(.9,Math.min(2.2,cw/560));ED.W=Math.max(320,Math.round(cw/ED.z));redraw()}else setZoom(ED.z*(k==='in'?1.25:.8),r.left+r.width/2,my)}

Object.assign(X,{gClef:['Clave','Clef','Clave','Clé'],gKeyT:['Tom e compasso','Key & time','Tono y compás','Tonalité et mesure'],hMore:['Mais','More','Más','Plus'],hLess:['Menos','Less','Menos','Moins']});

Object.assign(X,{balT:['Ações da seleção','Selection actions','Acciones de la selección','Actions de la sélection']});
