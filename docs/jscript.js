
let contador =  1;
document.getElementById("btnAgregar").addEventListener("click",agregarTarea);

function agregarTarea(){
    let tarea = document.getElementById("tareaAgregar").value;

    if(tarea.length !== 0){
    
        let contenedor = document.createElement("div");
        let etiqueta=document.createElement('label');
        let boton = document.createElement("button");
        let i = document.createElement("i");

        contenedor.id = "id" + contador;
        etiqueta.textContent = tarea;
        
        boton.addEventListener('click', function (event){
            elementoPadre = event.currentTarget.parentNode;
            console.log(elementoPadre);
            elementoPadre.remove();
        });

        boton.classList.add("btn");
        i.classList.add("fa", "fa-trash");
        
        document.getElementById("seccion").appendChild(contenedor);
        document.getElementById(contenedor.id).appendChild(etiqueta);
        document.getElementById(contenedor.id).appendChild(boton).appendChild(i);
        
        contador ++;

    }
}



