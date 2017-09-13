import { merge } from 'lodash'
import path from 'path'

/**
 * Default configuations applied to all environments
 */
const defaultConfig = {
    env: process.env.NODE_ENV,
    get envs() {
        return {
            test: process.env.NODE_ENV === 'test',
            development: process.env.NODE_ENV === 'development',
            production: process.env.NODE_ENV === 'production'
        }
    },

    root: path.normalize(__dirname + '/../../..'),
    port: process.env.PORT || 4567,
    ip: process.env.IP || '0.0.0.0',

    slackRTM: {
        architectBot: {
            token: process.env.ARCHITECT_BOT_TOKEN || ''
        },
        oracleBot: {
            token: process.env.ORACLE_BOT_TOKEN || ''
        },
        morpheusBot: {
            token: process.env.MORPHEUS_BOT_TOKEN || ''
        }
    }
}

/**
 * Environment specific overrides
 */
const environmentConfigs = {
    development: {},
    test: {},
    production: {}
}

let localEnv = {}

try {
    localEnv = require('./local-env')
} catch (error) {
    console.warn('Using Non-Local config')
}

/**
 * Application configuration and constants
 */
export default merge(defaultConfig, environmentConfigs[process.env.NODE_ENV] || {}, localEnv)