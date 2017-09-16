import Fuse from 'fuse.js'
import { messageContexts } from '../constants'

const knownGreetingIdentifiers = ['hi', 'hello', 'sup?', 'hey', 'yo', 'greet', 'how is it going?', 'how are you?', 'whats new?', 'whats going on?', '??']
const knownCapabilitiesQueryIdentifiers = ['help', 'help me', 'what do you do?', 'what can you do?', 'please help me', 'please help', 'help please', 'abilities']
const knownSelfIdQueryIdentifiers = ['who are you?', 'what are you?', 'self', 'purpose', 'describe','what is your purpose?', 'describe yourself']

const options = {
    shouldSort: true,
    tokenize: true,
    includeScore: true,
    threshold: 0.8,
    location: 0,
    distance: 46,
    maxPatternLength: 64,
    minMatchCharLength: 1,
    keys: undefined
}

//sitrep
const disambiguateMsgContext = ambiguousMsg => {
    if (knownGreetingIdentifiers.find(greetingId => greetingId === ambiguousMsg)) return messageContexts.greeting
    if (knownSelfIdQueryIdentifiers.find(selfQueryId => selfQueryId === ambiguousMsg)) return messageContexts.identityQuery
    if (knownCapabilitiesQueryIdentifiers.find(queryId => queryId === ambiguousMsg)) return messageContexts.capabilityQuery

    const greetingFuzzy = new Fuse(knownGreetingIdentifiers, options)
    const resultsA = greetingFuzzy.search(ambiguousMsg)
    const matchesA = resultsA.filter(item => item.score < 0.4)
    if (matchesA.length > 0) return messageContexts.greeting

    const idQueryFuzzy = new Fuse(knownSelfIdQueryIdentifiers, options)
    const resultsB = idQueryFuzzy.search(ambiguousMsg)
    const matchesB = resultsB.filter(item => item.score < 0.4)
    if (matchesB.length > 0) return messageContexts.identityQuery

    const abilityQueryFuzzy = new Fuse(knownCapabilitiesQueryIdentifiers, options)
    const resultsC = abilityQueryFuzzy.search(ambiguousMsg)
    const matchesC = resultsC.filter(item => item.score < 0.4)
    if (matchesC.length > 0) return messageContexts.capabilityQuery

    return messageContexts.unknown
}

// if the ambiguous message sort of looks like one of he id list els then return 
export default disambiguateMsgContext