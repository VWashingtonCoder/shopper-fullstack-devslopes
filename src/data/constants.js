import { MdHome, MdLogin, MdShoppingCart } from "react-icons/md";

const initLoginForm = { 
    email: "",
    password: ""
};

export const navBtns = [
  { key: "home", icon: <MdHome className="icon home" />, text: "Home" },
  {
    key: "login",
    icon: <MdLogin className="icon login" />,
    text: "Login/Sign-Up",
  },
  {
    key: "cart",
    icon: <MdShoppingCart className="icon cart" />,
    text: "Cart: ",
  },
];

export const prodCategories = [
  { key: "all", text: "All Systems" },
  { key: "playstation", text: "PlayStation" },
  { key: "xbox", text: "Xbox" },
  { key: "nintendo", text: "Nintendo" },
  { key: "pc", text: "PC/Steam" },
  { key: "virtual", text: "Virtual Reality" },
];

export const logSignKeys = [
  {
    key: "login",
    id: "radioLogin",
    label: "Login",
  },
  {
    key: "sign-up",
    id: "radioSignUp",
    label: "Sign Up",
  },
];

export const initLoginStates = {
    formValues: initLoginForm,
    error: "",
    disabled: true,
    showPW: false
};