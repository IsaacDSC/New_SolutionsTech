import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { SalesEntity } from './Sales'

@Entity()
export class OSEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    UUID: string;

    @Column({ type: 'integer' })
    timeDelivered: number;

    @Column({ type: 'float' })
    priceSale: number;

    @Column({ type: 'float' })
    installmentSale: number;

    @Column({ default: false })
    ok: boolean;

    @Column({ default: true })
    active: boolean;

    @Column({ default: false })
    delivered: boolean;

    @Column({ default: false })
    support: boolean;

    @Column({ type: 'text' })
    errorApp: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;


}