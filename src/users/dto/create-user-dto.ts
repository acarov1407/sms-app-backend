import { IsString, Length, MinLength } from "class-validator";

export class CreateUserDTO {

    @IsString()
    @MinLength(3) 
    readonly username : string;

    @IsString()
    @Length(10, 10)
    readonly phone: string;

    
}