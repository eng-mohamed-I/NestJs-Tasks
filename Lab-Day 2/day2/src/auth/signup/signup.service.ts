import { Injectable } from '@nestjs/common';
import { SignUpDTO } from '../dto/auth.dto';

@Injectable()
export class SignupService {

    addUser(body: SignUpDTO){
        console.log(body)
        return "hello from signup"
    }
}
