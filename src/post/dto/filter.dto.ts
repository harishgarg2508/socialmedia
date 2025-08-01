import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { PostEnum } from "../entities/post.entity";


export enum OrderBY {
    ASC = "ASC",
    DESC = "DESC"
}

export class FilterDto {
    @IsOptional()
    @IsNumber()
    userId?: number;

    @IsOptional()
    @IsEnum(OrderBY)
    orderBy?: OrderBY;


    @IsOptional()
    @IsEnum(PostEnum)
    postType?: PostEnum;

    @IsOptional()
    @IsNumber()
    page?: number;

}