import { Document } from 'mongoose';


export interface IBudget extends Document {
    income: Number,
    expenses: Number,
    balance: Number
}