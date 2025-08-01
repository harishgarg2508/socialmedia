import { Like } from "src/likes/entities/like.entity";
import { QuotePost } from "src/quote_post/entities/quote_post.entity";
import { TextPost } from "src/text_post/entities/text_post.entity";
import { User } from "src/user/entities/user.entity";
import { text } from "stream/consumers";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export enum postEnum {
    TEXT = 'TEXT',
    QUOTE = 'QUOTE',

}
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'enum', enum: postEnum })
    postType: postEnum

    @Column({ nullable: true })
    postId: number


    @OneToMany(() => Like, like => like.post)
    likes: Like[]

    @ManyToOne(() => User, (user) => user.posts)
    user: User;

    @OneToOne(() => TextPost, textPost => textPost.post)
    textPost: TextPost

    @OneToOne(() => QuotePost, quotePost => quotePost.post)
    quotedPost: QuotePost

    @CreateDateColumn()
    createdAt: Date

    @DeleteDateColumn()
    deletedAt: Date


}
