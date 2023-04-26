import { useState } from "react";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormSignUp from "../../components/FormSignUp/FormSignUp";

const AccountPage = (props) => {
    const { accounts } = props;
    const [logSign, setLogSign] = useState("login");
    const [showPW, setShowPW] = useState(false);
    const [showConfirmPW, setShowConfirmPW] = useState(false);
    const [accountStatus, setAccountStatus] = useState(false);

    const changelogSign = (e) => {
        setLogSign(e.target.value);
    }


    return (
        <div id="AccountPage">
            <h1>Account Page</h1>
            <div className="account-header">
                <div className="radio-btn login">
                    <input
                        type="radio"
                        id="loginRadio" 
                        value="login" 
                        name="login" 
                        checked={logSign === "login"}
                        onChange={changelogSign} 
                    />
                    <label htmlFor="login">Login</label>
                </div>
                
                <div className="radio-btn sign-up">
                    <input
                        type="radio"
                        value="sign-up" 
                        name="sign-up" 
                        checked={logSign === "sign-up"}
                        onChange={changelogSign} 
                    />
                    <label htmlFor="sign-up">
                        Sign Up
                    </label>
                </div>
                
                <div className="form-container">
                    {logSign === "login" && (
                        <FormLogin 
                            accounts={accounts}
                            show={showPW} 
                        />
                    )}
                </div>

                <div className="form-container">
                    {logSign === "sign-up" && (
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