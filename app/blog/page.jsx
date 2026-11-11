import Link from 'next/link'

export const metadata = {
  title: 'Collector Blog: Hot Wheels, Funko, Star Wars & More | The Shelf Cartel',
  description: 'Guides and news for toy and collectible fans in Canada: how to start a Hot Wheels collection, what to look for when buying, and more.',
  alternates: { canonical: 'https://theshelfcartel.com/blog' },
}

const posts = [
  {
    href: '/blog/guide-debuter-collection-hot-wheels',
    title: 'How to Start a Hot Wheels Collection: A Beginner’s Guide for Canadian Collectors',
    excerpt: 'Pick a theme, learn the difference between mainline and Premium, check condition and buy smart.',
  },
  {
    href: '/blog/hot-wheels-premium-vs-mainline',
    title: 'Hot Wheels Premium vs Mainline: How to Tell the Difference',
    excerpt: 'Check the base, wheels, paint details, packaging and price to know exactly what you are buying.',
  },
  {
    href: '/blog/ou-acheter-funko-pop-rares-canada',
    title: 'Where to Buy Rare Funko Pop Figures in Canada',
    excerpt: 'What makes a Funko Pop rare, where to look, how to check the box and how to avoid fakes.',
  },
  {
    href: '/blog/hot-wheels-car-culture-series-a-collectionner',
    title: 'Hot Wheels Car Culture: Series Worth Collecting',
    excerpt: 'How the themed sets work, how to read the card and how to pick series worth adding to your shelf.',
  },
  {
    href: '/blog/hot-wheels-treasure-hunt-guide',
    title: 'Hot Wheels Treasure Hunts: How to Spot a Regular or Super Treasure Hunt',
    excerpt: 'The flame logo, the card, the paint and the tires: how to recognize a Treasure Hunt before you buy.',
  },
  {
    href: '/blog/collectors-holiday-gift-guide-canada',
    title: 'Holiday Gift Guide for Collectors in Canada',
    excerpt: 'Gift ideas for Hot Wheels, Funko Pop, LEGO, Star Wars and Marvel fans, plus tips on condition, boxes and ordering in time.',
  },
  {
    href: '/blog/pokemon-cards-collecting-canada-beginners',
    title: 'Pokémon Cards for Beginners: Condition, Sets and Smart Buying',
    excerpt: 'How to read a card, judge condition, choose between singles, lots and sealed, and avoid fakes.',
  },
  {
    href: '/blog/lego-buying-guide-collectors-canada',
    title: 'LEGO Buying Guide for Collectors: Sets, Condition and Smart Deals',
    excerpt: 'Sealed or used, box condition, missing pieces and minifigures: how to buy LEGO sets with confidence.',
  },
  {
    href: '/blog/pokemon-tcg-new-set-launch-buying-guide',
    title: 'New Pokémon TCG Set in November: How to Buy Smart on Launch Season',
    excerpt: 'Elite Trainer Box, booster packs or singles? Check the seal, skip the hype and avoid fakes.',
  },
  {
    href: '/blog/matchbox-collecting-guide-vintage-collectors',
    title: 'Matchbox Collecting Guide: Vintage, Collectors Series and Smart Buying',
    excerpt: 'Vintage or modern, the Collectors line, condition checks and how to buy Matchbox cars with confidence.',
  },
  {
    href: '/blog/star-wars-marvel-legends-collecting-guide-canada',
    title: 'Star Wars and Marvel Legends Collecting Guide: Scales, Lines and Smart Buying',
    excerpt: 'Pick a scale, know the lines, check the box and buy Star Wars and Marvel Legends figures with confidence.',
  },
  {
    href: '/blog/hallmark-keepsake-ornaments-collecting-guide-canada',
    title: 'Hallmark Keepsake Ornaments: A Collecting Guide for the Holiday Season',
    excerpt: 'Series and year, box condition, exclusives and how to order early and ship safely.',
  },
  {
    href: '/blog/transformers-dc-multiverse-collecting-guide-canada',
    title: 'Transformers and DC Multiverse Collecting Guide: Lines, Scales and Smart Buying',
    excerpt: 'Know the lines and scales, check packaging and accessories, and spot reissues and exclusives.',
  },
  {
    href: '/blog/jurassic-park-world-collectibles-guide-canada',
    title: 'Jurassic Park and Jurassic World Collectibles: Dinosaurs, Hot Wheels and Smart Buying',
    excerpt: 'Pick a lane, check the size, features and packaging, and buy dinosaur figures and vehicles with confidence.',
  },
  {
    href: '/blog/tmnt-collectibles-guide-canada',
    title: 'Teenage Mutant Ninja Turtles Collectibles: Figures, Hot Wheels and Smart Buying',
    excerpt: 'Pick a lane, check the scale, accessories and packaging, and buy TMNT figures and vehicles with confidence.',
  },
]

export default function Blog() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px' }}>
      <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 40, letterSpacing: 2, color: '#fff', marginBottom: 6 }}>COLLECTOR BLOG</h1>
      <p style={{ color: '#9a9ab0', fontSize: 15, marginBottom: 24 }}>Guides and tips for toy and collectible fans in Canada.</p>
      {posts.map(p => (
        <Link key={p.href} href={p.href} style={{ display: 'block', background: '#0f0f1c', border: '1px solid #1c1c30', borderRadius: 10, padding: '18px 20px', marginBottom: 12, textDecoration: 'none' }}>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: 24, letterSpacing: 1, color: '#e8b820', marginBottom: 6 }}>{p.title}</div>
          <div style={{ color: '#aaa', fontSize: 14, lineHeight: 1.6 }}>{p.excerpt}</div>
        </Link>
      ))}
    </div>
  )
}
