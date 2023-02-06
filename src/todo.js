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

function addItem(type) {
  const container = document.createElement("button");
  container.textContent = "New Item";
  container.classList.add("todo");
  if (type === "todo") {
    container.addEventListener("click", () =>
      document.body.appendChild(createItemUI(type))
    );
  } else {
    container.addEventListener("click", () =>
      document.body.appendChild(createItemUI())
    );
  }
  return container;
}

function createItemUI(type) {
  // if type == todo, create inputs for additional args
  // newItemOverlay position should be detached from DOM
  if (document.getElementById("newItemOverlay")) {
    document.getElementById("newItemOverlay").outerHTML = "";
  }
  const overlayContainer = document.createElement("form");
  overlayContainer.id = "newItemOverlay";

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("inputOverlay");
  overlayContainer.appendChild(inputContainer);

  const createInputWithLabel = (labelText, inputId, inputType = "text") => {
    const inputBox = document.createElement("div");
    inputContainer.appendChild(inputBox);
    const label = document.createElement("label");
    label.setAttribute("for", inputId);
    const labelTextNode = document.createTextNode(labelText);
    label.appendChild(labelTextNode);
    const input = document.createElement("input");
    input.id = inputId;
    input.type = inputType;
    inputBox.appendChild(label);
    inputBox.appendChild(input);
  };
  createInputWithLabel("Title", "inputTitle");
  createInputWithLabel("Description", "inputDescription");

  if (type == "todo") {
    createInputWithLabel("Due-Date", "inputDate");
    createInputWithLabel("Priority", "inputPriority");
    createInputWithLabel("Notes", "inputNotes");
    // duedate, priority, notes, checked
  }

  const addButton = document.createElement("button");
  addButton.textContent = "Submit";
  overlayContainer.appendChild(addButton);
  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    const inputs = overlayContainer.elements;
    const inputData = {};
    for (let i = 0; i < inputs.length - 1; i++) {
      inputData[inputs[i].id] = inputs[i].value;
    }
    console.log(inputData);
    // this data should be inputted to a storage function then delete the ui

    document.getElementById("newItemOverlay").outerHTML = "";
  });
  return overlayContainer;
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
  createItemUI,
};
