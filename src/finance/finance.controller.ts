import { Body, Controller, Get, Post, Param } from '@nestjs/common';
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

    @Get(':id')
    async getDataById(@Param('id') id: string){
        return this.financeService.getById(id)
    }

    @Post()
    async addFinanceData(@Body() finance: Finance){
        return this.financeService.add(finance)
    }
}
