import { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import { LoginPage } from "../routes/coordinator"


const useProtectedPage = () => {

    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            LoginPage(history)
        }
    }, [history])

}

export default useProtectedPage; 