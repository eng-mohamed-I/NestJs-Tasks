import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
    constructor(private tagsSevice: TagsService){ }
    //get all tags
    @Get()
    getAllTags(){ 
        return this.tagsSevice.getAllTags();
    }
    //get singel tag
    @Get("/:id")
    getOneTag(@Param("id") id: any) { 
        return this.tagsSevice.getOneTag(id);
    }
    //add new tag
    @Post() 
    addTag(@Body() tag:any){
       return this.tagsSevice.addNewTag(tag);
    }
    //update Tag
    @Put("/:id")
    updateTag(@Param("id") id:any, @Body() tag:any ){
        this.tagsSevice.updateTage(id, tag)
        return 'updated'; 
    }
    //delete tag
    @Delete("/:id")
    deleteTag(@Param("id") id: any){ 
      return this.tagsSevice.deleteTag(id) 
    }
}
