process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('babel-core/register');
require('babel-polyfill');

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster && process.env.NODE_ENV !== 'development') {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    process.env.NODE_ENV === 'development' ? module.exports = require('./src/bots') : module.exports = require('./build/bots');
    console.log(`Worker ${process.pid} started`);
}
