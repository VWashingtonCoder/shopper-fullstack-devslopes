import { payInputs } from "../../data/constants";
import FormInput from "../../components/FormInput/FormInput";

function getInputIdx(inputsArr, inputName) {
    return inputsArr.findIndex(input => input.name === inputName);
}

const FormPay = (props) => {
    const { formValues } = props;
    const { cardNo, cardType, expMonth, expYear, cvv } = formValues;
    const cardNoInput = payInputs[getInputIdx(payInputs, "cardNo")];
    const cvvInput = payInputs[getInputIdx(payInputs, "cvv")];
  
    return (
        <form id="PayForm">
            <div className="form-input cardNo">
                <FormInput input={cardNoInput} />
                <div className="card-type-img">
                    <img src="" alt="card-type" />
                </div>
            </div>
            
        
            <div className="input-group pay flex-align-center">
                {payInputs.map(input => {
                    const { name } = input;
                    let inputHTMl = <div></div>;
                
                    if(name === "expMonth" || name === "expYear") {
                        inputHTMl = (<FormInput input={input} />)
                    }

                    return (inputHTMl);
                })}
            </div>
            
            <FormInput input={cvvInput} />

        </form>
    );
}

export default FormPay;