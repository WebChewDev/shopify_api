const express = require('express')
const router = express.Router()

const newObject = {
    name: 'Daniel',
    age: 34,
    isOnline: true
}

router.get('/', (req,res) => {
    res.send(newObject)
})

module.exports = router;