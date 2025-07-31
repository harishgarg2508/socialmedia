import { Post } from "src/post/entities/post.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class TextPost {
    @PrimaryGeneratedColumn()
    id: number
 


    @Column()
    content: string

    @Column()
    createdAt: Date

    @OneToOne(()=>Post,post=>post.textPost)
    post: Post


}
