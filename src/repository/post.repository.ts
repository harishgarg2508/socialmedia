import { Injectable } from '@nestjs/common';
import { FilterDto, OrderBY } from 'src/post/dto/filter.dto';
import { Post, postEnum } from 'src/post/entities/post.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class PostRepository extends Repository<Post> {

  constructor(private readonly dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());

  }



  async getAllPosts(filterDto: FilterDto) {
    const { userId, orderBy = OrderBY.DESC, postType, page = 1 } = filterDto;

    const take = 10;
    const skip = (page - 1) * take;

    const query = this.createQueryBuilder('post')
      .leftJoinAndSelect('post.user', 'user')
      .leftJoinAndSelect('post.likes', 'likes');

    if (postType) {
      query.andWhere('post.postType = :postType', { postType });
    }

     if (userId) {
      query.where('user.userId = :userId', { userId });
    }

    query.orderBy('post.createdAt', orderBy);
    
    query.skip(skip).take(take);

    const [data, count] = await query.getManyAndCount();

    return {
      data,
      count,
      totalPages: Math.ceil(count / take),
    };
  }

}

