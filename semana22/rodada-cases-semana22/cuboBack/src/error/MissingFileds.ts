import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super("Missing fileds to complete")
    }
}