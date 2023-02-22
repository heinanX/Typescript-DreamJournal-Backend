import { Schema, model, models } from 'mongoose'

const categorySchema = new Schema({
    category: {type: String, require: true },
}, { versionKey: false })

export const CategoryModel = models.categories || model('categories', categorySchema)