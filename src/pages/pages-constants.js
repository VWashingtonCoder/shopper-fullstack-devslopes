const initLoginForm = { email: "", password: "" }

export const logSignKeys = [
    { 
      key: "login", 
      id: "radioLogin", 
      label: "Login" 
    },
    { 
      key: "sign-up", 
      id: "radioSignUp", 
      label: "Sign Up" 
    }
  ];
  
 export const initLoginStates = {
    formValues: initLoginForm,
    error: "",
    disabled: true
  };
  
  export const initPasswordStates = {
    password: false,
    confirm: false
  }