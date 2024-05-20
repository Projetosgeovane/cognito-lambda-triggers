import { CustomMessageService } from './custom-message.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';

let customMessageService: CustomMessageService;

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  customMessageService = app.get(CustomMessageService);
}

bootstrap();

export const handler = async (event) => {
  if (!customMessageService) {
    await bootstrap();
  }
  return customMessageService.handler(event);
};
