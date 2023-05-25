import { payInputs } from "../../data/constants";
import { getInputIdx } from "../../data/helpers";
import FormInput from "../../components/FormInput/FormInput";

const FormPay = (props) => {
    const { formValues } = props;
    const { cardNo, cardType, expMonth, expYear, cvv } = formValues;
    const cardNoInput = payInputs[getInputIdx(payInputs, "cardNo")];
    const cvvInput = payInputs[getInputIdx(payInputs, "cvv")];
  
    return (
        <form id="PayForm">
            <div className="form-input-container cardNo">
                <FormInput input={cardNoInput} />
                <div className="card-type-img">
                    <img src="" alt="card-type" />
                </div>
            </div>
            
        
            {payInputs.map(input => {
                    const { name } = input;
                    let inputHTMl = <div></div>;
                
                    if(name === "expMonth" || name === "expYear" || name === "cvv") {
                        inputHTMl = (<FormInput input={input} />)
                    }

                    return (inputHTMl);
                })}
        </form>
    );
}

export default FormPay;