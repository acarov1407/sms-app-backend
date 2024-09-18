import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";
import { SendSMSDTO } from "./dto/send-sms-dto";
import axios from "axios";


@Injectable()
export class MessagingService {

    private apiKey: string;
    private apiSecret: string;
    private apiURL: string;

    constructor(private configService: ConfigService) {

        this.apiKey = this.configService.get<string>("SMS_API_KEY");
        this.apiSecret = this.configService.get<string>("SMS_API_SECRET");
        this.apiURL = this.configService.get<string>("SMS_API_URL");

    }

    async sendSMS(sendSMSDTO: SendSMSDTO) {

        const { to, body } = sendSMSDTO;

        const payload = {
            credentials: {
                apiKey: this.apiKey,
                apiSecret: this.apiSecret,
            },
            destination: [to],
            message: {
                msg: body,
            },
        };

        try {
            const response = await axios.post(this.apiURL, payload, {
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error sending SMS: ${error.response?.data || error.message}`);
        }
    }
}