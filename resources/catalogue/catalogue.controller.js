const { EntryModel } =  require('./catalogue.model')

async function getEntry(req, res) {
    try {
        const entries = await EntryModel.find()
        res.status(200).json(entries)
    } catch (error){
        next(error)
    }
}

async function createEntry(req, res, next) {
try {
    const entry = await EntryModel.create(req.body)
    res.status(201).json(entry)
    } catch (error){
        next(error)
    }
}

async function deleteEntry(req, res, next) {
    const deleted = await EntryModel.findOneAndRemove({ _id: req.params.id })
    res.status(200).json(deleted)
}

module.exports = { createEntry, getEntry, deleteEntry }