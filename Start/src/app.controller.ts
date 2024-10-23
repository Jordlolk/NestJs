import { Body, Controller, Get, Param, Post, Patch, Put, Delete, Req, Query, Ip, Headers} from '@nestjs/common';
import { AppService } from './app.service';
export let controllerpath = 'controller';

@Controller(controllerpath)
export class AppController {
  constructor(private readonly appService: AppService) {}
  public dados: any;
  @Post() // Aplicação para o servidor
  pushNewData(@Body() { dogs }: any) {
    this.dados = dogs;
    return { message: 'Dados recebidos com sucesso!' };
  }
  @Get()
  findURL(@Query('page') quer : any){
    console.log(JSON.stringify(quer))
  }
  @Get('data/dogs')
  findAll(){
    return this.dados ? this.appService.findAllDogs(this.dados) : 'API ERROR'
  }

  @Get('data/:id') // Servidor para aplicação
  getDadosStatus(@Param('id') id : number) {
    return this.dados ? this.appService.findOneDog(this.dados,id) : 'API ERROR';
  }

  @Delete('delete/:delete')
    takeOutDog(@Param('delete') id : string ){
      return this.appService.remove_dog(this.dados, parseInt(id))
  }

  @Get('data/dogs/:random*dog')
  takeRndomDog(@Param('random*dog') rnd : string) {
    return this.appService.getRandomDog(this.dados)
  }
  //AppController - Área responsável por ajustar os dados e prepar eles para o usuário ver.
  //Os decorators também podem criar rotas automaticamente .
  //Entre os () é necessário por o nome de uma outra rota, porque o NestJs NÃO roda as funções se estiverem na mesma rota/provider.
  //Get() é a rota padrão, como o parentêse está vazio a rota será: localhost:3000,
  //qualquer outra alteração é localhost:3000/nomeDaRota @Get(nomeDaRota).
  //@Post - usado para pegar dados do servidor: alterar ou salvar.
  //@Get - usado para pegar dados do servidor: deve apenas buscar os dados, podendo apenas mostrar na tela.
  //@Put - usado para atualizar dados que estão presentes no server (Todos os dados)
  //@Patch - usado para atualizar um dado específico do server.
  //Patch e Put são funções que vão diretamente ao servidor, elas não passam a ser vistas na PG.
  //
  //@Param(nomeDaRota) - usado para pegar um dado específico da URL, pode ser chamado nos parâmetros de uma função.
}
