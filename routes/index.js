const express = require('express')
const router = express.Router()
const db = require('../db/query')

router.get('/behavior', (req, res) => {
    db.getBehaviorQ()
    .then(data => res.json(data))
})

router.put('/behavior/:id', (req, res) => {
    let id = req.params.id
    console.log(id)
    let body = req.body
    console.log(body)
    db.postBehaviorQ(body,id)
    .then(() => res.json())
})

router.get('/behavior/:id', (req, res) => {
    let id = req.params.id
    db.getBehaviorQID(id)
    .then(data => res.json(data))
})




module.exports = router