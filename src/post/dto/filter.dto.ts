import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { postEnum } from "../entities/post.entity";


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
    @IsEnum(postEnum)
    postType?: postEnum;

    @IsOptional()
    @IsNumber()
    page?: number;

}