import { FirebaseService } from "src/firebase/firebase.service";
import { ConfigService } from "@nestjs/config";
import * as admin from "firebase-admin";
import { VALID_IMAGE_MIMETYPES, MAX_IMAGE_SIZE } from "src/config";
import { BadRequestException, Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UploadService {

    private storage: admin.storage.Storage;
    private bucket: string;

    constructor(private readonly firebaseService: FirebaseService, private readonly configService: ConfigService) {
        this.storage = this.firebaseService.getStorage();
        this.bucket = this.configService.get<string>("FIREBASE_STORAGE_BUCKET");
    }

     async uploadImage(file: Express.Multer.File): Promise<string> {

         this.validateImage(file);

         const fileName = `${uuidv4()}_${file.originalname}`;
         const fileUpload = this.storage.bucket(this.bucket).file(fileName);

         const stream = fileUpload.createWriteStream({
             metadata: {
                 contentType: file.mimetype,
             },
         });

         return new Promise((resolve, reject) => {
             stream.on("error", (error) => {
                 return reject(`Error al subir el archivo: ${error.message}`);
             });

             stream.on("finish", async () => {
                 try {
                     await fileUpload.makePublic();
                     resolve(fileUpload.publicUrl());
                 } catch (error) {
                     reject(`Error al hacer público el archivo: ${error.message}`);
                 }
             });

             stream.end(file.buffer);
         });
     }

    private validateImage(file: Express.Multer.File) {

        if (!VALID_IMAGE_MIMETYPES.includes(file.mimetype)) {
            throw new BadRequestException("Solo se permiten archivos JPG o PNG");
        }

        if (file.size > MAX_IMAGE_SIZE) {
            throw new BadRequestException("El archivo excede el tamaño máximo permitido de 2 MB");
        }
    }
}