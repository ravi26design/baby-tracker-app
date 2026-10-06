/* Checklist data — curated from the "New Mum's Ultimate Guide" */
var STAGES=['0–3m','3–6m','6–9m','9–12m','12–18m','18–24m','24–36m'];

/* brand recommendations: [icon, tile, Premium pick, Budget pick] */
var BRANDS={
 diapers:['🧷','#e7d9ff','Allter','Huggies'], bodywash:['🧴','#ffd9e2','Aveeno','Mother Sparsh'], lotion:['🧴','#ffe6c8','Aveeno','Mother Sparsh'],
 shampoo:['🧴','#d5e6ff','Aveeno','Mother Sparsh'], rashcream:['🧴','#d6f3e0','Sudocrem','Chicco'], wipes:['🧻','#d5e6ff','Omumsie','Mee Mee'],
 hairoil:['💧','#ffe6c8','Baby Forest','Mother Sparsh'], massageoil:['💆','#ffd9e2','Little Rituals','Mother Sparsh'], swaddle:['🍥','#d6f3e0','Masilo','Haus & Kinder'],
 burpcloth:['🧣','#e7d9ff','Haus & Kinder','Mom Care'], towel:['🧻','#d5e6ff','Snowie Soft','Mee Mee'], raipillow:['🛏️','#ffe6c8','Novo Baby','Snylark'],
 drysheet:['🟦','#d6f3e0','Superbottoms','Luvlap'], bottle:['🍼','#ffe6c8','Philips Avent','Luvlap'], sterilizer:['♨️','#d5e6ff','Philips Avent','Luvlap'],
 feedpillow:['🛏️','#ffd9e2','Kradyl Kroft','Mom & Son'], bottlecleaner:['🧽','#d6f3e0','Adore','SYGA'], bathtub:['🛁','#d5e6ff','Skip Hop','R for Rabbit'],
 bathseat:['🪑','#e7d9ff','Mee Mee','Luvlap'], washcloth:['🧺','#d6f3e0','Mom Care','Luvlap'], detergent:['🧴','#e7d9ff','Windmill','Mee Mee'],
 carseat:['🚗','#ffd9e2','R for Rabbit','Luvlap'], stroller:['🛒','#e7d9ff','Joie','Luvlap'], carrier:['👶','#ffe6c8','Joie','R for Rabbit'],
 diaperbag:['🎒','#d5e6ff','R for Rabbit','Motherly'], teether:['🦒','#d6f3e0','Sophie','Luvlap'], woodteether:['🪵','#ffe6c8','Shumee','Natural Toys'],
 bibs:['🦺','#ffd9e2','Nintara','Tidy Sleep'], wbibs:['🦺','#d6f3e0','Snowie Soft','SYGA'], sipper:['🥤','#d6f3e0','Philips Avent','Luvlap'],
 steelsipper:['🥤','#d5e6ff','Skip Hop','Luvlap'], opencup:['🥛','#e7d9ff','Ezpz','Munchkin'], sleepsack:['😴','#d5e6ff','Snowie Soft','Haus & Kinder'],
 vapour:['🌿','#d6f3e0','Baby Organo','Mother Sparsh'], colic:['🌀','#ffe6c8','Mama Earth','Mother Sparsh'], mosquito:['🦟','#d6f3e0','Allter','Odomos'],
 mosnet:['🕸️','#d5e6ff','Lifekrafts','Kolar'], highchair:['🪑','#ffe6c8','Joie','R for Rabbit'], spoons:['🥄','#d6f3e0','Beaba','Luvlap'],
 feedingkit:['🍽️','#e7d9ff','Beaba','Luvlap'], snackbox:['🍱','#ffe6c8','Skip Hop','Mee Mee'], processor:['⚙️','#d5e6ff','Bubsie','Baybee'],
 toothbrush:['🪥','#d6f3e0','Chicco','Colgate'], toothpaste:['🧴','#e7d9ff','Chicco','Colgate'], monitor:['📹','#e7d9ff','Nooie','Tapo'],
 socketcovers:['🔌','#d6f3e0','Sifamo','Protoware'], edgeguards:['🛡️','#ffe6c8','BabySafeHouse','BabyPro'], drawerlock:['🔒','#d5e6ff','KidDough','Kitsch'],
 bedrail:['🚧','#ffd9e2','R for Rabbit','Baybee'], walker:['🚼','#d5e6ff','Fisher Price','Baybee'], antiskid:['🧦','#d6f3e0','Trendy Dukaan','SYGA'],
 kneepad:['🦵','#ffe6c8','BabySafeHouse','Epeskey'], doorstop:['🚪','#e7d9ff','LivYu','SYGA'], sunscreen:['🧴','#fff0d0','Aveeno','Little Rituals'],
 handwash:['🧼','#d6f3e0','Windmill','Baby Organo'], pottyseat:['🚽','#d5e6ff','Luvlap','R for Rabbit'], trainpants:['🩲','#e7d9ff','Super Bottoms','Snugkins'],
 swimdiaper:['🩱','#d5e6ff','Pampers','Bambo Nature'], playmat:['🧩','#d6f3e0','Supples','Tarkan'], playpen:['⛺','#ffe6c8','Metreno','Star & Daisy'],
 slide:['🛝','#ffe6c8','Baybee','Solimo'], swing:['🪑','#e7d9ff','Beetot','Shopflux'], shoes:['👟','#d6f3e0','R for Rabbit','Luvlap'], books:['📚','#ffe6c8','Indestructibles','Sassy'],
 toys:['🧸','#e7d9ff','Shumee','Fisher Price'],
 travelstroller:['🛒','#e7d9ff','Joie','Luvlap'], travelcrib:['⛺','#d6f3e0','R for Rabbit','Luvlap'], bottlewarmer:['🍼','#ffe6c8','Philips Avent','Luvlap'],
 portablechair:['🪑','#ffe6c8','hiccapop','Baybee'], beachtent:['⛱️','#d5e6ff','Schylling','Monobeach'], warmsuit:['🧥','#d5e6ff','Columbia','JAN & JUL'],
 earprotect:['🎧','#e7d9ff','Alpine','Baby Banz'], potty:['🚽','#d5e6ff','Luvlap','R for Rabbit']
};
Object.assign(BRANDS,{
 bedrail:['🚧','#ffd9e2','Kids Station','Baybee'], walker:['🚼','#d5e6ff','Fisher Price','Traditional'], feedpillow:['🛏️','#ffd9e2','Kradyl Kroft','Mom and Son'],
 kajal:['👁️','#e7d9ff','Root and Soil','Organic Netra'], facewash:['🧼','#d5e6ff','Maate','SebaMed'], cradlecap:['🧴','#d6f3e0','Dentinox','Mustela'],
 facecream:['🧴','#ffe6c8','SebaMed','Little Rituals'], grooming:['✂️','#e7d9ff','R for Rabbit','Luvlap'], lipbalm:['💄','#ffd9e2','Baby Organo','Ghee / Coconut oil'],
 langoti:['👶','#fff0d0','Superbottoms','Tinchuk'], clothdiaper:['🧷','#d6f3e0','Super Bottoms','Kids Need'], massageoilw:['💆','#ffe6c8','Little Rituals','Nat Habitat'],
 massageoils:['💆','#ffd9e2','Little Rituals','Mother Sparsh'], mosbite:['🦟','#d6f3e0','Mama Earth','Mother Sparsh'], mosspray:['🦟','#d5e6ff','Phool','Mama Earth'],
 mospatch:['🦟','#ffe6c8','Allter','Alokah'], mosfabric:['🦟','#d6f3e0','Chicco','Odomos'], vapourpatch:['🌿','#d5e6ff','Mother Sparsh','Mama Earth'], oralwipes:['🦷','#d5e6ff','Mokoala','Tekme'],
 pacifier:['🍼','#d5e6ff','Philips Avent','R for Rabbit'], glassbottle:['🍼','#d6f3e0','Dr Brown','R for Rabbit'], steelbottle:['🍼','#d5e6ff','Pigeon','Mee Mee'], dispbibs:['🦺','#ffd9e2','Luvlap','The Little Lookers'],
 dishwasher:['🧴','#d5e6ff','Windmill','Himalaya'], toycleaner:['🧴','#e7d9ff','Windmill','Awenest'],
 humidifier:['💨','#d5e6ff','Reffair','Rosekm'], swimdiaperr:['🩱','#d6f3e0','Super Bottoms','Babygoal'],
 cradle:['🛏️','#d5e6ff','Infantso','Supples'], rocker:['🪑','#ffe6c8','Baybee','Infantso'], cot:['🛏️','#e7d9ff','Baby Teddy','Luvlap'], toyorg:['🧺','#d6f3e0','Homesmiths','Kuber'],
 playmat12:['🧩','#ffe6c8','Lil Toes','Solimo'], bedding:['🛏️','#ffd9e2','R for Rabbit','Infantbond'], mattressp:['🟦','#d5e6ff','Wakefit','Gadda'], bottlecover:['🍼','#ffe6c8','Abracadabra','The Little Lookers'],
 dryingstand:['🧺','#d6f3e0','Dr. Brown’s','SYGA'], formuladisp:['🥛','#e7d9ff','R for Rabbit','Mee Mee'], thermometer:['🌡️','#ffd9e2','Dr. Trust','Dr. Vaku'], kettle:['♨️','#d5e6ff','GoodsCity','InstaCuppa'],
 belt:['🎽','#ffd9e2','Doltas','Kossto'], matpads:['🩸','#ffe6c8','Abena','Azah'], stretch:['🧴','#d6f3e0','Bio Oil','Pokonut'], niftycup:['🥛','#e7d9ff','Imafeed','Profiklen'],
 hairfall:['💆','#d5e6ff','Avimee','Root and Soil'], hairgummies:['💊','#ffd9e2','Be Bodywise','Dabur'], matpanty:['🩲','#e7d9ff','Pregawear','Nua'], perispray:['🧴','#d6f3e0','Syga','Docat'],
 peripads:['❄️','#d5e6ff','Tucks','B-Arm'], nursingcover:['🧣','#ffe6c8','Feather Hug','Kowsi'], lactation:['💊','#d6f3e0','Himalaya','Emcure'], nipplecream:['🧴','#ffd9e2','Lansinoh','Nipcare'],
 nippleshield:['🛡️','#d5e6ff','Pigeon','Luvlap'], manualpump:['🍼','#ffe6c8','Philips Avent','Luvlap'], electricpump:['🍼','#e7d9ff','Spectra','Promom'], storagebags:['🧊','#d6f3e0','Lansinoh','Luvlap'],
 breastpads:['⚪','#ffd9e2','Organic Bamboo','Luvlap'], coolerbags:['🧊','#d5e6ff','NCVI','Zibuyu'], therapypack:['🔥','#ffe6c8','Omved','Luvlap'], nursingbra:['👙','#ffd9e2','Marks & Spencer','MomToBe'], milkcaps:['🥛','#d6f3e0','CMbear','Snowie Soft']
});

/* ---- essentials (age-wise) ---- */
var ESS={
 '0–3m':[
  {cat:'Baby care',ic:'🧴',tint:'#ffd9e2',items:[{n:'Diapers',ess:1,shop:'diapers'},{n:'Body wash',shop:'bodywash'},{n:'Lotion',shop:'lotion'},{n:'Baby shampoo',shop:'shampoo'},{n:'Rash cream',ess:1,shop:'rashcream'},{n:'Wet wipes',ess:1,shop:'wipes'},{n:'Baby hair oil',shop:'hairoil'},{n:'Massage oil',shop:'massageoil'}]},
  {cat:'Clothing & sleep',ic:'🌙',tint:'#d5e6ff',items:[{n:'Swaddles',ess:1,shop:'swaddle'},{n:'Burp cloths',ess:1,shop:'burpcloth'},{n:'Muslin towels',shop:'towel'},{n:'Onesies & mittens'},{n:'Rai pillow',shop:'raipillow'},{n:'Dry sheet',shop:'drysheet'}]},
  {cat:'Feeding',ic:'🍼',tint:'#ffe6c8',items:[{n:'Feeding bottles',ess:1,shop:'bottle'},{n:'Bottle sterilizer',shop:'sterilizer'},{n:'Feeding pillow',shop:'feedpillow'},{n:'Bottle cleaner',shop:'bottlecleaner'}]},
  {cat:'Bath & hygiene',ic:'🛁',tint:'#d6f3e0',items:[{n:'Bath tub',shop:'bathtub'},{n:'Bath seat',shop:'bathseat'},{n:'Washcloths',shop:'washcloth'},{n:'Baby laundry detergent',shop:'detergent'}]},
  {cat:'Gear',ic:'🚗',tint:'#fff0d0',items:[{n:'Infant car seat',ess:1,shop:'carseat'},{n:'Stroller',shop:'stroller'},{n:'Baby carrier',shop:'carrier'},{n:'Diaper bag',shop:'diaperbag'}]}
 ],
 '3–6m':[
  {cat:'Feeding',ic:'🍼',tint:'#ffe6c8',items:[{n:'Silicone teether',ess:1,shop:'teether'},{n:'Cotton bibs',shop:'bibs'},{n:'Sipper bottle',shop:'sipper'}]},
  {cat:'Health',ic:'🩺',tint:'#ffd9e2',items:[{n:'Vapour roll-on (cold)',shop:'vapour'},{n:'Tummy roll (colic)',shop:'colic'},{n:'Mosquito patch',shop:'mosquito'}]},
  {cat:'Sleep',ic:'🌙',tint:'#d5e6ff',items:[{n:'Sleep sack',shop:'sleepsack'},{n:'Mosquito net',shop:'mosnet'}]}
 ],
 '6–9m':[
  {cat:'Feeding solids',ic:'🥣',tint:'#ffe6c8',items:[{n:'High chair',ess:1,shop:'highchair'},{n:'Weaning spoons',ess:1,shop:'spoons'},{n:'Feeding kit',shop:'feedingkit'},{n:'Open cup',shop:'opencup'},{n:'Snack box',shop:'snackbox'},{n:'Food processor',shop:'processor'}]},
  {cat:'First tooth',ic:'🦷',tint:'#d5e6ff',items:[{n:'Baby toothbrush',ess:1,shop:'toothbrush'},{n:'Baby toothpaste',shop:'toothpaste'},{n:'Wooden teether',shop:'woodteether'}]},
  {cat:'Safety',ic:'🛡️',tint:'#d6f3e0',items:[{n:'Socket plug covers',ess:1,shop:'socketcovers'},{n:'Edge guards',ess:1,shop:'edgeguards'},{n:'Drawer lockers',shop:'drawerlock'},{n:'Bed railings',shop:'bedrail'},{n:'Baby monitor',shop:'monitor'}]}
 ],
 '9–12m':[
  {cat:'On the move',ic:'🚶',tint:'#d5e6ff',items:[{n:'Baby walker',shop:'walker'},{n:'Anti-skid socks',ess:1,shop:'antiskid'},{n:'Knee protectors',shop:'kneepad'}]},
  {cat:'Feeding',ic:'🥄',tint:'#ffe6c8',items:[{n:'Steel sipper bottle',shop:'steelsipper'},{n:'Waterproof bibs',shop:'wbibs'},{n:'Toddler spoons',shop:'spoons'}]},
  {cat:'Safety',ic:'🛡️',tint:'#d6f3e0',items:[{n:'Door stoppers',shop:'doorstop'},{n:'Baby sunscreen',ess:1,shop:'sunscreen'},{n:'Baby handwash',shop:'handwash'}]}
 ],
 '12–18m':[
  {cat:'Explorer add-ons',ic:'🧭',tint:'#d6f3e0',items:[{n:'Swim diapers',shop:'swimdiaper'},{n:'First walking shoes',ess:1,shop:'shoes'},{n:'Playpen',shop:'playpen'}]},
  {cat:'Potty',ic:'🚽',tint:'#d5e6ff',items:[{n:'Potty training seat',ess:1,shop:'pottyseat'},{n:'Training underwear',shop:'trainpants'}]}
 ],
 '18–24m':[
  {cat:'Clothing',ic:'👟',tint:'#d6f3e0',items:[{n:'Toddler shoes',ess:1,shop:'shoes'},{n:'Sleep sack (bigger)',shop:'sleepsack'}]},
  {cat:'Self-care',ic:'🪥',tint:'#d5e6ff',items:[{n:'Toothbrush & paste',shop:'toothbrush'},{n:'Toddler open cup',shop:'opencup'}]}
 ],
 '24–36m':[
  {cat:'Feeding',ic:'🍽️',tint:'#ffe6c8',items:[{n:'Toddler plate set',shop:'opencup'},{n:'Booster seat',shop:'highchair'}]},
  {cat:'Potty',ic:'🚽',tint:'#d5e6ff',items:[{n:'Training underwear',shop:'trainpants'},{n:'Step stool'}]}
 ]
};

/* ---- toys (age-wise, by education method) ---- */
function _m(mont,reg,wal,play){ function it(a){return a.map(function(n){return {n:n,shop:'toys'};});}
 return [{cat:'Montessori',ic:'🧩',tint:'#e7d9ff',items:it(mont)},{cat:'Reggio Emilia',ic:'🎨',tint:'#ffd9e2',items:it(reg)},{cat:'Waldorf',ic:'🌿',tint:'#d6f3e0',items:it(wal)},{cat:'Play-Based',ic:'🎈',tint:'#fff0d0',items:it(play)}];
}
var TOYS={
 '0–3m':_m(['Black & white mobiles','Soft fabric balls','Wooden grasping toys'],['Soft high-contrast plush toys','Soft fabric rattles','Textured fabric books'],['Hand-knitted wool animals','Natural wood rattles','Woolen mobile'],['Crib mobiles with gentle sounds','Sensory balls (squishy)','Soft plush toys, varied textures']),
 '3–6m':_m(['Simple clutching toys','Simple wooden rattles','Wooden teething rings'],['Sensory balls, varied textures','Simple stacking cups','Fabric books with patterns'],['Natural wooden teething rings','Soft natural fabric toys','Organic cotton play mats'],['Tummy-time play mats (textured)','Interactive fabric books','Soft stacking rings']),
 '6–9m':_m(['Object permanence box','Stackable wooden rings','Rolling wooden cylinders'],['Wooden building blocks','Discovery bottles','Soft sensory balls'],['Felted animals','Natural rubber toys','Handcrafted wooden blocks'],['Activity centers (lights & sounds)','Colorful shape sorters','Sensory play sets (water table)']),
 '9–12m':_m(['Nesting & stacking cups','Wooden shape sorters','Push-and-pull wooden toys'],['Wooden blocks (natural textures)','Simple musical instruments','Art supplies (large crayons)'],['Wooden push toys','Felted building blocks','Simple wooden puzzles'],['Simple musical instruments','Vibrant building blocks','Push-pull toys with sounds']),
 '12–18m':_m(['Wooden peg puzzles','Wooden animal figurines','Sorting trays or baskets'],['Role-play toys (kitchen sets)','Large open-ended art materials','Simple puzzles (natural textures)'],['Wooden push-pull toys','Watercolor art supplies','Felted dolls & animals'],['Ride-on toys (interactive)','Puzzles with big pieces','Large colorful stacking cups']),
 '18–24m':_m(['Practical-life tools (mini broom)','Wooden jigsaw puzzles','Bead stringing sets'],['Sensory bins (natural materials)','Wooden role-play sets','Multi-use building blocks'],['Felt play mats with scenes','Handcrafted musical instruments','Wooden stacking toys'],['Large colorful building blocks','Creative art sets (chalk & easel)','Interactive storybooks']),
 '24–36m':_m(['Dressing frames','DIY art kits','Wooden building blocks'],['Open-ended construction sets','Nature exploration kits','Creative art supplies (clay)'],['Imaginative play sets (fairy tales)','Natural playdough kits','Simple wooden puzzles'],['Pretend playsets (doctor/kitchen)','Large construction blocks','Building & construction sets'])
};

/* ---- brand guide ---- */
var BRAND_GUIDE=[
 {cat:'Skin Care',ic:'🧴',tint:'#ffd9e2',tiers:[
   {tier:'Premium',cls:'prem',brands:[['Aveeno','https://amzn.to/4cShNTr'],['Sebamed','https://amzn.to/3JmcT3m'],['Mustela','https://amzn.to/3VWngCP'],['Cetaphil','https://amzn.to/3Q1PgRt'],['Little Rituals','https://amzn.to/3TQJraK']]},
   {tier:'Mid Range',cls:'mid',brands:[['Chicco','https://amzn.to/4cUoSTo'],['Mama Earth','https://amzn.to/4ao4Mzn'],['Mother Sparsh','https://amzn.to/3xz6Bel'],['Mee Mee','https://amzn.to/3TWEsoX'],['Tots and Bubbles','https://amzn.to/3vMPl4P']]},
   {tier:'Economical',cls:'eco',brands:[['Himalaya','https://amzn.to/3Jjjig2'],['LuvLap','https://amzn.to/3UjdSbe'],['Johnson’s Baby','https://amzn.to/4ayJTBw'],['The Moms Co','https://amzn.to/4aUPDoT'],['Baby Chakra','https://amzn.to/49ue2AI']]}
 ]},
 {cat:'Baby Gear',ic:'🚗',tint:'#d5e6ff',tiers:[
   {tier:'Premium',cls:'prem',brands:[['Stokke','https://amzn.to/3MaTP9U'],['Skip Hop','https://amzn.to/3SRw9LB'],['BabyZen','https://amzn.to/4ctlWvx'],['Joie','https://amzn.to/3WQ6aoR'],['Beaba','https://amzn.to/4fLAzgK']]},
   {tier:'Mid Range',cls:'mid',brands:[['Infantino','https://amzn.to/3Apj3yx'],['Graco','https://amzn.to/3XhO1Sx'],['Chicco','https://amzn.to/3ABjDJC'],['R for Rabbit','https://amzn.to/3SToegK'],['Star and Daisy','https://amzn.to/46O581c']]},
   {tier:'Economical',cls:'eco',brands:[['Baby Hug','https://amzn.to/3ABk0Uw'],['Luvlap','https://amzn.to/3X8iBxu'],['Mee Mee','https://amzn.to/3YNcyQb'],['Mother Care','https://amzn.to/3yLHOof'],['Bay Bee','https://amzn.to/4fMp7By']]}
 ]}
];

/* ---- books (age-wise) ---- */
var BOOKS={
 '0–3m':[['Goodnight Moon','Margaret Wise Brown','The soothing comfort of a bedtime routine.','#d5e6ff'],['Guess How Much I Love You','Sam McBratney','Love in simple, heartfelt terms.','#ffd9e2'],['Where Is Baby’s Belly Button?','Karen Katz','Curiosity & discovery through interactive flaps.','#ffe6c8'],['Brown Bear, Brown Bear','Bill Martin Jr.','Colours & animals in a rhythmic, repeating way.','#d6f3e0'],['The Very Hungry Caterpillar','Eric Carle','Counting, days of the week & transformation.','#e7d9ff']],
 '3–6m':[['Peek-a-Who?','Nina Laden','Playful rhymes with peek-a-boo cut-outs.','#e7d9ff'],['Dear Zoo','Rod Campbell','Animals through a fun lift-the-flap format.','#d6f3e0'],['Pat the Bunny','Dorothy Kunhardt','Touch-and-feel sensory exploration.','#ffd9e2'],['Moo, Baa, La La La!','Sandra Boynton','Animal sounds in a fun, rhythmic way.','#ffe6c8'],['I Love You to the Moon and Back','Amelia Hepworth','Unconditional parent-child love.','#d5e6ff']],
 '6–9m':[['The Very Busy Spider','Eric Carle','Patience & perseverance through a spider’s work.','#ffe6c8'],['Little Blue Truck','Alice Schertle','The value of helping others & teamwork.','#d5e6ff'],['Goodnight, Gorilla','Peggy Rathmann','A humorous bedtime story full of imagination.','#e7d9ff'],['Where’s Spot?','Eric Hill','A lift-the-flap book that sparks curiosity.','#d6f3e0'],['Chicka Chicka Boom Boom','Bill Martin Jr.','The alphabet in a fun, memorable way.','#ffd9e2']],
 '9–12m':[['We’re Going on a Bear Hunt','Michael Rosen','Courage & adventure in a rhythmic story.','#d6f3e0'],['Llama Llama Red Pajama','Anna Dewdney','Managing separation anxiety at bedtime.','#ffd9e2'],['Giraffes Can’t Dance','Giles Andreae','Self-confidence & embracing uniqueness.','#ffe6c8'],['The Pout-Pout Fish','Deborah Diesen','Emotions & the power of positive thinking.','#d5e6ff'],['If You Give a Mouse a Cookie','Laura Numeroff','Cause and effect in a fun narrative.','#e7d9ff']],
 '12–18m':[['The Snowy Day','Ezra Jack Keats','The joy & wonder of a snowy day.','#d5e6ff'],['Press Here','Hervé Tullet','Interactive play teaching cause & effect.','#e7d9ff'],['Duck & Goose','Tad Hills','Friendship despite differences.','#d6f3e0'],['Pete the Cat: I Love My White Shoes','Eric Litwin','Optimism, even when things go wrong.','#ffe6c8'],['Ten Little Fingers and Ten Little Toes','Mem Fox','The uniqueness of every baby.','#ffd9e2']],
 '18–24m':[['The Wheels on the Bus','Paul O. Zelinsky','A sing-along that teaches rhythm & movement.','#ffe6c8'],['The Gruffalo','Julia Donaldson','A mouse who cleverly outsmarts predators.','#ffd9e2'],['Dragons Love Tacos','Adam Rubin','Dragons who love tacos but not spicy salsa.','#d5e6ff'],['Where the Wild Things Are','Maurice Sendak','A magical adventure of imagination.','#e7d9ff'],['I Am a Bunny','Ole Risom','Seasons & nature through a bunny’s eyes.','#d6f3e0']],
 '24–36m':[['The Day the Crayons Quit','Oliver Jeffers','Crayons voice their funny complaints.','#e7d9ff'],['Goodnight, Goodnight, Construction Site','Sherri Duskey Rinker','The importance of rest & routine.','#d5e6ff'],['Room on the Broom','Julia Donaldson','Friendship & kindness in rhyme.','#d6f3e0'],['The Lion Inside','Rachel Bright','Even the tiniest can have great courage.','#ffe6c8'],['The Wonderful Things You Will Be','Emily Martin','A celebration of a child’s potential.','#ffd9e2']]
};
var FINDS={
 diy:['Pom poms','Pipe cleaners','Ice-cream sticks','Foam stickers','Magnetic sheet','Finger paints','Crayons','Dot stickers','Play dough','Sensory rice','Kinetic sand','Sensory bin tools','Fine motor tool set','Pop tubes','Suction cups'],
 keepsakes:['Hand & footprint ink','Hand & foot casting','Hand & foot imprint','Breastmilk jewelry','Baby record book','Newborn photoshoot']
};

/* ---- hospital bag ---- */
var HOSPITAL=[
 {cat:'For baby',ic:'👶',tint:'#d5e6ff',items:[{n:'Rai pillow',brand:'Cherilo'},{n:'Towel',brand:'Mee Mee'},{n:'Diapers',brand:'Huggies'},{n:'Body wash',brand:'Aveeno'},{n:'Lotion',brand:'Aveeno'},{n:'Shampoo',brand:'Aveeno'},{n:'Sunscreen',brand:'Aveeno'},{n:'Rash cream',brand:'Sudocrem'},{n:'Massage oil',brand:'Little Rituals'},{n:'Washcloths',brand:'Luvlap'},{n:'Swaddles',brand:'Luvlap'},{n:'Burp cloths',brand:'Mom Care'},{n:'Dry sheet',brand:'Superbottoms'},{n:'Wet wipes',brand:'Mee Mee'},{n:'Mosquito patch',brand:'Alokah'},{n:'Kajal (nazar tikka)',brand:'Organic Netra'},{n:'Grooming kit',brand:'Luvlap'},{n:'Full rompers'},{n:'Rompers'},{n:'Caps & mittens'},{n:'Blanket'},{n:'Carrier nest'},{n:'Feeding cup'},{n:'Getting-home clothes'},{n:'Silver palada'},{n:'Silver spoon & bowl'},{n:'Small knife (for nazar)'}]},
 {cat:'For mumma',ic:'🤱',tint:'#ffd9e2',items:[{n:'Maternity pads',brand:'Azah'},{n:'Breast pad',brand:'Luvlap'},{n:'Feeding pillow',brand:'Kradle Kroft'},{n:'Nursing cover',brand:'Feather Hug'},{n:'Nipple cream',brand:'Lansinoh'},{n:'Nipple shield',brand:'Pigeon'},{n:'Therapy pad',brand:'Luvlap'},{n:'Breast pump',brand:'Spectra'},{n:'Nursing gown'},{n:'Maternity panty',brand:'Nua'},{n:'Perineal spray',brand:'Docat'},{n:'Perineal cooling pads',brand:'B-Arm'},{n:'Nursing bra',brand:'Marks & Spencer'},{n:'Panties'},{n:'Body wash'},{n:'Face wash'},{n:'Body lotion'},{n:'Scarf'},{n:'Towel'},{n:'Hand towel'},{n:'Toothpaste'},{n:'Toothbrush'},{n:'Blanket'},{n:'Basic make-up'},{n:'Coming-home outfit'},{n:'Bedsheets'},{n:'Entertainment'}]}
];

/* ---- diaper bag & safety ---- */
var DIAPERBAG=[
 {cat:'Diaper bag essentials',ic:'🎒',tint:'#fff0d0',items:[{n:'Diapers',brand:'Huggies'},{n:'Wipes',brand:'Mee Mee'},{n:'Changing pad',brand:'Tidy Sleep'},{n:'Hand sanitizer',brand:'Windmill'},{n:'Snacks',brand:'Slurrp Farm'},{n:'Burp cloths',brand:'Mom Care'},{n:'Blanket'},{n:'Diaper cream',brand:'Sudocrem'},{n:'Sunscreen',brand:'Little Rituals'},{n:'Nursing cover',brand:'Feather Hug'},{n:'Bib & sippy cup',brand:'Luvlap'},{n:'Wet bag',brand:'Amso'},{n:'Nail clippers',brand:'Luvlap'},{n:'Extra clothes'},{n:'Baby bottles'},{n:'Favourite toy'},{n:'First-aid kit'},{n:'Emergency contact card'}]},
 {cat:'Safety / babyproofing',ic:'🛡️',tint:'#d6f3e0',items:[{n:'Bed railings',shop:'bedrail'},{n:'Baby monitor',shop:'monitor'},{n:'Knee protectors',shop:'kneepad'},{n:'Anti-skid socks',shop:'antiskid'},{n:'Socket plug covers',ess:1,shop:'socketcovers'},{n:'Edge guards',ess:1,shop:'edgeguards'},{n:'Drawer lockers',shop:'drawerlock'},{n:'Door stoppers',shop:'doorstop'},{n:'Sunscreen',shop:'sunscreen'},{n:'Baby handwash',shop:'handwash'}]}
];

/* ---- DIY activities ---- */
var DIY=[
 {mat:'Pom poms',ic:'🔴',tint:'#ffd9e2',acts:['Colour sorting – sort pom poms into coloured bowls using fingers or tongs.','Drop game – drop pom poms through a tube or bottle and watch them fall.','Art collage – glue pom poms onto paper to make colourful designs.','Counting – place the right number of pom poms next to each number.','Sensory bin – scoop & transfer pom poms with cups and spoons.']},
 {mat:'Pipe cleaners',ic:'🧵',tint:'#e7d9ff',acts:['Threading beads – thread large-hole beads onto pipe cleaners for fine motor skills.','Colander activity – push pipe cleaners through an upturned colander.','Shape formation – bend them into circles, squares and triangles.','Bracelets – twist into simple bracelets and decorate with beads.','Maze creation – build a tray maze and roll a ball through it.']},
 {mat:'Ice-cream sticks',ic:'🍡',tint:'#ffe6c8',acts:['Building shapes – arrange and glue sticks into shapes.','Stick puzzles – draw a picture, mix up, and reassemble.','Colour matching – colour sticks and match the shades.','Craft puppets – attach paper cut-outs to make puppets.','Counting practice – line up sticks and count them.']},
 {mat:'Finger paints',ic:'🎨',tint:'#d6f3e0',acts:['Handprint art – make handprint animals.','Colour mixing – mix colours to discover new shades.','Sensory bags – seal paint in a ziplock for mess-free play.','Texture painting – paint on paper, card and fabric.','Nature prints – dip leaves in paint and press onto paper.']},
 {mat:'Play dough',ic:'🟣',tint:'#d5e6ff',acts:['Shapes – use cutters to make shapes.','Animal molding – create little animals.','Straw sculptures – stick straws in to build structures.','Letter formation – roll dough into letters.','Safe cutting – snip dough with toy scissors.']},
 {mat:'Sensory rice',ic:'🌾',tint:'#fff0d0',acts:['Bin exploration – explore a rice bin with hands.','Hidden treasures – hide small toys and find them.','Colour sorting – dye rice and sort by colour.','Scoop & pour – transfer rice with cups and spoons.','Rice art – glue coloured rice into patterns.']},
 {mat:'Dot stickers',ic:'🟢',tint:'#d6f3e0',acts:['Sticker collage – create colourful collages.','Colour matching – group same-colour dots.','Patterns – line up dots in repeating patterns.','Letters & numbers – form numbers and letters.','Toy-car road – stick a “road” for cars to drive on.']},
 {mat:'Kinetic sand',ic:'🏖️',tint:'#ffe6c8',acts:['Sand molding – use molds to make shapes.','Treasure hunt – hide toys and dig for them.','Writing practice – draw letters with a finger or stick.','Sand art – press colours to create designs.','Scoop & pour – practice with cups and scoops.']}
];

/* ---- all things travel: extra lists (planner handled in main) ---- */

/* ---- food brands ---- */
var FOOD={
 brands:[
  ['Slurrp Farm','Porridge mixes, cereals, pasta, noodles, snacks, dosas','6m–Adult','Very High','#ffe6c8','🌾'],
  ['My Little Moppet','Porridge mixes, teething sticks, pancakes, cookies, laddoos','6m–Adult','Very High','#ffd9e2','🍪'],
  ['Happa Organic','Porridge mixes, purées & puffs','6m–2y+','Low','#d6f3e0','🍎'],
  ['Early Foods','Porridge mixes, laddoos, teething sticks, cookies, rusk','6m–Adult','Medium','#e7d9ff','🥣'],
  ['Timios','Porridge, teething sticks, melts, pancakes, nut butters','6m–Adult','High','#d5e6ff','🥜'],
  ['Little Joys','Porridge mixes, cookies, drink mixes','6m–2y+','Medium','#fff0d0','🧃'],
  ['Tots and Moms','Protein bars, drink mixes, porridges, teething sticks','6m–2y+','High','#ffd9e2','🍫'],
  ['Bebe Burp','Porridge mixes, cookies, puffs','6m–2y+','Low','#d6f3e0','🍘']
 ],
 avoid:[
  ['Added sugar','sucrose, corn syrup, HFCS, glucose, jaggery syrups, maple & agave'],
  ['Salt','table salt, sodium benzoate/nitrite, disodium phosphate, MSG'],
  ['Honey','completely avoid under 1 year (botulism risk)'],
  ['Artificial sweeteners','aspartame, saccharin, sucralose, stevia extracts, sorbitol'],
  ['Caffeine','coffee/green-tea extract, guarana, yerba mate'],
  ['Artificial colours','Red 40, Yellow 5, Blue 1, tartrazine, sunset yellow'],
  ['Artificial flavours','artificial vanilla/strawberry/chocolate, vanillin'],
  ['Trans fats','partially hydrogenated oils, shortening, margarine'],
  ['High allergens','introduce peanuts, tree nuts, egg, wheat, soy, dairy, sesame carefully']
 ],
 foods:{
  'Seeds (finely ground)':['Chia','Flax','Sesame','Pumpkin','Sunflower','Watermelon','Sabja (basil)','Poppy','Hemp'],
  'Oils':['Ghee','Coconut','Olive','Sesame','Mustard (small)','Almond','Avocado','Rice bran'],
  'Premixes':['Instant ragi porridge','Khichdi mix','Multigrain porridge','Sprouted dal mix']
 }
};

/* ---- essentials: full list by sub-category ---- */
var ESS_SECTIONS=[
 {cat:'Baby Care Products',ic:'🧴',tint:'#ffd9e2',items:[{n:'Diapers',ess:1,shop:'diapers'},{n:'Body wash',shop:'bodywash'},{n:'Lotion',shop:'lotion'},{n:'Shampoo',shop:'shampoo'},{n:'Rash cream',ess:1,shop:'rashcream'},{n:'Wet wipes',ess:1,shop:'wipes'},{n:'Kajal (nazar tikka)',shop:'kajal'},{n:'Hair oil',shop:'hairoil'},{n:'Face wash',shop:'facewash'},{n:'Cradle cap care',shop:'cradlecap'},{n:'Baby face cream',shop:'facecream'},{n:'Grooming kit',shop:'grooming'},{n:'Lip balm',shop:'lipbalm'},{n:'Langotis',shop:'langoti'},{n:'Cloth diaper',shop:'clothdiaper'},{n:'Massage oil (winters)',shop:'massageoilw'},{n:'Massage oil (summers)',shop:'massageoils'},{n:'Mosquito bite roll-on',shop:'mosbite'},{n:'Mosquito repellent spray',shop:'mosspray'},{n:'Mosquito patch',shop:'mospatch'},{n:'Mosquito fabric roll-on',shop:'mosfabric'},{n:'Vapour patches (cold)',shop:'vapourpatch'},{n:'Vapour roll-on (cold)',shop:'vapour'},{n:'Tummy roll (colic)',shop:'colic'},{n:'Oral wipes / swabs',shop:'oralwipes'}]},
 {cat:'Other Essentials',ic:'🧺',tint:'#d5e6ff',items:[{n:'Rai pillow',shop:'raipillow'},{n:'Towel',shop:'towel'},{n:'Dry sheet',shop:'drysheet'},{n:'Cotton bibs',shop:'bibs'},{n:'Washcloths',shop:'washcloth'},{n:'Swaddles',ess:1,shop:'swaddle'},{n:'Burp cloth',ess:1,shop:'burpcloth'},{n:'Pacifier',shop:'pacifier'},{n:'Bath tub',shop:'bathtub'},{n:'Bath seat',shop:'bathseat'},{n:'Baby car seat',ess:1,shop:'carseat'},{n:'Stroller',shop:'stroller'},{n:'Baby carrier',shop:'carrier'},{n:'Diaper bag',shop:'diaperbag'},{n:'Plastic feeding bottle',shop:'bottle'},{n:'Glass feeding bottle',shop:'glassbottle'},{n:'Steel feeding bottle',shop:'steelbottle'},{n:'Silicon teether',shop:'teether'},{n:'Wooden teether',shop:'woodteether'},{n:'Disposable bibs',shop:'dispbibs'}]},
 {cat:'Hygiene Products',ic:'🧼',tint:'#d6f3e0',items:[{n:'Laundry detergent',shop:'detergent'},{n:'Bottle & dish washer',shop:'dishwasher'},{n:'Bottle sterilizer',shop:'sterilizer'},{n:'Toy cleaner',shop:'toycleaner'},{n:'Bottle cleaner',shop:'bottlecleaner'}]},
 {cat:'Safety Products',ic:'🛡️',tint:'#fff0d0',items:[{n:'Bed railings',shop:'bedrail'},{n:'Baby monitor',shop:'monitor'},{n:'Humidifier',shop:'humidifier'},{n:'Knee protectors',shop:'kneepad'},{n:'Anti-skid socks',shop:'antiskid'},{n:'Socket plug covers',ess:1,shop:'socketcovers'},{n:'Edge guards',ess:1,shop:'edgeguards'},{n:'Drawer lockers',shop:'drawerlock'},{n:'Door stoppers',shop:'doorstop'},{n:'Sunscreen',shop:'sunscreen'},{n:'Baby handwash',shop:'handwash'}]},
 {cat:'First Tooth + Feeding Essentials',ic:'🦷',tint:'#ffe6c8',items:[{n:'Toothbrush',ess:1,shop:'toothbrush'},{n:'Toothpaste',shop:'toothpaste'},{n:'High chair',ess:1,shop:'highchair'},{n:'Spoons',shop:'spoons'},{n:'Feeding kit',shop:'feedingkit'},{n:'Snack box',shop:'snackbox'},{n:'Plastic sipper bottle',shop:'sipper'},{n:'Steel sipper bottle',shop:'steelsipper'},{n:'Open cup',shop:'opencup'},{n:'Food processor',shop:'processor'},{n:'Waterproof bibs',shop:'wbibs'}]},
 {cat:'Other Products',ic:'🩱',tint:'#e7d9ff',items:[{n:'Swim diapers',shop:'swimdiaper'},{n:'Swim diapers (reusable)',shop:'swimdiaperr'},{n:'Potty training seat',shop:'pottyseat'},{n:'Potty training underwear',shop:'trainpants'}]},
 {cat:'Other Accessories (Non-Essentials)',ic:'🪑',tint:'#d5e6ff',items:[{n:'Cradle',shop:'cradle'},{n:'Baby walker',shop:'walker'},{n:'Rocker',shop:'rocker'},{n:'Cot',shop:'cot'},{n:'Toy organizer',shop:'toyorg'},{n:'Playpen',shop:'playpen'},{n:'Playmat (6 mm)',shop:'playmat'},{n:'Thick playmat (12 mm)',shop:'playmat12'},{n:'Swing',shop:'swing'},{n:'Slide',shop:'slide'},{n:'Bedding set',shop:'bedding'},{n:'Mosquito net',shop:'mosnet'},{n:'Sleep sack',shop:'sleepsack'},{n:'Mattress protector',shop:'mattressp'},{n:'Feeding bottle cover',shop:'bottlecover'},{n:'Bottle drying stand',shop:'dryingstand'},{n:'Formula dispenser',shop:'formuladisp'},{n:'Baby thermometer',shop:'thermometer'},{n:'Portable kettle & steamer',shop:'kettle'}]},
 {cat:'Mother Care',ic:'🤱',tint:'#ffd9e2',items:[{n:'Post-pregnancy belt',shop:'belt'},{n:'Maternity pads',shop:'matpads'},{n:'Stretch marks solution',shop:'stretch'},{n:'Feeding / nifty cup',shop:'niftycup'},{n:'Postpartum hairfall care',shop:'hairfall'},{n:'Hairfall gummies',shop:'hairgummies'},{n:'Maternity panty',shop:'matpanty'},{n:'Perineal spray',shop:'perispray'},{n:'Perineal cooling pads',shop:'peripads'},{n:'Feeding pillow',shop:'feedpillow'},{n:'Nursing cover',shop:'nursingcover'},{n:'Lactation supplement',shop:'lactation'},{n:'Nipple cream',shop:'nipplecream'},{n:'Nipple shield',shop:'nippleshield'},{n:'Manual breast pump',shop:'manualpump'},{n:'Electric breast pump',shop:'electricpump'},{n:'Breastmilk storage bags',shop:'storagebags'},{n:'Breast pads',shop:'breastpads'},{n:'Breastmilk cooler bags',shop:'coolerbags'},{n:'Breast therapy pack',shop:'therapypack'},{n:'Nursing bra',shop:'nursingbra'},{n:'Milk collection caps',shop:'milkcaps'}]}
];

/* ---- category hub ---- */
var CATS=[
 {key:'essentials',name:'Baby & Mumma Essentials',ic:'🍼',tint:'#ffe6c8',desc:'Full list by category + brand picks',type:'sections',data:ESS_SECTIONS},
 {key:'toys',name:'Toys (age-wise)',ic:'🧸',tint:'#e7d9ff',desc:'Right toys for each stage',type:'age',data:TOYS,tip:'<b>Montessori</b> · <b>Reggio</b> · <b>Waldorf</b> · <b>Play-based</b> — pick toys that match your style. Age-right picks below.'},
 {key:'brands',name:'Brand Guide',ic:'🏷️',tint:'#d5e6ff',desc:'Premium → economical by category',type:'brands',data:BRAND_GUIDE},
 {key:'books',name:'Books and Interesting Finds',ic:'📚',tint:'#ffd9e2',desc:'Reads by age + DIY buys & keepsakes',type:'books',data:BOOKS},
 {key:'hospital',name:'Hospital Bag',ic:'🏥',tint:'#d6f3e0',desc:'Baby + mumma packing checklist',type:'sections',data:HOSPITAL},
 {key:'diaperbag',name:'Diaper Bag & Safety',ic:'🎒',tint:'#fff0d0',desc:'On-the-go kit + babyproofing',type:'sections',data:DIAPERBAG},
 {key:'diy',name:'DIY Activities',ic:'🎨',tint:'#e7d9ff',desc:'Play ideas by material',type:'diy',data:DIY},
 {key:'travel',name:'All Things Travel',ic:'✈️',tint:'#d5e6ff',desc:'Plan, pack & buy for trips',type:'travel'},
 {key:'food',name:'Food Brands',ic:'🥣',tint:'#d6f3e0',desc:'Brands, foods & what to avoid',type:'food',data:FOOD}
];
