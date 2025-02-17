alert("¡Bienvenido a nuestra página web!");

let task=[];
//agg una tarea nueva acon info de formulario
document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();//evitar el evio del formulario de forma automatica
    //obtener varios valores

    // variable de tipo let es global, variable de tipo var     , y la variable de tipo const...
    const title= document.getElementById("title").value;
    const date= document.getElementById("date").value;
    const status= document.getElementById("status").value;
    // crear tarea como un diccionario o registro y agg a la lista
    var newTask={title, date, status}
    task.push(newTask);
    //limpiar formulario
    this.reset();
    showTasks();

});

//mostrar tareas creadas
function showTasks(){

const tasklist = document.getElementById("tasklist");
tasklist.innerHTML="";
task.forEach((task,i)=>{

//por cada elemento de la lsita, crear un nuevo elemento html
const NewItem=document.createElement("div")
NewItem.innerHTML= `<h3>${task.title}</h3>
<p><strong>Fecha<trong>${task.date}</p>
<p><strong>Estado</strong>${task.status}</p>`
taskListElement.appendChild(newItem);



})



}

//eliminar tarea seleccionada