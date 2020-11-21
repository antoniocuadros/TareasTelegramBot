const request = require('request-promise');
const lib = require('./tareas')

async function enviaMensaje(chat_id, text) {
  const options = {
    method: 'GET',
    uri: `https://api.telegram.org/bot${process.env.TELEGRAMBOTTOKEN}/sendMessage`,
    qs: {
      chat_id,  //id del chat
      text      //contenido
    }
  };

  return request(options);
}



exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}