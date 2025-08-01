import { Like } from "src/likes/entities/like.entity";
import { TextPost } from "src/text_post/entities/text_post.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export enum PostEnum {
    TEXT = 'TEXT',
    QUOTE = 'QUOTE',

}
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'enum', enum: PostEnum })
    postType: PostEnum

    @Column({ nullable: true })
    postId: number


    @OneToMany(() => Like, like => like.post)
    likes: Like[]

    @ManyToOne(() => User, (user) => user.posts)
    user: User;

    @OneToOne(()=>TextPost)
    @JoinColumn()
    textPost: string

    @CreateDateColumn()
    createdAt: Date

    @DeleteDateColumn()
    deletedAt: Date


}
