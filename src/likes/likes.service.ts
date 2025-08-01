import { Injectable, NotFoundException } from '@nestjs/common';
import { LikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { LikeRepository } from 'src/repository/likes.repository';
import { PostRepository } from 'src/repository/post.repository';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class LikesService {
  constructor(private readonly likeRepository: LikeRepository,
    private readonly postRepository: PostRepository,
    private readonly userRepository: UserRepository
  ) {}
  async create(createLikeDto: LikeDto) {
    const { postId, userId } = createLikeDto;
    const post = await this.postRepository.findOneBy({ id: postId });
    const user = await this.userRepository.findOneBy({ id: userId });
    if(!post) {
      throw new NotFoundException(`Post with id ${postId} not found`);
    }
    if(!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
    return this.likeRepository.createLike(user,post);
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

  unlike(likeDto: LikeDto) {
    const { postId, userId } = likeDto;
    const post = this.postRepository.findOneBy({ id: postId });
    const user = this.userRepository.findOneBy({ id: userId });
    if (!post) {
      throw new NotFoundException(`Post with id ${postId} not found`);
    }
    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
    return this.likeRepository.unlike(likeDto);
  }
}
