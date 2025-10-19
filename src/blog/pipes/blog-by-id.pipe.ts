import { Injectable, PipeTransform, BadRequestException, NotFoundException } from '@nestjs/common';
import { BlogService } from '../blog.service';

@Injectable()
export class BlogByIdPipe implements PipeTransform<string, Promise<number>> {
  constructor(private readonly blogService: BlogService) {}

  async transform(value: string): Promise<number> {
    const id = Number(value);
    if (!Number.isInteger(id) || id <= 0) {
      throw new BadRequestException('Invalid blog id');
    }

    const blog = await this.blogService.getBlogById(id);
    if (!blog) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }

    return id;
  }
}
