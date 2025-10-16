import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { FakeBlogRepo } from './fake.blog.repo';

@Module({
  controllers: [BlogController],
  providers: [BlogService, FakeBlogRepo]
})
export class BlogModule {}
