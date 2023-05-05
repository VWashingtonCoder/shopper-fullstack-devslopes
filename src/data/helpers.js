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
  let name = "";
  let value = "";
  let valLength = 0;

  for (let entry of formArr) {
    name = entry[0];
    value = entry[1];
    valLength = value.length;

    if (name === "firstName" || name === "surname") {
      console.log(valLength);
      valLength >= 2 ? validArr.push("valid") : validArr.push("invalid");
    } else if (name === "email") {
      valLength > 0 && value.includes("@") && value.includes(".")
        ? validArr.push("valid")
        : validArr.push("invalid");
    } else if (name === "password" || name === "confirm") {
      valLength >= 8 ? validArr.push("valid") : validArr.push("invalid");
    }
  }
  
  if (!validArr.includes("invalid")) return false;
  else return true;
}
