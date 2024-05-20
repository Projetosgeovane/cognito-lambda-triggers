import { Module } from '@nestjs/common';
import { PreSignUpService } from './pre-sign-up.service';

@Module({
  providers: [PreSignUpService],
  exports: [PreSignUpService],
})
export class PreSignUpModule {}
