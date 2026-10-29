const express = require('express')
const router = express.Router()
const VideoController = require('../controllers/VideoController')

router.get('/:room', VideoController.showRoom)
router.get('/', VideoController.showVideo)


module.exports = router