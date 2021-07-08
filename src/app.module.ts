import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanceModule } from './finance/finance.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/keuangan', {
        autoCreate: true,
      }),
    FinanceModule
  ],
  controllers: [AppController],
})
export class AppModule {}
