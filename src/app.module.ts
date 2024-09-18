import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MessagingModule } from './messaging/messaging.module';
import { FirebaseModule } from './firebase/firebase.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    MessagingModule,
    FirebaseModule,
    UploadModule,
  ],
})
export class AppModule {}
