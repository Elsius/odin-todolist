import { addItem, createProjectElement, TodoElement } from "./todo";

// initial HTML load
function init() {
  document.body.innerHTML = `
<nav>
    <div>
      <button>Menu</button>
      <button>Home</button>
      <input type="text">
    </div>
    <div>
      user stuff here
    </div>
  </nav>
  <sidebar>
    <button id="todayToDo">Today</button>
    <div id="projects">
      <button id="viewAllProjects">View Projects</button>
    </div>
  </sidebar>
  <main>
  <h1 id='projectHead'></h1>
    <div id='itemList'></div>
  </main>`;
  // call storage loading function here
  initStorage();
}

// storage logic
function initStorage() {
  const projects = JSON.parse(localStorage.getItem("projects"));
  const itemList = document.getElementById("itemList");
  console.table(projects);
  if (projects) {
    // what to do when data is found.
    const header = document.getElementById("projectHead");
    header.textContent = `To Do`;
    // populate itemList with list of projects
    for (let i = 0; i < projects.length; i++) {
      const projectElement = createProjectElement(projects[i]);
      itemList.appendChild(projectElement);
    }
    // new item here
    itemList.appendChild(addItem());
  } else {
    // what to do if nothing was pulled
    // initProjects()?
    console.log(`nothing was pulled! tasklist was ${projects}`);
  }
}
function populateTodos(projects) {
  // adds Todos of project to itemList, needs rewrite
  console.log("populate to dos!");
  console.log(projects);
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";
  const projectName = document.getElementById("projectHead");
  projectName.textContent = `${projects.title}`;
  // for loop that reads over projects object and creates TODOs and pins to DOM
  for (let i = 0; i < projects.tasks.length; i++) {
    const task = new TodoElement(projects.tasks[i]);
    itemList.appendChild(task);
  }
  itemList.appendChild(addItem())
}
/* we can use localstorage to store data, but it must be converted with JSON.stringify
localStorage.setItem('tasks',JSON.stringify(task1data))
after which, we must convert it back with JSON.parse
const task2Data = localStorage.getItem('tasks')
const task2 = new TodoElement(JSON.parse(task2Data)) */
export { init, populateTodos };
