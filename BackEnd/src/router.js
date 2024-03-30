const express = require('express');
const cadUser = require('./controllers/cadController');
const cadUsersMiddleware = require('./middleWares/cadUsesrMiddleware.js');
const router = express.Router();

router.get('/cadUsers', cadUser.getAll);
router.post('/cadUsers',cadUsersMiddleware.validateBody,cadUser.cadUsers);
router.delete('/cadUsers/:id',cadUser.deleteUser);
router.put('/cadUsers/:id',cadUsersMiddleware.validateBody,cadUser.updateUser);

module.exports = router;