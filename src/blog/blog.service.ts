import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Blog } from '@prisma/client'; // <-- typ Prisma
import { CreateBlogDto } from './dto/create-blog.dto';
import { EditBlogDto } from './dto/edit-blog.dto';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllBlogs(): Promise<Blog[]> {
    return this.prisma.blog.findMany();
  }

  async getBlogById(id: number): Promise<Blog | null>  {
    const blog = await this.prisma.blog.findUnique({ where: { id } });
    
    return blog;
  }

  async createBlog(dto: CreateBlogDto): Promise<Blog> {
    return this.prisma.blog.create({ data: dto });
  }

  async editBlog(id: number, dto: EditBlogDto): Promise<Blog> {
    const existing = await this.prisma.blog.findUnique({ where: { id } });
    
    return this.prisma.blog.update({ where: { id }, data: dto });
  }

  async deleteBlog(id: number): Promise<Blog> {
    const existing = await this.prisma.blog.findUnique({ where: { id } });
    
    return this.prisma.blog.delete({ where: { id } });
  }
}
