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
    errors, 
    showPW, 
    showConfirm, 
    submit,
    updateForm,
    updateShow 
  } = props;

  return (
    <form id="FormSignUp" onSubmit={submit}>
      <div className="form-head">
        <h2>New User</h2>
        <p className="head-text">
          Password must include 8-20 characters including at least one of each: Lowercase Letter (a-z), Uppercase Letter (A-Z), Number (0-9), Special Character (!@#$%^&*).
        </p>
      </div>

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
            {errors[key] && (<p className="error-text">{errors[key]}</p>)}
          </div>
        );
      })}

      <input type="submit" className="submit-btn" disabled={disabled} />
    </form>
  );
};

export default FormSignUp;
