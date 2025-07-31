import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { LikeRepository } from 'src/repository/likes.repository';

@Injectable()
export class LikesService {
  constructor(private readonly likeRepository: LikeRepository) {}
  create(createLikeDto: CreateLikeDto) {
    return this.likeRepository.createLike(createLikeDto);
  }

  findAll() {
    return `This action returns all likes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like`;
  }

  remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
