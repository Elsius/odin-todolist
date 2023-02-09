import { render } from "./dom.js";
class TodoData {
    constructor(title, description, dueDate, priority, notes, checked) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checked = checked;
    }
}

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.tasks = [];
    }
}

class TodoElement {
    constructor(todoData) {
        const todoElement = document.createElement("div");

        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        todoElement.appendChild(checkboxInput);

        const title = document.createElement("div");
        title.textContent = todoData.title;
        todoElement.appendChild(title);

        const description = document.createElement("div");
        description.textContent = todoData.description;
        todoElement.appendChild(description);

        const priority = document.createElement("div");
        priority.textContent = todoData.priority;
        todoElement.appendChild(priority);

        const buttonBox = document.createElement("div");

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "D";
        buttonBox.appendChild(deleteButton);

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.textContent = "E";
        buttonBox.appendChild(editButton);

        todoElement.appendChild(buttonBox);

        todoElement.classList.add("todo");
        if (todoData.checked === true) {
            todoElement.getElementsByTagName("input")[0].checked = true;
        }
        return todoElement;
    }
}

function createProjectElement(projects) {
    const projectElement = document.createElement("button");

    const input = document.createElement("input");
    input.type = "checkbox";

    const titleDiv = document.createElement("div");
    titleDiv.textContent = projects.title;

    const descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = projects.description;

    const buttonsDiv = document.createElement("div");

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "D";
    buttonsDiv.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.className = "edit";
    editButton.textContent = "E";
    buttonsDiv.appendChild(editButton);

    projectElement.appendChild(input);
    projectElement.appendChild(titleDiv);
    projectElement.appendChild(descriptionDiv);
    projectElement.appendChild(buttonsDiv);
    projectElement.addEventListener("click", () => render.populateTodos(projects));
    projectElement.classList.add("todo");
    return projectElement;
}

function addItem(type) {
    const container = document.createElement("button");
    container.textContent = "New Item";
    container.classList.add("todo");
    if (type === "todo") {
        container.addEventListener("click", () =>
            document.body.appendChild(render.createItemUI(type))
        );
    } else {
        container.addEventListener("click", () =>
            document.body.appendChild(render.createItemUI())
        );
    }
    return container;
}

// storage function?
function storeNewData(type) {
    if (type == "todo") {
        // grabs current project and appends task to it
    }
}

// document.body.appendChild(createItemUI('todo'))
export {
    TodoData,
    Project,
    TodoElement,
    createProjectElement,
    addItem,
};
