import { inputsShipForm } from "../../data/constants";
import FormInput from "../../components/FormInput/FormInput";

const FormShip = (props) => {
  const { formValues } = props;
  const { name, address, city, state, country, zip } = formValues;

  return (
    <form id="ShipForm">
      {inputsShipForm.map(input => <FormInput input={input} />)}
    </form>
  );
};

export default FormShip;
