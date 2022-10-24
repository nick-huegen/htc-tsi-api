import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swagger_config from './__config__/swagger-config';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.API_PORT;
  const config = swagger_config;

  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(port);
  console.log(`App is running on port ${port}`);
}
bootstrap();
