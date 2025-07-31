import { Like } from "src/likes/entities/like.entity";
import { QuotePost } from "src/quote_post/entities/quote_post.entity";
import { TextPost } from "src/text_post/entities/text_post.entity";
import { text } from "stream/consumers";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export enum postEnum {
    TEXT = 'text',
    QUOTE = 'quote',

}
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'enum', enum: postEnum })
    postType: postEnum

    @Column()
    postId: number



    @OneToMany(() => Like, like => like.post)
    likes: Like[]

    @OneToOne(() => TextPost, textPost => textPost.post)
    textPost: TextPost

    @OneToOne(() => QuotePost, quotePost => quotePost.post)
    quotedPost: TextPost

    @CreateDateColumn()
    createdAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
