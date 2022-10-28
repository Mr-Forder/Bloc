import currency from "../../images/currency.svg";
import mobile from "../../images/mobile.svg";
import pay from "../../images/pay.svg";

export const aboutObjOne = {
  to: "send",
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  buttonLabel: "Get Started",
  imgStart: false,
  img: [],
  alt: "car",
  dark: false,
  primary: true,
  darkText: true,
};

export const aboutObjTwo = {
  to: "send",
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  imgStart: true,
  img: [`${currency}`],
  alt: "currency",
  dark: true,
  primary: true,
  darkText: false,
};

export const sendObj = {
  to: "send",
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  buttonLabel: "Get Started",
  imgStart: false,
  img: [],
  alt: "car",
  dark: true,
  primary: true,
  darkText: false,
};

export const coinObj = {
  to: "send",
  id: "coins",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Monitor the market without any fuss",
  headline: "Everything at a glance.",
  description:
    "See the latest 7-day metrics for over 100 coins, all in once place and at a glance.",
  buttonLabel: "See coins",
  imgStart: false,

  dark: true,
  primary: true,
  darkText: false,
};

export const nanftObj = {
  to: "send",
  id: "nanft",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "News!",
  headline: "Unlimited transactions. Zero fees.",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: true,
  img: [`${currency}`],
  alt: "currency",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjOne = {
  to: "send",
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "premium Bank",
  headline: "Unlimited transactions. Zero fees.",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: [],
  alt: "car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  to: "send",
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Discover",
  headline: "Unlimited transactions. Zero fees.",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: true,
  img: [`${currency}`],
  alt: "currency",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  to: "discover",
  id: "services",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Services",
  headline: "Unlimited transactions. Zero fees.",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: [`${pay}`],
  alt: "mobile",
  dark: true,
  primary: true,
  darkText: true,
};

export const homeObjFour = {
  to: "signin",
  id: "final",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Our Services",
  headline: "Unlimited transactions. Zero fees.",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: [`${mobile}`],
  alt: "mobile",
  dark: true,
  primary: true,
  darkText: false,
};
