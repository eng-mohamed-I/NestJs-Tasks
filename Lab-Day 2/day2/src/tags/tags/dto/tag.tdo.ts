import { IsString } from "class-validator";
// import { User } from "src/dto/auth.dto";

export class tagDTO {
@IsString()
name: string; 

@IsString()
type: string;

@IsString()
description: string;

}