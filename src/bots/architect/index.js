import { formatMsg, disambiguateMsgContext } from '../utils'
import { messageContexts, botIds } from '../constants'
import handleGreetingMsg from './handleGreetingMsg'
import handleCapabilityQuery from './handleCapabilityQuery'
import SlackAPI from 'slackbotapi'
import config from '../../config'


const architectBotInstance = new SlackAPI({
    'token': config.slackRTM.architectBot.token,
    'logging': true,
    'autoReconnect': true
})

architectBotInstance.on('message', message => {
    const noText = !message.text
    if (noText) return
    
    const { architect } = botIds
    const msgIsIntendedForArchitect = message.text.includes(architect.name) || message.text.includes(architect.tagId)
    
    try {
        if (msgIsIntendedForArchitect) {
            const { channel, user } = message

            const ambiguousMsg = formatMsg(message.text)
            const messageContext = disambiguateMsgContext(ambiguousMsg)

            switch (messageContext) {
                case messageContexts.greeting:
                    return handleGreetingMsg({ channel, user })
                case messageContexts.capabilityQuery:
                    return handleCapabilityQuery({ channel, user })

                default:
                    return
            }
        }
    } catch (error) {
        return
    }
})

export default architectBotInstance