import { Controller, Get, Param, ParseIntPipe, Post, Body, Put, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { CreateBlogDto } from './dto/create-blog.dto';
import { EditBlogDto } from './dto/edit-blog.dto';
import { BlogByIdPipe } from './pipes/blog-by-id.pipe';
import { BlogModule } from './blog.module';

@Controller('blog')
@ApiTags('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  getAllBlogs(): Promise<Blog[]> {
    return this.blogService.getAllBlogs();
  }

  @Get(':id')
  getBlogById(@Param('id', BlogByIdPipe) id: number): Promise<Blog | null> {
    return this.blogService.getBlogById(id);
  }

  @Post()
  createBlog(@Body() dto: CreateBlogDto): Promise<Blog> {
    return this.blogService.createBlog(dto);
  }

  @Put(':id')
  editBlog(
    @Param('id', BlogByIdPipe) id: number,
    @Body() dto: EditBlogDto,
  ): Promise<Blog> {
    return this.blogService.editBlog(id, dto);
  }

  @Delete(':id')
  deleteBlog(@Param('id', BlogByIdPipe) id: number): Promise<Blog> {
    return this.blogService.deleteBlog(id);
  }
}
