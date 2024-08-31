import { IsEmail, IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class SignUpDTO { 
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}