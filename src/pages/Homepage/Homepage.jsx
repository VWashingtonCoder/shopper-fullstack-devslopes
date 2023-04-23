import "./Homepage.css";
import ItemCard from "../../components/ItemCard/ItemCard";

const Homepage = (props) => {
    const { products, stockQty, addToCart, updateQty } = props;

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
                        updateQty={updateQty}
                    />
                )}
            </div>
        </div>
    );
}

export default Homepage;

