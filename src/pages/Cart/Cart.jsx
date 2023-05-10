import CartTable from "./CartTable";

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)


    return (
        <div id="Cart">
            <CartTable cart={cart}/>
        </div>
    );
} 
export default Cart;