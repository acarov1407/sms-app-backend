import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";
import { FirebaseModule } from "../firebase/firebase.module"

@Module({
    imports: [ FirebaseModule],
    controllers: [UserController],
    providers: [UserService]
})
export class UsersModule {}