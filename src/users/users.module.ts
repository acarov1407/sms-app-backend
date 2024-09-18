import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";
import { FirebaseModule } from "../firebase/firebase.module"
import { UploadModule } from "src/upload/upload.module";

@Module({
    imports: [FirebaseModule, UploadModule],
    controllers: [UserController],
    providers: [UserService]
})
export class UsersModule {}