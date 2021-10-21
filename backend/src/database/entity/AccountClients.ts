import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class ClientsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryGeneratedColumn()
    saleId: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ default: false })
    active: boolean;

}