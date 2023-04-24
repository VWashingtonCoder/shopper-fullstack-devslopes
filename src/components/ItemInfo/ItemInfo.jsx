import { generateStockArr } from "../helpers";
import { GrClose } from "react-icons/gr"

const ItemInfo = (props) => {
    const { product, addToCart, closeInfo, updateQty } = props;
    const { 
        category, 
        imgSrc, 
        info, 
        key, 
        price, 
        prodName, 
        stockQty 
    } = product;
    const qtyArr = generateStockArr(stockQty);

    console.log(product)

    return (
        <div id="ItemInfo">
            <div className="info-bar flex-align-center">
                <p className="mod-title">Product Information</p>
                <button className="info-btn close-x" onClick={closeInfo}>
                    <GrClose className="icon close-x"/>
                </button>
                
            </div>
            <div className="info-body">
                <div className="body-top flex-align-center">
                    <div className="head-img">
                        <img src={imgSrc} alt="product" />
                    </div>    
                    <div className="head-text">
                        <h2 className="info-title">{prodName}</h2>
                        <p className="info category">{category}</p>
                        <p className="info price">${price}</p>
                        <div className="buy-container flex-align-center">
                            <select name={key} id="cardQty" onChange={updateQty}>
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
                <p className="info description">
                    {info}
                </p> 
            </div>
        </div>
    );
}

export default ItemInfo;