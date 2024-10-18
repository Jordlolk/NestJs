import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //AppController - Área responsável por ajustar os dados e prepar eles para o usuário ver.
  
  @Get() // @Get() responsável por criar as rotas para a aplicação.
  //Entre os () é necessário por o nome de uma outra rota, porque o NestJs NÃO roda as funções se estiverem na mesma rota/provider.
  getHello(): string {
    return this.appService.getHello();
  }
  //Get() é a rota padrão, como : localhost:3000, qualquer outra alteração é localhost:3000/nomeDaRota.
  @Get('rota2')
  getDate(): string {
    let date = new Date()
    return 'Data de hoje: '+date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear();
  }
}
