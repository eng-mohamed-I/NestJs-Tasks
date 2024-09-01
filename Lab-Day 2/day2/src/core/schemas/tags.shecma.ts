import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";
import mongoose from "mongoose";

@Schema()
export class Tags{ 
@Prop()
name: string;

@Prop()
type: string;

@Prop()
description: string;

@Prop({ type: mongoose.Types.ObjectId , ref: User})
createdBy: User
}



export const tagSchema = SchemaFactory.createForClass(Tags)