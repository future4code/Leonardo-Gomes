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

const getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
        id: payload.id,
    };
    return result;
};