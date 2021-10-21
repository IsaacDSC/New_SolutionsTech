import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class ApplicationEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, unique: true })
    nameApp: string;

    @Column({ nullable: true })
    imageApp: string;

    @Column({ type: 'text' })
    descriptionsApp: string;

    @Column({ nullable: false })
    typeApp: string;

    @Column({ default: true })
    activeApp: boolean;

    @Column({ nullable: true, type: 'float' })
    costProduceApp: number;

    @Column({ nullable: false, type: 'float' })
    priceApp: number;

    @Column({ nullable: true })
    promotionApp: string;

    @Column({ nullable: true })
    timeDeliveryApp: string;

    @Column({ default: 0.00, type: 'float' })
    low_low: number;

    @Column({ default: 0.00, type: 'float' })
    low: number;

    @Column({ default: 0.00, type: 'float' })
    medium: number;

    @Column({ default: 0.00, type: 'float' })
    high: number;

    @Column({ default: 0.00, type: 'float' })
    high_high: number;

    @Column({ default: false })
    tester: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;


}