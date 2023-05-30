import { regexPattern } from "./constants";

function containsOnlyLetters(str) {
  return /^[A-Za-z]+$/.test(str);
}

function containsOnlyLettersSpaces(str) {
  return /^[A-Za-z\s]+$/.test(str);
}

function capitalizeStr(str) {
  const capitalFirstLetter = str.slice(0, 1).toUpperCase();
  return capitalFirstLetter + str.slice(1);
}

function containsSimultaneousSpaces(str) {
  return str.slice(-2) === "  ";
}

function containsValidZipCode(code) {
  return /^[0-9]{5}(?:-[0-9]{4})?$/.test(code);
}

function containsNumbersOnly(str) {
  return /^\d+$/.test(str);
}

function existingEmail(accounts, email) {
  const existing = accounts.find(
    (acc) => acc.email.toLowerCase() === email.toLowerCase()
  );
  const returnVal = existing ? true : false;
  return returnVal;
}

function passwordValidation(pass) {
  const regExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  return regExp.test(pass);
}

function cardNumberValidation(cardNumber) {
  let valid = false;
  for (const card in regexPattern) {
    if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card])) {
      if (cardNumber) {
        if (
          cardNumber &&
          /^[1-6]{1}[0-9]{14,15}$/i.test(
            cardNumber.replace(/[^\d]/g, "").trim()
          )
        )
          valid = true;
      }
    }
  }
  return valid;
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
    const [name, value] = entry;
    valLength = value.length;

    if (name === "firstName" || name === "surname") {
      valLength >= 2 ? validArr.push("valid") : validArr.push("invalid");
    } else if (name === "email") {
      valLength >= 5 ? validArr.push("valid") : validArr.push("invalid");
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
    const [name, val] = entry;

    if (name === "firstName" || name === "surname") {
      if (!containsOnlyLetters(val))
        errors[name] = "Names can only have letters";
    } else if (name === "email") {
      if (existingEmail(accounts, val)) errors[name] = "Email already exists";
    } else if (name === "password") {
      if (!passwordValidation(val)) errors[name] = "Password isn't valid";
    } else if (name === "confirm") {
      if (val !== formVals.password) errors[name] = "Passwords aren't matching";
    }
  }

  return {
    valid: Object.values(errors).length <= 0,
    errors: errors,
  };
}

export function getCartSubtotal(cart) {
  let subtotal = 0;

  cart.forEach(
    (item) => (subtotal = Number((subtotal + item.subtotal).toFixed(2)))
  );

  return subtotal;
}

export function getNewCart(cart, item, qty) {
  const { key, prodName, category, imgSrc, price } = item;
  const cartProductIdx = cart.findIndex((product) => product.key === key);
  let newCart = [];
  let newItem = {};

  if (cartProductIdx === -1) {
    newItem = {
      key: key,
      name: prodName,
      category: category,
      imgSrc: imgSrc,
      price: price,
      qty: qty,
      subtotal: Number((price * qty).toFixed(2)),
    };
    newCart = [...cart, newItem];
  } else if (cartProductIdx !== -1 && qty <= 0) {
    newCart = cart.filter((item) => item.key !== key);
  } else {
    newCart = cart.map((item) => {
      if (item.key === key) {
        item = {
          ...item,
          qty: qty,
          subtotal: Number((price * qty).toFixed(2)),
        };
      }
      return item;
    });
  }

  return newCart;
}

export function getCartTotalQty(cart) {
  let cartQty = 0;
  cart.forEach((item) => (cartQty = cartQty + item.qty));
  return cartQty;
}

export function getInputIdx(inputsArr, inputName) {
  return inputsArr.findIndex((input) => input.name === inputName);
}

export function findDebitCardType(cardNum) {
  for (const card in regexPattern) {
    if (cardNum.replace(/[^\d]/g, "").match(regexPattern[card])) return card;
  }
  return "";
}

export function maskDebitCardNum(cardNum) {
  let mask = cardNum.split(" ").join("");

  if (mask.length) mask = mask.match(new RegExp(".{1,4}", "g")).join(" ");

  return mask;
}

export function validateFormValues(name, value) {
  const valLength = value.length;
  const capitalName = capitalizeStr(name);
  let valid = true;
  let errorText = "";

  if (!value || value === " ") errorText = `${capitalName} is required`;
  else if (name === "name" || name === "city") {
    if (valLength < 2) {
      errorText = `${capitalName} must include at least two characters`;
    } else if (!containsOnlyLettersSpaces(value)) {
      errorText = `${capitalName} can only include letters & one space`;
      valid = false;
    } else if (containsSimultaneousSpaces(value)) {
      errorText = `${capitalName} can only include one space`;
      valid = false;
    }
  } else if (name === "zip") {
    if (valLength > 10) {
      errorText = `${capitalName} code cannot be more than 10 characters`;
      valid = false;
    } else if (!containsValidZipCode(value)) {
      errorText = `${capitalName} code must be valid`;
    }
  } else if (name === "cardNo") {
    const cardNum = value.split(" ").join("");
    if (!containsNumbersOnly(cardNum)) {
      errorText = "Card number can only include numbers";
      valid = false;
    } else if (valLength > 20) {
      errorText = "Card number can only have 16-17 digits max";
      valid = false;
    } else if (!cardNumberValidation(value)) {
      errorText = "Card number must be valid";
    }
  } else if (name === "cvv") {
    if (!containsNumbersOnly(value)) {
      errorText = "CVV can only include numbers";
      valid = false;
    } else if (valLength > 4) {
      errorText = "CVV can only have 3-4 digits max";
      valid = false;
    }
  }

  return { valid, errorText };
}
