import { Schema, model } from 'mongoose';
import { IBudget } from './interface';

const budgetSchema = new Schema({
    income: {
        type: Number,
        required: true,
    },
    expenses: {
        type: Number,
        required: true
    }, 
    balance: {
        type: Number,
        required: false,
        ref: 'Book'
    }
},
{timestamps: { createdAt: 'created_at' }
})

export default model<IBudget>('Budget', budgetSchema)