import { Injectable } from '@nestjs/common';
import { PostDto } from 'src/post/dto/create-post.dto';
import { QuotePost } from 'src/quote_post/entities/quote_post.entity';
import { TextPost } from 'src/text_post/entities/text_post.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class QuotePostRepository extends Repository<QuotePost> {
  constructor(private readonly dataSource: DataSource) {
    super(QuotePost, dataSource.createEntityManager());

  }
  
    async createQuotePost(postData:PostDto) {
      const {quote,author} = postData
      const quotePost = this.create({
        quote,
        author
      });
      await this.save(quotePost);
      return quotePost;

}
}