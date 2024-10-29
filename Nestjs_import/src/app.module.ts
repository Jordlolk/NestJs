import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [AppController, DatabaseController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
