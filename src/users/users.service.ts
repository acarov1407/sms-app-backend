import { Injectable } from "@nestjs/common";
import * as admin from "firebase-admin";
import { CreateUserDTO } from "./dto/create-user-dto";
import { User } from "./models/user-model";
import { FirebaseService } from "src/firebase/firebase.service";
import { UploadService } from "src/upload/upload.service";

@Injectable()
export class UserService {

    private firestore: admin.firestore.Firestore;

    constructor(private readonly firebaseService: FirebaseService, private readonly uploadService: UploadService) {
        this.firestore = this.firebaseService.getFirestore();
    }


    async getUser(id: string) {

        const userQuery = await this.firestore.collection("users").doc(id).get();

        if (!userQuery.exists) {
            throw new Error("Usuario no encontrado")
        }

        return User.fromFirestore(userQuery);
    }

    async getUsers() {
        const usersQuery = await this.firestore
            .collection("users")
            .orderBy("username", "desc")
            .get();

        return usersQuery.docs.map(doc => User.fromFirestore(doc));
    }

    async createUser(createUserDTO: CreateUserDTO, photo: Express.Multer.File) {

        let photoURL = "";

        //La foto puede ser nula
        if (photo) {
            photoURL = await this.uploadService.uploadImage(photo);
        }

        const { username, phone } = createUserDTO;
        const user = new User("", username, phone, photoURL);

        const doc = await this.firestore.collection("users").add(user.toFirestore());

        return new User(doc.id, username, phone, photoURL);

    }

    async deleteUser(id: string) {
        await this.firestore.collection("users").doc(id).delete();
        return { id }
    }


}