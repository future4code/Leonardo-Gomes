import React from "react";
import {useHistory} from "../../routes/coordinator";


const LoginPage = () => {
    
    const history = useHistory()
    
    
    return(
        <div>
            <h1>LoginPage</h1>

            <div>
                <button onClick={history}> Entrar . Feed </button>
            </div>

            <div>     
                <button onClick={RegisterPage}> Casdastar </button>
            </div>
        </div>
    )
}

export default LoginPage;