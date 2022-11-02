import { MdLocalOffer } from 'react-icons/md';
import { AiTwotoneSetting, AiOutlineGift } from 'react-icons/ai';
import { TbFileInvoice } from 'react-icons/tb';

import { FiSettings } from 'react-icons/fi';
import { RiAuctionFill } from 'react-icons/ri';
import {
  BsFillFileEarmarkTextFill,
  BsFillHeartFill,
  BsTag,
} from 'react-icons/bs';

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
        subCategory: 'bottoms',
        subCategoryValue: 'bottoms',
        link: '/products/fashion/bottoms',
      },
      {
        subCategory: 'footwears',
        subCategoryValue: 'footwears',
        link: '/products/fashion/footwears',
      },
      {
        subCategory: 'coats & jackets',
        subCategoryValue: 'coats-jackets',
        link: '/products/fashion/coats-jackets',
      },
      {
        subCategory: 'Others',
        subCategoryValue: 'Others',
        link: '/products/fashion/others',
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
      {
        subCategory: 'others',
        subCategoryValue: 'others',
        link: '/products/mobiles-electronics/others',
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
      {
        subCategory: 'others',
        subCategoryValue: 'others',
        link: '/products/home-decors/others',
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
        subCategory: 'babies & kids',
        subCategoryValue: 'babies-kids',
        link: '/products/living/babies-kids',
      },
      {
        subCategory: 'food & drinks',
        subCategoryValue: 'food-drinks',
        link: '/products/living/food-drinks',
      },
      {
        subCategory: 'pet supplies',
        subCategoryValue: 'pet supplies',
        link: '/products/living/pet-supplies',
      },
      {
        subCategory: 'others',
        subCategoryValue: 'others',
        link: '/products/living/others',
      },
    ],
  },
  {
    category: 'hobbies',
    categoryValue: 'hobbies',
    link: '/products/hobbies',
    subCategories: [
      {
        subCategory: 'music',
        subCategoryValue: 'music',
        link: '/products/hobbies/music',
      },
      {
        subCategory: 'books & magazings',
        subCategoryValue: 'books-magazings',
        link: '/products/hobbies/books-magazines',
      },
      {
        subCategory: 'tickets & vouchers',
        subCategoryValue: 'tickets-vouchers',
        link: '/products/hobbies/tickets-vouchers',
      },
      {
        subCategory: 'sport equipments',
        subCategoryValue: 'sport-equipments',
        link: '/products/hobbies/sport-equipments',
      },
      {
        subCategory: 'others',
        subCategoryValue: 'others',
        link: '/products/hobbies/others',
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
        subCategory: 'property for sale',
        subCategoryValue: 'property-for-sale',
        link: '/products/cars-properties/property-sale',
      },
      {
        subCategory: 'property for rental',
        subCategoryValue: 'property-for-rental',
        link: '/products/cars-properties/property-rental',
      },
      {
        subCategory: 'others',
        subCategoryValue: 'others',
        link: '/products/cars-properties/others',
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
      {
        subCategory: 'internships & others',
        subCategoryValue: 'internships-others',
        link: '/products/jobs-services/internship-others',
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
    icon: <AiOutlineGift size={19} />,
  },
  {
    name: 'Orders',
    link: 'orders',
    icon: <TbFileInvoice size={19} />,
  },
  {
    name: 'Offers',
    link: 'offers',
    icon: <BsTag size={18} />,
  },
  {
    name: 'Settings',
    link: 'settings',
    icon: <FiSettings size={19} />,
  },
];
