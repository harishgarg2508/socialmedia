import { Like } from "src/likes/entities/like.entity";
import { Post } from "src/post/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];


    @OneToMany(() => Like, like => like.user)
    likes: Like[]

}
