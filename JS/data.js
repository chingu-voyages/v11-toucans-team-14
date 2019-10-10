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
        genre:"Hip-Hop/Rap",
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
        genre:"Alternative/Indie",
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
      }
     
     

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
        album: "",
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
        genre: "Dance/Electronic",
        youtube: "ecIvEiEVx8Y"
      },
      {
        title: "Lose Ya Love",
        artist: "Kill The Noise",
        album: "Occult Classic",
        genre: "Trap",
        youtube: "kbNIF2RPG_c"
      },
      {
        title: "Break Yourself",
        artist: "Hook N Sling",
        album: "We Are Your Friends (Music From The Original Motion Picture)",
        genre: "Electronic",
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
        album: "",
        genre: "Hip-Hop/Rap",
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
        genre: "Dance/Electronic",
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
        album: "",
        genre: "Trap",
        youtube: "xpBQgpLcotc"
      },
      {
        title: "Don't Stop",
        artist: "CamelPhat",
        album: "",
        genre: "Dance/Electronic",
        youtube: "7XyrH7qxBfQ"
      },
      {
        title: "Connection",
        artist: "Silversun Pickups",
        album: "Better Nature",
        genre: "Alternative/Indie",
        youtube: "G4Qcl00VlXE"
      },
      {
        title: "Surface",
        artist: "Aero Chord",
        album: "Need for Speed (2015)",
        genre: "Trap",
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
        genre: "Drum 'n' Bass",
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
        genre: "Dance/Electronic",
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
        genre: "Drum 'n' Bass",
        youtube: "NktEGEqkUz4"
      },
      {
        title: "Here it Comes (N4S Mix)",
        artist: "Botnek",
        album: "",
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
        genre: "Drum 'n' Bass",
        youtube: "4g0kscF3uJE"
      },
      {
        title: "Under Control",
        artist: "Gomad & Monster",
        album: "Under Control",
        genre: "Drum 'n' Bass",
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
        genre: "Dance/Electronic",
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
        album: "",
        genre: "J-pop",
        youtube: "0urPj5atmjM"
      },
      {
        title: "Come On",
        artist: "The Hives",
        album: "Lex Hives",
        genre: "Alternative/Indie",
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
        genre: "New Wave/Post-Punk",
        youtube: "0thnAQKadpo"
      },
      {
        title: "You Spin Me Round (Like a Record)",
        artist: "Dead or Alive",
        album: "Youthquake",
        genre: "‎‎Synthpop‎",
        youtube: "fpmTe3TDdVU"
      },
      {
        title: "The Final Countdown",
        artist: "Europe",
        album: "The Final Countdown",
        genre: "Hard rock",
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
        genre: "Synthpop",
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
      }
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
        genre: "Alternative/Indie",
        youtube: "S-nSPVZuKwI"
      },
      {
        title: "Beat the Devil's Tattoo",
        artist: "Black Rebel Motorcycle Club",
        album: "Beat the devil's Tattoo",
        genre: "Alternative/Indie",
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
        genre: "Rock",
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
        album: "",
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
        genre: "Singer-Songwriter",
        youtube: "33jfKsSfkho"
      },
      {
        title: "When I Fall In Love",
        artist: "Etta Jones",
        album: "",
        genre: "Jazz",
        youtube: "SHUocQ_Sxcw"
      },
      {
        title: "Slow Ride",
        artist: "Foghat",
        album: "Fool for the City",
        genre: "Classic Rock",
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
        genre: "Vocal/Easy Listening",
        youtube: "L5V9KUcYneg"
      },
       {
        title: "Black Sheep",
        artist: "Gin Wigmore",
        album: "Gravel & Wine",
        genre: "Alternative/Indie",
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
        title: "Safari Song",
        artist: "Greta Van Fleet",
        album: "Black Smoke Rising",
        genre: "Rock",
        youtube: "HxbT5jSxGJ0"
      },
      {
        title: "All Time Low",
        artist: "Greyarea",
        album: "Grey Area",
        genre: "Rock",
        youtube: "DzMQK-6XZa0"
      },
      {
        title: "Barracuda",
        artist: "Heart",
        album: "Little Queen",
        genre: "Rock",
        youtube: "PeMvMNpvB5M"
      },
      {
        title: "Hillbillies On Speed",
        artist: "Hillbilly Hellcats",
        album: "Rev It Up With Taz",
        genre: "Rockabilly",
        youtube: "pp0oGXbdD4s"
      },
      {
        title: "Fake It",
        artist: "Holy White Hounds",
        album: "Sparkle Sparkle",
        genre: "Alternative/Indie",
        youtube: "5KywbwN-ydo"
      },
      {
        title: "Smokestack Lightin'",
        artist: "Howlin' Wolf",
        album: "You Can't Be Beat",
        genre: "Classic Blues",
        youtube: "9Ri7TcukAJ8"
      },
      {
        title: "Let's Go Young",
        artist: "Hundred Visions",
        album: "Permanent Basement",
        genre: "Rock",
        youtube: "6sFvLNca1cw"
      },
      {
        title: "I Have to Slow Down",
        artist: "Jim And The French Vanilla",
        album: "Afraid Of The House",
        genre: "Alternative/Indie",
        youtube: "ZORXgzHjqtw"
      },
      {
        title: "Rocky Mountain Way",
        artist: "Joe Walsh",
        album: "The Smoker You Drink, the Player You Get",
        genre: "Rock",
        youtube: "UsEE5usGodQ"
      },
      {
        title: "Hot Blood",
        artist: "Kaleo",
        album: "A/B",
        genre: "Folk",
        youtube: "p6PuTFmn_ds"
      },
      {
        title: "No Good",
        artist: "Kaleo",
        album: "A/B",
        genre: "Folk",
        youtube: "HC6QJsxRypQ"
      },
      {
        title: "Black+Beige",
        artist: "Kid Karaté",
        album: "Black & Beige",
        genre: "Alternative/Indie",
        youtube: "jkX-Y5e3uf0"
      },
      {
        title: "Koo Koo Ka Choo",
        artist: "King Koyote",
        album: "",
        genre: "Rock",
        youtube: "TZk1H53eZLU"
      },
      {
        title: "Working In The Coal Mine",
        artist: "Lee Dorsey",
        album: "",
        genre: "R&B/Soul",
        youtube: "FA3Royf9_zM"
      },
      {
        title: "Curious Mind (Um, Um, Um, Um, Um, Um)",
        artist: "Major Lance",
        album: "Major's Greatest Hits",
        genre: "R&B/Soul",
        youtube: "Xs9kcio4Dbw"
      },
      {
        title: "The Monkey Time",
        artist: "Major Lance",
        album: "Major's Greatest Hits",
        genre: "Jazz",
        youtube: "B0KlRpQeyvo"
      },
      {
        title: "Hella Miss Lanesome",
        artist: "Marlon Willims",
        album: "Marlon Williams",
        genre: "Alternative/Indie",
        youtube: "ow8qMY8JkR0"
      },
      {
        title: "Sexual Healing",
        artist: "Marvin Gaye",
        album: "Midnight Love",
        genre: "Classic Soul",
        youtube: "rjlSiASsUIs"
      },
      {
        title: "My Guy",
        artist: "Mary Wells",
        album: "Mary Wells Sings My Guy",
        genre: "R&B/Soul",
        youtube: "4WT7nBGX5eU"
      },
      {
        title: "You Beat Me To The Punch",
        artist: "Mary Wells",
        album: "The One Who Really Loves You",
        genre: "R&B/Soul",
        youtube: "OCUXSdg6PCc"
      },
      {
        title: "Powertrip",
        artist: "Monster Magnet",
        album: "Powertrip",
        genre: "Hard Rock/Rock",
        youtube: "jE7Zv6d-HUA"
      },
      {
        title: "Van Gogh",
        artist: "OL CD",
        album: "Van Gogh",
        genre: "Rock",
        youtube: "anNKI6NLdzw"
      },
      {
        title: "Smash The Control Machine",
        artist: "Otep",
        album: "Smash The Control Machine",
        genre: "Heavy Metal",
        youtube: "RuOfyA1bh2M"
      },
      {
        title: "Quite Contrary",
        artist: "Parker Millsap",
        album: "Parker Millsap",
        genre: "Folk",
        youtube: "T3GYXO0XBSI"
      },
      {
        title: "My Youth Generation",
        artist: "Palaye Royale",
        album: "Boom Boom Room",
        genre: "Rock",
        youtube: "upQlcXP0T74"
      },
      {
        title: "Mad Mad Heart",
        artist: "The Reverend Horton Heat",
        album: "Rev",
        genre: "Alternative/Indie",
        youtube: "WDMU2KhSBXo"
      },
      {
        title: "Gotta Get It",
        artist: "River City Rebels",
        album: "Playing to Live, Living to Play",
        genre: "Alternative/Indie",
        youtube: "K34Ttc_iV_c"
      },
      
      {
        title: "Reload",
        artist: "Saint PHNX",
        album: "Reload",
        genre: "Rock",
        youtube: "n1Dm-w526Kw"
      },
      {
        title: "The Truth Won't Set Us Free",
        artist: "Sara Watkins",
        album: "Young in All the Wrong Ways",
        genre: "Singer-Songwriter",
        youtube: "9g2bQSfEswQ"
      },
      {
        title: "Blood, Sweat & Murder",
        artist: "Scott H. Biram",
        album: "Hell Or High Water",
        genre: "Blues",
        youtube: "3Xb6PkwSKAE"
      },
      {
        title: "Draggin' Down The Line",
        artist: "Scott H. Biram",
        album: "Something's Wrong/Lost Forever",
        genre: "Blues",
        youtube: "KxbAn8GER2k"
      },
      {
        title: "Roll The Bones (Audiotree Session)",
        artist: "Shakey Graves",
        album: "Roll the Bones",
        genre: "Rock",
        youtube: "sD72LbIk02M"
      },
      {
        title: "Buffalo Nicket",
        artist: "Shovels & Rope",
        album: "Little Seeds",
        genre: "Alt Country",
        youtube: "6tJoslE21Ng"
      },
      {
        title: "I Hate You",
        artist: "Singapore Sling",
        album: "Silver Monk Time",
        genre: "Dance/Electronic",
        youtube: "3WxaV33PNk8"
      },
      {
        title: "Up Jumped The Devil",
        artist: "Soledad Brothers",
        album: "Live",
        genre: "Alternative/Indie",
        youtube: "KT1HZQVGOII"
      },
      {
        title: "Bull In A China Shop",
        artist: "Switchfoot",
        album: "Where the Light Shines Through",
        genre: "Rock",
        youtube: "JUTYnW48C9E"
      },
      {
        title: "20th Century Boy",
        artist: "T. Rex",
        album: "Billy Super Duper",
        genre: "Alternative/Indie",
        youtube: "sQw3LBl2eEU"
      },
      {
        title: "Children Of The Revolution",
        artist: "T. Rex",
        album: "Billy Elliot",
        genre: "Rock",
        youtube: "pu3-ZGbqUyk"
      },
      {
        title: "Stranglehold",
        artist: "Ted Nugent",
        album: "Ted Nugent",
        genre: "Hard Rock",
        youtube: "0c3d7QgZr7g"
      },
      {
        title: "Shelter Song",
        artist: "Temples",
        album: "Sun Structures",
        genre: "Alternative/Indie",
        youtube: "vs4i41cOv0s"
      },
      {
        title: "Heavy Soul",
        artist: "The Black Keys",
        album: "The Big Come Up",
        genre: "Alternative/Indie",
        youtube: "shM3Nm-wRrs"
      },
      {
        title: "Lonely Boy",
        artist: "The Black Keys",
        album: "El Camino",
        genre: "Alternative/Indie",
        youtube: "a_426RiwST8"
      },
      {
        title: "Dirty Sex",
        artist: "The Bloody Hollies",
        album: "Yours Until the Bitter End",
        genre: "Rock",
        youtube: "yzA1DZkli4g"
      },
      {
        title: "Ghost Dance",
        artist: "The Bright Light Social Hour",
        album: "Space Is Still the Place",
        genre: "Psychedelic Rock",
        youtube: "nYX23jdYuek"
      },
      {
        title: "Rhythm Of The Rain",
        artist: "The Cascades",
        album: "Rhythm Of The Rain",
        genre: "‎‎Doo-wop",
        youtube: "bQstQST1GiM"
      },
      {
        title: "Should I Stay Or Should I Go",
        artist: "The Clash",
        album: "Combat Rock",
        genre: "Punk",
        youtube: "BN1WwnEDWAM"
      },
      {
        title: "He's A Rebel",
        artist: "The Crystals",
        album: "He's a Rebel",
        genre: "R&B/Soul",
        youtube: "G_SXJ18EkNw"
      },
      {
        title: "I Can't Sleep At Night",
        artist: "The Deadly Snakes",
        album: "Ode to Joy",
        genre: "Alternative/Indie",
        youtube: "VCkYEwrIiNs"
      },
      {
        title: "You Can't Sit Down",
        artist: "The Dovells",
        album: "Hully Gully Baby",
        genre: "Pop",
        youtube: "_t_Fso_F1lw"
      },
      {
        title: "Save The Last Dance For me",
        artist: "The Drifters",
        album: "Save the Last Dance for Me",
        genre: "R&B/Soul",
        youtube: "n-XQ26KePUQ"
      },
      {
        title: "This Magic Moment",
        artist: "Ben E. King & The Drifters",
        album: "Don't Play That Song!",
        genre: "R&B/Soul",
        youtube: "=Ul041CSNJto"
      },
      {
        title: "Keep Your Hands To Yourself",
        artist: "The Georgia Satellites",
        album: "Coyote Ugly(movie)",
        genre: "Rock",
        youtube: "AMFMf9cN64U"
      },
      {
        title: "I'll Be Loving You",
        artist: "King Khan & BBQ Show",
        album: "Invisible Girl",
        genre: "Alternative/Indie",
        youtube: "Nj_c5MCXrpQ "
      },
      {
        title: "Shake Real Low",
        artist: "King Khan & BBQ Show",
        album: "King Khan & BBQ Show",
        genre: "Alternative/Indie",
        youtube: "dIT-5I0dHmw"
      },
      {
        title: "Ophelia",
        artist: "The Lumineers",
        album: "Cleopatra",
        genre: "Alternative/Indie",
        youtube: "pTOC_q0NLTk"
      },
      {
        title: "Sharp Leather Walkin' Shoes",
        artist: "The Makers",
        album: "Psychopathia Sexualis",
        genre: "Alternative/Indie",
        youtube: "wy6t1cA4o8A"
      },
      {
        title: "Singin' A Song About Today",
        artist: "The Mooney Suzuki",
        album: "People Get Ready",
        genre: "Alternative/Indie",
        youtube: "HHvwdI2tzPg"
      },
      {
        title: "Buddy",
        artist: "The Orwells",
        album: "Terrible Human Beings",
        genre: "Alternative/Indie",
        youtube: "pV6I3hVPUVU"
      },
      {
        title: "Yes I Know",
        artist: "The Pack A.D.",
        album: "Positive Thinking",
        genre: "Alternative/Indie",
        youtube: "2xb_ulhXyjw"
      },
      {
        title: "Only You",
        artist: "The Platters",
        album: "41 Original Hits from the Soundtrack of American Graffiti",
        genre: "Doo-wop",
        youtube: "3FygIKsnkCw"
      },
      {
        title: "Deundes",
        artist: "Quaker City Night Hawks",
        album: "El Astronauta",
        genre: "Rock",
        youtube: "sKIbzd-bOHY"
      },
      {
        title: "The Ballad Of Clutch Vikings",
        artist: "The Road Vikings",
        album: "(single)",
        genre: "Rock",
        youtube: "vcSW794ueZU"
      },
      {
        title: "Shots Heard Round The World",
        artist: "The Strike",
        album: "Shots Heard Round The World",
        genre: "Rock",
        youtube: "BRnfLmWant0"
      },
      {
        title: "Be My Queen",
        artist: "The Telecaster Kings",
        album: "The Telecater Kings",
        genre: "Rock",
        youtube: ""
      },
      {
        title: "Disco Inferno",
        artist: "The Trammps",
        album: "Disco Inferno",
        genre: "Dance/Electronic",
        youtube: "A_sY2rjxq6M"
      },
      {
        title: "If You Are Hell Girl",
        artist: "The Upsidedown",
        album: "Human Destination",
        genre: "Indie",
        youtube: "HPL-zxqlwng"
      },
      {
        title: "Get Free",
        artist: "The Vines",
        album: "Highly Evolved",
        genre: "Alternative/Indie",
        youtube: "asOvnGHwtDU"
      },
       {
        title: "The Price Of Punishment",
        artist: "The Warriors",
        album: "Genuine Sense Of Outrage",
        genre: "Rock",
        youtube: "Q9K9ECVKMt0"
      },
       {
        title: "Carrion Crawler",
        artist: "Thee Oh Sees",
        album: "Carrion Crawler/The Dream",
        genre: "Rock",
        youtube: "HE93zWIkW_8"
      },
       {
        title: "Codeine",
        artist: "Trampled by Turtles",
        album: "Blue Sky and the Devil",
        genre: "Folk",
        youtube: "XirsfmpK0oY"
      },
      {
        title: "We'll Meet Again",
        artist: "Vera Lynn",
        album: "",
        genre: "Singer-songwriter",
        youtube: "cHcunREYzNY"
      },
      {
        title: "Habitual",
        artist: "VOMF",
        album: "Habitual",
        genre: "",
        youtube: ""
      },
      {
        title: "Little Silver Cross",
        artist: "White Reaper",
        album: "The World's Best American Band",
        genre: "Rock",
        youtube: "dBdFYTFiK3Y"
      }
    ]

  },
  {
    title: "Fallout 4",
    year: "2015",
    cover: "Fo4.jpg",
    songs: [
      {
        title: "A Wonderful Guy",
        artist: "Tex Beneke featuring Claire Chatwin",
        album: "",
        genre: "Country",
        youtube: "Ig7jx4J399s"
      },
      {
        title: "Ac-Cent-Tchu-Ate the Positive",
        artist: "Bing Crosby",
        album: "The Singing Detective(tv show)",
        genre: "Classical",
        youtube: "5Qk9o_ZeR7s"
      },
      {
        title: "Anything Goes",
        artist: "Cole Porter",
        album: "Anything Goes(musical)",
        genre: "Jazz",
        youtube: "3aeQ3DmKU7A"
      },
      {
        title: "Atom Bomb Baby",
        artist: "The Five Stars",
        album: "Fallout 4: Soundtrack Highlights",
        genre: "Doo-wop",
        youtube: "KXSUEU7ISfQ"
      },
      {
        title: "Butcher Pete (Part 1)",
        artist: "Roy Brown",
        album: "",
        genre: "Vocal/Easy Listening",
        youtube: "8V7AxNJWKYU"
      },
      {
        title: "Butcher Pete (Part 2)",
        artist: "Roy Brown",
        album: "",
        genre: "Vocal/Easy Listening",
        youtube: "6VGDnqCV53w"
      },
      {
        title: "Civilization (Bongo, Bongo, Bongo)",
        artist: "The Andrews Sisters with Danny Kaye",
        album: "",
        genre: "Vocal/Easy Listening",
        youtube: "VEyDNTLlRgU"
      },{
        title: "Crawl Out Through the Fallout",
        artist: "Sheldon Allman",
        album: "",
        genre: "Rock",
        youtube: "8XPzICHxXoQ"
      },
      {
        title: "Crazy He Calls Me",
        artist: "Billie Holiday",
        album: "",
        genre: "Jazz",
        youtube: "_mitLcbHHz8"
      },
      {
        title: "Dear Hearts and Gentle People",
        artist: "Bob Crosby and the Bobcats",
        album: "Fallout 4: Soundtrack Highlights",
        genre: "Jazz",
        youtube: "lXNOz-HkoOM"
      },
      {
        title: "Easy Living",
        artist: "Billie Holiday",
        album: "",
        genre: "Jazz",
        youtube: "RX7TA3ezjHc"
      },
      {
        title: "Good Rockin' Tonight",
        artist: "Roy Brown",
        album: "",
        genre: "Blues",
        youtube: "cgdzS4OSQ1M"
      },
      {
        title: "Grandma Plays the Numbers",
        artist: "Wynonie Harris",
        album: "",
        genre: "Blues",
        youtube: "m136JOv3z6w"
      },
      {
        title: "Happy Times",
        artist: "Bob Crosby and the Bobcats",
        album: "",
        genre: "Vocal/Easy Listening",
        youtube: "HAsUPgc3HC8"
      },
      {
        title: "He's a Demon, He's a Devil, He's a Doll",
        artist: "Betty Hutton",
        album: "",
        genre: "Jazz",
        youtube: "g6LlW902JRk"
      },
      {
        title: "I Don't Want to Set the World on Fire",
        artist: "The Ink Spots",
        album: "I Don't Want to Set the World on Fire / Hey Doc!",
        genre: "Jazz",
        youtube: "6l6vqPUM_FE"
      },
      {
        title: "Into Each Life Some Rain Must Fall",
        artist: "The Ink Spots",
        album: "The Ink Spots in Hi-Fi",
        genre: "Jazz",
        youtube: "PJ9IaplRrm4"
      },
      {
        title: "It's a Man",
        artist: "Betty Hutton",
        album: "",
        genre: "Jazz",
        youtube: "ydLHY0qonl4"
      },
      {
        title: "It's All Over But the Crying",
        artist: "The Ink Spots",
        album: "Keep Cool, Fool",
        genre: "R&B/Soul",
        youtube: "2Ko9TpduOhE"
      },
      {
        title: "Keep a Knockin' (But You Can't Come In)",
        artist: "Louis Jordan & His Tympany Five",
        album: "",
        genre: "Jazz",
        youtube: "4Uajijh9Lew"
      },
      {
        title: "Maybe",
        artist: "The Ink Spots",
        album: "Whispering Grass",
        genre: "R&B/Soul",
        youtube: "1E5vvulNS6A"
      },
      {
        title: "Mighty, Mighty Man",
        artist: "Roy Brown",
        album: "",
        genre: "Blues",
        youtube: "rhp8jMykAVg"
      },
      {
        title: "One More Tomorrow",
        artist: "Frankie Carle & His Orchestra",
        album: "",
        genre: "Jazz",
        youtube: "BNiqGatt6Nw"
      },
      {
        title: "Orange Colored Sky",
        artist: "Stan Kenton, featuring Nat King Cole",
        album: "",
        genre: "Vocal/Easy Listening",
        youtube: "xdi97HHYJew"
      },
      {
        title: "Personality",
        artist: "Johnny Mercer & The Pied Pipers, Jo Stafford",
        album: "",
        genre: "Jazz",
        youtube: "cBt9RnvXtEo"
      },
      {
        title: "Pistol Packin' Mama",
        artist: "Bing Crosby & The Andrews Sisters",
        album: "",
        genre: "Pop",
        youtube: "b39ALX4neIk"
      },
      {
        title: "Right Behind You Baby",
        artist: "Ray Smith",
        album: "I'm Right Behind You Baby",
        genre: "Rock",
        youtube: "zyTZ2Pkb9cA"
      },
      {
        title: "Rocket 69",
        artist: "Todd Rhodes Orchestra: Vocal by Connie Allen and the Band",
        album: "",
        genre: "Classic",
        youtube: "Bo0xdilcCBA"
      },
      {
        title: "Sixty Minute Man",
        artist: "Billy Ward and his Dominoes",
        album: "Clyde McPhatter with Billy Ward and His Dominoes",
        genre: "Jazz",
        youtube: "NlZqfNNtvVM"
      },
      {
        title: "The End of the World",
        artist: "Skeeter Davis",
        album: "The Boat That Rocked",
        genre: "Pop",
        youtube: "sonLd-32ns4"
      },
      {
        title: "The Wanderer",
        artist: "Dion DiMucci",
        album: "Runaround Sue",
        genre: "Blues",
        youtube: "IkoidwsLXCg"
      },
      {
        title: "Undecided",
        artist: "Ella Fitzgerald",
        album: "",
        genre: "Jazz",
        youtube: "mpnDbJjBW8A"
      },
      {
        title: "Uranium Fever",
        artist: "Elton Britt",
        album: "",
        genre: "R&B/Soul",
        youtube: "2ANI6oj8p2M"
      },
      {
        title: "Uranium Rock",
        artist: "Warren Smith",
        album: "Fallout 4: Soundtrack Highlights",
        genre: "Rock",
        youtube: "jq2kqNTHejM"
      },
      {
        title: "Way Back Home",
        artist: "Bob Crosby and the Bobcats",
        album: "",
        genre: "Vocal/Easy Listening",
        youtube: "ir1A74UA2YE"
      },
      {
        title: "Whole Lotta Shakin' Goin' On",
        artist: "Big Maybelle",
        album: "",
        genre: "R&B/Soul",
        youtube: "bp11vxr_pD4"
      },
      {
        title: "Worry, Worry, Worry",
        artist: "The Three Suns",
        album: "This is The Three Suns",
        genre: "Pop",
        youtube: "pUDv3h09VBc"
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      }
    ]
  },
  {
  title: "Just Dance 2019",
    year: "2018",
    cover: "Just_dance_2019.webp",
    songs: [
      {
        title: "A Little Party Never Killed Nobody (All We Got)",
        artist: "Fergie ft. Q-Tip and GoonRock",
        album: "The Great Gatsby: Music from Baz Luhrmann's Film",
        genre: "Dubstep",
        youtube: "0ZgjmE6xdaw"
      },
      {
        title: "Adeyyo",
        artist: "Ece Seçkin",
        album: "Zamanım Yok",
        genre: "Pop",
        youtube: "2g3-Ba0NA5E"
      },
      {
        title: "Bang Bang Bang",
        artist: "Big Bang",
        album: "Made Series",
        genre: "Hip-Hop/Rap",
        youtube: "2ips2mM7Zqw"
      },
      {
        title: "Bum Bum Tam Tam",
        artist: "MC Fioti",
        album: "Bum bum tam tam (Jonas Blue remix)",
        genre: "Hip-Hop/Rap",
        youtube: "Xl4pbUfJENg"
      },
      {
        title: "Ça Plane Pour Moi",
        artist: "Plastic Bertrand",
        album: "127 Hours (Music from the Motion Picture)",
        genre: "Punk",
        youtube: "savH9RIvbJM"
      },
      {
        title: "Calypso",
        artist: "Luis Fonsi, Stefflon Don",
        album: " Vida",
        genre: "Pop",
        youtube: "Hnj_EMDUfjY"
      },
      {
        title: "DDU-DU DDU-DU",
        artist: "BLACKPINK",
        album: "Blackpink in Your Area",
        genre: "K-pop, J-Pop",
        youtube: "IHNzOHi8sJs"
      },
      {
        title: "Familiar",
        artist: "Liam Payne, J Balvin",
        album: "Familiar",
        genre: "Pop",
        youtube: "oWw1BcFhk-k"
      },
      {
        title: "Finesse (Remix)",
        artist: "Bruno Mars ft. Cardi B",
        album: "24K Magic",
        genre: "Funk",
        youtube: "LsoLEjrDogU"
      },
      {
        title: "Fire",
        artist: "LLP ft. Mike Diamondz",
        album: "Fire (feat. Mike Diamondz)",
        genre: "Dance/Electronic",
        youtube: "zrONabfpRss"
      },
      {
        title: "Fire On The Floor",
        artist: "Michelle Delamor",
        album: "Fire on the Floor",
        genre: "Pop",
        youtube: "2zYuqEttwzs"
      },
      {
        title: "Havana",
        artist: "Camila Cabello",
        album: "Camila",
        genre: "Latin pop",
        youtube: "BQ0mxQXmLsk"
      },
      {
        title: "I'm Still Standing",
        artist: "Elton John ",
        album: "Too Low for Zero.",
        genre: "Rock",
        youtube: "TKe8ksm3FZQ"
      },
      {
        title: "Mad Love",
        artist: "Sean Paul, David Guetta, Becky G",
        album: "Mad Love the Prequel",
        genre: "Pop",
        youtube: "mlf4bidp2yc"
      },
      {
        title: "Make Me Feel",
        artist: "Janelle Monáe",
        album: "Dirty Computer",
        genre: "R&B/Soul",
        youtube: "tGRzz0oqgUE"
      },
      {
        title: "Mama Mia",
        artist: "Mayra Verónica",
        album: "Mama Mia",
        genre: "Dance/Electronic",
        youtube: "IIIgBm2MGeg"
      },
      {
        title: "Mi Mi Mi",
        artist: "Serebro(Hit The Elctro Beat)",
        album: "",
        genre: "Dance",
        youtube: "QLF0pKpC9P8"
      },
      {
        title: "Narco",
        artist: "Blasterjaxx & Timmy Trumpet",
        album: "Narco",
        genre: "Dance/Electronic",
        youtube: "S73zDvMgGmI"
      },
      {
        title: "New Reality",
        artist: "Gigi Rowe",
        album: "New Reality",
        genre: "Pop",
        youtube: "dekwG3zCV-s"
      },
      {
        title: "New Rules",
        artist: "Dua Lipa",
        album: "Dua Lipa",
        genre: "Pop",
        youtube: "k2qgadSvNyU"
      },
      {
        title: "New World",
        artist: "Krewella, Yellow Claw ft. VAVA",
        album: "New World",
        genre: "Dance/Electronic",
        youtube: "kwjCbKsY_Kc"
      },
      {
        title: "No Tears Left To Cry",
        artist: "Ariana Grande",
        album: "Sweetener",
        genre: "Pop",
        youtube: "ffxKSjUwKdU"
      },
      {
        title: "Not Your Oridnary",
        artist: "Stella Mwangi",
        album: "No Games",
        genre: "Dance/Electronic",
        youtube: "jKTWUWFDHxA"
      },
      {
        title: "Obsesión",
        artist: "Aventura",
        album: "We Broke the Rules",
        genre: "Bachata",
        youtube: "qRTY_ja4EoU"
      },
      {
        title: "OMG",
        artist: "Arash ft. Snoop Dogg",
        album: "OMG",
        genre: "Dance/Electronic",
        youtube: "pXvoeCgi59o"
      },
      {
        title: "One Kiss",
        artist: "Dua Lipa, Calvin Harris",
        album: "Dua Lipa",
        genre: "Dance",
        youtube: "DkeiKbqa02g"
      },
      {
        title: "Pac Man",
        artist: "Toshio Kai (Dancing Bros.)",
        album: "",
        genre: "",
        youtube: "eQ3ounnGZIA"
      },
      {
        title: "Rhythm of the Night",
        artist: "Corona (Ultraclub 90)",
        album: "",
        genre: "Dance",
        youtube: "_MH5e7Gx8wU"
      },
      {
        title: "Shaky Shaky",
        artist: "Daddy Yankee",
        album: "El Disco Duro",
        genre: "Pop",
        youtube: "aKuivabiOns"
      },
      {
        title: "Sugar",
        artist: "Maroon 5",
        album: "V",
        genre: "Pop",
        youtube: "48VSP-atSeI"
      },
      {
        title: "Sweet Little Unforgettable Thing",
        artist: "Bea Miller",
        album: "Aurora",
        genre: "Pop",
        youtube: "uGjCUY59B_0"
      },
      {
        title: "Sweet Sensation",
        artist: "Flo Rida",
        album: "Sweet Sensation",
        genre: "Hip-Hop/Rap",
        youtube: "iDo4tqzmVoA"
      },
      {
        title: "Toy",
        artist: "Netta Barzilai",
        album: "Toy (Riddler Remixes)",
        genre: "",
        youtube: "CziHrYYSyPc"
      },
      {
        title: "Water Me",
        artist: "Lizzo",
        album: "Cuz I Love You",
        genre: "Pop",
        youtube: "49I6JrUnSQg"
      },
      {
        title: "Where Are You Now?",
        artist: "Lady Leshurr ft. Wiley",
        album: "Where Are You Now?",
        genre: "",
        youtube: "WLFd6xaRLN0"
      },
      {
        title: "Work Work",
        artist: "Britney Spears",
        album: "Britney Jean",
        genre: "Pop",
        youtube: "OpXFaynSHNQ"
      },
      {
        title: "",
        artist: "",
        album: "",
        genre: "",
        youtube: ""
      }

    ]
  },
  {
    title: "NBA 2K19",
    year: "2018",
    cover: "Nba 2k19.jpg",
    songs: [
      {
        title: "Hop Out (feat. A$AP Ferg)",
        artist: "A$AP Twelvyy",
        album: "12",
        genre: "Hip-Hop/Rap",
        youtube: "_RDVOYOW-rs"
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
  },
  {
    title: "NHL 2017 (NA)",
    year: "2016",
    cover: "nhl2017.jpg",
    songs: [
      {
        title: "Fleet Foot",
        artist: "Black Pistol Fire",
        album: "Don't Wake the Riot",
        genre: "Indie",
        youtube: "poxUxgDuh-g"
      },
      {
        title: "Somebody's Gonna Get It",
        artist: "Selves",
        album: "Caligo",
        genre: "Indie",
        youtube: "pFbIy_daFJE"
      },
      {
        title: "No Way Out feat. Kat Nestel",
        artist: "Vicetone",
        album: "No Way Out (feat. Kat Nestel)",
        genre: "Dance/Electronic",
        youtube: "Q--nWCmM-3g"
      },
      {
        title: "Figuring It Out",
        artist: "SWMRS",
        album: "Drive North",
        genre: "Indie",
        youtube: "arG2PSaR6e4"
      },
      {
        title: "In Your Head",
        artist: "Bob Bradley, Matt Sanchez, Steve Dymond, Giuseppe De Luca",
        album: "(unknown)",
        genre: "(unknown)",
        youtube: ""
      },
      {
        title: "Underestimated feat. JD Era and JRDN",
        artist: "Maestro Fresh Wes",
        album: "Compositions Volume 1",
        genre: "Hip-Hop/Rap",
        youtube: "gh1Qyf3FEpo"
      },
      {
        title: "Headturner",
        artist: "Max Brodie",
        album: "ANW2212 - Neon Grooves",
        genre: "Dance/Electronic",
        youtube: "TQs4Ti1DrE0"
      },
      {
        title: "Righteous Smoke",
        artist: "Monster Truck",
        album: "The Brown EP",
        genre: "hard rock",
        youtube: ""
      },
      {
        title: "You Feel Alive",
        artist: "Chris Bussey, James Brander",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "Air Traffic Controller",
        artist: "People Watching",
        album: "Black Box",
        genre: "Pop",
        youtube: "YrVQb7iB86A"
      },
      {
        title: "Feeling Good",
        artist: "The Sheepdogs",
        album: "The Sheepdogs",
        genre: "Rock",
        youtube: "arMJ6j1Jnh8"
      },
      {
        title: "Round and Round",
        artist: "Arkells",
        album: "Morning Report (Deluxe Edition)",
        genre: "Indie",
        youtube: "2_1dz6vK2bI"
      },
      {
        title: "Young & Wild",
        artist: "The Strumbellas",
        album: "Hope",
        genre: "Rock",
        youtube: "ot1gidixnzQ"
      },
      {
        title: "Wake Up Call",
        artist: "Nothing But Thieves",
        album: "Nothing But Thieves",
        genre: "Indie",
        youtube: "ClQlF-0mbZc"
      },
      {
        title: "Until You Were Gone ft. Emily Warren",
        artist: "The Chainsmokers & Tritonal",
        album: "Bouquet",
        genre: "Dance/Electronic",
        youtube: "u-51P-Gdt6A"
      },
      {
        title: "Do What I Do",
        artist: "William Davies, Dag Torgersbraten, Ian Tunstall",
        album: "ANW2034 - Rap",
        genre: "Hip-Hop/Rap",
        youtube: "NjUBfli2fEg"
      },
      {
        title: "Crash 2.0",
        artist: "Adventure Club vs DallasK",
        album: "Crash 2.0",
        genre: "Dance/Electronic",
        youtube: "KlcJjMxjjBs"
      }
    ]
  },
  {
    title: "NHL 2018 (NA)",
    year: "2017",
    cover: "nhl2018.jpg",
    songs: [
      {
        title: "Fire That Burns",
        artist: "Circa Waves",
        album: "Different Creatures",
        genre: "Indie",
        youtube: "miIIAQDVTVA"
      },
      {
        title: "Ready For The Devil (No Mercy)",
        artist: "Vision Vision",
        album: "(unknown)",
        genre: "Indie",
        youtube: "PE3TZn_LtkE"
      },
      {
        title: "Havent You Heard",
        artist: "The North Panics",
        album: "No Way Out (feat. Kat Nestel)",
        genre: "Rock",
        youtube: "BoTg3vGmc78"
      },
      {
        title: "Figuring It Out",
        artist: "SWMRS",
        album: "Drive North",
        genre: "Indie",
        youtube: "arG2PSaR6e4"
      },
      {
        title: "In Your Head",
        artist: "Bob Bradley, Matt Sanchez, Steve Dymond, Giuseppe De Luca",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "Underestimated feat. JD Era and JRDN",
        artist: "Maestro Fresh Wes",
        album: "Compositions Volume 1",
        genre: "Hip-Hop/Rap",
        youtube: "gh1Qyf3FEpo"
      },
      {
        title: "Headturner",
        artist: "Max Brodie",
        album: "ANW2212 - Neon Grooves",
        genre: "Dance/Electronic",
        youtube: "TQs4Ti1DrE0"
      },
      {
        title: "Righteous Smoke",
        artist: "Monster Truck",
        album: "The Brown EP",
        genre: "hard rock",
        youtube: ""
      },
      {
        title: "You Feel Alive",
        artist: "Chris Bussey, James Brander",
        album: "",
        genre: "",
        youtube: ""
      },
      {
        title: "Air Traffic Controller",
        artist: "People Watching",
        album: "Black Box",
        genre: "Pop",
        youtube: "YrVQb7iB86A"
      },
      {
        title: "Feeling Good",
        artist: "The Sheepdogs",
        album: "The Sheepdogs",
        genre: "Rock",
        youtube: "arMJ6j1Jnh8"
      },
      {
        title: "Round and Round",
        artist: "Arkells",
        album: "Morning Report (Deluxe Edition)",
        genre: "Indie",
        youtube: "2_1dz6vK2bI"
      },
      {
        title: "Young & Wild",
        artist: "The Strumbellas",
        album: "Hope",
        genre: "Rock",
        youtube: "ot1gidixnzQ"
      },
      {
        title: "Wake Up Call",
        artist: "Nothing But Thieves",
        album: "Nothing But Thieves",
        genre: "Indie",
        youtube: "ClQlF-0mbZc"
      },
      {
        title: "Until You Were Gone ft. Emily Warren",
        artist: "The Chainsmokers & Tritonal",
        album: "Bouquet",
        genre: "Dance/Electronic",
        youtube: "u-51P-Gdt6A"
      },
      {
        title: "Do What I Do",
        artist: "William Davies, Dag Torgersbraten, Ian Tunstall",
        album: "ANW2034 - Rap",
        genre: "Hip-Hop/Rap",
        youtube: "NjUBfli2fEg"
      },
      {
        title: "Crash 2.0",
        artist: "Adventure Club vs DallasK",
        album: "Crash 2.0",
        genre: "Dance/Electronic",
        youtube: "KlcJjMxjjBs"
      }
    ]
  }

];
