import { Handler } from 'aws-lambda';
import { configure } from '@vendia/serverless-express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';

let server;

async function bootstrapServer() {
  const expressApp = express();
  const nestApp = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  await nestApp.init();
  return configure({ app: expressApp });
}

export const handler: Handler = async (event, context) => {
  if (!server) {
    server = await bootstrapServer();
  }
  return server(event, context);
};
