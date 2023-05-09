function containsOnlyLetters(str) {
  return /^[A-Za-z]+$/.test(str);
}

function existingEmail(accounts, email) {
  const existing = accounts.find(acc => acc.email.toLowerCase() === email.toLowerCase());
  const returnVal = existing ? true : false;
  return returnVal;
}

function passwordValidation(pass) {
  const regExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  return regExp.test(pass);
}

export function generateStockArr(qty) {
  let qtyArr = [];
  for (let i = 1; i < qty + 1; i++) {
    qtyArr = [...qtyArr, i];
  }
  return qtyArr.length > 0 ? qtyArr : [0];
}

export function generateStockQtys(stock) {
  let stockQuantities = {};
  stock.forEach((item) => {
    stockQuantities = { ...stockQuantities, [item.key]: 1 };
  });
  return stockQuantities;
}

export function validateSignUpDisabled(formArr) {
  const validArr = [];
  let valLength = 0;

  for (let entry of formArr) {
    const [ name, value ] = entry;
    valLength = value.length;

    if (name === "firstName" || name === "surname") {
      valLength >= 2 ? validArr.push("valid") : validArr.push("invalid");
    } else if (name === "email") {
      valLength >= 5 
        ? validArr.push("valid")
        : validArr.push("invalid");
    } else if (name === "password" || name === "confirm") {
      valLength >= 8 || valLength <= 20
        ? validArr.push("valid") 
        : validArr.push("invalid");
    }
  }
  
  if (!validArr.includes("invalid")) return false;
  else return true;
}


export function validateSignUpForm(formVals, accounts) {
  const formArr = Object.entries(formVals);
  const errors = {};
  
  for (let entry of formArr) {
    const [ name, val ] = entry;
  
    if (name === "firstName" || name === "surname") {
      if(!containsOnlyLetters(val))
        errors[name] = "Names can only have letters";
    } else if (name === "email") {
      if (existingEmail(accounts, val)) 
        errors[name] = "Email already exists";
    } else if (name === "password") {
      if (!passwordValidation(val)) 
        errors[name] = "Password isn't valid";
    } else if (name === "confirm") {
      if(val !== formVals.password) 
        errors[name] = "Passwords aren't matching";
    }
  }

  return { 
    valid: Object.values(errors).length <= 0, 
    errors: errors 
  }
}
