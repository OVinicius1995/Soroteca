const express = require('express');
const cadUser = require('./controllers/cadController');
const cadUsersMiddleware = require('./middleWares/cadUsesrMiddleware.js');
const router = express.Router();

router.get('/cadUsers', cadUser.getAll);
router.post('/cadUsers',cadUsersMiddleware.validateBody,cadUser.cadUsers);

module.exports = router;