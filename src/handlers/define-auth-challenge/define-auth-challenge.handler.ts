import { DefineAuthChallengeService } from './define-auth-challenge.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';

let defineAuthChallengeService: DefineAuthChallengeService;

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  defineAuthChallengeService = app.get(DefineAuthChallengeService);
}

bootstrap();

export const handler = async (event) => {
  if (!defineAuthChallengeService) {
    await bootstrap();
  }
  return defineAuthChallengeService.handler(event);
};
