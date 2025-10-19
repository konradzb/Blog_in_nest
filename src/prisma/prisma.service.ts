import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  // Łączy się automatycznie po starcie modułu
  async onModuleInit() {
    await this.$connect();
  }

  // Rozłącza się bezpiecznie przy zamykaniu aplikacji
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
