import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const FormLogin = (props) => {
    const { 
        accounts, 
        formValues, 
        show, 
        submit,
        updateForm,
        updateShow
    } = props;


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
    ]
    
    
    
    return (
        <form id="FormLogin" onSubmit={submit}>
            {loginFormInputs.map(input => {
                const { key, label, name, min, max } = input;
                return (
                    <div key={key} className={`form-input ${name}`}>
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
                                className="pw-btn icon-btn login" 
                                onClick={updateShow}
                            >
                                {show 
                                    ? <AiFillEyeInvisible className="eye-icon" />
                                    : <AiFillEye className="eye-icon" />
                                }
                            </button>
                        )}
                    </div>
                );
            })}

            <input className="submit-btn login" type="submit" />

        </form>
    )
}

export default FormLogin;