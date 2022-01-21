## Autentificação

### EX1 

*a* Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

**R>** Por uma questão de fácil conversão é melhor através de strings pois na hora de alguém consultar algum id será mais efetivo além de poder realizar algum update.

*b* A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.

**R>**
```
import { v4 } from "uuid"

export const generateId = (): string => {
    return v4()
}
```

### EX2

// const userTableName = "User";

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(Aula55_UserTable);
};


*a* Explique o código acima com as suas palavras.

**R>** Irá criar um usuário na da conexão com o banco exigindo os dados informados para poder acessar a page.

*b* Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

**R>**
```
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

*c* Pela mesma justificativa do exercício anterior, crie uma função responsável por salvar usuários no banco.

**R>**

```
const userTableName = "User";

	 const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(aula55_UserTable);
	};
```

### EX3

*a* O que a linha as string faz? Por que precisamos usar ela ali?

**R>** as string está ali para referenciar jsonwebtoken o valor da chave de id para o sign.

*b* Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.

**R>**
```
import * as jwt from "jsonwebtoken";

type AuthenticationData = {
    id: string;
}

const expiresIn = "1min";

const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
    {
        id: input.id,
    },
    
    process.env.JWT_KEY as string,
    {
        expiresIn
    }
    );
    return token;
}

```


### EX4

*a* Crie o endpoint que realize isso, com as funções que você implementou anteriormente

*b* Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um "@"

*c* Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais

```
app.post("/user/signup", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    // Item c. Validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = generateId();

  
    await createUser(id, userData.email, userData.password);

    const token = generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### EX5

*a* Crie uma função que retorne as informações de um usuário a partir do email

```
const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }
}
```

### EX6

*a* Crie o endpoint que realize isso, com as funções que você implementou anteriormente

*b* Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um "@"

```
app.post("/user/login", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };


    const user = await getUserByEmail(userData.email);

    if (user.password !== userData.password) {
      throw new Error("Invalid password");
    }

    
    const token = generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

## EX7

*a* O que a linha as any faz? Por que precisamos usá-la ali?

**R>**

*b* Crie uma função que realize a mesma funcionalidade da função acima

```
import * as jwt from "jsonwebtoken";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```

## EX8

*a* Comece criando uma função no data que retorne o usuário a partir do id

```
 public async getUserById(id: string): Promise<any> {
    const result = await this.connection
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  }
}
```


*b* Crie o endpoint com as especificações passadas

```
app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

   
    const authenticationData = getData(token);

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```