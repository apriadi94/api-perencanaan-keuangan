import { Body, Controller, Get, Post } from '@nestjs/common';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAllCategory() {
    return this.categoryService.allCategory();
  }

  @Post()
  async insertNewCategory(@Body() category: Category) {
    const insertData = await this.categoryService.add(category);
    return insertData;
  }
}
