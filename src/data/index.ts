import instagram from "../assets/social-media/instagram.svg";
import twitter from "../assets/social-media/twitter.svg";
import facebook from "../assets/social-media/facebook.svg";

import firstSlide from "../assets/coffee/coffee-slider-1.png";
import secondSlide from "../assets/coffee/coffee-slider-2.png";
import thirdSlide from "../assets/coffee/coffee-slider-3.png";

import firstAbout from "../assets/About/about-1.jpg";
import secondAbout from "../assets/About/about-2.jpg";
import thirdAbout from "../assets/About/about-3.jpg";
import fourthAbout from "../assets/About/about-4.jpg";

import coffe1 from "../assets/MenuCards/Coffee/coffee-1.png";
import coffe2 from "../assets/MenuCards/Coffee/coffee-2.png";
import coffe3 from "../assets/MenuCards/Coffee/coffee-3.png";
import coffe4 from "../assets/MenuCards/Coffee/coffee-4.png";
import coffe5 from "../assets/MenuCards/Coffee/coffee-5.png";
import coffe6 from "../assets/MenuCards/Coffee/coffee-6.png";
import coffe7 from "../assets/MenuCards/Coffee/coffee-7.png";
import coffe8 from "../assets/MenuCards/Coffee/coffee-8.png";

import tea1 from "../assets/MenuCards/Tea/tea-1.png";
import tea2 from "../assets/MenuCards/Tea/tea-2.png";
import tea3 from "../assets/MenuCards/Tea/tea-3.png";
import tea4 from "../assets/MenuCards/Tea/tea-4.png";

import desert1 from "../assets/MenuCards/Desert/dessert-1.png";
import desert2 from "../assets/MenuCards/Desert/dessert-2.png";
import desert3 from "../assets/MenuCards/Desert/dessert-3.png";
import desert4 from "../assets/MenuCards/Desert/dessert-4.png";
import desert5 from "../assets/MenuCards/Desert/dessert-5.png";
import desert6 from "../assets/MenuCards/Desert/dessert-6.png";
import desert7 from "../assets/MenuCards/Desert/dessert-7.png";
import desert8 from "../assets/MenuCards/Desert/dessert-8.png";

import { FooterBtns, CardProps, Btns } from "../types";

const NavItems = ["Favorite coffee", "About", "Mobile app", "Contact us"];

const footerBtns: FooterBtns = [
  { SVG: instagram, link: "/instagramlink" },
  { SVG: twitter, link: "/twitterlink" },
  { SVG: facebook, link: "/facebooklink" },
];

const slideCards: CardProps[] = [
  {
    img: firstSlide,
    title: "S’mores Frappuccino",
    description:
      "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
    price: "$5.50",
  },
  {
    img: secondSlide,
    title: "Caramel Macchiato",
    description:
      "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
    price: "$5.00",
  },
  {
    img: thirdSlide,
    title: "Ice coffee",
    description:
      "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
    price: "$4.50",
  },
];

const aboutImg = [firstAbout, thirdAbout, secondAbout, fourthAbout];

const MenuPageCardsCoffee: CardProps[] = [
  {
    img: coffe1,
    title: "Irish coffee",
    description:
      "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: "$7.00",
  },
  {
    img: coffe2,
    title: "Kahlua coffee",
    description:
      "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    price: "$7.00",
  },
  {
    img: coffe3,
    title: "Honey raf",
    description: "Espresso with frothed milk, cream and aromatic honey",
    price: "$5.50",
  },
  {
    img: coffe4,
    title: "Ice cappuccino",
    description: "Cappuccino with soft thick foam in summer version with ice",
    price: "$5.00",
  },
  {
    img: coffe5,
    title: "Espresso",
    description: "Classic black coffee",
    price: "$4.50",
  },
  {
    img: coffe6,
    title: "Latte",
    description:
      "Espresso coffee with the addition of steamed milk and dense milk foam",
    price: "$5.50",
  },
  {
    img: coffe7,
    title: "Latte macchiato",
    description: "Espresso with frothed milk and chocolate",
    price: "$5.50",
  },
  {
    img: coffe8,
    title: "Coffee with cognac",
    description: "Fragrant black coffee with cognac and whipped cream",
    price: "$5.50",
  },
];

const MenuPageCardsTea: CardProps[] = [
  {
    img: tea1,
    title: "Moroccan",
    description:
      "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    price: "$4.50",
  },
  {
    img: tea2,
    title: "Ginger",
    description: "Original black tea with fresh ginger, lemon and honey",
    price: "$5.00",
  },
  {
    img: tea3,
    title: "Cranberry",
    description: "Invigorating black tea with cranberry and honey",
    price: "$5.00",
  },
  {
    img: tea4,
    title: "Sea buckthorn",
    description:
      "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    price: "$5.50",
  },
];

const MenuPageCardsDesert: CardProps[] = [
  {
    img: desert1,
    title: "Marble cheesecake",
    description:
      "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    price: "$3.50",
  },
  {
    img: desert2,
    title: "Red velvet",
    description: "Layer cake with cream cheese frosting",
    price: "$4.00",
  },
  {
    img: desert3,
    title: "Cheesecakes",
    description:
      "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    price: "$4.50",
  },
  {
    img: desert4,
    title: "Creme brulee",
    description:
      "Delicate creamy dessert in a caramel basket with wild berries",
    price: "$4.00",
  },
  {
    img: desert5,
    title: "Pancakes",
    description: "Tender pancakes with strawberry jam and fresh strawberries",
    price: "$4.50",
  },
  {
    img: desert6,
    title: "Honey cake",
    description: "Classic honey cake with delicate custard",
    price: "$4.50",
  },
  {
    img: desert7,
    title: "Chocolate cake",
    description: "Cake with hot chocolate filling and nuts with dried apricots",
    price: "$5.50",
  },
  {
    img: desert8,
    title: "Black forest",
    description:
      "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    price: "$6.50",
  },
];

const teaBtns: Btns = {
  size: ["200ml", "300ml", "400ml"],
  additives: ["Sugar", "Lemon", "Syrup"],
};

const desertBtns: Btns = {
  size: ["50g", "100g", "200g"],
  additives: ["Berries", "Nuts", "Jam"],
};

const coffeeBtns: Btns = {
  size: ["200ml", "300ml", "400ml"],
  additives: ["Sugar", "Cinnamon", "Syrup"],
};

export {
  NavItems,
  footerBtns,
  slideCards,
  aboutImg,
  MenuPageCardsCoffee,
  MenuPageCardsTea,
  MenuPageCardsDesert,
  teaBtns,
  desertBtns,
  coffeeBtns,
};
