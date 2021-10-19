import { useEffect } from "react";
import { useHistory } from "react-router";

const useProtocolPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")
    
        if (token === null) {
            alert("Você não é permitido para realizar essa ação!")
            history.push("/login")
        }
    })
}

export default useProtocolPage;