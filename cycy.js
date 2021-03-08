(function () {
  let prefixChance = 0.05
  let suffixChance = 0.15
  let translate = false
  let words = {
    'no you': 'no u',
    'i hate you': 'ihatchu',
    'it is': 'ish',
    'do it': 'doit',
    'do not': 'dun',
    'got to be': 'gotta',
    'that is': 'thas',
    'right now': 'rn',
    'what is': 'wuss',
    'what you': 'wotchu',
    'want to': 'wanna',
    'about it': 'abouddit',
    'sort of': 'sorta',
    'put it in': 'puddit',
    'kind of': 'kinda',
    easier: 'ezier',
    love: 'lob',
    difference: 'diffurence',
    best: 'besht',
    drawing: 'drawin',
    lewd: 'gutter',
    spooky: 'spoopy',
    mean: 'meen',
    bully: 'bulli',
    you: 'ye',
    no: 'nu',
    yes: 'yush',
    nope: 'nyupe',
    fuk: 'fwick',
    speak: 'speef',
    but: 'buh',
    thief: 'theef',
    because: 'cuz',
    brain: 'bren',
    quick: 'kwik',  
    better: 'beddur',
    of: 'o',
    how: 'hao',
    pretty: 'pweddy',
    your: 'yer',
    write: 'writi',
    hacker: 'haxxer',
    what: 'wot',
    stupid: 'stoopid',
    bad: 'baaaad',
    working: 'workin',
    cute: 'coot',
    best: 'besht',
    problems: 'problims',
    mechanics: 'mechanix',
    easy: 'ez',
    name: 'naem',
    dead: 'ded',
    toothless: 'toofless',
    cuddles: 'cuddls',
    cat: 'kyat',
    know: 'knoe',
    why: 'whai',
    again: 'agin',
    snake: 'snek',
    enough: 'enuff',
    not: 'nyot',
    spider: 'spooder',
    smack: 'smacc',
    many: 'muny',
    favorite: 'fav',
    funnier: 'funner',
    dead: 'ded',
    have: 'hab',
    money: 'monies',
    looking: 'lookin',
    finally: 'phinally',
    dude: 'dood',
    with: 'wiff',
    dudes: 'doods',
    pointing: 'pointin',
    water: 'woter',
    cool: 'coolij',
    hunting: 'huntin',
    everyday: 'evuryday',
    scam: 'scam',
    little: 'liddul',
    dragon: 'dragin',
    trouble: 'trubl',
    friends: 'frens',
    internet: 'internoot',
    life: 'lyf',
    my: 'muh',
    special: 'speshl',
    small: 'smol',
    this: 'dis',
    people: 'peepl',
    talking: 'talkin',
    practising: 'practishing',
    nice: 'noice',
    more: 'moar',
    fight: 'fite',
    hurt: 'hurti',
    want: 'wan',
    sure: 'shure',
    friends: 'frens',
    complex: 'komplex',
    so: 'sho',
    gives: 'gibs',
    anything: 'anyfing',
    breaking: 'breakin',
    vacation: 'vacay',
    logic: 'logick',
    raging: 'ragin',
    mistake: 'mishtake',
    type: 'typi',
    time: 'taim',
    forget: 'forgit',
    back: 'bacc',
    dinner: 'dinnerz',
    using: 'usin',
    computer: 'compootr',
    what: 'wot',
    stuff: 'shtuff',
    epic: 'ebic',
    math: 'maff',
    birthday: 'borfday',
    fuck: 'flork',
    lazy: 'lazey'
  }
  let suffixes = [
    '*snicker snicker*',
    '@.@',
    '*bonkbonkbonk*',
    '>.<',
    '>.>',
    '<.<',
    ':o',
    'silly',
    'grumblemumble',
    'no u',
    '*bonk*',
    'dumdum',
    'lulz',
    '*stonks*',
    '*shiver*',
    '>///<'
  ]
  let prefixes = [
    ':<',
    ':<<<<<',
    '*thunks*',
    '*sniffle*',
    '*heh*',
    'duh',
    'yuck',
    'hecc',
    'squints',
    'psh',
    ':3',
    'hehe'
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
