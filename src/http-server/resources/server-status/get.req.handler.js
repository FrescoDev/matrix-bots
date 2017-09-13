/**
 * Description: Health check route which responds with status of 'ok'.
 * 
 * @param  {object} req Express's request object
 * @param  {object} res Express's callback response object
 * @return  {null} 
 */

const handleGetServerStatusRequest = (req, res) => {
    req.log.info({ modulePath: global.getCurrentModuleId(__filename) }, 'Handling GET Server Status Request');

    res.json({
        id: 'matrix-bots-api',
        status: 'ok'
    })
}

export default handleGetServerStatusRequest