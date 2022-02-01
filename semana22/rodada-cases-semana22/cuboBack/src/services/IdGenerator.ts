import { v4 } from "uuid";

export class IdGenerator {
    static generete(): string {
        throw new Error("Method not implemented.");
    }
    generate(): string {
        return v4();
    }
}

export default new IdGenerator()