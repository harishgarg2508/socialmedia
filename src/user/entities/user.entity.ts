import { Like } from "src/likes/entities/like.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number  

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @OneToMany(()=>Like,like=>like.user)
    likes: Like[]

}
