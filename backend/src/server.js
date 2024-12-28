#!/usr/bin/env node
require('dotenv').config()
const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
  console.log('backend-fh-portfolio listening on port ' + port)
})
