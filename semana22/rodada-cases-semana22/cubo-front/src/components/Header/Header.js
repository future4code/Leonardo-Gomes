import axios from "axios"
import { useContext } from "react"
import { useForm } from "../../hooks/useForm"
import { Button, Form, ContainerHeader, Input } from "./styled"
import {GlobalContext} from "../../contexts/global/GlobalContext"

const Header = () => {

    const { request } = useContext(GlobalContext)

    const initialForm = {
        firstName: "",
        lastName: "",
        participation: ""
    }

    const sendForm = (event) => {
        event.preventDefault()

        const {firstName, lastName, participation} = form
        const body = {
            firstName: firstName,
            lastName: lastName,
            participation: Number(participation)
        }

        axios
        .post("https://cubo-backendleo.herokuapp.com/user/create", body)
        .then((res) => {
            clear()
            request.requestUsers()
            alert(res.data.message)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    const [form, onChange, clear] = useForm(initialForm)

    const maskOnlyNumber = (string) => {
        return string.replace(/[^0-9]/g, '')
    }

    return (
        <ContainerHeader>
            <Form onSubmit={sendForm}>
                
                <Input name="firstName" 
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={onChange}/>
                
                <Input name="lastName" 
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={onChange}/>
                
                <Input name="participation" 
                    placeholder="Participation"
                    value={form.participation}
                    onChange={(event) => onChange(event, maskOnlyNumber)}/>
                
                <Button type="submit">
                    SEND
                </Button>
            </Form>
        </ContainerHeader>
    )
}

export default Header;