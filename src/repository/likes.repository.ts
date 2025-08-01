import { Injectable, NotFoundException } from '@nestjs/common';
import { LikeDto } from 'src/likes/dto/create-like.dto';
import { Like } from 'src/likes/entities/like.entity';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class LikeRepository extends Repository<Like> {
  constructor(private readonly dataSource: DataSource) {
    super(Like, dataSource.createEntityManager());

  }

  async createLike(user: User, post: Post) {
    const like = this.create({
      post: post,
      user: user
    });
    await this.save(like);
    return like;
  }


  async unlike(likeDto: LikeDto) {
    const { postId, userId } = likeDto;
    const like = await this.findOne({
      where: {
        post: { id: postId },
        user: { id: userId }
      }
    });
    if (!like) {
      throw new NotFoundException(`Like not found for postId ${postId} and userId ${userId}`);
    }
    return this.remove(like);
  }


}