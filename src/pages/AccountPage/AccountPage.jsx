import { useState } from "react";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormSignUp from "../../components/FormSignUp/FormSignUp";
import { initLoginForm } from "../pages-constants";

const logSignKeys = [
  { key: "login", id: "radioLogin", label: "Login" },
  { key: "sign-up", id: "radioSignUp", label: "Sign Up" },
];

const AccountPage = (props) => {
  const { accounts, active, updateActive, navigate } = props;
  const [logSign, setLogSign] = useState("login");
  const [showPW, setShowPW] = useState(false);
  const [showConfirmPW, setShowConfirmPW] = useState(false);
  const [loginFormValues, setLoginFormValues] = useState(initLoginForm);
  const [loginErrors, setLoginErrors] = useState({ email: "", password: "" });

  const changeLogSign = (e) => {
    setLogSign(e.target.value);
  };

  const updateShowPW = (e) => {
    e.preventDefault();
    setShowPW(!showPW);
  };

  const updateShowConfirmPW = (e) => {
    e.preventDefault();
    setShowConfirmPW(!showConfirmPW);
  };

  const updateLoginFormValues = (e) => {
    const { name, value } = e.target;
    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  const validateLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginFormValues;
    const account = accounts.find((item) => item.email === email);

    if (account) {
      if (account.pw === password) {
        updateActive(account);
        navigate("home");
      } else {
        console.log("Wrong Password Provided");
      }
    } else {
      setLoginErrors({ ...loginErrors, email: "Email Not On File" });
      console.log("Email Not On File");
    }
  };

  return (
    <div id="AccountPage">
      <div className="page-body">
        {!active.name ? (
          <div className="form-container">
            <div className="page-header">
              {logSignKeys.map((item) => {
                const { key, id, label } = item;
                return (
                  <div key={key} className={`radio-btn ${key}`}>
                    <input
                      type="radio"
                      id={id}
                      value={key}
                      checked={logSign === key}
                      onChange={changeLogSign}
                    />
                    <label htmlFor={id}>{label}</label>
                  </div>
                );
              })}
            </div>
            {logSign === "login" ? (
              <FormLogin
                accounts={accounts}
                formValues={loginFormValues}
                show={showPW}
                submit={validateLoginSubmit}
                updateForm={updateLoginFormValues}
                updateShow={updateShowPW}
              />
            ) : (
              <FormSignUp
                accounts={accounts}
                showConfirm={showConfirmPW}
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
