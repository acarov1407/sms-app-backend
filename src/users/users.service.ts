import { Injectable, Inject } from "@nestjs/common";
import * as admin from "firebase-admin";
import { CreateUserDTO } from "./dto/create-user-dto";
import { User } from "./models/user-model";

@Injectable()
export class UserService {

    private firestore: admin.firestore.Firestore;

    constructor(
        @Inject('FIREBASE_ADMIN') private readonly firebaseApp: admin.app.App) {
        this.firestore = this.firebaseApp.firestore();
    }


    async getUser(id: string) {

        const userQuery = await this.firestore.collection("users").doc(id).get();

        if (!userQuery.exists) {
            throw new Error("Usuario no encontrado")
        }

        return User.fromFirestore(userQuery);
    }

    async getUsers() {
        const usersQuery = await this.firestore.collection("users").get();
        return usersQuery.docs.map(doc => User.fromFirestore(doc));
    }

    async createUser(createUserDTO: CreateUserDTO) {

        const photoURL = ""; //Cambiar URL cuando habilite lo de usar imagenes

        const { username, phone } = createUserDTO;
        const user = new User("", username, phone, photoURL);

        const doc = await this.firestore.collection("users").add(user.toFirestore());
        
        return new User(doc.id, username, phone, photoURL);

    }

    updateUser() {
        return "Actualizando usuario"
    }

    deleteUser() {
        return "Eliminando usuario"
    }


}