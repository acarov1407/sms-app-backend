import { IsNotEmpty, IsString, Length } from "class-validator";

export class SendSMSDTO {

    //12 caracteres (10 del numero y 2 para el indicativo ej: 57)
    @Length(12, 12)
    @IsString()
    readonly to: string;

    
    @IsString()
    @IsNotEmpty()
    readonly body: string;

}