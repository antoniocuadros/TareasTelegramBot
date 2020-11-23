const request = require('request-promise');
const lib = require('./tareas')

exports.handler = async function(event, context) {
    try{
        let body = JSON.parse(event.body);
        let {chat, text} = body.message;
      
        if (text){ //Contiene texto el mensaje, será el comando
            let a_devolver = '';
            switch (text) {
                case "/ktengo":
                  a_devolver = lib.getAsignaturas();
                  break;
                case "/ktengoIV":
                  a_devolver = lib.getAsignaturas("IV");
                  break;
                case "/ktengoDAI":
                  a_devolver = lib.getAsignaturas("DAI");
                  break;
                case "/ktengoSPSI":
                  a_devolver = lib.getAsignaturas("SPSI");
                  break;
                default:
                  a_devolver = "Usa /ktengo para saber que tareas tienes que realizar y para consultas más concretas: \n/ktengoIV para obtener las tareas a realizar de IV. \n/ktengoDAI para obtener las tareas a realizar de DAI. \n/ktengoSPSI para obtener las tareas a realizar de SPSI."
                  break;
            }       
            return {
              statusCode: 200,
              body: JSON.stringify({text:a_devolver, method:'sendMessage', chat_id:chat.id}),
              headers:{
                  'Content-Type': 'application/json'
              }
          };
        }
    }
    catch(error){
    }


}