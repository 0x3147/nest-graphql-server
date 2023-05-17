import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from '../service/user.service'
import { UserType } from '../dto/user.type'
import { UserInput } from '../dto/user-input.type'

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Boolean, { description: '新增用户' })
  async createUser(@Args('params') params: UserInput) {
    return await this.userService.create(params)
  }

  @Query(() => UserType, { description: '使用 ID 查询用户' })
  async find(@Args('id') id: string): Promise<UserType> {
    return await this.userService.find(id)
  }

  @Mutation(() => Boolean, { description: '更新用户信息' })
  async update(@Args('id') id: string, @Args('params') params: UserInput) {
    return await this.userService.update(id, params)
  }

  @Mutation(() => Boolean, { description: '删除用户' })
  async deleteUser(@Args('id') id: string) {
    return await this.userService.delete(id)
  }
}
