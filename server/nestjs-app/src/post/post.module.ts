import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostOrmEntity } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';
import { UserRepository } from 'src/user/user.repository';
import { UserOrmEntity } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostOrmEntity, UserOrmEntity])],
  controllers: [PostController],
  providers: [PostRepository, UserRepository, PostService],
})
export class PostModule {}
