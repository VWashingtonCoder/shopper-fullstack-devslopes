import { MdHome, MdLogin, MdShoppingCart } from "react-icons/md";

const initLoginForm = {
  email: "",
  password: "",
};

export const initSignUpFormValues = {
  firstName: "",
  surname: "",
  email: "",
  password: "",
  confirm: "",
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

export const loginFormInputs = [
  {
      key: "loginEmail", 
      label: "Email", 
      name: "email",
      min: 0,
      max: 99
  },
  {
      key: "loginPassword", 
      label: "Password", 
      name: "password",
      min: 8,
      max: 20
  }
];

export const signUpInputs = [
  { key: "firstName", label: "First Name", type: "text" },
  { key: "surname", label: "Surname", type: "text" },
  { key: "email", label: "Email", type: "email" },
  { key: "password", label: "Password", type: "password" },
  { key: "confirm", label: "Confirm Password", type: "password" },
];

export const initLoginStates = {
  formValues: initLoginForm,
  error: "",
  disabled: true,
  message: "",
  showPW: false,
};

export const initSignUpStates = {
  formValues: initSignUpFormValues,
  errors: {},
  disabled: true,
  showPW: { password: false, confirm: false },
};
