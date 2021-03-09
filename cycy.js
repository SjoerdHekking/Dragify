(function () {
  let prefixChance = 0.05
  let suffixChance = 0.15
  let translate = false
  let words = {
    'about it': 'abouddit',
    'do it': 'doit',
    'do not': 'dun',
    'got to be': 'gotta',
    'i do not know': 'iunno',
    'i hate you': 'ihatchu',
    'it is': 'ish',
    'kind of': 'kinda',
    'no you': 'no u',
    'put it': 'puddit',
    'right now': 'rn',
    'sort of': 'sorta',
    'that is': 'thas',
    'want to': 'wanna',
    'what is': 'wuss',
    'what you': 'wotchu',
    again: 'agin',
    another: 'nuther',
    anything: 'anyfing',
    back: 'bacc',
    bad: 'baaaad',
    because: 'cuz',
    best: 'besht',
    best: 'besht',
    better: 'beddur',
    birthday: 'borfday',
    boy: 'boi',
    brain: 'bren',
    bravest: 'ballziest',
    breaking: 'breakin',
    bully: 'bulli',
    but: 'buh',
    cat: 'kyat',
    complex: 'komplex',
    computer: 'compootr',
    consume: 'consum',
    cool: 'coolij',
    cuddles: 'cuddls',
    cute: 'coot',
    dead: 'ded',
    dead: 'ded',
    difference: 'diffurence',
    dinner: 'dinnerz',
    dragon: 'dragin',
    drawable: 'drawabul',
    drawing: 'drawin',
    dude: 'dood',
    dudes: 'doods',
    easier: 'ezier',
    easy: 'ez',
    enough: 'enuff',
    epic: 'ebic',
    every: 'evury',
    everyday: 'evuryday',
    favorite: 'fav',
    fight: 'fite',
    finally: 'phinally',
    forget: 'forgit',
    friends: 'frens',
    friends: 'frens',
    fuck: 'flork',
    fuk: 'fwick',
    fun: 'phun',
    funnier: 'funner',
    gives: 'gibs',
    hacker: 'haxxer',
    have: 'hab',
    helps: 'halps',
    how: 'hao',
    hunting: 'huntin',
    hurt: 'hurti',
    internet: 'internoot',
    instant: 'insta',
    joke: 'jox',
    know: 'knoe',
    lazy: 'lazey',
    lewd: 'gutter',
    life: 'lyf',
    little: 'liddul',
    logic: 'logick',
    lol: 'lulz',
    looking: 'lookin',
    love: 'lob',
    many: 'muny',
    math: 'maff',
    mean: 'meen',
    mechanics: 'mechanix',
    mistake: 'mishtake',
    money: 'monies',
    monkey: 'monke',
    more: 'moar',
    movie: 'moveh',
    my: 'muh',
    name: 'naem',
    nice: 'noice',
    no: 'nu',
    nope: 'nyupe',
    not: 'nyot',
    now: 'noa',
    of: 'o',
    people: 'peepl',
    pointing: 'pointin',
    practising: 'practishing',
    pretty: 'pweddy',
    problems: 'problims',
    quick: 'kwik',  
    quicker: 'kwikker',
    raging: 'ragin',
    scam: 'scam',
    see: 'shee',
    smack: 'smacc',
    small: 'smol',
    snake: 'snek',
    so: 'sho',
    speak: 'speef',
    special: 'speshl',
    spider: 'spooder',
    spiderman: 'spooderman',
    spooky: 'spoopy',
    story: 'storee',
    stuff: 'shtuff',
    stupid: 'stoopid',
    sure: 'shure',
    talking: 'talkin',
    thief: 'theef',
    this: 'dis',
    time: 'taim',
    toothless: 'toofless',
    trouble: 'trubl',
    type: 'typi',
    using: 'usin',
    vacation: 'vacay',
    want: 'wan',
    water: 'woter',
    what: 'wot',
    what: 'wot',
    why: 'whai',
    with: 'wiff',
    working: 'workin',
    write: 'writi',
    yes: 'yush',
    videos: 'vidyos',
    you: 'ye',
    you: 'yu',
    your: 'yer'
  }
  let suffixes = [
    ':o',
    '@.@',
    '*bonk*',
    '*bonkbonkbonk*',
    '*shiver*',
    '*snicker snicker*',
    '*stonks*',
    '<.<',
    '>.<',
    '>.>',
    '>///<',
    'dumdum',
    'grumblemumble',
    'lulz',
    'no u',
    'silly'
  ]
  let prefixes = [
    ':<',
    ':<<<<<',
    ':3',
    '*heh*',
    '*sniffle*',
    '*thunks*',
    'duh',
    'hecc',
    'hehe',
    'psh',
    'squints',
    'yuck'
  ]

  function swap(json){
	if (translate == true) {
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
  }
  else
  	return words;
}

  function replaceAll (text, map) {
    let source = Object.keys(map).map(i => `\\b${i}\\b`)
    let re = new RegExp(`(?:${source.join(')|(?:')})`, 'gi')
    return text.replace(re, match => {
      let out = map[match.toLowerCase()]
      if ((match.match(/[A-Z]/g) || []).length > match.length / 2) out = out.toUpperCase()
      return out
    })
  }

  function dragify (text) {
    text = replaceAll(text, swap(words))
    // Prefixes
    if ((Math.random() < prefixChance) && (translate == false)) {
      text = `${text} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`
    }
    // Suffixes
    if ((Math.random() < suffixChance) && (translate == false)) {
      text = `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${text}`
    }
    return text
  }

  function recurse (node) {
    if (['STYLE', 'SCRIPT', 'NOSCRIPT', 'IFRAME', 'OBJECT'].includes(node.tagName)) return
    for (let child of node.childNodes) {
      recurse(child)
    }
    if (node.nodeType === 3 && node.nodeValue != null) {
      node.nodeValue = dragify(node.nodeValue)
    }
  }

  document.body.addEventListener('DOMNodeInserted', event => {
    recurse(event.target)
  })
  recurse(document.body)
})()