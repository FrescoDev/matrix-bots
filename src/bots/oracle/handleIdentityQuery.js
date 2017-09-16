import botInstance from './index'

const handleIdQuery = ({ channel, user }) => {
    return botInstance.sendMsg(channel, `<@${user}> I am system monitoring SLI (Slack Line Interface).`)
}

export default handleIdQuery