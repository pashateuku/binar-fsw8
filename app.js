const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4001

const swaggerJSON = require('./swagger.json');
const swaggerUI = require('swagger-ui-express');


// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter)
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));


// running server
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})