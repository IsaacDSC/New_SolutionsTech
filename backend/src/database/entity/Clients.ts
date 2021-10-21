import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class ClientsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    completeName: string;

    @Column({ nullable: false, unique: true })
    companyName: string;

    @Column({ nullable: true })
    profile: string;

    @Column({ unique: true })
    document: string;

    @Column({ nullable: true })
    birthday: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ unique: true, nullable: false })
    telephone: string;

    @Column({ default: false })
    active: boolean;

    @Column()
    conn_address: string;

    @Column()
    conn_access: string;

    @Column()
    conn_password: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;


}