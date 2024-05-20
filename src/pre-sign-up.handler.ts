import { AppModule } from './app.module';
import { PreSignUpService } from './pre-sign-up.service';
import { NestFactory } from '@nestjs/core';

let preSignUpService: PreSignUpService;

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  preSignUpService = app.get(PreSignUpService);
}

bootstrap();

export const handler = async (event) => {
  if (!preSignUpService) {
    await bootstrap();
  }
  return preSignUpService.handler(event);
};
