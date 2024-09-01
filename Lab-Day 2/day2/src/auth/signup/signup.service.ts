import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignUpDTO } from '../dto/auth.dto';
// import { User } from 'src/dto/auth.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from "bcrypt"
import { User } from 'src/core/schemas/user.schema';

@Injectable()
export class SignupService {
    constructor(@InjectModel(User.name) private userModel: Model<User> ){}
    async addUser (body: SignUpDTO){
        let user = await this.userModel.findOne({email: body.email})
        if(user) { 
            throw new HttpException('email or password invalid', HttpStatus.CONFLICT)
        }
        body.password = await bcrypt.hash(body.password, 8)
        await this.userModel.insertMany(body)
        return "user created"
    }
}
