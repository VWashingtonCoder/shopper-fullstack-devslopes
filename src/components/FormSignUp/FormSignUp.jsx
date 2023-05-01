

const FormSignUp = (props) => {
//     const [formValues, setFormValues] = useState(initSignUpForm);
//   const [errors, setErrors] = useState({});
//   const [validForm, setValidForm] = useState(true);

//   const changeValues = (e) => {
//     const { name, value } = e.target;
//     const { valid, error } =
//       name !== "confirm"
//         ? validateSignUpValues(name, value)
//         : validateSignUpValues(name, value, formValues.password);
//     if (valid) setFormValues({ ...formValues, [name]: value });
//     setErrors({ ...errors, [name]: error });
//   };

//   const checkAvailableEmail = (e) => {
//     if (accounts.find((account) => account.email === e.target.value))
//       setErrors({
//         ...errors,
//         email: "Email is already in use. Log in instead.",
//       });
//   };

//   const resetForm = () => {
//     setFormValues(initSignUpForm);
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     const { email, password, confirm, firstName, surname } = formValues;

//     if (!email || !password || !confirm || !firstName || !surname)
//       setValidForm(false);
//     else {
//       add(formValues);
//       setValidForm(true);
//       resetForm();
//     }
//   };

  return (
    <form id="SignUpForm">
      {/* {!validForm && (
        <p className="head-error">
          We're sorry, but one or more fields are incomplete or incorrect
        </p>
      )}
      <div className="sign-up form-input email">
        <div className="input-labels flex-align-center">
          <label htmlFor="email">Your Email Address *</label>
          <span className="error-text">{errors.email}</span>
        </div>
        <input
          className={errors.email && "active-error"}
          type="email"
          name="email"
          value={formValues.email}
          onChange={changeValues}
          onBlur={checkAvailableEmail}
          required
          autoComplete="off"
        />
      </div>
      {pwInputsSignUp.map((input) => {
        const { key, text, name } = input;
        const state = name === "password" ? showPW : showCPW;

        return (
          <div key={key} className={`sign-up form-input ${name}`}>
            <div className="input-labels flex-align-center">
              <label htmlFor={name}>{text}</label>
              <span className="error-text">{errors[name]}</span>
            </div>
            <div className="pw-input-hide">
              <input
                className={errors[name] && "active-error"}
                type={state ? "text" : "password"}
                name={name}
                value={formValues[name]}
                onChange={changeValues}
                minLength="8"
                maxLength="20"
                autoComplete="off"
                required
              />
              <button
                className={`pw-btn icon-btn ${name}`}
                value={name}
                onClick={hide}
              >
                {formValues[state] ? (
                  <AiFillEyeInvisible className="eye-icon" />
                ) : (
                  <AiFillEye className="eye-icon" />
                )}
              </button>
            </div>
            {name === "password" && (
              <p className="pw-rules">
                Password must be 8-20 characters, including: at least one
                capital letter, at least one small letter, one number, and one
                special character - !@#$%^&*
              </p>
            )}
          </div>
        );
      })}
      {nameInputsSignUp.map((input) => {
        const { key, label, name } = input;

        return (
          <div key={key} className={`sign-up form-input ${name}`}>
            <div className="input-labels flex-align-center">
              <label htmlFor={name}>{label}</label>
              <span className="error-text">{errors[name]}</span>
            </div>
            <input
              className={errors[name] && "active-error"}
              type="text"
              name={name}
              value={formValues[name]}
              onChange={changeValues}
              autoComplete="off"
              required
            />
          </div>
        );
      })}
      <div className="sign-up form-input postCode">
        <div className="input-labels flex-align-center">
          <label htmlFor="postCode">Postcode</label>
          <span className="error-text">{errors.postCode}</span>
        </div>
        <input
          className={errors.postCode && "active-error"}
          type="text"
          name="postCode"
          value={formValues.postCode}
          onChange={changeValues}
          autoComplete="off"
        />
      </div>
      <input className="form-submit big-btn" type="submit" value="Save" /> */}
    </form>
  );
}

export default FormSignUp;