import { Module } from '@nestjs/common';
import { PreSignUpModule } from './pre-sign-up.module';

@Module({
  // imports: [
  //   PreSignUpModule,
  //   CustomMessageModule,
  //   DefineAuthChallengeModule,
  //   CreateAuthChallengeModule,
  //   VerifyAuthChallengeModule,
  // ],
  providers: [PreSignUpModule],
})
export class AppModule {}
