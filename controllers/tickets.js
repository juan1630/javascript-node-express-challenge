//libs 
const {  request, response }  = require('express')  

//models
const Tickets = require('../models/ticekts');



const createNewTicket = async ( req = request , resp = response  ) => {
    
    const {body } = req;
    

    try {

        if( body ) {
            
            const ticketSaved = new Tickets( body );

            const respTicket = await ticketSaved.save();


            if(respTicket){ 

                return resp.status(201).json({
                    ok:true,
                    msg: 'Se creo el ticket',
                    data: respTicket
                })
            }


            return resp.status(500).json({
                ok: false,
                msg: 'Hubo un error',
                error: 'No se pudo crear'
            })

        }

    }catch (error) {
        console.log(error);

        return resp.status(500).json({
            ok: false,
            msg: 'Hubo un error',
            error
        })
    }

};  

module.exports ={ 
    createNewTicket
}