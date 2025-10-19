import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { BlogByIdPipe } from './blog/pipes/blog-by-id.pipe';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BlogModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
