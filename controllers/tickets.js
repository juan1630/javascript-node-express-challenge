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


const getTicketsById =  async (req =request , resp = response) => {

    const { id } = req.params;

    try {
        

      const respTickets   = await  Tickets.findById( id )
        
      if( respTickets){

        return resp.status(200).json({
            ok: true,
            msg: 'Se encontro el ticket',
            data: respTickets
        });    
    }


    return resp.status(500).json({
        ok: true,
        msg: 'No se encontro el ticket',
        error: 'Hubo un error'
    });


    } catch (error) {
        console.log(error);

        return resp.status(500).json({
            ok: false,
            msg:'Algo paso', 
            error
        })
    }

}


const updateTicket = async (req = request , resp= response) => {

    const { id } = req.params;
    const { body } = req;
 
    try {


        if(id) {

            const ticketsFound = await Tickets.findById(id);

            if( ticketsFound ) {

                //update 


                const respUpdate =await Tickets.findByIdAndUpdate(id, body, {new: true});

                if( respUpdate ) {
                    return resp.status( 200 )
                    .json({
                        ok:true,
                        msg:'Se actualizo el tickst',
                        data: respUpdate
                    })
                }

            }


        }


        return resp.status(404).json({
            ok: false,
            msg:'ID no valido', 
            error: "No es un id valido"
        })
        
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            msg:'Algo paso', 
            error
        })
    }


}

const deleteTicket = async(req = request , resp = response) => {

    const { id} = req.params;

    try {
        

        if(id) {

            const ticketsFound = await Tickets.findById(id);

            if( ticketsFound ) {

                //delete

                const respDeleted =await Tickets.findByIdAndDelete(id);

                if( respDeleted ) {
                    return resp.status( 200 )
                    .json({
                        ok:true,
                        msg:'Se actualizo el ticket',
                        data: respDeleted
                    })
                }

            }


        }


        return resp.status(404).json({
            ok: false,
            msg:'ID no valido', 
            error:"No es ID valido"
        });

    } catch (error) {
        console.log(error);
        
        return resp.status(500).json({
            ok: false,
            msg:'Algo paso', 
            error
        })
    }
    
}

module.exports ={ 
    createNewTicket,
    getTicketsById,
    updateTicket,
    deleteTicket
}