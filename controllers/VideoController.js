const { v4: uuidv4 } = require('uuid');

module.exports = class VideoController{

    static async showRoom(req, res) {
        
        res.render('room', {roomId: req.params.room})
    }

    static async showVideo(req, res) {

        res.redirect(`/${uuidv4()}`)
    }


}