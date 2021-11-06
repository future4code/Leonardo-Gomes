import { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import { FeedPage } from "../routes/coordinator"


const useProtectedPage = () => {

    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            FeedPage(history)
        }
    }, [history])

}

export default useProtectedPage;