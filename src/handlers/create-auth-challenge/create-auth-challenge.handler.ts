import { CreateAuthChallengeService } from './create-auth-challenge.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';

let createAuthChallengeService: CreateAuthChallengeService;

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  createAuthChallengeService = app.get(CreateAuthChallengeService);
}

bootstrap();

export const handler = async (event) => {
  if (!createAuthChallengeService) {
    await bootstrap();
  }
  return createAuthChallengeService.handler(event);
};
