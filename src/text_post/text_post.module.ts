import { Module } from '@nestjs/common';
import { TextPostService } from './text_post.service';
import { TextPostController } from './text_post.controller';

@Module({
  controllers: [TextPostController],
  providers: [TextPostService],
})
export class TextPostModule {}
