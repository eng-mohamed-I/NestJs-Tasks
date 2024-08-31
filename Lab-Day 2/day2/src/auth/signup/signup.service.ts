import { Injectable } from '@nestjs/common';
import { SignUpDTO } from '../dto/auth.dto';
import { User } from 'src/dto/auth.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SignupService {
    constructor(@InjectModel(User.name) private userModel: Model<User> ){}

    addUser(body: SignUpDTO){

        this.userModel.insertMany(body)
        return "user created"
    }
}
