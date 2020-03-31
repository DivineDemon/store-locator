const router = require('express').Router()
const { getStores } = require('../controllers/stores')

router.route('/').get(getStores)

module.exports = router