import { messageContexts } from '../constants'
const knownGreetingIdentifiers = ['hi', 'hello', 'sup?', 'hey', 'yo']
const knownCapabilitiesQueryIdentifiers = ['help', 'helpme', 'whatdoyoudo?', 'pleasehelpme', 'pleasehelp', 'helplease']

const disambiguateMsgContext = ambiguousMsg => {
    if (knownGreetingIdentifiers.find(greetingId => greetingId === ambiguousMsg)) return messageContexts.greeting
    if (knownCapabilitiesQueryIdentifiers.find(queryId => queryId === ambiguousMsg)) return messageContexts.capabilityQuery

    return messageContexts.unknown

}

export default disambiguateMsgContext