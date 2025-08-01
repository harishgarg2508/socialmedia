import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { postEnum } from "../entities/post.entity";

export class PostDto {
    @IsEnum(postEnum)
    postType: postEnum

    @IsNumber()
    userId: number;

    @IsString()
    @IsOptional()
    content?: string;

    @IsString()
    @IsOptional()
    quote?: string;

    @IsString()
    @IsOptional()
    author?: string

}
