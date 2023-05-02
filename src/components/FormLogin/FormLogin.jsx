import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const loginFormInputs = [
    {
        key: "loginEmail", 
        label: "Email", 
        name: "email",
        min: 0,
        max: 99
    },
    {
        key: "loginPassword", 
        label: "Password", 
        name: "password",
        min: 8,
        max: 20
    }
];


const FormLogin = (props) => {
    const { 
        error,
        disabled,
        formValues,
        handleDisabled, 
        show, 
        submit,
        updateForm,
        updateShow
    } = props;
    
    console.log()

    return (
        <form id="FormLogin" onChange={handleDisabled} onSubmit={submit}>
            {error && <p className="error-text">* {error}</p>}
            
            {loginFormInputs.map(input => {
                const { key, label, name, min, max } = input;
                return (
                    <div key={key} className={`form-input ${name} flex-align-center`}>
                        <label htmlFor={name}>{label}</label>
                        <input
                            name={name}
                            type={
                                name === "email" ? name 
                                    : !show ? name 
                                    : "text"
                            }
                            value={formValues[name]}
                            onChange={updateForm}
                            required
                            autoComplete="off"
                            minLength={min}
                            maxLength={max}
                        />
                        {name === "password" && (
                            <button 
                                className="pw-btn login"
                                value="password" 
                                onClick={updateShow}
                            >
                                {show 
                                    ? <AiFillEyeInvisible className="eye-icon icon" />
                                    : <AiFillEye className="eye-icon icon" />
                                }
                            </button>
                        )}
                    </div>
                );
            })}

            <input className="submit-btn login" type="submit" disabled={disabled}/>

        </form>
    )
}

export default FormLogin;