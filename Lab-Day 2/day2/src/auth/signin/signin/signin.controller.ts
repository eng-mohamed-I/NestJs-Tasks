import { Body, Controller, Get, Post } from '@nestjs/common';
import { SigninService } from './signin.service';
import { SignInDTo } from 'src/auth/dto/auth.dto';

@Controller('signin')
export class SigninController {
constructor(private _signinService: SigninService) { }
    @Post()
    signIn(@Body() body: SignInDTo){
        return this._signinService.signIn(body)
    }
}
