import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanceModule } from './finance/finance.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/keuangan', {
        autoCreate: true,
      }),
    FinanceModule,
    CategoryModule
  ],
  controllers: [AppController],
})
export class AppModule {}
