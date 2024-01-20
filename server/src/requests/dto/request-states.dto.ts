import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateRequestStateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsBoolean()
    isDefault: boolean;
}

export class UpdateRequestStateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsBoolean()
    isDefault: boolean;
}