function containsOnlyLetters(str) {
  return /^[A-Za-z]+$/.test(str);
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
  return inputsArr.findIndex(input => input.name === inputName);
}
