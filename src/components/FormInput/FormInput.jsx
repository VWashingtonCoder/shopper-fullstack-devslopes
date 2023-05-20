import { selectOptions } from "../../data/constants";

const FormInput = ({ input }) => {
  const { id, label, max, min, name, type } = input;

  return (
    <div key={id} className={`form-input ${name}`}>
      <label htmlFor={id}>{label}: </label>
      {type === "select" ? (
        <select id={id} name={name}>
          {selectOptions[name].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input id={id} name={name} max={max} min={min} type={type} />
      )}
    </div>
  );
};

export default FormInput;
