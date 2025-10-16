import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Blog API')
    .setDescription('API documentation for the Blog service')
    .setVersion('1.0.0')
    .addBearerAuth() // optional: if you plan to secure endpoints
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
