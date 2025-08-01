import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { QuotePostRepository } from 'src/repository/quotePost.repository';
import { TextPostRepository } from 'src/repository/textPost.repository';
import { PostRepository } from 'src/repository/post.repository';
import { UserRepository } from 'src/repository/user.repository';
import { LikesModule } from 'src/likes/likes.module';

@Module({
  imports: [LikesModule],
  controllers: [PostController],
  providers: [PostService,QuotePostRepository,TextPostRepository,PostRepository,UserRepository],
})
export class PostModule {}
