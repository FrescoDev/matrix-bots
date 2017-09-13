import bunyan from 'bunyan'
import config from '../../config'

let logger

if (process.env.NODE_ENV === 'production') {
    logger = bunyan.createLogger({
        name: 'PANGIIA-API',
        serializers: bunyan.stdSerializers,
        streams: [
            {
                level: 'info',
                stream: process.stdout
            },
            {
                level: config.logging.level,
                path: config.logging.filePath
            }
        ]
    })
} else {
    logger = bunyan.createLogger({
        name: 'PANGIIA-API',
        serializers: bunyan.stdSerializers,
        streams: [
            {
                level: 'info',
                stream: process.stdout
            }
        ]
    })
}

export default logger