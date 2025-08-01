import { Post } from "src/post/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
@Unique(['post', 'user'])
export class Like {
    @PrimaryGeneratedColumn()
    id: number


    @ManyToOne(() => Post, post => post.likes)
    @JoinColumn({name: 'post_id'})
    post: Post

    @ManyToOne(() => User, user => user.likes)
    @JoinColumn({name: 'user_id'})
    user: User

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}

