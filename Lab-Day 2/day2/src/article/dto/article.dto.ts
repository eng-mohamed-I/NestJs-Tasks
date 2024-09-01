import { IsNotEmpty } from "class-validator";

export class articleDTO {
@IsNotEmpty ()
title: string;

@IsNotEmpty ()
slug: string;

@IsNotEmpty ()
description: string;

@IsNotEmpty ()
content: string;

@IsNotEmpty ()
coverImage: string;

@IsNotEmpty ()
image: string;

@IsNotEmpty ()
likes: number;

@IsNotEmpty ()
tagList: string;

@IsNotEmpty ()
auther: string;
}