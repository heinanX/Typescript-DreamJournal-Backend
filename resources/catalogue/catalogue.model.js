const { Schema, model, models } = require ('mongoose')

const entrySchema = new Schema({
    title: {type: String, require: true },
    entry: {type: String, require: true },
}, { timestamps: true, versionKey: false })

const EntryModel = models.entries || model('entries', entrySchema)

module.exports = { EntryModel }