(function () {
  let prefixChance = 0.05
  let suffixChance = 0.15
  let words = {
    spooky: 'spoopy',
    bully: 'bulli',
    you: 'ye',
    no: 'nu',
    "I hate you": 'ihatchu',
    yes: 'yush',
    nope: 'nyupe',
    fuk: 'fwick',
    speak: 'speef',
    but: 'buh',
    better: 'beddur',
    of: 'o',
    "no you": 'no u',
    pretty: 'pweddy',
    "it is": 'ish',
    what: 'wot',
    stupid: 'stoopid',
    bad: 'baaaad',
    cute: 'coot',
    best: 'besht',
    again: 'agin',
    "do it": 'doit',
    snake: 'snek',
    enough: 'enuff',
    not: 'nyot',
    "got to be": 'gotta',
    "right now": 'rn',
    spider: 'spooder',
    "that is": 'thas',
    smack: 'smacc',
    many: 'muny',
    "what is": 'wuss',
    favorite: 'fav',
    funnier: 'funner',
    dead: 'ded',
    have: 'hab',
    money: 'monies',
    looking: 'lookin',
    finally: 'phinally',
    dude: 'dood',
    dudes: 'doods',
    cool: 'coolij',
    little: 'liddul',
    dragon: 'dragin',
    trouble: 'trubl',
    "what you": 'wotchu',
    friends: 'frens',
    internet: 'internoot',
    life: 'lyf',
    my: 'muh',
    special: 'speshl',
    small: 'smol',
    this: 'dis',
    people: 'peepl',
    "sort of": 'sorta',
    talking: 'talkin',
    practising: 'practishing',
    nice: 'noice',
    more: 'moar',
    sure: 'shure',
    complex: 'komplex',
    type: 'typi',
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
    '*bonk*',
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
    'hecc',
    'hehe'
  ]

  function replaceAll (text, map) {
    let source = Object.keys(map).map(i => `\\b${i}`)
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
