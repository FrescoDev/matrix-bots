import { formatMsg, disambiguateMsgContext } from '../utils'
import { messageContexts, botIds } from '../constants'
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
    const { morpheus } = botIds

    if (noText) return

    const msgIsIntendedForMorpheus = data.text.includes(morpheus.name) || data.text.includes(morpheus.tagId)
    try {
        if (msgIsIntendedForMorpheus) {
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