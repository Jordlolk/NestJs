import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { controllerpath } from './app.controller';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let port = process.env.PORT ?? 3000
  let host = '127.0.0.1'
  await app.listen(port,host)
  const URL = await app.getUrl()
  console.log('Teste rodando em: '+ URL+'/'+controllerpath)
}
bootstrap();
