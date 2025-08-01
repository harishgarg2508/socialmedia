import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './dto/create-post.dto';
import { FilterDto } from './dto/filter.dto';
import { LikesService } from 'src/likes/likes.service';
import { LikeDto } from 'src/likes/dto/create-like.dto';


@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService,
    private readonly likesService: LikesService
  ) {}

  @Post()
  createPost(@Body() postDto: PostDto) {
    return this.postService.createPost(postDto);
  }

  @Get()
  getAllPosts(@Query() filterDto: FilterDto) {
    return this.postService.getAllPosts(filterDto);
  }


  @Post('/:postId/like')
  like(@Body() createLikeDto: LikeDto) {
    return this.likesService.create(createLikeDto);
  }

  @Delete('/:postId/unLike')
  unlike(@Param('postId') postId: string, @Body() likeDto: LikeDto) {
    return this.likesService.unlike(likeDto);
  }


  
  @Get(':id')
  getOnePost(@Param('id') id: string) {
    return this.postService.getOnePost(+id);
  }


  @Delete(':id')
  deletePost(@Param('id') postId: string) {
    return this.postService.deletePost(+postId);
  }
}
