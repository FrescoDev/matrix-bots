import { formatMsg, disambiguateMsgContext } from '../utils'
import { messageContexts } from '../constants'
import handleGreetingMsg from './handleGreetingMsg'
import SlackAPI from 'slackbotapi'
import config from '../../config'

const morpheusBotInstance = new SlackAPI({
    'token': config.slackRTM.morpheusBot.token,
    'logging': true,
    'autoReconnect': true
})

morpheusBotInstance.on('message', data => {
    const noText = !data.text

    if (noText) return

    try {
        if (data.text.includes('morpheus') || data.text.includes('<@U72CFRNQK>')) {
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

export default morpheusBotInstance