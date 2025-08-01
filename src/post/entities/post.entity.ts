import { Like } from "src/likes/entities/like.entity";
import { User } from "src/user/entities/user.entity";
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


    @CreateDateColumn()
    createdAt: Date

    @DeleteDateColumn()
    deletedAt: Date


}
