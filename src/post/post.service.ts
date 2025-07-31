import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { postEnum } from './entities/post.entity';
import { TextPostRepository } from 'src/repository/textPost.repository';
import { QuotePostRepository } from 'src/repository/quotePost.repository';
import { PostRepository } from 'src/repository/post.repository';

@Injectable()
export class PostService {
  constructor(private readonly textPostRepository: TextPostRepository,
    private readonly quotePostRepository: QuotePostRepository,
    private readonly postRepository: PostRepository
  ) {}
  async create(createPostDto: Partial<CreatePostDto>) {
    const {type, content, quote, author } = createPostDto;
    if(type===postEnum.TEXT){
      const textPost = await this.textPostRepository.createTextPost(content);
       await this.postRepository.save({type, postId: textPost.id});
      return textPost;
    }
    else if(type===postEnum.QUOTE){
      const quotePost = await this.quotePostRepository.createQuotePost(createPostDto);
       await this.postRepository.save({type, postId: quotePost.id});
      return quotePost;
    }
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
