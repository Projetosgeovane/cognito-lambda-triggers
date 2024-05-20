import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { VerifyAuthChallengeService } from './verify-auth-challenge.service';

let verifyAuthChallengeService: VerifyAuthChallengeService;

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  verifyAuthChallengeService = app.get(VerifyAuthChallengeService);
}

bootstrap();

export const handler = async (event) => {
  if (!verifyAuthChallengeService) {
    await bootstrap();
  }
  return verifyAuthChallengeService.handler(event);
};
