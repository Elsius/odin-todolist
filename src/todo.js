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
    todoElement.innerHTML = `
      <input type="checkbox">
      <div>
      ${todoData.title}
      </div>
      <div>
      ${todoData.description}
      </div>
      <div>
      ${todoData.priority}
      </div>
      <div>
        <button class="delete">D</button>
        <button class="edit">E</button>
      </div>`;
    todoElement.classList.add("todo");
    if (todoData.checked === true) {
      todoElement.getElementsByTagName("input")[0].checked = true;
    }
    return todoElement;
  }
}

function addTodo() {
  const container = document.createElement("div");
  container.innerHTML = `
    <button>New Item</button>
    `;
  container.classList.add("todo");
  return container;
}
export { TodoData, Project, TodoElement, addTodo };
