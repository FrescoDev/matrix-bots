const formatMsg = unformattedMsg => {
    unformattedMsg = unformattedMsg.replace('oracle', '')
    unformattedMsg = unformattedMsg.replace('morpheus', '')
    unformattedMsg = unformattedMsg.replace('architect', '')
    unformattedMsg = unformattedMsg.replace('<@U71BZQCBA>', '')
    unformattedMsg = unformattedMsg.replace('<@U72CFRNQK>', '')
    unformattedMsg = unformattedMsg.replace('<@U73GZDN2K>', '')
    unformattedMsg = unformattedMsg.replace(' ', '')
    const formattedMsg = unformattedMsg.toLowerCase()
    return formattedMsg
}

export default formatMsg