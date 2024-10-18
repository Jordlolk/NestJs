import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
//AppService - Área onde é feita a regra de negócio, quais dados podem ou não serem vistos pelo usuário.
  getHello(): string {
    return 'Hello World!';
  }
  getCreate(): string{
    return `
      Version - 0.0.0
      O que eu aprendi com NestJs, é possivél puxar modules, controllers e providers.
      controllers pegam requisições http e providers criam rotas, essas rotas diferente do express
      podem ser criadas apenas usando um Decorator, logo acima da função desejada. 
    `
  }
}
