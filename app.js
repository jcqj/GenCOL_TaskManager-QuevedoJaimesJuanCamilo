
const btnAdd = document.getElementById("btnAddTask")

const textOne = document.getElementById("inputOne")

const tskList = document.getElementById("taskList")

const btnClear = document.getElementById("btnClear")

let Y = document.getElementById("Y")
let X = document.getElementById("x")

let contadorX = 1;
let contadorY = 1;


btnAdd.addEventListener("click", function () {
    //! Crear un nuevo elemento de lista (li) para la nueva tarea
    const newTask = document.createElement("li");
    //! Crear un nuevo elemento de input para el checkbox de "hecho" y otro para "importante"
    const taskCheck = document.createElement("input");
    const taskImportant = document.createElement("input");
    taskCheck.type = "checkbox";
    taskImportant.type = "checkbox";

    //! Asignar el texto de la nueva tarea al contenido del nuevo elemento de lista
    newTask.textContent = textOne.value;
    newTask.id = `task${contadorY}`;

    // if (textOne.value === "") {
    //     alert("Por favor, ingrese una tarea válida.");
    //     return;
    // }
    // else {
    tskList.appendChild(newTask);
    taskCheck.id = "checkHecho";
    taskImportant.id = "checkImportant";

    tskList.appendChild(taskCheck);
    tskList.appendChild(taskImportant);
    contadorY++;

    Y.textContent = parseInt(contadorY.textContent) + 1;
    // }
})


// btnClear.addEventListener("click", function () {
//     const checkTaskHecho = document.getElementById("checkHecho");
//     if (checkTaskHecho.checked) {
//         tskList.removeChild(checkTaskHecho);
//         contadorY.textContent = parseInt(contadorY.textContent) + 1;
//         console.log("SSSSSSS");

//     }
// })