/* =========================================
   MANIPUR 1 -- DATA
   All destinations, categories and content
========================================= */

/* ============ MAIN DESTINATIONS (with images) ============ */

const destinations = [

  {
    id: 'loktak',
    name: 'Loktak Lake',
    short: "India's largest freshwater lake with floating islands.",
    category: 'nature',
    icon: '🌊',
    gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Loktak_Lake_View.jpg/800px-Loktak_Lake_View.jpg',
    location: 'Bishnupur District, Manipur',
    distanceFromImphal: '~48 km',
    bestTime: 'October to March',
    featured: true,
    about: "Loktak Lake is the largest freshwater lake in Northeast India and one of Manipur's most iconic natural wonders. It's famous for its floating masses of vegetation called phumdis, which form unique circular islands on the water.",
    highlights: [
      'Floating phumdis across the lake',
      'Sendra viewpoint with panoramic views',
      'Boating and sightseeing',
      'Gateway to Keibul Lamjao National Park',
      'Fresh local fish cuisine nearby'
    ],
    mapQuery: 'Loktak Lake Manipur'
  },

  {
    id: 'keibul',
    name: 'Keibul Lamjao National Park',
    short: "The world's only floating national park, home of the Sangai deer.",
    category: 'wildlife',
    icon: '🦌',
    gradient: 'linear-gradient(135deg,#065F46,#10B981)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Sangai_deer.jpg/800px-Sangai_deer.jpg',
    location: 'Bishnupur District, Manipur',
    distanceFromImphal: '~53 km',
    bestTime: 'November to March',
    featured: true,
    about: "Keibul Lamjao is the world's only floating national park, located on Loktak Lake. It's the last natural home of the Sangai, the brow-antlered deer that is Manipur's state animal and a symbol of the state's identity.",
    highlights: [
      'Only floating national park in the world',
      'Home of the endangered Sangai deer',
      'Unique wetland ecosystem',
      'Rich birdlife and biodiversity',
      'Boat rides through the park'
    ],
    mapQuery: 'Keibul Lamjao National Park Manipur'
  },

  {
    id: 'shirui',
    name: 'Shirui Hills',
    short: "Home of the rare Shirui Lily, Manipur's state flower.",
    category: 'nature',
    icon: '🌸',
    gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Shirui_lily_flower.jpg/800px-Shirui_lily_flower.jpg',
    location: 'Ukhrul District, Manipur',
    distanceFromImphal: '~85 km',
    bestTime: 'May to June (lily season)',
    featured: true,
    about: "Shirui Hills in Ukhrul District are famous for the Shirui Lily, a rare flower found only here in the world. The hills offer beautiful mountain scenery and are a peaceful retreat in Manipur's eastern highlands.",
    highlights: [
      'Rare Shirui Lily (blooms in May–June)',
      'Panoramic mountain views',
      'Trekking routes',
      'Rich flora and fauna',
      'Local Tangkhul Naga culture'
    ],
    mapQuery: 'Shirui Hills Manipur'
  },

  {
    id: 'dzuko',
    name: 'Dzuko Valley',
    short: 'A dramatic green valley on the Manipur–Nagaland border.',
    category: 'adventure',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg,#C25E3A,#E8A87C)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Dzukou_Valley.jpg/800px-Dzukou_Valley.jpg',
    location: 'Senapati District, Manipur',
    distanceFromImphal: '~110 km',
    bestTime: 'June to September',
    featured: true,
    about: "Dzuko Valley is a spectacular valley straddling the border of Manipur and Nagaland. Known for its emerald-green landscape, seasonal flowers and mountain streams, it's a favourite trekking destination in Northeast India.",
    highlights: [
      'Trekking through emerald hills',
      'Dzuko Lily in monsoon',
      'Mountain streams and meadows',
      'Sunrise and sunset views',
      'Border of Manipur and Nagaland'
    ],
    mapQuery: 'Dzuko Valley Manipur'
  },

  {
    id: 'sadu-chiru',
    name: 'Sadu Chiru Waterfall',
    short: 'A scenic three-tier waterfall surrounded by forest.',
    category: 'nature',
    icon: '💧',
    gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Waterfall_in_Manipur.jpg/800px-Waterfall_in_Manipur.jpg',
    location: 'Near Tiddim Road, Manipur',
    distanceFromImphal: '~25 km',
    bestTime: 'July to October',
    featured: false,
    about: "Sadu Chiru Waterfall is a beautiful three-tier waterfall surrounded by green hills and forest. It's a popular day-trip destination from Imphal, especially in the monsoon season when the falls are at their fullest.",
    highlights: [
      'Three waterfall tiers',
      'Forest trek to the falls',
      'Picnic-friendly surroundings',
      'Seasonal wildflowers',
      'Cool, shaded environment'
    ],
    mapQuery: 'Sadu Chiru Waterfall Manipur'
  },

  {
    id: 'khangkhui',
    name: 'Khangkhui Lime Caves',
    short: 'Prehistoric limestone caves with Stone Age history.',
    category: 'heritage',
    icon: '🪨',
    gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Khangkhui_Cave.jpg/800px-Khangkhui_Cave.jpg',
    location: 'Ukhrul District, Manipur',
    distanceFromImphal: '~90 km',
    bestTime: 'October to March',
    featured: false,
    about: "Khangkhui Lime Caves are prehistoric limestone caves in Ukhrul District. Excavations here have uncovered evidence of Stone Age habitation, making them archaeologically important and fascinating to explore.",
    highlights: [
      'Prehistoric Stone Age site',
      'Natural limestone formations',
      'Archaeological significance',
      'Guided cave exploration',
      'Surrounding forest trails'
    ],
    mapQuery: 'Khangkhui Lime Caves Manipur'
  },

  {
    id: 'kangla',
    name: 'Kangla Fort',
    short: "The historic royal capital and spiritual heart of Manipur.",
    category: 'heritage',
    icon: '🏯',
    gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Kangla_Fort%2C_Imphal%2C_Manipur.jpg/800px-Kangla_Fort%2C_Imphal%2C_Manipur.jpg',
    location: 'Imphal, Manipur',
    distanceFromImphal: 'In city',
    bestTime: 'October to March',
    featured: true,
    about: "Kangla Fort is the historic fortified palace complex in the heart of Imphal and the traditional seat of Manipur's rulers. It's one of the most important heritage sites in the state, with ancient temples, sacred sites and the iconic Kangla Sha guardian statues.",
    highlights: [
      'Ancient royal palace complex',
      'Kangla Sha guardian statues',
      'Sacred temples and sites',
      'Archaeological museum',
      'Beautiful gardens and moat'
    ],
    mapQuery: 'Kangla Fort Imphal Manipur'
  },

  {
    id: 'ima-keithel',
    name: 'Ima Keithel',
    short: "The world's largest women-run market, in central Imphal.",
    category: 'culture',
    icon: '🧺',
    gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Ima_Keithel.jpg/800px-Ima_Keithel.jpg',
    location: 'Imphal, Manipur',
    distanceFromImphal: 'In city',
    bestTime: 'Year-round (mornings best)',
    featured: true,
    about: "Ima Keithel, meaning Mother's Market, is one of the world's largest markets run entirely by women. Located in central Imphal, it's been a commercial and cultural hub of Manipur for centuries, selling everything from handloom to fresh produce.",
    highlights: [
      'Run entirely by women (Ima = mother)',
      'Over 3,000 women vendors',
      'Traditional handloom and handicrafts',
      'Local vegetables and produce',
      'Living cultural heritage'
    ],
    mapQuery: 'Ima Keithel Imphal Manipur'
  },

  {
    id: 'govindaji',
    name: 'Shree Govindaji Temple',
    short: 'A historic Vaishnavite temple in the heart of Imphal.',
    category: 'heritage',
    icon: '🛕',
    gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)',
    image: 'assets/images/govindaji.jpg',
    location: 'Imphal, Manipur',
    distanceFromImphal: 'In city',
    bestTime: 'Year-round',
    featured: false,
    about: "Shree Govindaji Temple is one of the most important Vaishnavite temples in Manipur, built in the 19th century. It reflects the deep-rooted Vaishnavism in Manipuri culture, with beautiful architecture and regular devotional music.",
    highlights: [
      'Historic Vaishnavite temple',
      'Manipuri devotional music',
      'Beautiful traditional architecture',
      'Near Kangla Fort',
      'Active place of worship'
    ],
    mapQuery: 'Shree Govindaji Temple Imphal Manipur'
  },

  {
    id: 'state-museum',
    name: 'Manipur State Museum',
    short: "Explore Manipur's history, art and culture in one place.",
    category: 'heritage',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)',
    image: 'assets/images/state-museum.jpg',
    location: 'Imphal, Manipur',
    distanceFromImphal: 'In city',
    bestTime: 'Year-round',
    featured: false,
    about: "The Manipur State Museum in Imphal houses a rich collection of artifacts, tribal costumes, historical documents, and art. It's the best introduction to Manipur's long history and cultural diversity.",
    highlights: [
      'Historical artifacts',
      'Traditional costumes',
      'Manipuri art and crafts',
      'Archive of Manipur history',
      'Good rainy-day activity'
    ],
    mapQuery: 'Manipur State Museum Imphal'
  },

  {
    id: 'moirang',
    name: 'Moirang (Thanga)',
    short: "Historic town of the INA and the legendary Khamba-Thoibi story.",
    category: 'heritage',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)',
    image: 'assets/images/moirang.jpg',
    location: 'Bishnupur District, Manipur',
    distanceFromImphal: '~45 km',
    bestTime: 'October to March',
    featured: false,
    about: "Moirang is a historic town with a double claim to fame: it's where the Indian National Army first raised the Indian tricolour on Indian soil in 1944, and it's the setting of the famous Khamba-Thoibi love legend. Nearby Thanga is a scenic island-village on Loktak Lake.",
    highlights: [
      'INA Memorial and museum',
      'Birthplace of Indian tricolour hoisting',
      'Khamba-Thoibi folklore',
      'Thanga island-village nearby',
      'Rich history'
    ],
    mapQuery: 'Moirang Manipur'
  },

  {
    id: 'mao',
    name: 'Mao',
    short: "Manipur's hill station gateway to Nagaland.",
    category: 'nature',
    icon: '🌄',
    gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)',
    image: 'assets/images/mao.jpg',
    location: 'Senapati District, Manipur',
    distanceFromImphal: '~110 km',
    bestTime: 'October to March',
    featured: false,
    about: "Mao is a small town at the Manipur–Nagaland border, sitting at around 5,700 ft. With cool weather, pine forests and sweeping valley views, it's a pleasant stopover between Imphal and Kohima. In spring, cherry blossoms paint the town pink.",
    highlights: [
      'Cool hill station climate',
      'Cherry blossoms in spring',
      'Pine forests and valleys',
      'Naga cultural influence',
      'Stopover to Nagaland'
    ],
    mapQuery: 'Mao Manipur'
  },

  {
    id: 'moreh',
    name: 'Moreh',
    short: "Border town and India's gateway to Southeast Asia.",
    category: 'adventure',
    icon: '🚪',
    gradient: 'linear-gradient(135deg,#C25E3A,#E8A87C)',
    image: '',
    location: 'Tengnoupal District, Manipur',
    distanceFromImphal: '~110 km',
    bestTime: 'November to February',
    featured: false,
    about: "Moreh is a border town on the India–Myanmar border. It's a major trading hub and the gateway for India's Look East policy, with a unique blend of Indian and Southeast Asian cultures.",
    highlights: [
      'India–Myanmar border',
      'International trade hub',
      'Namphalong market nearby',
      'Unique cultural blend',
      'Road to Southeast Asia'
    ],
    mapQuery: 'Moreh Manipur'
  },

  {
    id: 'andro',
    name: 'Andro Village',
    short: 'Ancient pottery village with a cultural heritage complex.',
    category: 'culture',
    icon: '🏺',
    gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)',
    image: '',
    location: 'Imphal East, Manipur',
    distanceFromImphal: '~25 km',
    bestTime: 'October to March',
    featured: false,
    about: "Andro Village is famous for its traditional pottery, ancient culture, and the Andro Cultural Heritage Complex. It's a glimpse into pre-Hindu Manipuri traditions and the lives of the local communities.",
    highlights: [
      'Traditional pottery making',
      'Cultural heritage complex',
      'Ancient Meitei traditions',
      'Local handicrafts',
      'Authentic village experience'
    ],
    mapQuery: 'Andro Village Manipur'
  }

];

/* ============ MORE PLACES TO EXPLORE (no images) ============ */

const morePlaces = [

  {
    id: 'war-cemetery',
    name: 'Imphal War Cemetery',
    short: 'A moving WWII memorial maintained by the Commonwealth.',
    icon: '🎖️',
    gradient: 'linear-gradient(135deg,#1E3A8A,#60A5FA)',
    about: "The Imphal War Cemetery honours soldiers who died in the Battle of Imphal during World War II. Beautifully maintained by the Commonwealth War Graves Commission, it's a solemn reminder of Manipur's role in world history.",
    mapQuery: 'Imphal War Cemetery Manipur'
  },

  {
    id: 'yangoupokpi',
    name: 'Yangoupokpi Lokchao Wildlife Sanctuary',
    short: 'Dense forest sanctuary on the Myanmar border.',
    icon: '🐘',
    gradient: 'linear-gradient(135deg,#065F46,#10B981)',
    about: "Yangoupokpi Lokchao Wildlife Sanctuary lies along the Myanmar border and protects dense tropical forest. It's home to elephants, deer, and a wide range of birds and small mammals.",
    mapQuery: 'Yangoupokpi Lokchao Wildlife Sanctuary Manipur'
  },

  {
    id: 'leimaram',
    name: 'Leimaram Waterfall',
    short: 'A striking waterfall on the Tiddim Road, near Bishnupur.',
    icon: '💦',
    gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)',
    about: "Leimaram Waterfall is a beautiful twin waterfall near Bishnupur, especially dramatic in the monsoon when the water rushes down the rocks in full force.",
    mapQuery: 'Leimaram Waterfall Manipur'
  },

  {
    id: 'khonghampat',
    name: 'Khonghampat Orchidarium',
    short: "A living collection of Manipur's rare orchids.",
    icon: '🌺',
    gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)',
    about: "The Khonghampat Orchidarium is a botanical garden dedicated to orchids, with over 100 species including rare and endangered varieties native to Manipur. A peaceful green escape near Imphal.",
    mapQuery: 'Khonghampat Orchidarium Manipur'
  },

  {
    id: 'phayeng',
    name: 'Phayeng Village',
    short: "A model village preserving Manipur's traditional way of life.",
    icon: '🏘️',
    gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)',
    about: "Phayeng is a village near Imphal that has preserved Manipuri traditions, crafts, and community life. It's considered a model village and is a great place to experience local culture authentically.",
    mapQuery: 'Phayeng Village Manipur'
  },

  {
    id: 'lamphelpat',
    name: 'Lamphelpat',
    short: 'Home to the scenic Lamphelpat wetland area.',
    icon: '🦆',
    gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)',
    about: "Lamphelpat is a wetland area near Imphal, popular with birdwatchers in the winter months when migratory birds arrive. It's a quiet natural escape close to the city.",
    mapQuery: 'Lamphelpat Imphal Manipur'
  }

];

/* ============ CATEGORIES ============ */

const categories = [
  { id: 'nature',    name: 'Nature',      icon: '🌿', desc: 'Lakes, hills & waterfalls', gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)' },
  { id: 'heritage',  name: 'Heritage',    icon: '🏯', desc: 'History & culture',         gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)' },
  { id: 'adventure', name: 'Adventure',   icon: '🥾', desc: 'Trekking & exploration',    gradient: 'linear-gradient(135deg,#C25E3A,#E8A87C)' },
  { id: 'culture',   name: 'Culture',     icon: '🎭', desc: 'Festivals & traditions',    gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)' },
  { id: 'wildlife',  name: 'Wildlife',    icon: '🦌', desc: 'Parks & sanctuaries',       gradient: 'linear-gradient(135deg,#065F46,#10B981)' },
  { id: 'photo',     name: 'Photo Spots', icon: '📸', desc: 'Beautiful views',           gradient: 'linear-gradient(135deg,#1E3A8A,#60A5FA)' }
];

/* ============ FESTIVALS (carousel on home) ============ */

const festivals = [
  { name: 'Yaoshang',        desc: "Manipur's Holi -- five days of joy",    icon: '🎨', gradient: 'linear-gradient(135deg,#C25E3A,#E8A87C)' },
  { name: 'Sangai Festival', desc: "Manipur's biggest cultural showcase",  icon: '🦌', gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)' },
  { name: 'Ningol Chakouba', desc: 'A festival for daughters & sisters',   icon: '💝', gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)' },
  { name: 'Lai Haraoba',     desc: 'Ancient ritual festival of the Meitei', icon: '🎭', gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)' }
];

/* ============ CULTURAL TRADITIONS ============ */

const traditions = [
  {
    id: 'meitei',
    name: 'Meitei',
    short: 'The majority community of the Manipur valley.',
    icon: '🪷',
    gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)',
    about: "The Meitei people are the majority community of Manipur's central valley. They have a rich cultural heritage rooted in Vaishnavism, classical dance, and traditional practices like Lai Haraoba -- an ancient ritual festival honouring local deities."
  },
  {
    id: 'naga',
    name: 'Naga Communities',
    short: 'Hill tribes of northern and eastern Manipur.',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)',
    about: "Manipur's Naga communities -- including the Tangkhul, Mao, Thangal, Maram, and others -- live in the northern and eastern hills. They are known for their vibrant festivals, traditional shawls, log-drum ceremonies, and unique dialects."
  },
  {
    id: 'kuki-zomi',
    name: 'Kuki-Zomi',
    short: 'Hill communities of southern Manipur.',
    icon: '🌿',
    gradient: 'linear-gradient(135deg,#065F46,#10B981)',
    about: "The Kuki-Zomi communities live in southern Manipur's hills. They share cultural traits with the Mizo people, celebrate harvest festivals like Chapchar Kut, and are known for traditional bamboo crafts and community dances."
  },
  {
    id: 'pangal',
    name: 'Pangal (Manipuri Muslims)',
    short: 'Muslim community with deep Manipuri roots.',
    icon: '🕌',
    gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)',
    about: "The Pangal, or Manipuri Muslims, have been part of Manipur for centuries. They speak Meitei, follow Islamic traditions, and have contributed to Manipuri art, cuisine, and cultural life."
  }
];

/* ============ CULTURAL FESTIVALS (inside culture page) ============ */

const culturalFestivals = [
  {
    id: 'yaoshang',
    name: 'Yaoshang',
    short: "Manipur's five-day festival of colours.",
    icon: '🎨',
    gradient: 'linear-gradient(135deg,#C25E3A,#E8A87C)',
    when: 'February–March (full moon)',
    about: "Yaoshang is Manipur's version of Holi, celebrated over five days starting from the full moon of Lamta. It's a joyful festival of colours, music, dances, and community feasts. Children collect donations door-to-door for a community feast."
  },
  {
    id: 'sangai-festival',
    name: 'Sangai Festival',
    short: "Manipur's biggest cultural showcase.",
    icon: '🦌',
    gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)',
    when: 'November 21–30',
    about: "The Sangai Festival is Manipur's flagship tourism and cultural event held every November. It showcases Manipuri dance, music, crafts, cuisine, and sports from all communities -- named after the endangered Sangai deer."
  },
  {
    id: 'ningol-chakouba',
    name: 'Ningol Chakouba',
    short: 'A festival honouring daughters and sisters.',
    icon: '💝',
    gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)',
    when: 'October–November',
    about: "Ningol Chakouba is a beautiful Meitei festival where married daughters return to their parental homes for a grand feast. Brothers give gifts to their sisters, and the day celebrates family bonds."
  },
  {
    id: 'lai-haraoba',
    name: 'Lai Haraoba',
    short: 'Ancient ritual festival of the Meitei.',
    icon: '🎭',
    gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)',
    when: 'April–June',
    about: "Lai Haraoba ('the pleasing of the gods') is one of Manipur's oldest festivals, celebrating the Meitei creation myth and pre-Vaishnavite traditions. It features ritual dances, music, and the sacred art of the Maibi priestesses."
  },
  {
    id: 'cheiraoba',
    name: 'Cheiraoba',
    short: 'Manipuri New Year.',
    icon: '🌅',
    gradient: 'linear-gradient(135deg,#1E3A8A,#60A5FA)',
    when: 'March–April',
    about: "Cheiraoba marks the Manipuri New Year. Families clean their homes, prepare special dishes, and climb nearby hilltops to offer prayers. It's a time of renewal, family gatherings, and community bonding."
  },
  {
    id: 'chavang-kut',
    name: 'Chavang Kut',
    short: 'Kuki-Zomi harvest festival.',
    icon: '🌾',
    gradient: 'linear-gradient(135deg,#065F46,#10B981)',
    when: 'November 1',
    about: "Chavang Kut is the post-harvest festival of the Kuki-Zomi communities. It's celebrated with traditional dances, songs, feasts, and community gatherings, giving thanks for a bountiful harvest."
  },
  {
    id: 'lui-ngai-ni',
    name: 'Lui-Ngai-Ni',
    short: 'Naga seed sowing festival.',
    icon: '🌱',
    gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)',
    when: 'February 15',
    about: "Lui-Ngai-Ni is the seed-sowing festival celebrated by the Naga tribes of Manipur. It's a time to bless the seeds before planting, with traditional dances, songs, and community feasts."
  }
];

/* ============ CUISINE ============ */

const cuisine = [
  { id: 'eromba',         name: 'Eromba',          short: 'Mashed vegetables with fermented fish.', icon: '🥘', gradient: 'linear-gradient(135deg,#C25E3A,#E8A87C)', about: "Eromba is a signature Manipuri dish made with boiled vegetables and fermented fish (ngari), all mashed together with chillies and herbs. It's spicy, savoury, and typically eaten with rice." },
  { id: 'chamthong',      name: 'Chamthong',       short: 'Manipuri vegetable stew.',              icon: '🍲', gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)', about: "Chamthong (also called Kangshoi) is a light, healthy vegetable stew made with seasonal greens, pumpkin, and sometimes dried fish. It's a staple in every Manipuri home." },
  { id: 'singju',         name: 'Singju',          short: 'Spicy cold salad.',                    icon: '🥗', gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)', about: "Singju is a beloved Manipuri salad made with shredded vegetables, herbs, and roasted chickpea flour, tossed with chilli and fermented fish. It's fresh, spicy, and often sold as street food." },
  { id: 'morok-metpa',    name: 'Morok Metpa',     short: 'Spicy chilli chutney.',                 icon: '🌶️', gradient: 'linear-gradient(135deg,#9D174D,#F472B6)', about: "Morok Metpa is a fiery side dish made from crushed green chillies, ngari (fermented fish), and herbs. A little goes a long way -- it's a meal staple in Manipuri households." },
  { id: 'nga-thongba',    name: 'Nga Thongba',     short: 'Manipuri fish curry.',                  icon: '🐟', gradient: 'linear-gradient(135deg,#1E3A8A,#60A5FA)', about: "Nga Thongba is a traditional fish curry, often made with fresh Loktak Lake fish, local herbs, and spices. It's a Sunday favourite in many Meitei homes." },
  { id: 'chak-hao-kheer', name: 'Chak-hao Kheer',  short: 'Black rice pudding.',                   icon: '🍚', gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)', about: "Chak-hao Kheer is a sweet pudding made from Manipur's famous black rice (Chak-hao), milk, and sugar. It's a delicacy served during festivals and special occasions." }
];

/* ============ CRAFTS & HANDLOOM ============ */

const crafts = [
  { id: 'phanek',        name: 'Phanek',               short: 'Traditional Meitei wrap-around skirt.',  icon: '🧵', gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)', about: "Phanek is the traditional wrap-around skirt worn by Meitei women. Handwoven with intricate patterns and colours, each phanek tells a story -- from everyday wear to festival designs." },
  { id: 'innaphi',       name: 'Innaphi',              short: 'Traditional Meitei shawl.',              icon: '🧣', gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)', about: "Innaphi is a traditional Meitei shawl draped over the shoulder. Woven on handlooms, it's an essential part of formal Manipuri attire for both women and men." },
  { id: 'wangkhei-phee', name: 'Wangkhei Phee',        short: 'Fine handwoven fabric from Wangkhei.',   icon: '🪡', gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)', about: "Wangkhei Phee is a special handwoven fabric from the Wangkhei area of Imphal. It's known for its fine texture and elegant designs, used in traditional ceremonies and weddings." },
  { id: 'cane-bamboo',   name: 'Cane & Bamboo Crafts', short: 'Traditional Manipuri basketry.',         icon: '🧺', gradient: 'linear-gradient(135deg,#065F46,#10B981)', about: "Manipur's artisans are masters of cane and bamboo crafts, creating baskets, mats, furniture, and decorative items. It's a centuries-old craft passed down through generations." },
  { id: 'pottery',       name: 'Andro Pottery',        short: 'Traditional pottery from Andro village.', icon: '🏺', gradient: 'linear-gradient(135deg,#C25E3A,#E8A87C)', about: "Andro village near Imphal is famous for its traditional pottery. Local artisans shape clay by hand into pots, jars, and decorative pieces -- an ancient craft still alive today." },
  { id: 'dolls',         name: 'Manipuri Dolls',       short: 'Handcrafted dolls in traditional dress.', icon: '🎎', gradient: 'linear-gradient(135deg,#1E3A8A,#60A5FA)', about: "Manipuri artisans craft beautiful dolls dressed in traditional Meitei, Naga, and Kuki attire. These dolls are popular souvenirs and preserve the state's diverse cultural dress." }
];

/* ============ DANCE & MUSIC ============ */

const danceMusic = [
  { id: 'manipuri-dance', name: 'Manipuri Classical Dance', short: "One of India's eight classical dance forms.", icon: '💃', gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)', about: "Manipuri dance (Jagoi) is one of India's eight classical dance forms, rooted in Vaishnavism and the Radha-Krishna love story. It's known for its graceful, fluid movements and beautiful costumes." },
  { id: 'ras-lila',       name: 'Ras Lila',                 short: 'Devotional dance-drama of Radha & Krishna.', icon: '🎭', gradient: 'linear-gradient(135deg,#9D174D,#F472B6)', about: "Ras Lila is a devotional dance-drama performed in Manipur, depicting the love of Radha and Krishna. Performed by both women and men (as gopis), it's a spiritual and artistic masterpiece." },
  { id: 'pung',           name: 'Pung Cholom',              short: 'Manipuri drum dance.',                       icon: '🥁', gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)', about: "Pung Cholom is a dynamic drum dance performed by male dancers playing the Pung (a barrel drum). It combines rhythm, acrobatics, and devotion in a spectacular display." },
  { id: 'pena',           name: 'Pena',                     short: 'Ancient Manipuri string instrument.',         icon: '🎻', gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)', about: "The Pena is a traditional Manipuri string instrument played by the Pena player (Pena Khongba) during rituals and storytelling. It's one of the oldest instruments of the Meitei tradition." }
];

/* ============ SPORTS & GAMES ============ */

const sports = [
  { id: 'sagol-kangjei', name: 'Sagol Kangjei (Polo)', short: 'Manipur -- the birthplace of modern polo.',     icon: '🐎', gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)', about: "Sagol Kangjei is the traditional Manipuri form of polo, played on Manipuri ponies. Manipur is widely recognised as the birthplace of modern polo, and the game is a source of great pride for the state." },
  { id: 'thang-ta',      name: 'Thang-Ta',             short: 'Manipuri martial art with sword and spear.',  icon: '⚔️', gradient: 'linear-gradient(135deg,#0F172A,#475569)', about: "Thang-Ta is Manipur's traditional martial art, using the sword (thang) and spear (ta). It's a complete combat system that also includes unarmed techniques, and is deeply tied to Manipuri warrior heritage." },
  { id: 'mukna',         name: 'Mukna',                short: 'Traditional Manipuri wrestling.',             icon: '🤼', gradient: 'linear-gradient(135deg,#C25E3A,#E8A87C)', about: "Mukna is a traditional form of Manipuri wrestling, practiced during festivals and special occasions. Wrestlers wear a special belt and the matches are a test of strength and skill." },
  { id: 'yubi-lakpi',    name: 'Yubi Lakpi',           short: 'Manipuri rugby-style game.',                  icon: '🏉', gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)', about: "Yubi Lakpi ('coconut snatching') is a traditional Manipuri game similar to rugby. Players try to carry a greased coconut to the goal line -- a fun, fast-paced team sport." }
];

/* ============ LANGUAGE & LITERATURE ============ */

const language = [
  { id: 'meitei-mayek', name: 'Meitei Mayek',        short: 'The ancient script of Manipur.',           icon: '🔤', gradient: 'linear-gradient(135deg,#0E5C4A,#34D399)', about: "Meitei Mayek is the ancient script of the Meitei language. Once widely used, it was replaced by Bengali script during the 18th century, but has been revived in recent decades and is now taught in schools across Manipur." },
  { id: 'meitei-lon',   name: 'Meitei Lon',          short: 'The Manipuri language.',                    icon: '🗣️', gradient: 'linear-gradient(135deg,#5B21B6,#A78BFA)', about: "Meitei Lon (Manipuri) is the official language of Manipur and one of India's 22 scheduled languages. It's a tonal language spoken by over 1.5 million people in Manipur and beyond." },
  { id: 'folk-tales',   name: 'Folk Tales & Legends', short: 'Stories passed down for generations.',      icon: '📖', gradient: 'linear-gradient(135deg,#B8860B,#E8C34A)', about: "Manipur has a rich tradition of folk tales, including the legendary love story of Khamba and Thoibi, the epic of the seven clans, and stories of the Meitei gods and goddesses. These tales are performed, sung, and passed down through generations." }
];