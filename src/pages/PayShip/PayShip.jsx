import "./PayShip.css";
import FormPay from "./FormPay";
import FormShip from "./FormShip";
import { useState } from "react";

const initShipFormValues = {
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: ""
}

const initPayFormValues = {
    cardNo: "",
    cardType: "",
    expMonth: "",
    expYear: "",
    cvv: ""
}

const PayShip = (props) => {
    const [shipFormValues, setShipFormValues] = useState(initShipFormValues);
    const [payFormValues, setPayFormValues] = useState(initPayFormValues);
    const [activeForm, setActiveForm] = useState("ship");


    return (
        <div id="PayShip">
            <div className="form-container ship">
                <h2 className="form-title">Shipment</h2>
                <FormShip formValues={shipFormValues}/>
            </div>
            <div className="form-container pay">
                <h2 className="form-title">Payment</h2>
                <FormPay formValues={payFormValues}/>
            </div>
        </div>
    )
}

export default PayShip;