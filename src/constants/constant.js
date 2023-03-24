import infoImg1 from "../assets/icons/microscope.png";
import infoImg2 from "../assets/icons/users.png";
import infoImg3 from "../assets/icons/wallet.png";
import infoImg4 from "../assets/icons/graduation-cap.png";
import courseImg from "../assets/images/course-img.png";

import mentor1 from "../assets/images/alina.png";
import mentor2 from "../assets/images/madina.png";
import mentor3 from "../assets/images/arina.png";
import mentor4 from "../assets/images/andrey.png";
import crtf1 from "../assets/images/crtf1.png";
import crtf2 from "../assets/images/crtf2.png";

export const navLinks = [
  { id: 1, title: "О НАС", isActive: true, href: "about", selected: false },
  { id: 2, title: "КУРСЫ", isActive: false, href: "courses", selected: false },
  { id: 3, title: "НОВОСТИ", isActive: false, href: "news", selected: false },
  {
    id: 4,
    title: "НАСТАВНИКИ",
    star: "✨",
    isActive: false,
    href: "mentors",
    selected: true,
  },
];

export const langs = [
  { id: 1, text: "Ru", selected: true, img: "" },
  { id: 2, text: "uz", selected: false, img: "" },
  { id: 3, text: "en", selected: false, img: "" },
];

export const info = [
  { id: 1, text: "Lorem ipsum dolor sit amet", img: infoImg1 },
  { id: 2, text: "Lorem ipsum dolor sit amet", img: infoImg2 },
  { id: 3, text: "Lorem ipsum dolor sit amet", img: infoImg3 },
  { id: 4, text: "Lorem ipsum dolor sit amet", img: infoImg4 },
];

export const courses = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    date: "20 марта",
    text: `Lorem ipsum dolor sit amet consectetur. 
  Amet donec rutrum habitasse eu interdum 
  dignissim arcu. `,
    img: courseImg,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    date: "21 марта",
    text: `Lorem ipsum dolor sit amet consectetur. 
  Amet donec rutrum habitasse eu interdum 
  dignissim arcu. `,
    img: courseImg,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    date: "22 марта",
    text: `Lorem ipsum dolor sit amet consectetur. 
  Amet donec rutrum habitasse eu interdum 
  dignissim arcu. `,
    img: courseImg,
  },
];

export const mentors = [
  { id: 1, img: mentor1, selected: false, name: "Алина" },
  { id: 2, img: mentor2, selected: true, name: "Мадина" },
  { id: 3, img: mentor3, selected: true, name: "Арина" },
  { id: 4, img: mentor4, selected: false, name: "Андрей" },
];

export const stats = [
  { id: 1, count: "60 000", text: "Lorem ipsum dolor sit amet" },
  { id: 2, count: "150+", text: "Lorem ipsum dolor sit amet" },
  { id: 3, count: "183 000 ", text: "Lorem ipsum dolor sit amet" },
];

export const crtfs = [
  { id: 1, img: crtf1, selected: false },
  { id: 2, img: crtf2, selected: true },
  { id: 3, img: crtf1, selected: false },
];

export const footerLinks1 = [
  { id: 1, text: "About Us", href: "about" },
  { id: 2, text: "Graduation", href: "home" },
  { id: 3, text: "Scholarship", href: "mentors" },
  { id: 4, text: "Admissions", href: "home" },
  { id: 5, text: "International", href: "about" },
  { id: 6, text: "Events", href: "news" },
];

export const footerLinks2 = [
  { id: 1, text: "Language", href: "about" },
  { id: 2, text: "WordPress", href: "home" },
  { id: 3, text: "Privacy", href: "mentors" },
  { id: 4, text: "FAQs", href: "home" },
  { id: 5, text: "Support", href: "news" },
];
