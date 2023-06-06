import { useEffect, useState } from "react";
import "./Confirmation.css";

const randomConfirmNumbers = [
  "849503849",
  "562874698",
  "125789632",
  "648452195",
  "544984945",
  "564684651",
];

const abbreviatedCardTypes = {
  MASTERCARD: "MC",
  DISCOVER: "DISC",
  AMERICAN_EXPRESS: "AMEX",
  VISA: "VIS",
};

function getRandomIdx(array) {
  return Math.floor(Math.random() * array.length);
}

const Confirmation = ({ cart, info, total }) => {
  const [confirmNumber, setConfirmNumber] = useState(0);
  const { name, address, city, state, country, zip } = info.ship;
  const { cardNo, cardType } = info.pay;
  const last4 = cardNo.slice(cardNo.length - 4);
  const shortCardType = abbreviatedCardTypes[cardType];
  const payInfo = [
    { key: "pay-total", label: "Total Paid", value: total },
    {
      key: "pay-card",
      label: "Card Charged",
      value: `${shortCardType}*${last4}`,
    },
    { key: "pay-confirm", label: "Ref. Number", value: confirmNumber },
  ];

  useEffect(() => {
    const confirmIdx = getRandomIdx(randomConfirmNumbers);
    const confirmNum = randomConfirmNumbers[confirmIdx];
    setConfirmNumber(confirmNum);
  }, []);

  return (
    <div id="ConfirmPage">
      <h2 className="confirm-title">Thank you for your order!</h2>

      <div className="section-container">
        <div className="confirm-section products">
          <h3 className="section-title">Your New Games</h3>
          <div className="product-container flex-align-center">
            {cart.map((item) => {
              return (
                <div key={item.key} className="product-img">
                  <img src={item.imgSrc} alt="New Game" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="section-container dual">
          <div className="confirm-section shipping">
            <h3 className="section-title">Shipping</h3>
            <div className="shipping-info">
              <p className="ship-info address-top">
                Your order will be shipped to:
              </p>
              <div className="address-info">
                <p className="ship-info name">{name}</p>
                <p className="ship-info street">{address}</p>
                <p className="ship-info line-2">
                  {city}, {state}, {country} {zip}
                </p>
              </div>
              <p className="ship-info delivery">
                * Ships In 3-5 Business Days * <br />* Delivered In 7-10
                Business Days *
              </p>
            </div>
          </div>

          <div className="confirm-section pay">
            <h3 className="section-title">Payment</h3>
            <div className="payment-info">
              {payInfo.map((info) => (
                <p key={info.key} className={`pay-info ${info.key} flex-align-center`}>
                  <span className="pay-label">{info.label}: </span>
                  <span className="pay-value">{info.value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
