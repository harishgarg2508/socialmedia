import { Injectable } from '@nestjs/common';
import { Post } from 'src/post/entities/post.entity';
import { TextPost } from 'src/text_post/entities/text_post.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class PostRepository extends Repository<Post> {
  constructor(private readonly dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());

  }
  

}