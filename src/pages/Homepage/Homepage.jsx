import { useState } from "react";
import "./Homepage.css";
import ItemCard from "../../components/ItemCard/ItemCard";
import ItemInfo from "../../components/ItemInfo/ItemInfo";

const Homepage = (props) => {
    const { products, stockQty, addToCart, updateQty } = props;
    const [currentProduct, setCurrentProduct] = useState({});
    const [showInfoMod, setShowInfoMod] = useState(false);

    const displayProdInfo = (e) => {
        const key = e.target.value;
        const product = products.find(item => item.key === key);
        setCurrentProduct(product);
        setShowInfoMod(true);
    }

    const closeProdInfo = () => {
        setCurrentProduct({});
        setShowInfoMod(false);
    }


    return (
        <div id="Homepage">
            <div className="banner">

            </div>
            <div className="products-grid">
                {products.map(item => 
                    <ItemCard 
                        key={item.key} 
                        item={item}
                        itemQty={stockQty[item.key]}
                        addToCart={addToCart}
                        displayInfo={displayProdInfo}
                        updateQty={updateQty}
                    />
                )}
            </div>
            <div className="info-module">
                {showInfoMod && (
                    <ItemInfo 
                        product={currentProduct}
                        addToCart={addToCart}
                        closeInfo={closeProdInfo}
                        updateQty={updateQty} 
                    />
                )}
            </div>
        </div>
    );
}

export default Homepage;
