import "./ItemCard.css";
import { generateStockArr } from "../helpers";

const ItemCard = (props) => {
  const { item, itemQty, addToCart, updateQty } = props;
  const { category, imgSrc, key, price, prodName, stockQty } = item;
  const qtyArr = generateStockArr(stockQty);

  return (
    <div id="ItemCard" className="flex-align-center">
      <div className="card-img-container">
        <img src={imgSrc} alt="Product Item" />
      </div>
      <div className="card-info">
        <p className="info category">{category}</p>
        <p className="info prod-name">{prodName}</p>
        <div className="info-container">
          <span className="info price">${price}</span>
          <select name={key} className="cardQty" onChange={updateQty} value={itemQty}>
            {qtyArr.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button className="add-btn" value={key} onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
