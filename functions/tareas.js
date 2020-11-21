const data = require('./data.json');
 function getAsignaturas(asignatura = "todas"){
    num_asignaturas = 3;
    a_devolver = "";
    
    for(i = 1; i <= num_asignaturas; i++){
      tareas = "";
      fechas = ""
      if(asignatura == "todas"){
        if (data['asignaturas'][i]["tareas"].length > 1){
          for( j = 0; j < data['asignaturas'][i]["tareas"].length; j++){
            tareas += "\n     Tarea: " +  data['asignaturas'][i]["tareas"][j] + ", Fecha: " + data['asignaturas'][i]["fecha_tareas"][j] + " ";
          }
        }
        else{
          tareas +=   "\n     Tarea: " + data['asignaturas'][i]["tareas"] + ", Fecha: " + data['asignaturas'][i]["fecha_tareas"];
        }
        a_devolver += data['asignaturas'][i]["nombreAsignatura"]  + "-> " +  tareas  + "\n";
      }
    }
    return a_devolver;
  }

  module.exports = { getAsignaturas }
