import botInstance from './index'

const handleGreetingMsg = ({ channel, user }) => {
    return botInstance.sendMsg(channel, `<@${user}> Hello Neo, I've been expecting you`)

}

export default handleGreetingMsg