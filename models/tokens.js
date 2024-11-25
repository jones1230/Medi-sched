import { Schema, model } from 'mongoose';

const TokenSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'HospitalStaffSchema'
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600
    }
})

export default model('Token', TokenSchema);