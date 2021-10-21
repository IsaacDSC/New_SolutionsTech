import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class SolutionsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    completeName: string;

    @Column({ unique: true })
    document: string;

    @Column({ nullable: true })
    birthday: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    telephone: string;

    @Column({ nullable: false })
    username: string;

    @Column({ nullable: false })
    password: string

    @Column({ default: false })
    active: boolean;

    @Column({ type: 'float', nullable: true })
    payment: number;

    @Column({ nullable: true })
    points: number;

    @Column({ default: false })
    wage: boolean;

    @Column({ default: false })
    admin: boolean;

    @Column({ default: false })
    dealer: boolean;

    @Column({ default: false })
    others: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;

}