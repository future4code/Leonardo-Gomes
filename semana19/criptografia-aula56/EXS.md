## Criptografia

### EX1 

*a* O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?

**R>** 

*b* Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs. 


*c* Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs. 

**R>** 

```
import * as bcrypt from "bcryptjs";


 const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
  }

 const compare = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
  }
```

### EX2

*a* Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

**R>** 

*b* Faça a alteração do primeiro endpoint

```
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    };
  
    const id = generate();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword);

    const token = generateToken({
      id
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

*c* Faça a alteração do segundo endpoint*

```
app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await getUserByEmail(userData.email);

    const comapreResult = await compare(
      userData.password,
      user.password
    );

    if (!compareResult) {
      throw new Error("Invalid password");
    }

    const token = generateToken({
      id: user.id    
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

*d* No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.

**R>** 


### EX3

// Agora, vamos pensar em um pouco nas funcionalidades relacionadas aos tipos de usuário. Para isso, vamos ter que fazer umas modificações no banco de dados.

*a* Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*

**R>** ALTER TABLE nome_da_tabela ADD COLUMN role VARCHAR(255) DEFAULT "normal"

*b* Altere o type AuthenticationData e a função getData() para representarem esse novo tipo no token.

```
import * as jwt from "jsonwebtoken";


  cont expiresIn = "1min";
  const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

 const getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role,
    };
    return result;
  }


type AuthenticationData {
  id: string;
  role: string;
}
```

*c* Altere o cadastro para receber o tipo do usuário e criar o token com essa informação

```
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const id = generateId();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword, userData.role);

    const token = generateToken({
      id,
      role: userData.role,
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

*d* Altere o login para criar o token com o `role` do usuário*

```
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const id = generateId();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword, userData.role);

    const token = generateToken({
      id,
      role: userData.role,
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

### EX4

// Agora, vamos usar esse role no endpoint /user/profile. Somente o usuários "normais" podem acessar esse endpoint. 

*a* Altere o endpoint para que retorne um erro de Unauthorized para os usuários que "não sejam normais" e tentem acessar esse endpoint

```
app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = getData(token);

    if (authenticationData.role !== "normal") {
      throw new Error("Only a normal user can access this funcionality");
    }

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```


