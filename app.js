
const btnAdd = document.getElementById("btnAddTask")
const btnClear = document.getElementById("btnClear")

const selectorCategory = document.getElementById("category")
const inputTwo = document.getElementById("inputTwo")

const textOne = document.getElementById("inputOne")

const tskList = document.getElementById("taskList")


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
    if (selectorCategory.value === "Trabajo") {
        newTask.textContent = `💼 Trabajo: ${textOne.value}`;
    }
    else if (selectorCategory.value === "Estudio") {
        newTask.textContent = `📚 Estudio: ${textOne.value}`;
    }
    else if (selectorCategory.value === "Personal") {
        newTask.textContent = `🏠 Personal:  ${textOne.value}`;
    }
    else if (selectorCategory.value === "Urgente") {
        newTask.textContent = `🔴 Urgente: ${textOne.value}`;
    }
    else {
        newTask.textContent = `📝 ${inputTwo.value}: ${textOne.value}`;
    }
    newTask.id = `task${contadorY}`;

    if (textOne.value === "" || selectorCategory.value === "") {
        alert("Por favor, ingrese una TAREA o CATEGORÍA válida.");
        return;
    }
    else {
        //! Agregar los checkboxes al nuevo elemento de lista, y creamos nombre de clase.
        taskCheck.classList.add("checkHecho");
        taskImportant.classList.add("checkImportant");
        newTask.appendChild(taskCheck);
        newTask.appendChild(taskImportant);

        tskList.appendChild(newTask);

        Y.textContent = Y.textContent;
        Y.textContent++;
        contadorY++;

    }
})

selectorCategory.addEventListener("change", function () {
    if (selectorCategory.value == "Otra") {
        inputTwo.style.opacity = "1";
    }
    else {
        inputTwo.style.opacity = "0";
    }
});

btnClear.addEventListener("click", function () {
    const checks = document.querySelectorAll(".checkHecho");
    let confirmacion = confirm("¿Desea eliminar las tareas seleccionadas?");

    checks.forEach(check => {
        if (check.checked && confirmacion) {
            const item = check.closest("li");
            item.remove();
            X.textContent = X.textContent;
            X.textContent++;
        }
    })
});