const signUpInputs = [
  { key: "firstName", label: "First Name", type: "text" },
  { key: "surname", label: "Surname", type: "text" },
  { key: "email", label: "Email", type: "email" },
  { key: "password", label: "Password", type: "password" },
  { key: "confirm", label: "Confirm Password", type: "password" }
];

const FormSignUp = (props) => {
  const { 
    formValues, 
    disabled,
    showPW, 
    showConfirm, 
    updateForm 
  } = props;

  return (
    <form id="SignUpForm">
      {signUpInputs.map(input => {
        const { key, label, type } = input;
        const pwType = showPW ? "text" : type;
        const confirmType = showConfirm ? "text" : type; 

        return(
          <div key={key} className="input-container">
            <label htmlFor={key}>{label}</label>
            <input 
              className={`form-input ${key}`}
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
          </div>
        )
      })}

      <input type="submit" className="submit-btn" disabled={disabled}/>
    </form>
  );
}

export default FormSignUp;