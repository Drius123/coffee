import instagram from "../assets/social-media/instagram.svg";
import twitter from "../assets/social-media/twitter.svg";
import facebook from "../assets/social-media/facebook.svg";
import { FooterBtns } from "../types";

const NavItems = ["Favorite coffee", "About", "Mobile app", "Contact us"];

const footerBtns: FooterBtns = [
  { SVG: instagram, link: "/instagramlink" },
  { SVG: twitter, link: "/twitterlink" },
  { SVG: facebook, link: "/facebooklink" },
];

export { NavItems, footerBtns };
