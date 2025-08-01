import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Post, PostEnum } from './entities/post.entity';
import { TextPostRepository } from 'src/repository/textPost.repository';
import { QuotePostRepository } from 'src/repository/quotePost.repository';
import { PostRepository } from 'src/repository/post.repository';
import { PostDto } from './dto/create-post.dto';
import { Filter } from 'typeorm';
import { FilterDto } from './dto/filter.dto';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class PostService {
  constructor(private readonly textPostRepository: TextPostRepository,
    private readonly quotePostRepository: QuotePostRepository,
    private readonly postRepository: PostRepository,
    private readonly userRepository: UserRepository
  ) { }

  getAllPosts(filters: FilterDto) {
    return this.postRepository.getAllPosts(filters)
  }


  async createPost(postDto: PostDto) {
    const { postType, userId } = postDto;

    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }


    if (postType === PostEnum.TEXT) {
      const newTextPost = await this.textPostRepository.createTextPost(postDto);

      const post = this.postRepository.create({
        postType,
        postId: newTextPost.id,
        user
      });

      return this.postRepository.save(post);

    } else if (postType === PostEnum.QUOTE) {
      const quotePost = await this.quotePostRepository.createQuotePost(postDto);
      const quotedPost = this.postRepository.create({
        postType,
        postId: quotePost.id,
        user
      });
      return this.postRepository.save(quotedPost);
    } else {

      throw new BadRequestException('Invalid post type');
    }
  }


  async getOnePost(id: number) {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  deletePost(postId: number) {
    const post = this.postRepository.findOneBy({ id: postId });
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return this.postRepository.delete(postId);
  }
}
