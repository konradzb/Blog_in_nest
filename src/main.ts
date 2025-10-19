// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Globalna walidacja requestów na podstawie klas DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // usuwa pola nieopisane w DTO
      forbidNonWhitelisted: true, // 400 dla nieznanych pól
      transform: true,            // zamienia plain JSON -> instancje klas DTO
      transformOptions: { enableImplicitConversion: true }, // lepsza konwersja prymitywów
      validationError: { target: false, value: false },     // czytelniejsze komunikaty
    }),
  );

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Blog API')
    .setDescription('API documentation for the Blog service')
    .setVersion('1.0.0')
    .addBearerAuth() // optional: jeśli planujesz autoryzację JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Expose Swagger UI at /api and raw docs at /api-json and /api-yaml
  SwaggerModule.setup('api', app, document, {
    jsonDocumentUrl: 'api-json',
    yamlDocumentUrl: 'api-yaml',
    customSiteTitle: 'Blog API Docs',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
