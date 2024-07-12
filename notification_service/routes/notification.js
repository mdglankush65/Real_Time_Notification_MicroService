const express = require('express');
const { createNotification, fetchAllNotification, fetchNotification, updateNotification } = require('./index')

const router = express.Router();

router.post('/', createNotification);
router.get('/', fetchAllNotification);
router.get('/:id', fetchNotification);
router.put('/:id', updateNotification);

module.exports = router;