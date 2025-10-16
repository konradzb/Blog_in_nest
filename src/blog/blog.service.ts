import { Injectable } from '@nestjs/common';
import { FakeBlogRepo } from './fake.blog.repo';
import { Blog } from './blog.interface';

@Injectable()
export class BlogService {
    constructor(private readonly blogRepo: FakeBlogRepo) { }

    getAllBlogs (): Blog[] {
        return this.blogRepo.findAll();
    }

    getBlogById (id: number): Blog {
        const blog = this.blogRepo.findBlogById(id);
        console.log(blog);
        if (!blog) {
            throw new Error(`Blog with id ${id} not found`);
        }
        return blog;
    }

    createBlog (blog: Blog): void {
        const tempBlog = blog;
        //  add validation here

        return this.blogRepo.createBlog(blog);
    }
}
