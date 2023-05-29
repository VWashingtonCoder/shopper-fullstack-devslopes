import { payInputs } from "../../data/constants";
import { getInputIdx } from "../../data/helpers";
import FormInput from "../../components/FormInput/FormInput";

const FormPay = (props) => {
    const { errors, formValues, update } = props;
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
                    <img src="" alt="card-type" />
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