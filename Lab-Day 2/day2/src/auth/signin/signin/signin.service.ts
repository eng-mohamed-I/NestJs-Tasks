import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignInDTo } from 'src/auth/dto/auth.dto';
import { User } from 'src/core/schemas/user.schema';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SigninService {
    constructor(private _jwtService : JwtService, @InjectModel(User.name) private userModel:Model<User>) { }

    
    async signIn(userInfo: SignInDTo){
        let user = await this.userModel.findOne({email: userInfo.email})
        if(user && await bcrypt.compare(userInfo.password , user.password)){
            let token = this._jwtService.sign({email: user.email,name: user.name}, {secret:"sec"})
            return {token: token}
        }else { 
            return new HttpException("email or password invalid", HttpStatus.BAD_REQUEST);
        }
    }
}
