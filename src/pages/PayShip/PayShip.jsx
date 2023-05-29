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
    const [errors, setErrors] = useState({});
    const [activeForm, setActiveForm] = useState("ship");


    function capitalizeStr(str) {
        const capitalFirstLetter = str.slice(0, 1).toUpperCase();
        return capitalFirstLetter + str.slice(1);
    }

    function containsOnlyLettersSpaces(str) {
        return /^[A-Za-z\s]+$/.test(str);
    }

    function containsSimultaneousSpaces(str) {
        return str.slice(-2) === "  " 
    }

    function containsValidZipCode(code) {
        return /^[0-9]{5}(?:-[0-9]{4})?$/.test(code);
    }

    function validateFormValues(name, value) {
        const valLength = value.length;
        const capitalName = capitalizeStr(name); 
        let valid = true;
        let errorText = "";

        console.log(`${name}: ${value}`)


        if(!value || value === " ") 
            errorText = `${capitalName} is required`;
        else if (name === "name" || name === "city") {
            if(valLength < 2) {
                errorText = `${capitalName} must include at least two characters`;
            } else if (!containsOnlyLettersSpaces(value)) {
                errorText = `${capitalName} can only include letters & one space`
                valid = false;
            } else if (containsSimultaneousSpaces(value)) {
                errorText = `${capitalName} can only include one space`;
                valid = false;
            }
        } else if (name === "zip") {
            if (valLength > 10){
                errorText = `${capitalName} code cannot be more than 10 characters`
                valid = false;
            } else if (!containsValidZipCode(value)) {
                errorText = `${capitalName} code must be valid`;
            } 
        }
        
    

        return {valid, errorText}; 
    }

    const updateFormValues = (e) => { 
        const { id, name, value } = e.target;
        const { valid, errorText } = validateFormValues(name, value);

        if (valid) {
            id.includes("ship")
                ? setShipFormValues({ ...shipFormValues, [name]: value })
                : setPayFormValues({ ...payFormValues, [name]: value })
        }

        setErrors({ ...errors, [name]: errorText });
    }

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
    )
}

export default PayShip;