import { Module } from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { ConfigModule } from '@nestjs/config';
import { MessagingController } from './messaging.controller';

@Module({
  imports: [ConfigModule],
  providers: [MessagingService],
  controllers: [MessagingController],
})
export class MessagingModule {}