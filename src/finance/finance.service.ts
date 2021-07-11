import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Finance, FinanceDocument } from './finance.model';

@Injectable()
export class FinanceService {
    constructor(
        @InjectModel(Finance.name) private readonly FinanceModel: Model<FinanceDocument>
    ){}

    async all(){
        const allData = await this.FinanceModel.find().exec()
        return this.changeData(allData)
    }

    changeData(arrayData) {
        return new Promise(resolve => {

            interface ArrData {
                tanggal: string;
                data: Array<Data>;
                pemasukan: number,
                pengeluaran: number
            }

            interface Data {
                _id: string;
                tanggal: string;
                jumlah: number;
                idKategori: number;
                keterangan: string;
                jenis: string;
                __v: number;
            }

            interface NewData {
                [key: string]: Array<Data>
            }

            interface Tanggal {
                [key: string]: number
            }
            
            const arrData: Array<ArrData> = []

            let newData: NewData = {}
            let jumlah: Tanggal = {}


            arrayData.forEach(item => {
                jumlah[item.tanggal] ? jumlah[item.tanggal]++ : jumlah[item.tanggal] = 1
                newData[item.tanggal] = arrayData.filter(itemFilter => itemFilter.tanggal === item.tanggal)
            })

            const objectArray: Array<Array<string | Array<Data>>> = Object.entries(newData);


            objectArray.forEach(([key, value]) => {
                let pemasukan = 0
                let pengeluaran = 0
                let tanggal: string
                let data: Array<Data>

                if(typeof key === 'string'){
                    tanggal = key
                }

                if (Array.isArray(value)) {
                    value.forEach(item => {
                        if(item.jenis === 'pemasukan'){
                            pemasukan += item.jumlah
                        }else{
                            pengeluaran += item.jumlah
                        }
                    })

                    data = value
                }

                arrData.push({
                    tanggal,
                    data,
                    pemasukan,
                    pengeluaran
                })
            });
            
            resolve(arrData)
        })
    }

    async getById(idFinance){
        const data = await this.FinanceModel.find({ _id: idFinance}).exec()
        return data
    }

    async add(finance: Finance): Promise<Finance> {
        const createdFinance = new this.FinanceModel(finance);
        return createdFinance.save();
    }
}
