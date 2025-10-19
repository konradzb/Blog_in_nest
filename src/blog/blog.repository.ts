import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { EditBlogDto } from './dto/edit-blog.dto';

@Injectable()
export class BlogRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.blog.findMany();
  }

  findBlogById(id: number) {
    return this.prisma.blog.findUnique({ where: { id } });
  }

  createBlog(dto: CreateBlogDto) {
    return this.prisma.blog.create({ data: dto });
  }

  editBlog(id: number, dto: EditBlogDto) {
    return this.prisma.blog.update({ where: { id }, data: dto });
  }

  deleteBlog(id: number) {
    return this.prisma.blog.delete({ where: { id } });
  }
}
