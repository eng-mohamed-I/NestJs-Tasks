import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, articleSchema } from 'src/core/schemas/article.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Article.name, schema: articleSchema}])],
  controllers:[ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
