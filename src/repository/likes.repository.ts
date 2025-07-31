import { Injectable } from '@nestjs/common';
import { Like } from 'src/likes/entities/like.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class LikeRepository extends Repository<Like> {
  constructor(private readonly dataSource: DataSource) {
    super(Like, dataSource.createEntityManager());

  }
  

}