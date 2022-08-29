const jwt = require('jsonwebtoken')

module.exports = function auth (req, res, next){
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
        return res.status(400).send('Access Denied')
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next()
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}