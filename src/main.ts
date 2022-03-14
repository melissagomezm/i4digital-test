import { NestFactory } from '@nestjs/core';
import mongoose from 'mongoose';
import { GlobalInterceptor } from './interceptors/global.interceptor';
import { AppModule } from './modules/app.module';
import 'dotenv/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new GlobalInterceptor());
  mongoose.connect(process.env.DB_HOST).then( _ => {
    console.log('Conectado a la base de datos....')
  });
  await app.listen(3000);
}
bootstrap();
