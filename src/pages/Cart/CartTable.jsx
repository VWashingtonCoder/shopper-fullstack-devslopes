import CartItem from "../../components/CartItem/CartItem";
import { IoMdRemoveCircle } from "react-icons/io";

const CartTable = (props) => {
  const { cart, remove, updateQty } = props;

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
          const { key, category, imgSrc, name, price, qty, subtotal } = item;
          return (
            <tr className="product-row" key={key}>
              <td className="cell remove">
                <button
                  className="remove-btn"
                  value="0"
                  name={key}
                  onClick={remove}
                >
                  <IoMdRemoveCircle className="icon" />
                </button>
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
                <input
                  type="number"
                  value={qty}
                  name={key}
                  onChange={updateQty}
                />
              </td>
              <td className="cell price">${subtotal}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;
