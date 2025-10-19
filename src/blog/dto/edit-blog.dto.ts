// src/blog/dto/edit-blog.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength, MinLength, IsOptional } from 'class-validator';

export class EditBlogDto {
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required' })
  @MaxLength(120, { message: 'Title must be at most 120 characters long' })
  @ApiProperty({ //swagger decorator
    example: 'Updated Blog Title',
    description: 'The title of the blog post',
    maxLength: 120,
  })
  title: string;

  @IsString({ message: 'Content must be a string' })
  @IsNotEmpty({ message: 'Content is required' })
  @MinLength(10, { message: 'Content must be at least 10 characters long' })
  @ApiProperty({ //swagger decorator
    example: 'This is the updated content of my blog post.',
    description: 'The content of the blog post',
    minLength: 10,
  })
  content: string;

  @IsOptional()
  @ApiProperty({ //swagger decorator
    example: '2024-01-01T00:00:00Z',
    description: 'The creation date of the blog post',
  })
  createdAt: Date;
}
