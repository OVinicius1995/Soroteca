const express = require('express');
const cadUser = require('./controllers/cadController');
const getRules = require('./controllers/rulesController.js');

const swaggerUi = require('swagger-ui-express');
const  swaggerDocument  =  require ('../swagger.json');


const cadUsersMiddleware = require('./middleWares/cadUsesrMiddleware.js');
const router = express.Router();
router.use('/soroteca-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument)) ;

router.get('/rules', getRules.getAllRules);
router.get('/cadUsers/', cadUsersMiddleware.validaAutorization, cadUser.getAll);
router.post('/cadUsers',cadUsersMiddleware.validateBody,cadUser.cadUsers);
router.delete('/cadUsers/:id',cadUsersMiddleware.validateExists,cadUser.deleteUser);
router.put('/cadUsers/:id',cadUsersMiddleware.validateBody,cadUsersMiddleware.validateExists,cadUser.updateUser);

module.exports = router;