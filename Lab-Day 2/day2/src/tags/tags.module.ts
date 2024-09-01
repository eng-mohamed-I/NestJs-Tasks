import { Module } from '@nestjs/common';
import { TagsController } from './tags/tags.controller';
import { TagsService } from './tags/tags.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tags, tagSchema } from 'src/core/schemas/tags.shecma';

@Module({
  imports: [MongooseModule.forFeature([{name: Tags.name , schema: tagSchema}]) ],
  controllers: [ TagsController],
  providers: [TagsService]
})
export class TagsModule {}
