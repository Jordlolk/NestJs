import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User],
      synchronize: false,
    }),
    UserModule
  ], // Aqui é onde este modulo da classe raiz(AppModule), geralmente controladores de outros módulos.
  controllers: [AppController], // exporta dados pro views, configura os dados de AppService para as views
  providers: [AppService], // importa dados pro back-end e trata os dados.
})
export class AppModule {}
