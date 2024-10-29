import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { path } from './user/user.controller';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let port = process.env.PORT ?? 3000
  let host = '127.0.0.1'
  await app.listen(port, host)
  let url = await app.getUrl()
  console.log("The App is running in: "+ url+"/"+path)
}
bootstrap();
