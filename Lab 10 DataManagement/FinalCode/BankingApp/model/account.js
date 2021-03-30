import mongoose from "mongoose";
const Schema = mongoose.Schema

const options = {
    toJSON: {
        virtuals: true
    }
}

const accountSchema = new Schema({
    acctType: {
        type: String,
        enum: ['Current', 'Saving'],
        required: [true, 'acctType can not be null']
    },
    balance: {
        type: Number,
        min: [0, 'balance can not be negative'],
        required: [true, 'balance can not be null']
    }
}, options)

accountSchema.virtual('interestRate').get(function () {
    return this.balance * 0.05
})

export default mongoose.model('Account', accountSchema)