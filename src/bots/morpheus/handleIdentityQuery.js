import botInstance from './index'

const handleIdQuery = ({ channel, user }) => {
    return botInstance.sendMsg(channel, `<@${user}> I am a system documentation and component contract testing SLI (Slack Line Interface).`)
}

export default handleIdQuery