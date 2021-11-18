import express, {Express} from 'express'
import cors from 'cors'
import { countries } from './data';
import { country } from './types';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})

// Endpoint1

app.get("/countries", (req, res) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    res
    .status(200)
    .send(result)
})


// Endpoint3

app.get("/countries/search", async (req, res) => {
    let result: country[] = countries 
    
    try{
    if (req.query.name) {
        result = result.filter(
            country => country.name.includes(req.query.name as string)
        )
    }

    if (req.query.capital) {
        result = result.filter(
            country => country.capital.includes(req.query.capital as string)
        )
    }

    if (req.query.continent) {
        result = result.filter(
            country => country.continent.includes(req.query.continent as string)
        )
    }
    res
    .status(200)
    .send(result)
    }
    catch{
        res.status(401).end()
    }
})


// Endpoint2

app.get("/countries/:id", (req, res) => {
    const result = countries.find(
        (country) => { return country.id === Number(req.params.id)}
    )
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found")
    }
})


// Endpoint4

// app.put("/countries/:id", (req, res) => {

// } )


// Endpoint5

app.delete("countries/:id", async (req, res) => {
    try{
        if (!req.headers.authorization) {
            throw new Error()
        }
    
    const index: number = countries.findIndex(
        country => country.id === Number(req.params.id)
    )

    countries.splice(index, 1)

    res.status(200).end()
    }
    catch {
        res.status(401).end()
    }
})

//Endpoint6 

// type pais = {
//     "name":"Wakanda",
// 	"capital":"Birnin Zana",
// 	"continent":"África"
// }

