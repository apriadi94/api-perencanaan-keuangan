/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FinanceDocument = Finance & Document;

@Schema()
export class Finance {
  @Prop()
  tanggal: string;

  @Prop()
  jumlah: number;

  @Prop()
  idKategori: number;

  @Prop()
  keterangan: string;

  @Prop()
  jenis: string;
}

export const FinanceSchema = SchemaFactory.createForClass(Finance)
