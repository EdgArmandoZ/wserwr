//Importar la clase tarea desde task.js
import { Tarea } from "./task.js";

//Obtener referencias a los elementos del DOM

const tareaForm=document.getElementById
('task-form');
const tareaInput=document.getElementById
('task-input');
const tareaList=document.getElementById
('task-list');

//Crea array para almacenar las tareas
let tareas= [];

//Funcion para agregar una nueva tarea
function addTask(descripcion){
    //crear una instancia de la clase tarea
const nuevaTarea= new Tarea(descripcion);

//Agregar la tarea al array de tareas
tareas.push(nuevaTarea);

//actualizar la lista de tareas en el DOM
renderTareas();
}

//Funcion para renderizar la lista de tareas en el DOM
function renderTareas(){
    //limpiar la lista de tareas en el DOM
    tareaList.innerHTML='';
   //Iterar sobre todas las tareas
   tareas.forEach(tarea =>{
    const li= document.createElement('li');
    li.textContent= tarea.descripcion;
 

    //Boton para eliminar tarea
    const eliminarbtn = document.createElement('button');
    eliminarbtn.textContent="Eliminar"
    eliminarbtn.classList.add('eliminar-btn')
    eliminarbtn.addEventListener('click', ()=>{
        eliminarTarea(tarea);
    })

    //Agregar clase completado si la tarea esta completa

    if(tarea.completado){
            li.classList.add('completada');
    }

    //Agregar un evento clic para marcar una tarea completada

    li.addEventListener('click', () => {
        tarea.tareaCompletada();
        renderTareas();
    });

    li.appendChild(eliminarbtn);
    tareaList.appendChild(li);

   });
}

 tareaForm.addEventListener('submit', event =>{
    event.preventDefault();
    const descripcion= tareaInput.value.trim();
 if(descripcion !== ''){
    addTask(descripcion);
    tareaInput.value= "";
}

});

//Funcion para eliminar una tarea
function eliminarTarea(tareaEliminar){
   tareas= tareas.filter(tarea => tarea !== tareaEliminar);
   renderTareas();
}

//Renderizar la lista de tareas al cargar la pagina
renderTareas()
















































/* import { tarea } from "./task.js";

const tareaForm = document.getElementById('task-form');
const tareaInput= document.getElementById('task-input');
const tareaList= document.getElementById('task-list')

let tareas = [];

function addTask(descripcion){
    const nuevaTarea = (descripcion);
    tareas.push(nuevaTarea);

    renderTareas();
}

function renderTareas(){
    tareaList.innerHTML='';

    tareas.forEach(tarea =>{
        const li= document.createElement('li');
        li.textContent= tarea.descripcion;
        tareaList.appendChild(li);
    });
}

tareaForm.addEventListener('submit', event =>{
    event.preventDefault();
    const descripcion= tareaInput.value.trim();
    if(descripcion !== ''){
        addTask(descripcion);
        tareaInput.value='';

    }
   
});

renderTareas();




 */




























