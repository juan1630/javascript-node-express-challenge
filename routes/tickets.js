//libs
const {  Router } = require('express');

//controllers   
const { createNewTicket, getTicketsById, updateTicket, deleteTicket  } = require('../controllers/tickets')


//app
const router = Router();


//create 
router.post('/new', createNewTicket);


// get ticket by ID 
router.get('/:id', getTicketsById );

// update ticket
router.put('/update/:id', updateTicket);

//delete 
router.delete('/delete/:id', deleteTicket)

module.exports = router;