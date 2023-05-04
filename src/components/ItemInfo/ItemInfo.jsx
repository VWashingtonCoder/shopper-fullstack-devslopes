import { generateStockArr } from "../../data/helpers";
import { GrClose } from "react-icons/gr";

const ItemInfo = (props) => {
  const { chosenQty, product, addToCart, closeInfo, updateQty } = props;
  const { category, imgSrc, info, key, price, prodName, stockQty } = product;
  const qtyArr = generateStockArr(stockQty);

  return (
    <div id="ItemInfo">
      <div className="info-container">
        <div className="info-bar">
          <p className="mod-title">Product Information</p>
          <button className="info-btn close" onClick={closeInfo}>
            <GrClose className="icon close-x" />
          </button>
        </div>
        <div className="info-body">
          <div className="info-top flex-align-center">
            <div className="top-img">
              <img src={imgSrc} alt="product" />
            </div>
            <div className="top-text">
              <h2 className="info-title">{prodName}</h2>
              <p className="info category">{category}</p>
              <p className="info price">${price}</p>
              <div className="buy-container flex-align-center">
                <select
                  name={key}
                  id="cardQty"
                  onChange={updateQty}
                  value={chosenQty}
                >
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
          <div className="info-bottom">
            <p className="info description-title">Description</p>
            <p className="info description">{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
