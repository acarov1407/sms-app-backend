import { Body, Controller, Post } from "@nestjs/common";
import { MessagingService } from "./messaging.service";
import { SendSMSDTO } from "./dto/send-sms-dto";

@Controller("/sms")
export class MessagingController {

    constructor(private messagingService: MessagingService) {}

    @Post()
    sendSMS(@Body() sendSMSDTO: SendSMSDTO) {
        return this.messagingService.sendSMS(sendSMSDTO);
    }
}