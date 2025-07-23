import { Appliance, Fashion, Grocery } from '../images';
import { Colors } from './Color';
import pear from '../images/pear.png';
import food from '../images/food.png';
import kichap from '../images/kichap.png';
import Strawberries from '../images/Strawberries.png';
import FriedChips from '../images/FriedChips.png';
import washingMachine from '../images/washingMachine.png';
import chair from '../images/chair.png';
export const Languages = [
  { label: 'Urd', value: 'urdu' },
  { label: 'Cns', value: 'chinese' },
  { label: 'Pas', value: 'pashto' },
  { label: 'Eng', value: 'English' },
];

export const Gender = [
  { label: 'Male', value: 'male' },
  { label: 'female', value: 'female' },
];

export const Country = [
  { label: 'Pakistan', value: 'pakistan' },
  { label: 'China', value: 'china' },
  { label: 'Afghanistan', value: 'afghanistan' },
  { label: 'India', value: 'india' },
];

export const WeekendCardsData = [
  {
    id: 1,
    WeekendText: 'Happy Weekend',
    offerText: '25% OFF',
    menuText: 'for All Menus',
    ImagePath: '../assets/images/weekendBg.png',
  },
  {
    id: 2,
    WeekendText: 'Happy Weekend',
    offerText: '25% OFF',
    menuText: 'for All Menus',
    ImagePath: '../assets/images/weekendBg.png',
  },
  {
    id: 3,
    WeekendText: 'Happy Weekend',
    offerText: '25% OFF',
    menuText: 'for All Menus',
    ImagePath: '../assets/images/weekendBg.png',
  },
  {
    id: 4,
    WeekendText: 'Happy Weekend',
    offerText: '25% OFF',
    menuText: 'for All Menus',
    ImagePath: '../assets/images/weekendBg.png',
  },
];

export const CategoryCardData = [
  {
    label: 'Groceries',
    Icon: <Grocery />,
    backgroundColor: Colors.VERDIGRIS,
  },
  {
    label: 'Appliances',
    Icon: <Appliance />,
    backgroundColor: Colors.CELESTIAL_BLUE,
  },
  {
    label: 'Fashion',
    Icon: <Fashion />,
    backgroundColor: Colors.PEARLY_PURPLE,
  },
  {
    label: 'Groceries',
    Icon: <Fashion />,
    backgroundColor: Colors.PEARLY_PURPLE,
  },
];

export const OrderProduct = [
  {
    ImagePath: pear,
  },
  {
    ImagePath: food,
  },
  {
    ImagePath: kichap,
  },
  {
    text: '+5 More',
  },
];

export const Products = [
  {
    id: 1,
    imgPath: Strawberries,
    title: 'Strawberries',
    price: 10,
    rating: 4.8,
  },
  {
    id: 2,
    imgPath: FriedChips,
    title: 'Fried Chips',
    price: 12,
    rating: 4.8,
  },
  {
    id: 3,
    imgPath: chair,
    title: 'Moder Chair',
    price: 3599,
    rating: 4.8,
  },
  {
    id: 4,
    imgPath: washingMachine,
    title: 'LG washing machine',
    price: 22999,
    rating: 4.8,
  },
];
