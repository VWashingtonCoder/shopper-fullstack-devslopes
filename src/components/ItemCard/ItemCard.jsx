import "./ItemCard.css";
import { generateStockArr } from "../helpers";

const ItemCard = (props) => {
  const { item, itemQty, addToCart, displayInfo, updateQty } = props;
  const { category, imgSrc, key, price, prodName, stockQty } = item;
  const qtyArr = generateStockArr(stockQty);

  return (
    <div id="ItemCard">
      <div className="card-img-container">
        <img src={imgSrc} alt="Product Item" />
      </div>
      <div className="card-info">
        <p className="info category">{category}</p>
        <button
          className="info-btn prod-name"
          value={key}
          onClick={displayInfo}
        >
          {prodName}
        </button>
        <p className="info price">${price}</p>

        <div className="buy-container flex-align-center">
          <select name={key} id="cardQty" onChange={updateQty} value={itemQty}>
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
