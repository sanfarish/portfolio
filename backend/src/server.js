#! /usr/bin/env node
'use strict'
require('dotenv').config()

const { networkInterfaces } = require('os')
const app = require('./app')

const nets = networkInterfaces()
const localIP = Object.values(nets).flat().filter(item => item.family === 'IPv4')
const usedIP = localIP[0].address || '127.0.0.1'
const port = process.env.PORT

app.listen(port, () => {
  console.log(`backend-fh-portfolio listening on http://${usedIP}:${port}`)
})
