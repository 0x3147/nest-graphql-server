import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../entity/user.entity'
import { DeepPartial, Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>
  ) {}

  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.insert(entity)
    return res.raw.affectedRows > 0
  }

  async delete(id: string): Promise<boolean> {
    const res = await this.UserRepository.delete(id)
    return res.raw.affectedRows > 0
  }

  async find(id: string): Promise<User> {
    return await this.UserRepository.findOne({
      where: { id }
    })
  }

  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.update(id, entity)
    return res.affected > 0
  }
}
