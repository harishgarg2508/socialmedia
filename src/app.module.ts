import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotePostModule } from './quote_post/quote_post.module';
import { TextPostModule } from './text_post/text_post.module';
import { LikesModule } from './likes/likes.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './config/datasource';

@Module({
  imports: [QuotePostModule, TextPostModule, LikesModule, UserModule, PostModule,TypeOrmModule.forRoot(dataSourceOptions  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
