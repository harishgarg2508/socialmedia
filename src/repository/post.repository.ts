import { Injectable } from '@nestjs/common';
import { FilterDto, OrderBY } from 'src/post/dto/filter.dto';
import { Post, postEnum } from 'src/post/entities/post.entity';
import { TextPost } from 'src/text_post/entities/text_post.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class PostRepository extends Repository<Post> {

  constructor(private readonly dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());

  }



  async getAllPosts(filterDto: FilterDto) {
    const { search, orderBy = OrderBY.DESC, postType, page = 1 } = filterDto;

    const take = 10;
    const skip = (page - 1) * take;

    const query = this.createQueryBuilder('post')
      .leftJoinAndSelect('post.textPost', 'textPost')
      .leftJoinAndSelect('post.quotedPost', 'quotedPost');

    if (search) {
      query.andWhere(
        `(textPost.content ILIKE :search OR quotedPost.content ILIKE :search)`,
        { search: `%${search}%` },
      );
    }

    if (postType) {
      query.andWhere('post.postType = :postType', { postType });
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

