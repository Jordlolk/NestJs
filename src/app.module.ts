import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // Aqui é onde este modulo da classe raiz(AppModule), geralmente controladores de outros módulos.
  controllers: [AppController], // exporta dados pro views, configura os dados de AppService para as views
  providers: [AppService], // importa dados pro back-end e trata os dados.
})
export class AppModule {}
