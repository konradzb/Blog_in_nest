import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // it allows to use PrismaService without importing PrismaModule in other modules
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
