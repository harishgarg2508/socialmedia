import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { LikeRepository } from 'src/repository/likes.repository';
import { PostRepository } from 'src/repository/post.repository';
import { UserRepository } from 'src/repository/user.repository';

@Module({
  controllers: [LikesController],
  providers: [LikesService,LikeRepository,PostRepository,UserRepository],
  exports: [LikesService]
})
export class LikesModule {}
