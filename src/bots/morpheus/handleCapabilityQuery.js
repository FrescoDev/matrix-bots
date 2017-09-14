import botInstance from './index'
import { botIds } from '../constants'

const handleCapabilityQuery = ({ channel, user }) => {
    botInstance.sendMsg(
        channel,
    `<@${user}> You've been living in a dream world, Neo.
        
    Think of me as a sort of F.A.Q. with a conversational UI, I can demonstrate how common processes like "deployment" work, and provide some on boarding assistance for newcomers to the matrix.
        
    Once you're ready I will show you how to build and black box test a component.
    `)

    setTimeout(() => {

        botInstance.sendMsg(
            channel,
    `I respond to the following commands:

    \`Explain\`: 

    *Initialise a new system base.*

    Your system infrastructure in the form of :


    \`Demonstrate\`:
    
    *Create a system worker component.*

    These can be thought of as server side functionalities for specific client or internally defined contexts 
    a.k.a Sentinels.


    \`Test component\`:

    *Create a system visual interface rendering component.*

    Web applications containing visual logic a.k.a. a Matrix-Face.


    ${botIds.architect.tagId} will allow you to create, and edit the matrix. Think of him as a sort component factory. 
    ${botIds.oracle.tagId} knows all, she can provide you with insight relating to the matrix and its components. (Lets you query cocumentation, monitoring and health metrics data relating to your applications and their servers). 
    `)
    }, 5000)

    return
}

export default handleCapabilityQuery