import { Module } from '@nestjs/common';
import { DefineAuthChallengeService } from './define-auth-challenge.service';

@Module({
  providers: [DefineAuthChallengeService],
  exports: [DefineAuthChallengeService],
})
export class DefineAuthChallengeModule {}
