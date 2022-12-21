import {
  MdLocalOffer,
  AiTwotoneSetting,
  AiOutlineGift,
  TbFileInvoice,
  FiSettings,
  RiAuctionFill,
  RiAuctionLine,
  BsFillFileEarmarkTextFill,
  BsFillHeartFill,
  BsTag,
  BsTwitter,
  ImFacebook,
  BsGithub,
  RiEarthFill,
  AiOutlineHeart,
  HiOutlineDocumentText,
} from '../components/ReactIcons';

export const categories = [
  {
    category: 'fashion',
    categoryValue: 'fashion',
    link: '/products/fashion',
    subCategories: [
      {
        subCategory: 'tops',
        subCategoryValue: 'tops',
        link: '/products/fashion/tops',
      },
      {
        subCategory: 'dresses',
        subCategoryValue: 'dresses',
        link: '/products/fashion/dresses',
      },
      {
        subCategory: 'footwears',
        subCategoryValue: 'footwears',
        link: '/products/fashion/footwears',
      },
      {
        subCategory: 'bags',
        subCategoryValue: 'bags',
        link: '/products/fashion/bags',
      },
    ],
  },
  {
    category: 'mobiles & electronics',
    categoryValue: 'mobiles-electronics',
    link: '/products/mobiles-electronics',
    subCategories: [
      {
        subCategory: 'computers & tech',
        subCategoryValue: 'computers-tech',
        link: '/products/mobiles-electronics/computers-tech',
      },
      {
        subCategory: 'video games',
        subCategoryValue: 'video-games',
        link: '/products/mobiles-electronics/video-games',
      },
      {
        subCategory: 'mobile phones',
        subCategoryValue: 'mobile-phones',
        link: '/products/mobiles-electronics/mobile-phones',
      },
      {
        subCategory: 'photography',
        subCategoryValue: 'photography',
        link: '/products/mobiles-electronics/photography',
      },
    ],
  },
  {
    category: 'home decors',
    categoryValue: 'home-decors',
    link: '/products/home',
    subCategories: [
      {
        subCategory: 'furniture',
        subCategoryValue: 'furniture',
        link: '/products/home-decors/furniture',
      },
      {
        subCategory: 'home decor',
        subCategoryValue: 'home-decor',
        link: '/products/home-decors/home-decor',
      },
      {
        subCategory: 'bedding & towers',
        subCategoryValue: 'bedding-towers',
        link: '/products/home-decors/bedding-towers',
      },
      {
        subCategory: 'lighting & fans',
        subCategoryValue: 'lighting-fans',
        link: '/products/home-decors/lighting-fan',
      },
    ],
  },
  {
    category: 'living',
    categoryValue: 'living',
    link: '/products/living',
    subCategories: [
      {
        subCategory: 'health & nutrition',
        subCategoryValue: 'health-nutrition',
        link: '/products/living/health-nutrition',
      },
      {
        subCategory: 'skincare',
        subCategoryValue: 'skincare',
        link: '/products/living/skincare',
      },
      {
        subCategory: 'food & drinks',
        subCategoryValue: 'food-drinks',
        link: '/products/living/food-drinks',
      },
      {
        subCategory: 'sun glasses',
        subCategoryValue: 'sun-glasses',
        link: '/products/living/sun-glasses',
      },
    ],
  },
  {
    category: 'hobbies',
    categoryValue: 'hobbies',
    link: '/products/hobbies',
    subCategories: [
      {
        subCategory: 'jewellery',
        subCategoryValue: 'jewellery',
        link: '/products/hobbies/jewellery',
      },
      {
        subCategory: 'womens watches',
        subCategoryValue: 'womens-watches',
        link: '/products/hobbies/womens-watches',
      },
      {
        subCategory: 'mens watches',
        subCategoryValue: 'mens-watches',
        link: '/products/hobbies/mens-watches',
      },
      {
        subCategory: 'sport equipments',
        subCategoryValue: 'sport-equipments',
        link: '/products/hobbies/sport-equipments',
      },
    ],
  },
  {
    category: 'cars & properties',
    categoryValue: 'cars-properties',
    link: '/products/cars-properties',
    subCategories: [
      {
        subCategory: 'cars',
        subCategoryValue: 'cars',
        link: '/products/cars-properties/cars',
      },
      {
        subCategory: 'motorcycle',
        subCategoryValue: 'motorcycle',
        link: '/products/cars-properties/motorcycle',
      },
      {
        subCategory: 'property for rental',
        subCategoryValue: 'property-for-rental',
        link: '/products/cars-properties/property-rental',
      },
    ],
  },
  {
    category: 'jobs & services',
    categoryValue: 'jobs-services',
    link: '/products/jobs-services',
    subCategories: [
      {
        subCategory: 'part-time',
        subCategoryValue: 'part-time',
        link: '/products/jobs-services/part-time',
      },
      {
        subCategory: 'full-time',
        subCategoryValue: 'full-time',
        link: '/products/jobs-services/full-time',
      },
    ],
  },
];

export const profileLinks = [
  {
    title: 'collections',
    path: '/account/collections',
    icon: <BsFillHeartFill size={25} />,
    isPublic: true,
  },
  {
    title: 'listings',
    path: '/account/listings',
    icon: <RiAuctionFill size={25} />,
    isPublic: true,
  },
  {
    title: 'orders',
    path: '/account/orders',
    icon: <BsFillFileEarmarkTextFill size={25} />,
    isPublic: false,
  },
  {
    title: 'offers',
    path: '/account/offers',
    icon: <MdLocalOffer size={25} />,
    isPublic: false,
  },
  {
    title: 'settings',
    path: '/account/settings',
    icon: <AiTwotoneSetting size={25} />,
    isPublic: false,
  },
];

export const iconDropdownMenuList = [
  {
    name: 'Collections',
    link: 'collections',
    icon: <AiOutlineGift size={23} />,
  },
  {
    name: 'Listings',
    link: 'listings',
    icon: <RiAuctionLine size={23} />,
  },
  {
    name: 'Orders',
    link: 'orders',
    icon: <TbFileInvoice size={23} />,
  },
  {
    name: 'Offers',
    link: 'offers',
    icon: <BsTag size={23} />,
  },
  {
    name: 'Settings',
    link: 'settings',
    icon: <FiSettings size={23} />,
  },
];

export const ratingScore = {
  1: 'bad 😰',
  2: 'ok 🤨',
  3: 'fair 😀',
  4: 'good~ 😁',
  5: 'excellent! 🤩',
};

export const footerAboutLinks = [
  { title: 'utopia', link: '/' },
  { title: 'policies', link: '/' },
  { title: 'investors', link: '/' },
  { title: 'careers', link: '/' },
];

export const footerSocialLinks = [
  { title: 'homePage', link: '/', icon: <RiEarthFill size={25} /> },
  {
    title: 'github',
    link: 'https://github.com/LIONSHI01',
    icon: <BsGithub size={25} />,
  },
  { title: 'facebook', link: '/', icon: <ImFacebook size={25} /> },
  { title: 'twitter', link: '/', icon: <BsTwitter size={25} /> },
];

export const profileLinksMobile = [
  {
    title: 'collections',
    path: '/account/collections',
    icon: <AiOutlineHeart size={20} />,
    isPublic: true,
  },
  {
    title: 'listings',
    path: '/account/listings',
    icon: <RiAuctionLine size={20} />,
    isPublic: true,
  },
  {
    title: 'orders',
    path: '/account/orders',
    icon: <HiOutlineDocumentText size={20} />,
    isPublic: false,
  },
  {
    title: 'offers',
    path: '/account/offers',
    icon: <BsTag size={20} />,
    isPublic: false,
  },
  {
    title: 'settings',
    path: '/account/settings',
    icon: <FiSettings size={20} />,
    isPublic: false,
  },
];
