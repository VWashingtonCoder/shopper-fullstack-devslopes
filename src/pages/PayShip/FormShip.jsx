import { inputsShipForm } from "../../data/constants";
import FormInput from "../../components/FormInput/FormInput";

const FormShip = (props) => {
  const { errors, formValues, update } = props;

  return (
    <form id="ShipForm">
      {inputsShipForm.map(input => ( 
                                                                                                               
      ))}
    </form>
  );
};

export default FormShip;
