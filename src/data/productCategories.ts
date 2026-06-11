export type LanguageCode = "fr" | "en" | "ar";

type ProductItemTranslation = {
  name: string;
  description: string;
};

type ProductCategoryTranslation = {
  title: string;
  description: string;
  products: ProductItemTranslation[];
};

export type ProductItem = {
  name: string;
  description: string;
  image: string;
  translations?: {
    en: ProductItemTranslation;
    ar: ProductItemTranslation;
  };
};

export type ProductCategory = {
  title: string;
  slug: string;
  description: string;
  image: string;
  products: ProductItem[];
  translations?: {
    en: ProductCategoryTranslation;
    ar: ProductCategoryTranslation;
  };
};

export type LocalizedProductItem = {
  name: string;
  description: string;
  image: string;
};

export type LocalizedProductCategory = {
  title: string;
  slug: string;
  description: string;
  image: string;
  products: LocalizedProductItem[];
};

export const productCategories: ProductCategory[] = [
  {
    title: "Matériaux de construction",
    slug: "materiaux-construction",
    description:
      "Matériaux, panneaux, bois, portes et solutions de finition pour les projets de construction, d’aménagement et d’approvisionnement B2B.",
    image: "/images/categories/5.4.png",
    translations: {
      en: {
        title: "Construction materials",
        description:
          "Materials, panels, wood, doors and finishing solutions for construction, development and B2B procurement projects.",
        products: [
          {
            name: "Pool and waterproofing",
            description:
              "Solutions for pool projects, coatings, protection and waterproofing needs.",
          },
          {
            name: "Floor coverings",
            description:
              "Covering products for residential, professional and commercial projects.",
          },
          {
            name: "Wood and panels",
            description:
              "Supply of wood, panels and related materials for construction and interior projects.",
          },
          {
            name: "Finishing wood",
            description:
              "Wood products for finishing, joinery, decoration and specific technical needs.",
          },
          {
            name: "Special joinery",
            description:
              "Joinery solutions and specific elements for architectural projects.",
          },
          {
            name: "Construction panels",
            description:
              "Technical panels for partitions, interior layouts and construction applications.",
          },
          {
            name: "Doors",
            description:
              "Doors and access solutions for residential, commercial and professional buildings.",
          },
          {
            name: "Interior doors",
            description:
              "Interior door range for finishing and interior design projects.",
          },
        ],
      },
      ar: {
        title: "مواد البناء",
        description:
          "مواد وألواح وخشب وأبواب وحلول تشطيب لمشاريع البناء والتهيئة والتوريد المهني.",
        products: [
          {
            name: "المسابح والعزل",
            description:
              "حلول مناسبة لمشاريع المسابح والطلاءات والحماية واحتياجات العزل.",
          },
          {
            name: "الأرضيات والتغليف",
            description:
              "منتجات تغليف وأرضيات للمشاريع السكنية والمهنية والتجارية.",
          },
          {
            name: "الخشب والألواح",
            description:
              "توريد الخشب والألواح ومشتقاتها للبناء والتهيئة.",
          },
          {
            name: "خشب التشطيب",
            description:
              "منتجات خشبية للتشطيب والنجارة والديكور والاحتياجات التقنية الخاصة.",
          },
          {
            name: "نجارة خاصة",
            description:
              "حلول نجارة وعناصر خاصة للمشاريع المعمارية.",
          },
          {
            name: "ألواح البناء",
            description:
              "ألواح تقنية للقواطع والتهيئة الداخلية وتطبيقات البناء.",
          },
          {
            name: "الأبواب",
            description:
              "أبواب وحلول دخول للمباني السكنية والتجارية والمهنية.",
          },
          {
            name: "الأبواب الداخلية",
            description:
              "مجموعة أبواب داخلية لمشاريع التشطيب والتهيئة.",
          },
        ],
      },
    },
    products: [
      {
        name: "Piscine et étanchéité",
        description:
          "Solutions adaptées aux projets de piscines, revêtements, protection et besoins d’étanchéité.",
        image: "/images/categories/4.6.png",
        translations: {
          en: {
            name: "Pool and waterproofing",
            description:
              "Solutions for pool projects, coatings, protection and waterproofing needs.",
          },
          ar: {
            name: "المسابح والعزل",
            description:
              "حلول مناسبة لمشاريع المسابح والطلاءات والحماية واحتياجات العزل.",
          },
        },
      },
      {
        name: "Revêtements et sols",
        description:
          "Produits de revêtement pour projets résidentiels, professionnels et commerciaux.",
        image: "/images/categories/4.7.png",
        translations: {
          en: {
            name: "Floor coverings",
            description:
              "Covering products for residential, professional and commercial projects.",
          },
          ar: {
            name: "الأرضيات والتغليف",
            description:
              "منتجات تغليف وأرضيات للمشاريع السكنية والمهنية والتجارية.",
          },
        },
      },
      {
        name: "Bois et panneaux",
        description:
          "Approvisionnement en bois, panneaux et dérivés pour l’aménagement et la construction.",
        image: "/images/categories/5.1.png",
        translations: {
          en: {
            name: "Wood and panels",
            description:
              "Supply of wood, panels and related materials for construction and interior projects.",
          },
          ar: {
            name: "الخشب والألواح",
            description:
              "توريد الخشب والألواح ومشتقاتها للبناء والتهيئة.",
          },
        },
      },
      {
        name: "Bois de finition",
        description:
          "Produits bois pour finitions, menuiserie, décoration et besoins techniques spécifiques.",
        image: "/images/categories/5.2.png",
        translations: {
          en: {
            name: "Finishing wood",
            description:
              "Wood products for finishing, joinery, decoration and specific technical needs.",
          },
          ar: {
            name: "خشب التشطيب",
            description:
              "منتجات خشبية للتشطيب والنجارة والديكور والاحتياجات التقنية الخاصة.",
          },
        },
      },
      {
        name: "Menuiserie spéciale",
        description:
          "Solutions de menuiserie et éléments spécifiques pour projets architecturaux.",
        image: "/images/categories/5.3.png",
        translations: {
          en: {
            name: "Special joinery",
            description:
              "Joinery solutions and specific elements for architectural projects.",
          },
          ar: {
            name: "نجارة خاصة",
            description:
              "حلول نجارة وعناصر خاصة للمشاريع المعمارية.",
          },
        },
      },
      {
        name: "Panneaux de construction",
        description:
          "Panneaux techniques pour cloisons, aménagement intérieur et applications de construction.",
        image: "/images/categories/5.4.png",
        translations: {
          en: {
            name: "Construction panels",
            description:
              "Technical panels for partitions, interior layouts and construction applications.",
          },
          ar: {
            name: "ألواح البناء",
            description:
              "ألواح تقنية للقواطع والتهيئة الداخلية وتطبيقات البناء.",
          },
        },
      },
      {
        name: "Portes",
        description:
          "Portes et solutions d’accès pour bâtiments résidentiels, commerciaux et professionnels.",
        image: "/images/categories/5.5.png",
        translations: {
          en: {
            name: "Doors",
            description:
              "Doors and access solutions for residential, commercial and professional buildings.",
          },
          ar: {
            name: "الأبواب",
            description:
              "أبواب وحلول دخول للمباني السكنية والتجارية والمهنية.",
          },
        },
      },
      {
        name: "Portes intérieures",
        description:
          "Gamme de portes intérieures pour projets de finition et d’aménagement.",
        image: "/images/categories/5.6.png",
        translations: {
          en: {
            name: "Interior doors",
            description:
              "Interior door range for finishing and interior design projects.",
          },
          ar: {
            name: "الأبواب الداخلية",
            description:
              "مجموعة أبواب داخلية لمشاريع التشطيب والتهيئة.",
          },
        },
      },
    ],
  },
  {
    title: "Outillage et équipement",
    slug: "outillage-equipement",
    description:
      "Outillage, équipements techniques, isolation et accessoires utiles aux chantiers, ateliers et interventions professionnelles.",
    image: "/images/categories/5.7.png",
    translations: {
      en: {
        title: "Tools and equipment",
        description:
          "Tools, technical equipment, insulation and accessories for worksites, workshops and professional operations.",
        products: [
          {
            name: "Professional tools",
            description:
              "Manual and power tools for technical use, maintenance and worksites.",
          },
          {
            name: "Technical equipment",
            description:
              "Equipment and accessories for professional operational needs.",
          },
          {
            name: "Insulation",
            description:
              "Insulation solutions for construction, renovation and thermal protection projects.",
          },
        ],
      },
      ar: {
        title: "الأدوات والمعدات",
        description:
          "أدوات ومعدات تقنية وعزل وإكسسوارات موجهة للمواقع والورشات والعمليات المهنية.",
        products: [
          {
            name: "أدوات مهنية",
            description:
              "أدوات يدوية وكهربائية للاستخدامات التقنية والصيانة والمواقع.",
          },
          {
            name: "معدات تقنية",
            description:
              "معدات وإكسسوارات موجهة للاحتياجات التشغيلية المهنية.",
          },
          {
            name: "العزل",
            description:
              "حلول عزل لمشاريع البناء والتجديد والحماية الحرارية.",
          },
        ],
      },
    },
    products: [
      {
        name: "Outillage professionnel",
        description:
          "Outillage manuel et électroportatif pour usages techniques, maintenance et chantiers.",
        image: "/images/categories/5.7.png",
        translations: {
          en: {
            name: "Professional tools",
            description:
              "Manual and power tools for technical use, maintenance and worksites.",
          },
          ar: {
            name: "أدوات مهنية",
            description:
              "أدوات يدوية وكهربائية للاستخدامات التقنية والصيانة والمواقع.",
          },
        },
      },
      {
        name: "Équipements techniques",
        description:
          "Équipements et accessoires destinés aux besoins opérationnels des professionnels.",
        image: "/images/categories/5.8.png",
        translations: {
          en: {
            name: "Technical equipment",
            description:
              "Equipment and accessories for professional operational needs.",
          },
          ar: {
            name: "معدات تقنية",
            description:
              "معدات وإكسسوارات موجهة للاحتياجات التشغيلية المهنية.",
          },
        },
      },
      {
        name: "Isolation",
        description:
          "Solutions d’isolation pour projets de construction, rénovation et protection thermique.",
        image: "/images/categories/6.1.png",
        translations: {
          en: {
            name: "Insulation",
            description:
              "Insulation solutions for construction, renovation and thermal protection projects.",
          },
          ar: {
            name: "العزل",
            description:
              "حلول عزل لمشاريع البناء والتجديد والحماية الحرارية.",
          },
        },
      },
    ],
  },
  {
    title: "Plomberie et sanitaire",
    slug: "plomberie-sanitaire",
    description:
      "Produits et accessoires pour installations sanitaires, raccordements, robinetterie et équipements de plomberie.",
    image: "/images/categories/6.3.png",
    translations: {
      en: {
        title: "Plumbing and sanitary",
        description:
          "Products and accessories for sanitary installations, fittings, faucets and plumbing equipment.",
        products: [
          {
            name: "Fittings and accessories",
            description:
              "Fittings, technical parts and accessories for plumbing installations.",
          },
          {
            name: "Faucets and taps",
            description:
              "Faucet and tap products for residential, commercial and professional projects.",
          },
        ],
      },
      ar: {
        title: "السباكة والصحي",
        description:
          "منتجات وإكسسوارات للتركيبات الصحية والربط والحنفيات ومعدات السباكة.",
        products: [
          {
            name: "وصلات وإكسسوارات",
            description:
              "وصلات وقطع تقنية وإكسسوارات لتركيبات السباكة.",
          },
          {
            name: "الحنفيات",
            description:
              "منتجات حنفيات للمشاريع السكنية والتجارية والمهنية.",
          },
        ],
      },
    },
    products: [
      {
        name: "Raccords et accessoires",
        description:
          "Raccords, pièces techniques et accessoires pour installations de plomberie.",
        image: "/images/categories/6.2.png",
        translations: {
          en: {
            name: "Fittings and accessories",
            description:
              "Fittings, technical parts and accessories for plumbing installations.",
          },
          ar: {
            name: "وصلات وإكسسوارات",
            description:
              "وصلات وقطع تقنية وإكسسوارات لتركيبات السباكة.",
          },
        },
      },
      {
        name: "Robinetterie",
        description:
          "Produits de robinetterie pour projets résidentiels, commerciaux et professionnels.",
        image: "/images/categories/6.3.png",
        translations: {
          en: {
            name: "Faucets and taps",
            description:
              "Faucet and tap products for residential, commercial and professional projects.",
          },
          ar: {
            name: "الحنفيات",
            description:
              "منتجات حنفيات للمشاريع السكنية والتجارية والمهنية.",
          },
        },
      },
    ],
  },
  {
    title: "Électricité",
    slug: "electricite",
    description:
      "Produits électriques destinés aux bâtiments, installations techniques, chantiers et projets industriels.",
    image: "/images/categories/6.4.png",
    translations: {
      en: {
        title: "Electrical products",
        description:
          "Electrical products for buildings, technical installations, worksites and industrial projects.",
        products: [
          {
            name: "Panels and electrical components",
            description:
              "Electrical solutions for distribution, protection and professional installation.",
          },
        ],
      },
      ar: {
        title: "الكهرباء",
        description:
          "منتجات كهربائية للمباني والتركيبات التقنية والمواقع والمشاريع الصناعية.",
        products: [
          {
            name: "لوحات ومكونات كهربائية",
            description:
              "حلول كهربائية للتوزيع والحماية والتركيب المهني.",
          },
        ],
      },
    },
    products: [
      {
        name: "Tableaux et composants électriques",
        description:
          "Solutions électriques pour distribution, protection et installation professionnelle.",
        image: "/images/categories/6.4.png",
        translations: {
          en: {
            name: "Panels and electrical components",
            description:
              "Electrical solutions for distribution, protection and professional installation.",
          },
          ar: {
            name: "لوحات ومكونات كهربائية",
            description:
              "حلول كهربائية للتوزيع والحماية والتركيب المهني.",
          },
        },
      },
    ],
  },
  {
    title: "Produits cosmétiques",
    slug: "produits-cosmetiques",
    description:
      "Gammes cosmétiques, soins, hygiène, beauté et produits professionnels destinés aux distributeurs, détaillants et partenaires B2B.",
    image: "/images/categories/7.1.png",
    translations: {
      en: {
        title: "Cosmetic products",
        description:
          "Cosmetic ranges, care, hygiene, beauty and professional products for distributors, retailers and B2B partners.",
        products: [
          {
            name: "Care and hygiene",
            description:
              "Cosmetic and hygiene products selected for professional distribution channels.",
          },
          {
            name: "Beauty products",
            description:
              "Beauty ranges for retailers, distributors and B2B partners.",
          },
          {
            name: "Cosmetic sourcing",
            description:
              "Product support for partners wishing to structure reliable cosmetic sourcing.",
          },
          {
            name: "Hair care",
            description:
              "Hair care products adapted to distributors and beauty professionals.",
          },
          {
            name: "Face and body care",
            description:
              "Selection of care products for personal, professional and distribution needs.",
          },
          {
            name: "Perfumes",
            description:
              "Perfume products and related ranges for sales and distribution channels.",
          },
          {
            name: "Professional products",
            description:
              "Cosmetic products for professional use, salons and specialized partners.",
          },
        ],
      },
      ar: {
        title: "منتجات التجميل",
        description:
          "مجموعة منتجات تجميل وعناية ونظافة وجمال موجهة للموزعين وتجار التجزئة وشركاء الأعمال.",
        products: [
          {
            name: "العناية والنظافة",
            description:
              "منتجات تجميل ونظافة مختارة لقنوات التوزيع المهنية.",
          },
          {
            name: "منتجات الجمال",
            description:
              "منتجات جمال موجهة لتجار التجزئة والموزعين وشركاء الأعمال.",
          },
          {
            name: "توريد مستحضرات التجميل",
            description:
              "مرافقة للشركاء الراغبين في تنظيم طلبات مستحضرات تجميل موثوقة.",
          },
          {
            name: "العناية بالشعر",
            description:
              "منتجات عناية بالشعر موجهة للموزعين ومحترفي التجميل.",
          },
          {
            name: "العناية بالوجه والجسم",
            description:
              "تشكيلة منتجات عناية للاستعمال الشخصي والمهني والتوزيع.",
          },
          {
            name: "العطور",
            description:
              "منتجات عطرية ومجموعات مرتبطة بها لقنوات البيع والتوزيع.",
          },
          {
            name: "منتجات مهنية",
            description:
              "منتجات تجميل موجهة للاستعمال المهني والصالونات والشركاء المختصين.",
          },
        ],
      },
    },
    products: [
      {
        name: "Soins et hygiène",
        description:
          "Produits cosmétiques et d’hygiène sélectionnés pour les circuits de distribution professionnels.",
        image: "/images/categories/7.1.png",
        translations: {
          en: {
            name: "Care and hygiene",
            description:
              "Cosmetic and hygiene products selected for professional distribution channels.",
          },
          ar: {
            name: "العناية والنظافة",
            description:
              "منتجات تجميل ونظافة مختارة لقنوات التوزيع المهنية.",
          },
        },
      },
      {
        name: "Produits beauté",
        description:
          "Gammes beauté destinées aux détaillants, distributeurs et partenaires B2B.",
        image: "/images/categories/7.2.png",
        translations: {
          en: {
            name: "Beauty products",
            description:
              "Beauty ranges for retailers, distributors and B2B partners.",
          },
          ar: {
            name: "منتجات الجمال",
            description:
              "منتجات جمال موجهة لتجار التجزئة والموزعين وشركاء الأعمال.",
          },
        },
      },
      {
        name: "Approvisionnement cosmétique",
        description:
          "Accompagnement produit pour les partenaires qui souhaitent structurer une demande cosmétique fiable.",
        image: "/images/categories/7.3.png",
        translations: {
          en: {
            name: "Cosmetic sourcing",
            description:
              "Product support for partners wishing to structure reliable cosmetic sourcing.",
          },
          ar: {
            name: "توريد مستحضرات التجميل",
            description:
              "مرافقة للشركاء الراغبين في تنظيم طلبات مستحضرات تجميل موثوقة.",
          },
        },
      },
      {
        name: "Soins capillaires",
        description:
          "Produits capillaires adaptés aux distributeurs et professionnels de la beauté.",
        image: "/images/categories/7.4.png",
        translations: {
          en: {
            name: "Hair care",
            description:
              "Hair care products adapted to distributors and beauty professionals.",
          },
          ar: {
            name: "العناية بالشعر",
            description:
              "منتجات عناية بالشعر موجهة للموزعين ومحترفي التجميل.",
          },
        },
      },
      {
        name: "Soins visage et corps",
        description:
          "Sélection de produits de soin pour usages personnels, professionnels et distribution.",
        image: "/images/categories/7.5.png",
        translations: {
          en: {
            name: "Face and body care",
            description:
              "Selection of care products for personal, professional and distribution needs.",
          },
          ar: {
            name: "العناية بالوجه والجسم",
            description:
              "تشكيلة منتجات عناية للاستعمال الشخصي والمهني والتوزيع.",
          },
        },
      },
      {
        name: "Parfums",
        description:
          "Produits parfumés et gammes associées pour circuits de vente et distribution.",
        image: "/images/categories/7.6.png",
        translations: {
          en: {
            name: "Perfumes",
            description:
              "Perfume products and related ranges for sales and distribution channels.",
          },
          ar: {
            name: "العطور",
            description:
              "منتجات عطرية ومجموعات مرتبطة بها لقنوات البيع والتوزيع.",
          },
        },
      },
      {
        name: "Produits professionnels",
        description:
          "Produits cosmétiques destinés aux usages professionnels, salons et partenaires spécialisés.",
        image: "/images/categories/7.7.png",
        translations: {
          en: {
            name: "Professional products",
            description:
              "Cosmetic products for professional use, salons and specialized partners.",
          },
          ar: {
            name: "منتجات مهنية",
            description:
              "منتجات تجميل موجهة للاستعمال المهني والصالونات والشركاء المختصين.",
          },
        },
      },
    ],
  },
  {
    title: "Produits alimentaires",
    slug: "produits-alimentaires",
    description:
      "Produits alimentaires secs, emballés, huiles et conserves pour les besoins de distribution, commerce et approvisionnement professionnel.",
    image: "/images/categories/8.1.png",
    translations: {
      en: {
        title: "Food products",
        description:
          "Dry food products, packaged products, oils and canned goods for distribution, trade and professional sourcing needs.",
        products: [
          {
            name: "Dry food products",
            description:
              "Food products adapted to distribution, trade and professional sourcing needs.",
          },
          {
            name: "Packaged food products",
            description:
              "Packaged food ranges for B2B partners and international sourcing requests.",
          },
          {
            name: "Edible oils",
            description:
              "Supply of edible oils for distributors, wholesalers and commercial partners.",
          },
          {
            name: "Canned food",
            description:
              "Canned food products for distribution channels and multi-market sourcing.",
          },
          {
            name: "Canned fish",
            description:
              "Canned fish products for distribution and export markets.",
          },
        ],
      },
      ar: {
        title: "المنتجات الغذائية",
        description:
          "منتجات غذائية جافة ومعبأة وزيوت ومعلبات موجهة للتوزيع والتجارة والتوريد المهني.",
        products: [
          {
            name: "مواد غذائية جافة",
            description:
              "منتجات غذائية موجهة للتوزيع والتجارة والتوريد المهني.",
          },
          {
            name: "منتجات غذائية معبأة",
            description:
              "منتجات غذائية معبأة موجهة لشركاء الأعمال وطلبات التوريد الدولي.",
          },
          {
            name: "زيوت غذائية",
            description:
              "توريد زيوت غذائية للموزعين وتجار الجملة والشركاء التجاريين.",
          },
          {
            name: "المعلبات الغذائية",
            description:
              "منتجات معلبة لقنوات التوزيع والتوريد في عدة أسواق.",
          },
          {
            name: "معلبات السمك",
            description:
              "منتجات سمك معلب موجهة لأسواق التوزيع والتصدير.",
          },
        ],
      },
    },
    products: [
      {
        name: "Produits secs",
        description:
          "Produits alimentaires adaptés aux besoins de distribution, de commerce et d’approvisionnement professionnel.",
        image: "/images/categories/8.1.png",
        translations: {
          en: {
            name: "Dry food products",
            description:
              "Food products adapted to distribution, trade and professional sourcing needs.",
          },
          ar: {
            name: "مواد غذائية جافة",
            description:
              "منتجات غذائية موجهة للتوزيع والتجارة والتوريد المهني.",
          },
        },
      },
      {
        name: "Produits emballés",
        description:
          "Gammes alimentaires emballées pour partenaires B2B et demandes d’approvisionnement international.",
        image: "/images/categories/8.2.png",
        translations: {
          en: {
            name: "Packaged food products",
            description:
              "Packaged food ranges for B2B partners and international sourcing requests.",
          },
          ar: {
            name: "منتجات غذائية معبأة",
            description:
              "منتجات غذائية معبأة موجهة لشركاء الأعمال وطلبات التوريد الدولي.",
          },
        },
      },
      {
        name: "Huiles alimentaires",
        description:
          "Approvisionnement en huiles alimentaires pour distributeurs, grossistes et partenaires commerciaux.",
        image: "/images/categories/8.3.png",
        translations: {
          en: {
            name: "Edible oils",
            description:
              "Supply of edible oils for distributors, wholesalers and commercial partners.",
          },
          ar: {
            name: "زيوت غذائية",
            description:
              "توريد زيوت غذائية للموزعين وتجار الجملة والشركاء التجاريين.",
          },
        },
      },
      {
        name: "Conserves alimentaires",
        description:
          "Produits en conserve pour circuits de distribution et approvisionnement multi-marchés.",
        image: "/images/categories/8.4.png",
        translations: {
          en: {
            name: "Canned food",
            description:
              "Canned food products for distribution channels and multi-market sourcing.",
          },
          ar: {
            name: "المعلبات الغذائية",
            description:
              "منتجات معلبة لقنوات التوزيع والتوريد في عدة أسواق.",
          },
        },
      },
      {
        name: "Conserves de poisson",
        description:
          "Produits de poisson en conserve destinés aux marchés de distribution et d’export.",
        image: "/images/categories/8.5.png",
        translations: {
          en: {
            name: "Canned fish",
            description:
              "Canned fish products for distribution and export markets.",
          },
          ar: {
            name: "معلبات السمك",
            description:
              "منتجات سمك معلب موجهة لأسواق التوزيع والتصدير.",
          },
        },
      },
    ],
  },
];

export function getLocalizedProductCategories(
  language: LanguageCode,
): LocalizedProductCategory[] {
  return productCategories.map((category) => {
    if (language === "fr") {
      return {
        title: category.title,
        slug: category.slug,
        description: category.description,
        image: category.image,
        products: category.products.map((product) => ({
          name: product.name,
          description: product.description,
          image: product.image,
        })),
      };
    }

    const categoryTranslation = category.translations?.[language];

    return {
      title: categoryTranslation?.title ?? category.title,
      slug: category.slug,
      description: categoryTranslation?.description ?? category.description,
      image: category.image,
      products: category.products.map((product, index) => {
        const productTranslation =
          product.translations?.[language] ?? categoryTranslation?.products[index];

        return {
          name: productTranslation?.name ?? product.name,
          description: productTranslation?.description ?? product.description,
          image: product.image,
        };
      }),
    };
  });
}

export function getProductCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}
