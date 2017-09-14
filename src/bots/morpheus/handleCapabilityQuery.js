import botInstance from './index'
import { botIds } from '../constants'

const handleCapabilityQuery = ({ channel, user }) => {
    botInstance.sendMsg(
        channel,
        `<@${user}> You've been living in a dream world, Neo.
        
    Think of me as a sort of F.A.Q. with a conversational UI, I can demonstrate how common processes like "deployment" work,
     and provide some on boarding assistance for newcomers to the matrix.
        
    Once you're ready I will show you how to build and black box test a component.
    `)

    setTimeout(() => {

        botInstance.sendMsg(
            channel,
            `I respond to the following commands:

    \`Explain\`: *Search for a doc snippet via keyword.*

    \`New kit\`: *Download the neo developer tool kit (CLIs, node, npm packages, etc).*

    \`Demonstrate\`: *Search for a process walkthrough.*

    \`Test component\`: *Kick a start a component test.*


    ${botIds.architect.tagId} will allow you to create, and edit the matrix system and its inner components.
    ${botIds.oracle.tagId} knows all, she can provide you with insight relating to the matrix and its components. 
    (Lets you query documentation, monitoring and health metrics data relating to your applications and their servers). 
    `)
    }, 5000)

    return
}

export default handleCapabilityQuery