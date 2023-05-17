import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    comment: '昵称',
    default: ''
  })
  @IsNotEmpty({ message: '昵称不能为空' })
  name: string

  @Column({
    comment: '描述信息',
    default: ''
  })
  desc: string

  @Column({
    comment: '手机号',
    nullable: true
  })
  tel: string

  @Column({
    comment: '密码',
    nullable: true
  })
  password: string

  @Column({
    comment: '账户信息',
    default: ''
  })
  account: string
}
