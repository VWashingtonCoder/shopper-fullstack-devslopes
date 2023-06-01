import { inputsShipForm } from "../../data/constants";
import FormInput from "../../components/FormInput/FormInput";

const FormShip = (props) => {
  const { errors, formValues, update } = props;

  return (
    <form id="ShipForm">
      {inputsShipForm.map((input, idx) => ( 
        <FormInput 
          key={`ShipInput-${idx}`}
          error={errors[input.name]}
          input={input} 
          update={update}
          value={formValues[input.name]} 
        />
      ))}
    </form>
  );
};

export default FormShip;
