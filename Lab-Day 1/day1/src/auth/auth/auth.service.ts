import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    Users: any[] = [];

    getUsers(){ 
        return this.Users
    }

    addUser(newUser: any) {
      let user = this.Users.find(user => user.email == newUser.email)
      if(!user) { 
        this.Users.push(newUser);
        return "user created"
      }else { 
        return "Email or Password Invalid"
      }
    }

    foundUser({email}: any) {
       let user= this.Users.find(user => user.email == email)
       if(user){  
        let token = "jkHUIAOYF*(YA*(SD^&*AT%SGFKJASHD"
        return {token: token}
       }else { 
        return "Email or Password Invalid"
       }
    }
}




