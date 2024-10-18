import { Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  //AppController - Área responsável por ajustar os dados e prepar eles para o usuário ver.

  @Get('dados') // @Get() responsável por criar as rotas para a aplicação.
  //Entre os () é necessário por o nome de uma outra rota, porque o NestJs NÃO roda as funções se estiverem na mesma rota/provider.
  getDadosStatus(){
    return {message: 'Dados retornados com sucesso!'}
  }
  //Get() é a rota padrão, como : localhost:3000, qualquer outra alteração é localhost:3000/nomeDaRota.
  @Post('dados')
  postDados(@Body() body : any): any {
    return { message: 'Dados recebidos: ', data : body};
  }
}
