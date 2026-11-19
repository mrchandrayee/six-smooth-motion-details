const data={
copy:{k:"01 · COPY BUTTON",t:'Morph, don\'t <em>swap.</em>',d:"A copy action morphs into its success state instead of abruptly replacing the button.",hint:"Click Copy to see the button morph into its success state.",call:"ICON MORPHS · WIDENS 36 px"},
field:{k:"02 · TEXT FIELD",t:'Float, don\'t <em>vanish.</em>',d:"The label moves above the typed value and stays visible after the field is filled.",hint:"Click the email field, type, then blur it. The label stays visible.",call:"LABEL 20 → 14 px · LINE FROM CENTRE"},
steps:{k:"03 · CHECKOUT STEPS",t:'Draw, fill, <em>wake.</em>',d:"The progress line draws itself as the user advances through checkout steps.",hint:"Click Continue to advance the checkout progress line.",call:"LINE FILLS IN 400 ms"},
map:{k:"04 · MAP PIN",t:'Drop, then <em>bounce.</em>',d:"A map pin lands quickly, then makes two smaller bounces before settling.",hint:"Click Drop pin to replay the landing and two-bounce motion.",call:"LANDS IN 200 ms · 2 BOUNCES"},
delete:{k:"05 · DELETE",t:'Fly into the <em>bin.</em>',d:"The deleted row flies toward the bin. The remaining list closes the gap smoothly.",hint:"Click the × on a file row. Use Undo to restore it.",call:"FLIES 400 ms · GAP CLOSES"},
photo:{k:"06 · PHOTO VIEWER",t:'Follow, then <em>return.</em>',d:"The selected photo follows the gesture at a 1:1 feel, then springs back into its grid.",hint:"Click the large photo to zoom. Click × to spring back to the grid.",call:"FOLLOWS 1:1 · SPRINGS HOME"}
};
const $=id=>document.getElementById(id);let active="copy",step=1,deleted=null,undoTimer=null;
function select(id){active=id;document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.id===id));document.querySelectorAll('.example').forEach(e=>e.classList.toggle('active',e.dataset.example===id));const d=data[id];$('kicker').textContent=d.k;$('title').innerHTML=d.t;$('description').textContent=d.d;$('hint').textContent=d.hint;reset()}
function reset(){if(active==="copy"){$('copyBtn').classList.remove('copied');$('copyBtn').innerHTML='<span class="copy-glyph">▢</span><strong>Copy</strong>'}
if(active==="steps"){step=1;updateSteps()}
if(active==="map"){$('mapPin').classList.remove('dropped');$('pickup').classList.remove('show')}
if(active==="photo")$('photoViewer').classList.remove('zoomed')}
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>select(b.dataset.id)));
$('copyBtn').addEventListener('click',()=>{const b=$('copyBtn');b.classList.add('copied');b.innerHTML='<span class="copy-glyph">✓</span><strong>Copied</strong>';if(navigator.clipboard?.writeText)navigator.clipboard.writeText('https://motion.ui/p/5').catch(()=>{})});
$('email').addEventListener('focus',e=>e.target.parentElement.classList.add('focused'));
$('email').addEventListener('blur',e=>e.target.parentElement.classList.remove('focused'));
function updateSteps(){document.querySelectorAll('.step').forEach((b,i)=>{b.classList.toggle('done',i<step);b.classList.toggle('current',i===step);b.querySelector('i').textContent=i<step?'✓':String(i+1)});$('trackFill').style.width=(step===0?0:step===1?42:84)+'%';$('continue').textContent=step===2?'Done':'Continue'}
document.querySelectorAll('.step').forEach(b=>b.addEventListener('click',()=>{step=Number(b.dataset.step);updateSteps()}));
$('continue').addEventListener('click',()=>{step=Math.min(2,step+1);updateSteps();if(step===2)$('continue').textContent='Payment ready'});
function drop(){const p=$('mapPin');p.classList.remove('dropped');void p.offsetWidth;p.classList.add('dropped');$('pickup').classList.add('show')}
$('dropPin').addEventListener('click',drop);$('mapPin').addEventListener('click',drop);
function deleteRow(row){if(!row||row.classList.contains('flying'))return;deleted=row.cloneNode(true);row.classList.add('flying');setTimeout(()=>{row.remove();$('undo').classList.add('show')},390)}
$('fileList').addEventListener('click',e=>{const btn=e.target.closest('button');if(btn)deleteRow(btn.closest('.file-row'))});
$('undo').addEventListener('click',()=>{if(!deleted)return;$('fileList').appendChild(deleted);deleted=null;$('undo').classList.remove('show')});
$('heroPhoto').addEventListener('click',()=>$('photoViewer').classList.add('zoomed'));
$('returnGrid').addEventListener('click',()=>$('photoViewer').classList.remove('zoomed'));
$('replay').addEventListener('click',()=>{reset();if(active==='copy')$('copyBtn').click();if(active==='steps'){$('continue').click();$('continue').click()}if(active==='map')drop();if(active==='photo')$('photoViewer').classList.add('zoomed');if(active==='delete'){const row=$('fileList').querySelector('.file-row');if(row)deleteRow(row)}});
select("copy");
