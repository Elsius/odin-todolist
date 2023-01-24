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
    
  </main>`;
}

export { init };
