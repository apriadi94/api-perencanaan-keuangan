import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Category, CategoryDocument } from './category.model'

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category.name) private readonly CategoryModel: Model<CategoryDocument>
    ) {}

    async allCategory(){
        return this.CategoryModel.find().exec()
    }
}
