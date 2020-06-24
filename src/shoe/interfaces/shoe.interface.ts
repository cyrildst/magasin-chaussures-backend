import { Document } from 'mongoose';

export interface Shoe extends Document {
    readonly brand: string;
    readonly color: string;
    readonly type: string;
    readonly material: string;
    readonly wearcolors: [string];
    readonly price: number;
    readonly sale: Date;
  }