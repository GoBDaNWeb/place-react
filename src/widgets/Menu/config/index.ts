import Afisha from "shared/assets/images/menu/Afisha.jpg";
import Coctail from "shared/assets/images/menu/Coctail.jpg";
import Concept from "shared/assets/images/menu/Concept.jpg";
import Contacts from "shared/assets/images/menu/Contacts.jpg";
import Interier from "shared/assets/images/menu/Interier.jpg";
import Kitchen from "shared/assets/images/menu/Kitchen.jpg";

export const menuList = [
  {
    title: "Концепция",
    img: Concept,
    slideTo: 2,
    scroll: "#concept",
  },
  {
    title: "Афиша",
    img: Afisha,
    slideTo: 5,
    scroll: "#afisha",
  },
  {
    title: "Коктейльная карта",
    img: Coctail,
    slideTo: 7,
    scroll: "#coctail",
  },
  {
    title: "кухня",
    img: Kitchen,
    slideTo: 9,
    scroll: "#kitchen",
  },
  {
    title: "Интерьер",
    img: Interier,
    slideTo: 11,
    scroll: "#interior",
  },
  {
    title: "Контакты",
    img: Contacts,
    slideTo: 12,
    scroll: "#contacts",
  },
];
