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
import { FooterBtns, SliderCardProps } from "../types";

const NavItems = ["Favorite coffee", "About", "Mobile app", "Contact us"];

const footerBtns: FooterBtns = [
  { SVG: instagram, link: "/instagramlink" },
  { SVG: twitter, link: "/twitterlink" },
  { SVG: facebook, link: "/facebooklink" },
];

const slideCards: SliderCardProps[] = [
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

export { NavItems, footerBtns, slideCards, aboutImg };
