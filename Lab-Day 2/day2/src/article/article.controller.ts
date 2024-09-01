import { Body, Controller, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { articleDTO } from './dto/article.dto';

@Controller('article')
export class ArticleController {
    constructor(private _articleService : ArticleService) { }

    @Post()
    addArticle(@Body() body: articleDTO){ 
        this._articleService.addArcicle(body)
    }
}
