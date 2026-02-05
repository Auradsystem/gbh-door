import { NavLink, Product, Stat } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/about' },
  { label: 'Produits', path: '/products' },
  { label: 'Capacités industrielles', path: '/capabilities' },
  { label: 'Qualité & conformité', path: '/quality' },
  { label: 'Contact', path: '/contact' },
];

export const KEY_STATS: Stat[] = [
  { label: "Site de production", value: "5000 m²" },
  { label: "Positionnement", value: "Prix direct usine" },
  { label: "Standards", value: "Internationaux" },
  { label: "Service", value: "Support technique" },
];

export const PRODUCTS: Product[] = [
  {
    id: 'portes-coupe-feu',
    title: 'Portes coupe-feu',
    shortDescription: 'Portes métalliques certifiées pour la sécurité incendie.',
    description: 'Portes métalliques coupe-feu fabriquées et assemblées selon des configurations strictement contrôlées. Nos solutions garantissent la compartimentation et la sécurité des personnes.',
    image: '/images/products/portes-coupe-feu.png',
    isRegulated: true,
    category: 'industrial',
    features: [
      'Performances : CF 30 / CF 60',
      'Configurations : 1 ou 2 vantaux',
      'Produits soumis à Procès-Verbal feu EFECTIS',
      'Quincaillerie certifiée coupe-feu (CISA)',
      'Joints intumescents et colles avec PV feu',
      'Traçabilité complète des composants'
    ]
  },
  {
    id: 'rideaux-rapides',
    title: 'Rideaux rapides',
    shortDescription: 'Solutions haute vitesse pour logistique et industrie.',
    description: 'Systèmes de fermeture souples à enroulement rapide, conçus pour les environnements à fort trafic et les exigences logistiques strictes.',
    image: '/images/products/rideaux-rapides.png',
    category: 'industrial',
    features: [
      'Usage logistique et industriel intensif',
      'Motorisation et électronique haute performance',
      'Fabrication locale de la structure acier',
      'Optimisation des flux thermiques',
      'Sécurité par barrière immatérielle'
    ]
  },
  {
    id: 'portes-sectionnelles',
    title: 'Portes sectionnelles',
    shortDescription: 'Isolation et robustesse pour quais et entrepôts.',
    description: 'La référence pour la fermeture des bâtiments industriels. Allie isolation thermique, robustesse mécanique et facilité d’exploitation.',
    image: '/images/products/portes-sectionnelles.png',
    category: 'industrial',
    features: [
      'Panneaux sandwich isolants haute densité',
      'Motorisation industrielle adaptée',
      'Mécanique robuste pour cycles fréquents',
      'Configuration sur mesure (levée verticale, standard)',
      'Intégration de hublots et portillons'
    ]
  },
  {
    id: 'portes-basculantes',
    title: 'Portes basculantes',
    shortDescription: 'La solution éprouvée pour le collectif et l\'industrie.',
    description: 'Systèmes de fermeture rigides et durables, adaptés aux boxes de stockage, parkings collectifs et accès industriels secondaires.',
    image: '/images/products/portes-basculantes.png',
    category: 'tertiary',
    features: [
      'Structure métallique renforcée',
      'Mécanisme d\'équilibrage fiable',
      'Motorisation possible',
      'Ventilation intégrée sur demande',
      'Maintenance simplifiée'
    ]
  },
  {
    id: 'portes-automatiques',
    title: 'Portes automatiques vitrées',
    shortDescription: 'Accès fluide pour bâtiments tertiaires et ERP.',
    description: 'Solutions d’accueil alliant esthétique et fiabilité mécanique pour les entrées de bâtiments administratifs, commerciaux et hospitaliers.',
    image: '/images/products/portes-automatiques.png',
    category: 'tertiary',
    features: [
      'Usage piéton intensif',
      'Fiabilité mécanique éprouvée',
      'Intégration esthétique architecturale',
      'Détection de présence sécurisée',
      'Conformité accessibilité PMR'
    ]
  }
];

export const COMPANY_CONTACT = {
  address: "Zone Industrielle Oued Smar, Alger",
  phone: "+213 21 00 00 00",
  email: "contact@gbh-door.com",
  hours: "Dim - Jeu: 08h00 - 17h00"
};