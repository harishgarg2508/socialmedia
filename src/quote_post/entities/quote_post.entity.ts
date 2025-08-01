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






}
