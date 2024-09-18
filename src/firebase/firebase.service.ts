import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
    private app: admin.app.App;

    constructor(private configService: ConfigService) {
        this.app = admin.initializeApp({
            credential: admin.credential.cert({
                projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
                privateKey: this.configService.get<string>('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
                clientEmail: this.configService.get<string>('FIREBASE_CLIENT_EMAIL'),
            }),
            storageBucket: this.configService.get<string>('FIREBASE_STORAGE_BUCKET')
        });

    }

    getFirestore() {
        return this.app.firestore();
    }

    getStorage() {
        return this.app.storage();
    }
}