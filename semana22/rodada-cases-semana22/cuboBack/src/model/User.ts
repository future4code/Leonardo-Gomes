export interface UserInputDTO {
    firstName: string,
    lastName: string,
    participation: number
}

export interface UserInsertDTO extends UserInputDTO {
    id: string
}