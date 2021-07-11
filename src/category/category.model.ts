/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  categoryName: string;

  @Prop()
  categoryType: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
