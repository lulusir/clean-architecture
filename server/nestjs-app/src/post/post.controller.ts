import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(
      createPostDto.title,
      createPostDto.content,
      createPostDto.authorId,
    );
  }

  @Get()
  findAll(@Query() dto: { authorId: string }) {
    return this.postService.findByAuthor(Number(dto.authorId));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.find(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Query() dto: { userId: string }) {
    return this.postService.delete(+id, +dto.userId);
  }
}
