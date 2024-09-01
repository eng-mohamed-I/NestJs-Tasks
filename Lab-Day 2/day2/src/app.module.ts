import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [AuthModule, ArticleModule, TagsModule, MongooseModule.forRoot("mongodb://localhost:27017/NestDay2")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
