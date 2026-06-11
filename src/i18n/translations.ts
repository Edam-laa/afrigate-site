export const languages = [
  {
    code: "fr",
    label: "Français",
    shortLabel: "FR",
    flag: "🇫🇷",
  },
  {
    code: "ar",
    label: "العربية",
    shortLabel: "AR",
    flag: "🇸🇦",
  },
  {
    code: "en",
    label: "English",
    shortLabel: "EN",
    flag: "🇬🇧",
  },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      products: "Produits",
      contact: "Contact",
      quote: "Demander un devis",
    },
    footer: {
      quickLinks: "Liens rapides",
      contact: "Coordonnées",
      signature: "Développé par",
      creation: "Création pour Afrigate Partner by Infinity International Intertrade",
      rights: "Tous droits réservés.",
      description:
        "Afrigate Partner by Infinity International Intertrade accompagne les professionnels dans le sourcing, la fourniture et l’exportation de matériaux et équipements de bâtiment vers l’Afrique et l’international.",
      baseline: "Export · International",
    },
    about: {
      hero: {
        label: "À propos",
        title:
          "Un partenaire B2B pour connecter vos projets aux marchés internationaux",
        description:
          "Afrigate Partner by Infinity International Intertrade accompagne les professionnels dans le sourcing, la fourniture, l’import-export et la coordination de demandes commerciales vers l’Afrique et l’international.",
        primaryCta: "Découvrir nos services",
        secondaryCta: "Demander un devis",
      },
      stats: {
        countries: "Pays desservis",
        products: "Produits référencés",
        followUp: "Suivi personnalisé",
        experience: "D’expérience",
      },
      role: {
        label: "Notre rôle",
        title: "Faire le lien entre fournisseurs, produits et marchés ciblés",
        description:
          "Afrigate Partner by Infinity International Intertrade intervient comme partenaire de coordination pour les sociétés, distributeurs, acheteurs et porteurs de projets qui recherchent des fournisseurs fiables, des produits adaptés et un suivi professionnel de leurs opérations B2B.",
        badge: "Années d’expertise",
        badgeDescription:
          "Une approche terrain orientée sourcing, export, approvisionnement et coordination commerciale.",
        cta: "Nous contacter",
        strengths: {
          one: "Recherche et qualification de fournisseurs selon vos besoins.",
          two: "Sélection de produits adaptés aux marchés ciblés.",
          three: "Coordination des échanges, disponibilités et documents.",
          four: "Accompagnement des opérations vers l’Afrique et l’international.",
        },
      },
      missionVision: {
        label: "Mission & vision",
        title:
          "Une passerelle professionnelle entre les besoins B2B et les marchés internationaux",
        missionLabel: "Notre mission",
        missionTitle:
          "Simplifier les démarches d’approvisionnement international",
        missionDescription:
          "Nous aidons les professionnels à clarifier leurs besoins, identifier les bonnes catégories de produits, consulter les fournisseurs pertinents et structurer une demande exploitable pour leurs opérations d’import-export.",
        visionLabel: "Notre vision",
        visionTitle:
          "Devenir un partenaire de confiance pour les marchés africains",
        visionDescription:
          "Afrigate Partner by Infinity International Intertrade ambitionne de renforcer les échanges entre entreprises, fournisseurs et marchés en croissance, avec une approche sérieuse, transparente et durable.",
      },
      commitments: {
        label: "Nos engagements",
        title: "Des principes solides pour accompagner vos opérations B2B",
        description:
          "Dans le commerce international, la confiance se construit par la clarté, la méthode, la qualité du suivi et la capacité à répondre sérieusement aux contraintes des clients.",
        reliabilityTitle: "Fiabilité",
        reliabilityDescription:
          "Nous privilégions des échanges clairs, des partenaires sérieux et un suivi structuré pour chaque demande professionnelle.",
        precisionTitle: "Précision",
        precisionDescription:
          "Chaque besoin est analysé afin de transformer une demande générale en cahier des charges clair et exploitable.",
        responsivenessTitle: "Réactivité",
        responsivenessDescription:
          "Nous accompagnons les entreprises avec une approche rapide, directe et adaptée aux contraintes du commerce international.",
        engagementTitle: "Engagement",
        engagementDescription:
          "Nous construisons des relations durables avec nos clients, fournisseurs et partenaires autour d’une logique de confiance.",
      },
      method: {
        label: "Notre méthode",
        title: "Une approche claire, étape par étape",
        description:
          "Afrigate Partner by Infinity International Intertrade structure chaque demande pour éviter les approximations : nous partons du besoin réel, puis nous orientons la recherche vers des solutions adaptées.",
        stepOneTitle: "Comprendre votre besoin",
        stepOneDescription:
          "Nous analysons vos produits recherchés, quantités, destination, contraintes techniques et priorités commerciales.",
        stepTwoTitle: "Identifier les bonnes solutions",
        stepTwoDescription:
          "Nous orientons la demande vers des fournisseurs, catégories ou références adaptées à l’usage réel et au marché ciblé.",
        stepThreeTitle: "Structurer l’opération",
        stepThreeDescription:
          "Nous facilitons les échanges, la comparaison des offres, les disponibilités, les documents et la coordination commerciale.",
      },
      positioning: {
        label: "Positionnement",
        title:
          "Un pont entre l’Afrique, la Tunisie et les fournisseurs internationaux",
        description:
          "Notre rôle est d’apporter de la méthode, de la visibilité et un accompagnement fiable aux entreprises qui souhaitent sourcer, importer ou développer leurs approvisionnements.",
        internationalTitle: "Commerce international",
        internationalDescription:
          "Une approche orientée Afrique, Tunisie et marchés internationaux pour accompagner les flux B2B.",
        sectorsTitle: "Fourniture multi-secteurs",
        sectorsDescription:
          "Des catégories pensées pour les besoins du bâtiment, de l’industrie, de l’électricité et des projets professionnels.",
        trustTitle: "Relation de confiance",
        trustDescription:
          "Un interlocuteur dédié pour clarifier votre demande, suivre les réponses et garder une communication professionnelle.",
      },
      cta: {
        label: "Parlons de votre besoin",
        title:
          "Vous cherchez un partenaire fiable pour vos projets d’import/export ?",
        description:
          "Présentez-nous vos produits recherchés, vos quantités, votre destination ou votre projet. Afrigate Partner by Infinity International Intertrade vous oriente vers une réponse claire, professionnelle et adaptée à votre demande.",
        quote: "Demander un devis",
        contact: "Contacter Afrigate",
      },
      imageAlt: {
        hero: "Terminal portuaire et commerce international",
        side: "Activité portuaire et réseau international Afrigate Partner by Infinity International Intertrade",
        position: "Réseau logistique et commerce international",
      },
    },
    services: {
  hero: {
    label: "Nos services",
    title: "Des services structurés pour réussir vos opérations d’import-export",
    description:
      "Afrigate Partner by Infinity International Intertrade accompagne les professionnels dans le sourcing, l’exportation, la mise en relation commerciale, la coordination logistique et le conseil B2B vers l’Afrique et les marchés internationaux.",
    primaryCta: "Demander un devis",
    secondaryCta: "Voir les produits",
  },
  stats: {
    services: "Services clés",
    approach: "Approche professionnelle",
    support: "Accompagnement global",
    markets: "Marchés desservis",
  },
  intro: {
    label: "Notre expertise",
    title: "Un accompagnement complet pour vos besoins professionnels",
    description:
      "Nos services sont pensés pour aider les entreprises, distributeurs, acheteurs et porteurs de projets à structurer leurs demandes, identifier les bonnes solutions et avancer avec un partenaire fiable dans leurs opérations internationales.",
  },
  mainServices: {
    sourcingTitle: "Sourcing fournisseurs",
    sourcingDescription:
      "Nous recherchons, qualifions et comparons des fournisseurs capables de répondre à vos exigences de qualité, quantité, budget, destination et délais.",
    sourcingTag: "Recherche",
    exportTitle: "Exportation de produits",
    exportDescription:
      "Nous accompagnons les demandes d’export de produits de bâtiment, d’équipements professionnels et de solutions multi-secteurs vers les marchés ciblés.",
    exportTag: "Export",
    coordinationTitle: "Coordination import-export",
    coordinationDescription:
      "Nous facilitons les échanges entre clients, fournisseurs et partenaires afin de structurer les opérations commerciales internationales avec plus de clarté.",
    coordinationTag: "International",
    consultingTitle: "Conseil commercial B2B",
    consultingDescription:
      "Nous vous aidons à préciser votre besoin, sélectionner les bonnes catégories de produits et préparer une demande exploitable pour vos projets.",
    consultingTag: "Conseil",
    logisticsTitle: "Suivi logistique",
    logisticsDescription:
      "Nous accompagnons la préparation des informations utiles : disponibilité, destination, documents, étapes d’expédition et coordination des intervenants.",
    logisticsTag: "Suivi",
    supplyTitle: "Fourniture multi-secteurs",
    supplyDescription:
      "Nous orientons les demandes vers des familles de produits adaptées : bâtiment, électricité, plomberie, industrie, sanitaire et équipements professionnels.",
    supplyTag: "Produits",
    badge: "Service B2B",
  },
  tracks: {
    label: "Trois axes de service",
    title: "Exportation, courtage et conseil pour avancer avec méthode",
    description:
      "Chaque service répond à un besoin précis : trouver les bons produits, sécuriser les échanges commerciaux et structurer une opération internationale claire.",
    exportTitle: "Exportation",
    exportDescription:
      "Une prise en charge structurée des demandes de produits destinés aux marchés africains et internationaux.",
    exportPointOne: "Analyse des produits recherchés",
    exportPointTwo: "Identification des références adaptées",
    exportPointThree: "Préparation d’une demande claire",
    brokerageTitle: "Courtage & mise en relation",
    brokerageDescription:
      "Une logique d’intermédiation professionnelle pour rapprocher acheteurs, fournisseurs et partenaires fiables.",
    brokeragePointOne: "Qualification du besoin client",
    brokeragePointTwo: "Orientation vers les bons interlocuteurs",
    brokeragePointThree: "Suivi des échanges commerciaux",
    consultingTitle: "Conseil & accompagnement",
    consultingDescription:
      "Un support opérationnel pour transformer une idée, un besoin ou une liste produit en démarche concrète.",
    consultingPointOne: "Clarification technique et commerciale",
    consultingPointTwo: "Conseil sur les catégories pertinentes",
    consultingPointThree: "Structuration des priorités de projet",
  },
  method: {
    label: "Notre méthode",
    title:
      "Une démarche claire pour transformer votre besoin en demande exploitable",
    description:
      "Dans les opérations B2B, une demande imprécise ralentit les réponses. Notre méthode vise à clarifier les informations, structurer les échanges et faciliter la coordination entre les parties concernées.",
    stepOneTitle: "Diagnostic du besoin",
    stepOneDescription:
      "Nous commençons par comprendre votre demande : produits, quantités, destination, usage, délais, contraintes et niveau d’urgence.",
    stepTwoTitle: "Recherche ciblée",
    stepTwoDescription:
      "Nous orientons la recherche vers les fournisseurs, produits ou familles de solutions les plus cohérents avec votre marché.",
    stepThreeTitle: "Qualification & comparaison",
    stepThreeDescription:
      "Nous vous aidons à clarifier les offres, références, disponibilités et critères de choix pour faciliter la prise de décision.",
    stepFourTitle: "Coordination opérationnelle",
    stepFourDescription:
      "Nous assurons un suivi professionnel des échanges pour garder une vision claire sur les étapes commerciales et logistiques.",
  },
  support: {
    label: "Support opérationnel",
    title: "Des services pensés pour les réalités du terrain",
    sideLabel: "Pourquoi nous confier vos demandes ?",
    sideTitle:
      "Une logique de service orientée confiance, clarté et efficacité",
    description:
      "Afrigate Partner by Infinity International Intertrade ne se limite pas à présenter des produits. Nous aidons les professionnels à formuler leurs besoins, à identifier les bonnes pistes et à avancer dans une démarche commerciale structurée.",
    advantageOne: "Un interlocuteur dédié pour clarifier vos demandes B2B.",
    advantageTwo:
      "Une approche adaptée aux contraintes des marchés africains.",
    advantageThree:
      "Une sélection orientée usage réel, qualité et disponibilité.",
    advantageFour:
      "Un suivi professionnel pour éviter les demandes floues ou incomplètes.",
    advantageFive:
      "Une logique de partenariat, pas seulement une simple mise en relation.",
  },
  domains: {
    label: "Domaines couverts",
    title: "Des services adaptés à plusieurs familles de produits",
    description:
      "Nos interventions s’appliquent aux demandes de produits destinés aux professionnels du bâtiment, de l’industrie, des réseaux techniques et de l’approvisionnement de projets.",
    construction: "Matériaux de construction",
    electricity: "Électricité & équipements",
    plumbing: "Sanitaire & plomberie",
    industry: "Industrie & maintenance",
    professional: "Produits professionnels",
    projects: "Approvisionnement de projets",
  },
  cta: {
    label: "Besoin à étudier",
    title:
      "Vous avez une demande produit, fournisseur ou export à structurer ?",
    description:
      "Envoyez-nous votre demande, vos quantités, votre destination et vos contraintes. Afrigate Partner by Infinity International Intertrade vous oriente vers la meilleure démarche : sourcing, devis, conseil ou coordination import-export.",
    quote: "Demander un devis",
    contact: "Nous contacter",
  },
  imageAlt: {
    hero: "Terminal logistique et services Afrigate Partner by Infinity International Intertrade",
    process: "Port de conteneurs et processus de coordination export",
    support: "Infrastructure logistique et accompagnement Afrigate Partner by Infinity International Intertrade",
  },
},
productsPage: {
  hero: {
    label: "Catalogue produits",
    title: "Des catégories de produits pensées pour vos projets B2B",
    description:
      "Afrigate Partner by Infinity International Intertrade accompagne les professionnels dans l’identification, la sélection et l’approvisionnement de produits destinés au bâtiment, à l’industrie, aux réseaux techniques et aux opérations d’export.",
    primaryCta: "Demander un devis",
    secondaryCta: "Voir les catégories",
  },
  stats: {
    categories: "Catégories produits",
    references: "Références possibles",
    usage: "Usage professionnel",
    markets: "Marchés desservis",
  },
  logic: {
    label: "Notre logique produit",
    title: "Une sélection construite autour des besoins terrain",
    description:
      "La page produits n’est pas un simple catalogue visuel. Elle sert à organiser les demandes, clarifier les familles de produits recherchées et orienter les professionnels vers une réponse adaptée à leur projet, leur destination et leur usage.",
    badge: "Références possibles",
    badgeDescription:
      "Une sélection évolutive de produits orientée bâtiment, industrie, réseaux techniques et besoins professionnels.",
    cta: "Voir nos services",
    highlightOne:
      "Produits adaptés aux projets de bâtiment, d’industrie et d’approvisionnement professionnel.",
    highlightTwo:
      "Catégories structurées pour faciliter les demandes de devis et les consultations fournisseurs.",
    highlightThree:
      "Sélection pensée pour les contraintes des marchés africains et internationaux.",
    highlightFour:
      "Catalogue évolutif selon les besoins clients, les destinations et les volumes demandés.",
  },
  categories: {
    label: "Nos catégories",
    title: "Un catalogue organisé pour les projets professionnels",
    description:
      "Chaque catégorie regroupe une famille de produits pouvant être étudiée selon votre besoin : quantité, destination, usage, contraintes techniques et niveau de priorité.",
    discover: "Découvrir",
    quote: "Devis",
  },
  process: {
    label: "Process produit",
    title: "De la demande produit à une consultation claire",
    description:
      "Notre accompagnement permet de passer d’une idée ou d’une liste de produits à une demande structurée, exploitable et mieux orientée vers les fournisseurs adaptés.",
    stepOneTitle: "Comprendre la demande",
    stepOneDescription:
      "Nous analysons votre besoin produit : usage, quantité, destination, contraintes techniques, budget et urgence.",
    stepTwoTitle: "Orienter la sélection",
    stepTwoDescription:
      "Nous vous aidons à identifier les familles de produits les plus cohérentes avec votre projet ou votre marché.",
    stepThreeTitle: "Structurer la consultation",
    stepThreeDescription:
      "Nous transformons une demande générale en informations claires pour faciliter le sourcing et le devis.",
    stepFourTitle: "Préparer l’approvisionnement",
    stepFourDescription:
      "Nous accompagnons les étapes commerciales utiles : disponibilité, références, documents, destination et suivi.",
  },
  domains: {
    label: "Domaines couverts",
    title: "Des produits pour plusieurs usages professionnels",
    description:
      "Les catégories Afrigate Partner by Infinity International Intertrade répondent à des besoins variés : chantiers, distribution, maintenance, projets techniques, équipement professionnel et opérations d’approvisionnement.",
    construction: "Bâtiment & construction",
    electricity: "Électricité & équipements",
    plumbing: "Plomberie & réseaux",
    industry: "Industrie & maintenance",
    sanitary: "Sanitaire & finition",
    procurement: "Approvisionnement de projets",
  },
  cta: {
    label: "Besoin produit",
    title:
      "Vous recherchez une catégorie, une référence ou une solution d’approvisionnement ?",
    description:
      "Envoyez-nous votre besoin, vos quantités, votre destination et vos contraintes. Nous vous aidons à orienter la demande vers les produits et fournisseurs adaptés.",
    quote: "Demander un devis",
    contact: "Contacter Afrigate",
  },
  imageAlt: {
    hero: "Catalogue produits Afrigate Partner by Infinity International Intertrade",
    side: "Approvisionnement et catalogue produits Afrigate Partner by Infinity International Intertrade",
    process: "Organisation des catégories produits Afrigate Partner by Infinity International Intertrade",
  },
},
productDetail: {
  notFoundTitle: "Catégorie introuvable | Afrigate Partner by Infinity International Intertrade",
  back: "Retour produits",
  label: "Catalogue produits",
  quote: "Demander un devis",
  viewSelection: "Voir la sélection",
  stats: {
    products: "Produits présentés",
    usage: "Usage professionnel",
    studied: "Demande étudiée",
    export: "Afrique & international",
  },
  selection: {
    label: "Sélection catégorie",
    titlePrefix: "Produits disponibles dans la catégorie",
    description:
      "Cette sélection présente les produits actuellement structurés dans cette famille. Les références, dimensions, variantes, fiches techniques et volumes peuvent être étudiés selon votre besoin réel et votre destination.",
    question: "Question",
  },
  request: {
    label: "Comment demander cette catégorie",
    title: "Une demande claire permet une réponse plus rapide et plus précise",
    description:
      "Pour cette catégorie, Afrigate Partner by Infinity International Intertrade peut vous aider à structurer les informations nécessaires afin de faciliter la consultation, le devis et l’orientation fournisseur.",
    stepOneTitle: "Analyse du besoin",
    stepOneDescription:
      "Nous partons de votre usage, de vos quantités, de votre destination et de vos contraintes techniques.",
    stepTwoTitle: "Préparation de la demande",
    stepTwoDescription:
      "Nous structurons les informations utiles pour faciliter la consultation et la comparaison des réponses.",
    stepThreeTitle: "Orientation approvisionnement",
    stepThreeDescription:
      "Nous accompagnons les échanges autour des disponibilités, références, documents et étapes commerciales.",
  },
  info: {
    label: "Informations utiles",
    title:
      "Les éléments à préciser pour recevoir une orientation adaptée",
    description:
      "Plus votre demande est précise, plus il est facile d’identifier les références, fournisseurs ou alternatives pertinentes pour votre projet.",
    cardTitle: "Préparer votre demande de devis",
    itemOne: "Produit ou famille de produits recherchés",
    itemTwo: "Quantité estimée ou volume souhaité",
    itemThree: "Pays ou ville de destination",
    itemFour: "Usage prévu : chantier, distribution, maintenance ou projet",
    itemFive:
      "Contraintes techniques, dimensions ou spécifications disponibles",
  },
  cta: {
    label: "Demande produit",
    titlePrefix:
      "Vous souhaitez recevoir une orientation pour la catégorie",
    description:
      "Envoyez-nous votre besoin, vos quantités, votre destination et vos contraintes. Afrigate Partner by Infinity International Intertrade vous aidera à structurer la demande et à avancer vers une réponse claire.",
    allCategories: "Toutes les catégories",
  },
  imageAlt: {
    supplyPrefix: "Approvisionnement",
  },
},
contactPage: {
  hero: {
    label: "Contact",
    title: "Parlons de votre projet d’import-export",
    description:
      "Contactez Afrigate Partner by Infinity International Intertrade pour une demande de sourcing, un devis produit, une coordination commerciale ou un besoin d’accompagnement B2B vers l’Afrique et l’international.",
    primaryCta: "Écrire à Afrigate",
    secondaryCta: "WhatsApp",
  },
  steps: {
    oneTitle: "Vous envoyez votre demande",
    oneDescription:
      "Présentez vos produits recherchés, quantités, destination, délais ou contraintes spécifiques.",
    twoTitle: "Nous analysons les informations",
    twoDescription:
      "Notre équipe clarifie le besoin afin de comprendre la meilleure orientation commerciale possible.",
    threeTitle: "Nous vous répondons clairement",
    threeDescription:
      "Vous recevez une réponse structurée pour avancer vers un devis, un sourcing ou un accompagnement adapté.",
  },
  coordinates: {
    label: "Coordonnées",
    title: "Un contact direct pour vos demandes professionnelles",
    description:
      "Notre équipe vous accompagne pour clarifier votre besoin, structurer une demande de devis, identifier les informations utiles et avancer vers une réponse commerciale adaptée.",
    phone: "Téléphone",
    whatsapp: "WhatsApp",
    email: "Email",
    location: "Localisation",
    reasonOne: "Demande de sourcing fournisseur",
    reasonTwo: "Besoin de devis pour une catégorie produit",
    reasonThree: "Projet d’import-export vers l’Afrique ou l’international",
    reasonFour: "Recherche d’un accompagnement commercial B2B",
  },
  map: {
    label: "Notre localisation",
    title: "Retrouvez Afrigate Partner by Infinity International Intertrade à Sfax",
    description:
      "Notre localisation est indiquée sur Google Maps afin de faciliter l’accès à notre bureau et l’identification de notre zone d’activité.",
    open: "Ouvrir dans Google Maps",
    titleAttr: "Localisation Afrigate Partner by Infinity International Intertrade - Rue Ahmed Sekelli, Sfax",
  },
  contactForm: {
    asideLabel: "Échanger avec nous",
    asideTitle: "Une réponse claire pour votre besoin B2B",
    asideDescription:
      "Décrivez votre demande avec le maximum de précision possible : produit, service, quantité, destination, délai ou contexte de votre projet.",
    responseTime: "Délai de réponse",
    responseDescription:
      "Les demandes professionnelles sont étudiées dans les meilleurs délais selon leur niveau de précision.",
    directChannel: "Canal direct",
    directDescription:
      "Pour une demande urgente, vous pouvez aussi contacter Afrigate Partner by Infinity International Intertrade par WhatsApp.",
    formLabel: "Formulaire contact",
    formTitle: "Envoyer votre message",
    formDescription:
      "Présentez votre demande. Notre équipe vous répondra avec une orientation claire et professionnelle.",
    name: "Nom complet",
    namePlaceholder: "Votre nom",
    company: "Entreprise",
    companyPlaceholder: "Nom de l’entreprise",
    email: "Email",
    emailPlaceholder: "exemple@email.com",
    phone: "Téléphone / WhatsApp",
    phonePlaceholder: "+216 ...",
    subject: "Sujet",
    subjectPlaceholder: "Objet de votre message",
    message: "Message",
    messagePlaceholder:
      "Décrivez votre besoin, votre produit, votre destination ou votre projet...",
    submit: "Envoyer le message",
  },
  cta: {
    label: "Demande structurée",
    title: "Vous souhaitez envoyer une demande de devis détaillée ?",
    description:
      "Pour une demande produit, une quantité précise ou une destination d’export, utilisez la page devis afin de structurer les informations nécessaires.",
    quote: "Demander un devis",
    whatsapp: "WhatsApp",
  },
  imageAlt: {
    hero: "Contact Afrigate Partner by Infinity International Intertrade",
  },
},

quotePage: {
  hero: {
    label: "Demande de devis",
    title: "Demandez un devis pour vos besoins B2B",
    description:
      "Présentez votre besoin produit, vos quantités, votre destination et vos contraintes. Afrigate Partner by Infinity International Intertrade vous accompagne dans l’étude de votre demande de sourcing, d’import-export ou de fourniture professionnelle.",
    primaryCta: "Remplir le formulaire",
    secondaryCta: "Nous contacter",
  },
  steps: {
    oneTitle: "Décrivez votre besoin",
    oneDescription:
      "Indiquez les produits recherchés, les quantités, la destination, les délais et les contraintes de votre projet.",
    twoTitle: "Nous analysons la demande",
    twoDescription:
      "Notre équipe étudie les informations transmises afin de mieux comprendre votre besoin professionnel.",
    threeTitle: "Nous orientons la démarche",
    threeDescription:
      "Selon votre demande, nous vous orientons vers une solution de sourcing, de devis ou de coordination commerciale.",
  },
  form: {
    label: "Formulaire",
    title: "Détails de votre demande",
    description:
      "Renseignez les informations disponibles. Si vous venez depuis une fiche produit, la catégorie et le produit sont déjà préremplis automatiquement.",
    selectedProduct: "Produit sélectionné",
    category: "Catégorie",
    productReference: "Produit / référence",
    notSpecified: "Non précisé",
    notSpecifiedFeminine: "Non précisée",
    name: "Nom complet",
    namePlaceholder: "Votre nom",
    company: "Entreprise",
    companyPlaceholder: "Nom de l’entreprise",
    email: "Email",
    emailPlaceholder: "exemple@email.com",
    phone: "Téléphone / WhatsApp",
    phonePlaceholder: "+216 ...",
    location: "Pays / ville",
    locationPlaceholder: "Pays ou ville",
    productCategory: "Catégorie de produit",
    categoryPlaceholder: "Sélectionner une catégorie",
    otherRequest: "Autre demande",
    product: "Produit ou référence recherchée",
    productPlaceholder:
      "Exemple : tubes PVC, robinetterie, carrelage, équipements...",
    quantity: "Quantité souhaitée",
    quantityPlaceholder: "Exemple : 500 unités",
    destination: "Destination",
    destinationPlaceholder: "Pays de livraison",
    deadline: "Délai souhaité",
    deadlinePlaceholder: "Exemple : sous 30 jours",
    budget: "Budget indicatif",
    optional: "optionnel",
    budgetPlaceholder: "Budget estimatif",
    message: "Détails du besoin",
    messagePlaceholder:
      "Ajoutez les détails utiles : usage prévu, contraintes techniques, normes, dimensions, photos disponibles, conditions souhaitées...",
    submit: "Envoyer la demande",
  },
  defaultMessage: {
    intro:
      "Bonjour, je souhaite recevoir une orientation ou un devis pour la demande suivante :",
    category: "Catégorie",
    product: "Produit / référence",
    outro:
      "Merci de me contacter pour préciser les quantités, la destination et les détails techniques.",
  },
  sidebar: {
    label: "Préparer votre demande",
    title: "Informations utiles à préciser",
    description:
      "Pour faciliter l’étude de votre demande, ajoutez le maximum d’informations disponibles.",
    tipOne: "Références, dimensions ou caractéristiques techniques du produit",
    tipTwo: "Quantités souhaitées ou volume estimatif",
    tipThree: "Pays ou ville de destination",
    tipFour: "Délai souhaité pour la fourniture ou l’expédition",
    tipFive: "Photos, fiches techniques ou exemples si disponibles",
    quickContact: "Contact rapide",
    contactPage: "Page contact",
  },
  cta: {
    label: "Besoin d’un échange direct",
    title:
      "Vous préférez nous contacter avant d’envoyer votre demande ?",
    description:
      "Vous pouvez aussi nous contacter directement pour présenter votre besoin, vérifier les informations nécessaires ou discuter de votre projet d’approvisionnement.",
    contact: "Aller au contact",
    email: "Envoyer un email",
  },
  imageAlt: {
    hero: "Demande de devis Afrigate Partner by Infinity International Intertrade",
  },
},
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      products: "Products",
      contact: "Contact",
      quote: "Request a quote",
    },
    footer: {
      quickLinks: "Quick links",
      contact: "Contact details",
      signature: "Developed by",
      creation: "Created for Afrigate Partner by Infinity International Intertrade",
      rights: "All rights reserved.",
      description:
        "Afrigate Partner by Infinity International Intertrade supports professionals in sourcing, supply and export of building materials and equipment to Africa and international markets.",
      baseline: "Export · International",
    },
    about: {
      hero: {
        label: "About us",
        title:
          "A B2B partner connecting your projects to international markets",
        description:
          "Afrigate Partner by Infinity International Intertrade supports professionals in sourcing, supply, import-export and coordination of business requests across Africa and international markets.",
        primaryCta: "Discover our services",
        secondaryCta: "Request a quote",
      },
      stats: {
        countries: "Countries served",
        products: "Referenced products",
        followUp: "Personalized follow-up",
        experience: "Of experience",
      },
      role: {
        label: "Our role",
        title: "Connecting suppliers, products and target markets",
        description:
          "Afrigate Partner by Infinity International Intertrade acts as a coordination partner for companies, distributors, buyers and project owners looking for reliable suppliers, suitable products and professional follow-up for their B2B operations.",
        badge: "Years of expertise",
        badgeDescription:
          "A field-oriented approach focused on sourcing, export, procurement and commercial coordination.",
        cta: "Contact us",
        strengths: {
          one: "Supplier research and qualification according to your needs.",
          two: "Selection of products adapted to target markets.",
          three: "Coordination of exchanges, availability and documents.",
          four: "Support for operations across Africa and international markets.",
        },
      },
      missionVision: {
        label: "Mission & vision",
        title:
          "A professional bridge between B2B needs and international markets",
        missionLabel: "Our mission",
        missionTitle: "Simplifying international procurement processes",
        missionDescription:
          "We help professionals clarify their needs, identify the right product categories, consult relevant suppliers and structure actionable requests for their import-export operations.",
        visionLabel: "Our vision",
        visionTitle: "Becoming a trusted partner for African markets",
        visionDescription:
          "Afrigate Partner by Infinity International Intertrade aims to strengthen exchanges between companies, suppliers and growing markets through a serious, transparent and sustainable approach.",
      },
      commitments: {
        label: "Our commitments",
        title: "Solid principles to support your B2B operations",
        description:
          "In international trade, trust is built through clarity, method, quality follow-up and the ability to respond seriously to client constraints.",
        reliabilityTitle: "Reliability",
        reliabilityDescription:
          "We prioritize clear exchanges, serious partners and structured follow-up for every professional request.",
        precisionTitle: "Precision",
        precisionDescription:
          "Each need is analyzed in order to turn a general request into a clear and actionable specification.",
        responsivenessTitle: "Responsiveness",
        responsivenessDescription:
          "We support companies with a fast, direct approach adapted to the constraints of international trade.",
        engagementTitle: "Commitment",
        engagementDescription:
          "We build long-term relationships with our clients, suppliers and partners around a logic of trust.",
      },
      method: {
        label: "Our method",
        title: "A clear approach, step by step",
        description:
          "Afrigate Partner by Infinity International Intertrade structures each request to avoid approximations: we start from the real need, then guide the search toward suitable solutions.",
        stepOneTitle: "Understand your need",
        stepOneDescription:
          "We analyze the products you are looking for, quantities, destination, technical constraints and commercial priorities.",
        stepTwoTitle: "Identify the right solutions",
        stepTwoDescription:
          "We guide the request toward suppliers, categories or references adapted to real usage and the target market.",
        stepThreeTitle: "Structure the operation",
        stepThreeDescription:
          "We facilitate exchanges, offer comparison, availability, documents and commercial coordination.",
      },
      positioning: {
        label: "Positioning",
        title:
          "A bridge between Africa, Tunisia and international suppliers",
        description:
          "Our role is to bring method, visibility and reliable support to companies wishing to source, import or develop their procurement operations.",
        internationalTitle: "International trade",
        internationalDescription:
          "An approach focused on Africa, Tunisia and international markets to support B2B flows.",
        sectorsTitle: "Multi-sector supply",
        sectorsDescription:
          "Categories designed for the needs of construction, industry, electricity and professional projects.",
        trustTitle: "Trust-based relationship",
        trustDescription:
          "A dedicated contact to clarify your request, follow up on responses and maintain professional communication.",
      },
      cta: {
        label: "Let’s discuss your need",
        title:
          "Are you looking for a reliable partner for your import/export projects?",
        description:
          "Tell us about the products you need, your quantities, your destination or your project. Afrigate Partner by Infinity International Intertrade will guide you toward a clear, professional and adapted response.",
        quote: "Request a quote",
        contact: "Contact Afrigate",
      },
      imageAlt: {
        hero: "Port terminal and international trade",
        side: "Port activity and Afrigate Partner by Infinity International Intertrade international network",
        position: "Logistics network and international trade",
      },
    },
    services: {
  hero: {
    label: "Our services",
    title: "Structured services to support your import-export operations",
    description:
      "Afrigate Partner by Infinity International Intertrade supports professionals in sourcing, product export, commercial matchmaking, logistics coordination and B2B consulting across Africa and international markets.",
    primaryCta: "Request a quote",
    secondaryCta: "View products",
  },
  stats: {
    services: "Key services",
    approach: "Professional approach",
    support: "Global support",
    markets: "Markets served",
  },
  intro: {
    label: "Our expertise",
    title: "Complete support for your professional needs",
    description:
      "Our services are designed to help companies, distributors, buyers and project owners structure their requests, identify the right solutions and move forward with a reliable partner in their international operations.",
  },
  mainServices: {
    sourcingTitle: "Supplier sourcing",
    sourcingDescription:
      "We search, qualify and compare suppliers able to meet your requirements in terms of quality, quantity, budget, destination and deadlines.",
    sourcingTag: "Research",
    exportTitle: "Product export",
    exportDescription:
      "We support export requests for building products, professional equipment and multi-sector solutions toward target markets.",
    exportTag: "Export",
    coordinationTitle: "Import-export coordination",
    coordinationDescription:
      "We facilitate exchanges between clients, suppliers and partners to structure international business operations with more clarity.",
    coordinationTag: "International",
    consultingTitle: "B2B commercial consulting",
    consultingDescription:
      "We help you clarify your need, select the right product categories and prepare an actionable request for your projects.",
    consultingTag: "Consulting",
    logisticsTitle: "Logistics follow-up",
    logisticsDescription:
      "We support the preparation of useful information: availability, destination, documents, shipping steps and coordination between stakeholders.",
    logisticsTag: "Follow-up",
    supplyTitle: "Multi-sector supply",
    supplyDescription:
      "We guide requests toward suitable product families: construction, electricity, plumbing, industry, sanitary and professional equipment.",
    supplyTag: "Products",
    badge: "B2B service",
  },
  tracks: {
    label: "Three service pillars",
    title: "Export, brokerage and consulting to move forward methodically",
    description:
      "Each service addresses a specific need: finding the right products, securing commercial exchanges and structuring a clear international operation.",
    exportTitle: "Export",
    exportDescription:
      "Structured handling of product requests intended for African and international markets.",
    exportPointOne: "Analysis of requested products",
    exportPointTwo: "Identification of suitable references",
    exportPointThree: "Preparation of a clear request",
    brokerageTitle: "Brokerage & matchmaking",
    brokerageDescription:
      "A professional intermediation approach to connect buyers, suppliers and reliable partners.",
    brokeragePointOne: "Qualification of the client need",
    brokeragePointTwo: "Guidance toward the right contacts",
    brokeragePointThree: "Follow-up of commercial exchanges",
    consultingTitle: "Consulting & support",
    consultingDescription:
      "Operational support to turn an idea, need or product list into a concrete process.",
    consultingPointOne: "Technical and commercial clarification",
    consultingPointTwo: "Advice on relevant categories",
    consultingPointThree: "Structuring project priorities",
  },
  method: {
    label: "Our method",
    title: "A clear process to turn your need into an actionable request",
    description:
      "In B2B operations, an unclear request slows down responses. Our method aims to clarify information, structure exchanges and facilitate coordination between the parties involved.",
    stepOneTitle: "Need diagnosis",
    stepOneDescription:
      "We start by understanding your request: products, quantities, destination, usage, deadlines, constraints and level of urgency.",
    stepTwoTitle: "Targeted search",
    stepTwoDescription:
      "We guide the search toward suppliers, products or solution families that are most consistent with your market.",
    stepThreeTitle: "Qualification & comparison",
    stepThreeDescription:
      "We help you clarify offers, references, availability and decision criteria.",
    stepFourTitle: "Operational coordination",
    stepFourDescription:
      "We provide professional follow-up of exchanges to keep a clear view of commercial and logistics steps.",
  },
  support: {
    label: "Operational support",
    title: "Services designed for real field constraints",
    sideLabel: "Why trust us with your requests?",
    sideTitle: "A service logic focused on trust, clarity and efficiency",
    description:
      "Afrigate Partner by Infinity International Intertrade does not simply present products. We help professionals formulate their needs, identify the right options and move forward through a structured commercial process.",
    advantageOne: "A dedicated contact to clarify your B2B requests.",
    advantageTwo: "An approach adapted to African market constraints.",
    advantageThree:
      "A selection focused on real use, quality and availability.",
    advantageFour:
      "Professional follow-up to avoid unclear or incomplete requests.",
    advantageFive:
      "A partnership logic, not only a simple matchmaking approach.",
  },
  domains: {
    label: "Covered sectors",
    title: "Services adapted to several product families",
    description:
      "Our interventions apply to product requests for construction, industry, technical networks and project procurement professionals.",
    construction: "Construction materials",
    electricity: "Electricity & equipment",
    plumbing: "Sanitary & plumbing",
    industry: "Industry & maintenance",
    professional: "Professional products",
    projects: "Project procurement",
  },
  cta: {
    label: "Need to be studied",
    title: "Do you have a product, supplier or export request to structure?",
    description:
      "Send us your request, quantities, destination and constraints. Afrigate Partner by Infinity International Intertrade will guide you toward the best approach: sourcing, quotation, consulting or import-export coordination.",
    quote: "Request a quote",
    contact: "Contact us",
  },
  imageAlt: {
    hero: "Logistics terminal and Afrigate Partner by Infinity International Intertrade services",
    process: "Container port and export coordination process",
    support: "Logistics infrastructure and Afrigate Partner by Infinity International Intertrade support",
  },
},
productsPage: {
  hero: {
    label: "Product catalog",
    title: "Product categories designed for your B2B projects",
    description:
      "Afrigate Partner by Infinity International Intertrade supports professionals in identifying, selecting and sourcing products for construction, industry, technical networks and export operations.",
    primaryCta: "Request a quote",
    secondaryCta: "View categories",
  },
  stats: {
    categories: "Product categories",
    references: "Possible references",
    usage: "Professional use",
    markets: "Markets served",
  },
  logic: {
    label: "Our product logic",
    title: "A selection built around field needs",
    description:
      "The product page is not just a visual catalog. It helps organize requests, clarify product families and guide professionals toward a response adapted to their project, destination and usage.",
    badge: "Possible references",
    badgeDescription:
      "An evolving selection of products focused on construction, industry, technical networks and professional needs.",
    cta: "View our services",
    highlightOne:
      "Products adapted to construction, industry and professional procurement projects.",
    highlightTwo:
      "Structured categories to simplify quote requests and supplier consultations.",
    highlightThree:
      "A selection designed around African and international market constraints.",
    highlightFour:
      "An evolving catalog according to client needs, destinations and requested volumes.",
  },
  categories: {
    label: "Our categories",
    title: "A catalog organized for professional projects",
    description:
      "Each category groups a product family that can be studied according to your need: quantity, destination, usage, technical constraints and priority level.",
    discover: "Discover",
    quote: "Quote",
  },
  process: {
    label: "Product process",
    title: "From product request to clear consultation",
    description:
      "Our support helps transform an idea or product list into a structured, actionable request better oriented toward suitable suppliers.",
    stepOneTitle: "Understand the request",
    stepOneDescription:
      "We analyze your product need: usage, quantity, destination, technical constraints, budget and urgency.",
    stepTwoTitle: "Guide the selection",
    stepTwoDescription:
      "We help identify the product families most consistent with your project or market.",
    stepThreeTitle: "Structure the consultation",
    stepThreeDescription:
      "We turn a general request into clear information to facilitate sourcing and quotation.",
    stepFourTitle: "Prepare procurement",
    stepFourDescription:
      "We support useful commercial steps: availability, references, documents, destination and follow-up.",
  },
  domains: {
    label: "Covered areas",
    title: "Products for several professional uses",
    description:
      "Afrigate Partner by Infinity International Intertrade categories respond to various needs: construction sites, distribution, maintenance, technical projects, professional equipment and procurement operations.",
    construction: "Building & construction",
    electricity: "Electricity & equipment",
    plumbing: "Plumbing & networks",
    industry: "Industry & maintenance",
    sanitary: "Sanitary & finishing",
    procurement: "Project procurement",
  },
  cta: {
    label: "Product need",
    title:
      "Are you looking for a category, reference or procurement solution?",
    description:
      "Send us your need, quantities, destination and constraints. We help guide the request toward suitable products and suppliers.",
    quote: "Request a quote",
    contact: "Contact Afrigate",
  },
  imageAlt: {
    hero: "Afrigate Partner by Infinity International Intertrade product catalog",
    side: "Procurement and Afrigate Partner by Infinity International Intertrade product catalog",
    process: "Organization of Afrigate Partner by Infinity International Intertrade product categories",
  },
},
productDetail: {
  notFoundTitle: "Category not found | Afrigate Partner by Infinity International Intertrade",
  back: "Back to products",
  label: "Product catalog",
  quote: "Request a quote",
  viewSelection: "View selection",
  stats: {
    products: "Products displayed",
    usage: "Professional use",
    studied: "Request reviewed",
    export: "Africa & international",
  },
  selection: {
    label: "Category selection",
    titlePrefix: "Available products in the category",
    description:
      "This selection presents the products currently structured within this family. References, dimensions, variants, technical sheets and volumes can be studied according to your actual need and destination.",
    question: "Question",
  },
  request: {
    label: "How to request this category",
    title: "A clear request allows a faster and more accurate response",
    description:
      "For this category, Afrigate Partner by Infinity International Intertrade can help structure the necessary information to facilitate consultation, quotation and supplier orientation.",
    stepOneTitle: "Need analysis",
    stepOneDescription:
      "We start from your usage, quantities, destination and technical constraints.",
    stepTwoTitle: "Request preparation",
    stepTwoDescription:
      "We structure useful information to facilitate consultation and comparison of responses.",
    stepThreeTitle: "Procurement orientation",
    stepThreeDescription:
      "We support exchanges around availability, references, documents and commercial steps.",
  },
  info: {
    label: "Useful information",
    title: "Details to provide for adapted guidance",
    description:
      "The more precise your request is, the easier it is to identify relevant references, suppliers or alternatives for your project.",
    cardTitle: "Prepare your quote request",
    itemOne: "Product or product family requested",
    itemTwo: "Estimated quantity or desired volume",
    itemThree: "Destination country or city",
    itemFour: "Intended use: construction site, distribution, maintenance or project",
    itemFive: "Technical constraints, dimensions or available specifications",
  },
  cta: {
    label: "Product request",
    titlePrefix: "Would you like guidance for the category",
    description:
      "Send us your need, quantities, destination and constraints. Afrigate Partner by Infinity International Intertrade will help you structure the request and move toward a clear response.",
    allCategories: "All categories",
  },
  imageAlt: {
    supplyPrefix: "Supply",
  },
},
contactPage: {
  hero: {
    label: "Contact",
    title: "Let’s discuss your import-export project",
    description:
      "Contact Afrigate Partner by Infinity International Intertrade for a sourcing request, product quotation, commercial coordination or B2B support need across Africa and international markets.",
    primaryCta: "Write to Afrigate",
    secondaryCta: "WhatsApp",
  },
  steps: {
    oneTitle: "You send your request",
    oneDescription:
      "Present the products you need, quantities, destination, deadlines or specific constraints.",
    twoTitle: "We analyze the information",
    twoDescription:
      "Our team clarifies the need to understand the most suitable commercial direction.",
    threeTitle: "We respond clearly",
    threeDescription:
      "You receive a structured response to move forward with a quote, sourcing or adapted support.",
  },
  coordinates: {
    label: "Contact details",
    title: "Direct contact for your professional requests",
    description:
      "Our team helps you clarify your need, structure a quote request, identify useful information and move toward an adapted commercial response.",
    phone: "Phone",
    whatsapp: "WhatsApp",
    email: "Email",
    location: "Location",
    reasonOne: "Supplier sourcing request",
    reasonTwo: "Quote request for a product category",
    reasonThree: "Import-export project toward Africa or international markets",
    reasonFour: "Need for B2B commercial support",
  },
  map: {
    label: "Our location",
    title: "Find Afrigate Partner by Infinity International Intertrade in Sfax",
    description:
      "Our location is shown on Google Maps to make access to our office and identification of our business area easier.",
    open: "Open in Google Maps",
    titleAttr: "Afrigate Partner by Infinity International Intertrade location - Rue Ahmed Sekelli, Sfax",
  },
  contactForm: {
    asideLabel: "Talk with us",
    asideTitle: "A clear response for your B2B need",
    asideDescription:
      "Describe your request as precisely as possible: product, service, quantity, destination, deadline or project context.",
    responseTime: "Response time",
    responseDescription:
      "Professional requests are reviewed as quickly as possible depending on their level of detail.",
    directChannel: "Direct channel",
    directDescription:
      "For an urgent request, you can also contact Afrigate Partner by Infinity International Intertrade via WhatsApp.",
    formLabel: "Contact form",
    formTitle: "Send your message",
    formDescription:
      "Present your request. Our team will respond with clear and professional guidance.",
    name: "Full name",
    namePlaceholder: "Your name",
    company: "Company",
    companyPlaceholder: "Company name",
    email: "Email",
    emailPlaceholder: "example@email.com",
    phone: "Phone / WhatsApp",
    phonePlaceholder: "+216 ...",
    subject: "Subject",
    subjectPlaceholder: "Message subject",
    message: "Message",
    messagePlaceholder:
      "Describe your need, product, destination or project...",
    submit: "Send message",
  },
  cta: {
    label: "Structured request",
    title: "Would you like to send a detailed quote request?",
    description:
      "For a product request, precise quantity or export destination, use the quote page to structure the necessary information.",
    quote: "Request a quote",
    whatsapp: "WhatsApp",
  },
  imageAlt: {
    hero: "Contact Afrigate Partner by Infinity International Intertrade",
  },
},
quotePage: {
  hero: {
    label: "Quote request",
    title: "Request a quote for your B2B needs",
    description:
      "Present your product need, quantities, destination and constraints. Afrigate Partner by Infinity International Intertrade supports the review of your sourcing, import-export or professional supply request.",
    primaryCta: "Fill in the form",
    secondaryCta: "Contact us",
  },
  steps: {
    oneTitle: "Describe your need",
    oneDescription:
      "Specify the products required, quantities, destination, deadlines and project constraints.",
    twoTitle: "We analyze the request",
    twoDescription:
      "Our team reviews the information submitted to better understand your professional need.",
    threeTitle: "We guide the process",
    threeDescription:
      "Depending on your request, we guide you toward sourcing, quotation or commercial coordination.",
  },
  form: {
    label: "Form",
    title: "Request details",
    description:
      "Fill in the available information. If you come from a product page, the category and product are already pre-filled automatically.",
    selectedProduct: "Selected product",
    category: "Category",
    productReference: "Product / reference",
    notSpecified: "Not specified",
    notSpecifiedFeminine: "Not specified",
    name: "Full name",
    namePlaceholder: "Your name",
    company: "Company",
    companyPlaceholder: "Company name",
    email: "Email",
    emailPlaceholder: "example@email.com",
    phone: "Phone / WhatsApp",
    phonePlaceholder: "+216 ...",
    location: "Country / city",
    locationPlaceholder: "Country or city",
    productCategory: "Product category",
    categoryPlaceholder: "Select a category",
    otherRequest: "Other request",
    product: "Product or reference required",
    productPlaceholder:
      "Example: PVC pipes, faucets, tiles, equipment...",
    quantity: "Required quantity",
    quantityPlaceholder: "Example: 500 units",
    destination: "Destination",
    destinationPlaceholder: "Delivery country",
    deadline: "Desired deadline",
    deadlinePlaceholder: "Example: within 30 days",
    budget: "Indicative budget",
    optional: "optional",
    budgetPlaceholder: "Estimated budget",
    message: "Need details",
    messagePlaceholder:
      "Add useful details: intended use, technical constraints, standards, dimensions, available photos, desired conditions...",
    submit: "Send request",
  },
  defaultMessage: {
    intro:
      "Hello, I would like to receive guidance or a quote for the following request:",
    category: "Category",
    product: "Product / reference",
    outro:
      "Please contact me to clarify quantities, destination and technical details.",
  },
  sidebar: {
    label: "Prepare your request",
    title: "Useful information to specify",
    description:
      "To make your request easier to review, add as much available information as possible.",
    tipOne: "References, dimensions or technical product characteristics",
    tipTwo: "Required quantities or estimated volume",
    tipThree: "Destination country or city",
    tipFour: "Desired supply or shipping deadline",
    tipFive: "Photos, technical sheets or examples if available",
    quickContact: "Quick contact",
    contactPage: "Contact page",
  },
  cta: {
    label: "Need a direct exchange",
    title: "Would you prefer to contact us before sending your request?",
    description:
      "You can also contact us directly to present your need, verify the required information or discuss your procurement project.",
    contact: "Go to contact",
    email: "Send an email",
  },
  imageAlt: {
    hero: "Afrigate Partner by Infinity International Intertrade quote request",
  },
},
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      products: "المنتجات",
      contact: "اتصل بنا",
      quote: "طلب عرض سعر",
    },
    footer: {
      quickLinks: "روابط سريعة",
      contact: "معلومات التواصل",
      signature: "تم التطوير بواسطة",
      creation: "تم الإنشاء لصالح Afrigate Partner by Infinity International Intertrade",
      rights: "جميع الحقوق محفوظة.",
      description:
        "ترافق Afrigate Partner by Infinity International Intertrade المهنيين في التوريد وتوفير وتصدير مواد ومعدات البناء نحو إفريقيا والأسواق الدولية.",
      baseline: "تصدير · بناء · دولي",
    },
    about: {
      hero: {
        label: "من نحن",
        title: "شريك B2B يربط مشاريعكم بالأسواق الدولية",
        description:
          "ترافق Afrigate Partner by Infinity International Intertrade المهنيين في التوريد، توفير المنتجات، الاستيراد والتصدير، وتنسيق الطلبات التجارية نحو إفريقيا والأسواق الدولية.",
        primaryCta: "اكتشف خدماتنا",
        secondaryCta: "طلب عرض سعر",
      },
      stats: {
        countries: "دول نخدمها",
        products: "منتجات مرجعية",
        followUp: "متابعة مخصصة",
        experience: "من الخبرة",
      },
      role: {
        label: "دورنا",
        title: "الربط بين الموردين والمنتجات والأسواق المستهدفة",
        description:
          "تعمل Afrigate Partner by Infinity International Intertrade كشريك تنسيق للشركات والموزعين والمشترين وأصحاب المشاريع الباحثين عن موردين موثوقين ومنتجات مناسبة ومتابعة مهنية لعملياتهم التجارية.",
        badge: "سنوات خبرة",
        badgeDescription:
          "مقاربة ميدانية موجهة نحو التوريد، التصدير، التموين والتنسيق التجاري.",
        cta: "تواصل معنا",
        strengths: {
          one: "البحث عن الموردين وتأهيلهم حسب احتياجاتكم.",
          two: "اختيار منتجات مناسبة للأسواق المستهدفة.",
          three: "تنسيق التبادلات والتوفر والوثائق.",
          four: "مرافقة العمليات نحو إفريقيا والأسواق الدولية.",
        },
      },
      missionVision: {
        label: "المهمة والرؤية",
        title: "جسر مهني بين احتياجات B2B والأسواق الدولية",
        missionLabel: "مهمتنا",
        missionTitle: "تبسيط إجراءات التوريد الدولي",
        missionDescription:
          "نساعد المهنيين على توضيح احتياجاتهم، تحديد الفئات المناسبة من المنتجات، التواصل مع الموردين الملائمين، وتنظيم طلب قابل للتنفيذ لعمليات الاستيراد والتصدير.",
        visionLabel: "رؤيتنا",
        visionTitle: "أن نصبح شريكا موثوقا للأسواق الإفريقية",
        visionDescription:
          "تطمح Afrigate Partner by Infinity International Intertrade إلى تعزيز المبادلات بين الشركات والموردين والأسواق النامية من خلال مقاربة جدية وشفافة ومستدامة.",
      },
      commitments: {
        label: "التزاماتنا",
        title: "مبادئ قوية لمرافقة عملياتكم التجارية",
        description:
          "في التجارة الدولية، تُبنى الثقة عبر الوضوح والمنهجية وجودة المتابعة والقدرة على التعامل بجدية مع متطلبات العملاء.",
        reliabilityTitle: "الموثوقية",
        reliabilityDescription:
          "نعتمد تبادلات واضحة وشركاء جادين ومتابعة منظمة لكل طلب مهني.",
        precisionTitle: "الدقة",
        precisionDescription:
          "يتم تحليل كل حاجة لتحويل الطلب العام إلى مواصفات واضحة وقابلة للتنفيذ.",
        responsivenessTitle: "السرعة",
        responsivenessDescription:
          "نرافق الشركات بمقاربة سريعة ومباشرة ومتكيفة مع متطلبات التجارة الدولية.",
        engagementTitle: "الالتزام",
        engagementDescription:
          "نبني علاقات طويلة الأمد مع عملائنا وموردينا وشركائنا على أساس الثقة.",
      },
      method: {
        label: "منهجيتنا",
        title: "مقاربة واضحة خطوة بخطوة",
        description:
          "تنظم Afrigate Partner by Infinity International Intertrade كل طلب لتجنب الغموض: ننطلق من الحاجة الحقيقية ثم نوجه البحث نحو الحلول المناسبة.",
        stepOneTitle: "فهم احتياجكم",
        stepOneDescription:
          "نحلل المنتجات المطلوبة والكميات والوجهة والقيود التقنية والأولويات التجارية.",
        stepTwoTitle: "تحديد الحلول المناسبة",
        stepTwoDescription:
          "نوجه الطلب نحو موردين أو فئات أو مراجع مناسبة للاستعمال الفعلي والسوق المستهدف.",
        stepThreeTitle: "تنظيم العملية",
        stepThreeDescription:
          "نسهّل التبادلات ومقارنة العروض والتوفر والوثائق والتنسيق التجاري.",
      },
      positioning: {
        label: "تموقعنا",
        title: "جسر بين إفريقيا وتونس والموردين الدوليين",
        description:
          "دورنا هو توفير المنهجية والوضوح والمرافقة الموثوقة للشركات التي ترغب في التوريد أو الاستيراد أو تطوير عمليات التموين.",
        internationalTitle: "تجارة دولية",
        internationalDescription:
          "مقاربة موجهة نحو إفريقيا وتونس والأسواق الدولية لمرافقة التدفقات التجارية.",
        sectorsTitle: "توريد متعدد القطاعات",
        sectorsDescription:
          "فئات مصممة لاحتياجات البناء والصناعة والكهرباء والمشاريع المهنية.",
        trustTitle: "علاقة مبنية على الثقة",
        trustDescription:
          "مخاطب مخصص لتوضيح طلبكم ومتابعة الردود والحفاظ على تواصل مهني.",
      },
      cta: {
        label: "لنتحدث عن احتياجكم",
        title: "هل تبحثون عن شريك موثوق لمشاريع الاستيراد والتصدير؟",
        description:
          "قدموا لنا المنتجات المطلوبة والكميات والوجهة أو تفاصيل المشروع. ستوجهكم Afrigate Partner by Infinity International Intertrade نحو إجابة واضحة ومهنية ومناسبة لطلبكم.",
        quote: "طلب عرض سعر",
        contact: "تواصل مع Afrigate",
      },
      imageAlt: {
        hero: "محطة ميناء وتجارة دولية",
        side: "نشاط مينائي وشبكة Afrigate Partner by Infinity International Intertrade الدولية",
        position: "شبكة لوجستية وتجارة دولية",
      },
    },
    services: {
  hero: {
    label: "خدماتنا",
    title: "خدمات منظمة لدعم عمليات الاستيراد والتصدير",
    description:
      "ترافق Afrigate Partner by Infinity International Intertrade المهنيين في التوريد، تصدير المنتجات، الربط التجاري، التنسيق اللوجستي والاستشارة B2B نحو إفريقيا والأسواق الدولية.",
    primaryCta: "طلب عرض سعر",
    secondaryCta: "عرض المنتجات",
  },
  stats: {
    services: "خدمات رئيسية",
    approach: "مقاربة مهنية",
    support: "مرافقة شاملة",
    markets: "أسواق نخدمها",
  },
  intro: {
    label: "خبرتنا",
    title: "مرافقة شاملة لاحتياجاتكم المهنية",
    description:
      "صممت خدماتنا لمساعدة الشركات والموزعين والمشترين وأصحاب المشاريع على تنظيم طلباتهم، تحديد الحلول المناسبة والتقدم مع شريك موثوق في عملياتهم الدولية.",
  },
  mainServices: {
    sourcingTitle: "البحث عن الموردين",
    sourcingDescription:
      "نبحث ونؤهل ونقارن الموردين القادرين على تلبية متطلباتكم من حيث الجودة والكمية والميزانية والوجهة والآجال.",
    sourcingTag: "بحث",
    exportTitle: "تصدير المنتجات",
    exportDescription:
      "نرافق طلبات تصدير منتجات البناء والمعدات المهنية والحلول متعددة القطاعات نحو الأسواق المستهدفة.",
    exportTag: "تصدير",
    coordinationTitle: "تنسيق الاستيراد والتصدير",
    coordinationDescription:
      "نسهّل التبادلات بين العملاء والموردين والشركاء لتنظيم العمليات التجارية الدولية بوضوح أكبر.",
    coordinationTag: "دولي",
    consultingTitle: "استشارة تجارية B2B",
    consultingDescription:
      "نساعدكم على توضيح احتياجكم، اختيار الفئات المناسبة من المنتجات وإعداد طلب قابل للتنفيذ لمشاريعكم.",
    consultingTag: "استشارة",
    logisticsTitle: "متابعة لوجستية",
    logisticsDescription:
      "نرافق إعداد المعلومات المهمة: التوفر، الوجهة، الوثائق، مراحل الشحن وتنسيق المتدخلين.",
    logisticsTag: "متابعة",
    supplyTitle: "توريد متعدد القطاعات",
    supplyDescription:
      "نوجه الطلبات نحو عائلات المنتجات المناسبة: البناء، الكهرباء، السباكة، الصناعة، الصحي والمعدات المهنية.",
    supplyTag: "منتجات",
    badge: "خدمة B2B",
  },
  tracks: {
    label: "ثلاثة محاور خدمة",
    title: "تصدير ووساطة واستشارة للتقدم بمنهجية",
    description:
      "كل خدمة تستجيب لحاجة محددة: إيجاد المنتجات المناسبة، تأمين التبادلات التجارية وتنظيم عملية دولية واضحة.",
    exportTitle: "التصدير",
    exportDescription:
      "معالجة منظمة لطلبات المنتجات الموجهة إلى الأسواق الإفريقية والدولية.",
    exportPointOne: "تحليل المنتجات المطلوبة",
    exportPointTwo: "تحديد المراجع المناسبة",
    exportPointThree: "إعداد طلب واضح",
    brokerageTitle: "وساطة وربط تجاري",
    brokerageDescription:
      "مقاربة وساطة مهنية للربط بين المشترين والموردين والشركاء الموثوقين.",
    brokeragePointOne: "تأهيل احتياج العميل",
    brokeragePointTwo: "التوجيه نحو المتدخلين المناسبين",
    brokeragePointThree: "متابعة التبادلات التجارية",
    consultingTitle: "استشارة ومرافقة",
    consultingDescription:
      "دعم عملي لتحويل فكرة أو احتياج أو قائمة منتجات إلى مسار واضح.",
    consultingPointOne: "توضيح تقني وتجاري",
    consultingPointTwo: "استشارة حول الفئات المناسبة",
    consultingPointThree: "تنظيم أولويات المشروع",
  },
  method: {
    label: "منهجيتنا",
    title: "مسار واضح لتحويل احتياجكم إلى طلب قابل للتنفيذ",
    description:
      "في العمليات التجارية، يؤدي الطلب غير الواضح إلى بطء الردود. تهدف منهجيتنا إلى توضيح المعلومات، تنظيم التبادلات وتسهيل التنسيق بين الأطراف المعنية.",
    stepOneTitle: "تشخيص الاحتياج",
    stepOneDescription:
      "نبدأ بفهم طلبكم: المنتجات، الكميات، الوجهة، الاستخدام، الآجال، القيود ودرجة الاستعجال.",
    stepTwoTitle: "بحث موجه",
    stepTwoDescription:
      "نوجه البحث نحو الموردين أو المنتجات أو عائلات الحلول الأكثر توافقا مع سوقكم.",
    stepThreeTitle: "تأهيل ومقارنة",
    stepThreeDescription:
      "نساعدكم على توضيح العروض والمراجع والتوفر ومعايير الاختيار لتسهيل القرار.",
    stepFourTitle: "تنسيق عملي",
    stepFourDescription:
      "نضمن متابعة مهنية للتبادلات للحفاظ على رؤية واضحة للمراحل التجارية واللوجستية.",
  },
  support: {
    label: "دعم عملي",
    title: "خدمات مصممة لواقع الميدان",
    sideLabel: "لماذا تثقون بنا في طلباتكم؟",
    sideTitle: "منطق خدمة قائم على الثقة والوضوح والفعالية",
    description:
      "لا تقتصر Afrigate Partner by Infinity International Intertrade على عرض المنتجات فقط. نساعد المهنيين على صياغة احتياجاتهم، تحديد الخيارات المناسبة والتقدم ضمن مسار تجاري منظم.",
    advantageOne: "مخاطب مخصص لتوضيح طلباتكم B2B.",
    advantageTwo: "مقاربة متكيفة مع متطلبات الأسواق الإفريقية.",
    advantageThree: "اختيار موجه نحو الاستخدام الفعلي والجودة والتوفر.",
    advantageFour: "متابعة مهنية لتجنب الطلبات الغامضة أو الناقصة.",
    advantageFive: "منطق شراكة وليس مجرد ربط بسيط.",
  },
  domains: {
    label: "المجالات المغطاة",
    title: "خدمات مناسبة لعدة عائلات من المنتجات",
    description:
      "تطبق تدخلاتنا على طلبات المنتجات الموجهة لمهنيي البناء والصناعة والشبكات التقنية وتموين المشاريع.",
    construction: "مواد البناء",
    electricity: "الكهرباء والمعدات",
    plumbing: "الصحي والسباكة",
    industry: "الصناعة والصيانة",
    professional: "منتجات مهنية",
    projects: "تموين المشاريع",
  },
  cta: {
    label: "طلب للدراسة",
    title: "هل لديكم طلب منتج أو مورد أو تصدير يحتاج إلى تنظيم؟",
    description:
      "أرسلوا لنا طلبكم والكميات والوجهة والقيود. ستوجهكم Afrigate Partner by Infinity International Intertrade نحو أفضل مسار: توريد، عرض سعر، استشارة أو تنسيق استيراد وتصدير.",
    quote: "طلب عرض سعر",
    contact: "تواصل معنا",
  },
  imageAlt: {
    hero: "محطة لوجستية وخدمات Afrigate Partner by Infinity International Intertrade",
    process: "ميناء حاويات ومسار تنسيق التصدير",
    support: "بنية لوجستية ومرافقة Afrigate Partner by Infinity International Intertrade",
  },
},
productsPage: {
  hero: {
    label: "كتالوج المنتجات",
    title: "فئات منتجات مصممة لمشاريعكم المهنية B2B",
    description:
      "ترافق Afrigate Partner by Infinity International Intertrade المهنيين في تحديد واختيار وتوريد المنتجات الموجهة للبناء والصناعة والشبكات التقنية وعمليات التصدير.",
    primaryCta: "طلب عرض سعر",
    secondaryCta: "عرض الفئات",
  },
  stats: {
    categories: "فئات المنتجات",
    references: "مراجع ممكنة",
    usage: "استخدام مهني",
    markets: "أسواق نخدمها",
  },
  logic: {
    label: "منهجيتنا في المنتجات",
    title: "اختيار مبني على احتياجات الميدان",
    description:
      "صفحة المنتجات ليست مجرد كتالوج بصري. إنها تساعد على تنظيم الطلبات، توضيح عائلات المنتجات المطلوبة وتوجيه المهنيين نحو إجابة مناسبة لمشروعهم ووجهتهم واستعمالهم.",
    badge: "مراجع ممكنة",
    badgeDescription:
      "اختيار متطور من المنتجات موجه للبناء والصناعة والشبكات التقنية والاحتياجات المهنية.",
    cta: "عرض خدماتنا",
    highlightOne:
      "منتجات مناسبة لمشاريع البناء والصناعة والتموين المهني.",
    highlightTwo:
      "فئات منظمة لتسهيل طلبات الأسعار واستشارة الموردين.",
    highlightThree:
      "اختيار يأخذ بعين الاعتبار متطلبات الأسواق الإفريقية والدولية.",
    highlightFour:
      "كتالوج قابل للتطوير حسب احتياجات العملاء والوجهات والكميات المطلوبة.",
  },
  categories: {
    label: "فئاتنا",
    title: "كتالوج منظم للمشاريع المهنية",
    description:
      "كل فئة تجمع عائلة منتجات يمكن دراستها حسب احتياجكم: الكمية، الوجهة، الاستخدام، القيود التقنية ومستوى الأولوية.",
    discover: "اكتشف",
    quote: "عرض سعر",
  },
  process: {
    label: "مسار المنتج",
    title: "من طلب المنتج إلى استشارة واضحة",
    description:
      "تساعد مرافقتنا على تحويل فكرة أو قائمة منتجات إلى طلب منظم وقابل للتنفيذ وموجه بشكل أفضل نحو الموردين المناسبين.",
    stepOneTitle: "فهم الطلب",
    stepOneDescription:
      "نحلل احتياجكم للمنتج: الاستخدام، الكمية، الوجهة، القيود التقنية، الميزانية ودرجة الاستعجال.",
    stepTwoTitle: "توجيه الاختيار",
    stepTwoDescription:
      "نساعدكم على تحديد عائلات المنتجات الأكثر توافقا مع مشروعكم أو سوقكم.",
    stepThreeTitle: "تنظيم الاستشارة",
    stepThreeDescription:
      "نحول الطلب العام إلى معلومات واضحة لتسهيل التوريد وعرض السعر.",
    stepFourTitle: "تحضير التوريد",
    stepFourDescription:
      "نرافق المراحل التجارية المهمة: التوفر، المراجع، الوثائق، الوجهة والمتابعة.",
  },
  domains: {
    label: "المجالات المغطاة",
    title: "منتجات لعدة استخدامات مهنية",
    description:
      "تستجيب فئات Afrigate Partner by Infinity International Intertrade لاحتياجات متنوعة: مواقع البناء، التوزيع، الصيانة، المشاريع التقنية، المعدات المهنية وعمليات التموين.",
    construction: "البناء والتشييد",
    electricity: "الكهرباء والمعدات",
    plumbing: "السباكة والشبكات",
    industry: "الصناعة والصيانة",
    sanitary: "الصحي والتشطيب",
    procurement: "تموين المشاريع",
  },
  cta: {
    label: "احتياج منتج",
    title: "هل تبحثون عن فئة أو مرجع أو حل توريد؟",
    description:
      "أرسلوا لنا احتياجكم والكميات والوجهة والقيود. نساعدكم على توجيه الطلب نحو المنتجات والموردين المناسبين.",
    quote: "طلب عرض سعر",
    contact: "تواصل مع Afrigate",
  },
  imageAlt: {
    hero: "كتالوج منتجات Afrigate Partner by Infinity International Intertrade",
    side: "توريد وكتالوج منتجات Afrigate Partner by Infinity International Intertrade",
    process: "تنظيم فئات منتجات Afrigate Partner by Infinity International Intertrade",
  },
},
productDetail: {
  notFoundTitle: "الفئة غير موجودة | Afrigate Partner by Infinity International Intertrade",
  back: "العودة إلى المنتجات",
  label: "كتالوج المنتجات",
  quote: "طلب عرض سعر",
  viewSelection: "عرض الاختيار",
  stats: {
    products: "منتجات معروضة",
    usage: "استخدام مهني",
    studied: "طلب قيد الدراسة",
    export: "إفريقيا والأسواق الدولية",
  },
  selection: {
    label: "اختيار الفئة",
    titlePrefix: "المنتجات المتوفرة في فئة",
    description:
      "يعرض هذا الاختيار المنتجات المنظمة حاليا ضمن هذه العائلة. يمكن دراسة المراجع والأبعاد والأنواع والبطاقات التقنية والكميات حسب حاجتكم الفعلية ووجهتكم.",
    question: "سؤال",
  },
  request: {
    label: "كيفية طلب هذه الفئة",
    title: "الطلب الواضح يسمح برد أسرع وأكثر دقة",
    description:
      "بالنسبة لهذه الفئة، يمكن لـ Afrigate Partner by Infinity International Intertrade مساعدتكم على تنظيم المعلومات اللازمة لتسهيل الاستشارة وعرض السعر وتوجيه الموردين.",
    stepOneTitle: "تحليل الاحتياج",
    stepOneDescription:
      "ننطلق من الاستخدام والكميات والوجهة والقيود التقنية الخاصة بكم.",
    stepTwoTitle: "إعداد الطلب",
    stepTwoDescription:
      "ننظم المعلومات المفيدة لتسهيل الاستشارة ومقارنة الردود.",
    stepThreeTitle: "توجيه التوريد",
    stepThreeDescription:
      "نرافق التبادلات المتعلقة بالتوفر والمراجع والوثائق والمراحل التجارية.",
  },
  info: {
    label: "معلومات مفيدة",
    title: "العناصر التي يجب توضيحها للحصول على توجيه مناسب",
    description:
      "كلما كان طلبكم أكثر دقة، أصبح من الأسهل تحديد المراجع أو الموردين أو البدائل المناسبة لمشروعكم.",
    cardTitle: "تحضير طلب عرض السعر",
    itemOne: "المنتج أو عائلة المنتجات المطلوبة",
    itemTwo: "الكمية التقديرية أو الحجم المطلوب",
    itemThree: "بلد أو مدينة الوجهة",
    itemFour: "الاستخدام المتوقع: ورشة، توزيع، صيانة أو مشروع",
    itemFive: "القيود التقنية أو الأبعاد أو المواصفات المتوفرة",
  },
  cta: {
    label: "طلب منتج",
    titlePrefix: "هل ترغبون في الحصول على توجيه لفئة",
    description:
      "أرسلوا لنا احتياجكم والكميات والوجهة والقيود. ستساعدكم Afrigate Partner by Infinity International Intertrade على تنظيم الطلب والتقدم نحو إجابة واضحة.",
    allCategories: "كل الفئات",
  },
  imageAlt: {
    supplyPrefix: "توريد",
  },
},
contactPage: {
  hero: {
    label: "اتصل بنا",
    title: "لنتحدث عن مشروعكم في الاستيراد والتصدير",
    description:
      "تواصلوا مع Afrigate Partner by Infinity International Intertrade لطلب توريد، عرض سعر لمنتج، تنسيق تجاري أو مرافقة B2B نحو إفريقيا والأسواق الدولية.",
    primaryCta: "راسل Afrigate",
    secondaryCta: "واتساب",
  },
  steps: {
    oneTitle: "ترسلون طلبكم",
    oneDescription:
      "قدموا المنتجات المطلوبة والكميات والوجهة والآجال أو القيود الخاصة.",
    twoTitle: "نحلل المعلومات",
    twoDescription:
      "يوضح فريقنا الاحتياج لفهم أفضل توجيه تجاري ممكن.",
    threeTitle: "نرد عليكم بوضوح",
    threeDescription:
      "تتلقون ردا منظما للتقدم نحو عرض سعر أو توريد أو مرافقة مناسبة.",
  },
  coordinates: {
    label: "معلومات التواصل",
    title: "تواصل مباشر لطلباتكم المهنية",
    description:
      "يرافقكم فريقنا لتوضيح احتياجكم وتنظيم طلب عرض السعر وتحديد المعلومات المفيدة والتقدم نحو رد تجاري مناسب.",
    phone: "الهاتف",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    location: "الموقع",
    reasonOne: "طلب البحث عن موردين",
    reasonTwo: "طلب عرض سعر لفئة منتجات",
    reasonThree: "مشروع استيراد وتصدير نحو إفريقيا أو الأسواق الدولية",
    reasonFour: "البحث عن مرافقة تجارية B2B",
  },
  map: {
    label: "موقعنا",
    title: "اعثروا على Afrigate Partner by Infinity International Intertrade في صفاقس",
    description:
      "يظهر موقعنا على خرائط Google لتسهيل الوصول إلى مكتبنا وتحديد منطقة نشاطنا.",
    open: "فتح في خرائط Google",
    titleAttr: "موقع Afrigate Partner by Infinity International Intertrade - شارع أحمد الساكلي، صفاقس",
  },
  contactForm: {
    asideLabel: "تواصلوا معنا",
    asideTitle: "رد واضح لاحتياجكم B2B",
    asideDescription:
      "صفوا طلبكم بأكبر قدر ممكن من الدقة: المنتج، الخدمة، الكمية، الوجهة، الآجال أو سياق المشروع.",
    responseTime: "مدة الرد",
    responseDescription:
      "تتم دراسة الطلبات المهنية في أقرب الآجال حسب درجة وضوح المعلومات.",
    directChannel: "قناة مباشرة",
    directDescription:
      "للطلبات العاجلة، يمكنكم أيضا التواصل مع Afrigate Partner by Infinity International Intertrade عبر واتساب.",
    formLabel: "نموذج الاتصال",
    formTitle: "إرسال رسالتكم",
    formDescription:
      "قدموا طلبكم وسيرد فريقنا بتوجيه واضح ومهني.",
    name: "الاسم الكامل",
    namePlaceholder: "اسمكم",
    company: "الشركة",
    companyPlaceholder: "اسم الشركة",
    email: "البريد الإلكتروني",
    emailPlaceholder: "example@email.com",
    phone: "الهاتف / واتساب",
    phonePlaceholder: "+216 ...",
    subject: "الموضوع",
    subjectPlaceholder: "موضوع الرسالة",
    message: "الرسالة",
    messagePlaceholder:
      "صفوا احتياجكم أو المنتج أو الوجهة أو المشروع...",
    submit: "إرسال الرسالة",
  },
  cta: {
    label: "طلب منظم",
    title: "هل ترغبون في إرسال طلب عرض سعر مفصل؟",
    description:
      "لطلب منتج أو كمية دقيقة أو وجهة تصدير، استخدموا صفحة طلب عرض السعر لتنظيم المعلومات اللازمة.",
    quote: "طلب عرض سعر",
    whatsapp: "واتساب",
  },
  imageAlt: {
    hero: "اتصال Afrigate Partner by Infinity International Intertrade",
  },
},
quotePage: {
  hero: {
    label: "طلب عرض سعر",
    title: "اطلبوا عرض سعر لاحتياجاتكم المهنية B2B",
    description:
      "قدموا حاجتكم من المنتجات والكميات والوجهة والقيود. ترافقكم Afrigate Partner by Infinity International Intertrade في دراسة طلبات التوريد أو الاستيراد والتصدير أو التموين المهني.",
    primaryCta: "ملء النموذج",
    secondaryCta: "تواصل معنا",
  },
  steps: {
    oneTitle: "صفوا احتياجكم",
    oneDescription:
      "حددوا المنتجات المطلوبة والكميات والوجهة والآجال وقيود المشروع.",
    twoTitle: "نحلل الطلب",
    twoDescription:
      "يقوم فريقنا بدراسة المعلومات المرسلة لفهم احتياجكم المهني بشكل أفضل.",
    threeTitle: "نوجه المسار",
    threeDescription:
      "حسب طلبكم، نوجهكم نحو التوريد أو عرض السعر أو التنسيق التجاري.",
  },
  form: {
    label: "النموذج",
    title: "تفاصيل الطلب",
    description:
      "أدخلوا المعلومات المتوفرة. إذا وصلتم من صفحة منتج، فسيتم ملء الفئة والمنتج تلقائيا.",
    selectedProduct: "المنتج المختار",
    category: "الفئة",
    productReference: "المنتج / المرجع",
    notSpecified: "غير محدد",
    notSpecifiedFeminine: "غير محددة",
    name: "الاسم الكامل",
    namePlaceholder: "اسمكم",
    company: "الشركة",
    companyPlaceholder: "اسم الشركة",
    email: "البريد الإلكتروني",
    emailPlaceholder: "example@email.com",
    phone: "الهاتف / واتساب",
    phonePlaceholder: "+216 ...",
    location: "البلد / المدينة",
    locationPlaceholder: "البلد أو المدينة",
    productCategory: "فئة المنتج",
    categoryPlaceholder: "اختيار فئة",
    otherRequest: "طلب آخر",
    product: "المنتج أو المرجع المطلوب",
    productPlaceholder:
      "مثال: أنابيب PVC، خلاطات، بلاط، معدات...",
    quantity: "الكمية المطلوبة",
    quantityPlaceholder: "مثال: 500 وحدة",
    destination: "الوجهة",
    destinationPlaceholder: "بلد التسليم",
    deadline: "الأجل المطلوب",
    deadlinePlaceholder: "مثال: خلال 30 يوما",
    budget: "ميزانية تقديرية",
    optional: "اختياري",
    budgetPlaceholder: "الميزانية التقديرية",
    message: "تفاصيل الاحتياج",
    messagePlaceholder:
      "أضيفوا التفاصيل المفيدة: الاستعمال المتوقع، القيود التقنية، المعايير، الأبعاد، الصور المتوفرة، الشروط المطلوبة...",
    submit: "إرسال الطلب",
  },
  defaultMessage: {
    intro:
      "مرحبا، أرغب في الحصول على توجيه أو عرض سعر للطلب التالي:",
    category: "الفئة",
    product: "المنتج / المرجع",
    outro:
      "يرجى التواصل معي لتوضيح الكميات والوجهة والتفاصيل التقنية.",
  },
  sidebar: {
    label: "تحضير طلبكم",
    title: "معلومات مفيدة يجب توضيحها",
    description:
      "لتسهيل دراسة طلبكم، أضيفوا أكبر قدر ممكن من المعلومات المتوفرة.",
    tipOne: "المراجع أو الأبعاد أو الخصائص التقنية للمنتج",
    tipTwo: "الكميات المطلوبة أو الحجم التقديري",
    tipThree: "بلد أو مدينة الوجهة",
    tipFour: "الأجل المطلوب للتوريد أو الشحن",
    tipFive: "صور أو بطاقات تقنية أو أمثلة إن وجدت",
    quickContact: "تواصل سريع",
    contactPage: "صفحة الاتصال",
  },
  cta: {
    label: "هل تحتاجون إلى تواصل مباشر؟",
    title: "هل تفضلون التواصل معنا قبل إرسال طلبكم؟",
    description:
      "يمكنكم أيضا التواصل معنا مباشرة لعرض احتياجكم أو التحقق من المعلومات اللازمة أو مناقشة مشروع التوريد.",
    contact: "الذهاب إلى الاتصال",
    email: "إرسال بريد إلكتروني",
  },
  imageAlt: {
    hero: "طلب عرض سعر Afrigate Partner by Infinity International Intertrade",
  },
},
  },
} as const;