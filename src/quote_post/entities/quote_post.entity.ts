import { Post } from "src/post/entities/post.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class QuotePost {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quote: string

    @Column()
    author: string

    @CreateDateColumn()
    createdAt: Date

    @OneToOne(()=>Post,post=>post.quotedPost)
    @JoinColumn({ name: 'postId' })
    post: Post





}
