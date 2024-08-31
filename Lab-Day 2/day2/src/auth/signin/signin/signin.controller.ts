import { Body, Controller, Get, Post } from '@nestjs/common';
import { SigninService } from './signin.service';

@Controller('signin')
export class SigninController {
constructor(private _signinService: SigninService) { }
    @Post()
    Signin(){
        return this._signinService.signIn()
    }


}
