(function(){
'use strict';
/* ---------- asset resolver (single-file build injects window.__IMG / __VID) ---------- */
function IMG(k,sm){ if(window.__IMG) return window.__IMG[k]; return 'assets/img/'+k+(sm?'-sm':'')+'.webp'; }
var mobile=window.matchMedia('(max-width: 760px)').matches;
var IG_DM='https://ig.me/m/en_dizajn037';

/* ---------- data (only facts from @en_dizajn037 posts) ---------- */
var CATS={garniture:'Garniture',kreveti:'Kreveti i ležajevi',deciji:'Dečiji kreveti',stolovi:'Stolovi i stolice',ormari:'Ormari',kuhinje:'Kuhinje',komode:'Komode i ostalo'};
var WOOD8=[['Belo','#f4f2ee'],['Sonoma','#c9a57a'],['Hrast','#a77b4f'],['Wenge','#4a3328'],['Sivo','#9b9b98'],['Bež','#d9c7ac'],['Antracit','#45484c'],['Crna','#1d1d1d']];
var KUH1=[['Bela','#f4f2ee'],['Bež','#d9c7ac'],['Siva','#9b9b98'],['Sonoma','#c9a57a'],['Hrast','#a77b4f'],['Wenge','#4a3328'],['Antracit','#45484c'],['Crna','#1d1d1d']];
var KUH2=[['Bela','#f4f2ee'],['Bež','#d9c7ac'],['Siva','#9b9b98'],['Antracit','#45484c'],['Kapućino','#a88a6f'],['Zelena','#5f7a5a'],['Plava','#45607e'],['Crna','#1d1d1d']];
var KUHALL=KUH1.concat(KUH2.filter(function(c){return !KUH1.some(function(k){return k[0]===c[0]})}));
var P=[
 {id:'luna',cat:'garniture',name:'LUNA',sub:'Garnitura sa zaobljenim linijama',imgs:['p02_1','p02_2'],
  desc:'Savršena kombinacija udobnosti i modernog dizajna. Prepoznatljive zaobljene linije, mekano sedište i jedinstven izgled koji privlači pažnju.',
  feat:['Izbor boja i štofova po želji','Dostava širom Srbije'],tag:'Novi model'},
 {id:'chester',cat:'garniture',name:'CHESTER',sub:'Klasična kapitonirana garnitura',imgs:['p09_1','p09_2','p09_3'],
  desc:'Elegancija koja nikada ne izlazi iz mode. Luksuzan dizajn, prepoznatljivi detalji i vrhunska udobnost — doza sofisticiranosti i topline u svakom domu.',
  feat:['Izbor boja i štofova po vašoj želji','Kvalitetna i pažljiva izrada','Dostava širom Srbije']},
 {id:'ugaona',cat:'garniture',name:'Ugaona garnitura',sub:'Na razvlačenje',imgs:['p11_1'],
  desc:'Ugaona garnitura na razvlačenje, objavljena kao komad odmah dostupan na stanju po akcijskoj ceni. Ovaj komad je prodat — sličan model radimo po meri.',
  feat:['Dimenzije: 270 × 240 × 76 + 76 cm','Na razvlačenje','Dostava širom Srbije'],dims:'270 × 240 × 76 + 76 cm',price:450,old:650,sold:true},
 {id:'bubble',cat:'kreveti',name:'BUBBLE',sub:'Francuski ležaj',imgs:['p03_1','p03_2','p03_3'],
  desc:'Moderan dizajn, nežne linije i savršena udobnost. Krevet koji će vašoj spavaćoj sobi dati poseban izgled.',
  feat:['Veliki izbor boja i štofova','Izrada po vašoj želji','Dostava i montaža širom Srbije']},
 {id:'ugaona-mera',cat:'garniture',name:'Ugaona garnitura po meri',sub:'Na razvlačenje, sa prostorom za posteljinu',imgs:['v-ugaona1','v-ugaona2'],thumb:'v-ugaona1_c',
  desc:'Ugaone garniture koje se savršeno uklapaju u vaš prostor — spoj modernog dizajna, udobnosti i kvalitetne izrade.',
  feat:['Izrada po vašoj meri i želji','Veliki izbor boja i materijala','Mogućnost razvlačenja u ležaj','Prostor za odlaganje posteljine','Dostava širom Srbije · montaža gratis']},
 {id:'sofa230',cat:'garniture',name:'Luksuzna garnitura',sub:'Trosed 230 × 100 cm',imgs:['v-sofa230'],thumb:'v-sofa230_c',
  desc:'Garnitura vrhunskog kvaliteta koja unosi eleganciju i udobnost u svaki enterijer.',
  feat:['Dimenzije: 230 × 100 cm','Izrada po vašoj meri i u boji po želji','Kvalitetni materijali i dug vek trajanja','Dostava širom Srbije'],dims:'230 × 100 cm'},
 {id:'francuski',cat:'kreveti',name:'Francuski ležaj',sub:'Tapacirano uzglavlje',imgs:['p10_1','p10_2','p10_3'],
  desc:'Još jedan francuski ležaj iz naše ponude, izrađen sa posebnom pažnjom na svaki detalj. Moderan dizajn i luksuzan izgled.',
  feat:['Udobnost i kvalitetna izrada','Mogućnost izbora boje i štofa','Dostava širom Srbije']},
 {id:'fl420',cat:'kreveti',name:'Francuski ležaj sa prostorom za odlaganje',sub:'Tri modela uzglavlja',imgs:['fl2','fl1','fl3'],
  desc:'Spoj modernog dizajna, udobnosti i praktičnosti za vašu spavaću sobu. Birate boju i štof, a ležaj ima prostor za odlaganje.',
  feat:['Dimenzije: 160 × 200, 180 × 200 ili 200 × 200 cm','Prostor za odlaganje','Izbor boje i štofa, izrada po vašoj želji','Dostava u gradove širom Srbije'],dims:'160–200 × 200 cm',price:420,from:true,tag:'Već od 420 €'},
 {id:'bablbaby',cat:'deciji',name:'BABL BABY',sub:'Dečiji krevet',imgs:['p04_1','p04_2'],
  desc:'Krevet iz snova za vaše mališane. Nežne linije, moderan dizajn i savršena udobnost — model koji svaku dečiju sobu pretvara u pravu malu bajku.',
  feat:['Udoban dušek','Veliki izbor boja i štofova','Dostava širom Srbije'],tag:'Novo'},
 {id:'mali',cat:'deciji',name:'Mali krevet za velike snove',sub:'Dečiji krevet sa ušima',imgs:['p08_1','p08_2'],
  desc:'Nežan dizajn, zaobljene linije i preslatki detalji koji svaku dečiju sobu pretvaraju u pravu malu bajku.',
  feat:['Udobnost i sigurnost za vaše mališane','Mogućnost izbora štofa i boje','Dostava širom Srbije'],tag:'Novo u ponudi'},
 {id:'zeka',cat:'deciji',name:'Krevet sa zečijim ušima',sub:'Dečiji krevet',imgs:['p06_2','p06_1'],
  desc:'Nežnost, elegancija i udobnost spojeni u jednom krevetu. Komad sa lagera u nežnoj nijansi je prodat — model radimo po meri.',
  feat:['Dimenzije: 140 × 200 cm','Dušek uključen u cenu, sa slojem memorijske pene sa gornje strane','Praktični džepovi za odlaganje sitnica','Dostava širom Srbije'],dims:'140 × 200 cm',price:500,sold:true},
 {id:'meda',cat:'deciji',name:'MEDA',sub:'Dečiji krevet',imgs:['n02','p12_1'],
  desc:'Mekan, moderan i pažljivo dizajniran krevet koji će dečiju sobu pretvoriti u pravo malo carstvo. Poslednji komad sa lagera (88 × 200 cm) prodat je po akcijskoj ceni od 300 € — model radimo po meri.',
  feat:['Dimenzije po meri: 90 × 200, 120 × 200, 140 × 200 cm','Boja i štof po izboru','Mekano tapaciran i prijatan na dodir','Dostava širom Srbije'],dims:'90–140 × 200 cm',price:300,old:400,sold:true},
 {id:'zastita',cat:'deciji',name:'Dečiji krevet sa bočnom zaštitom',sub:'Tapacirani krevet po meri',imgs:['n04','n05'],
  desc:'Moderan i udoban tapacirani krevet sa bočnom zaštitom, idealan za siguran i miran san vaših mališana.',
  feat:['Dimenzije: 90 × 200, 120 × 200, 140 × 200 cm','Dušek: žičano jezgro, džepasto jezgro ili memorijska pena','Boja i štof po vašem izboru','Dostava širom Srbije']},
 {id:'samac',cat:'kreveti',name:'Krevet samac',sub:'Geometrijsko uzglavlje',imgs:['v-samac'],thumb:'v-samac_c',price:360,tag:'Akcija',
  desc:'Moderan i praktičan krevet za jednu osobu — za dečiju, tinejdžersku, gostinsku ili manju spavaću sobu. Geometrijsko uzglavlje i prostor za odlaganje.',
  feat:['Akcijska cena: 360 €','Izbor boje i materijala','Prostor za odlaganje','Rok izrade i isporuke: 25–35 dana','Dostava širom Srbije (cenu dostave i dimenzije šaljemo u DM)']},
 {id:'sprat',cat:'deciji',name:'Krevet na sprat NIKI',sub:'Masivno bukovo drvo',imgs:['v-niki','n07'],thumb:'v-niki',
  desc:'Krevet na sprat NIKI od kvalitetnog bukovog drveta — toplina, sigurnost i funkcionalnost za dečiju sobu. Čvrsta konstrukcija, zaštitna ogradica i praktična fioka za odlaganje.',
  feat:['Izrada od masivnog bukovog drveta','Dimenzije: 160 × 90 × 170 cm','Zaštitna ogradica na gornjem ležaju','Fioka za odlaganje stvari ili posteljine','Izrada u željenoj boji','Dostava širom Srbije · montaža gratis'],dims:'160 × 90 × 170 cm'},
 {id:'sprat2',cat:'deciji',name:'Krevet na sprat',sub:'Više prostora, više udobnosti',imgs:['v-sprat2'],thumb:'v-sprat2_c',
  desc:'Praktično i moderno rešenje za dečiju sobu koje štedi prostor, a mališanima pruža udobno i sigurno mesto za spavanje.',
  feat:['Dimenzije: 90 × 200 ili 120 × 200 cm','Dušek: žičano jezgro, džepasto jezgro ili memorijska pena','Mogućnost izbora boje','Dostava širom Srbije'],dims:'90 / 120 × 200 cm'},
 {id:'zeka2',cat:'deciji',name:'ZEKA',sub:'Dečiji krevet sa sandukom',imgs:['v-zeka'],thumb:'v-zeka_c',price:400,from:true,tag:'Cene po dimenziji',
  desc:'Krevet sa mekanim tapaciranim stranicama i simpatičnim detaljima u obliku zečijih ušiju — udobnost, sigurnost i presladak dizajn.',
  feat:['90 × 200 cm — 400 €','120 × 200 cm — 420 €','140 × 200 cm — 450 €','Sanduk za odlaganje','Boja i štof po izboru','Dostava širom Srbije'],dims:'90–140 × 200 cm'},
 {id:'motiv',cat:'deciji',name:'Krevet iz mašte vašeg mališana',sub:'Motiv po vašoj želji',imgs:['v-motiv'],thumb:'v-motiv_c',price:35000,cur:'RSD',tag:'Dušek uključen',
  desc:'Pošaljite nam sliku omiljenog superheroja, crtanog junaka ili motiva vašeg deteta, a mi ćemo krevet pretvoriti u njegovu malu bajku.',
  feat:['Cena: 35.000 RSD','Dušek uključen u cenu','Motiv po vašoj želji','Dostava širom Srbije']},
 {id:'ldream',cat:'deciji',name:'LITTLE DREAM',sub:'Dečiji krevet',imgs:['v-ldream'],price:300,old:400,sold:true,
  desc:'Moderan, nežan i udoban krevet — pravi ukras dečije sobe. Poslednji komad sa lagera prodat je po akcijskoj ceni; model izrađujemo po porudžbini.',
  feat:['Dimenzije: 90 × 200 cm','Boja i štof po izboru','Dostava širom Srbije'],dims:'90 × 200 cm'},
 {id:'princess',cat:'deciji',name:'Little Princess',sub:'Dečiji krevet sa štepanim uzglavljem',imgs:['v-princess'],
  desc:'Stvoren za male princeze: elegantno uzglavlje sa dubokim štepanjem i luksuznim detaljima.',
  feat:['Dimenzije: 90 × 200 cm','Kompletno tapaciran','Proštepani detalji sa dugmićima','Izrada u boji po vašoj želji','Dostava širom Srbije · montaža gratis'],dims:'90 × 200 cm'},
 {id:'medvedic',cat:'deciji',name:'MEDVEDIĆ',sub:'Tapacirani krevet u obliku mede',imgs:['v-medvedic'],
  desc:'Tapacirani krevet u obliku mede, izrađen po vašim željama — birate boju, materijal i dimenzije.',
  feat:['Dimenzije: 90 × 200 cm','Mogućnost sanduka za odlaganje','Izbor boje i materijala','Dostava širom Srbije · montaža gratis'],dims:'90 × 200 cm'},
 {id:'football',cat:'deciji',name:'Football',sub:'Krevet za male ljubitelje fudbala',imgs:['v-football'],thumb:'v-football_c',
  desc:'Dečiji krevet sa fudbalskim motivom i kutijom za odlaganje, izrađen po vašoj meri i u boji po želji.',
  feat:['Dimenzije: 200 × 90 cm','Kutija za odlaganje stvari','Izrada po meri i u boji po želji','Dostava širom Srbije · montaža gratis'],dims:'200 × 90 cm'},
 {id:'flamingo',cat:'deciji',name:'Flamingo krevet',sub:'Dečiji krevet u Flamingo roze štofu',imgs:['p07_1'],
  desc:'Savršen krevet za sobu vaše princeze — prelep model u luksuznom Flamingo roze štofu koji unosi posebnu toplinu i eleganciju. Komad sa lagera je prodat.',
  feat:['Dimenzije: 90 × 200 cm','Boja: Flamingo roze','Dostava na teritoriji cele Srbije'],dims:'90 × 200 cm',sold:true}

 ,{id:'sto-set',cat:'stolovi',name:'Trpezarijski i klub sto',sub:'Metalna konstrukcija',imgs:['n09'],
  desc:'Moderan set stolova sa metalnom konstrukcijom, izrađen od kvalitetnih materijala po vašim željama i dimenzijama.',
  feat:['Trpezarijski sto: 140 × 90 cm + 40 cm dodatak','Klub sto: Ø65 cm i Ø50 cm','Dezen ploče: A440','Izrada po vašoj želji i u boji po izboru']},
 {id:'sto-okrugli',cat:'stolovi',name:'Okrugli trpezarijski sto',sub:'Bela metalna konstrukcija',imgs:['n10'],
  desc:'Moderan trpezarijski sto za svaki enterijer. Izrađujemo stolove po vašim dimenzijama, u boji i dezenu po izboru.',
  feat:['Dimenzije: Ø90 cm + 30 cm dodatak','Ploča od medijapana u belom visokom sjaju','Stolice: Amsterdam 03','Kvalitetna završna obrada']},
 {id:'baluster',cat:'stolovi',name:'Trpezarijski sto Baluster',sub:'Hrast, na razvlačenje',imgs:['v-baluster'],
  desc:'Trpezarijski sto od kvalitetnog hrastovog drveta u boji braon hrast — klasičan dizajn, masivno postolje i mogućnost razvlačenja.',
  feat:['Boja: braon hrast','Dimenzije: 160 × 100 + 40 cm','Okrugli: Ø100 + 30 cm','Dimenzije: 140 × 86 + 33 cm','Za svakodnevnu upotrebu i porodična okupljanja'],dims:'3 dimenzije'},
 {id:'keder',cat:'stolovi',name:'Stolica KEDER',sub:'Tapacirana trpezarijska stolica',imgs:['v-keder'],thumb:'v-keder_c',
  desc:'Model stolice KEDER sa kapitone naslonom — za trpezariju, restoran, kafić ili poslovni prostor. Izrada po porudžbini.',
  feat:['Visina: 90 cm','Širina: 50 cm','Visina sedišta: 48 cm','Materijal i boja po vašoj želji','Dostava širom Srbije']},
 {id:'ormari',cat:'ormari',name:'Orman 240 × 200',sub:'Ogledalo i fioke',imgs:['v-orman1','v-orman2'],thumb:'v-orman1_c',colors:WOOD8,
  desc:'Orman po vašoj meri: moderan dizajn, kvalitetna izrada i maksimalno iskorišćen prostor. Pošaljite dimenzije i želje, a mi izrađujemo orman koji se savršeno uklapa u vaš prostor.',
  feat:['Model sa slike: 240 × 200 cm, 5 vrata sa ogledalom i 2 fioke','Materijal: iverica ili medijapan','Klizna ili krilna vrata','Dezen i boja po želji','Mogućnost ogledala, fioka i dodatnih polica','Dostava širom Srbije · montaža gratis'],dims:'240 × 200 cm'},
 {id:'orman-iv',cat:'ormari',name:'Orman od iverice',sub:'Moderan dizajn',imgs:['v-orman3'],thumb:'v-orman3_c',
  desc:'Kvalitetan i funkcionalan orman od iverice, po vašim željama i dimenzijama.',
  feat:['Dimenzije: 240 × 200 cm','Kvalitetna iverica i pouzdani okovi','Veliki izbor boja i dezena','Dostava širom Srbije'],dims:'240 × 200 cm'},
 {id:'kuh-mdf',cat:'kuhinje',name:'Kuhinja 2 m od medijapana',sub:'Frontovi sa linijskim žlebom',imgs:['v-kuh1','v-kuh4'],thumb:'v-kuh1_c',colors:KUH1,
  desc:'Moderna kuhinja od medijapana, izrađena po vašim dimenzijama — vi birate dezen, boju, veličinu i raspored elemenata.',
  feat:['Kuhinja 2 m (kao na slici), izrada po meri','Materijal: medijapan','Dezen, boja i veličina po želji','Kvalitetni okovi i dug vek trajanja','Dostava širom Srbije · montaža gratis'],dims:'2 m'},
 {id:'kuh-luk',cat:'kuhinje',name:'Kuhinja od 2 m',sub:'Beli medijapan, lučni i stakleni frontovi',imgs:['v-kuh2'],thumb:'v-kuh2_c',colors:KUH2,
  desc:'Beli medijapan vrhunskog kvaliteta — spoj modernog dizajna i dugotrajnosti. Dužinu i boju vi birate.',
  feat:['Kuhinja od 2 m','Izrada po vašoj meri i želji','Materijal: medijapan','Dužinu i boju vi birate','Dostava širom Srbije'],dims:'2 m'},
 {id:'kuh-iv',cat:'kuhinje',name:'Kuhinja od iverice 2 m',sub:'Izrada po meri',imgs:['v-kuh3'],thumb:'v-kuh3_c',
  desc:'Kvalitetna i funkcionalna kuhinja od iverice, potpuno prilagođena vašem prostoru i stilu.',
  feat:['Kuhinja 2 m (kao na slici)','Izrada po meri i u boji po vašem izboru','Kvalitetna iverica i pouzdani okovi','Dostava širom Srbije'],dims:'2 m'},
 {id:'komoda3d',cat:'komode',name:'3D komoda',sub:'Beli visoki sjaj, zlatne ručke',imgs:['v-komoda'],thumb:'v-komoda_c',
  desc:'Luksuzna 3D komoda koja spaja vrhunski izgled i funkcionalnost — za dnevnu sobu, hodnik ili spavaću sobu, izrađena po vašim željama.',
  feat:['Moderan 3D dizajn frontova','Visoki sjaj, luksuzan izgled','Prostrane fioke i ormarići','Izrada po vašoj meri i boji','Dostava širom Srbije · montaža gratis']}
];
var CO=Object.keys(CATS);P=P.map(function(p,i){return [p,i]}).sort(function(a,b){return (CO.indexOf(a[0].cat)-CO.indexOf(b[0].cat))||(a[1]-b[1])}).map(function(x){return x[0]});
var MIX=(function(){var g=Object.keys(CATS).map(function(c){return P.filter(function(p){return p.cat===c})}),o=[],i=0,more=true;while(more){more=false;g.forEach(function(l){if(l[i]){o.push(l[i]);more=true}});i++}return o})();
var byId={};P.forEach(function(p){byId[p.id]=p});

var G=[['p02_1','Garnitura LUNA','luna'],['p03_1','Francuski ležaj BUBBLE','bubble'],['p04_1','Dečiji krevet BABL BABY','bablbaby'],
 ['p09_2','Fotelja CHESTER','chester'],['p10_1','Francuski ležaj','francuski'],['p08_2','Mali krevet za velike snove','mali'],
 ['p02_2','Garnitura LUNA','luna'],['p03_2','Krevet BUBBLE','bubble'],['p06_2','Krevet sa zečijim ušima','zeka'],
 ['p09_3','Garnitura CHESTER','chester'],['p04_2','BABL BABY u dečijoj sobi','bablbaby'],['p10_2','Francuski ležaj – detalj','francuski'],
 ['p03_3','BUBBLE u spavaćoj sobi','bubble'],['v-orman1','Orman 240 × 200 sa ogledalom','ormari'],['v-kuh2','Kuhinja od 2 m, beli medijapan','kuh-luk'],['v-niki','Krevet na sprat NIKI','sprat'],['v-komoda','3D komoda','komoda3d'],['v-keder','Stolica KEDER','keder'],['v-kuh1','Kuhinja 2 m od medijapana','kuh-mdf'],['v-baluster','Trpezarijski sto Baluster','baluster'],['v-princess','Little Princess','princess'],['v-medvedic','Krevet MEDVEDIĆ','medvedic'],['v-ugaona1','Ugaona garnitura po meri','ugaona-mera'],['n09','Trpezarijski sto i stolice','sto-set'],['n07','Krevet na sprat','sprat'],['n10','Okrugli trpezarijski sto','sto-okrugli'],['p08_1','Mali krevet za velike snove','mali'],['p09_1','Garnitura CHESTER','chester']];

/* builder options: only what posts / reference support; no prices */
var BT=[
 {id:'garnitura',name:'Garnitura',ico:'🛋️',img:'p02_1',dims:['Trosed','Dvosed','Fotelja'],mat:'fabric',mattress:false,extras:['Mehanizam na razvlačenje','Dodatni jastuci']},
 {id:'ugaona',name:'Ugaona garnitura',ico:'📐',img:'p11_1',dims:['270 × 240 cm'],mat:'fabric',mattress:false,extras:['Mehanizam na razvlačenje','Dodatni jastuci']},
 {id:'krevet',name:'Francuski ležaj',ico:'🛏️',img:'fl2',dims:['160 × 200 cm','180 × 200 cm','200 × 200 cm'],mat:'fabric',mattress:true,extras:['Prostor za odlaganje','Montaža']},
 {id:'deciji',name:'Dečiji krevet',ico:'🧸',img:'p08_1',dims:['90 × 200 cm','120 × 200 cm','140 × 200 cm'],mat:'fabric',mattress:true,extras:['Bočna zaštita','Uzglavlje sa ušima','Fioka / sanduk za odlaganje','Džepovi za odlaganje']},
 {id:'sto',name:'Trpezarijski sto',ico:'🍽️',img:'n09',dims:['140 × 90 cm','160 × 100 cm','Ø90 cm','Ø100 cm'],mat:'finish',mattress:false,extras:['Dodatak za produženje','Klub sto','Stolice KEDER'],custLabels:['Dužina (cm)','Širina (cm)']},
 {id:'ormar',name:'Ormar',ico:'🚪',img:'v-orman1',dims:['240 × 200 cm'],mat:'finish',pal:WOOD8,mattress:false,opt:{label:'Materijal i vrata',list:['Iverica · krilna vrata','Iverica · klizna vrata','Medijapan · krilna vrata','Medijapan · klizna vrata']},extras:['Ogledalo','Fioke','Dodatne police'],custLabels:['Širina (cm)','Visina (cm)'],gratis:true},
 {id:'kuhinja',name:'Kuhinja',ico:'🍳',img:'v-kuh1',dims:['2 m'],mat:'finish',pal:KUHALL,mattress:false,opt:{label:'Materijal',list:['Medijapan','Iverica']},extras:['Vitrina sa staklom','Lučni frontovi'],custLabels:['Dužina (cm)',''],gratis:true},
 {id:'komoda',name:'Komoda',ico:'🗄️',img:'v-komoda',dims:[],mat:'finish',mattress:false,extras:['3D frontovi','Zlatne ručke'],custLabels:['Širina (cm)','Visina (cm)'],gratis:true}
];
var FAB=[['Krem bukle','#efe7d8'],['Moss zelena','#5f7142'],['Puder roze','#d9a3ad'],['Flamingo roze','#e98aa6'],['Taupe bež','#b5a391'],['Plava','#5a7896'],['Antracit siva','#45484c'],['Bordo','#7a2a33']];
var FIN=[['Bela','#f6f4ef'],['Beli visoki sjaj','#ffffff'],['Dezen drveta','#b08a62'],['Siva','#9a9a96'],['Antracit','#45484c'],['Po dogovoru','linear-gradient(135deg,#f3cba8,#d9c8e6,#cfe1ef)']];
var MAT=['Dušek od sunđera','Žičano jezgro','Džepasto jezgro','Memorijska pena sa gornje strane','Bez dušeka'];

/* ---------- inquiry state (needed before first render) ---------- */
var KEY='endizajn-upit-v1',items=[];
try{items=JSON.parse(localStorage.getItem(KEY)||'[]')||[]}catch(e){items=[]}
if(!Array.isArray(items))items=[];

/* ---------- helpers ---------- */
function $(s,c){return (c||document).querySelector(s)}
function isOn(el){return el.classList.contains('on')}
function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function eur(n,c){return n.toLocaleString('sr-RS')+(c?' '+c:' €')}
function priceLabel(p){return p.price?((p.from?'od ':'')+eur(p.price,p.cur)+(p.sold?' (prodat komad sa lagera)':'')):'Cena na upit'}
function priceHTML(p){
  if(!p.price) return '<span class="p-ask">Cena na upit</span>';
  return (p.from?'<span class="p-from">od</span>':'')+'<span class="p-amount">'+eur(p.price,p.cur)+'</span>'+(p.old?'<s>'+eur(p.old)+'</s>':'');
}
var toastT;function toast(msg){var t=$('#toast');t.textContent=msg;t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(function(){t.classList.remove('on')},2600)}

/* static images + video */
$$('img[data-img]').forEach(function(im){im.src=IMG(im.dataset.img,im.hasAttribute('data-sm'))});
(function(){var v=$('#heroVideo');
  v.setAttribute('poster',IMG(mobile?'hero-poster-mobile':'hero-poster'));
  var s=document.createElement('source');
  s.src=window.__VID?window.__VID:(mobile?'assets/video/hero-mobile.mp4':'assets/video/hero-1920.mp4');s.type='video/mp4';v.appendChild(s);
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){v.removeAttribute('autoplay');v.pause();}
  var pr=v.play&&v.play();if(pr&&pr.catch)pr.catch(function(){});
})();

/* ---------- products ---------- */
var curCat='sve',prodWrap=$('#products');
var showAll=false,LIMIT=mobile?6:12;
function renderProducts(){
  var all=curCat==='sve'?MIX:P.filter(function(p){return p.cat===curCat});
  var list=showAll?all:all.slice(0,LIMIT),rest=all.length-list.length;
  var mb=$('#moreBtn');mb.hidden=rest<=0;mb.querySelector('b').textContent=rest;
  prodWrap.innerHTML=list.map(function(p){
    return '<article class="prod'+(p.placeholder?' is-ph':'')+'" data-id="'+p.id+'">'+
      '<button type="button" class="prod-img" data-product="'+p.id+'" aria-label="Detalji: '+esc(p.name)+'"><img src="'+IMG(p.thumb||p.imgs[0],true)+'" alt="'+esc(p.name)+'" loading="lazy">'+
      (p.sold?'<span class="ptag sold">Prodato</span>':(p.placeholder?'<span class="ptag ph">Ilustracija</span>':(p.tag?'<span class="ptag">'+esc(p.tag)+'</span>':'')))+
      (p.imgs.length>1?'<span class="pcount">'+p.imgs.length+' foto</span>':'')+'</button>'+
      '<div class="prod-body"><span class="prod-cat">'+CATS[p.cat]+'</span><h3>'+esc(p.name)+'</h3><p>'+esc(p.sub)+(p.dims?' · '+esc(p.dims):'')+'</p>'+
      '<div class="prod-foot"><div class="prod-price">'+priceHTML(p)+'</div>'+
      '<div class="prod-btns"><button type="button" class="btn btn-ghost btn-sm" data-product="'+p.id+'">Detalji</button>'+
      '<button type="button" class="btn btn-moss btn-sm add-btn" data-add="'+p.id+'">Dodaj na upit <b>+</b></button></div></div></div></article>';
  }).join('');
  refreshAddButtons();
}
function setCat(c){
  curCat=c;showAll=false;$$('#tabs .tab').forEach(function(t){t.setAttribute('aria-selected',t.dataset.cat===c)});
  prodWrap.classList.remove('swap');void prodWrap.offsetWidth;prodWrap.classList.add('swap');
  renderProducts();
}
$$('[data-cat-count]').forEach(function(el){var c=el.dataset.catCount;el.textContent=P.filter(function(p){return c==='sve'||p.cat===c}).length});
$('#tabs').addEventListener('click',function(e){var t=e.target.closest('.tab');if(t)setCat(t.dataset.cat)});
document.addEventListener('click',function(e){var g=e.target.closest('[data-goto-cat]');if(!g)return;setCat(g.dataset.gotoCat);scrollToId('cene');});
document.addEventListener('click',function(e){var g=e.target.closest('[data-goto-type]');if(!g)return;e.preventDefault();setType(g.dataset.gotoType);scrollToId('po-meri');});
$('#moreBtn').addEventListener('click',function(){showAll=true;renderProducts();toast('Prikazani su svi modeli')});
renderProducts();

/* ---------- inquiry store ---------- */
function save(){try{localStorage.setItem(KEY,JSON.stringify(items))}catch(e){} renderUpit();}
function inUpit(id){return items.some(function(i){return i.pid===id})}
function addProduct(id){
  var p=byId[id];if(!p)return;
  if(inUpit(id)){toast('„'+p.name+'“ je već na listi upita');pulse();return;}
  items.push({uid:'p'+Date.now(),pid:id,title:p.name+' — '+p.sub,details:(p.dims?p.dims+' · ':'')+CATS[p.cat],price:priceLabel(p),img:p.thumb||p.imgs[0]});
  save();toast('✓ „'+p.name+'“ dodato na upit');pulse();
}
function removeItem(uid){items=items.filter(function(i){return i.uid!==uid});save();}
function pulse(){$$('[data-count]').forEach(function(b){b.classList.remove('bump');void b.offsetWidth;b.classList.add('bump')})}
function refreshAddButtons(){
  $$('[data-add]').forEach(function(b){var on=inUpit(b.dataset.add);b.classList.toggle('added',on);b.innerHTML=on?'Na upitu ✓':'Dodaj na upit <b>+</b>'});
  var pm=$('#pmAdd');if(pm&&pm.dataset.id){var on=inUpit(pm.dataset.id);pm.classList.toggle('added',on);pm.innerHTML=on?'Na upitu ✓ — otvori listu':'Dodaj na upit <b>+</b>'}
}
function renderUpit(){
  var n=items.length;
  $$('[data-count]').forEach(function(b){b.textContent=n;b.classList.toggle('zero',!n)});
  $$('[data-count-text]').forEach(function(b){b.textContent=n?'('+n+')':''});
  var w=$('#drItems');
  w.innerHTML=n?items.map(function(i){return '<div class="dr-item"><img src="'+IMG(i.img,true)+'" alt=""><div><b>'+esc(i.title)+'</b><small>'+esc(i.details)+'</small><span>'+esc(i.price)+'</span></div><button type="button" class="rm" data-rm="'+i.uid+'" aria-label="Ukloni '+esc(i.title)+'">×</button></div>'}).join('')
   :'<div class="dr-empty"><p>Lista upita je prazna.</p><a href="#cene" class="btn btn-ghost btn-sm" data-close-upit>Pogledajte modele</a> <a href="#po-meri" class="btn btn-ghost btn-sm" data-close-upit>Kreirajte po meri</a></div>';
  refreshAddButtons();
}
document.addEventListener('click',function(e){
  var a=e.target.closest('[data-add]');if(a){e.preventDefault();if(inUpit(a.dataset.add)&&a.id==='pmAdd'){closeModal();openUpit();return;}addProduct(a.dataset.add);return;}
  var r=e.target.closest('[data-rm]');if(r){removeItem(r.dataset.rm);toast('Stavka uklonjena sa liste');}
});

/* ---------- drawer ---------- */
var dw=$('#drawerWrap'),lastFocus;
function openUpit(){lastFocus=document.activeElement;dw.hidden=false;requestAnimationFrame(function(){dw.classList.add('on')});document.body.classList.add('lock');setTimeout(function(){$('#drawer .x-btn').focus()},50)}
function closeUpit(restore){if(!dw.classList.contains('on'))return;dw.classList.remove('on');document.body.classList.remove('lock');setTimeout(function(){dw.hidden=true},350);if(restore!==false&&lastFocus&&lastFocus.focus){try{lastFocus.focus({preventScroll:true})}catch(e){}}}
document.addEventListener('click',function(e){
  if(e.target.closest('[data-open-upit]')){e.preventDefault();openUpit();return;}
  var c=e.target.closest('[data-close-upit]');if(c){closeUpit(!c.matches('a[href^="#"]'));}
});
function buildMsg(){
  var L=['Pozdrav EN-DIZAJN! ✨ Zanima me sledeće:',''];
  if(items.length){items.forEach(function(i,k){L.push((k+1)+'. '+i.title);if(i.details)L.push('   – '+i.details);L.push('   – Cena: '+i.price)})}
  else L.push('- Želim konsultaciju oko izrade nameštaja po meri.');
  L.push('');
  L.push('Ime: '+$('#fIme').value.trim());L.push('Telefon: '+$('#fTel').value.trim());L.push('Grad: '+$('#fGrad').value.trim());
  var m=$('#fPoruka').value.trim();if(m)L.push('Poruka: '+m);
  return L.join('\n');
}
function copySync(t){
  var ta=document.createElement('textarea');ta.value=t;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.top='0';ta.style.opacity='0';ta.style.fontSize='16px';
  document.body.appendChild(ta);ta.focus();ta.select();try{ta.setSelectionRange(0,t.length)}catch(e){}
  var ok=false;try{ok=document.execCommand('copy')}catch(e){}document.body.removeChild(ta);return ok;
}
function validate(){
  var bad=[];[['#fIme','ime'],['#fTel','telefon'],['#fGrad','grad']].forEach(function(f){var el=$(f[0]);var ok=el.value.trim().length>1;el.classList.toggle('invalid',!ok);if(!ok)bad.push(f[1])});
  var er=$('#formErr');if(bad.length){er.textContent='Molimo popunite: '+bad.join(', ')+'.';er.hidden=false;var first=$('.dr-form .invalid');if(first)first.focus();return false}er.hidden=true;return true;
}
function showCopied(ok,msg){
  $('#msgPreview').textContent=msg;$('#copiedNote').hidden=false;
  $('#copiedNote b').textContent=ok?'✓ Poruka je kopirana, nalepite je u DM.':'Kopirajte poruku ispod i nalepite je u DM.';
  toast(ok?'✓ Poruka je kopirana, nalepite je u DM':'Kopirajte poruku ručno iz polja ispod');
}
function doCopy(openDm){
  if(!validate())return;
  var msg=buildMsg();
  var ok=copySync(msg);                       // synchronous, inside the click gesture
  showCopied(ok,msg);
  if(!ok&&navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(msg).then(function(){showCopied(true,msg)},function(){})}
  if(openDm){var w=window.open(IG_DM,'_blank','noopener');if(!w){/* popup blocked: link in note stays available */}}
}
$('#upitForm').addEventListener('submit',function(e){e.preventDefault();doCopy(true)});
$('#copyOnly').addEventListener('click',function(){doCopy(false)});
['#fIme','#fTel','#fGrad','#fPoruka'].forEach(function(s){var el=$(s);try{el.value=localStorage.getItem('endizajn-'+s.slice(2))||''}catch(e){}el.addEventListener('input',function(){el.classList.remove('invalid');try{localStorage.setItem('endizajn-'+s.slice(2),el.value)}catch(e){}})});
renderUpit();

/* ---------- product modal ---------- */
var pm=$('#pModal');
function openModal(id){
  var p=byId[id];if(!p)return;
  $('#pmCat').textContent=CATS[p.cat]+(p.sold?' · Prodato':'');
  $('#pmTitle').textContent=p.name;
  $('#pmPrice').innerHTML=priceHTML(p)+(p.sold?'<small>Cena prodatog komada sa lagera. Izrada po meri — cena na upit.</small>':p.from?'<small>Početna cena iz naše objave; konačna cena zavisi od dimenzije, štofa i modela.</small>':'<small>Cenu šaljemo na upit, prema izabranom materijalu i dimenzijama.</small>');
  $('#pmDesc').textContent=p.desc;
  $('#pmFeat').innerHTML=p.feat.map(function(f){return '<li>'+esc(f)+'</li>'}).join('');
  var main=$('#pmImg');main.src=IMG(p.imgs[0]);main.alt=p.name;
  $('#pmThumbs').innerHTML=p.imgs.length>1?p.imgs.map(function(k,i){return '<button type="button" class="'+(i?'':'on')+'" data-thumb="'+k+'" aria-label="Fotografija '+(i+1)+'"><img src="'+IMG(k,true)+'" alt=""></button>'}).join(''):'';
  var sw=$('#pmSw');sw.hidden=!p.colors;
  sw.innerHTML=p.colors?'<span>Boje i dezeni iz objave</span><div>'+p.colors.map(function(c){return '<i title="'+c[0]+'"><b style="background:'+c[1]+'"></b>'+c[0]+'</i>'}).join('')+'</div>':'';
  var add=$('#pmAdd');add.dataset.id=id;add.setAttribute('data-add',id);
  var bt={garniture:/ugaona/.test(p.id)?'ugaona':'garnitura',kreveti:'krevet',deciji:'deciji',stolovi:'sto',ormari:'ormar',kuhinje:'kuhinja',komode:'komoda'}[p.cat];
  $('#pmCustom').dataset.type=bt;
  refreshAddButtons();
  pm.hidden=false;requestAnimationFrame(function(){pm.classList.add('on')});document.body.classList.add('lock');
}
function closeModal(){pm.classList.remove('on');if(!isOn(dw))document.body.classList.remove('lock');setTimeout(function(){pm.hidden=true},300)}
$('#pmThumbs').addEventListener('click',function(e){var b=e.target.closest('[data-thumb]');if(!b)return;$('#pmImg').src=IMG(b.dataset.thumb);$$('#pmThumbs button').forEach(function(x){x.classList.toggle('on',x===b)})});
pm.addEventListener('click',function(e){if(e.target===pm||e.target.closest('[data-close-modal]'))closeModal()});
$('#pmCustom').addEventListener('click',function(e){e.preventDefault();closeModal();setType(this.dataset.type);scrollToId('po-meri')});
document.addEventListener('click',function(e){var b=e.target.closest('[data-product]');if(b&&!e.target.closest('[data-add]')){e.preventDefault();openModal(b.dataset.product)}});

/* ---------- builder ---------- */
var B={type:'garnitura',dim:null,fabric:FAB[0],finish:FIN[0],mattress:MAT[0],extras:[]};
function curT(){return BT.filter(function(t){return t.id===B.type})[0]}
function pal(t){return t.pal||(t.mat==='finish'?FIN:FAB)}
function curMat(t){return t.mat==='finish'?B.finish:B.fabric}
function setType(id){B.type=id;var t=curT();B.dim=t.dims.length?t.dims[0]:'Po meri';B.extras=[];var o=optOf(t);B.mattress=o?o.list[0]:MAT[0];renderBuilder()}
function optOf(t){return t.opt||(t.mattress?{label:'Dušek',list:MAT}:null)}
function renderBuilder(){
  var t=curT();if(t.mat==='finish'&&pal(t).indexOf(B.finish)<0)B.finish=pal(t)[0];var m=curMat(t),n=3,o=optOf(t);
  $('#bType').innerHTML=BT.map(function(x){return '<button type="button" class="opt'+(x.id===B.type?' on':'')+'" data-bt="'+x.id+'" aria-pressed="'+(x.id===B.type)+'"><i>'+x.ico+'</i>'+x.name+'</button>'}).join('');
  $('#bDims').innerHTML=t.dims.concat(['Po meri']).map(function(d){return '<button type="button" class="pill'+(d===B.dim?' on':'')+'" data-bd="'+esc(d)+'" aria-pressed="'+(d===B.dim)+'">'+d+'</button>'}).join('');
  $('#bCustom').hidden=B.dim!=='Po meri';
  var lb=t.custLabels||['Širina (cm)','Dužina (cm)'];$('#bWl').firstChild.nodeValue=lb[0];$('#bLl').hidden=!lb[1];$('#bXsep').hidden=!lb[1];if(lb[1])$('#bLl').firstChild.nodeValue=lb[1];
  $('#bDl').hidden=t.id!=='ormar';$('#bDsep').hidden=t.id!=='ormar';
  $('#bMatLabel').textContent=t.mat==='finish'?'Boja i dezen':'Štof i boja';
  $('#bHint').textContent=t.mat==='finish'?'Boju, dezen i završnu obradu dogovaramo zajedno uz uzorke.':'Nijanse su okvirne — tačan štof i boju biramo zajedno uz uzorke.';
  $('#bFabrics').innerHTML=pal(t).map(function(f){var on=f[0]===m[0];return '<button type="button" class="sw'+(on?' on':'')+'" data-bf="'+f[0]+'" aria-pressed="'+on+'" title="'+f[0]+'"><i style="background:'+f[1]+'"></i><span>'+f[0]+'</span></button>'}).join('');
  $('#bFabricName').textContent='· '+m[0];
  $('#bMattressStep').hidden=!o;if(o){n++;$('#bOptLabel').textContent=o.label}
  $('#bMattressNum').textContent=n;
  $('#bExtrasWrap').hidden=!t.extras.length;$('#bExtrasNum').textContent=n+1;
  $('#bMattress').innerHTML=(o?o.list:[]).map(function(x){return '<button type="button" class="pill'+(x===B.mattress?' on':'')+'" data-bm="'+x+'" aria-pressed="'+(x===B.mattress)+'">'+x+'</button>'}).join('');
  $('#bExtras').innerHTML=t.extras.map(function(x){var on=B.extras.indexOf(x)>-1;return '<button type="button" class="pill check'+(on?' on':'')+'" data-bx="'+x+'" aria-pressed="'+on+'">'+(on?'✓ ':'+ ')+x+'</button>'}).join('');
  var img=$('#bPreviewImg');var src=IMG(t.img);if(img.getAttribute('src')!==src){img.classList.remove('fade');void img.offsetWidth;img.classList.add('fade');img.src=src}
  $('#bPreviewNote').hidden=!t.ph;
  $('#bPreviewDot').style.background=m[1];$('#bPreviewFabric').textContent=m[0];
  $('#bTitle').textContent=t.name+' po meri';
  var rows=[['Vrsta',t.name],['Dimenzije',dimText()],[t.mat==='finish'?'Boja / dezen':'Štof i boja',m[0]]];
  if(o)rows.push([o.label,B.mattress]);
  if(t.extras.length)rows.push(['Dodaci',B.extras.length?B.extras.join(', '):'Bez dodataka']);
  if(t.gratis)rows.push(['Montaža','Gratis']);
  $('#bSpec').innerHTML=rows.map(function(r){return '<div><dt>'+r[0]+'</dt><dd>'+esc(r[1])+'</dd></div>'}).join('');
}
function dimText(){if(B.dim!=='Po meri')return B.dim;var t=curT(),w=$('#bW').value,l=$('#bL').value,d=$('#bD').value;
  if(t.id==='kuhinja')return w?('Dužina '+w+' cm (po meri)'):'Po meri (pošaljite mere prostora)';
  if(t.id==='ormar'||t.id==='komoda')return (w&&l)?('Š '+w+' × V '+l+(d?' × D '+d:'')+' cm'):'Po meri (pošaljite mere prostora)';
  return (w&&l)?(w+' × '+l+' cm (po meri)'):'Po meri (mere dogovaramo)'}
$('.builder').addEventListener('click',function(e){
  var b,t=curT();
  if(b=e.target.closest('[data-bt]'))setType(b.dataset.bt);
  else if(b=e.target.closest('[data-bd]')){B.dim=b.dataset.bd;renderBuilder();if(B.dim==='Po meri')$('#bW').focus()}
  else if(b=e.target.closest('[data-bf]')){var f=pal(t).filter(function(x){return x[0]===b.dataset.bf})[0];if(t.mat==='finish')B.finish=f;else B.fabric=f;renderBuilder()}
  else if(b=e.target.closest('[data-bm]')){B.mattress=b.dataset.bm;renderBuilder()}
  else if(b=e.target.closest('[data-bx]')){var x=b.dataset.bx,i=B.extras.indexOf(x);if(i>-1)B.extras.splice(i,1);else B.extras.push(x);renderBuilder()}
});
['#bW','#bL','#bD'].forEach(function(s){$(s).addEventListener('input',renderBuilder)});
$('#bAdd').addEventListener('click',function(){
  var t=curT(),m=curMat(t);var d=[dimText(),(t.mat==='finish'?'Boja/dezen: ':'Štof: ')+m[0]];if(optOf(t))d.push(B.mattress);if(t.gratis)d.push('Montaža gratis');if(B.extras.length)d.push('Dodaci: '+B.extras.join(', '));
  var note=$('#bNote').value.trim();if(note)d.push('Napomena: '+note);
  items.push({uid:'c'+Date.now(),pid:null,title:t.name+' po meri',details:d.join(' · '),price:'Cena na upit',img:t.img});
  save();pulse();toast('✓ Konfiguracija dodata na upit');openUpit();
});
setType(B.type);

/* ---------- gallery + lightbox ---------- */
var AR={p04:'3/2',p06:'1143/1376',p08:'1312/1198',p10:'3/4',n07:'9/16',n09:'9/16',n10:'9/16'};
var gal=$('#gallery');
gal.innerHTML=G.map(function(g,i){return '<button type="button" class="g-item reveal" data-i="'+i+'" aria-label="Uvećaj: '+esc(g[1])+'"><img src="'+IMG(/^v-/.test(g[0])?g[0]+'_c':g[0],true)+'" alt="'+esc(g[1])+'" loading="lazy"><span>'+esc(g[1])+'</span></button>'}).join('');
var lb=$('#lightbox'),lbImg=$('#lbImg'),cur=0;
function show(i){cur=(i+G.length)%G.length;lbImg.src=IMG(G[cur][0]);lbImg.alt=G[cur][1];$('#lbCap').textContent=G[cur][1];
  var on=inUpit(G[cur][2]);$('#lbAdd').textContent=on?'Na upitu ✓':'Dodaj na upit +';}
function openLb(i){show(i);lb.hidden=false;requestAnimationFrame(function(){lb.classList.add('on')});document.body.classList.add('lock')}
function closeLb(){lb.classList.remove('on');if(!isOn(dw)&&!isOn(pm))document.body.classList.remove('lock');setTimeout(function(){lb.hidden=true},300)}
gal.addEventListener('click',function(e){var b=e.target.closest('.g-item');if(b)openLb(+b.dataset.i)});
$('.lb-close',lb).onclick=closeLb;$('.lb-prev',lb).onclick=function(){show(cur-1)};$('.lb-next',lb).onclick=function(){show(cur+1)};
$('#lbAdd').onclick=function(){addProduct(G[cur][2]);show(cur)};
$('#lbDetails').onclick=function(){var id=G[cur][2];closeLb();openModal(id)};
lb.addEventListener('click',function(e){if(e.target===lb)closeLb()});
var tx=null;lb.addEventListener('touchstart',function(e){tx=e.touches[0].clientX},{passive:true});
lb.addEventListener('touchend',function(e){if(tx===null)return;var dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>50)show(cur+(dx<0?1:-1));tx=null});
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){if(isOn(lb))closeLb();else if(isOn(pm))closeModal();else if(isOn(dw))closeUpit();else if(nav.classList.contains('open'))toggleMenu(false)}
  if(isOn(lb)){if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)}
});

$$('.g-item',gal).forEach(function(b,i){b.style.transitionDelay=(i%4)*70+'ms'});

/* ---------- headline word reveal ---------- */
function splitWords(el){
  el.setAttribute('aria-label',el.textContent.replace(/\s+/g,' ').trim());
  var n=0;
  (function walk(node){
    Array.prototype.slice.call(node.childNodes).forEach(function(c){
      if(c.nodeType===3){
        var frag=document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(function(part){
          if(!part)return;
          if(/^\s+$/.test(part)){frag.appendChild(document.createTextNode(' '));return}
          var w=document.createElement('span'),s=document.createElement('span');
          w.className='w';w.setAttribute('aria-hidden','true');s.textContent=part;s.style.setProperty('--i',n++);
          w.appendChild(s);frag.appendChild(w);
        });
        node.replaceChild(frag,c);
      } else if(c.nodeType===1&&c.tagName!=='BR')walk(c);
    });
  })(el);
  el.classList.add('reveal','split');
}
$$('.hero h1, .section-head h2, .about-text h2, .cta h2, .st-title').forEach(splitWords);

/* ---------- reveal ---------- */
var els=$$('.reveal');
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -30px 0px'});
  els.forEach(function(el){io.observe(el)});
} else els.forEach(function(el){el.classList.add('in')});

/* ---------- nav: smooth scroll with offset, active link, menu ---------- */
var nav=$('#nav'),burger=$('#burger');
function navH(){return nav.getBoundingClientRect().bottom+12}
function targetY(el,id){return id==='top'?0:Math.max(0,el.getBoundingClientRect().top+window.pageYOffset-navH()+(el.classList.contains('section')?40:0))}
var scrollJob=0;
function scrollToId(id){var el=document.getElementById(id);if(!el)return;
  var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches,job=++scrollJob,tries=0;
  window.scrollTo({top:targetY(el,id),behavior:rm?'auto':'smooth'});
  if(history.replaceState)history.replaceState(null,'','#'+id);
  // re-check once scrolling settles (late image decode / layout shifts can move the target)
  var last=-1,still=0,t0=Date.now();
  (function check(){ if(job!==scrollJob)return;
    var y=window.pageYOffset; if(Math.abs(y-last)<1)still++;else still=0; last=y;
    if(still>=4){var ty=targetY(el,id);var maxY=document.documentElement.scrollHeight-window.innerHeight;
      if(Math.abs(y-Math.min(ty,maxY))>6&&tries++<3){window.scrollTo({top:ty,behavior:rm?'auto':'smooth'});still=0}else return;}
    if(Date.now()-t0<6000)setTimeout(check,80);
  })();
}
window.addEventListener('wheel',function(){scrollJob++},{passive:true});
window.addEventListener('touchstart',function(){scrollJob++},{passive:true});
function toggleMenu(o){nav.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Zatvori meni':'Otvori meni')}
burger.addEventListener('click',function(){toggleMenu(!nav.classList.contains('open'))});
document.addEventListener('click',function(e){
  var a=e.target.closest('a[href^="#"]');if(!a)return;var id=a.getAttribute('href').slice(1);if(!id)return;
  e.preventDefault();toggleMenu(false);
  if(isOn(pm))closeModal();if(isOn(lb))closeLb();closeUpit(false);
  scrollToId(id);
});
var links=$$('[data-nav]'),secIds=links.map(function(a){return a.getAttribute('href').slice(1)});
function onScroll(){
  var y=window.pageYOffset;nav.classList.toggle('scrolled',y>40);
  var heroH=$('.hero').offsetHeight;document.body.classList.toggle('past-hero',y>heroH*0.6);
  var mid=y+window.innerHeight*0.35,act=null;
  secIds.forEach(function(id){var s=document.getElementById(id);if(s&&s.offsetTop<=mid)act=id});
  if(y<heroH*0.5)act=null;
  links.forEach(function(a){var on=a.getAttribute('href')==='#'+act;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')});
}
window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);onScroll();
if(location.hash&&location.hash.length>1){setTimeout(function(){scrollToId(location.hash.slice(1))},300)}

/* ---------- FAQ accordion (one open at a time) ---------- */
$('#faqList').addEventListener('click',function(e){
  var q=e.target.closest('.faq-q');if(!q)return;
  var it=q.closest('.faq-item'),open=!it.classList.contains('is-open');
  $$('.faq-item',this).forEach(function(x){x.classList.remove('is-open');$('.faq-q',x).setAttribute('aria-expanded','false')});
  if(open){it.classList.add('is-open');q.setAttribute('aria-expanded','true')}
});

/* ---------- count-up ---------- */
var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function clamp(v,a,b){return v<a?a:v>b?b:v}
(function(){
  var el=$('.about-note strong');if(!el||RM||!('IntersectionObserver' in window))return;
  var target=parseInt(el.textContent.replace(/\D/g,''),10),suffix=el.textContent.replace(/[\d.\s]/g,'');
  el.textContent='0'+suffix;
  var cio=new IntersectionObserver(function(es){
    if(!es[0].isIntersecting)return;cio.disconnect();var t0=performance.now();
    (function tick(now){var k=clamp((now-t0)/1800,0,1),v=Math.round(target*(1-Math.pow(1-k,3)));
      el.textContent=v.toLocaleString('sr-RS')+suffix;if(k<1)requestAnimationFrame(tick)})(t0);
  },{threshold:.6});
  cio.observe(el);
})();

/* ---------- scroll-driven motion ---------- */
var hero=$('.hero'),heroVid=$('#heroVideo'),heroCt=$('.hero-content'),prog=$('#progress');
var st=$('#izrada'),stMedia=$('.st-media',st),stCopy=$('.st-copy',st),stTitle=$('.st-title',st),stDot=$('.st-dot',st);
var story=$('#story'),sRows=$$('.story-row',story),sPlates=$$('.story-plate',story),sLine=$('.story-line i',story),sStage=$('.story-stage',story),sTag=$('#storyTag'),sNum=$('#storyNum');
var pebble=$('.pebble'),faqSec=$('#pitanja'),faqBg=$('.faq-bg'),cta=$('.cta'),ctaBg=$('.cta-bg');
var stackMq=window.matchMedia('(max-width:900px)'),smallMq=window.matchMedia('(max-width:760px)');
var curRow=0,ticking=false;
function easeInOut(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
function setRow(i){
  if(i===curRow)return;var prev=curRow;curRow=i;
  sRows.forEach(function(r,k){r.classList.toggle('is-on',k===i)});
  sPlates.forEach(function(p,k){p.classList.toggle('was-on',k===prev);p.classList.toggle('is-on',k===i)});
  sTag.textContent=sRows[i].dataset.tag;sNum.textContent=('0'+(i+1)).slice(-2);
  [sTag,sNum.parentNode].forEach(function(x){x.classList.remove('swap');void x.offsetWidth;x.classList.add('swap')});
}
function inView(r,vh){return r.bottom>0&&r.top<vh}
function frame(){
  ticking=false;
  var vh=window.innerHeight,y=window.pageYOffset,max=document.documentElement.scrollHeight-vh;
  prog.style.transform='scaleX('+(max>0?clamp(y/max,0,1):0)+')';

  // featured models story: the row crossing the trigger line becomes active
  var sr=story.getBoundingClientRect();
  if(sr.bottom>-vh&&sr.top<vh*2){
    var trig=vh*.5;
    if(stackMq.matches){var sb=sStage.getBoundingClientRect().bottom;trig=sb+(vh-sb)*.45}
    var act=0;sRows.forEach(function(r,k){if(r.getBoundingClientRect().top<trig)act=k});
    setRow(act);
    var lr=sRows[0].parentNode.getBoundingClientRect();
    sLine.style.transform='scaleY('+clamp((trig-lr.top)/lr.height,0,1)+')';
  }
  if(RM)return;

  // hero: video drifts slower than the page, copy lifts and fades
  var hh=hero.offsetHeight;
  if(y<hh){var hp=y/hh;
    heroVid.style.transform='translate3d(0,'+(y*.35)+'px,0) scale('+(1+hp*.08)+')';
    heroCt.style.transform='translate3d(0,'+(-hp*90)+'px,0)';heroCt.style.opacity=clamp(1-hp*1.4,0,1);
  }

  // statement: rotated card straightens and grows to full screen
  var r=st.getBoundingClientRect();
  if(inView(r,vh)){
    var total=st.offsetHeight-vh,p=clamp(-r.top/total,0,1),t=easeInOut(clamp(p/.78,0,1));
    var small=smallMq.matches,s0=small?.6:.36,rot=small?12:24,tx=small?0:-4,ty=small?4:3;
    var sc=s0+(1-s0)*t;
    stMedia.style.transform='translate3d('+(tx*(1-t))+'vw,'+(ty*(1-t))+'vh,0) rotate('+(rot*(1-t))+'deg) scale('+sc+')';
    stMedia.style.borderRadius=(28*(1-t)/sc)+'px';
    stMedia.style.setProperty('--isc',(1.18-.18*t).toFixed(4));
    stMedia.style.setProperty('--cap',clamp((p-.8)/.14,0,1).toFixed(3));
    var fade=clamp(1-(t-.12)/.3,0,1);
    stTitle.style.opacity=fade;stCopy.style.opacity=fade;stDot.style.opacity=fade;
    stTitle.style.transform='translate3d(0,'+(-(1-fade)*40)+'px,0)';
  }

  // about pebble + FAQ / CTA backgrounds: gentle parallax
  var ar=pebble.getBoundingClientRect();
  if(inView(ar,vh))pebble.style.translate='0 '+(((ar.top+ar.height/2)/vh-.5)*-70).toFixed(1)+'px';
  var fr=faqSec.getBoundingClientRect();
  if(inView(fr,vh))faqBg.style.transform='translate3d(0,'+(((fr.top+fr.height/2-vh/2)/(vh+fr.height))*16).toFixed(2)+'%,0)';
  var cr=cta.getBoundingClientRect();
  if(inView(cr,vh))ctaBg.style.transform='translate3d(0,'+(((cr.top+cr.height/2-vh/2)/(vh+cr.height))*14).toFixed(2)+'%,0)';
}
function requestFrame(){if(!ticking){ticking=true;requestAnimationFrame(frame)}}
window.addEventListener('scroll',requestFrame,{passive:true});
window.addEventListener('resize',requestFrame);
frame();

$('#year').textContent=new Date().getFullYear();
window.__ENDZ={items:function(){return items},buildMsg:buildMsg};
})();
