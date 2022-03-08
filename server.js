const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
      const server = express()
      server.get('*', (req, res) => {
        return handle(req, res)
      })

      server.listen(process.env.PORT, (err) => {
        if (err) throw err
        console.log(`> Ready on http://${hostname}:${process.env.PORT}`)
      })
    })
    .catch((ex) => {
      console.error(ex.stack)
      process.exit(1)
    })
