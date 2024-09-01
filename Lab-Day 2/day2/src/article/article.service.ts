import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/core/schemas/article.schema';
import { articleDTO } from './dto/article.dto';

@Injectable()
export class ArticleService {
    constructor(@InjectModel(Article.name) private articleModel : Model<Article>){ }

    async addArcicle(body : articleDTO) { 
     let newArticle = await this.articleModel.insertMany(body)
     return newArticle
    }
}
