export const cities = [
  {
    slug: 'chengdu',
    name: 'Chengdu',
    province: 'Sichuan',
    tagline: 'Pandas, tea houses, spicy food, and relaxed local life.',
    heroImage: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=1600&auto=format&fit=crop',
    highlights: ['Giant Pandas', 'Sichuan Hotpot', 'Tea House Culture', 'Dujiangyan Day Trip'],
    bestFor: ['Food lovers', 'Culture travelers', 'First-time China visitors'],
    attractions: [
      {
        name: 'Chengdu Research Base of Giant Panda Breeding',
        description: 'Add your detailed English introduction here.',
        duration: '2-3 hours',
        type: 'Nature / Animals',
      },
      {
        name: "People's Park Tea House",
        description: 'Add your detailed English introduction here.',
        duration: '1-2 hours',
        type: 'Local Life',
      },
      {
        name: 'Kuanzhai Alley',
        description: 'Add your detailed English introduction here.',
        duration: '1-2 hours',
        type: 'Culture / Food',
      },
    ],
    itineraries: [
      {
        title: '1-Day Classic Chengdu Route',
        description: 'Morning pandas, afternoon old streets, evening hotpot.',
      },
      {
        title: '2-Day Food & Culture Route',
        description: 'Tea houses, Sichuan opera, food market, and city walking route.',
      },
    ],
    travelHacks: [
      'How to get from the airport to downtown Chengdu',
      'How to use Chengdu Metro',
      'Where to stay for first-time visitors',
      'How to order hotpot as a foreign traveler',
    ],
    tours: [
      {
        title: 'Private Chengdu Highlights Tour',
        duration: '8 hours',
        price: 'From CNY 999',
        description: 'Pandas, city culture, local food, and flexible private transport.',
      },
      {
        title: 'Chengdu Night Food Tour',
        duration: '3 hours',
        price: 'From CNY 499',
        description: 'Explore local snacks, hotpot culture, and night streets with a local guide.',
      },
    ],
  },
  {
    slug: 'xian',
    name: "Xi'an",
    province: 'Shaanxi',
    tagline: 'Ancient capital, Terracotta Warriors, city walls, and Tang culture.',
    heroImage: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?q=80&w=1600&auto=format&fit=crop',
    highlights: ['Terracotta Warriors', 'Ancient City Wall', 'Muslim Quarter', 'Tang Dynasty Culture'],
    bestFor: ['History lovers', 'First-time China visitors', 'Family travelers'],
    attractions: [
      {
        name: 'Terracotta Warriors',
        description: 'Add your detailed English introduction here.',
        duration: '3-4 hours',
        type: 'History',
      },
      {
        name: "Xi'an Ancient City Wall",
        description: 'Add your detailed English introduction here.',
        duration: '1-2 hours',
        type: 'Culture / Walking',
      },
    ],
    itineraries: [
      {
        title: "1-Day Xi'an History Route",
        description: 'Terracotta Warriors, old city wall, and Muslim Quarter food walk.',
      },
    ],
    travelHacks: [
      'How to visit the Terracotta Warriors from downtown',
      "Best areas to stay in Xi'an",
      'How to buy tickets for popular sites',
    ],
    tours: [
      {
        title: 'Terracotta Warriors Private Day Tour',
        duration: '8 hours',
        price: 'From CNY 1099',
        description: "Private guide and transport for Xi'an's most famous historical site.",
      },
    ],
  },
];

export const siteThemes = [
  'First-time China Travel',
  'Food & Nightlife',
  'Ancient Culture',
  'Nature & Mountains',
  'Family Friendly',
  'Private Local Tours',
];

export function getCityBySlug(slug) {
  return cities.find((city) => city.slug === slug);
}
