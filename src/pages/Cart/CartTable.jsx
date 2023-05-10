import CartItem from "../../components/CartItem/CartItem";
import { IoMdRemoveCircle } from "react-icons/io";
import Cart from "./Cart";

const CartTable = (props) => {
  const { cart } = props;

  return (
    <table id="CartTable">
      <thead>
        <tr className="label-row">
          <th></th>
          <th>Items</th>
          <th>Qty</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => {
            console.log(item)
            const { key, category, imgSrc, name, price, qty } = item;
          return (
            <tr className="product-row" key={key}>
              <td className="cell remove">
                <IoMdRemoveCircle className="icon" />
              </td>
              <td className="cell item">
                <CartItem 
                    category={category}
                    src={imgSrc}
                    name={name}
                    price={price}
                />
              </td>
              <td className="cell qty">
                <input type="number" value={qty} />
              </td>
              <td className="cell price">
                ${price * qty}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;
