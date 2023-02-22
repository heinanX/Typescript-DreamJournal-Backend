import { Schema, model, models } from 'mongoose'

const languageSchema = new Schema({
    language: {type: String, require: true },
}, { versionKey: false })

export const LanguageModel = models.languages || model('languages', languageSchema)