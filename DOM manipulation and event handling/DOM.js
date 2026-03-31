// ============ DOM SELECTION ============
const title = document.getElementById("title")
const taskForm = document.querySelector("#taskForm")
const taskInput = document.querySelector("#taskInput")
const taskList = document.querySelector("#taskList")
const submitBtn = document.querySelector("button[type='submit']")

// ============ DOM CONTENT MANIPULATION ============
title.textContent = "My To-Do List"

// ============ DOM STYLE CHANGES ============
title.style.color = "white"
title.style.marginBottom = "30px"

// ============ CREATE AND ADD NEW TASK FUNCTION ============
function createTaskElement(taskText) {
  // Create list item
  const li = document.createElement("li")
  li.className = "task-item"
  
  // Create task text span
  const taskSpan = document.createElement("span")
  taskSpan.className = "task-text"
  taskSpan.textContent = taskText
  
  // Create delete button
  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete"
  deleteBtn.className = "delete-btn"
  deleteBtn.type = "button"
  
  // Add elements to list item
  li.appendChild(taskSpan)
  li.appendChild(deleteBtn)
  
  return li
}

// ============ ADD TASK TO LIST ============
function addTask(taskText) {
  const taskElement = createTaskElement(taskText)
  taskList.appendChild(taskElement)
}