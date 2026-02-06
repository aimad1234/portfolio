export const skills = {
  categories: [
    {
      name: "Languages de Programmation",
      icon: "code",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "JavaScript", level: 85, icon: "📜" },
        { name: "Java", level: 80, icon: "☕" },
        { name: "C/C++", level: 75, icon: "⚡" },
        { name: "PHP", level: 70, icon: "🐘" },
        { name: "SQL", level: 85, icon: "🗄️" },
      ]
    },
    {
      name: "Frameworks Backend",
      icon: "server",
      skills: [
        { name: "Django", level: 95, icon: "🎸" },
        { name: "Flask", level: 90, icon: "🧪" },
        { name: "FastAPI", level: 90, icon: "⚡" },
        { name: "Django REST Framework", level: 90, icon: "🔌" },
      ]
    },
    {
      name: "Frameworks Frontend",
      icon: "layout",
      skills: [
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "Bootstrap", level: 90, icon: "🎨" },
        { name: "Tailwind CSS", level: 85, icon: "🌊" },
        { name: "jQuery", level: 80, icon: "💫" },
      ]
    },
    {
      name: "DevOps & Cloud",
      icon: "cloud",
      skills: [
        { name: "Docker", level: 95, icon: "🐳" },
        { name: "Kubernetes", level: 80, icon: "☸️" },
        { name: "GitLab CI/CD", level: 90, icon: "🦊" },
        { name: "Jenkins", level: 85, icon: "🔧" },
        { name: "Ansible", level: 85, icon: "📦" },
        { name: "Git", level: 95, icon: "🔀" },
      ]
    },
    {
      name: "Bases de Données",
      icon: "database",
      skills: [
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "MySQL", level: 90, icon: "🐬" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "Redis", level: 85, icon: "🔴" },
        { name: "Neo4j", level: 75, icon: "🕸️" },
        { name: "Oracle", level: 70, icon: "🔮" },
      ]
    },
    {
      name: "Machine Learning & Deep Learning",
      icon: "brain",
      skills: [
        { name: "PyTorch", level: 90, icon: "🔥" },
        { name: "TensorFlow", level: 85, icon: "🧮" },
        { name: "Keras", level: 85, icon: "🎯" },
        { name: "Scikit-learn", level: 90, icon: "🔬" },
        { name: "OpenCV", level: 85, icon: "👁️" },
        { name: "YOLO", level: 85, icon: "🎯" },
      ]
    },
    {
      name: "Big Data",
      icon: "database",
      skills: [
        { name: "Apache Spark", level: 80, icon: "⚡" },
        { name: "Hadoop", level: 75, icon: "🐘" },
        { name: "Kafka", level: 80, icon: "📊" },
        { name: "Elasticsearch", level: 80, icon: "🔍" },
      ]
    },
    {
      name: "Outils & Technologies",
      icon: "tool",
      skills: [
        { name: "Linux", level: 95, icon: "🐧" },
        { name: "Nginx", level: 85, icon: "🌐" },
        { name: "WebSocket", level: 85, icon: "🔌" },
        { name: "REST API", level: 95, icon: "🔗" },
        { name: "Swagger/OpenAPI", level: 85, icon: "📋" },
      ]
    }
  ],

  // Compétences pour nuage de mots ou tags
  allSkills: [
    // Languages
    "Python", "JavaScript", "Java", "C/C++", "PHP", "SQL", "PL/SQL",

    // Frameworks Backend
    "Django", "Flask", "FastAPI", "Django REST Framework",

    // Frontend
    "React.js", "Bootstrap", "Tailwind CSS", "jQuery", "HTML", "CSS",

    // DevOps
    "Docker", "Kubernetes", "GitLab CI/CD", "Jenkins", "Ansible", "Git",

    // Databases
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Neo4j", "Oracle",

    // ML/DL
    "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "YOLO",
    "CNN", "RNN", "LSTM", "Vision Transformer", "KNN", "SVM",

    // Big Data
    "Apache Spark", "Hadoop", "Kafka", "Elasticsearch",

    // Tools
    "Linux", "Nginx", "WebSocket", "REST API", "SOAP", "Pytest",
    "NumPy", "Pandas", "Jinja", "Albumentations"
  ],

  // Certifications
  certifications: [
    {
      name: "Data Science with Python",
      issuer: "Simplilearn",
      date: "13 Nov 2022",
      url: "#"
    },
    {
      name: "Débutez avec le framework Django",
      issuer: "OpenClassrooms",
      date: "15 Jan 2023",
      url: "#"
    },
    {
      name: "Django Web Framework",
      issuer: "Coursera",
      date: "01 Sept 2023",
      url: "#"
    }
  ],

  // Algorithmes ML
  mlAlgorithms: [
    "KNN",
    "SVM",
    "Régression Linéaire",
    "Naïve Bayes",
    "ID3",
    "K-Means",
    "Arbre de Décision",
    "CNN",
    "RNN",
    "LSTM",
    "Vision Transformer",
    "YOLO"
  ]
}

export const getSkillsByCategory = (categoryName) => {
  const category = skills.categories.find(cat => cat.name === categoryName)
  return category ? category.skills : []
}

export const getAllSkillsFlat = () => {
  return skills.allSkills
}