// Data entries
const gamesEntries = [
  {
    title: "Fifa 19", // Game title (name)
    year: "2018", // Year when game was released
    cover: "Fifa.jpg", // Example: cover-art.jpg
    songs: [
      {
        title: "1,000 Opera Singers Working In Starbucks",
        artist: "Wovoka Gentle",
        album: "1,000 Opera Singers Working In Starbucks",
        genre: "Rock",
        youtube:"fPROPYav1dQ"
      },
      {
        title: "Another Level",
        artist: "Crystal Fighters",
        album: "Gaia & Friends",
        genre: "Pop",
        youtube:"20hZSo0k_gM"
      },
      {
        title: "Beat 54 (All Good Now)",
        artist: "Jungle",
        album: "For Ever",
        genre: "Disco",
       youtube :"SetClFl10cQ"
      },
      {
        title: 'Beautiful People',
        artist: 'Andreya Triana',
        album: 'Life in Colour',
        genre: 'Pop',
        youtube:"dEsOTfcT3H8"
      },
      {
        title:"Big Dreams",
        artist:"Bakar",
        album:"Badkid",
        genre:"Indie",
        youtube: "2TasEMbkFHY"
      },
      {
        title:"Blue Light",
        artist:"SUN SILVA",
        album:"Silhouettes (Acoustic)",
        genre:"Pop",
        youtube:"GWPJs0tur-0"
      },
      {
        title:"Border Girl",
        artist:"Young fathers",
        album:"Cocoa Sugar",
        genre:"Indie",
        youtube: "6FDE09tjdFU"
      },
      {
        title:"City Looks Pretty",
        artist:"Courtney Barnett",
        album:"Tell Me How You Really Feel",
        genre:"Alternative/Indie",
        youtube:"42XXZvrnHbM"
      },
      {
        title:"Consistent",
        artist:"No/Me",
        album:"Consistent",
        genre:"Alternative/Indie",
        youtube:"LD6w8tj0Uyo"
      },
      {
        title:"Drama",
        artist:"NoMBe (Feat. Big Data)",
        album:"They Might've Even Loved Me",
        genre:"Alternative/Indie",
        youtube:"EJ1YhZ2fUZE"
      },
      {
        title:"Everytime I Run (feat. MEI & Count Counsellor)",
        artist:"Husky Loops",
        album:"Spool",
        genre:"Rock",
        youtube:"1eQGbWJzbH4"
      },
      {
        title:"Feels Like Summer",
        artist:"Childish Gambino",
        album:"Summer Pack",
        genre:"R&B/Soul",
        youtube:"F1B9Fk_SgI0"
      },
      {
        title:"Genius",
        artist:"LSD (Feat. Labrinth, Sia & Diplo)",
        album:"LSD",
        genre:"Pop",
        youtube:"HhoATZ1Imtw"
      },
      {
        title:"Gold Rush",
        artist:"Death Cab For Cutie",
        album:"Thank You for Today",
        genre:"Alternative/Indie",
        youtube:"XTPZWG5eLf8"
      },
      {
        title:"Good To Be Home",
        artist:"Tom Misch (Feat. Loyle Carner, Barney Artist, Rebel Kleff)",
        album:"Good to Be Home",
        genre:"Hip-Hop/Rap",
        youtube:"HAaOF2fKyS4"
      },
      {
        title:"Habibi",
        artist:"Ghali",
        album:"",
        genre:"Album",
        youtube:"fgt6luBwzz0"
      },
      {
        title:"Heaven Only Knows",
        artist:"Bob Moses",
        album:"Back Down",
        genre:"Dance/Electronic",
        youtube:"xjt6tZmuoWM"
      },
      {
        title:"Island Life",
        artist:"Atomic Drum Assembly",
        album:"Atomic Drum Assembly",
        genre:"Pop",
        youtube:"la8GsFcKvps"
      },
      {
        title:"It Makes You Forget (Itgehane)",
        artist:"Peggy Gou",
        album:"Defected Radio Episode 090 (hosted by Sam Divine)",
        genre:"Dance/Electronic",
        youtube:"SlbVgjFvE3I"
      },
      {
        title:"It's Not This",
        artist:"Bearson (Feat. Lemaitre and Josh Pan)",
        album:"It's Not This",
        genre:"Dance/Electronic",
        youtube:"UlOxYLHBT7A"
      },
      {
        title:"Jackie Chan",
        artist:"Bantu & Dr. Chaii",
        album:"Jackie Chan",
        genre:"Pop",
        youtube:"OEb7Rh-yknQ"
      },
      {
        title:"Lightning",
        artist:"Octavian",
        album:"Spaceman",
        genre:"Hip-Hop/Rap",
        youtube:"6dlN37kvY80"
      },
      {
        title:"Losing You (Baio Remix)",
        artist:"Gizmo Varillas & Baio",
        album:"(Single)",
        genre:"Dance",
        youtube:"cnz5fEHsFNw"
      },
      {
        title:"Love Ain’t Enough",
        artist:"Jacob Banks",
        album:"Village",
        genre:"R&B/Soul",
        youtube:"57YOevCrFrQ"
      },
      {
        title:"Musika",
        artist:"Yolanda Be Cool (Feat. Kwanzaa Posse)",
        album:"Musika",
        genre:"Dance/Electronic",
        youtube:"rixlQd0lbFc"
      },
      {
        title:"Ordinary People",
        artist:"Bugzy Malone (Feat. JP Cooper)",
        album:"B. Inspired",
        genre:"Grime/Hip-Hop",
        youtube:"7gKgb_Hhmao"
      },
      {
        title:"Out The Window",
        artist:"Confidence Man",
        album:"Confident Music for Confident People",
        genre:"Alternative/Indie",
        youtube:"XQGwjhDANVA"
      },
      {
        title:"Pa’lante",
        artist:"Lao Ra",
        album:"Pa'lante",
        genre:"Pop",
        youtube:"FGzIAaR0V_s"
      },
      {
        title:"Peach",
        artist:"Broods",
        album:"Don't Feed the Pop Monster",
        genre:"Alternative/Indie, Pop",
        youtube:"Eiht451O8fM"
      },
      {
        title:"Play God",
        artist:"Sam Fender",
        album:"Hypersonic Missiles",
        genre:"Singer-Songwriter",
        youtube:"L12ORqw6R7A"
      },
      {
        title:"Pockets",
        artist:"Easy Life",
        album:"Creature Habits Mixtape",
        genre:"Alternative/Indie",
        youtube:"oeFq3Sta6bY"
      },
      {
        title:"Sorcererz",
        artist:"Gorillaz",
        album:"The Now Now",
        genre:"Alternative/Indie",
        youtube:"40xG4bMr9F4"
      },
      {
        title:"Porro Maracatu (TOY SELECTAH Remix)",
        artist:"LADAMA",
        album:"Porro Maracatu (TOY SELECTAH Remix)",
        genre:"Rock/Alternative",
        youtube:"g9v9vnoyZdM"
      },
      {
        title:"Sway",
        artist:"Tove Styrke",
        album:"Sway",
        genre:"Pop",
        youtube:"bGSNZ7QAoK4"
      },
      {
        title:"Take It Easy",
        artist:"BC Unidos (Feat. U.S. Girls and Ledinsky)",
        album:"(single)",
        genre:"Pop",
        youtube:"8TTCe9Abppk"
      },
      {
        title:"Tom & Jerry",
        artist:"Ocean Wisdom",
        album:"Wizville",
        genre:"Hip-Hop/Rap",
        youtube:"tiZxDEXwxUA"
      },
      {
        title:"Top Boy",
        artist:"Eyez",
        album:"Square One",
        genre:"Hip-Hop/Rap",
        youtube:"0AXhLFMe-Ow"
      },
      {
        title:"Tribe",
        artist:"Bas & J. Cole",
        album:"Milky Way",
        genre:"Hip-Hop/Rap",
        youtube:"OA8aw07dpg0"
      },
      {
        title:"Truth Is",
        artist:"Stealth",
        album:"Chorus EP",
        genre:"Alternative/Indie",
        youtube:"yPB-Sgkc6CA"
      },
      {
        title:"Violet City",
        artist:"Mansionair",
        album:"Shadowboxer",
        genre:"Alternative/Indie",
        youtube:"SNwoPlVqw2Q"
      },
      {
        title:"Warm It Up",
        artist:"Logic (Feat. Young Sinatra)",
        album:"Bobby Tarantino II",
        genre:"Hip-Hop/Rap",
        youtube:"jBnXPwvr0u4"
      },
      {
        title:"Water",
        artist:"Kojey Radical, Mahalia & Swindle",
        album:"Water",
        genre:"R&B/Soul",
        youtube:"J_lY8z2l_8E"
      },
      {
        title:"Where No One Knows Your Name",
        artist:"Stereo Honey",
        album:"Where No One Knows Your Name",
        genre:"Alternative/Indie",
        youtube:"5D6ojB-lLw4"
      },
      {
        title:"you should see me in a crown",
        artist:"Billie Eilish",
        album:"WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
        genre:"Alternative/Indie",
        youtube:"Ah0Ys50CqO8"
      },
      {
        title:"",
        artist:"",
        album:"",
        genre:"",
        youtube:""
      },
      {
        title:"",
        artist:"",
        album:"",
        genre:"",
        youtube:""
      },
     

    ]
  },
  {
    title: "Need for Speed",
    year: "2015",
    cover: "Need_for_Speed_2015.jpg",
    songs: [
      {
        title: "Push It (Feat. Pusha T)",
        artist: "iSHi",
        album: "(single)",
        genre: "Trap",
        youtube: "VkTJC4A_TtM"
      },
      {
        title: "Insignia",
        artist: "Muzzy",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "P5LVaGvat7A"
      },
      {
        title: "Vikings",
        artist: "Botnek",
        album: "Need for Speed (2015)",
        genre: "Electro House",
        youtube: "ecIvEiEVx8Y"
      },
      {
        title: "Lose Ya Love",
        artist: "Kill The Noise",
        album: "Occult Classic",
        genre: "Eurotrapbeat",
        youtube: "kbNIF2RPG_c"
      },
      {
        title: "Break Yourself",
        artist: "Hook N Sling",
        album: "We Are Your Friends (Music From The Original Motion Picture)",
        genre: "Electronica",
        youtube: "xw110Qt2JsE"
      },
      {
        title: "Rattlesnake",
        artist: "Rogue",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "x0E39ug6t70"
      },
      {
        title: "Rio",
        artist: "Netsky",
        album: "3",
        genre: "Dance/Electronic",
        youtube: "qFDP9egTwfM"
      },
      {
        title: "Turn Up",
        artist: "Wolfgang Gartner",
        album: "10 Ways to Steal Home Plate",
        genre: "Dance/Electronic",
        youtube: "Vwb-77guWXI"
      },
      {
        title: "Kokayne (Video Games Clean)",
        artist: "Riff Raff",
        album: "(single)",
        genre: "Rap",
        youtube: "DAnOBWqrOpw"
      },
      {
        title: "Black Sun",
        artist: "Congorock",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "JmREem1aoVM"
       
      },
      {
        title: "Flow",
        artist: "Lokate",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "9cYbiZEZaOM"
      },
      {
        title: "Vibe Out",
        artist: "GotSome",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "sCES_ssF1Zg"
      },
      {
        title: "Raw",
        artist: "Going Quantum",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "CRt7vZj4WXM"
      },
      {
        title: "Stand!",
        artist: "Junior Prom",
        album: "Need for Speed (2015)",
        genre: "Pop",
        youtube: "vJX5A0E8w-k"
      },
      {
        title: "Go",
        artist: "The Chemical Brothers",
        album: "Born in the Echoes",
        genre: "Instrumental Hip-Hop, Dance/Electronic",
        youtube: "LO2RPDZkY88"
      },
      {
        title: "Get Around (Roni Size Remix)",
        artist: "Michael Woods ft. Sam Obernik",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "VXpBfMVUnNk"
      },
      {
        title: "Gray Duck",
        artist: "Doomtree",
        album: "All Hands",
        genre: "Hip-Hop/Rap",
        youtube: "MCJJ5aR5vwA"
      },
      {
        title: "Make The Crowd (NFS Vip Mix)",
        artist: "	Tropkillaz",
        album: "(single)",
        genre: "Trap",
        youtube: "xpBQgpLcotc"
      },
      {
        title: "Don't Stop",
        artist: "CamelPhat",
        album: "(single)",
        genre: "Dance/Electro",
        youtube: "7XyrH7qxBfQ"
      },
      {
        title: "Connection",
        artist: "Silversun Pickups",
        album: "Better Nature",
        genre: "Alternative/Indie, Rock",
        youtube: "G4Qcl00VlXE"
      },
      {
        title: "Surface",
        artist: "Aero Chord",
        album: "Need for Speed (2015)",
        genre: "Trap music, Dance/Electronic",
        youtube: "3FPwcaflCS8"
      },
      {
        title: "New Coke",
        artist: "Health",
        album: "Death Magic",
        genre: "Alternative/Indie",
        youtube: "l3_dedjucgM"
      },
      {
        title: "Pyara (Live Edit)",
        artist: "Fehrplay",
        album: "(single)",
        genre: "Progressive House",
        youtube: "9J5kup92N0s"
      },
      {
        title: "Fuelho Boogie",
        artist: "Swim Deep",
        album: "Mothers",
        genre: "Alternative/Indie",
        youtube: "F2tpRiNEsWg"
      },
      {
        title: "U Don't Know",
        artist: "Alison Wonderland",
        album: "Run",
        genre: "Dance/Electronic",
        youtube: "F5MMV5qULV0"
      },
      {
        title: "Brand New World",
        artist: "Hudson Mohawke",
        album: "Lantern",
        genre: "Dance/Electronic",
        youtube: "GuRGcftljX8"
      },
      {
        title: "Callisto",
        artist: "Reso",
        album: "Ricochet",
        genre: "Jungle/Drum 'n' Bass",
        youtube: "tv2iQ8TYcvo"
      },
      {
        title: "Modern Slang",
        artist: "Speaker of the House",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "6JKJc4sDlkU"
      },
      {
        title: "Pure Grinding",
        artist: "Avicii",
        album: "Stories",
        genre: "Dance/Electronic, Pop",
        youtube: "hzdIoghbFzg"
      },
      {
        title: "Blink",
        artist: "Zeds Dead",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "50X6FMYTq9k"
      },
      {
        title: "Odyssey",
        artist: "No Wyld",
        album: "Need for Speed (2015)",
        genre: "Alternative/Indie",
        youtube: "Ulbt3tASoxw"
      },
      {
        title: "Better Hide, Better Run",
        artist: "The Glitch Mob",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "KGrpJWGl6tg"
      },
      {
        title: "Blockbuster Night Part 1",
        artist: "Run The Jewels",
        album: "Run the Jewels 2",
        genre: "Hip-Hop/Rap",
        youtube: "uuWQyfGa1yI"
      },
      {
        title: "Devil's Whisper",
        artist: "Raury",
        album: "All We Need",
        genre: "Alternative/Indie",
        youtube: "LoI2C6pW9AQ"
      },
      {
        title: "Don't Trip",
        artist: "Flosstradamus",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "9P35uYdfNQY"
      },
      {
        title: "Night Riders",
        artist: "Major Lazer",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "tpleNoWqvsc"
      },
      {
        title: "Ice Hands",
        artist: "Krakota",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "NA6NL2-8S_I"
      },
      {
        title: "Blight Mamba",
        artist: "Royalston",
        album: "People On The Ground",
        genre: "Dance/Electronic",
        youtube: "7xUrlQP8TOA"
      },
      {
        title: "Imbalanced",
        artist: "Phace",
        album: "Shape The Random",
        genre: "Dance/Electronic",
        youtube: "mszV8N3ACyk"
      },
      {
        title: "Clap Track",
        artist: "Lynx",
        album: "I Am Lynx",
        genre: "Dance/Electronic",
        youtube: "ZtKQet0vavI"
      },
      {
        title: "Nasty (Spor Remix)",
        artist: "The Prodigy",
        album: "The Day Is My Enemy",
        genre: "Jungle/Drum 'n' Bass",
        youtube: "NktEGEqkUz4"
      },
      {
        title: "Here it Comes (N4S Mix)",
        artist: "Botnek",
        album: "(single)",
        genre: "Dance/Electronic",
        youtube: "6_3dYMnzo-Q"
      },
      {
        title: "Move Faster",
        artist: "Dimension",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "WydHCfudvik"
      },
      {
        title: "Stormtrooper",
        artist: "June Miller",
        album: "Robots & Romans",
        genre: "Dance/Electronic",
        youtube: "xSNDdFHp9Do"
      },
      {
        title: "Into The Light",
        artist: "Lynx",
        album: "I Am Lynx",
        genre: "Dance/Electronic",
        youtube: "kvnn0Db8VAA"
      },
      {
        title: "Lifespan (Spor Remix)",
        artist: "Vaults",
        album: "(single)",
        genre: "Dance/Electronic",
        youtube: "rB0RoKjGTNU"
      },
      {
        title: "Move It",
        artist: "Reso",
        album: "Ricochet",
        genre: "Jungle/Drum 'n' Bass",
        youtube: "4g0kscF3uJE"
      },
      {
        title: "Under Control",
        artist: "Gomad & Monster",
        album: "Under Control",
        genre: "Jungle/Drum 'n' Bass",
        youtube: "66l4PaW0Zo4"
      },
      {
        title: "Hey",
        artist: "laves",
        album: "Are You Satisfied?",
        genre: "Alternative/Indie",
        youtube: "nwrPs_wKnOM"
      },
    
      {
        title: "Machines",
        artist: "Modestep",
        album: "London Road",
        genre: "Dance/Electronic, Rock",
        youtube: "t9NK7ue27xo"
      },
      {
        title: "Destruction (KOPPS Mix)",
        artist: "Joywave",
        album: "(single)",
        genre: "Alternative/Indie",
        youtube: "FnUzWrO-C-k"
      },
      {
        title: "Wünsch dir was",
        artist: "Genetikk",
        album: "Achter Tag",
        genre: "Hip-Hop/Rap",
        youtube: "5FS8RIH7BpI"
      },
      {
        title: "Elektra",
        artist: "Refused",
        album: "Freedom",
        genre: "Punk",
        youtube: "wRMXTvsCBwQ"
      },
      {
        title: "Silver Surfer, Ghost Rider Go!!!",
        artist: "Trentemøller",
        album: "Into the Great Wide Yonder",
        genre: "Electronica",
        youtube: "_0gTZ6A0waE"
      },
      {
        title: "Let's Take This Outside",
        artist: "the one and only PPL MVR",
        album: "Need for Speed (2015)",
        genre: "Rock",
        youtube: "liZWJg7cWJ8"
      },
      {
        title: "25 Reasons",
        artist: "Louis Berry",
        album: "Need for Speed (2015)",
        genre: "Alternative/Indie",
        youtube: "xy6BZCyCV0g"
      },
      {
        title: "We Can Do What We Want",
        artist: "Drenge",
        album: "Undertow",
        genre: "Alternative/Indie",
        youtube: "nsqy-z8HQ-o"
      },
      {
        title: "Valkyrie",
        artist: "Battle Tapes",
        album: "Need for Speed (2015)",
        genre: "Alternative/Indie",
        youtube: "v_V13kbY4yI"
      },
      {
        title: "Won",
        artist: "The Bots",
        album: "Pink Palms",
        genre: "Alternative/Indie",
        youtube: "nM0RFDpiVrM"
      },
      {
        title: "Get Into It",
        artist: "The Strypes",
        album: "Little Victories",
        genre: "Alternative/Indie",
        youtube: "lFUN3iM7Az8"
      },
      {
        title: "Shake and Tremble",
        artist: "Django Django",
        album: "Born Under Saturn",
        genre: "Alternative/Indie",
        youtube: "Lqy3l63px9U"
      },
      {
        title: "Break Them",
        artist: "Aero Chord",
        album: "Need for Speed (2015)",
        genre: "Dance/Electronic",
        youtube: "nnAy1906EHg"
      },
      {
        title: "Get Rowdy",
        artist: "Clement Marfo & The Frontline",
        album: "Need for Speed (2015)",
        genre: "Hip-Hop/Rap",
        youtube: "_oltBrgeUMg"
      },
      {
        title: "The Unknown",
        artist: "Dirty South",
        album: "With You",
        genre: "Dance/Electronic",
        youtube: "RwxtfTiTv-0"
      },
      {
        title: "Koi No Radio",
        artist: "Bob Bradley & Erik Reiff",
        album: "(single)",
        genre: "J-pop",
        youtube: "0urPj5atmjM"
      },
      {
        title: "Come On",
        artist: "The Hives",
        album: "Lex Hives",
        genre: "Alternative/Indie, Rock",
        youtube: "HoBr4x-hF_M"
      },
      {
        title: "How You Like Me Now",
        artist: "The Heavy",
        album: "The House That Dirt Built",
        genre: "Rock",
        youtube: "sVzvRsl4rEM"
      }
     

    ]
  },
  {
    title: "Metal Gear Solid V: The Phantom Pain",
    year: "2015",
    cover: "Metal Gear Solid V.jpg",
    songs: [
      {
        title: "Take on Me",
        artist: "a-ha",
        album: "Hunting High and Low",
        genre: "Synthpop",
        youtube: "CK0HFb6fM6E"
      },
      {
        title: "Only Time Will Tell",
        artist: "Asia",
        album: "Asia",
        genre: "Progressive rock",
        youtube: "KFZ3Qhn5dW8"
      },
      {
        title: "Rebel Yell",
        artist: "Billy Idol",
        album: "Rebel Yell",
        genre: "New Wave/Post-Punk",
        youtube: "VdphvuyaV_I"
      },
      {
        title: "Friday I'm in Love",
        artist: "The Cure",
        album: "Wish",
        genre: "New Wave/Post-Punk, Alternative/Indie",
        youtube: "0thnAQKadpo"
      },
      {
        title: "You Spin Me Round (Like a Record)",
        artist: "Dead or Alive",
        album: "Youthquake",
        genre: "‎Hi-NRG‎/ ‎synth-pop‎/‎new wave",
        youtube: "fpmTe3TDdVU"
      },
      {
        title: "The Final Countdown",
        artist: "Europe",
        album: "The Final Countdown",
        genre: "Hard rock, Glam metal, Rock",
        youtube: "9jK-NcRmVcw"
      },
      {
        title: "Maneater",
        artist: "Hall & Oates",
        album: "H2O",
        genre: "Adult Contemporary",
        youtube: "yRYFKcMa_Ek"
      },
      {
        title: "Quiet Life",
        artist: "Japan",
        album: "Quiet Life",
        genre: "Art pop‎, ‎synth-pop",
        youtube: "xhm-EqcPta0"
      },
      {
        title: "Love Will Tear Us Apart",
        artist: "Joy Division",
        album: "Closer",
        genre: "Post-punk‎, ‎synth-pop‎",
        youtube: "zuuObGsB0No"
      },
      {
        title: "Too Shy",
        artist: "Kajagoogoo",
        album: "White Feathers",
        genre: "Rock",
        youtube: "-CfV2iVMeKA"
      },
      {
        title: "Kids in America",
        artist: "Kim Wilde",
        album: "Never Say Never",
        genre: "Pop",
        youtube: "r_GH6M7cUq4"
      },
      {
        title: "Gloria",
        artist: "Laura Branigan",
        album: "Branigan",
        genre: "Pop",
        youtube: "355Fk8drgZE"
      },
      {
        title: "The Man Who Sold the World",
        artist: "Midge Ure",
        album: "The Gift",
        genre: "Pop",
        youtube: "IU2wBKoDOzg"
      },
      {
        title: "True",
        artist: "Spandau Ballet",
        album: "True",
        genre: "Blue-eyed soul‎, ‎new wave",
        youtube: "AR8D2yqgQ1U"
      },
      {
        title: "She Blinded Me with Science",
        artist: "Thomas Dolby",
        album: "The Golden Age of Wireless",
        genre: "Alternative/Indie",
        youtube: "V83JR2IoI8k"
      },
      {
        title: "Dancing with Tears in My Eyes",
        artist: "Ultravox",
        album: "Lament",
        genre: "Pop",
        youtube: "PSQWUZ8a2Ho"
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },

    ]
  },
  {
    title: "Far Cry 5",
    year: "2018",
    cover: "FC5.jpg",
    songs: [
      {
        title: "Blackjack Moon",
        artist: "7horse",
        album: "Let The 7Horse Run",
        genre: "Rock",
        youtube: "VG56jMGf7CY"
      },
      {
        title: "Meth Lab Zoso Sticker",
        artist: "7horse",
        album: "Let The 7Horse Run",
        genre: "Rock",
        youtube: "1MNv6c9M3rk"
      },
      {
        title: "Rock 'N' Roll Fantasy",
        artist: "Bad Company",
        album: "Desolation Angels",
        genre: "Rock",
        youtube: "5eQGqUfKbzk"
      },
      {
        title: "Nerve Jamming",
        artist: "Bass Drum of Death",
        album: "GB City",
        genre: "Alternative/Indie",
        youtube: "cHZpznGLiRk"
      },
      {
        title: "Boom Boom",
        artist: "Big Head Todd and the Monsters ft John Lee Hooker",
        album: "Beautiful World",
        genre: "Pop",
        youtube: "LtOd-NR8bv0"
      },
      {
        title: "Keys To Your Coffin",
        artist: "Bite the Buffalo",
        album: "Big Blind",
        genre: "Rock",
        youtube: "ein8PPiMfhw"
      },
      {
        title: "Chicken Bone George",
        artist: "Black Eyed Snakes",
        album: "It's The Black Eyed Snakes",
        genre: "Rock",
        youtube: "brMNawrf3Zg"
      },
      {
        title: "Skulldiggin'",
        artist: "Black Joe Lewis",
        album: "Electric Slave",
        genre: "Rock",
        youtube: "ufLdyZxPFBo"
      },
      {
        title: "Ain't No Easy Way",
        artist: "Black Rebel Motorcycle Club",
        album: "Howl",
        genre: "Alternative/Indie, Rock",
        youtube: "S-nSPVZuKwI"
      },
      {
        title: "Beat the Devil's Tattoo",
        artist: "Black Rebel Motorcycle Club",
        album: "Beat the devil's Tattoo",
        genre: "Alternative/Indie, Rock",
        youtube: "gn9C1vKd7Gc"
      },
      {
        title: "Train, Train",
        artist: "Blackfoot",
        album: "Strikes",
        genre: "Hard Rock",
        youtube: "hBP15lRprPs"
      },
      {
        title: "Put That There",
        artist: "Bob Log III",
        album: "Log Bomb",
        genre: "Blues",
        youtube: "ZuN3fdfCW1s"
      },
      {
        title: "Honey",
        artist: "Bonjah",
        album: "Beautiful Wild",
        genre: "Blues Rock",
        youtube: "yZ9Jy3407Gc"
      },
      {
        title: "Fools Rush In",
        artist: "Brook Benton",
        album: "Songs I Love to Sing",
        genre: "Jazz, Pop",
        youtube: "D1krxVSX5H0"
      },
      {
        title: "Mess Around",
        artist: "Cage The Elephant",
        album: "Tell Me I'm Pretty",
        genre: "Alternative/Indie",
        youtube: "Wl7cF9bwNHE"
      },
      {
        title: "Vincent",
        artist: "Car Seat Headrest",
        album: "Teens of Denial",
        genre: "Alternative/Indie",
        youtube: "bEsItsZphwQ"
      },
      {
        title: "The God That You Deserve",
        artist: "Channel 3",
        album: "Put 'Em Up",
        genre: "Punk",
        youtube: "J14rgbuUXsw"
      },
      {
        title: "Tiger Eyes",
        artist: "Claire Guerreso",
        album: "Tiger Eyes",
        genre: "Alternative/Indie",
        youtube: "2pc47Yb04j8"
      },
      {
        title: "Ain't Got No Home",
        artist: "Clarence \"Frogman\" Henry",
        album: "A Rage In Harlem (Music From The Film)",
        genre: "Pop",
        youtube: "om0ZkQzL7bo"
      },
      {
        title: "But I Do",
        artist: " Clarence \"Frogman\" Henry",
        album: "You Always Hurt the One You Love",
        genre: "R&B/Soul",
        youtube: "UbfJ3t3CwBc"
      },
      {
        title: "Higher Than My Station",
        artist: "Close Your Eyes",
        album: "Line in the Sand",
        genre: "Punk",
        youtube: "2lyiGHm7kRg"
      },
      {
        title: "Electric Worry",
        artist: "Clutch",
        album: "From Beale Street to Oblivion",
        genre: "Rock",
        youtube: "s4ABpbxIPFI"
      },
      {
        title: "Psychotic Reaction",
        artist: "Count Five",
        album: "Psychotic Reaction",
        genre: "Rock",
        youtube: "fBTT3VPriV8"
      },
      {
        title: "Bad Moon Rising",
        artist: "Creedence Clearwater Revival",
        album: "Green River",
        genre: "Classic Rock",
        youtube: "zUQiUFZ5RDw"
      },
      {
        title: "Up Around The Bend",
        artist: "Creedence Clearwater Revival",
        album: "Cosmo's Factory",
        genre: "Rock",
        youtube: "BnRsaHXHznQ"
      },
      {
        title: "The Prowl",
        artist: "Dan Auerbach",
        album: "Keep It Hid",
        genre: "Rock",
        youtube: "vcunGT_KsfM"
      },
      {
        title: "Get Mine",
        artist: "Davis",
        album: "Crooked Finger",
        genre: "Rock",
        youtube: "BJ4dOtH3IqI"
      },
      {
        title: "Mashed Potato Time",
        artist: "Dee Dee Sharp",
        album: "It's Mashed Potato Time",
        genre: "Pop",
        youtube: "51eJ3-h86JQ"
      },
      {
        title: "Let's All Go To The Bar",
        artist: "Deer Tick",
        album: "Divine Providence",
        genre: "Alternative/Indie",
        youtube: "urjLGdHi2UU"
      },
      {
        title: "Com / Broke",
        artist: "Dion Lunadon",
        album: "Dion Lunadon",
        genre: "Rock",
        youtube:"rvPQGzGsCJg"
      },
      {
        title: "Raise Hell",
        artist: "Dorothy",
        album: "Rockisdead",
        genre: "Rock",
        youtube: "rmYyPcEQKU4"
      },
      {
        title: "Rebel Rouser",
        artist: "Duane Eddy",
        album: "Have 'Twangy' Guitar Will Travel",
        genre: "Rock, Blues, Pop",
        youtube: "K8uZutr1avs"
      },
      {
        title: "Fast As You",
        artist: "Dwight Yoakam",
        album: "This Time",
        genre: "Country",
        youtube: "A2qo1x9rcCc"
      },
      {
        title: "Prizefighter",
        artist: "Eels",
        album: "Hombre Lobo",
        genre: "Alternative/Indie",
        youtube: "N3sdPM5mfJ4"
      },
      {
        title: "Still Standing",
        artist: "Electric Owls",
        album: "Still Standing",
        genre: "Alternative/Indie",
        youtube: "64wiwgj5RU8"
      },
      {
        title: "Cut Ya Down",
        artist: "Eli \"Paperboy\" Reed",
        album: "My Way Home",
        genre: "R&B/Soul",
        youtube: "d5jSGupt_BA"
      },
      {
        title: "Road Runner",
        artist: "Bo Diddley",
        album: "(single)",
        genre: "Blues",
        youtube: "1Qng5aH05qI"
      },
      {
        title: "Last Damn Night",
        artist: "Elle King",
        album: "Love Stuff",
        genre: "Alternative/Indie",
        youtube: "My2qJpd1QVI"
      },
      {
        title: "Write It All Down For You (W.I.A.D.F.Y.)",
        artist: "Elliot Brood",
        album: "Mountain Meadows",
        genre: "Singer-Songwriter, Rock, Folk",
        youtube: "33jfKsSfkho"
      },
      {
        title: "When I Fall In Love",
        artist: "Etta Jones",
        album: "(single)",
        genre: "Jazz",
        youtube: "SHUocQ_Sxcw"
      },
      {
        title: "Slow Ride",
        artist: "Foghat",
        album: "Fool for the City",
        genre: "Classic Rock, Rock",
        youtube: "GcCNcgoyG_0"
      },
      {
        title: "All Right Now",
        artist: "Free",
        album: "American Beauty",
        genre: "Rock",
        youtube: "rl51s5Osutg"
      },
      {
        title: "The Diamond Ring",
        artist: "Gary Lewis & the Playboys",
        album: "Everybody Loves a Clown",
        genre: "Vocal/Easy Listening, Rock",
        youtube: "L5V9KUcYneg"
      },
       {
        title: "Black Sheep",
        artist: "Gin Wigmore",
        album: "Gravel & Wine",
        genre: "Alternative/Indie, Pop",
        youtube: "u7aNKstBCM4"
      },
      {
        title: "Country Sleaze",
        artist: "Goat Girl",
        album: "Goat Girl",
        genre: "Alternative/Indie",
        youtube: "1lq5Sz9lLOo"
      },
      {
        title: "Highway Tune",
        artist: "Greta Van Fleet",
        album: "Black Smoke Rising",
        genre: "Rock",
        youtube: "aJg4OJxp-co"
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      },
      
      
    ]

  }
];
