import { IsString, Length, MinLength } from "class-validator";

export class CreateUserDTO {

    @IsString()
    @MinLength(3) 
    readonly username : string;

    @IsString()
    @Length(12, 12)
    readonly phone: string;
    
}