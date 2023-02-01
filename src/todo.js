import { populateTodos } from "./dom.js";
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
  projectElement.innerHTML = `
        <input type="checkbox">
        <div>
        ${projects.title}
        </div>
        <div>
        ${projects.description}
        </div>
        <div>
          <button class="delete">D</button>
          <button class="edit">E</button>
        </div>`;
  projectElement.addEventListener("click", () => populateTodos(projects));
  projectElement.classList.add("todo");
  return projectElement;
}

function addItem() {
  const container = document.createElement("button");
  container.textContent = "New Item";
  container.classList.add("todo");
  return container;
}
export { TodoData, Project, TodoElement, createProjectElement, addItem };
