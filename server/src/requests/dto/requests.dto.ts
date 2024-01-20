import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateRequestDto {
    @IsNotEmpty()
    @IsDateString()
    date: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    comments?: string;

    @IsNotEmpty()
    @IsString()
    type_name: string;
}

export class UpdateRequestDto {
    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    comments?: string;

    @IsOptional()
    @IsString()
    type_name: string;

    @IsOptional()
    @IsString()
    state_name: string;
}