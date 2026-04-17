import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id_user!: number

    @Column({ type: "varchar", length: 255})
    user_name!: string
    @Column({ type: "varchar", length: 255, unique: true})
    user_email!: string
    @Column({ type: "varchar", length: 255})
    user_password!: string

    @Column({ type: "int" })
    user_status!: number
}