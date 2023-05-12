import CartTable from "./CartTable";
import "./Cart.css";

const Cart = (props) => {
    const { cart, remove, updateQty } = props;
    // console.log(cart)

    return (
        <div id="Cart">
            <h2 className="title">Cart</h2>
            {cart.length > 0 
                ? (
                    <CartTable 
                        cart={cart}
                        remove={remove} 
                        updateQty={updateQty}
                    />
                ) : (
                    <div className="cart-empty">
                        Your cart is empty...<br />
                        Go get some games to chill with!!!
                    </div>
                ) 
            }
            
        </div>
    );
} 
export default Cart;