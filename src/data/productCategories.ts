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

export const productCategories: ProductCategory[] = [
  {
    title: "Matériaux de construction",
    slug: "materiaux-construction",
    description:
      "Une sélection de matériaux essentiels pour les projets de bâtiment, gros œuvre, finition et approvisionnement de chantier.",
    image: "/images/products/1.jpeg",
    translations: {
      en: {
        title: "Construction materials",
        description:
          "A selection of essential materials for building projects, structural works, finishing and construction site procurement.",
        products: [
          {
            name: "Construction site materials",
            description:
              "Basic products intended for construction works and site procurement.",
          },
          {
            name: "Structural work materials",
            description:
              "Solutions adapted to the structural needs of building projects.",
          },
          {
            name: "Finishing products",
            description:
              "Materials intended for finishing, renovation and interior works.",
          },
          {
            name: "Complementary equipment",
            description:
              "Products and accessories used to complete construction site needs.",
          },
          {
            name: "Professional solutions",
            description:
              "Supplies selected for companies, distributors and B2B projects.",
          },
        ],
      },
      ar: {
        title: "مواد البناء",
        description:
          "مجموعة من المواد الأساسية لمشاريع البناء والأشغال الكبرى والتشطيب وتموين مواقع العمل.",
        products: [
          {
            name: "مواد مواقع البناء",
            description:
              "منتجات أساسية موجهة لأعمال البناء وتموين مواقع العمل.",
          },
          {
            name: "مواد الأشغال الكبرى",
            description:
              "حلول مناسبة للاحتياجات الهيكلية لمشاريع البناء.",
          },
          {
            name: "منتجات التشطيب",
            description:
              "مواد موجهة لأعمال التشطيب والتجديد والتهيئة.",
          },
          {
            name: "معدات مكملة",
            description:
              "منتجات وإكسسوارات مفيدة لاستكمال احتياجات موقع العمل.",
          },
          {
            name: "حلول للمهنيين",
            description:
              "لوازم مختارة للشركات والموزعين ومشاريع B2B.",
          },
        ],
      },
    },
    products: [
      {
        name: "Matériaux de chantier",
        description:
          "Produits de base destinés aux travaux de construction et à l’approvisionnement des chantiers.",
        image: "/images/categories/1.2.jpg",
      },
      {
        name: "Matériaux de gros œuvre",
        description:
          "Solutions adaptées aux besoins structurels des projets de bâtiment.",
        image: "/images/categories/1.2.jpg",
      },
      {
        name: "Produits de finition",
        description:
          "Matériaux destinés aux travaux de finition, rénovation et aménagement.",
        image: "/images/categories/1.3.jpg",
      },
      {
        name: "Équipements complémentaires",
        description:
          "Produits et accessoires utiles pour compléter les besoins du chantier.",
        image: "/images/categories/1.4.jpg",
      },
      {
        name: "Solutions pour professionnels",
        description:
          "Fournitures sélectionnées pour les entreprises, distributeurs et projets B2B.",
        image: "/images/categories/1.5.jpg",
      },
    ],
  },
  {
    title: "Blocs de construction",
    slug: "blocs-construction",
    description:
      "Blocs, briques et éléments de maçonnerie adaptés aux projets de bâtiment, infrastructures et gros œuvre.",
    image: "/images/products/2.jpeg",
    translations: {
      en: {
        title: "Construction blocks",
        description:
          "Blocks, bricks and masonry elements adapted to building projects, infrastructure and structural works.",
        products: [
          {
            name: "Standard blocks",
            description:
              "Resistant blocks for walls, partitions and general masonry works.",
          },
          {
            name: "Structural blocks",
            description:
              "Solutions intended for structural projects and professional construction.",
          },
          {
            name: "Bricks and masonry elements",
            description:
              "Products adapted to new builds, extensions and renovation projects.",
          },
          {
            name: "Technical blocks",
            description:
              "Elements meeting specific needs of construction sites and infrastructure.",
          },
          {
            name: "Masonry solutions",
            description:
              "Product range for construction professionals and distributors.",
          },
        ],
      },
      ar: {
        title: "بلوكات البناء",
        description:
          "بلوكات وطوب وعناصر بناء مناسبة لمشاريع البناء والبنية التحتية والأشغال الكبرى.",
        products: [
          {
            name: "بلوكات قياسية",
            description:
              "بلوكات مقاومة للجدران والقواطع وأعمال البناء العامة.",
          },
          {
            name: "بلوكات الأشغال الكبرى",
            description:
              "حلول موجهة للمشاريع الهيكلية والبناء المهني.",
          },
          {
            name: "طوب وعناصر بناء",
            description:
              "منتجات مناسبة للبناء الجديد والتوسعة ومشاريع التجديد.",
          },
          {
            name: "بلوكات تقنية",
            description:
              "عناصر تلبي الاحتياجات الخاصة لمواقع العمل والبنية التحتية.",
          },
          {
            name: "حلول البناء",
            description:
              "مجموعة منتجات لمهنيي البناء والموزعين.",
          },
        ],
      },
    },
    products: [
      {
        name: "Blocs standards",
        description:
          "Blocs résistants pour murs, cloisons et travaux de maçonnerie générale.",
        image: "/images/categories/2.1.jpg",
      },
      {
        name: "Blocs de gros œuvre",
        description:
          "Solutions destinées aux projets structurels et aux constructions professionnelles.",
        image: "/images/categories/2.2.jpg",
      },
      {
        name: "Briques et éléments maçonnés",
        description:
          "Produits adaptés aux constructions neuves, extensions et projets de rénovation.",
        image: "/images/categories/2.3.jpg",
      },
      {
        name: "Blocs techniques",
        description:
          "Éléments répondant aux besoins spécifiques des chantiers et infrastructures.",
        image: "/images/categories/2.4.jpg",
      },
      {
        name: "Solutions de maçonnerie",
        description:
          "Gamme de produits pour professionnels du bâtiment et distributeurs.",
        image: "/images/categories/2.5.jpg",
      },
    ],
  },
  {
    title: "Acier & Armatures",
    slug: "acier-armatures",
    description:
      "Barres d’acier, ferraillage et solutions métalliques pour le renforcement du béton et les projets de construction.",
    image: "/images/products/3.jpeg",
    translations: {
      en: {
        title: "Steel & reinforcements",
        description:
          "Steel bars, rebar and metal solutions for concrete reinforcement and construction projects.",
        products: [
          {
            name: "Steel bars",
            description:
              "Steel products intended for reinforced concrete structures.",
          },
          {
            name: "Rebar",
            description:
              "Metal solutions for foundations, columns, beams and slabs.",
          },
          {
            name: "Metal reinforcements",
            description:
              "Products adapted to structural works and infrastructure projects.",
          },
          {
            name: "Construction site steel",
            description:
              "Metal supplies selected for construction professionals.",
          },
        ],
      },
      ar: {
        title: "الفولاذ والتسليح",
        description:
          "قضبان فولاذ وحديد تسليح وحلول معدنية لتدعيم الخرسانة ومشاريع البناء.",
        products: [
          {
            name: "قضبان فولاذ",
            description:
              "فولاذ موجه لتدعيم المنشآت من الخرسانة المسلحة.",
          },
          {
            name: "حديد تسليح",
            description:
              "حلول معدنية للأساسات والأعمدة والعوارض والبلاطات.",
          },
          {
            name: "تسليحات معدنية",
            description:
              "منتجات مناسبة للأشغال الكبرى ومشاريع البنية التحتية.",
          },
          {
            name: "فولاذ لمواقع العمل",
            description:
              "لوازم معدنية مختارة لمهنيي البناء.",
          },
        ],
      },
    },
    products: [
      {
        name: "Barres d’acier",
        description:
          "Aciers destinés au renforcement des ouvrages en béton armé.",
        image: "/images/categories/3.1.jpg",
      },
      {
        name: "Ferraillage",
        description:
          "Solutions métalliques pour fondations, poteaux, poutres et dalles.",
        image: "/images/categories/3.2.jpg",
      },
      {
        name: "Armatures métalliques",
        description:
          "Produits adaptés aux besoins des projets de gros œuvre et infrastructures.",
        image: "/images/categories/3.3.jpg",
      },
      {
        name: "Aciers pour chantier",
        description:
          "Fournitures métalliques sélectionnées pour les professionnels du bâtiment.",
        image: "/images/categories/3.4.jpg",
      },
    ],
  },
  {
    title: "Tuyauterie",
    slug: "tuyauterie",
    description:
      "Tubes, conduits, raccords et solutions techniques pour réseaux, plomberie, évacuation et installation professionnelle.",
    image: "/images/products/4.jpeg",
    translations: {
      en: {
        title: "Piping",
        description:
          "Pipes, conduits, fittings and technical solutions for networks, plumbing, drainage and professional installations.",
        products: [
          {
            name: "Technical pipes",
            description:
              "Pipes intended for water networks, drainage and technical installations.",
          },
          {
            name: "Fittings and accessories",
            description:
              "Connection accessories for reliable and durable installations.",
          },
          {
            name: "Flexible conduits",
            description:
              "Flexible solutions for routing, protection and network organization.",
          },
          {
            name: "Site pipes",
            description:
              "Products adapted to the needs of companies and installers.",
          },
          {
            name: "Network solutions",
            description:
              "Range intended for plumbing, building and infrastructure projects.",
          },
          {
            name: "Flexible conduit",
            description:
              "Flexible conduit used for protection and routing of installations.",
          },
          {
            name: "Piping accessories",
            description:
              "Complementary elements to finalize technical installations.",
          },
        ],
      },
      ar: {
        title: "الأنابيب",
        description:
          "أنابيب وقنوات ووصلات وحلول تقنية للشبكات والسباكة والصرف والتركيبات المهنية.",
        products: [
          {
            name: "أنابيب تقنية",
            description:
              "أنابيب موجهة لشبكات المياه والصرف والتركيبات التقنية.",
          },
          {
            name: "وصلات وإكسسوارات",
            description:
              "إكسسوارات ربط لتركيبات موثوقة ودائمة.",
          },
          {
            name: "قنوات مرنة",
            description:
              "حلول مرنة للتمرير والحماية وتنظيم الشبكات.",
          },
          {
            name: "أنابيب مواقع العمل",
            description:
              "منتجات مناسبة لاحتياجات الشركات والمركبين.",
          },
          {
            name: "حلول الشبكات",
            description:
              "مجموعة موجهة لمشاريع السباكة والبناء والبنية التحتية.",
          },
          {
            name: "قناة مرنة",
            description:
              "قناة مرنة تستخدم لحماية وتمرير التركيبات.",
          },
          {
            name: "إكسسوارات الأنابيب",
            description:
              "عناصر مكملة لإنهاء التركيبات التقنية.",
          },
        ],
      },
    },
    products: [
      {
        name: "Tubes techniques",
        description:
          "Tubes destinés aux réseaux d’eau, d’évacuation et aux installations techniques.",
        image: "/images/categories/4.1.jpg",
      },
      {
        name: "Raccords et accessoires",
        description:
          "Accessoires de raccordement pour installations fiables et durables.",
        image: "/images/categories/4.2.jpg",
      },
      {
        name: "Conduits souples",
        description:
          "Solutions flexibles pour passage, protection et organisation des réseaux.",
        image: "/images/categories/4.3.jpg",
      },
      {
        name: "Tubes de chantier",
        description:
          "Produits adaptés aux besoins des entreprises et installateurs.",
        image: "/images/categories/4.4.jpg",
      },
      {
        name: "Solutions de réseaux",
        description:
          "Gamme destinée aux projets de plomberie, bâtiment et infrastructure.",
        image: "/images/categories/4.5.jpg",
      },
      {
        name: "Tube gorge",
        description:
          "Conduit souple utilisé pour la protection et le passage des installations.",
        image: "/images/categories/4.6.jpg",
      },
      {
        name: "Accessoires de tuyauterie",
        description:
          "Éléments complémentaires pour finaliser les installations techniques.",
        image: "/images/categories/4.7.jpg",
      },
    ],
  },
  {
    title: "Sanitaire & Plomberie",
    slug: "sanitaire-plomberie",
    description:
      "Équipements sanitaires, accessoires de plomberie et produits d’étanchéité pour installations professionnelles.",
    image: "/images/products/5.jpeg",
    translations: {
      en: {
        title: "Sanitary & plumbing",
        description:
          "Sanitary equipment, plumbing accessories and sealing products for professional installations.",
        products: [
          {
            name: "Sanitary equipment",
            description:
              "Products intended for residential, commercial and professional sanitary installations.",
          },
          {
            name: "Plumbing accessories",
            description:
              "Solutions for connection, installation and maintenance of water networks.",
          },
          {
            name: "Sealing products",
            description:
              "Accessories used to secure fittings and limit leaks.",
          },
          {
            name: "Plumbing hemp",
            description:
              "Sealing product used for threaded connections.",
          },
          {
            name: "Sanitary connection",
            description:
              "Elements intended for sanitary installations and technical networks.",
          },
          {
            name: "B2B plumbing solutions",
            description:
              "Range designed for distributors, companies and professional projects.",
          },
          {
            name: "Technical accessories",
            description:
              "Complementary products for installation, maintenance and finishing.",
          },
        ],
      },
      ar: {
        title: "الصحي والسباكة",
        description:
          "معدات صحية وإكسسوارات سباكة ومنتجات عزل للتركيبات المهنية.",
        products: [
          {
            name: "معدات صحية",
            description:
              "منتجات موجهة للتركيبات الصحية السكنية والتجارية والمهنية.",
          },
          {
            name: "إكسسوارات السباكة",
            description:
              "حلول للربط والتركيب وصيانة شبكات المياه.",
          },
          {
            name: "منتجات العزل",
            description:
              "إكسسوارات تستخدم لتأمين الوصلات والحد من التسربات.",
          },
          {
            name: "كتان السباكة",
            description:
              "منتج عزل يستخدم في الوصلات الملولبة.",
          },
          {
            name: "ربط صحي",
            description:
              "عناصر موجهة للتركيبات الصحية والشبكات التقنية.",
          },
          {
            name: "حلول سباكة B2B",
            description:
              "مجموعة مصممة للموزعين والشركات والمشاريع المهنية.",
          },
          {
            name: "إكسسوارات تقنية",
            description:
              "منتجات مكملة للتركيب والصيانة والتشطيب.",
          },
        ],
      },
    },
    products: [
      {
        name: "Équipements sanitaires",
        description:
          "Produits destinés aux installations sanitaires résidentielles, commerciales et professionnelles.",
        image: "/images/categories/5.1.jpg",
      },
      {
        name: "Accessoires de plomberie",
        description:
          "Solutions pour raccordement, installation et maintenance des réseaux d’eau.",
        image: "/images/categories/5.2.jpg",
      },
      {
        name: "Produits d’étanchéité",
        description:
          "Accessoires utilisés pour sécuriser les raccords et limiter les fuites.",
        image: "/images/categories/5.3.jpg",
      },
      {
        name: "Filasse plomberie",
        description:
          "Produit d’étanchéité utilisé pour les raccordements filetés.",
        image: "/images/categories/5.4.webp",
      },
      {
        name: "Raccordement sanitaire",
        description:
          "Éléments destinés aux installations sanitaires et aux réseaux techniques.",
        image: "/images/categories/5.5.jpg",
      },
      {
        name: "Solutions plomberie B2B",
        description:
          "Gamme pensée pour distributeurs, entreprises et projets professionnels.",
        image: "/images/categories/5.6.jpg",
      },
      {
        name: "Accessoires techniques",
        description:
          "Produits complémentaires pour installation, entretien et finition.",
        image: "/images/categories/5.7.jpg",
      },
    ],
  },
  {
    title: "Boiserie & Accessoires",
    slug: "boiserie-accessoires",
    description:
      "Bois, panneaux, accessoires et équipements complémentaires pour construction, finition et aménagement.",
    image: "/images/products/6.jpeg",
    translations: {
      en: {
        title: "Woodwork & accessories",
        description:
          "Wood, panels, accessories and complementary equipment for construction, finishing and interior works.",
        products: [
          {
            name: "Construction wood",
            description:
              "Wood intended for building projects, formwork, structure and interior works.",
          },
          {
            name: "Panels and wood elements",
            description:
              "Solutions adapted to finishing works, furniture and layout projects.",
          },
          {
            name: "Wood accessories",
            description:
              "Complementary products for installation, finishing and fitting.",
          },
          {
            name: "Complementary equipment",
            description:
              "Practical solutions for construction and interior works professionals.",
          },
        ],
      },
      ar: {
        title: "الأخشاب والإكسسوارات",
        description:
          "خشب وألواح وإكسسوارات ومعدات مكملة للبناء والتشطيب والتهيئة.",
        products: [
          {
            name: "خشب البناء",
            description:
              "خشب موجه لمشاريع البناء والقوالب والهياكل والتهيئة.",
          },
          {
            name: "ألواح وعناصر خشبية",
            description:
              "حلول مناسبة لأعمال التشطيب والأثاث والتجهيز.",
          },
          {
            name: "إكسسوارات خشبية",
            description:
              "منتجات مكملة للتركيب والتشطيب والتثبيت.",
          },
          {
            name: "معدات مكملة",
            description:
              "حلول عملية لمهنيي البناء والتهيئة.",
          },
        ],
      },
    },
    products: [
      {
        name: "Bois de construction",
        description:
          "Bois destiné aux projets de bâtiment, coffrage, structure et aménagement.",
        image: "/images/categories/6.1.jpg",
      },
      {
        name: "Panneaux et éléments bois",
        description:
          "Solutions adaptées aux travaux de finition, mobilier et agencement.",
        image: "/images/categories/6.2.jpg",
      },
      {
        name: "Accessoires bois",
        description:
          "Produits complémentaires pour pose, finition et installation.",
        image: "/images/categories/6.3.webp",
      },
      {
        name: "Équipements complémentaires",
        description:
          "Solutions pratiques pour les professionnels du bâtiment et de l’aménagement.",
        image: "/images/categories/6.4.jpg",
      },
    ],
  },
];

export function getLocalizedProductCategories(
  language: LanguageCode,
): ProductCategory[] {
  if (language === "fr") {
    return productCategories;
  }

  return productCategories.map((category) => {
    const categoryTranslation = category.translations?.[language];

    return {
      ...category,
      title: categoryTranslation?.title ?? category.title,
      description: categoryTranslation?.description ?? category.description,
      products: category.products.map((product, index) => {
        const productTranslation = categoryTranslation?.products[index];

        return {
          ...product,
          name: productTranslation?.name ?? product.name,
          description:
            productTranslation?.description ?? product.description,
        };
      }),
    };
  });
}