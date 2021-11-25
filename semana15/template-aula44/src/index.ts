import express, { Request, Response } from 'express';
import cors from "cors";

const app = express()
app.use(express.json())
app.use(cors())


enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}


// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

// 1)

app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
      const result: User[] = users.map((user) => {
        return user
      })
    
      res.status(200).send(result)

    } catch(error) {
      res.status(errorCode).send("Falha na requisição")
    }
})

// 2)

app.get("users/search", (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const type: string = req.query.type as string
    const result: User[] = users.filter((user) => {
      return user.type === type.toUpperCase()
    })

    if(result.length === 0) {
      errorCode = 404
      throw new Error("Tipo de usuário não encontrado")
    }

    res.status(200).send(result)
  
  } catch(error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

// 3)

app.get("/users/profile", (req: Request, res: Response) => {
  let errorCode = 400

  try {

    const name: string = req.query.name as string
    const result: User | undefined = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase()
    })

    if (!result) {
      errorCode = 404
      throw new Error("Nome de usuário não encontrado.")
    }

    res.status(200).send(result)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})


// 4)

app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400

  try {

    const {id, name, email, type, age} = req.body

    if (!id || !name || !email || !type || !age) {
      errorCode = 422
      throw new Error("Confira se preencheu todos os campos")
    }

    const newUser: User = {
      id: id,
      name: name,
      email: email,
      type: type,
      age: age
    }

    users.push(newUser)

    res.status(201).send({message: "Usuário criado com sucesso!"})

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

