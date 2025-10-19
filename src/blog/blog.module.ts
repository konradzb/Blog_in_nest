import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { FakeBlogRepo } from './fake.blog.repo';
import { BlogByIdPipe } from './pipes/blog-by-id.pipe';

@Module({
  controllers: [BlogController],
  providers: [BlogService, FakeBlogRepo, BlogByIdPipe],
})
export class BlogModule {}
