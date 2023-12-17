export enum EnumText {
  Menu = "Menu",
  Preview = "Enjoy premium coffee at our charming cafe",
  PreviewText = "With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.",
  TextAbout = "Resource is the perfect and cozy place where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.",
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
}

export interface SliderCardProps {
  img: string;
  title: string;
  description: string;
  price: string;
}

export interface SectionAboutProps {
  img: string[];
}
