import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
export let controllerpath = 'controller';
@Controller(controllerpath)
export class AppController {
  constructor(private readonly appService: AppService) {}
  //AppController - Área responsável por ajustar os dados e prepar eles para o usuário ver.
  public dados: any;
  @Post() // Aplicação para o servidor
  pushNewData(@Body() { dogs }: any) {
    this.dados = dogs;
    return { message: 'Dados recebidos com sucesso!' };
  }
  //Os decorators também podem criar rotas automaticamente .
  //Entre os () é necessário por o nome de uma outra rota, porque o NestJs NÃO roda as funções se estiverem na mesma rota/provider.
  @Get('status') // Servidor para aplicação
  getDadosStatus() {
    return this.appService.findOneDog(this.dados, 2);
  }
  //Get() é a rota padrão, como : localhost:3000,
  //qualquer outra alteração é localhost:3000/nomeDaRota @Get(nomeDaRota).
}
