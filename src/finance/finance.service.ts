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
        return this.FinanceModel.find().exec()
    }
}
