import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class User { 

    @IsString()
    @IsNotEmpty()
    email: string


    @MinLength(10)
    @IsString()
    @MinLength(5)
    password: string
}  

