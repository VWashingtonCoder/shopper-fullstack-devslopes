import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const signUpInputs = [
  { key: "firstName", label: "First Name", type: "text" },
  { key: "surname", label: "Surname", type: "text" },
  { key: "email", label: "Email", type: "email" },
  { key: "password", label: "Password", type: "password" },
  { key: "confirm", label: "Confirm Password", type: "password" },
];

const FormSignUp = (props) => {
  const { 
    formValues, 
    disabled, 
    showPW, 
    showConfirm, 
    updateForm,
    updateShow 
  } = props;

  return (
    <form id="FormSignUp">
      {signUpInputs.map((input) => {
        const { key, label, type } = input;
        const pwType = showPW ? "text" : type;
        const confirmType = showConfirm ? "text" : type;

        return (
          <div key={key} className={`form-input ${key} flex-align-center`}>
            <label htmlFor={key}>{label}</label>
            <input
              name={key}
              onChange={updateForm}
              type={
                key === "password"
                  ? pwType
                  : key === "confirm"
                  ? confirmType
                  : type
              }
              value={formValues[key]}
            />
            {(key === "password" || key === "confirm") && (
              <button 
                className={`pw-btn sign-up ${key}`} 
                onClick={updateShow}
                value={key}
              >
                {(key === "password" && showPW) 
                  || (key === "confirm" && showConfirm)
                    ? <AiFillEyeInvisible className="eye-icon icon" />
                    : <AiFillEye className="eye-icon icon" />
                }
              </button>
            )}
          </div>
        );
      })}

      <input type="submit" className="submit-btn" disabled={disabled} />
    </form>
  );
};

export default FormSignUp;
