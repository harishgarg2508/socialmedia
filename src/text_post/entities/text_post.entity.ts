import { Post } from "src/post/entities/post.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class TextPost {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @CreateDateColumn()
    createdAt: Date

    @OneToOne(() => Post, post => post.textPost,{onDelete: 'CASCADE'})
    @JoinColumn({ name: 'postId' })

    post: Post


}
