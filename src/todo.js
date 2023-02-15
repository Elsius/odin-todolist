import { render } from "./dom.js";
class TodoData {
  constructor(input) {
    this.title = input.title;
    this.description = input.description;
    this.dueDate = input.date;
    this.priority = input.priority;
    this.notes = input.notes;
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
  constructor(todoData,itemIndex) {
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
    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation()
      state.deleteData(itemIndex)
      render.populateTodos(state.data[state.currentPage])
    })

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

function createProjectElement(projects,projectIndex) {
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
  deleteButton.addEventListener('click', (e) => {
    e.stopPropagation()
    state.deleteData(projectIndex)
    render.main()
  })

  const editButton = document.createElement("button");
  editButton.className = "edit";
  editButton.textContent = "E";
  buttonsDiv.appendChild(editButton);
  editButton.addEventListener('click', (e) => {
    e.stopPropagation()
  })

  projectElement.appendChild(input);
  projectElement.appendChild(titleDiv);
  projectElement.appendChild(descriptionDiv);
  projectElement.appendChild(buttonsDiv);
  projectElement.addEventListener("click", () =>{
      render.populateTodos(projects)
      state.currentPage = projectIndex
  }
  );
  projectElement.classList.add("todo");
  return projectElement;
}

function addItem(type) {
  const container = document.createElement("button");
  container.textContent = "New Item";
  container.classList.add("todo");
  container.addEventListener("click", () =>
    document.body.appendChild(createItemUI(type))
  );
  return container;
}
function createItemUI(type,edit) {
  // add edit arg, if edit exists, prefill the form and change submit to change data instead of adding
  // if type == todo, create inputs for additional args
  // newItemOverlay position should be detached from DOM
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
  createInputWithLabel("Title", "title");
  createInputWithLabel("Description", "description");

  if (type == "todo") {
    createInputWithLabel("Due-Date", "date");
    createInputWithLabel("Priority", "priority");
    createInputWithLabel("Notes", "notes");
    // duedate, priority, notes, checked
  }

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  overlayContainer.appendChild(submitButton);
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const inputs = overlayContainer.elements;
    const inputData = {};
    for (let i = 0; i < inputs.length - 1; i++) {
      inputData[inputs[i].id] = inputs[i].value;
    }
    // clean inputted data here
    // if inputCheck(inputData) returns true, state.addData(inputData,type) and delete the overlay, else return error
    // add cleaned data to storage and remove overlay
    if (edit === undefined){
      state.addData(inputData, type);
    }
  });
  return overlayContainer;
}

// storage function?
const state = {
  data: [],
  currentPage: 'Home',
  init: function () {
    state.data = JSON.parse(localStorage.getItem("projects"));
    if (this.data === null) {
      this.data = [];
    }
    // if projects.length < 1, render intro page?
  },
  save: function(){
    localStorage.setItem("projects", JSON.stringify(state.data))
  },
  addData: function (inputData, type) {
    // currently assuming data is cleaned
    if (type === "todo") {
      // opens up data based on currentPage and appends todo to that project
      const newTodo = new TodoData(inputData)
      this.data[this.currentPage].tasks.push(newTodo)
      this.save()
      render.populateTodos(this.data[this.currentPage])
    } else {
      // append new project to data, save to storage, and render
      const newProject = new Project(inputData.title, inputData.description);
      this.data.push(newProject);
      this.save()
      render.main();
    }
  },
  deleteData: function(index){
    if (this.currentPage === 'Home'){
      this.data.splice(index,1)
    } else {
      this.data[this.currentPage].tasks.splice(index,1)
    }
    this.save()
  },
};
export { TodoData, Project, TodoElement, createProjectElement, addItem, state };
