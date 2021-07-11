import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './category.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly CategoryModel: Model<CategoryDocument>,
  ) {}

  allCategory() {
    return this.CategoryModel.find().exec();
  }

  add(category: Category): Promise<Category> {
    const addCategory = new this.CategoryModel(category);
    return addCategory.save();
  }
}
