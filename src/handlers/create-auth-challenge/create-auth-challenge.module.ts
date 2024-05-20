import { Module } from '@nestjs/common';
import { CreateAuthChallengeService } from './create-auth-challenge.service';

@Module({
  providers: [CreateAuthChallengeService],
  exports: [CreateAuthChallengeService],
})
export class CreateAuthChallengeModule {}
