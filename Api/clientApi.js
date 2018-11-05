const express = require('express');
let Client = require('../Models/Client');
const router = express.Router();

router.get('/', function (req, res) {
  Client.find().exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    else { res.send(user) }
  })
})

router.post('/', function (req, res) {
  console.log(req.body)
  if (req.body.name !== undefined && req.body.country !== undefined && req.body.handler !== undefined) {
    let name = req.body.name
    let country = req.body.country
    let handler = req.body.handler

    let NewClient = new Client({ name: name, country: country, owner: handler, sold: false, firstContact: new Date() })

    NewClient.save((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send(data);
      }
    })
  }

  else if (req.body.clientName !== undefined && req.body.handler !== undefined) {
    let clientName = req.body.clientName
    let handler = req.body.handler
    Client.update({ name: clientName }, { $set: { owner: handler } }).exec((err, client) => {
      if (err) {
        res.status(500).send(err);
      }
      else { res.send(client) }
    })
  }

  else if (req.body.clientName !== undefined && req.body.emailType !== undefined) {
    let clientName = req.body.clientName
    let emailType = req.body.emailType
    Client.update({ name: clientName }, { $set: { emailType: emailType } }).exec((err, client) => {
      if (err) {
        res.status(500).send(err);
      }
      else { res.send(client) }
    })
  }

  else if (req.body.clientName !== undefined && req.body.sold !== undefined) {
    let clientName = req.body.clientName
    let sold = req.body.sold
    Client.update({ name: clientName }, { $set: { sold: sold } }).exec((err, client) => {
      if (err) {
        res.status(500).send(err);
      }
      else { res.send(client) }
    })
  }

  else if (req.body.id !== undefined && req.body.name !== undefined && req.body.country !== undefined) {
    let id = req.body.id
    let name = req.body.name
    let country = req.body.country
    Client.findByIdAndUpdate(id, { $set: { name: name, country: country } }).exec((err, client) => {
      if (err) {
        res.status(500).send(err);
      }
      else { res.send(client) }
    })
  }

  else { res.send("error") }

})

module.exports = router;