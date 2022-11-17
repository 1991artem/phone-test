import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PhoneModule } from './phone/phone.module';

@Module({
  imports: [
    PhoneModule,
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
