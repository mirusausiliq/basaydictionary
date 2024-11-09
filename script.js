// Placeholder for any future interactive functionality
console.log("JavaScript is loaded.");

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

let basayData = [
  {
    "Basay.Trobiwan": "qael",
    "Basay.Samtiaugiao": "haed*",
    "Chinese": "鮑魚",
    "English": "abalone"
  },
  {
    "Basay.Trobiwan": "tisin",
    "Basay.Samtiaugiao": "litisin",
    "Chinese": "過河",
    "English": "across the river"
  },
  {
    "Basay.Trobiwan": "m-itac",
    "Basay.Samtiaugiao": "ma-itace",
    "Chinese": "活的",
    "English": "alive, live"
  },
  {
    "Basay.Trobiwan": "lavelave",
    "Basay.Samtiaugiao": "sulalabe",
    "Chinese": "通宵",
    "English": "all night"
  },
  {
    "Basay.Trobiwan": "qalruna",
    "Basay.Samtiaugiao": "harona",
    "Chinese": "螞蟻",
    "English": "ants"
  },
  {
    "Basay.Trobiwan": "cima",
    "Basay.Samtiaugiao": "cima",
    "Chinese": "手臂, 手",
    "English": "arm, hand"
  },
  {
    "Basay.Trobiwan": "avu",
    "Basay.Samtiaugiao": "abu",
    "Chinese": "灰",
    "English": "ash"
  },
  {
    "Basay.Trobiwan": "ten",
    "Basay.Samtiaugiao": "ten",
    "Chinese": "背",
    "English": "back"
  },
  {
    "Basay.Trobiwan": "cacuyan",
    "Basay.Samtiaugiao": "cacuyen",
    "Chinese": "平衡",
    "English": "balance"
  },
  {
    "Basay.Trobiwan": "tinayan",
    "Basay.Samtiaugiao": "tenayen",
    "Chinese": "竹子",
    "English": "bamboo"
  },
  {
    "Basay.Trobiwan": "mulrulru",
    "Basay.Samtiaugiao": "malulu",
    "Chinese": "吠叫",
    "English": "bark(dogs)"
  },
  {
    "Basay.Trobiwan": "m-eroc",
    "Basay.Samtiaugiao": "leloce",
    "Chinese": "沐浴",
    "English": "bathe"
  },
  {
    "Basay.Trobiwan": "pail",
    "Basay.Samtiaugiao": "pai-pail*",
    "Chinese": "招手, 扇",
    "English": "beckon, to fan"
  },
  {
    "Basay.Trobiwan": "tian",
    "Basay.Samtiaugiao": "tiyan",
    "Chinese": "肚子",
    "English": "belly"
  },
  {
    "Basay.Trobiwan": "m-qalat",
    "Basay.Samtiaugiao": "harate",
    "Chinese": "咬",
    "English": "bite"
  },
  {
    "Basay.Trobiwan": "sapal",
    "Basay.Samtiaugiao": "sapal*",
    "Chinese": "板",
    "English": "board"
  },
  {
    "Basay.Trobiwan": "tolan",
    "Basay.Samtiaugiao": "tolan",
    "Chinese": "骨頭",
    "English": "bone"
  },
  {
    "Basay.Trobiwan": "lrakop, laqup",
    "Basay.Samtiaugiao": "lakup",
    "Chinese": "碗, 盆",
    "English": "bowl, basin"
  },
  {
    "Basay.Trobiwan": "vuing",
    "Basay.Samtiaugiao": "buting",
    "Chinese": "打破",
    "English": "break"
  },
  {
    "Basay.Trobiwan": "m-lapet",
    "Basay.Samtiaugiao": "lapete",
    "Chinese": "折斷",
    "English": "break off"
  },
  {
    "Basay.Trobiwan": "cicu",
    "Basay.Samtiaugiao": "cicu",
    "Chinese": "胸部",
    "English": "breast"
  },
  {
    "Basay.Trobiwan": "sasuani",
    "Basay.Samtiaugiao": "sasuani",
    "Chinese": "兄弟",
    "English": "brother"
  },
  {
    "Basay.Trobiwan": "halus",
    "Basay.Samtiaugiao": "halasse",
    "Chinese": "呼叫",
    "English": "call"
  },
  {
    "Basay.Trobiwan": "u-vava",
    "Basay.Samtiaugiao": "baba",
    "Chinese": "背負",
    "English": "carry on one's back"
  },
  {
    "Basay.Trobiwan": "laisa",
    "Basay.Samtiaugiao": "laise",
    "Chinese": "臉, 臉頰",
    "English": "face, cheek"
  },
  {
    "Basay.Trobiwan": "turuquk?",
    "Basay.Samtiaugiao": "tor-hok",
    "Chinese": "雞",
    "English": "chicken"
  },
  {
    "Basay.Trobiwan": "wanak, wanaq",
    "Basay.Samtiaugiao": "wanake",
    "Chinese": "小孩",
    "English": "child"
  },
  {
    "Basay.Trobiwan": "kaba*",
    "Basay.Samtiaugiao": "kaba bukes",
    "Chinese": "布",
    "English": "cloth"
  },
  {
    "Basay.Trobiwan": "laes",
    "Basay.Samtiaugiao": "laese",
    "Chinese": "茅草",
    "English": "cogon grass"
  },
  {
    "Basay.Trobiwan": "manèng",
    "Basay.Samtiaugiao": "manèng",
    "Chinese": "冷天",
    "English": "cold weather"
  },
  {
    "Basay.Trobiwan": "kanatta",
    "Basay.Samtiaugiao": "kanatte",
    "Chinese": "梳子",
    "English": "comb"
  },
  {
    "Basay.Trobiwan": "malri",
    "Basay.Samtiaugiao": "moali",
    "Chinese": "來",
    "English": "come"
  },
  {
    "Basay.Trobiwan": "sumay",
    "Basay.Samtiaugiao": "sumay",
    "Chinese": "飯",
    "English": "cooked rice"
  },
  {
    "Basay.Trobiwan": "mulaqlaqay",
    "Basay.Samtiaugiao": "lahe",
    "Chinese": "咳嗽",
    "English": "cough"
  },
  {
    "Basay.Trobiwan": "mnaol",
    "Basay.Samtiaugiao": "menaol*",
    "Chinese": "黃瓜, 瓜",
    "English": "cucumber, melon"
  },
  {
    "Basay.Trobiwan": "t<um>avu",
    "Basay.Samtiaugiao": "tabu",
    "Chinese": "砍樹",
    "English": "cut trees"
  },
  {
    "Basay.Trobiwan": "matay",
    "Basay.Samtiaugiao": "patay",
    "Chinese": "死的, 打",
    "English": "dead, strike"
  },
  {
    "Basay.Trobiwan": "metènge",
    "Basay.Samtiaugiao": "setange",
    "Chinese": "債務",
    "English": "debt"
  },
  {
    "Basay.Trobiwan": "malralraw",
    "Basay.Samtiaugiao": "malalaw",
    "Chinese": "死",
    "English": "die"
  },
  {
    "Basay.Trobiwan": "caki",
    "Basay.Samtiaugiao": "caki",
    "Chinese": "髒",
    "English": "dirty"
  },
  {
    "Basay.Trobiwan": "s<um>angana",
    "Basay.Samtiaugiao": "sangana",
    "Chinese": "離婚",
    "English": "divorce"
  },
  {
    "Basay.Trobiwan": "wacu",
    "Basay.Samtiaugiao": "wacu",
    "Chinese": "狗",
    "English": "dog"
  },
  {
    "Basay.Trobiwan": "valat",
    "Basay.Samtiaugiao": "balate",
    "Chinese": "門",
    "English": "door"
  },
  {
    "Basay.Trobiwan": "paituman",
    "Basay.Samtiaugiao": "tuman",
    "Chinese": "下游",
    "English": "downstream"
  },
  {
    "Basay.Trobiwan": "mwale",
    "Basay.Samtiaugiao": "paware",
    "Chinese": "曬乾",
    "English": "dry in the sun"
  },
  {
    "Basay.Trobiwan": "nicang",
    "Basay.Samtiaugiao": "licang",
    "Chinese": "乾, 渴",
    "English": "dry, thirst"
  },
  {
    "Basay.Trobiwan": "volroan",
    "Basay.Samtiaugiao": "bolo",
    "Chinese": "耳朵",
    "English": "ear"
  },
  {
    "Basay.Trobiwan": "singasas",
    "Basay.Samtiaugiao": "singasasse",
    "Chinese": "賺錢",
    "English": "earn money"
  },
  {
    "Basay.Trobiwan": "?",
    "Basay.Samtiaugiao": "?",
    "Chinese": "陶壺",
    "English": "earthern teapot"
  },
  {
    "Basay.Trobiwan": "wale",
    "Basay.Samtiaugiao": "walewale",
    "Chinese": "東方",
    "English": "east"
  },
  {
    "Basay.Trobiwan": "kuman, maqman",
    "Basay.Samtiaugiao": "kuman",
    "Chinese": "吃",
    "English": "eat"
  },
  {
    "Basay.Trobiwan": "ma-terol",
    "Basay.Samtiaugiao": "telod*",
    "Chinese": "蛋",
    "English": "egg"
  },
  {
    "Basay.Trobiwan": "wacu",
    "Basay.Samtiaugiao": "wasu, wacu",
    "Chinese": "八",
    "English": "eight"
  },
  {
    "Basay.Trobiwan": "kaka, qaqa",
    "Basay.Samtiaugiao": "kaka",
    "Chinese": "長兄姊",
    "English": "elder sibling"
  },
  {
    "Basay.Trobiwan": "s<um>unavaw",
    "Basay.Samtiaugiao": "sinabaw",
    "Chinese": "雇用, 雇員",
    "English": "empoly, employee"
  },
  {
    "Basay.Trobiwan": "lavi",
    "Basay.Samtiaugiao": "labenaita",
    "Chinese": "傍晚",
    "English": "evening"
  },
  {
    "Basay.Trobiwan": "mata",
    "Basay.Samtiaugiao": "mata",
    "Chinese": "眼睛",
    "English": "eye"
  },
  {
    "Basay.Trobiwan": "muzuay",
    "Basay.Samtiaugiao": "luway",
    "Chinese": "存在",
    "English": "exist"
  },
  {
    "Basay.Trobiwan": "tai",
    "Basay.Samtiaugiao": "tae",
    "Chinese": "糞便",
    "English": "feces"
  },
  {
    "Basay.Trobiwan": "tata",
    "Basay.Samtiaugiao": "tata",
    "Chinese": "跌倒",
    "English": "fall"
  },
  {
    "Basay.Trobiwan": "mitut",
    "Basay.Samtiaugiao": "mututte",
    "Chinese": "放屁",
    "English": "fart"
  },
  {
    "Basay.Trobiwan": "sete",
    "Basay.Samtiaugiao": "sitshi",
    "Chinese": "脂肪, 油",
    "English": "fat, oil"
  },
  {
    "Basay.Trobiwan": "tama",
    "Basay.Samtiaugiao": "tama",
    "Chinese": "父親",
    "English": "father"
  },
  {
    "Basay.Trobiwan": "cacaw",
    "Basay.Samtiaugiao": "macacaw",
    "Chinese": "害怕",
    "English": "fear"
  },
  {
    "Basay.Trobiwan": "vawvi",
    "Basay.Samtiaugiao": "bobe",
    "Chinese": "農田",
    "English": "farming field"
  },
  {
    "Basay.Trobiwan": "c<um>apcap",
    "Basay.Samtiaugiao": "sapsap",
    "Chinese": "填滿縫隙",
    "English": "fill up the crevice"
  },
  {
    "Basay.Trobiwan": "ponel",
    "Basay.Samtiaugiao": "ponel*",
    "Chinese": "充滿水",
    "English": "filled with water"
  },
  {
    "Basay.Trobiwan": "tamus",
    "Basay.Samtiaugiao": "tamus",
    "Chinese": "手指",
    "English": "figner"
  },
  {
    "Basay.Trobiwan": "ramal?",
    "Basay.Samtiaugiao": "namadr*",
    "Chinese": "火",
    "English": "fire"
  },
  {
    "Basay.Trobiwan": "vaut",
    "Basay.Samtiaugiao": "baute",
    "Chinese": "魚",
    "English": "fish"
  },
  {
    "Basay.Trobiwan": "talrese",
    "Basay.Samtiaugiao": "tarisi",
    "Chinese": "魚籃",
    "English": "fish basket"
  },
  {
    "Basay.Trobiwan": "cima",
    "Basay.Samtiaugiao": "cima",
    "Chinese": "五",
    "English": "five"
  },
  {
    "Basay.Trobiwan": "kan-an, qannan",
    "Basay.Samtiaugiao": "kan",
    "Chinese": "食物",
    "English": "food"
  },
  {
    "Basay.Trobiwan": "supat",
    "Basay.Samtiaugiao": "sèpat",
    "Chinese": "四",
    "English": "four"
  },
  {
    "Basay.Trobiwan": "msuin",
    "Basay.Samtiaugiao": "suin",
    "Chinese": "滿足",
    "English": "full, satisfied"
  },
  {
    "Basay.Trobiwan": "qacaw",
    "Basay.Samtiaugiao": "hacaw",
    "Chinese": "遠眺",
    "English": "gaze in the distance"
  },
  {
    "Basay.Trobiwan": "vulay",
    "Basay.Samtiaugiao": "balay",
    "Chinese": "給",
    "English": "give"
  },
  {
    "Basay.Trobiwan": "katiwan",
    "Basay.Samtiaugiao": "katiw",
    "Chinese": "去",
    "English": "go1"
  },
  {
    "Basay.Trobiwan": "awi",
    "Basay.Samtiaugiao": "aui",
    "Chinese": "走",
    "English": "go2"
  },
  {
    "Basay.Trobiwan": "cawan, blawan",
    "Basay.Samtiaugiao": "bucawan",
    "Chinese": "金",
    "English": "gold"
  },
  {
    "Basay.Trobiwan": "vaki",
    "Basay.Samtiaugiao": "baki",
    "Chinese": "祖父",
    "English": "grandfather"
  },
  {
    "Basay.Trobiwan": "bai",
    "Basay.Samtiaugiao": "bai",
    "Chinese": "祖母",
    "English": "grandmother"
  },
  {
    "Basay.Trobiwan": "lebus",
    "Basay.Samtiaugiao": "lebosse",
    "Chinese": "草",
    "English": "grass"
  },
  {
    "Basay.Trobiwan": "malringi",
    "Basay.Samtiaugiao": "salingi",
    "Chinese": "守護",
    "English": "guard"
  },
  {
    "Basay.Trobiwan": "papica",
    "Basay.Samtiaugiao": "papican",
    "Chinese": "槍",
    "English": "gun"
  },
  {
    "Basay.Trobiwan": "bukès, buqus",
    "Basay.Samtiaugiao": "bukès",
    "Chinese": "頭髮",
    "English": "head hair"
  },
  {
    "Basay.Trobiwan": "ucu",
    "Basay.Samtiaugiao": "ucu",
    "Chinese": "頭",
    "English": "head"
  },
  {
    "Basay.Trobiwan": "ma-cingcèng",
    "Basay.Samtiaugiao": "cèngcèng",
    "Chinese": "頭痛",
    "English": "headache"
  },
  {
    "Basay.Trobiwan": "anèm",
    "Basay.Samtiaugiao": "anèm",
    "Chinese": "心臟",
    "English": "heart"
  },
  {
    "Basay.Trobiwan": "mricong",
    "Basay.Samtiaugiao": "ricung",
    "Chinese": "重的",
    "English": "heavy"
  },
  {
    "Basay.Trobiwan": "talo",
    "Basay.Samtiaugiao": "talo",
    "Chinese": "躲藏",
    "English": "hide"
  },
  {
    "Basay.Trobiwan": "s<um>ukul",
    "Basay.Samtiaugiao": "s<um>ukul*",
    "Chinese": "用拳頭打",
    "English": "hit with fist"
  },
  {
    "Basay.Trobiwan": "pukun",
    "Basay.Samtiaugiao": "pukon",
    "Chinese": "打, 錘",
    "English": "hit, hammer"
  },
  {
    "Basay.Trobiwan": "makèng",
    "Basay.Samtiaugiao": "makèng",
    "Chinese": "誠實",
    "English": "honest"
  },
  {
    "Basay.Trobiwan": "voce",
    "Basay.Samtiaugiao": "boce",
    "Chinese": "熱",
    "English": "hot"
  },
  {
    "Basay.Trobiwan": "kinian?",
    "Basay.Samtiaugiao": "kiniyan",
    "Chinese": "房子",
    "English": "house"
  },
  {
    "Basay.Trobiwan": "pina",
    "Basay.Samtiaugiao": "pina",
    "Chinese": "多少",
    "English": "how many"
  },
  {
    "Basay.Trobiwan": "racibu",
    "Basay.Samtiaugiao": "lacebo",
    "Chinese": "百",
    "English": "hundred"
  },
  {
    "Basay.Trobiwan": "yaku",
    "Basay.Samtiaugiao": "yaku",
    "Chinese": "我",
    "English": "I"
  },
  {
    "Basay.Trobiwan": "malacèng",
    "Basay.Samtiaugiao": "salacèng",
    "Chinese": "打斷",
    "English": "interrupt"
  },
  {
    "Basay.Trobiwan": "mcuvung",
    "Basay.Samtiaugiao": "macubung",
    "Chinese": "跳",
    "English": "jump"
  },
  {
    "Basay.Trobiwan": "cukcuk",
    "Basay.Samtiaugiao": "cukcuk",
    "Chinese": "鑰匙",
    "English": "key"
  },
  {
    "Basay.Trobiwan": "m-supèl",
    "Basay.Samtiaugiao": "ma-sopul*",
    "Chinese": "知道",
    "English": "know"
  },
  {
    "Basay.Trobiwan": "kungkung",
    "Basay.Samtiaugiao": "kungkung",
    "Chinese": "杓子",
    "English": "ladle"
  },
  {
    "Basay.Trobiwan": "tangtanga",
    "Basay.Samtiaugiao": "t<um>atanga",
    "Chinese": "笑, 打開",
    "English": "laugh, to open"
  },
  {
    "Basay.Trobiwan": "malukas",
    "Basay.Samtiaugiao": "malukas",
    "Chinese": "懶惰, 閒散",
    "English": "lazy, idle"
  },
  {
    "Basay.Trobiwan": "vela",
    "Basay.Samtiaugiao": "bela",
    "Chinese": "葉子",
    "English": "leaf"
  },
  {
    "Basay.Trobiwan": "saqongqonga",
    "Basay.Samtiaugiao": "sahunga",
    "Chinese": "說謊",
    "English": "lie (to tell)"
  },
  {
    "Basay.Trobiwan": "nacang",
    "Basay.Samtiaugiao": "nacang",
    "Chinese": "輕",
    "English": "light (in weight)"
  },
  {
    "Basay.Trobiwan": "cicap",
    "Basay.Samtiaugiao": "cicap",
    "Chinese": "閃電",
    "English": "ligntning"
  },
  {
    "Basay.Trobiwan": "lang?",
    "Basay.Samtiaugiao": "lang",
    "Chinese": "酒",
    "English": "liquor1"
  },
  {
    "Basay.Trobiwan": "?",
    "Basay.Samtiaugiao": "?",
    "Chinese": "酒",
    "English": "liquor2"
  },
  {
    "Basay.Trobiwan": "valuvalung",
    "Basay.Samtiaugiao": "balong",
    "Chinese": "長的",
    "English": "long"
  },
  {
    "Basay.Trobiwan": "kutu",
    "Basay.Samtiaugiao": "kutu",
    "Chinese": "虱子",
    "English": "louse"
  },
  {
    "Basay.Trobiwan": "maya",
    "Basay.Samtiaugiao": "saya",
    "Chinese": "製作",
    "English": "make"
  },
  {
    "Basay.Trobiwan": "lroqolr",
    "Basay.Samtiaugiao": "lohot",
    "Chinese": "測量, 秤",
    "English": "measure, scale"
  },
  {
    "Basay.Trobiwan": "rotong",
    "Basay.Samtiaugiao": "lotong",
    "Chinese": "猴子",
    "English": "monkey"
  },
  {
    "Basay.Trobiwan": "bucan, vucan",
    "Basay.Samtiaugiao": "bucan",
    "Chinese": "月亮",
    "English": "moon"
  },
  {
    "Basay.Trobiwan": "tina",
    "Basay.Samtiaugiao": "tina",
    "Chinese": "母親",
    "English": "mother"
  },
  {
    "Basay.Trobiwan": "pursarum",
    "Basay.Samtiaugiao": "purusalum",
    "Chinese": "山地部落",
    "English": "mountain tribes"
  },
  {
    "Basay.Trobiwan": "nganga?",
    "Basay.Samtiaugiao": "nganga",
    "Chinese": "嘴",
    "English": "mouth"
  },
  {
    "Basay.Trobiwan": "sama",
    "Basay.Samtiaugiao": "sama",
    "Chinese": "芥菜",
    "English": "mustard plant"
  },
  {
    "Basay.Trobiwan": "nangan",
    "Basay.Samtiaugiao": "nganan",
    "Chinese": "名字",
    "English": "name"
  },
  {
    "Basay.Trobiwan": "puna",
    "Basay.Samtiaugiao": "puna",
    "Chinese": "肚臍",
    "English": "navel"
  },
  {
    "Basay.Trobiwan": "tuvu",
    "Basay.Samtiaugiao": "tubu",
    "Chinese": "針, 縫",
    "English": "needle, to sew"
  },
  {
    "Basay.Trobiwan": "siwa",
    "Basay.Samtiaugiao": "siwa",
    "Chinese": "九",
    "English": "nine"
  },
  {
    "Basay.Trobiwan": "tolrus",
    "Basay.Samtiaugiao": "tolusse",
    "Chinese": "喧鬧地",
    "English": "noisily"
  },
  {
    "Basay.Trobiwan": "uttèng",
    "Basay.Samtiaugiao": "teng",
    "Chinese": "中午",
    "English": "noon"
  },
  {
    "Basay.Trobiwan": "?",
    "Basay.Samtiaugiao": "kualaw",
    "Chinese": "沒有",
    "English": "none"
  },
  {
    "Basay.Trobiwan": "yami",
    "Basay.Samtiaugiao": "amis",
    "Chinese": "北方",
    "English": "north"
  },
  {
    "Basay.Trobiwan": "?",
    "Basay.Samtiaugiao": "ngucuce",
    "Chinese": "鼻子",
    "English": "nose"
  },
  {
    "Basay.Trobiwan": "masang",
    "Basay.Samtiaugiao": "masang",
    "Chinese": "往日",
    "English": "old days"
  },
  {
    "Basay.Trobiwan": "vakvaki",
    "Basay.Samtiaugiao": "balakibaki",
    "Chinese": "老人",
    "English": "old man"
  },
  {
    "Basay.Trobiwan": "ca",
    "Basay.Samtiaugiao": "ca",
    "Chinese": "一",
    "English": "one"
  },
  {
    "Basay.Trobiwan": "pasipèn",
    "Basay.Samtiaugiao": "pasepèsepèn",
    "Chinese": "命令",
    "English": "order"
  },
  {
    "Basay.Trobiwan": "kuva",
    "Basay.Samtiaugiao": "kuba",
    "Chinese": "稻田",
    "English": "paddy field"
  },
  {
    "Basay.Trobiwan": "layan",
    "Basay.Samtiaugiao": "balayen",
    "Chinese": "鍋",
    "English": "pan"
  },
  {
    "Basay.Trobiwan": "tau?",
    "Basay.Samtiaugiao": "tau",
    "Chinese": "人",
    "English": "people"
  },
  {
    "Basay.Trobiwan": "vavuy",
    "Basay.Samtiaugiao": "babuy",
    "Chinese": "豬",
    "English": "pig"
  },
  {
    "Basay.Trobiwan": "pucu",
    "Basay.Samtiaugiao": "kapucu",
    "Chinese": "枕頭",
    "English": "pillow"
  },
  {
    "Basay.Trobiwan": "sjana",
    "Basay.Samtiaugiao": "siana",
    "Chinese": "玩",
    "English": "play"
  },
  {
    "Basay.Trobiwan": "?",
    "Basay.Samtiaugiao": "?",
    "Chinese": "鍋",
    "English": "pot"
  },
  {
    "Basay.Trobiwan": "vulru",
    "Basay.Samtiaugiao": "buru",
    "Chinese": "蘿蔔",
    "English": "radish"
  },
  {
    "Basay.Trobiwan": "ulran",
    "Basay.Samtiaugiao": "mulan",
    "Chinese": "雨",
    "English": "rain"
  },
  {
    "Basay.Trobiwan": "muton",
    "Basay.Samtiaugiao": "moton",
    "Chinese": "老鼠",
    "English": "rat, mouse"
  },
  {
    "Basay.Trobiwan": "uay",
    "Basay.Samtiaugiao": "waway",
    "Chinese": "藤",
    "English": "rattan"
  },
  {
    "Basay.Trobiwan": "qmavit",
    "Basay.Samtiaugiao": "habite",
    "Chinese": "收割",
    "English": "reap, harvest"
  },
  {
    "Basay.Trobiwan": "mitimac",
    "Basay.Samtiaugiao": "timasse",
    "Chinese": "剩下",
    "English": "remain, left over"
  },
  {
    "Basay.Trobiwan": "s<um>uman",
    "Basay.Samtiaugiao": "s<um>uman",
    "Chinese": "反覆地",
    "English": "repeatedly"
  },
  {
    "Basay.Trobiwan": "vulac",
    "Basay.Samtiaugiao": "balace",
    "Chinese": "米",
    "English": "rice (husked)"
  },
  {
    "Basay.Trobiwan": "savak",
    "Basay.Samtiaugiao": "sabak",
    "Chinese": "稻",
    "English": "rice (unhusked)"
  },
  {
    "Basay.Trobiwan": "qavi",
    "Basay.Samtiaugiao": "have",
    "Chinese": "米糠",
    "English": "rice bran"
  },
  {
    "Basay.Trobiwan": "ma-ngatu",
    "Basay.Samtiaugiao": "ngatu",
    "Chinese": "收稻",
    "English": "rice harvesting"
  },
  {
    "Basay.Trobiwan": "angalri",
    "Basay.Samtiaugiao": "nangala",
    "Chinese": "富有",
    "English": "rich"
  },
  {
    "Basay.Trobiwan": "cacan",
    "Basay.Samtiaugiao": "cacan",
    "Chinese": "道路",
    "English": "road"
  },
  {
    "Basay.Trobiwan": "mlrevoqqa",
    "Basay.Samtiaugiao": "rebokke",
    "Chinese": "搶奪",
    "English": "rob, snatch away"
  },
  {
    "Basay.Trobiwan": "laliw",
    "Basay.Samtiaugiao": "laliw",
    "Chinese": "跑, 逃跑",
    "English": "run, escape"
  },
  {
    "Basay.Trobiwan": "taas",
    "Basay.Samtiaugiao": "tasse",
    "Chinese": "鹽",
    "English": "salt"
  },
  {
    "Basay.Trobiwan": "talèm",
    "Basay.Samtiaugiao": "talèm",
    "Chinese": "鹹水",
    "English": "salt water"
  },
  {
    "Basay.Trobiwan": "tapèl",
    "Basay.Samtiaugiao": "tapèl*",
    "Chinese": "沙, 土",
    "English": "sand, soil"
  },
  {
    "Basay.Trobiwan": "salrang",
    "Basay.Samtiaugiao": "salang na",
    "Chinese": "樹汁湯",
    "English": "sap soup"
  },
  {
    "Basay.Trobiwan": "sait",
    "Basay.Samtiaugiao": "sayite",
    "Chinese": "剪刀",
    "English": "scissor"
  },
  {
    "Basay.Trobiwan": "qumalu",
    "Basay.Samtiaugiao": "halusse",
    "Chinese": "撈",
    "English": "scoop up"
  },
  {
    "Basay.Trobiwan": "kuskus",
    "Basay.Samtiaugiao": "knuskus",
    "Chinese": "抓, 指甲",
    "English": "scratch, fingernail"
  },
  {
    "Basay.Trobiwan": "kaping",
    "Basay.Samtiaugiao": "kaping",
    "Chinese": "海藻",
    "English": "seaweed"
  },
  {
    "Basay.Trobiwan": "vaciw",
    "Basay.Samtiaugiao": "batshiw",
    "Chinese": "賣",
    "English": "sell"
  },
  {
    "Basay.Trobiwan": "pitu",
    "Basay.Samtiaugiao": "pitu",
    "Chinese": "七",
    "English": "seven"
  },
  {
    "Basay.Trobiwan": "vacal",
    "Basay.Samtiaugiao": "bacat*",
    "Chinese": "船",
    "English": "ship"
  },
  {
    "Basay.Trobiwan": "qaqvating",
    "Basay.Samtiaugiao": "habateng",
    "Chinese": "生病",
    "English": "sick"
  },
  {
    "Basay.Trobiwan": "tamun",
    "Basay.Samtiaugiao": "tamun",
    "Chinese": "小菜",
    "English": "side-dish"
  },
  {
    "Basay.Trobiwan": "nèm",
    "Basay.Samtiaugiao": "anèm",
    "Chinese": "六1",
    "English": "six1"
  },
  {
    "Basay.Trobiwan": "?",
    "Basay.Samtiaugiao": "?",
    "Chinese": "六2",
    "English": "six2"
  },
  {
    "Basay.Trobiwan": "qatalr",
    "Basay.Samtiaugiao": "hatat",
    "Chinese": "邋遢",
    "English": "slovenly"
  },
  {
    "Basay.Trobiwan": "kitut",
    "Basay.Samtiaugiao": "kitud* baute",
    "Chinese": "小",
    "English": "small"
  },
  {
    "Basay.Trobiwan": "mapolrong",
    "Basay.Samtiaugiao": "sapolong",
    "Chinese": "天花",
    "English": "smallpox"
  },
  {
    "Basay.Trobiwan": "s<um>ingut",
    "Basay.Samtiaugiao": "singute",
    "Chinese": "聞",
    "English": "smell (to)"
  },
  {
    "Basay.Trobiwan": "vangsiss",
    "Basay.Samtiaugiao": "bangsisse",
    "Chinese": "芳香",
    "English": "fragrant"
  },
  {
    "Basay.Trobiwan": "kuaku",
    "Basay.Samtiaugiao": "kuwako",
    "Chinese": "煙斗",
    "English": "smoking pipe"
  },
  {
    "Basay.Trobiwan": "moacèng",
    "Basay.Samtiaugiao": "macèngcèng",
    "Chinese": "煙霧",
    "English": "smoky, smoke"
  },
  {
    "Basay.Trobiwan": "vasing",
    "Basay.Samtiaugiao": "basing",
    "Chinese": "打噴嚏",
    "English": "sneeze"
  },
  {
    "Basay.Trobiwan": "tebol",
    "Basay.Samtiaugiao": "tebol*",
    "Chinese": "南方",
    "English": "south"
  },
  {
    "Basay.Trobiwan": "pakaw",
    "Basay.Samtiaugiao": "pakaw",
    "Chinese": "蜘蛛",
    "English": "spider"
  },
  {
    "Basay.Trobiwan": "tapès",
    "Basay.Samtiaugiao": "tapès",
    "Chinese": "吐",
    "English": "spit"
  },
  {
    "Basay.Trobiwan": "cikka",
    "Basay.Samtiaugiao": "cka",
    "Chinese": "刺, 插",
    "English": "stab, stick"
  },
  {
    "Basay.Trobiwan": "macuvun",
    "Basay.Samtiaugiao": "macubun",
    "Chinese": "陡峭, 絆倒",
    "English": "steep, stumble"
  },
  {
    "Basay.Trobiwan": "batu~vatu",
    "Basay.Samtiaugiao": "batu",
    "Chinese": "石頭",
    "English": "stone"
  },
  {
    "Basay.Trobiwan": "siup",
    "Basay.Samtiaugiao": "siupe",
    "Chinese": "暴風",
    "English": "storm"
  },
  {
    "Basay.Trobiwan": "kawas",
    "Basay.Samtiaugiao": "kawakawase",
    "Chinese": "故事",
    "English": "story"
  },
  {
    "Basay.Trobiwan": "lrame",
    "Basay.Samtiaugiao": "lame",
    "Chinese": "稻草",
    "English": "straw"
  },
  {
    "Basay.Trobiwan": "meolat",
    "Basay.Samtiaugiao": "olatte",
    "Chinese": "力量",
    "English": "strength"
  },
  {
    "Basay.Trobiwan": "bakèc~vakèt",
    "Basay.Samtiaugiao": "bakèce",
    "Chinese": "強壯",
    "English": "strong"
  },
  {
    "Basay.Trobiwan": "wanung",
    "Basay.Samtiaugiao": "waneng",
    "Chinese": "糖",
    "English": "sugar"
  },
  {
    "Basay.Trobiwan": "cenal",
    "Basay.Samtiaugiao": "cenal*",
    "Chinese": "太陽, 天空",
    "English": "sun, sky"
  },
  {
    "Basay.Trobiwan": "mlraqo",
    "Basay.Samtiaugiao": "laho",
    "Chinese": "支持",
    "English": "support"
  },
  {
    "Basay.Trobiwan": "nanguy",
    "Basay.Samtiaugiao": "nanuy",
    "Chinese": "游泳",
    "English": "swim"
  },
  {
    "Basay.Trobiwan": "bungcaw",
    "Basay.Samtiaugiao": "bangcaw",
    "Chinese": "牙齒",
    "English": "teeth"
  },
  {
    "Basay.Trobiwan": "klraptaan",
    "Basay.Samtiaugiao": "labatan",
    "Chinese": "十",
    "English": "ten1"
  },
  {
    "Basay.Trobiwan": "?",
    "Basay.Samtiaugiao": "?",
    "Chinese": "十",
    "English": "ten2"
  },
  {
    "Basay.Trobiwan": "cicèn",
    "Basay.Samtiaugiao": "hacecèn",
    "Chinese": "線",
    "English": "thread"
  },
  {
    "Basay.Trobiwan": "ucu",
    "Basay.Samtiaugiao": "cu",
    "Chinese": "三",
    "English": "three"
  },
  {
    "Basay.Trobiwan": "parkatan",
    "Basay.Samtiaugiao": "likatan",
    "Chinese": "門檻",
    "English": "threshold"
  },
  {
    "Basay.Trobiwan": "?",
    "Basay.Samtiaugiao": "pana",
    "Chinese": "丟, 弓箭",
    "English": "throw, bow and arrow"
  },
  {
    "Basay.Trobiwan": "tvan",
    "Basay.Samtiaugiao": "toban",
    "Chinese": "明天",
    "English": "tomorrow"
  },
  {
    "Basay.Trobiwan": "lesaw",
    "Basay.Samtiaugiao": "lesaw",
    "Chinese": "樹, 木頭",
    "English": "tree, wood"
  },
  {
    "Basay.Trobiwan": "pasika",
    "Basay.Samtiaugiao": "pasèkka",
    "Chinese": "試",
    "English": "to try"
  },
  {
    "Basay.Trobiwan": "lusa",
    "Basay.Samtiaugiao": "lusa",
    "Chinese": "二",
    "English": "two"
  },
  {
    "Basay.Trobiwan": "moco",
    "Basay.Samtiaugiao": "moco",
    "Chinese": "二以下",
    "English": "two under"
  },
  {
    "Basay.Trobiwan": "uta",
    "Basay.Samtiaugiao": "uta",
    "Chinese": "嘔吐",
    "English": "vomit"
  },
  {
    "Basay.Trobiwan": "c<um>akay",
    "Basay.Samtiaugiao": "c<um>akacakay",
    "Chinese": "走",
    "English": "walk"
  },
  {
    "Basay.Trobiwan": "tiqul",
    "Basay.Samtiaugiao": "tehol",
    "Chinese": "拐杖",
    "English": "walking stick"
  },
  {
    "Basay.Trobiwan": "rarum?",
    "Basay.Samtiaugiao": "nanom, lanom",
    "Chinese": "水",
    "English": "water"
  },
  {
    "Basay.Trobiwan": "cacin",
    "Basay.Samtiaugiao": "cacin",
    "Chinese": "波浪",
    "English": "wave"
  },
  {
    "Basay.Trobiwan": "micuku",
    "Basay.Samtiaugiao": "c<um>akup",
    "Chinese": "戴斗笠",
    "English": "wear bamboo hat"
  },
  {
    "Basay.Trobiwan": "t<um>angic",
    "Basay.Samtiaugiao": "t<om>angece",
    "Chinese": "哭",
    "English": "weep cry"
  },
  {
    "Basay.Trobiwan": "c<um>acuy",
    "Basay.Samtiaugiao": "cacuy",
    "Chinese": "稱重",
    "English": "weigh"
  },
  {
    "Basay.Trobiwan": "unu",
    "Basay.Samtiaugiao": "unu",
    "Chinese": "什麼",
    "English": "what"
  },
  {
    "Basay.Trobiwan": "kinan",
    "Basay.Samtiaugiao": "kinan",
    "Chinese": "何時",
    "English": "when"
  },
  {
    "Basay.Trobiwan": "inu",
    "Basay.Samtiaugiao": "ainu",
    "Chinese": "去哪裡",
    "English": "where (to)"
  },
  {
    "Basay.Trobiwan": "vate",
    "Basay.Samtiaugiao": "bate",
    "Chinese": "白",
    "English": "white"
  },
  {
    "Basay.Trobiwan": "marpalras",
    "Basay.Samtiaugiao": "palasse",
    "Chinese": "白粉",
    "English": "white powder"
  },
  {
    "Basay.Trobiwan": "vaci, valri",
    "Basay.Samtiaugiao": "baci",
    "Chinese": "風",
    "English": "wind"
  },
  {
    "Basay.Trobiwan": "binai, vinay",
    "Basay.Samtiaugiao": "binan",
    "Chinese": "女性",
    "English": "women, female"
  },
  {
    "Basay.Trobiwan": "t<um>uvan",
    "Basay.Samtiaugiao": "tuman",
    "Chinese": "祭天",
    "English": "worship heaven"
  },
  {
    "Basay.Trobiwan": "suani",
    "Basay.Samtiaugiao": "suani",
    "Chinese": "弟妹",
    "English": "younger sibling"
  }
];

// Function to search and display results
function displayResults() {
  const query = document.getElementById("search-input").value.toLowerCase();
  
  if (!query) {
    document.getElementById("dictionary-list").style.display = "none"; // Hide list if no query
    return;
  }

  const results = basayData.filter(entry =>
    entry["Basay.Trobiwan"].toLowerCase().includes(query) ||
    entry["Basay.Samtiaugiao"].toLowerCase().includes(query) ||
    entry.Chinese.includes(query) ||
    entry.English.toLowerCase().includes(query)
  );

  const resultsDiv = document.getElementById("dictionary-list");
  resultsDiv.innerHTML = ""; // Clear previous results

  results.forEach(entry => {
    const listItem = document.createElement("li");
    listItem.classList.add("result-item");
    listItem.innerHTML = `
      <strong>${entry["Basay.Trobiwan"]}</strong> |
      ${entry["Basay.Samtiaugiao"]} |
      ${entry.Chinese} |
      ${entry.English}
    `;
    listItem.onclick = () => showDetails(entry); // Show details when clicked
    resultsDiv.appendChild(listItem);
  });

  if (results.length === 0) {
    resultsDiv.innerHTML = "<li>No results found.</li>";
  }

  resultsDiv.style.display = "block"; // Show the list only if there are results
}

// Function to show details of a selected word
function showDetails(entry) {
  document.getElementById("dictionary-list").style.display = "none"; // Hide the list
  document.getElementById("detail-view").style.display = "block"; // Show detail view
  
  document.getElementById("detail-basay").textContent = entry["Basay.Trobiwan"];
  document.getElementById("detail-trobiwan").textContent = entry["Basay.Samtiaugiao"];
  document.getElementById("detail-chinese").textContent = entry.Chinese;
  document.getElementById("detail-english").textContent = entry.English;
}

// Function to handle input in the search box
function onSearchInput() {
  document.getElementById("dictionary-list").style.display = "block"; // Show the list when typing
  document.getElementById("detail-view").style.display = "none"; // Hide the detail view
}