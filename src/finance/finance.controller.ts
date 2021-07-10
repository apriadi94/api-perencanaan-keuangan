import { Body, Controller, Get, Post } from '@nestjs/common';
import { Finance } from './finance.model';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
    constructor(private readonly financeService: FinanceService) {}

    @Get()
    async getAllData(){
        const allDataFinance = await this.financeService.all()
        return allDataFinance
    }

    @Post()
    async addFinanceData(@Body() finance: Finance){
        return this.financeService.add(finance)
    }
}
