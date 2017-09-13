import { botIds } from '../constants'

const formatMsg = unformattedMsg => {
    unformattedMsg = unformattedMsg.replace(botIds.oracle.name, '')
    unformattedMsg = unformattedMsg.replace(botIds.morpheus.name, '')
    unformattedMsg = unformattedMsg.replace(botIds.architect.name, '')
    unformattedMsg = unformattedMsg.replace(botIds.oracle.tagId, '')
    unformattedMsg = unformattedMsg.replace(botIds.architect.tagId, '')
    unformattedMsg = unformattedMsg.replace(botIds.morpheus.tagId, '')
    unformattedMsg = unformattedMsg.replace(' ', '')
    const formattedMsg = unformattedMsg.toLowerCase()
    return formattedMsg
}

export default formatMsg