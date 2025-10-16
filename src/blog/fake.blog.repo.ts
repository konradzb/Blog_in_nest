import { Injectable } from "@nestjs/common";
import { Blog } from "./blog.interface";

@Injectable()
export class FakeBlogRepo {
    constructor() {}    

    private readonly blogs: Blog[] = [
        { id: 1, title: 'First Blog', content: 'This is the content of the first blog.', createdAt: new Date() },
        { id: 2, title: 'Second Blog', content: 'This is the content of the second blog.', createdAt: new Date() },
    ];

    findAll(): Blog[] {
        // return this.blogs;
        return this.blogs;
    }

    findBlogById(id: number): Blog | undefined{
        return this.blogs.find(blog => blog.id === id);
    }

    createBlog(blog: Blog): void {
        this.blogs.push(blog);
    }
}