import { inputsShipForm } from "../../data/constants";
import FormInput from "../../components/FormInput/FormInput";

const FormShip = (props) => {
  const { errors, formValues, update } = props;

  return (
    <form id="ShipForm">
      {inputsShipForm.map(input => ( 
        <FormInput 
          key={input.id}
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
