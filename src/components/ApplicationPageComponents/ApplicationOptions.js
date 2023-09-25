/*
This file contains the options for certain application questions which require them.
The questions they each apply to are indicated above their variable name.
*/

// Question: Ethnicity.
const ethnicities = [
  'Asian Indian',
  'East Asian',
  'Guamanian / Chamorro',
  'Black / African',
  'Middle Eastern',
  'Native Hawaiian',
  'Hispanic / Latino / Spanish Origin',
  'Native American / Alaskan Native',
  'White',
  'Pacific Islander',
];

// Question: Gender.
const genders = [
  'Man',
  'Woman',
  'Binary',
  'Non-Binary',
  'Prefer not to self-describe',
  'Prefer not to disclose',
  'Others',
];

// Question: Pronouns.
const pronouns = [
  'He / Him / His',
  'She / Her / Hers',
  'They / Them / Theirs',
  'Others',
];

// Question: American State.
const states = [
  'Outside US',
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

// Question: Country.
const countries = [
  'Afghanistan',
  'Åland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Congo, Democratic Republic of the',
  'Cook Islands',
  'Costa Rica',
  "Côte d'Ivoire",
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (Malvinas)',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (Democratic People's Republic of)",
  'Korea, Republic of',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova, Republic of',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'North Macedonia',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Réunion',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom of Great Britain and Northern Ireland',
  'United States of America',
  'United States Minor Outlying Islands',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Vietnam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

// Question: Major.
const majors = [
  'Computer Science / Computer Engineering / Software Engineering',
  'Non-Computer Engineering (Electrical / Mechanical etc.)',
  'Information Systems / Information Technology / System Administration',
  'Natural Sciences',
  'Mathematics / Statistics',
  'Business Discipline',
  'Humanities',
  'Social Sciences',
  'Fine / Performing Arts',
  'Health Sciences',
  'Undecided / No Major',
  'Other',
  'Prefer not to specify',
];

// Question: Current Education Level.
const educationLevels = [
  'Undergraduate Student',
  'Graduate Student',
  'Post Doctorate',
  'Secondary / High School',
  'Code School / Bootcamp',
  'Vocational / Trade Program or Apprenticeship',
  'Other',
  "I'm not currently a student",
  'Prefer not to answer',
];

const sleepAccomodations = ['yes', 'no', 'maybe'];

const programmingList = [
  'A# .NET',
  'A# (Axiom)',
  'A-0 System',
  'A+',
  'A++',
  'ABAP',
  'ABC',
  'ABC ALGOL',
  'ABLE',
  'ABSET',
  'ABSYS',
  'ACC',
  'Accent',
  'Ace DASL',
  'ACL2',
  'ACT-III',
  'Action!',
  'ActionScript',
  'Ada',
  'Adenine',
  'Agda',
  'Agilent VEE',
  'Agora',
  'AIMMS',
  'Alef',
  'ALF',
  'ALGOL 58',
  'ALGOL 60',
  'ALGOL 68',
  'ALGOL W',
  'Alice',
  'Alma-0',
  'AmbientTalk',
  'Amiga E',
  'AMOS',
  'AMPL',
  'Angular',
  'APL',
  "App Inventor for Android's visual block language",
  'AppleScript',
  'Arc',
  'ARexx',
  'Argus',
  'AspectJ',
  'Assembly language',
  'ATS',
  'Ateji PX',
  'AutoHotkey',
  'Autocoder',
  'AutoIt',
  'AutoLISP / Visual LISP',
  'Averest',
  'AWK',
  'Axum',
  'B',
  'Babbage',
  'Bash',
  'BASIC',
  'bc',
  'BCPL',
  'BeanShell',
  'Batch (Windows/Dos)',
  'Bertrand',
  'BETA',
  'Bigwig',
  'Bistro',
  'BitC',
  'BLISS',
  'Blue',
  'Bon',
  'Boo',
  'Boomerang',
  'Bootstrap',
  'Bourne shell',
  'bash',
  'ksh',
  'BREW',
  'BPEL',
  'C',
  'C--',
  'C++',
  'C#',
  'C/AL',
  'Caché ObjectScript',
  'C Shell',
  'Caml',
  'Candle',
  'Cayenne',
  'CDuce',
  'Cecil',
  'Cel',
  'Cesil',
  'Ceylon',
  'CFEngine',
  'CFML',
  'Cg',
  'Ch',
  'Chapel',
  'CHAIN',
  'Charity',
  'Charm',
  'Chef',
  'CHILL',
  'CHIP-8',
  'chomski',
  'ChucK',
  'CICS',
  'Cilk',
  'CL',
  'Claire',
  'Clarion',
  'Clean',
  'Clipper',
  'CLIST',
  'Clojure',
  'CLU',
  'CMS-2',
  'COBOL',
  'Cobra',
  'CODE',
  'CoffeeScript',
  'Cola',
  'ColdC',
  'ColdFusion',
  'COMAL',
  'Combined Programming Language',
  'COMIT',
  'Common Intermediate Language',
  'Common Lisp',
  'COMPASS',
  'Component Pascal',
  'Constraint Handling Rules',
  'Converge',
  'Cool',
  'Coq',
  'Coral 66',
  'Corn',
  'CorVision',
  'COWSEL',
  'CPL',
  'csh',
  'CSP',
  'CSS',
  'Csound',
  'CUDA',
  'Curl',
  'Curry',
  'Cyclone',
  'Cython',
  'D',
  'DASL',
  'Dask',
  'Dart',
  'DataFlex',
  'Datalog',
  'DATATRIEVE',
  'dBase',
  'dc',
  'DCL',
  'Deesel',
  'Delphi',
  'DCL',
  'DinkC',
  'DIBOL',
  'Django',
  'Dog',
  'Draco',
  'DRAKON',
  'Dylan',
  'DYNAMO',
  'E',
  'E#',
  'Ease',
  'Easy PL/I',
  'Easy Programming Language',
  'EASYTRIEVE PLUS',
  'ECMAScript',
  'Edinburgh IMP',
  'EGL',
  'Eiffel',
  'ELAN',
  'Elixir',
  'Elm',
  'Emacs Lisp',
  'Emerald',
  'Epigram',
  'EPL',
  'Erlang',
  'es',
  'Escapade',
  'Escher',
  'ESPOL',
  'Esterel',
  'Etoys',
  'Euclid',
  'Euler',
  'Euphoria',
  'EusLisp Robot Programming Language',
  'CMS EXEC',
  'EXEC 2',
  'Executable UML',
  'Express.js',
  'F',
  'F#',
  'Factor',
  'Falcon',
  'Fancy',
  'Fantom',
  'FAUST',
  'Felix',
  'Ferite',
  'FFP',
  'Firebase',
  'Fjölnir',
  'FL',
  'Flask',
  'Flavors',
  'Flex',
  'FLOW-MATIC',
  'FOCAL',
  'FOCUS',
  'FOIL',
  'FORMAC',
  '@Formula',
  'Forth',
  'Fortran',
  'Fortress',
  'FoxBase',
  'FoxPro',
  'FP',
  'FPr',
  'Franz Lisp',
  'F-Script',
  'FSProg',
  'G',
  'Google Apps Script',
  'Game Maker Language',
  'GameMonkey Script',
  'GAMS',
  'GAP',
  'G-code',
  'Genie',
  'GDL',
  'Gibiane',
  'GJ',
  'GEORGE',
  'GLSL',
  'GNU E',
  'GM',
  'Go',
  'Go!',
  'GOAL',
  'Gödel',
  'Godiva',
  'GOM (Good Old Mad)',
  'Goo',
  'Gosu',
  'GOTRAN',
  'GPSS',
  'GraphTalk',
  'GRASS',
  'Groovy',
  'Hadoop',
  'Hack (programming language)',
  'HAL/S',
  'Hamilton C shell',
  'Harbour',
  'Hartmann pipelines',
  'Haskell',
  'Haxe',
  'High Level Assembly',
  'Hive',
  'HLSL',
  'Hop',
  'Hope',
  'HTML',
  'Hugo',
  'Hume',
  'HyperTalk',
  'IBM Basic assembly language',
  'IBM HAScript',
  'IBM Informix-4GL',
  'IBM RPG',
  'ICI',
  'Icon',
  'Id',
  'IDL',
  'Idris',
  'IMP',
  'Inform',
  'Io',
  'Ioke',
  'IPL',
  'IPTSCRAE',
  'ISLISP',
  'ISPF',
  'ISWIM',
  'J',
  'J#',
  'J++',
  'JADE',
  'Jako',
  'JAL',
  'Janus',
  'JASS',
  'Java',
  'JavaScript',
  'JCL',
  'JEAN',
  'Join Java',
  'JOSS',
  'Joule',
  'JOVIAL',
  'Joy',
  'JQuery',
  'JScript',
  'JScript .NET',
  'JavaFX Script',
  'Julia',
  'Jython',
  'K',
  'Kaleidoscope',
  'Karel',
  'Karel++',
  'KEE',
  'Kixtart',
  'KIF',
  'Kojo',
  'Kotlin',
  'KRC',
  'KRL',
  'KUKA',
  'KRYPTON',
  'ksh',
  'L',
  'L# .NET',
  'LabVIEW',
  'Ladder',
  'Lagoona',
  'LANSA',
  'Lasso',
  'LaTeX',
  'Lava',
  'LC-3',
  'Leda',
  'Legoscript',
  'LIL',
  'LilyPond',
  'Limbo',
  'Limnor',
  'LINC',
  'Lingo',
  'Linoleum',
  'LIS',
  'LISA',
  'Lisaac',
  'Lisp',
  'Lite-C',
  'Lithe',
  'Little b',
  'Logo',
  'Logtalk',
  'LPC',
  'LSE',
  'LSL',
  'LiveCode',
  'LiveScript',
  'Lua',
  'Lucid',
  'Lustre',
  'LYaPAS',
  'Lynx',
  'M2001',
  'M4',
  'Machine code',
  'MAD',
  'MAD/I',
  'Magik',
  'Magma',
  'make',
  'Maple',
  'MAPPER',
  'MARK-IV',
  'Mary',
  'MASM Microsoft Assembly x86',
  'Mathematica',
  'MATLAB',
  'Maxima',
  'Macsyma',
  'Max',
  'MaxScript',
  'Maya (MEL)',
  'MDL',
  'Mercury',
  'Mesa',
  'Metacard',
  'Metafont',
  'MetaL',
  'Microcode',
  'MicroScript',
  'Microsoft SQL Server',
  'MIIS',
  'MillScript',
  'MIMIC',
  'Mirah',
  'Miranda',
  'MIVA Script',
  'ML',
  'Moby',
  'Model 204',
  'Modelica',
  'Modula',
  'Modula-2',
  'Modula-3',
  'Mohol',
  'MongoDB',
  'MOO',
  'Mortran',
  'Mouse',
  'MPD',
  'CIL',
  'MSL',
  'MUMPS',
  'MySQL',
  'NASM',
  'NATURAL',
  'Napier88',
  'Neko',
  'Nemerle',
  'nesC',
  'NESL',
  'Net.Data',
  'NetLogo',
  'NetRexx',
  'NewLISP',
  'NEWP',
  'Newspeak',
  'NewtonScript',
  'NGL',
  'Nial',
  'Nice',
  'Nickle',
  'Node.js',
  'NoSQL',
  'NPL',
  'Not eXactly C',
  'Not Quite C',
  'NSIS',
  'Nu',
  'Numpy',
  'NWScript',
  'NXT-G',
  'o:XML',
  'Oak',
  'Oberon',
  'Obix',
  'OBJ2',
  'Object Lisp',
  'ObjectLOGO',
  'Object REXX',
  'Object Pascal',
  'Objective-C',
  'Objective-J',
  'Obliq',
  'Obol',
  'OCaml',
  'occam',
  'occam-π',
  'Octave',
  'OmniMark',
  'Onyx',
  'Opa',
  'Opal',
  'OpenCL',
  'OpenEdge ABL',
  'OPL',
  'OPS5',
  'OptimJ',
  'Oracle',
  'Orc',
  'ORCA/Modula-2',
  'Oriel',
  'Orwell',
  'Oxygene',
  'Oz',
  'P#',
  'Pandas',
  'ParaSail (programming language)',
  'PARI/GP',
  'Pascal',
  'Pawn',
  'PCASTL',
  'PCF',
  'PEARL',
  'PeopleCode',
  'Perl',
  'PDL',
  'PHP',
  'Phrogram',
  'Pico',
  'Picolisp',
  'Pict',
  'Pike',
  'PIKT',
  'PILOT',
  'Pipelines',
  'Pizza',
  'PL-11',
  'PL/0',
  'PL/B',
  'PL/C',
  'PL/I',
  'PL/M',
  'PL/P',
  'PL/SQL',
  'PL360',
  'PLANC',
  'Plankalkül',
  'Planner',
  'PLEX',
  'PLEXIL',
  'Plus',
  'POP-11',
  'PostgresSQL',
  'PostScript',
  'PortablE',
  'Powerhouse',
  'PowerBuilder',
  'PowerShell',
  'PPL',
  'Presto',
  'Processing',
  'Processing.js',
  'Prograph',
  'PROIV',
  'Prolog',
  'PROMAL',
  'Promela',
  'PROSE modeling language',
  'PROTEL',
  'ProvideX',
  'Pro*C',
  'Pure',
  'Python',
  'PyTorch',
  'Q (equational programming language)',
  'Q (programming language from Kx Systems)',
  'Qalb',
  'Qi',
  'QtScript',
  'QuakeC',
  'QPL',
  'R',
  'R++',
  'Racket',
  'RAPID',
  'Rapira',
  'Ratfiv',
  'Ratfor',
  'Ray',
  'rc',
  'React',
  'REBOL',
  'Red',
  'Redcode',
  'REFAL',
  'Reia',
  'Revolution',
  'rex',
  'REXX',
  'Rlab',
  'RobotC',
  'ROOP',
  'RPG',
  'RPL',
  'RSL',
  'RTL/2',
  'Ruby',
  'RuneScript',
  'Rust',
  'S',
  'S2',
  'S3',
  'S-Lang',
  'S-PLUS',
  'SA-C',
  'SabreTalk',
  'SAIL',
  'SALSA',
  'SAM76',
  'SAS',
  'SASL',
  'Sather',
  'Sawzall',
  'SBL',
  'Scala',
  'Scheme',
  'Scilab',
  'Scikit',
  'Scratch',
  'Script.NET',
  'Sed',
  'Seed7',
  'Self',
  'SenseTalk',
  'SequenceL',
  'SETL',
  'Shift Script',
  'SIMPOL',
  'Shakespeare',
  'SIGNAL',
  'SiMPLE',
  'SIMSCRIPT',
  'Simula',
  'Simulink',
  'SISAL',
  'SLIP',
  'SMALL',
  'Smalltalk',
  'Small Basic',
  'SML',
  'Snap!',
  'SNOBOL',
  'SPITBOL',
  'Snowball',
  'SOL',
  'Span',
  'SPARK',
  'SPIN',
  'SP/k',
  'Splunk',
  'SPS',
  'SQL',
  'SQL Lite',
  'Squeak',
  'Squirrel',
  'SR',
  'S/SL',
  'Stackless Python',
  'Starlogo',
  'Strand',
  'Stata',
  'Stateflow',
  'Subtext',
  'SuperCollider',
  'SuperTalk',
  'Swift (Apple programming language)',
  'Swift (parallel scripting language)',
  'SYMPL',
  'SyncCharts',
  'SystemVerilog',
  'T',
  'TACL',
  'TACPOL',
  'TADS',
  'TAL',
  'Tcl',
  'Tea',
  'TECO',
  'TELCOMP',
  'TensorFlow',
  'TeX',
  'TEX',
  'TIE',
  'Timber',
  'TMG',
  'Tom',
  'TOM',
  'Topspeed',
  'TPU',
  'Trac',
  'TTM',
  'T-SQL',
  'TTCN',
  'Turing',
  'TUTOR',
  'TXL',
  'TypeScript',
  'Turbo C++',
  'Ubercode',
  'UCSD Pascal',
  'Umple',
  'Unicon',
  'Uniface',
  'UNITY',
  'Unix shell',
  'UnrealScript',
  'Vala',
  'VBA',
  'VBScript',
  'Verilog',
  'VHDL',
  'Visual Basic',
  'Visual Basic .NET',
  'Visual DataFlex',
  'Visual DialogScript',
  'Visual Fortran',
  'Visual FoxPro',
  'Visual J++',
  'Visual J#',
  'Visual Objects',
  'Visual Prolog',
  'VSXu',
  'Vue',
  'Vvvv',
  'WATFIV, WATFOR',
  'WebDNA',
  'WebQL',
  'Windows PowerShell',
  'Winbatch',
  'Wolfram',
  'Wyvern',
  'X++',
  'X#',
  'X10',
  'XBL',
  'XC',
  'XMOS architecture',
  'xHarbour',
  'XL',
  'Xojo',
  'XOTcl',
  'XPL',
  'XPL0',
  'XQuery',
  'XSB',
  'XSLT',
  'XPath',
  'Xtend',
  'Yorick',
  'YQL',
  'Z notation',
  'Zeno',
  'ZOPL',
  'ZPL',
];

const shirtSizes = ['XS', 'S', 'M', 'L', 'XL'];

export {
  ethnicities,
  genders,
  pronouns,
  states,
  countries,
  majors,
  educationLevels,
  sleepAccomodations,
  programmingList,
  shirtSizes,
};
