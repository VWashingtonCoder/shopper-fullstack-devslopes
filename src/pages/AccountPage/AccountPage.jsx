import "./AccountPage.css";
import { useState } from "react";
import { RxDividerVertical } from "react-icons/rx";
import FormLogin from "./FormLogin";
import FormSignUp from "./FormSignUp";
import { initLoginStates, logSignKeys } from "../../data/constants";

const initSignUpFormValues = {
  firstName: "",
  surname: "",
  email: "",
  password: "",
  confirm: "",
};

const initSignUpErrors = {
  firstName: "",
  surname: "",
  email: "",
  password: "",
  confirm: "",
};

const initSignUpStates = {
  formValues: initSignUpFormValues,
  errors: initSignUpErrors,
  disabled: true,
  showPW: { password: false, confirm: false },
};

const AccountPage = (props) => {
  const { accounts, active, updateActive, navigate } = props;

  const [logSign, setLogSign] = useState("sign-up");
  const [loginStates, setLoginStates] = useState(initLoginStates);
  const [signUpStates, setSignUpStates] = useState(initSignUpStates);

  const changeLogSign = (e) => {
    setLogSign(e.target.value);
  };

  const handleLoginDisabled = (e) => {
    const { name, value } = e.target;
    const { email, password } = loginStates.formValues;
    let disabled = true;
    if (name === "email" && value.length > 0) {
      if (password.length > 0 || !value.includes("@") || !value.includes("."))
        disabled = false;
    } else {
      if (email.length > 0 || value.length < 8) disabled = false;
    }
    setLoginStates({ ...loginStates, disabled: disabled });
  };

  const updateLoginFormValues = (e) => {
    const { name, value } = e.target;
    const newFormValues = loginStates.formValues;
    newFormValues[name] = value;

    setLoginStates({
      ...loginStates,
      formValues: newFormValues,
    });
  };

  const updateLoginShowPW = (e) => {
    e.preventDefault();
    const currState = loginStates.showPW;
    setLoginStates({ ...loginStates, showPW: !currState });
  };

  const validateLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginStates.formValues;
    const account = accounts.find(
      (item) => item.email.toLowerCase() === email.toLowerCase()
    );
    let error = "";

    if (account) {
      if (account.pw === password) {
        updateActive(account);
        navigate("home");
      } else error = "Wrong Password Provided";
    } else error = "Email Not On File";

    setLoginStates({ ...loginStates, error: error });
  };

  const updateSignUpFormValues = (e) => {
    const { name, value } = e.target;
    const currentForm = signUpStates.formValues;
    const newForm = { ...currentForm, [name]: value };
    setSignUpStates({ ...signUpStates, formValues: newForm });
  };

  const updateSignUpShowPW = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  return (
    <div id="AccountPage">
      <div className="page-body">
        {!active.name ? (
          <div className="form-container">
            <div className="page-header flex-align-center">
              {logSignKeys.map((item) => {
                const { key, id, label } = item;
                return (
                  <div key={key} className="flex-align-center">
                    <div className={`radio-btn ${key} flex-align-center`}>
                      <input
                        type="radio"
                        id={id}
                        value={key}
                        checked={logSign === key}
                        onChange={changeLogSign}
                      />
                      <label htmlFor={id}>{label}</label>
                    </div>

                    {key === "login" && (
                      <RxDividerVertical className="icon divider" />
                    )}
                  </div>
                );
              })}
            </div>
            {logSign === "login" ? (
              <FormLogin
                formValues={loginStates.formValues}
                disabled={loginStates.disabled}
                error={loginStates.error}
                handleDisabled={handleLoginDisabled}
                show={loginStates.showPW}
                submit={validateLoginSubmit}
                updateForm={updateLoginFormValues}
                updateShow={updateLoginShowPW}
              />
            ) : (
              <FormSignUp
                formValues={signUpStates.formValues}
                disabled={signUpStates.disabled}
                errors={signUpStates.errors}
                showPW={signUpStates.showPW.password}
                showConfirm={signUpStates.showPW.confirm}
                updateForm={updateSignUpFormValues}
                updateShow={updateSignUpShowPW}
              />
            )}
          </div>
        ) : (
          <button className="logout-btn">Log Out</button>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
