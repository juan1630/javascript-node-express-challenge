//libs
const {  Router } = require('express');

//controllers   
const { createNewTicket  } = require('../controllers/tickets')


//app
const router = Router();


//create 

router.post('/new', createNewTicket);


module.exports = router;