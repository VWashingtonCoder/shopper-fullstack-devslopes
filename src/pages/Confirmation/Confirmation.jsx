import { useEffect, useState } from "react";

const randomConfirmNumbers = [
  "849503849",
  "562874698",
  "125789632",
  "648452195",
  "544984945",
  "564684651",
];

const Confirmation = () => {
  const [randomIdx, setRandomIdx] = useState(0);

  useEffect(() => {
    setRandomIdx(Math.floor(Math.random * randomConfirmNumbers.length));
  }, []);

  return (
    <div id="ConfirmPage">
      <h2>Thank you for your order!</h2>

      <div className="section-container">
        <div className="confirm-section products">
          <h3>Your New Games</h3>
          <div>Cart Items List</div>
        </div>

        <div className="section-container dual">
          <div className="confirm-section shipping">
            <h3>Shipping</h3>
            <p>
              Your order will be shipped to:
              <br />*Address* <br />
              Ships in 3-5 business days <br />
              Delivered in 7-10 business days
            </p>
          </div>

          <div className="confirm-section pay">
            <h3>Payment</h3>
            <p>
              {`Your card (last4) was charged (total amount)`}
              <br />
              {`Your reference number is ${randomConfirmNumbers[randomIdx]} `}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
