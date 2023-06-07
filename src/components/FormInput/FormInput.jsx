import { selectOptions } from "../../data/constants";

const FormInput = (props) => {
  const { error, input, update, value } = props;
  const { id, label, max, min, name, type } = input;

  return (
    <div key={id} className={`form-input ${name} flex-align-center`}>
      <label htmlFor={id}>{label}: </label>
      {type === "select" ? (
        <select id={id} name={name} onChange={update} value={value}>
          {selectOptions[name].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          max={max}
          min={min}
          onChange={update}
          type={type}
          value={value}
        />
      )}
      <span className="error-text">{error}</span>
    </div>
  );
};

export default FormInput;
