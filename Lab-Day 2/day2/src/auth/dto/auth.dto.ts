import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignUpDTO { 
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}