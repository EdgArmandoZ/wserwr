//Definir la clase Task
export function Tarea(descripcionTarea){
   this.descripcion = descripcionTarea;
   this.completado = false;
}

//Metodo para marcar la tarea como completada
Tarea.prototype.tareaCompletada= function(){
    this.completado = !this.completado;
}

