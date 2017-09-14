import { formatMsg, disambiguateMsgContext } from '../utils'
import { messageContexts, botIds } from '../constants'
import handleGreetingMsg from './handleGreetingMsg'
import handleCapabilityQuery from './handleCapabilityQuery'
import SlackAPI from 'slackbotapi'
import config from '../../config'

const morpheusBotInstance = new SlackAPI({
    'token': config.slackRTM.morpheusBot.token,
    'logging': true,
    'autoReconnect': true
})

morpheusBotInstance.on('message', message => {
    const noText = !message.text
    if (noText) return

    const { morpheus } = botIds
    const msgIsIntendedForMorpheus = message.text.includes(morpheus.name) || message.text.includes(morpheus.tagId)
    
    try {
        if (msgIsIntendedForMorpheus) {
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

export default morpheusBotInstance