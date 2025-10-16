import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import type { Blog } from './blog.interface';
import { ApiTags } from '@nestjs/swagger';

@Controller('blog')
@ApiTags('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @Get()
    getAllBlogs(): Blog[] {
        return this.blogService.getAllBlogs();
    }
    
    @Get(':id')
    getBlogById(@Param('id', ParseIntPipe) id: number): Blog {
        return this.blogService.getBlogById(id);
    }

    @Post(':blog')
    createBlog(@Param('blog') blog: Blog): void {
        return this.blogService.createBlog(blog);
    }
}
