import botInstance from './index'

const handleIdQuery = ({ channel, user }) => {
    return botInstance.sendMsg(channel, `<@${user}> I am an application deployment and boilerplate generation SLI (Slack Line Interface).`)
}

export default handleIdQuery