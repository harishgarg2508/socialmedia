import { Injectable } from '@nestjs/common';
import { QuotePost } from 'src/quote_post/entities/quote_post.entity';
import { CreateTextPostDto } from 'src/text_post/dto/create-text_post.dto';
import { TextPost } from 'src/text_post/entities/text_post.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class QuotePostRepository extends Repository<QuotePost> {
  constructor(private readonly dataSource: DataSource) {
    super(QuotePost, dataSource.createEntityManager());

  }
  
    async createQuotePost(createPostDto: Partial<CreateTextPostDto>) {
      const quotePost = this.create(createPostDto);
      await this.save(quotePost);
      return quotePost;

}
}