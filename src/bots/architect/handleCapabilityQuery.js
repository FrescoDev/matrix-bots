import botInstance from './index'
import { botIds } from '../constants'

const handleCapabilityQuery = ({ channel, user }) => {
    botInstance.sendMsg(
        channel,
        `<@${user}> I am the Architect. I created the Matrix. You have many questions...

    I am but an illusion, a mere tool. An abstraction over a collection of software development system design and maintenance utilities. 
    `)

    setTimeout(() => {

        botInstance.sendMsg(
            channel,
            `I can respond to the following commands:

    \`Initialise matrix\`: *Initialise a new system base.*

     Your system infrastructure in the form of :
     
     -an internal service application machine (host to system-workers)
     -an exernal service application machine (host to face-workers)
     -a visual interface rendering application machine (host to faces)
     
     as node web apps deployed over heroku server instances with 3 de-coupled environments for 
     development, testing and production a.k.a. The Matrix-system -dev, -test and -live mode initialisation.


    \`Create worker\`: *Create a system OR face worker system component.*

    \`Create face\`: *Create a system visual interface rendering component.*

    \`Integrate component\`: *Integrate a component refrenced by ID into a specific system mode e.g. dev.*

    This will deploy the component code to a provisioned build server provided by travis-ci, 
    integrate and deploy the code to the specified system environment's application server.


    \`Create simulation\`: *Create a cross component user journey test application.*


    ${botIds.morpheus.tagId} can show you how to use the matrix, he can also help you launch a component integration test, speak to him for further detail. 
    ${botIds.oracle.tagId} knows all, she can provide you with insight relating to the matrix and its components. (Lets you query documentation, monitoring and health metrics data relating to your applications and their servers). 
    `)
    }, 2000)

    return
}

export default handleCapabilityQuery