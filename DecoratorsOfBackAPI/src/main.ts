import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let port = process.env.PORT ?? 3000
  let host = '127.0.0.1'
  await app.listen(port,host);
  let url = await app.getUrl()
  console.log('Código rodando em: '+ url)
}
bootstrap();
