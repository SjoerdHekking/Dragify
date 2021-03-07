(function () {
  let prefixChance = 0.05
  let suffixChance = 0.15
  let words = {
    'no you': 'no u',
    'I hate you': 'ihatchu',
    'it is': 'ish',
    'do it': 'doit',
    'do not': 'dun',
    'got to be': 'gotta',
    'that is': 'thas',
    'right now': 'rn',
    'what is': 'wuss',
    'what you': 'wotchu',
    'about it': 'abouddit',
    'sort of': 'sorta',
    spooky: 'spoopy',
    bully: 'bulli',
    you: 'ye',
    no: 'nu',
    yes: 'yush',
    nope: 'nyupe',
    fuk: 'fwick',
    speak: 'speef',
    but: 'buh',
    thief: 'theef',
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
    sure: 'shure',
    complex: 'komplex',
    so: 'sho',
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
    text = replaceAll(text, words)
    // Prefixes
    if (Math.random() < prefixChance) {
      text = `${text} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`
    }
    // Suffixes
    if (Math.random() < suffixChance) {
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
