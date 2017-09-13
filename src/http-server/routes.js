import { handleGetServerStatusRequest } from './resources'
import { Router } from 'express'
import bunyanMiddleware from 'bunyan-middleware'
import logger from '../http-server/logging'

const requestLogger = bunyanMiddleware({
    logger: logger,
    headerName: 'Pangiia-Request-Id',
    obscureHeaders: ['authorization'],
    level: (process.env.NODE_ENV === 'development') ? 'debug' : 'info'
})

/**
 * Description: This maps urls of http requests to appropriate handler function
 * 
 * GET /server-status will retrieve the health status of the api e.g. OK
 * 
 */
const routes = new Router()
    .use(requestLogger)
    .get('/server-status', handleGetServerStatusRequest)

export default routes