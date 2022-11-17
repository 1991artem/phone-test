import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 443, () => {
    console.log(`App listening ${process.env.PORT} port`);
  });
}
bootstrap();
