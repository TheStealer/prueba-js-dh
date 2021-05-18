/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const tareas = require("./tareas.json");
const fs = require("fs");
let path = "tareas.json";
let data = [];

exports.leerTareas = function () {
  /*
        En esta función debes leer y retornar las tareas registradas.
    */
  const tareas = fs.readFileSync(path, "utf-8");
  let tareas_json = JSON.parse(tareas);
  //console.log(tareas_json);
  return JSON.parse(tareas);
};

exports.agregarTarea = function (tarea) {
  /*
        Registra y guarda una nueva tarea.
    */
  //console.log(tarea);
  data.push(tarea);
  //console.log(data);
  try {
    fs.writeFileSync(path, JSON.stringify(data));
    //console.log("JSON data is saved.");
  } catch (error) {
    console.error(err);
  }
};

exports.filtrarTareasPorEstado = function (estado) {
  /*
          En esta función debes de leer las tareas y retornar las que tengan el estado que se
          manda en el parametro.
      */
  const tareas = fs.readFileSync(path, "utf-8");
  const tareas_json = JSON.parse(tareas);
  let tareasFiltradas = [];
  let t = tareas_json.forEach((element) => {
    if (element.status == estado) {
      tareasFiltradas.push(element);
    }
  });
  console.log(tareasFiltradas);
  return tareasFiltradas;
};
