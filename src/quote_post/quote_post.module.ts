import { Module } from '@nestjs/common';
import { QuotePostService } from './quote_post.service';
import { QuotePostController } from './quote_post.controller';

@Module({
  controllers: [QuotePostController],
  providers: [QuotePostService],
})
export class QuotePostModule {}
