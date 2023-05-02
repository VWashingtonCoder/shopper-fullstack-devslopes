import "./AccountPage.css";
import { useState } from "react";
import { RxDividerVertical } from "react-icons/rx";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormSignUp from "../../components/FormSignUp/FormSignUp";
import { initLoginStates, initPasswordStates, logSignKeys } from "../pages-constants";



const AccountPage = (props) => {
  const { 
    accounts, 
    active, 
    updateActive, 
    navigate 
  } = props;

  const [logSign, setLogSign] = useState("login");
  const [showPW, setShowPW] = useState(initPasswordStates);
  const [loginStates, setLoginStates] = useState(initLoginStates);

  const changeLogSign = (e) => {
    setLogSign(e.target.value);
  };

  const updateShowPWs = (e) => {
    e.preventDefault();
    const name = e.target.value;
    const state = showPW[name];
    setShowPW({ ...showPW, [name]: !state });
  };

  const handleLoginDisabled = (e) => {
    const { name, value } = e.target;
    const { email, password } = loginStates.formValues;
    let disabled = true;
    if (name === "email" && value.length > 0) {
        if (password.length > 0) disabled = false;
    } else {
        if (email.length > 0) disabled = false;
    }
    setLoginStates({ ...loginStates, disabled: disabled });
  }

  const updateLoginFormValues = (e) => {
    const { name, value } = e.target;
    const newFormValues = loginStates.formValues
    newFormValues[name] = value;

    setLoginStates({ 
      ...loginStates, 
      formValues: newFormValues
    });
  };

  const validateLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginStates.formValues;
    const account = accounts.find((item) => item.email.toLowerCase() === email.toLowerCase());
    let error = "";

    if (account) {
      if (account.pw === password) {
        updateActive(account);
        navigate("home");
      } else error = "Wrong Password Provided";
    } else error = "Email Not On File";
    
    setLoginStates({ ...loginStates, error: error });
  };

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
                      <label htmlFor={id}>
                        {label}
                      </label>
                    </div>
                    
                    {key === "login" && <RxDividerVertical className="icon divider" />}
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
                show={showPW.password}
                submit={validateLoginSubmit}
                updateForm={updateLoginFormValues}
                updateShow={updateShowPWs}
              />
            ) : (
              <FormSignUp
                accounts={accounts}
                // showConfirm={showConfirmPW}
                showPW={showPW}
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
