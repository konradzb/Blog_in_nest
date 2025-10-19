import { Injectable } from "@nestjs/common";
import { Blog } from "./blog.interface";
import { CreateBlogDto } from "./dto/create-blog.dto";
import { EditBlogDto } from "./dto/edit-blog.dto";
import { create } from "domain";

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

    createBlog(dto: CreateBlogDto): Blog {
        const blog: Blog = {
            id: this.blogs.length + 1,
            title: dto.title,
            content: dto.content,
            createdAt: new Date(),
        };

        this.blogs.push(blog);
        return blog;
    }

    editBlog(id: number, dto: EditBlogDto): Blog | undefined {
        const blogIndes = this.blogs.findIndex(blog => blog.id === id);
        const prev = this.blogs[blogIndes];

        // this.blogs[blogIndes] = {
        //     ...this.blogs[blogIndes], //current state of the blog
        //     ...dto, //updated fields    
        //     createdAt: this.blogs[blogIndes].createdAt //preserve original createdAt if not provided in dto
        // };

        this.blogs[blogIndes].title = dto.title;
        this.blogs[blogIndes].content = dto.content;
        if (dto.createdAt) {
            this.blogs[blogIndes].createdAt = dto.createdAt;
        }

        return this.blogs[blogIndes];
    }

    deleteBlog(id: number): void {
        const blogIndex = this.blogs.findIndex(blog => blog.id === id); 
        if (blogIndex !== -1) {
            this.blogs.splice(blogIndex, 1);    //remove the blog from the array
        }   
    }
}