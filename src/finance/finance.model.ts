import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";

export type FinanceDocument = Finance & Document

export class FinanceType {
    readonly tanggal: string;
    readonly jumlah:  number;
    readonly idKategori: number;
    readonly keterangan: string;
    readonly jenis: string;
}

@Schema()
export class Finance {
    @Prop()
    tanggal: string

    @Prop()
    jumlah: number

    @Prop()
    idKategori: number

    @Prop()
    keterangan: string

    @Prop()
    jenis: string
}

export const FinanceSchema = SchemaFactory.createForClass(Finance)