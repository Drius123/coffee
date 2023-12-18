import { ReactNode } from "react";

export enum EnumText {
  Menu = "Menu",
  Preview = "Enjoy premium coffee at our charming cafe",
  PreviewText = "With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.",
  TextAbout = "Resource is the perfect and cozy place where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.",
  DownloadTitle = "Download our apps to start ordering",
  DownloadDescription = "Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are",
  BtnAppStoreText = "Available on the App Store",
  BtnGooglePlayText = "Available on Google Play",
  MenuPageText = "Behind each of our cups hides an amazing surprise",
}

export interface SomeInt {
  one: string;
}

export interface FooterBtnProps {
  SVG: string;
  link: string;
}

export type FooterBtns = FooterBtnProps[];

export interface BtnProps {
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  children?: ReactNode;
  active?: boolean;
}

export interface CardProps {
  img: string;
  title: string;
  description: string;
  price: string;
}

export interface SectionAboutProps {
  img: string[];
}
