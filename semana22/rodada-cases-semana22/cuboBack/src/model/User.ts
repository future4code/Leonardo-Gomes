export class User{

    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private partipation: number

    ) { }

    
}

export interface UserInputDTO {
    firstName: string,
    lastName: string,
    participation: number
}

export interface UserInsertDTO extends UserInputDTO {
    id: string
}