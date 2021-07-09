import { Body, Controller, Get, Post } from '@nestjs/common';
import { Finance } from './finance.model';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
    constructor(private readonly financeService: FinanceService) {}

    @Get()
    async getAllData(){
        const allDataFinance = await this.financeService.all()
        return this.changeData(allDataFinance)
    }

    @Post()
    async addFinanceData(@Body() finance: Finance){
        return this.financeService.add(finance)
    }

    changeData(arrayData: any[]) {
        return new Promise(resolve => {
            const arrData: any[] = []
            let newData: any = {}
            let jumlah: any = {}


            arrayData.forEach(item => {
                jumlah[item.tanggal] ? jumlah[item.tanggal]++ : jumlah[item.tanggal] = 1
                newData[item.tanggal] = arrayData.filter(itemFilter => itemFilter.tanggal === item.tanggal)
            })

            const objectArray: any = Object.entries(newData);

            objectArray.forEach(([key, value]) => {
                let pemasukan: number = 0
                let pengeluaran: number = 0

                value.forEach(item => {
                    if(item.jenis === 'pemasukan'){
                        pemasukan += item.jumlah
                    }else{
                        pengeluaran += item.jumlah
                    }
                })

                arrData.push({
                    tanggal: key,
                    data: value,
                    pemasukan,
                    pengeluaran
                })
            });
            

            resolve(arrData)
        })
    }
}
