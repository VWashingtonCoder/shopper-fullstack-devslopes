import "./PayShip.css";
import FormPay from "./FormPay";
import FormShip from "./FormShip";
import { useState } from "react";
import {
  validateFormValues,
  findDebitCardType,
  maskDebitCardNum,
} from "../../data/helpers";

const initShipFormValues = {
  name: "",
  address: "",
  city: "",
  state: "",
  country: "",
  zip: "",
};

const initPayFormValues = {
  cardNo: "",
  cardType: "",
  expMonth: "",
  expYear: "",
  cvv: "",
};

const PayShip = (props) => {
  const [shipFormValues, setShipFormValues] = useState(initShipFormValues);
  const [payFormValues, setPayFormValues] = useState(initPayFormValues);
  const [errors, setErrors] = useState({});

  const updateFormValues = (e) => {
    const { id, name, value } = e.target;
    const { valid, errorText } = validateFormValues(name, value);

    if (valid) {
      id.includes("ship")
        ? setShipFormValues({ ...shipFormValues, [name]: value })
        : name !== "cardNo"
        ? setPayFormValues({ ...payFormValues, [name]: value })
        : setPayFormValues({
            ...payFormValues,
            cardType: findDebitCardType(value),
            [name]: maskDebitCardNum(value),
          });
    }

    setErrors({ ...errors, [name]: errorText });
  };

  return (
    <div id="PayShip">
      <div className="form-container ship">
        <h2 className="form-title">Shipment</h2>
        <FormShip
          errors={errors}
          formValues={shipFormValues}
          update={updateFormValues}
        />
      </div>
      <div className="form-container pay">
        <h2 className="form-title">Payment</h2>
        <FormPay
          errors={errors}
          formValues={payFormValues}
          update={updateFormValues}
        />
      </div>
    </div>
  );
};

export default PayShip;
