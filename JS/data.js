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
        album: "",
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
        album: "",
        genre: "Dance/Electronic",
        youtube: "JmREem1aoVM"
       
      },
      {
        title: "Flow",
        artist: "Lokate",
        album: "",
        genre: "Dance/Electronic",
        youtube: "9cYbiZEZaOM"
      },
      {
        title: "Vibe Out",
        artist: "GotSome",
        album: "",
        genre: "Dance/Electronic",
        youtube: "sCES_ssF1Zg"
      },
      {
        title: "Raw",
        artist: "Going Quantum",
        album: "",
        genre: "Dance/Electronic",
        youtube: "CRt7vZj4WXM"
      },
      {
        title: "Stand!",
        artist: "Junior Prom",
        album: "",
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
        album: "",
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
        album: "",
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
        album: "",
        genre: " Dance/Electronic",
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
        album: "",
        genre: "Dance/Electronic",
        youtube: "50X6FMYTq9k"
      },
      {
        title: "Odyssey",
        artist: "No Wyld",
        album: "",
        genre: " Alternative/Indie",
        youtube: "Ulbt3tASoxw"
      },
      {
        title: "Better Hide, Better Run",
        artist: "The Glitch Mob",
        album: "",
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
    title: "Rock-Example Game Tit(le)",
    year: "2019",
    cover: "cover.jpg",
    songs: [
      {
        title: "Title #1",
        artist: "Artist #1",
        album: "Album #1",
        genre: "Rock"
      }
    ]
  }
];
