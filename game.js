const $ = (s) => document.querySelector(s);

const namesA = ['BYTE','VOID','NEON','IRON','CRYPT','GLITCH','NANO','DATA','RUNE','PIXEL','CHAIN','ZERO'];
const namesB = ['SLIME','REAPER','WOLF','GOLEM','MOTH','RAT','WYRM','GHOST','DRONE','BEETLE','APE','SERPENT'];
const elements = ['DATA','FIRE','ICE','VOLT','VOID','METAL','TOXIC','LIGHT'];
const skills = ['PACKET BITE','HASH CRUSH','LASER BURST','NULL PULSE','CHAIN RIP','OVERFLOW','STATIC CLAW','ROOT BREAK'];

let player, enemy, wins = 0;

function hashString(str){
  let h = 2166136261 >>> 0;
  for (let i=0;i<str.length;i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed){
  let s = seed >>> 0;
  return () => {
    s += 0x6D2B79F5;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeMonster(code){
  const seed = hashString(code);
  const r = rng(seed);
  const roll = r();
  let rarity = 'COMMON', mult = 1;
  if (roll > .995) { rarity='MYTHIC'; mult=1.75; }
  else if (roll > .965) { rarity='LEGENDARY'; mult=1.52; }
  else if (roll > .88) { rarity='EPIC'; mult=1.32; }
  else if (roll > .67) { rarity='RARE'; mult=1.16; }
  const hp = Math.round((70 + r()*130) * mult);
  const atk = Math.round((18 + r()*92) * mult);
  const def = Math.round((14 + r()*82) * mult);
  const spd = Math.round((12 + r()*88) * mult);
  return {
    code, seed, rarity,
    name: `${namesA[Math.floor(r()*namesA.length)]} ${namesB[Math.floor(r()*namesB.length)]}`,
    element: elements[Math.floor(r()*elements.length)],
    skill: skills[Math.floor(r()*skills.length)],
    maxHp: hp, hp, atk, def, spd,
    palette: Math.floor(r()*8), body: Math.floor(r()*5), eyes: Math.floor(r()*5), horns: Math.floor(r()*4)
  };
}

function drawMonster(canvas,m,scale=1){
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.imageSmoothingEnabled = false;
  const palettes = [
    ['#7CFF6B','#1F9E52','#102A26','#F4FF8D'],['#75D8FF','#3479D4','#17245B','#FFFFFF'],
    ['#FF6B80','#B62B67','#3A173F','#FFD46B'],['#C48CFF','#6D3ED1','#25194E','#A7FFF1'],
    ['#FFD45E','#D16B29','#502819','#FFF2B3'],['#86FFD8','#22A99C','#143D50','#FF8CF0'],
    ['#D6DFEA','#69788E','#1D2736','#FF5252'],['#FF9B57','#E34128','#401C1C','#FFF07C']
  ];
  const p = palettes[m.palette % palettes.length];
  const px = Math.floor(canvas.width/16), ox = Math.floor((canvas.width-px*16)/2), oy = Math.floor((canvas.height-px*16)/2);
  const fill=(x,y,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(ox+x*px,oy+y*px,w*px,h*px)};
  // shadow
  fill(4,13,8,1,'rgba(0,0,0,.45)');
  // body silhouettes
  if(m.body===0){fill(4,5,8,7,p[1]);fill(3,7,10,4,p[0]);fill(5,4,6,1,p[0]);}
  if(m.body===1){fill(5,3,6,10,p[1]);fill(3,6,10,5,p[0]);fill(6,2,4,2,p[0]);}
  if(m.body===2){fill(3,5,10,7,p[1]);fill(5,3,6,9,p[0]);fill(2,8,2,3,p[0]);fill(12,8,2,3,p[0]);}
  if(m.body===3){fill(4,4,8,8,p[1]);fill(2,6,12,5,p[0]);fill(5,2,6,3,p[0]);}
  if(m.body===4){fill(5,4,6,9,p[1]);fill(3,6,10,5,p[0]);fill(4,3,8,3,p[0]);}
  // horns/ears
  if(m.horns===1){fill(3,3,2,3,p[2]);fill(11,3,2,3,p[2]);}
  if(m.horns===2){fill(2,2,2,5,p[0]);fill(12,2,2,5,p[0]);}
  if(m.horns===3){fill(4,1,2,4,p[2]);fill(10,1,2,4,p[2]);}
  // face
  const ey = 7;
  if(m.eyes===0){fill(5,ey,2,2,p[3]);fill(9,ey,2,2,p[3]);}
  if(m.eyes===1){fill(4,ey,3,1,p[3]);fill(9,ey,3,1,p[3]);}
  if(m.eyes===2){fill(6,ey,4,2,p[3]);}
  if(m.eyes===3){fill(5,ey,2,2,p[3]);fill(9,ey,2,2,p[3]);fill(7,5,2,2,p[3]);}
  if(m.eyes===4){fill(5,ey,2,1,p[3]);fill(9,ey,2,1,p[3]);fill(7,10,2,1,p[2]);}
  fill(7,10,2,1,p[2]);
  // pixel highlights
  fill(4,6,1,2,'rgba(255,255,255,.28)');
  fill(11,10,1,1,'rgba(0,0,0,.2)');
}

function renderBarcode(code){
  const box = $('#barcodeVisual'); box.innerHTML='';
  const bits = '101' + code.split('').map((d,i)=>{
    let n = (Number(d)+i*3)%10;
    return n.toString(2).padStart(4,'0') + (i%2?'10':'01');
  }).join('') + '101';
  bits.split('').forEach((b,i)=>{
    const bar=document.createElement('i');
    bar.style.width=(b==='1' ? (i%5===0?3:2) : 1)+'px';
    bar.style.background=b==='1'?'#080808':'transparent';
    box.appendChild(bar);
  });
}

function rarityColor(r){ return ({COMMON:'#b8c2ce',RARE:'#69c9ff',EPIC:'#c48cff',LEGENDARY:'#ffd45e',MYTHIC:'#ff6b80'})[r]; }

function summon(){
  const code = $('#barcode').value.replace(/\D/g,'').slice(0,18);
  if(code.length<8){ $('#battleLog').textContent='Enter at least 8 digits.'; return; }
  $('#barcode').value=code;
  player=makeMonster(code);
  player.hp=player.maxHp;
  $('#monsterName').textContent=player.name;
  $('#playerBattleName').textContent=player.name;
  $('#rarity').textContent=player.rarity;
  $('#rarity').style.color=rarityColor(player.rarity);
  $('#element').textContent=player.element+' TYPE';
  $('#skill').textContent='SPECIAL: '+player.skill;
  $('#stats').innerHTML=[['HP',player.maxHp],['ATK',player.atk],['DEF',player.def],['SPD',player.spd]].map(x=>`<div class="stat"><b>${x[1]}</b><span>${x[0]}</span></div>`).join('');
  $('#powerScore').textContent=player.maxHp+player.atk+player.def+player.spd;
  $('#seedId').textContent='#'+String(player.seed%1000000).padStart(6,'0');
  renderBarcode(code);
  drawMonster($('#playerCanvas'),player);
  drawMonster($('#battlePlayerCanvas'),player);
  newEnemy();
  $('#battleLog').textContent=`${player.rarity} ${player.name} was summoned from ${code}.`;
  updateBattle();
}

function newEnemy(){
  const code = String(Math.floor(1000000000000 + Math.random()*8999999999999));
  enemy=makeMonster(code); enemy.hp=enemy.maxHp;
  $('#enemyName').textContent=enemy.name;
  drawMonster($('#enemyCanvas'),enemy);
  if(player){player.hp=player.maxHp; drawMonster($('#battlePlayerCanvas'),player)}
  updateBattle();
}

function damage(attacker,defender,special=false){
  const variance=.82+Math.random()*.36;
  const base=attacker.atk*(special?1.65:1)-defender.def*.28;
  return Math.max(4,Math.round(base*variance));
}

function fight(special=false){
  if(!player||!enemy) return;
  if(player.hp<=0||enemy.hp<=0){ $('#battleLog').textContent='Battle is over. Summon or choose a new enemy.'; return; }
  const playerFirst = player.spd + Math.random()*25 >= enemy.spd + Math.random()*25;
  const turns = playerFirst ? [['p',special],['e',false]] : [['e',false],['p',special]];
  let logs=[];
  for(const [who,sp] of turns){
    if(player.hp<=0||enemy.hp<=0) break;
    const a=who==='p'?player:enemy, d=who==='p'?enemy:player;
    const dmg=damage(a,d,sp); d.hp=Math.max(0,d.hp-dmg);
    logs.push(`${a.name} used ${sp?a.skill:'ATTACK'} — ${dmg} damage!`);
  }
  if(enemy.hp<=0){ wins++; $('#winCount').textContent=wins; logs.push(`★ ${player.name} WINS!`); }
  if(player.hp<=0) logs.push(`☠ ${player.name} was defeated.`);
  $('#battleLog').textContent=logs.join(' ');
  updateBattle();
}

function updateBattle(){
  if(!player||!enemy)return;
  $('#playerHpBar').style.width=(player.hp/player.maxHp*100)+'%';
  $('#enemyHpBar').style.width=(enemy.hp/enemy.maxHp*100)+'%';
  $('#playerHpText').textContent=`HP ${player.hp}/${player.maxHp}`;
  $('#enemyHpText').textContent=`HP ${enemy.hp}/${enemy.maxHp}`;
}

$('#summonBtn').addEventListener('click',summon);
$('#attackBtn').addEventListener('click',()=>fight(false));
$('#specialBtn').addEventListener('click',()=>fight(true));
$('#newEnemyBtn').addEventListener('click',()=>{newEnemy();$('#battleLog').textContent='A new barcode monster appeared.'});
$('#barcode').addEventListener('keydown',e=>{if(e.key==='Enter')summon()});
summon();
