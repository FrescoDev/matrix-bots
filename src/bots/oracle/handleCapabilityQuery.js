import botInstance from './index'
import { botIds } from '../constants'

const handleCapabilityQuery = ({ channel, user }) => {
    botInstance.sendMsg(
        channel,
        `<@${user}> You didn't come here to make the choice, you've already made it. 
        You're here to try to understand *why* you made it. I thought you'd have figured that out by now.

        I can scrape application logs, display server machine metrics, provide component metadata, 
        I basically provide an overview to the system and its components.
    `)

    setTimeout(() => {

        botInstance.sendMsg(
            channel,
            `I respond to the following commands:

    \`System Insight\`: *Overview of the system.*

    \`Component Insight\`: *See a component blueprint, status and meta data sheet.*

    \`Machine Insight\`: *See a component host machine netrics and meta data.*

    \`Interacion Insight\`: *View system interaction logs*

    \`Testing Insight\`: *View previous test runs.*


    ${botIds.architect.tagId} will allow you to create, and edit the matrix system and its inner components.
    ${botIds.morpheus.tagId} can show you how to use the matrix, he can also help you launch a component integration test, speak to him for further detail.     
    `)
    }, 5000)

    return
}

export default handleCapabilityQuery