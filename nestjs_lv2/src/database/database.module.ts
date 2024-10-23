import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports : [UserModule],
  controllers : [DatabaseController],
  providers : [DatabaseService]
})
export class DatabaseModule {}
