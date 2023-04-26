import { useState } from "react";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormSignUp from "../../components/FormSignUp/FormSignUp";
import { initLoginForm } from "../pages-constants";

const logSignKeys = [
    { key: "login", id: "radioLogin", label: "Login" }, 
    { key: "sign-up", id: "radioSignUp", label: "Sign Up" },
];

const AccountPage = (props) => {
    const { accounts } = props;
    const [logSign, setLogSign] = useState("login");
    const [showPW, setShowPW] = useState(false);
    const [showConfirmPW, setShowConfirmPW] = useState(false);
    const [accountStatus, setAccountStatus] = useState("");
    const [loginFormValues, setLoginFormValues] = useState(initLoginForm);
    const [loginErrors, setLoginErrors] = useState({ email: "", password: "" })

    const changeLogSign = (e) => {
        setLogSign(e.target.value);
    }

    const updateShow = (e) => {
        e.preventDefault();
        setShowPW(!showPW);
    }

    const updateLoginFormValues = (e) => {
        const { name, value } = e.target;
        setLoginFormValues({ ...loginFormValues, [name]: value });
    }

    const validateLoginSubmit = (e) => {
        e.preventDefault();
        const { email, password } = loginFormValues;
        const account = accounts.find(item => item.email === email);

        if (account) {
            if (account.password === password){
                
            }
        } else {
            setLoginErrors({ ...loginErrors, email: "Email Not On File" })
        }
        
        console.log(account);
    }

    return (
        <div id="AccountPage">
            <div className="page-header">
                {logSignKeys.map(item => {
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
                    )
                })}        
            </div>

            <div className="page-body">
                <div className="form-container">
                    {logSign === "login" ? (
                        <FormLogin 
                            accounts={accounts}
                            formValues={loginFormValues}
                            show={showPW}
                            submit={validateLoginSubmit}
                            updateForm={updateLoginFormValues}
                            updateShow={updateShow}
                            
                        />
                    ) : (
                        <FormSignUp 
                            accounts={accounts}
                            showConfirm={showConfirmPW}
                            showPW={showPW} 
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default AccountPage;