// projects-data.ts

export const topProjects = [
  {
    title: 'Flouz (Mobile)',
    description:
      'Application mobile gamifiée avec enregistrement audio, badges, classements, groupes et synchronisation Firebase.',
    icon: 'gamepad',
    technologies: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
    features: [
      'Analyse audio en temps réel',
      'Badges dynamiques',
      'Classements multi-catégories',
      'Mode offline + synchronisation',
      'Publicités + abonnements'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/J4cKr0y/FLOUZ',
    color: 'portfolio-accent',
  },
  {
    title: 'Tictactrip Justify API',
    description:
      'API REST Node.js/TS avec authentification Bearer, rate limiting journalier, TDD complet et documentation Swagger.',
    icon: 'code',
    technologies: ['Node.js', 'TypeScript', 'Express', 'Docker', 'Swagger'],
    features: [
      'Rate limiting 80k mots/jour',
      'Authentification Bearer Token',
      'TDD (Jest + Supertest)',
      'Architecture modulaire',
      'Déploiement Render'
    ],
    liveUrl: 'https://tictactrip-justify-api.onrender.com/api-docs',
    githubUrl: 'https://github.com/J4cKr0y/tictactrip-justify-api',
    color: 'portfolio-purple',
  },
  {
    title: 'Kasa (Front-end)',
    description:
      'Refonte complète du site Kasa avec React, animations, routing, composants modulaires et design responsive.',
    icon: 'code',
    technologies: ['React', 'Sass', 'JavaScript'],
    features: [
      'Routing React Router',
      'Animations CSS',
      'Composants modulaires',
      'Design responsive',
      'Architecture claire'
    ],
    liveUrl: 'https://j4ckr0y.github.io/kasa-react/',
    githubUrl: 'https://github.com/J4cKr0y/Kasa',
    color: 'portfolio-cyan',
  },
  {
    title: 'Nina Carducci (SEO / Performance)',
    description:
      'Optimisation complète : SEO, accessibilité, performances, images AVIF/WebP, Lighthouse 100/100/100/100.',
    icon: 'brain',
    technologies: ['HTML', 'CSS', 'JavaScript', 'SEO', 'Web Performance'],
    features: [
      'Compression AVIF/WebP',
      'Lazy loading',
      'Schema.org JSON-LD',
      'Audit Lighthouse 100%',
      'Accessibilité AA'
    ],
    liveUrl: 'https://j4ckr0y.github.io/Nina-Carducci-Dev/',
    githubUrl: 'https://github.com/J4cKr0y/Nina-Carducci-Dev',
    color: 'portfolio-accent',
  },
  {
    title: 'Hangman C++ (WASM)',
    description:
      'Jeu du pendu en C++17 avec architecture modulaire, CMake, et portage WebAssembly pour une version jouable en ligne.',
    icon: 'gamepad',
    technologies: ['C++17', 'CMake', 'WASM', 'Emscripten'],
    features: [
      'Architecture modulaire (lib + exec)',
      'CMake multi-config',
      'Dictionnaire externe',
      'Portage WebAssembly',
      'Version jouable en ligne'
    ],
    liveUrl: 'https://j4ckr0y.github.io/hangman_cpp',
    githubUrl: 'https://github.com/J4cKr0y/hangman_cpp',
    color: 'portfolio-purple',
  },
];

// Pour la section "Explorer par techno"
export const allTechnologies = [
  'React', 'React Native', 'Next.js', 'Node.js', 'TypeScript',
  'C++', 'WASM', 'Firebase', 'MongoDB', 'Docker', 'Express'
];

// Si tu veux ajouter d'autres projets plus tard :
export const allProjects = [...topProjects /* , ...others */];
