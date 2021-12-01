import dotenv from 'dotenv'
import app from "./app"

import createAddressInfo from './endpoints/createAdressInfo'
import createUser from './endpoints/createUser'
import { getAddressInfo } from './services/getAdressInfo'
import { mailTransporter } from './services/mailTransporter'

dotenv.config()

app.post("/users/signup", createUser)
app.post('/address/signup', createAddressInfo)


getAddressInfo("05424150", "10", "casa").then(console.log)

mailTransporter.sendMail({
    from: "<leo.sgomes61@gmail.com>",
    to: "yuzo.dev.practice@gmail.com",
    subject: "Email de Leonardo Gomes - atividade teste",
    text: "para enviar o email utilizei o mailTransporter",
    html: `<p>teste de como usar mailTransporter.</p>`
}).then(console.log) 