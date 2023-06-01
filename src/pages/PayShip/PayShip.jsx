import "./PayShip.css";
import FormPay from "./FormPay";
import FormShip from "./FormShip";
import { useEffect, useState } from "react";
import {
  validateFormValues,
  findDebitCardType,
  maskDebitCardNum,
  checkFullForm
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

const PayShip = ({ enable, sumEnabled }) => {
  const [shipFormValues, setShipFormValues] = useState(initShipFormValues);
  const [payFormValues, setPayFormValues] = useState(initPayFormValues);
  const [errors, setErrors] = useState({});
  const [fullForms, setFullForms] = useState({ ship: false, pay: false });

  useEffect(() => {
    const { ship, pay } = fullForms;
    if (sumEnabled === true 
      && ship === true 
      && pay === true
    ) enable(false)
    else if (sumEnabled === false 
      && (ship === false 
      || pay === false)
    ) enable(true);
  })


  const updateFormValues = (e) => {
    const { id, name, value } = e.target;
    const { valid, errorText } = validateFormValues(name, value);
    let newFormValues = undefined;

    if (valid) {
      if (id.includes("ship")) {
        newFormValues = { ...shipFormValues, [name]: value }; 
        setShipFormValues(newFormValues);
        setFullForms({ ...fullForms, ship: checkFullForm(newFormValues) });
      } else {
        if (name === "cardNo") {
          newFormValues = { 
            ...payFormValues, 
            cardType: findDebitCardType(value), 
            [name]: maskDebitCardNum(value),
          }
        } else newFormValues = { ...payFormValues, [name]: value }
        console.log(checkFullForm(newFormValues))
        setPayFormValues(newFormValues);
        setFullForms({ ...fullForms, pay: checkFullForm(newFormValues) });
      }
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
