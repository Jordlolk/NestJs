import { Controller, Get, Redirect, Headers, Query, Param, Ip } from '@nestjs/common';
import { AppService } from './app.service';
let havToFind = ""
@Controller()
export class AppController {
  havToFind : string
  constructor(private readonly appService: AppService) {}

/*   @Get('status')
  @Redirect()
  getHello(){
    let nome1 = 'WERARITUDJREOPPAOELEPODDPOLI'
    havToFind = "POLI"; //INPUT: uma letra que esteja ou não presente em nome1.
    let boolean = nome1.includes(havToFind)
    console.log(boolean)
    if(false){
      return {url: 'http://127.0.0.1:3000/status/true', statusCode: 302, message : "You dit it!"}
    }else{
      return {url: 'http://127.0.0.1:3000/status/false',statusCode: 301, message : "You din't find it"}
    }
  } */

  @Get('headers')
  getallHeaders(@Headers() head : Record<string, string>){
    // outuput, pls it´s just keys not values. 
    /*[
    "host","connection","cache-control","sec-ch-ua","sec-ch-ua-mobile","sec-ch-ua-platform","upgrade-insecure-requests",
    "user-agent","accept","sec-fetch-site","sec-fetch-mode","sec-fetch-user","sec-fetch-dest","accept-encoding","accept-language",
    "if-none-match"]
    */
    return Object.keys(head)
  }

  @Get('query')
  getAllQuery(@Query('nome') Query: string){
    return JSON.stringify(Query) // IF URL === "http://127.0.0.1:3000/Query?nome=luca" - OUTPUT: "LUCA"
  }
 /* 
 //Quando não sabemos se a requisição foi enviada, podemos setar valores padrões pro QUERY
  getAllQuery( @Query('nome') nome: string = "Visitante", @Query('idade') idade : number = 18 ){
    return JSON.stringify(Query) // IF URL === "http://127.0.0.1:3000/Query?nome=luca" - OUTPUT: "LUCA,18"
  } 
  -- Também podemos utilizar o Query como uma classe, além de utilizar o 'class-validator'.
    - Possui alguns decorators como {IsInt, IsOptional, IsString} from 'class-validator' - funções autoexplicativas.
      export class QueryParamsDto {
          @IsString()
          @IsOptional()
          nome?: string;

          @IsInt()
          @IsOptional()
          idade?: number;
          - variavéis: nome, idade
      }
  */
  @Get('Ips')
  showIP(@Ip() ip : number){
    return ip
  }
}



