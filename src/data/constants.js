import { MdHome, MdLogin, MdShoppingCart } from "react-icons/md";

const initLoginForm = {
  email: "",
  password: "",
};

export const initAccounts = [
  {
    id: 0,
    email: "admin@chgames.com",
    password: "Password$1",
    name: "Admin-sama",
  },
];

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

export const selectOptions = {
  state: [" ", "CA","CO","FL","GA","NY"],
  country: [" ", "USA"]
}

export const inputsShipForm = [
    { 
        id: "shipName", 
        label: "Name", 
        max: 99,
        min: 2, 
        name: "name",
        type: "text"
    },
    {
        id: "shipAddress", 
        label: "Address", 
        max: 99,
        min: 1, 
        name: "address",
        type: "text"
    },
    {
        id: "shipCity", 
        label: "City", 
        max: 99,
        min: 2, 
        name: "city",
        type: "text"
    },
    {
        id: "shipState", 
        label: "State", 
        max: 99,
        min: 0, 
        name: "state",
        type: "select"
    },
    {
        id: "shipCountry", 
        label: "Country", 
        max: 99,
        min: 0, 
        name: "country",
        type: "select"
    },
    {
        id: "shipZip", 
        label: "Zip Code", 
        max: 7,
        min: 5, 
        name: "zip",
        type: "text"
    }
];