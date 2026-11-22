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
  {
    href: '/blog/video-game-collectibles-guide-canada',
    title: 'Video Game Collectibles: Figures from Zelda Season to Sonic, PlayStation and Mortal Kombat',
    excerpt: 'Pick a franchise, check the scale and accessories, and buy video game figures with confidence this holiday season.',
  },
  {
    href: '/blog/hockey-collectibles-guide-canada',
    title: 'Hockey Collectibles in Canada: Bobbleheads, NHL Figures and Cards for Fans',
    excerpt: 'Pick a team or era, check condition and packaging, and buy hockey bobbleheads, figures and cards with confidence.',
  },
  {
    href: '/blog/vhs-tapes-collecting-guide-canada',
    title: 'VHS Tapes and DVDs for Collectors in Canada: Condition, Language and Smart Buying',
    excerpt: 'Check the tape and the case, understand English and French editions, buy lots wisely and store your movies.',
  },
  {
    href: '/blog/wwe-wrestling-collectibles-guide-canada',
    title: 'WWE Collectibles in Canada: Elite Figures, Retro LJN and Giant Plush for Wrestling Fans',
    excerpt: 'Know the main figure families, check packaging and condition, and build a wrestling shelf with confidence.',
  },
  {
    href: '/blog/mcfarlane-dc-multiverse-collecting-guide-canada',
    title: 'McFarlane DC Multiverse Collecting Guide: Batman, Retro Super Friends and Absolute Figures',
    excerpt: 'Know the lines, Build-A-Figure waves and presales, check the packaging and buy DC figures with confidence.',
  },
  {
    href: '/blog/gi-joe-classified-collecting-guide-canada',
    title: 'G.I. Joe Classified Collecting Guide: Retro Cardbacks, 6 Inch Figures and Smart Buying',
    excerpt: 'Know the Classified Series, retro cardbacks and sets, check the packaging and build a G.I. Joe shelf with confidence.',
  },
  {
    href: '/blog/diecast-funko-storage-display-guide-canada',
    title: 'How to Store and Display Die-Cast Cars and Funko Pop Figures',
    excerpt: 'Light, humidity, protectors, shelves and safe moving: keep your die-cast and Funko Pop collection in great condition.',
  },
  {
    href: '/blog/calico-critters-playmobil-collecting-guide-canada',
    title: 'Calico Critters and Playmobil Collecting Guide for Canadian Collectors',
    excerpt: 'Complete sets, missing pieces, boxes, condition, fakes and storage: a practical guide for Calico Critters and Playmobil collectors in Canada.',
  },
  {
    href: '/blog/hot-wheels-rlc-elite-64-collecting-guide-canada',
    title: 'Hot Wheels RLC and Elite 64 Collecting Guide for Canadian Collectors',
    excerpt: 'Lines, packaging, condition, fakes, sold prices and storage: a practical guide for premium Hot Wheels collectors in Canada.',
  },
  {
    href: '/blog/anime-figures-collecting-guide-canada',
    title: 'Anime Figures Collecting Guide for Canadian Collectors',
    excerpt: 'Figure types, packaging, bootlegs, condition, sold prices and storage: a practical guide for anime figure collectors in Canada.',
  },
  {
    href: '/blog/gundam-gunpla-model-kits-collecting-guide-canada',
    title: 'Gundam and Gunpla Model Kits Collecting Guide for Canadian Collectors',
    excerpt: 'Grades, sealed or built, missing parts, fakes, sold prices and storage: a practical guide for Gunpla collectors in Canada.',
  },
  {
    href: '/blog/masters-of-the-universe-he-man-collecting-guide-canada',
    title: 'Masters of the Universe and He-Man Collecting Guide for Canadian Collectors',
    excerpt: 'Vintage or modern, accessories, condition, reproductions, sold prices and storage: a practical guide for Masters of the Universe collectors in Canada.',
  },
  {
    href: '/blog/retro-80s-90s-nostalgia-toys-collecting-guide-canada',
    title: 'Retro 80s and 90s Nostalgia Toys Collecting Guide for Canadian Collectors',
    excerpt: 'Completeness, condition, packaging, reproductions, sold prices and storage: a practical guide for retro toy collectors in Canada.',
  },
  {
    href: '/blog/squishmallows-plush-collecting-guide-canada',
    title: 'Squishmallows Plush Collecting Guide for Canadian Collectors',
    excerpt: 'Sizes, tags, condition, fakes, cleaning and storage: a practical guide for Squishmallows collectors in Canada.',
  },
  {
    href: '/blog/barbie-doll-collecting-guide-canada',
    title: 'Barbie Doll Collecting Guide for Canadian Collectors',
    excerpt: 'Boxed or loose, outfits and accessories, condition, fakes, sold prices and storage: a practical guide for Barbie collectors in Canada.',
  },
  {
    href: '/blog/disney-pixar-cars-diecast-collecting-guide-canada',
    title: 'Disney Pixar Cars Die-Cast Collecting Guide for Canadian Collectors',
    excerpt: 'Scale, versions, packaging, condition, fakes and storage: a practical guide for Cars die-cast collectors in Canada.',
  },
  {
    href: '/blog/cyber-monday-collectibles-online-shopping-guide-canada',
    title: 'Cyber Monday 2026 for Collectors in Canada: An Online Shopping Checklist',
    excerpt: 'Sold prices, listing details, shipping, returns and fake deals: a checklist for Cyber Monday on November 30.',
  },
  {
    href: '/blog/boxing-day-collectibles-collectors-guide-canada',
    title: 'Boxing Day 2026 for Collectors in Canada: A Smart Shopping Plan',
    excerpt: 'Short list, sold prices, condition checks, fake bargains and shipping: a plan for Boxing Day on December 26.',
  },
  {
    href: '/blog/black-friday-collectibles-guide-canada',
    title: 'Black Friday 2026 for Collectors in Canada: How to Shop Smart',
    excerpt: 'Wishlist, sold prices, condition checks, fake deals and holiday shipping: a plan for Black Friday on November 27.',
  },
  {
    href: '/blog/buying-collectibles-on-ebay-canada-checklist',
    title: 'Buying Collectibles on eBay Canada: An 8-Step Buyer’s Checklist',
    excerpt: 'Exact searches, sold prices, photos, seller feedback, shipping costs and what to do when the parcel arrives.',
  },
  {
    href: '/blog/funko-pop-chase-exclusives-holiday-guide-canada',
    title: 'Funko Pop Chase and Exclusives: How to Read the Box Before You Buy This Holiday Season',
    excerpt: 'Chase variants, glow editions, store exclusive stickers and box condition: buy Funko Pop figures with confidence.',
  },
  {
    href: '/blog/power-rangers-collectibles-guide-canada',
    title: 'Power Rangers Collectibles in Canada: Lightning Collection, Re-Ignition and Vintage Zords',
    excerpt: 'Pick a lane, check the line, accessories and packaging, and buy Power Rangers figures with confidence.',
  },
  {
    href: '/blog/alaskan-de-icer-windshield-winter-guide-canada',
    title: 'Best Windshield De-Icer Spray in Canada: Alaskan De-Icer 3-Pack Winter Guide (Guide FR/EN)',
    excerpt: 'How de-icer spray works, how to use it safely on windshields, mirrors and locks, and what to check before you buy. Dégivrant pour pare-brise.',
  },
  {
    href: '/blog/collectors-stocking-stuffers-under-20-canada',
    title: 'Collector Stocking Stuffers Under $20 in Canada: Small Gifts Big Fans Will Love',
    excerpt: 'Hot Wheels, Matchbox and small die-cast ideas: set a theme, check condition, combine shipping and order early.',
  },
  {
    href: '/blog/little-people-collector-sets-guide-canada',
    title: 'Little People Collector Sets in Canada: A Buyer\'s Guide for Adult Fans',
    excerpt: 'Pick a theme, check the figures and the box, compare sold prices and plan shipping for Fisher-Price Little People Collector sets.',
  },
  {
    href: '/blog/beyblade-x-collecting-guide-canada',
    title: 'Beyblade X Collecting in Canada: Blades, Ratchets, Bits and Smart Buying',
    excerpt: 'Understand the parts, check a set, compare sold prices and avoid mismatched or fake parts when buying Beyblade X.',
  },
  {
    href: '/blog/neca-action-figures-collecting-guide-canada',
    title: "NECA Action Figures in Canada: A Collector's Guide to Horror, Movie and Retro Figures",
    excerpt: 'Read edition labels, check accessories and joints, spot bootlegs and compare sold prices when buying NECA figures.',
  },
  {
    href: '/blog/hot-wheels-formula-1-collecting-guide-canada',
    title: 'Hot Wheels Formula 1 Collecting Guide for Canadian Fans: Teams, Premium Cars and Smart Buying',
    excerpt: 'Pick a team or era, tell Premium from basic cars, read the card and compare sold prices as Hot Wheels and Formula 1 team up.',
  },
  {
    href: '/blog/kidult-collectors-starter-guide-canada',
    title: 'Kidult Collecting in Canada: How Adults Can Start a Toy Collection on a Budget',
    excerpt: 'Pick a lane, set a monthly budget, read condition, compare sold prices and display your pieces.',
  },
  {
    href: '/blog/catalogue-and-insure-your-collection-canada-guide',
    title: 'How to Catalogue and Insure Your Collection: A Practical Guide for Canadian Collectors',
    excerpt: 'A simple inventory, good photos, receipts and the right questions for your insurer.',
  },
  {
    href: '/blog/keep-collectibles-in-box-or-open-them-guide-canada',
    title: 'Keep It in the Box or Open It? A Canadian Collector’s Guide to Sealed vs Opened Collectibles',
    excerpt: 'Packaging, condition and display: how to decide between sealed and opened, and how to protect what you keep.',
  },
  {
    href: '/blog/collectible-condition-terms-explained-canada',
    title: 'MIB, MOC, NRFB and Loose: Collectible Condition Terms Explained for Canadian Buyers',
    excerpt: 'What the common condition abbreviations mean, how to read photos and how to compare listings with confidence.',
  },
  {
    href: '/blog/how-to-spot-fake-bootleg-collectibles-canada',
    title: 'How to Spot Fake and Bootleg Collectibles Before You Buy: A Checklist for Canadian Collectors',
    excerpt: 'Price, photos, packaging and seller checks: a practical checklist to avoid counterfeit collectibles.',
  },
  {
    href: '/blog/how-to-check-collectible-value-sold-listings-canada',
    title: 'How to Check What a Collectible Is Really Worth: A Sold-Listings Guide for Canadian Collectors',
    excerpt: 'Use sold listings, match the exact version and condition, and count shipping and currency to judge what a collectible is worth.',
  },
  {
    href: '/blog/what-to-check-when-your-collectible-arrives-canada',
    title: 'Your Collectible Just Arrived: A 10-Minute Inspection Checklist for Canadian Buyers',
    excerpt: 'Check the outer box, the packing, the item and the box condition, and take photos early. A short checklist for collectors in Canada.',
  },
  {
    href: '/blog/order-collectibles-early-holiday-shipping-canada-guide',
    title: 'Order Collectibles Early: A Holiday Shipping Guide for Canadian Gift Buyers',
    excerpt: 'Check carrier deadlines, combine items, plan packaging and keep a backup gift ready so collectible gifts arrive on time.',
  },
  {
    href: '/blog/mystery-blind-box-collectibles-buying-guide-canada',
    title: 'Mystery Boxes and Blind Bags: How Collectors in Canada Can Buy Smart',
    excerpt: 'Read the odds, check the seal, compare sold prices and decide between a blind pull and buying the exact piece.',
  },
  {
    href: '/blog/trading-cards-raw-vs-graded-buying-guide-canada',
    title: 'Trading Cards in Canada: Raw vs Graded, and How to Buy Without Getting Burned',
    excerpt: 'Judge centering, corners and surfaces, read a grading slab, spot fakes and compare sold prices before you buy Pokémon or hockey cards.',
  },
  {
    href: '/blog/clean-loose-action-figures-diecast-cars-safely-guide-canada',
    title: 'How to Clean Loose Action Figures and Die-Cast Cars Safely',
    excerpt: 'Dust first, use mild soap only when needed, protect paint and decals, dry fully and know when to leave a piece alone.',
  },
  {
    href: '/blog/star-trek-collectibles-collecting-guide-canada',
    title: 'Star Trek Collectibles: A Collecting Guide for Canadian Fans',
    excerpt: 'Choose a focus, judge condition, spot fakes and display figures, ships, models and ornaments with confidence.',
  },
  {
    href: '/blog/lego-technic-sets-collecting-guide-canada',
    title: 'Lego Technic Sets: A Buying and Collecting Guide for Canadian Builders',
    excerpt: 'Sealed or built, parts and instructions checks, moving parts, fakes, storage and display for Technic models.',
  },
  {
    href: '/blog/batman-collectibles-collecting-guide-canada',
    title: 'Batman Collectibles: A Collecting Guide for Canadian Fans',
    excerpt: 'Choose a focus, read the packaging, judge condition, spot fakes and display Batman figures, cars and sets.',
  },
  {
    href: '/blog/large-scale-diecast-model-cars-1-18-1-24-1-43-guide-canada',
    title: 'Large-Scale Die-Cast Model Cars: A 1:18, 1:24 and 1:43 Buying Guide for Canadians',
    excerpt: 'What the scale number means, choosing a size, boxes, paint, moving parts, fakes, sold prices and display.',
  },
  {
    href: '/blog/sonic-the-hedgehog-collectibles-guide-canada',
    title: 'Sonic the Hedgehog Collectibles in Canada: A Buyer\'s Guide to Figures, Plush and Retro Games',
    excerpt: 'Pick a focus, check condition and completeness, spot fakes and compare sold prices for Sonic figures, plush and retro games.',
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
