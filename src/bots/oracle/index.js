import { formatMsg, disambiguateMsgContext } from '../utils'
import { messageContexts, botIds } from '../constants'
import handleGreetingMsg from './handleGreetingMsg'
import SlackAPI from 'slackbotapi'
import config from '../../config'

const oracleBotInstance = new SlackAPI({
    'token': config.slackRTM.oracleBot.token,
    'logging': true,
    'autoReconnect': true
})

oracleBotInstance.on('message', message => {
    const noText = !message.text
    if (noText) return
    
    const { oracle } = botIds
    const msgIsIntendedForOracle = message.text.includes(oracle.name) || message.text.includes(oracle.tagId)
    
    try {
        if (msgIsIntendedForOracle) {
            const { channel, user } = message

            const ambiguousMsg = formatMsg(message.text)
            const messageContext = disambiguateMsgContext(ambiguousMsg)

            switch (messageContext) {
                case messageContexts.greeting:
                    return handleGreetingMsg({ channel, user })

                default:
                    return
            }
        }
    } catch (error) {
        return
    }
})

export default oracleBotInstance