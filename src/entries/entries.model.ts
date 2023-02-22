import { Schema, model, models } from 'mongoose'

const entrySchema = new Schema({
    title: {type: String, require: true },
    entry: {type: String, require: true },
}, { timestamps: true, versionKey: false })

export const EntryModel = models.entries || model('entries', entrySchema)