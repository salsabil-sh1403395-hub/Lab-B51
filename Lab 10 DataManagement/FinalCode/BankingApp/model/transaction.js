import mongoose from "mongoose";

const Schema = mongoose.Schema

const transactionSchema = new Schema({
    accNo: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: [true, 'accNo can not be null']
    },
    transType: {
        type: String,
        enum: ['Withdraw', 'Deposit'],
        required: [true, 'transType  can not be null']
    },
    amount: {
        type : Number,
        min : [1, 'amount should be greater than 0'],
        required : [true, 'amount can not be null']
    }
})

export  default  mongoose.model('Transaction' , transactionSchema)