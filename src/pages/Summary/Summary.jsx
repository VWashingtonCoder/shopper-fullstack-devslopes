import "./Summary.css";
import CartItem from "../../components/CartItem/CartItem";

const Summary = (props) => {
  const { 
    cartItems,
    cartQty,
    page, 
    totals, 
    checkPay, 
    disabled 
  } = props;
  
  const summaryTotalsLabels = [
    { id: "sub", label: "Subtotal: " },
    { id: "ship", label: "Shipping: " },
    { id: "total", label: "Total: " },
  ];

  return (
    <div id="Summary">
      <h2 className="title">Summary</h2>
      <div className="cart-summary">
        {page === "cart" && (
          <p className="summary-qty">{cartQty} items in cart</p>
        )}
        {page === "payShip" && (
          cartItems.map(item => {
            const { 
              key, 
              category, 
              imgSrc, 
              name, 
              price,
              qty,
              subtotal  
            } = item;

            return(
              <div key={`summary-${key}`}>
                <CartItem 
                  category={category}
                  src={imgSrc}
                  name={name}
                  price={price}
                />
                <div key={`total-${key}`} className="item-total flex-align-center">
                  <div className="item-qty">
                    <span>Qty:</span>
                    <span>{qty}</span>
                  </div>
                  <span className="item-total">
                    {subtotal}
                  </span>
                </div>
              </div>
            )
          })
        )}
      </div>
      

      <div className="summary-totals">
        {summaryTotalsLabels.map((item) => (
          <p key={item.id} className={`total-text ${item.id}`}>
            <span className="total-label">{item.label}</span>
            <span className="total-cost">
              {totals[item.id] !== 0 
                ? `$ ${totals[item.id]}` 
                : item.id === "ship"
                  ? "Free"
                  : "$ -"
              }
            </span>
          </p>
        ))}
      </div>
      {page === "cart" && (
        <button 
          className="checkout-btn summary-btn" 
          disabled={cartQty <= 0 ? true : disabled}
          onClick={checkPay} 
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default Summary;
