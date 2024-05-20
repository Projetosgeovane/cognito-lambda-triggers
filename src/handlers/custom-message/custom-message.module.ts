import { Module } from '@nestjs/common';
import { CustomMessageService } from './custom-message.service';

@Module({
  providers: [CustomMessageService],
  exports: [CustomMessageService],
})
export class CustomMessageModule {}
