import CartItem from "../../components/CartItem/CartItem";
import { IoMdRemoveCircle } from "react-icons/io";

const CartTable = (props) => {
  const { cart } = props;

  return (
    <table id="CartTable">
      <thead className="label-row">
          <th className="head-label remove"></th>
          <th className="head-label items">Items</th>
          <th className="head-label qty">Qty</th>
          <th className="head-label subtotal">Subtotal</th>
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
                ${(price * qty).toFixed(2)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;
