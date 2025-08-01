import { Injectable } from '@nestjs/common';
import {  PostDto } from 'src/post/dto/create-post.dto';
import { TextPost } from 'src/text_post/entities/text_post.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TextPostRepository extends Repository<TextPost> {
  constructor(private readonly dataSource: DataSource) {
    super(TextPost, dataSource.createEntityManager());

  }

  async createTextPost(postData:PostDto) {
    const textPost = this.create({
      content: postData.content,
    });
    await this.save(textPost);
    return textPost;

  }


}
