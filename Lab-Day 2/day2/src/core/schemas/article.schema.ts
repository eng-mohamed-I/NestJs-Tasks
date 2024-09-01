import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./user.schema";

@Schema({versionKey: false, timestamps: true})
export class Article {

@Prop({required: true})
title: string;

@Prop({required: true})
slug: string;

@Prop({required: true})
description: string;

@Prop({required: true})
content: string;

@Prop({required: true})
coverImage: string;

@Prop({required: true})
image: string;

@Prop({required: true})
likes: number;

@Prop({required: true})
tagList: string;

@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
auther: User;
}


export const articleSchema = SchemaFactory.createForClass(Article)