import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { ApplicationEntity } from './Application'
import { SolutionsEntity } from './Solutions'
import { ClientsEntity } from './Clients'

@Entity()
export class SalesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => ApplicationEntity, appSaled => appSaled.nameApp)
    app_saled: ApplicationEntity[];

    @ManyToOne(() => SolutionsEntity, wageSaled => wageSaled.username)
    wageSaled: SolutionsEntity;

    @ManyToOne(() => ClientsEntity, companySaled => companySaled.companyName)
    companySaled: ClientsEntity;

    @Column({ type: 'float' })
    payment: number;

    @Column()
    day_payment: string;

    @Column()
    date_payment: number;

    @Column()
    typeSaled: string;

    @Column({ type: 'float' })
    priceSaled: number;

    @Column({ type: 'float' })
    installmentSaled: number;

    @Column({ type: 'float' })
    Promotion: number;

    @Column({ nullable: false })
    timeDeliveryApp: string;

    @Column({ default: false })
    low_low: boolean;

    @Column({ default: false })
    low: boolean;

    @Column({ default: false })
    medium: boolean;

    @Column({ default: false })
    high: boolean;

    @Column({ default: false })
    high_high: boolean;

    @Column({ default: false })
    tester: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;


}