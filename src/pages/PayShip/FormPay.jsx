import { payInputs } from "../../data/constants";
import { getInputIdx } from "../../data/helpers";
import FormInput from "../../components/FormInput/FormInput";
import AMEX_ICON from "../../assets/amex.png";
import DISCOVER_ICON from "../../assets/discover.png";
import MASTERCARD_ICON from "../../assets/masterCard.png";
import VISA_ICON from "../../assets/visa.png"

const cardTypeLogos = {
    AMERICAN_EXPRESS: AMEX_ICON,
    DISCOVER: DISCOVER_ICON,
    MASTERCARD: MASTERCARD_ICON,
    VISA: VISA_ICON
}


const FormPay = (props) => {
    const { errors, formValues, update } = props;
    const { cardType } = formValues;
    const cardNoKey = "cardNo"
    const cardNoInput = payInputs[getInputIdx(payInputs, cardNoKey)];
  
    return (
        <form id="PayForm">
            <div className="form-input-container cardNo">
                <FormInput 
                    error={errors[cardNoKey]}
                    input={cardNoInput}
                    update={update}
                    value={formValues[cardNoKey]} 
                />
                <div className="card-type-img">
                    <img src={cardType ? cardTypeLogos[cardType] : ""} alt="card-type" />
                </div>
            </div>
            
        
            {payInputs.map(input => {
                    const { name } = input;
                    let inputHTMl = <div></div>;
            
                    if(name !== cardNoKey) {
                        inputHTMl = (
                            <FormInput 
                                key={input.id}
                                error={errors[input.name]}
                                input={input} 
                                update={update}
                                value={formValues[input.name]} 
                            />
                        )
                    }

                    return (inputHTMl);
                })}
        </form>
    );
}

export default FormPay;