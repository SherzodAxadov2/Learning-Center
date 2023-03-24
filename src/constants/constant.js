import infoImg1 from "../assets/icons/microscope.png";
import infoImg2 from "../assets/icons/users.png";
import infoImg3 from "../assets/icons/wallet.png";
import infoImg4 from "../assets/icons/graduation-cap.png";
import courseImg from "../assets/images/course-img.png";

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
