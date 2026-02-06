export const projects = [
  {
    id: 1,
    title: "Description d'Image et Vidéo - Deep Learning",
    description: "Projet de Master (PFE) : Système avancé de génération de descriptions textuelles pour images et vidéos utilisant des architectures de Deep Learning modernes. Implémentation de LSTM, Vision Transformer (ViT) avec mécanisme d'attention pour un captioning précis et contextuellement pertinent.",
    longDescription: `Développement d'un système complet d'image captioning combinant :
    - Architecture LSTM pour la génération de séquences textuelles
    - Vision Transformer (ViT) pour l'extraction de features visuelles
    - Mécanisme d'attention pour améliorer la pertinence des descriptions
    - Pipeline de preprocessing et augmentation de données
    - Interface web pour démonstration interactive`,
    technologies: [
      "Python",
      "PyTorch",
      "LSTM",
      "Vision Transformer",
      "Attention Mechanism",
      "Deep Learning",
      "Computer Vision",
      "NLP"
    ],
    category: "AI/ML",
    type: "Academic",
    image: "/images/project-image-captioning.jpg",
    github: "https://github.com/aimad1234/image-captioning",
    demo: null,
    date: "03/2022 – 06/2022",
    featured: true,
    status: "completed",
    highlights: [
      "Architecture hybride LSTM + ViT",
      "Mécanisme d'attention avancé",
      "Résultats comparatifs avec état de l'art"
    ]
  },
  {
    id: 2,
    title: "Classification et Reconnaissance de Gestes",
    description: "Système de reconnaissance de gestes de la main en temps réel utilisant des algorithmes de Machine Learning. Comparaison approfondie entre SVM, KNN, et Decision Tree pour optimiser la précision de classification.",
    longDescription: `Projet de classification de gestes incluant :
    - Collection et prétraitement de dataset de gestes
    - Implémentation et comparaison de multiples algorithmes ML
    - Optimisation des hyperparamètres
    - Système de reconnaissance temps-réel
    - Analyse comparative des performances`,
    technologies: [
      "Python",
      "Scikit-learn",
      "SVM",
      "KNN",
      "Decision Tree",
      "OpenCV",
      "NumPy",
      "Pandas"
    ],
    category: "AI/ML",
    type: "Academic",
    image: "/images/project-hand-gesture.jpg",
    github: "https://github.com/aimad1234/hand-gesture-recognition",
    demo: null,
    date: "12/2021 – 02/2022",
    featured: false,
    status: "completed",
    highlights: [
      "Comparaison de 3 algorithmes ML",
      "Reconnaissance temps-réel",
      "Précision optimisée"
    ]
  },
  {
    id: 3,
    title: "Analyse de Tweets en Temps Réel - Big Data",
    description: "Pipeline Big Data pour l'analyse de tweets en temps réel utilisant Kafka pour le streaming, Spark pour le processing, Elasticsearch pour le stockage, et Kibana pour la visualisation. Solution scalable pour le traitement de grandes volumes de données Twitter.",
    longDescription: `Infrastructure Big Data complète comprenant :
    - Kafka pour ingestion de données streaming
    - Spark pour traitement distribué
    - Elasticsearch pour indexation et recherche
    - Kibana pour visualisation et dashboards
    - Python pour orchestration et logique métier
    - Analyse de sentiment et extraction de tendances`,
    technologies: [
      "Apache Kafka",
      "Apache Spark",
      "Elasticsearch",
      "Kibana",
      "Python",
      "Big Data",
      "Real-time Processing",
      "Data Pipeline"
    ],
    category: "Big Data",
    type: "Academic",
    image: "/images/project-twitter-analysis.jpg",
    github: "https://github.com/aimad1234/twitter-realtime-analysis",
    demo: null,
    date: "02/2021 – 06/2021",
    featured: true,
    status: "completed",
    highlights: [
      "Pipeline temps-réel scalable",
      "Architecture Big Data complète",
      "Visualisations interactives"
    ]
  },
  {
    id: 4,
    title: "Localisation d'Hôtels avec Neo4j",
    description: "Application web de géolocalisation en temps réel pour trouver les hôtels les plus proches. Utilisation de Neo4j (base de données orientée graphe) et Cypher pour des requêtes spatiales optimisées. Interface interactive avec LeafletJS.",
    longDescription: `Application géospatiale incluant :
    - Base de données graphe Neo4j
    - Algorithmes de recherche spatiale optimisés
    - Requêtes Cypher pour calculs de distance
    - Interface carte interactive avec LeafletJS
    - API REST pour communication backend-frontend
    - Système de recommandation basé sur localisation`,
    technologies: [
      "Neo4j",
      "Cypher",
      "PHP",
      "JavaScript",
      "LeafletJS",
      "Graph Database",
      "Geolocation",
      "REST API"
    ],
    category: "Web Development",
    type: "Academic",
    image: "/images/project-hotel-localization.jpg",
    github: "https://github.com/aimad1234/hotel-localization-neo4j",
    demo: null,
    date: "01/2021 – 02/2021",
    featured: false,
    status: "completed",
    highlights: [
      "Base de données orientée graphe",
      "Recherche spatiale optimisée",
      "Interface interactive temps-réel"
    ]
  },
  {
    id: 5,
    title: "Application E-commerce JEE",
    description: "Application e-commerce complète développée avec Java EE. Architecture multicouche utilisant Hibernate/EJB/JPA pour la persistance, Bootstrap pour l'interface utilisateur, et MySQL pour la base de données.",
    longDescription: `Plateforme e-commerce full-stack comprenant :
    - Architecture MVC avec Java EE
    - Gestion des entités avec Hibernate/JPA
    - EJB pour logique métier
    - Interface responsive Bootstrap
    - Gestion du panier et paiement
    - Administration et gestion des produits
    - Système d'authentification et autorisation`,
    technologies: [
      "Java EE",
      "Hibernate",
      "EJB",
      "JPA",
      "Bootstrap",
      "MySQL",
      "Servlets",
      "JSP"
    ],
    category: "Web Development",
    type: "Academic",
    image: "/images/project-ecommerce-jee.jpg",
    github: "https://github.com/aimad1234/ecommerce-jee",
    demo: null,
    date: "01/2021 – 02/2021",
    featured: false,
    status: "completed",
    highlights: [
      "Architecture multicouche",
      "Persistance avec Hibernate",
      "Interface responsive complète"
    ]
  },
  {
    id: 6,
    title: "E-commerce PHP (PFE Licence)",
    description: "Projet de fin d'études de Licence : Développement complet d'une plateforme e-commerce en PHP natif. Interface moderne avec Bootstrap et jQuery, gestion complète des produits, panier, commandes et paiement.",
    longDescription: `Application e-commerce développée from scratch :
    - PHP natif pour backend
    - MySQL pour base de données
    - jQuery pour interactions dynamiques
    - Bootstrap pour design responsive
    - Gestion complète du catalogue
    - Système de panier et checkout
    - Panel d'administration
    - Génération de rapports`,
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "AJAX"
    ],
    category: "Web Development",
    type: "Academic",
    image: "/images/project-ecommerce-php.jpg",
    github: "https://github.com/aimad1234/ecommerce-php",
    demo: null,
    date: "03/2020 – 06/2020",
    featured: false,
    status: "completed",
    highlights: [
      "Développement full-stack",
      "Interface utilisateur moderne",
      "Fonctionnalités e-commerce complètes"
    ]
  }
]

export const projectCategories = [
  "Tous",
  "AI/ML",
  "Big Data",
  "Web Development",
  "DevOps"
]

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured)
}

export const getProjectsByCategory = (category) => {
  if (category === "Tous") return projects
  return projects.filter(project => project.category === category)
}