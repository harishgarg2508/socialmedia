import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { PostEnum } from "../entities/post.entity";

export class PostDto {
    @IsEnum(PostEnum)
    postType: PostEnum

    @IsNumber()
    @IsOptional()
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
