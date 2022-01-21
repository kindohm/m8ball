const structure1 = {
  pre: ['', '', '', '', '', '', '', '', '', '', 'omg ', 'i dunno, ', 'well, ', 'seems to me that ', 'nope. ',  ],
  quantity: ['loads of', 'lots of', 'many', 'tons of', 'a few', 'barely any', 'no', 'all of the', 'very few', 'I know that', 'some', 'I see', 'I heard', 'i think', 'up north,',
  ],
  subject: ['programmers', 'idiots', 'doctors', 'friends', 'parents', 'kids', 'siblings of mine', 'family members', 'coworkers', 'actors', 'presidents', 'lawyers', 'men', 'guys', 'gals', 'women', 'grandparents', 'managers', 'developers', 'engineers','people', 'people', 'people', 'foreigners', 'testers',
  ],
  doWhat: ['go there', 'chat', 'email', 'surf the web', 'buy online', 'eat it', 'like it', 'play sports', 'sleep on weekends', 'get drunk', 'troll their #target#',
'eat #food#', 'listen', 'pay attention', 'do anything', 'fuck up', 'go insane', 'read', 'drive', 'run', 'go outside', 'stay inside', 'use google',
'use firefox', 'play minecraft', 'drive teslas', 'mine crypto', 'buy crypto',
  ],
  target: ['dogs', 'friends', 'parents', 'coworkers', 'recruiters', 'cats', 'kids',
  ],
  food: ['curry', 'burgers', 'hot dogs', 'pork', 'corn', 'halloween candy', 'sushi', 'pancakes', 'mcdonalds', 'panera', 'soup',
  ],
  whereOrWhen: ['all the time', 'in Home Depot', 'in there', 'out there', 'on vaca', 'while at the Apple store', 'on the internet', 'on the phone', 'through DMs','over email', 'in person', 'in the office', 'in the break area',
  ],
  suffix: ['', ' unless #why# #reason#', ' especially if #why# #reason#', ' but only if #why# #reason#', ' when #why# #reason#', ', and #why# #reason#',
  ],
  why: ['it is for', 'they are trying to get', 'they want', 'they think it is', 'they hate', 'they already have', 'they dont care about', 'they are going for',
  ],
  reason: ['cash', 'a raise', 'a good rate', 'long term', 'remote', 'incentives', 'lunch', 'crypto', 'free meals', 'bitcoin', 'ETH','a 2nd home', 'an apartment', 'a snowboard', 'baby yoda', 'xbox/ps4', 'PC gaming',
  ],
  end: ['', '', '', '', ' lol', ' afaik', ', I guess', ' haha', ' hahaha', ' :heythere:',  ],
  origin: ['#pre##quantity# #subject# #doWhat# #whereOrWhen##suffix##end#', '#pre##subject# #doWhat# #whereOrWhen##suffix##end#',
  ],
};

const structure2 = {
  iaction: ['see', 'dunno', 'dont care', 'dont mind', 'am leaving', 'will see you there', 'dont get it', 'hate this', 'am raging',  ],
  small: ['no', 'yes', 'kk', ':heythere:', 'idk', 'lol', 'LOL', 'math checks out', 'morning', 'mornin', 'check this out:', 'eyyy', 'hey', 'yo', 'guys', ':noooooooo:', 'no', 'yup', ':rekt:',  ],
  origin: ['I #iaction#', '#small#'],
};

const structure3 = {
  thing: ['microsoft', 'msft', 'google', 'apple', 'react', 'angular', 'npm', 'facebook', 'vue', 'javascript', 'js', 'nodejs', 'java', 'Python','amazon', 'aws', 'doordash', 'azure', 'bby', 'TR', 'tesla',  ],
  does: ['sux', 'is so bad', 'is awful', 'is evil', 'is the worst', 'is great imho', 'is great', 'offers a lot', 'is the best for this', 'is the worst for this','will never work', 'never gets it right', 'gets it right', 'got it wrong',  ],
  origin: ['#thing# #does#', '#thing#?', 'what about #thing#?', '#thing# and #thing#',  ],
};

const structure4 = {
  opening: ['have you tried to', 'how bout', 'try to', 'i tried to', 'thats what happens when you', 'they want to', 'the article said to', 'going to','maybe try to', 'i will', 'do not', 'never never never', 'nope.', 'yep',  ],
  verb: ['inject', 'compile', 'test', 'write', 'delete', 'assemble', 'send', 'pipe', 'invoke', 'call',  ],
  article: ['a', 'the'],
  thing: ['function', 'closure', 'variable', 'file', 'stream', 'connection', 'query', 'constant', 'app', 'view', 'page', 'pipeline', 'object','unit test', 'state', 'template', 'server', 'client', 'browser', 'index', 'lookup', 'dependency', 'database', 'table', 'hash','structure', 'tuple',  ],
  adj: ['anonymous', 'static', 'dynamic', 'templated', 'generated', 'pre-compiled', 'cached', 'sanitized', 'validated', 'in-line', 'recursive','normalized', 'indexed', 'pre-optimized',  ],
  combine: ['without', 'into', 'with', 'into', 'with', 'around', 'to', 'along side',  ],
  end: ['', '', '', '', ' ????'],
  origin: ['#opening# #verb# #article# #adj# #thing# #combine# #article# #adj# #thing##end#',
  ],
};

const structure5 = {
  character: ['anakin', 'obiwan', 'vader', 'palpatine', 'the emperor', 'fasma', 'rey', 'han', 'boba fett', 'poe', 'finn',
'chewie', 'leia', 'luke', 'tarkin', 'kylo', 'jabba', 'yoda', 'r2d2', 'bb8', 'padme', '#character# and #character#',  ],
  obj: ['blaster', 'light saber', 'force', 'thermal detonator', 'falcon', 'death star', 'star destroyer', 'x-wing', 'AT-AT', 'ion canon', 'emperor', 'dark side',  ],
  goalverb: ['save', 'kill', 'destroy', 'create an alliance with'],
  goalobj: ['#obj#', 'ewoks', 'film', 'triology', 'cantina scene', 'prequels', 'empire', 'hoth system', 'degobah system', 'jedi council', 'dark side',  ],
  goal: ['#goalverb# the #goalobj#', '#goalverb# #character#'],
  past: ['used the #obj# to #goal#'],
  uhhh: ['should have', 'could have'],
  alternate: ['used as comic relief', 'cast as a strong villian', 're-written as the hero', 'so much better', 'unstoppable with #character#', 'darker', 'more evil', 'less lame',  ],
  origin: [
'#character# #uhhh# #past#', '#character#', '#character# and the #goalobj#', '#character# got the #obj#', '#character# could have been #alternate#',  ],
};

export default [
  structure1,
  structure2,
  structure2,
  structure3,
  structure3,
  structure4,
  structure4,
  structure5,
  structure5,
];
