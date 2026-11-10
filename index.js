const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json()) //!exp error, body not defined by default

const vidinad = [
    {
        id : 1,
        name : "laadija",
        price : 19.99
    },
    {
        id : 2,
        name : "kaaned",
        price : 14.99
    },
    {
        id : 3,
        name : "kõnepakett",
        price : 9.99
    }

]

app.get('/vidinad', (req, res) => {
    res.send(vidinad)
})

app.get('/vidinad/:id', (req, res) => {
    if (typeof vidinad[req.params.id-1] === undefined) {
        return res.status(404).send({error: "vidinat pole"})
    }
    res.send(vidinad[req.params.id-1])
})

app.post('/vidinad', (req, res) => {
    if (! req.body.name || !req.body.price) {
        return res.status(400).send({error: "midagi puudub, kontrolli andmeid"})
    }
    let newVidin = {
        id: vidinad.length +1,
        price: req.body.price,
        name: req.body.name

    }
    vidinad.push(newVidin)
    return res.send(201).location('localhost:8080/vidinad' +(vidinad.length
        -1)).send(newVidin)
})

app.put('/vidinad/:id', (req, res) =>{
    if (typeof vidinad[req.params.id-1] === 'undefined') {
        return res.status(404).send({error:`vidinat id-ga ${req.params.id} ei ole`})
    }
    if (!req.body.name || !req.body.price) {
        return res.statud(400-send({error:"andmed puuduvad"}))
    }
    let muudetudVidin = {
        id: req.params.id-1,
        name: req.body.name,
        price: req.body.price
    }
    vidinad[req.params.id-1].name = muudetudVidin.name
    vidinad[req.params.id-1].price = muudetudVidin.price
    return res.status(201).location('localhost:8080/vidinad/'+(muudetudVidin.id)).send(muudetudVidin)
}) 

app.delete('/vidinad/:id', (req, res) =>{
    if (typeof vidinad[req.params.id-1] === 'undefined') {
        return res.status(404).send({error: "vidinat pole"})
    }
    vidinad.splice(req.params.id-1,1)
    res.status(204).send({error:"no content"})
})

app.listen(8080, () => {
    console.log(`API töötab aadressil: http://localhost:8080`)
})

