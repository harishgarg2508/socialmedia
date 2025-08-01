import { Injectable } from '@nestjs/common';
import { Post, postEnum } from 'src/post/entities/post.entity';
import { TextPost } from 'src/text_post/entities/text_post.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
 
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());

  }

  async  createUser(createUserDto:CreateUserDto){
    const user = this.create(createUserDto);
    await this.save(user);
    return user;
  }
  
  
}