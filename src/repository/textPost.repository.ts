import { Injectable } from '@nestjs/common';
import { CreateTextPostDto } from 'src/text_post/dto/create-text_post.dto';
import { TextPost } from 'src/text_post/entities/text_post.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TextPostRepository extends Repository<TextPost> {
  constructor(private readonly dataSource: DataSource) {
    super(TextPost, dataSource.createEntityManager());

  }

  async createTextPost(createPostDto: Partial<CreateTextPostDto>) {
    const textPost = this.create(createPostDto);
    await this.save(textPost);
    return textPost;

  }


}