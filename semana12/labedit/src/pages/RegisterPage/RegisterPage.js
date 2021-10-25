import React from "react";
import {useHistory} from "../../routes/coordinator";


const RegisterPage = () => {
    
    const history = useHistory()
    
    return(
        <div>
            <h1>Página de Cadastro</h1>

            <div>
                <button onClick={LoginPage}> Home LoginPage </button>
            </div>
        </div>
    )
}

export default RegisterPage;