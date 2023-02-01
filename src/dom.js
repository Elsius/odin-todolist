import { addItem, createProjectElement, TodoElement } from "./todo";
let projects = {};
// initial HTML load
function init() {
  const nav = document.createElement("nav");
  const navDiv1 = document.createElement("div");
  const menuButton = document.createElement("button");
  const homeButton = document.createElement("button");
  const inputText = document.createElement("input");
  const navDiv2 = document.createElement("div");
  const navUserStuff = document.createTextNode("user stuff here");
  const sidebar = document.createElement("sidebar");
  const todayToDoButton = document.createElement("button");
  const projects = document.createElement("div");
  const viewAllProjectsButton = document.createElement("button");
  const main = document.createElement("main");
  const projectHead = document.createElement("h1");
  const itemList = document.createElement("div");

  menuButton.textContent = "Menu";
  homeButton.textContent = "Home";
  inputText.type = "text";
  todayToDoButton.textContent = "Today";
  todayToDoButton.id = "todayToDo";
  viewAllProjectsButton.textContent = "View Projects";
  viewAllProjectsButton.id = "viewAllProjects";
  projectHead.id = "projectHead";
  itemList.id = "itemList";

  navDiv1.appendChild(menuButton);
  navDiv1.appendChild(homeButton);
  navDiv1.appendChild(inputText);
  nav.appendChild(navDiv1);
  nav.appendChild(navDiv2);
  navDiv2.appendChild(navUserStuff);
  sidebar.appendChild(todayToDoButton);
  projects.appendChild(viewAllProjectsButton);
  sidebar.appendChild(projects);
  main.appendChild(projectHead);
  main.appendChild(itemList);
  document.body.appendChild(nav);
  document.body.appendChild(sidebar);
  document.body.appendChild(main);

  document
    .getElementById("viewAllProjects")
    .addEventListener("click", initStorage);
  // call storage loading function here
  initStorage();
}

// storage logic
function initStorage() {
  projects = JSON.parse(localStorage.getItem("projects"));
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";
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
  // adds Todos of project to itemList
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";
  const projectName = document.getElementById("projectHead");
  projectName.textContent = `${projects.title}`;
  // for loop that reads over projects object and creates TODOs and pins to DOM
  for (let i = 0; i < projects.tasks.length; i++) {
    const task = new TodoElement(projects.tasks[i]);
    itemList.appendChild(task);
  }
  itemList.appendChild(addItem());
}

/* we can use localstorage to store data, but it must be converted with JSON.stringify
localStorage.setItem('tasks',JSON.stringify(task1data))
after which, we must convert it back with JSON.parse
const task2Data = localStorage.getItem('tasks')
const task2 = new TodoElement(JSON.parse(task2Data)) */
export { init, populateTodos };
