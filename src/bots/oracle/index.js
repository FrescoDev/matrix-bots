import { formatMsg, disambiguateMsgContext } from '../utils'
import { messageContexts } from '../constants'
import handleGreetingMsg from './handleGreetingMsg'
import SlackAPI from 'slackbotapi'
import config from '../../config'

const architectBotInstance = new SlackAPI({
    'token': config.slackRTM.oracleBot.token,
    'logging': true,
    'autoReconnect': true
})

architectBotInstance.on('message', data => {
    const noText = !data.text

    if (noText) return

    try {
        if (data.text.includes('oracle') || data.text.includes('<@U73GZDN2K>')) {
            const { channel, user } = data

            const ambiguousMsg = formatMsg(data.text)
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

export default architectBotInstance