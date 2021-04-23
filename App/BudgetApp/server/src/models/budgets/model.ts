import { Schema, model } from 'mongoose';
import { IBudget } from './interface';

const budgetSchema = new Schema({
    income: [{
        type: String,
        required: true,
    }],
    expenses: [{
        type: Number,
        required: true
    }], 
    balance: [{
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Book'
    }]
})

export default model<IBudget>('Budget', budgetSchema)