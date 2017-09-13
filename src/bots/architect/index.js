import { formatMsg, disambiguateMsgContext } from '../utils'
import { messageContexts } from '../constants'
import handleGreetingMsg from './handleGreetingMsg'
import handleCapabilityQuery from './handleCapabilityQuery'
import SlackAPI from 'slackbotapi'
import config from '../../config'


const architectBotInstance = new SlackAPI({
    'token': config.slackRTM.architectBot.token,
    'logging': true,
    'autoReconnect': true
})

architectBotInstance.on('message', data => {
    const noText = !data.text

    if (noText) return

    try {
        if (data.text.includes('architect') || data.text.includes('<@U71BZQCBA>')) {
            const { channel, user } = data

            const ambiguousMsg = formatMsg(data.text)
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