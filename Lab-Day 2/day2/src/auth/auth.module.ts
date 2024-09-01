import { Module } from '@nestjs/common';
// import { AuthController } from './auth/auth.controller';
// import { AuthService } from './auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { User } from 'src/dto/auth.dto';
import { User, userSchema } from 'src/core/schemas/user.schema';
import { SigninController } from './signin/signin/signin.controller';
import { SigninService } from './signin/signin/signin.service';
import { SignupController } from './signup/signup.controller';
import { SignupService } from './signup/signup.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: userSchema}])],
  controllers: [SigninController,SignupController],
  providers: [SigninService,SignupService,JwtService]
})
export class AuthModule {}
