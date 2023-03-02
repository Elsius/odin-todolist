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
  constructor(todoData, itemIndex) {
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

    const dueDate = document.createElement("div");
    dueDate.textContent = todoData.dueDate;
    todoElement.appendChild(dueDate);

    const buttonBox = document.createElement("div");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "D";
    buttonBox.appendChild(deleteButton);
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      state.deleteData(itemIndex);
      render.populateTodos(state.data[state.currentPage]);
    });

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "E";
    buttonBox.appendChild(editButton);
    editButton.addEventListener("click", (e) => {
      e.stopPropagation();
      createItemUI("todo", itemIndex);
    });

    todoElement.appendChild(buttonBox);

    todoElement.classList.add("todo");
    if (todoData.checked === true) {
      todoElement.getElementsByTagName("input")[0].checked = true;
    }
    return todoElement;
  }
}

function createProjectElement(projects, projectIndex) {
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
  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    state.deleteData(projectIndex);
    render.main();
  });

  const editButton = document.createElement("button");
  editButton.className = "edit";
  editButton.textContent = "E";
  buttonsDiv.appendChild(editButton);
  editButton.addEventListener("click", (e) => {
    e.stopPropagation();
    createItemUI("", projectIndex);
  });

  projectElement.appendChild(input);
  projectElement.appendChild(titleDiv);
  projectElement.appendChild(descriptionDiv);
  projectElement.appendChild(buttonsDiv);
  projectElement.addEventListener("click", () => {
    render.populateTodos(projects);
    state.currentPage = projectIndex;
  });
  projectElement.classList.add("todo");
  return projectElement;
}

function addItem(type) {
  const container = document.createElement("button");
  container.textContent = "New Item";
  container.classList.add("todo");
  container.addEventListener("click", () => createItemUI(type));
  return container;
}
function createItemUI(type, editIndex) {
  // add edit arg, if edit exists, prefill the form and change submit to change data instead of adding
  // edit arg is item index so it can be called and filled with info it will be editing
  // if type == todo, create inputs for additional args
  // newItemOverlay position should be detached from DOM
  if (document.getElementById("newItemOverlay")) {
    // check for existing
    document.getElementById("newItemOverlay").outerHTML = "";
  }
  const overlayContainer = document.createElement("form");
  overlayContainer.id = "newItemOverlay";
  document.body.appendChild(overlayContainer);

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
    createInputWithLabel("Date Due", "date","date");
    createInputWithLabel("Priority", "priority");
    createInputWithLabel("Notes", "notes");
    // duedate, priority, notes, checked
  }
  // check for edit arg to fill in form
  // if (edit == true){ fillUI()} ???
  if (editIndex !== undefined) {
    const editTitle = document.getElementById("title");
    const editDesc = document.getElementById("description");
    editTitle.value = state.data[editIndex].title;
    editDesc.value = state.data[editIndex].description;
    if (state.currentPage !== "Home") {
      const currentTask = state.data[state.currentPage].tasks[editIndex];
      const editDueDate = document.getElementById("date");
      const editPriority = document.getElementById("priority");
      const editNotes = document.getElementById("notes");
      editTitle.value = currentTask.title;
      editDesc.value = currentTask.description;
      editDueDate.value = currentTask.dueDate;
      editPriority.value = currentTask.priority;
      editNotes.value = currentTask.notes;
    }
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
    // if edit = true, check data by edit location, else add cleaned data to storage and remove overlay
    if (editIndex === undefined) {
      // undefined means not an edit, so submit as new data
      state.addData(inputData, type);
    } else if (editIndex !== undefined) {
      state.editData(inputData, editIndex);
    }
  });
}

// storage function?
const state = {
  data: [],
  currentPage: "Home",
  init: function () {
    state.data = JSON.parse(localStorage.getItem("projects"));
    if (this.data === null) {
      this.data = [];
    }
    // if projects.length < 1, render intro page?
  },
  save: function () {
    localStorage.setItem("projects", JSON.stringify(state.data));
  },
  addData: function (inputData, type) {
    // currently assuming data is cleaned
    if (type === "todo") {
      // opens up data based on currentPage and appends todo to that project
      const newTodo = new TodoData(inputData);
      this.data[this.currentPage].tasks.push(newTodo);
      this.save();
      render.populateTodos(this.data[this.currentPage]);
    } else {
      // append new project to data, save to storage, and render
      const newProject = new Project(inputData.title, inputData.description);
      this.data.push(newProject);
      this.save();
      render.main();
    }
  },
  deleteData: function (index) {
    if (this.currentPage === "Home") {
      this.data.splice(index, 1);
    } else {
      this.data[this.currentPage].tasks.splice(index, 1);
    }
    this.save();
  },
  // pass in arguments state.currentPage, index of item
  // if currentPage = Home, its a project edit, else its a todo
  // when submitting, if its a home, edit info at projectIndex, else edit info at projectIndex/Todo index.
  editData: function (inputData, index) {
    if (this.currentPage === "Home") {
      this.data[index].title = inputData.title;
      this.data[index].description = inputData.description;
      this.save();
      render.main();
    } else {
      // call createItemUI, pass in arg for todo and index of item clicked
      // createItemUI('todo','0') should prefill form with first task of the project at state.currentPage
      const oldTask = state.data[state.currentPage].tasks[index];
      oldTask.title = inputData.title;
      oldTask.description = inputData.description;
      oldTask.notes = inputData.notes;
      oldTask.priority = inputData.priority;
      oldTask.dueDate = inputData.date;
      this.save();
      render.populateTodos(state.data[this.currentPage]);
    }
  },
};
export { TodoData, Project, TodoElement, createProjectElement, addItem, state };
