export interface MenuItem {
  id: string;
  name: string;
  category: 'south-indian' | 'north-indian' | 'chinese' | 'sizzlers' | 'beverages' | 'thalis';
  price: number;
  description: string;
  image: string;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  spiceLevel?: 'Mild' | 'Medium' | 'Spicy';
  tags: string[];
}

export const menuCategories = [
  { id: 'all', name: 'All Menu' },
  { id: 'south-indian', name: 'South Indian Classics' },
  { id: 'north-indian', name: 'North Indian & Tandoor' },
  { id: 'chinese', name: 'Indo-Chinese' },
  { id: 'sizzlers', name: 'Sizzlers & Platters' },
  { id: 'thalis', name: 'Executive Thalis & Combos' },
  { id: 'beverages', name: 'Filter Kaapi & Drinks' },
];

export const menuItems: MenuItem[] = [
  // SOUTH INDIAN
  {
    id: 'si-1',
    name: 'Madras Special Ghee Podi Masala Dosa',
    category: 'south-indian',
    price: 260,
    description: 'Golden crispy dosa roasted in pure desi ghee, smeared with house gunpowder podi and stuffed with spiced potato masala. Served with 3 chutneys & piping hot sambar.',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    isChefSpecial: true,
    spiceLevel: 'Medium',
    tags: ['Pure Desi Ghee', 'House Gunpowder', 'Crispy']
  },
  {
    id: 'si-2',
    name: 'Mysore Butter Paneer Dosa',
    category: 'south-indian',
    price: 290,
    description: 'Thick yet crispy dosa lined with spicy garlic-red chilli Mysore chutney, topped with generous amul butter and grated cottage cheese paneer.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    spiceLevel: 'Spicy',
    tags: ['Signature', 'Amul Butter', 'Rich']
  },
  {
    id: 'si-3',
    name: 'Steamed Thatte Idli with Dip Sambar',
    category: 'south-indian',
    price: 180,
    description: 'Plate-sized fluffy Karnataka style thatte idli drizzled with molten ghee and roasted podi, dunked in fragrant drumstick sambar.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    isBestseller: false,
    spiceLevel: 'Mild',
    tags: ['Steam Fluffy', 'Healthy', 'Gluten Free']
  },
  {
    id: 'si-4',
    name: 'Crispy Medu Vada (2 Pcs)',
    category: 'south-indian',
    price: 170,
    description: 'Deep-fried golden lentil donuts tempered with crushed peppercorns, curry leaves, and ginger. Served with fresh coconut chutney & tomato chutney.',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
    isBestseller: false,
    spiceLevel: 'Mild',
    tags: ['Crunchy', 'Traditional']
  },
  {
    id: 'si-5',
    name: 'Rava Onion Chilli Dosa',
    category: 'south-indian',
    price: 250,
    description: 'Crispy semolina crepe laced with green chillies, cracked black pepper, finely chopped shallots, and fresh cilantro.',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    isBestseller: false,
    spiceLevel: 'Medium',
    tags: ['Semolina', 'Lacy Crisp']
  },
  {
    id: 'si-6',
    name: 'Tomato Onion Uttapam Deluxe',
    category: 'south-indian',
    price: 240,
    description: 'Thick pancake style fermented rice-lentil base studded with caramelized onions, tangy diced tomatoes, and fresh coriander, cooked in butter.',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 'Mild',
    tags: ['Soft & Fluffy', 'Comfort Food']
  },

  // NORTH INDIAN
  {
    id: 'ni-1',
    name: 'Paneer Butter Masala Handi',
    category: 'north-indian',
    price: 360,
    description: 'Tender malai paneer cubes simmered in a silky, rich makhani gravy enriched with fresh cream, butter, and crushed kasoori methi.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    isChefSpecial: true,
    spiceLevel: 'Mild',
    tags: ['Customer Favorite', 'Creamy', 'Rich Gravy']
  },
  {
    id: 'ni-2',
    name: 'Dal Makhani Bukhara Style',
    category: 'north-indian',
    price: 330,
    description: 'Black lentils slow cooked overnight over slow embers, infused with country tomatoes, home churned white butter, and gentle aromatic spices.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    spiceLevel: 'Mild',
    tags: ['Overnight Cooked', 'Pure Butter', 'Royal Taste']
  },
  {
    id: 'ni-3',
    name: 'Tandoori Soya Chaap Tikka',
    category: 'north-indian',
    price: 310,
    description: 'Soy skewers marinated in hung curd, Kashmiri deghi mirch, and mustard oil, charred to perfection in clay oven. Served with mint chutney.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    isBestseller: false,
    spiceLevel: 'Spicy',
    tags: ['Clay Tandoor', 'Smoky']
  },
  {
    id: 'ni-4',
    name: 'Amritsari Stuffed Chur Chur Naan Platter',
    category: 'north-indian',
    price: 290,
    description: 'Flaky layered tandoori naan stuffed with spiced paneer & aloo, crushed with butter, served with pindi chana, raita, and pickled onions.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    spiceLevel: 'Medium',
    tags: ['Ludhiana Specialty', 'Crunchy', 'Meal Platter']
  },

  // INDO CHINESE
  {
    id: 'ch-1',
    name: 'Wok Tossed Chilli Paneer Dry',
    category: 'chinese',
    price: 320,
    description: 'Crispy fried cottage cheese tossed in high-heat wok with crunchy bell peppers, shallots, garlic, and savory dark soy-chilli glaze.',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    spiceLevel: 'Spicy',
    tags: ['Wok Fresh', 'Spicy Glaze']
  },
  {
    id: 'ch-2',
    name: 'Vegetable Hakka Noodles with Burnt Garlic',
    category: 'chinese',
    price: 250,
    description: 'Thin hand-pulled noodles tossed with julienne cabbage, carrots, French beans, spring onion, and golden crunchy burnt garlic flakes.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 'Medium',
    tags: ['Aromatic', 'Kids Favorite']
  },
  {
    id: 'ch-3',
    name: 'Crispy Honey Chilli Lotus Stem & Potato',
    category: 'chinese',
    price: 280,
    description: 'Crunchy fried lotus root discs and potatoes coated in a sticky sesame honey chilli reduction, garnished with toasted white sesame seeds.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    spiceLevel: 'Medium',
    tags: ['Crunchy', 'Sweet & Spicy']
  },

  // SIZZLERS
  {
    id: 'sz-1',
    name: 'Madras Leaf Signature Paneer Sizzler',
    category: 'sizzlers',
    price: 450,
    description: 'Smoky hot cast iron platter loaded with grilled paneer steaks, sauteed herb vegetables, French fries, butter rice, and tangy pepper mushroom sauce.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    isChefSpecial: true,
    spiceLevel: 'Medium',
    tags: ['Sizzling Hot', 'Complete Meal', 'Showstopper']
  },
  {
    id: 'sz-2',
    name: 'Indo-Chinese Sizzler Platter',
    category: 'sizzlers',
    price: 430,
    description: 'Sizzling bed of cabbage leaves hosting chilli garlic noodles, fried rice, crispy spring rolls, manchurian dumplings, and hot garlic gravy.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 'Spicy',
    tags: ['Fusion Platter', 'Smoky Sizzle']
  },

  // THALIS
  {
    id: 'th-1',
    name: 'Royal South Indian Plantain Leaf Feast (Thali)',
    category: 'thalis',
    price: 380,
    description: 'Grand traditional platter served on ceremonial banana leaf motif: Sambar, Rasam, Avial, Poriyal, Curd Rice, Steamed Rice, Appalam, Puri, Payasam & Filter Coffee shot.',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    isChefSpecial: true,
    spiceLevel: 'Mild',
    tags: ['Authentic Feast', 'Unlimited Joy', 'Banana Leaf Style']
  },
  {
    id: 'th-2',
    name: 'Maharaja Punjabi Executive Thali',
    category: 'thalis',
    price: 390,
    description: 'Paneer Makhani, Dal Makhani, Mixed Vegetable Subzi, Jeera Rice, 2 Butter Rotis or 1 Butter Naan, Boondi Raita, Gulab Jamun, and Crisp Papad.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    spiceLevel: 'Medium',
    tags: ['Hearty Feast', 'Punjabi Flavors']
  },

  // BEVERAGES
  {
    id: 'bv-1',
    name: 'Traditional Madras Filter Kaapi (Davara Set)',
    category: 'beverages',
    price: 90,
    description: 'Freshly decocted single-estate coffee froth poured in traditional brass Davara & Tumbler. Strong, velvety, and deeply aromatic.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    isChefSpecial: true,
    tags: ['Davara Tumbler', '100% Arabica & Chicory', 'Soul Warming']
  },
  {
    id: 'bv-2',
    name: 'Kesar Pista Badam Milk (Cold)',
    category: 'beverages',
    price: 160,
    description: 'Slow-simmered rich full-cream milk steeped with saffron strands, crushed almonds, pistachios, and green cardamom.',
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',
    tags: ['Royal Beverage', 'Chilled Delight']
  },
  {
    id: 'bv-3',
    name: 'South Indian Spiced Neer Mor (Buttermilk)',
    category: 'beverages',
    price: 110,
    description: 'Refreshing churned curd infused with crushed ginger, green chillies, mustard seeds, asafoetida, and curry leaves.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    tags: ['Digestive', 'Cooling & Crisp']
  },
  {
    id: 'bv-4',
    name: 'Virgin Mojito Mint Cooler',
    category: 'beverages',
    price: 170,
    description: 'Muddled fresh garden mint leaves, Persian lime wedges, cane sugar syrup, and chilled sparkling soda.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tags: ['Mocktail', 'Zesty']
  }
];
