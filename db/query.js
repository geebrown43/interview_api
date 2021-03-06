const db = require('./connection')

getBehaviorQ = () => db('behavior').orderBy('id', 'asce')

postBehaviorQ = (body,id) => {
    return db('behavior').update({answer: body.answer}).where('id', id)
}

getBehaviorQID = id => db('behavior').where('id', id)


module.exports = {
getBehaviorQ,
postBehaviorQ,
getBehaviorQID
}