import { Document } from 'mongoose';

export interface Cat extends Document {
  readonly name: string;
  readonly age: string;
  readonly breed: string;
}
