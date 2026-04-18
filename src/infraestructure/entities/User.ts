import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User{
    @PrimaryGeneratedColumn()
    id_user!: number

    @Column({ type: "character varying", length: 255})
    user_name!: string
    @Column({ type: "character varying", length: 255, unique: true})
    user_email!: string
    @Column({ type: "character varying", length: 255})
    user_password!: string

    @Column({ type: "integer", default:1 })
    user_status!: number
}