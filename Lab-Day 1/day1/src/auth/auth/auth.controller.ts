import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) { }

    //getAllUsers
    @Get("users") 
    getAllUsers(){ 
        return this.authService.getUsers()
    }

    //signup
    @Post("/signup")
    register(@Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true})) user:User){
        return this.authService.addUser(user) 
    }

    //signin
    @Post("/login")
    login(@Body(new ValidationPipe({whitelist:true, forbidNonWhitelisted: true})) user:User) { 
        return this.authService.foundUser(user)
    }




}
