# Resumo básico sobre Nestjs 😼

### Nestjs é um framework que pode utilizar JS/TS, ele é capaz de gerenciar banco de dados e rotas de API.

### Ambiente de maior eficiência:

- Aplicações web e APIs REST.
- Sistemas distribuídos e microserviços.
- Aplicações que exigem organização e escalabilidade

## Caracteristícas

- Realiza requisições HTTP ( GET, POST, PUT...)
- Modularidade entre partes da aplicação (Facilidade na leitura de cada serviço)
- Separação lógicas de uma aplicação

  - Service: Local da regra de negócio da aplicação.
  - Module: Local onde gerencia todos os services, controller, trabalhando também com chamadas de services diferentes.

    - Exemplo:

    ```ts
    // Vamos supor que isso é um agendamento de usuarios em um sistema.
    @Module({
      // Permite que este modulo utilize funções do Serviço de usuarios e de agendamentos.
      providers: [UsuariosService, AgendamentoService],
      // Indica qual controller ele irá usar.
      controllers: [AgendamentoController],
      imports: [], // Pode chamar outros modulos.
    })
    export class NomeDesteModule {}
    ```

    #### Isso faz com que um único modulo consiga gerenciar vários serviços, este por exemplo pode usar uma função: _ListarUsuarios de UsuariosService_ , mas ao mesmo tempo, _AgendarTodosUsuarios de AgendamentoService_.

- Injeção de independência: Facilita na declaração/criação de objetos/classes/services, melhora a modularidade.

- Por baixo dos panos usa Express, mas também aceita [Fastify](https://fastify.dev/ "Documentação do Fastify"), para melhorar a performance.

- Typescript nativo: Facilita troca de dados através do código, criando classes chamadas de [DTOS](https://dev-to.translate.goog/cendekia/mastering-dtos-in-nestjs-24e4?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=sge#:~:text=O%20que%20%C3%A9%20um%20DTO,acordo%20com%20a%20estrutura%20esperada.)
  .
- Arquitetura moderna: Possui por padrão o modelo MVC(Model-view-controller) e Inversão de controle (IoC), facilitando crescimento de projetos sem desorganização.

- Jest: Integra Jest para realizações de testes em: Services, Modules e Controllers.

### Estrutura Básica

- #### Arquivos/Pastas

```css
src/
├─ app.module.ts
├─ hello.controller.ts
├─ hello.service.ts
└─ main.ts
```

- #### Main.ts

```ts
// Main.ts, arquivo onde a aplicação se inicia, neste código está rodando em http://localhost:3000

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

- #### App.module.ts

```ts
// Cria o modulo com tudo que ele irá utilizar e observar.

import { Module } from "@nestjs/common";
import { HelloController } from "./hello.controller";
import { HelloService } from "./hello.service";

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [HelloService],
})
export class AppModule {}
```

- #### Hello.service.ts

```ts
// Arquivos terminados com .service, indicam que gerenciam a regra de négocios da aplicação

import { Injectable } from "@nestjs/common";

@Injectable() // <- Decorador que indica INJEÇÃO DE DEPENDÊNCIA.
export class HelloService {
  getMessage(): string {
    return "Olá do Service!";
  }
}
```

- ### Hello.controller.ts

```ts
// Arquivos que terminam com controller, indicam que controlam as rotas da aplicação, neste caso a única rota que existe é:
// http://localhost:3000/hello

import { Controller, Get } from "@nestjs/common";
import { HelloService } from "./hello.service";

@Controller("hello")
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.getMessage();
  }
}
```

## Subindo uma aplicação como esta, usando um comando de running code como:

```txt
npm run start:dev
```

## E acessar a porta:

```css
http: ; //localhost:3000/hello
```

## Irá retornar:

```txt
Olá do Service!
```
