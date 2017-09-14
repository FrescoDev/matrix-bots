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

    \`Initialise matrix\`: 

    *Initialise a new system base.*

     Your system infrastructure in the form of :
     
     -an internal service application machine 
     -an interface rendering application machine 
     -a visual interface rendering application machine 
     
     as node web apps deployed over heroku server instances with 3 de-coupled environments for 
     development, testing and production a.k.a. The Matrix-system -dev, -test and -live mode initialisation.


    \`Create host component\`:
    
    *Create a system worker component.*

    These can be thought of as server side functionalities for specific client or internally defined contexts 
    a.k.a Sentinels.


    \`Create visual interface\`:

    *Create a system visual interface rendering component.*

    Web applications containing visual logic a.k.a. a Matrix-Face.


    \`Integrate component\`:

    *Integrate a component refrenced by ID into a specific system mode (dev,test,prod).*

    This will deploy the component code to a provisioned build server provided by travis-ci, 
    & post a successful build & will then integrate and deploy the code to the specified system environment's application server.


    \`Create simulation\`: 
    
    *Create a cross component user journey test application.*


    ${botIds.morpheus.tagId} can show you how to use the matrix, he can also help you launch a component integration test, speak to him for further detail. 
    ${botIds.oracle.tagId} knows all, she can provide you with insight relating to the matrix and its components. (Lets you query cocumentation, monitoring and health metrics data relating to your applications and their servers). 
    `)
    }, 2000)

    return
}

export default handleCapabilityQuery