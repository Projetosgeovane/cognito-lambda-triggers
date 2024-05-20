import { Module } from '@nestjs/common';
import { VerifyAuthChallengeService } from './verify-auth-challenge.service';

@Module({
  providers: [VerifyAuthChallengeService],
  exports: [VerifyAuthChallengeService],
})
export class VerifyAuthChallengeModule {}
