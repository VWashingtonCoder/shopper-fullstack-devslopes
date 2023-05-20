import { inputsShipForm } from "../../data/constants";
import FormInput from "../../components/FormInput/FormInput";

const FormShip = (props) => {
  const { formValues } = props;
  const { name, address, city, state, country, zip } = formValues;

  return (
    <form id="ShipForm">
      {inputsShipForm.map((input) => {
        const { name } = input;
        let inputHTMl = <div></div>;

        if (name === "name" || name === "address" || name === "city") {
          inputHTMl = <FormInput input={input} />;
        }

        return inputHTMl;
      })}

      <div className="input-group ship flex-align-center">
        {inputsShipForm.map((input) => {
          const { name } = input;
          let inputHTMl = <div></div>;

          if (name === "state" || name === "country" || name === "zip") {
            inputHTMl = <FormInput input={input} />;
          }

          return inputHTMl;
        })}
      </div>
    </form>
  );
};

export default FormShip;
