// src/blog/dto/create-blog.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateBlogDto {
  @IsString({message: 'Title must be a string'})
  @IsNotEmpty({message: 'Title is required'})
  @MaxLength(120, {message: 'Title must be at most 120 characters long'})
  @ApiProperty({ 
    example: 'My First Blog', 
    description: 'The title of the blog post',
    maxLength: 120 }) // Swagger decorator
  title: string;

  @IsString({message: 'Content must be a string'})
  @IsNotEmpty({message: 'Content is required'})
  @MinLength(10, {message: 'Content must be at least 10 characters long'})
  @ApiProperty({ 
    example: 'This is the content of my first blog post.', 
    description: 'The content of the blog post',
    minLength: 10 }) // Swagger decorator
  content: string;
}
