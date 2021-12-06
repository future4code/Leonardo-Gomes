import express, {Express} from "express"
import cors from "cors"
import { AddressInfo } from "net";
import { postRegisterUsers } from "./endpoints/postRegisterUsers";
import { getAllUsers } from "./endpoints/getAllUsers";
import { postRegisterProducts } from "./endpoints/postRegisterProducts";
import { getAllProducts } from "./endpoints/getAllProducts";
import { postPurchases } from "./endpoints/postPurchases";
import { getSearchPurchases } from "./endpoints/getSearchPurchases";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/users", postRegisterUsers)
app.get("/users", getAllUsers)
app.post("/products", postRegisterProducts)
app.get("/products", getAllProducts)
app.post("/purchases", postPurchases)
app.get("/users/:user_id/purchase", getSearchPurchases)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});