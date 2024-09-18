import { Module } from "@nestjs/common";
import { FirebaseModule } from "src/firebase/firebase.module";
import { UploadService } from "./upload.service";

@Module({
    imports: [FirebaseModule],
    providers: [UploadService],
    exports: [UploadService]
})
export class UploadModule {}