import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from './entity/user.entity'
import { UserService } from './service/user.service'
import { UserResolver } from './Resolver/user.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserResolver],
  exports: []
})
export class UserModule {}
