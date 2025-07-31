import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from 'src/likes/dto/create-like.dto';
import { Like } from 'src/likes/entities/like.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class LikeRepository extends Repository<Like> {
  constructor(private readonly dataSource: DataSource) {
    super(Like, dataSource.createEntityManager());

  }

  async createLike(createLikeDto: Partial<CreateLikeDto>) {
    const { postId, userId } = createLikeDto;
    const like = this.create({ post_id, userId });
    await this.save(like);
    return like;
  
  }
  

}