// Globals
var newTaskInput = document.getElementById('new-task'),
    addButton = document.getElementsByTagName('button')[0],
    incompleteTaskHolder = document.getElementById('incomplete-tasks'),
    completedTaskHolder = document.getElementById('completed-tasks');

// creates new task list element
var newTaskElement = function(taskString) {
  // Creats a list task item
  var listItem = document.createElement('li'),
      checkbox = document.createElement('input'),
      label = document.createElement('label'),
      editInput = document.createElement('input'),
      editButton = document.createElement('button'),
      deleteButton = document.createElement('button');

  // appending elements
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
};

var addTask = function() {
  console.log('adding');
  // calls newTaskElement() to create a new task
  var listItem = newTaskElement('New tasks');

  // appending to incompleteTaskHolder
  incompleteTaskHolder.appendChild(listItem);

};

var editTask = function() {
  console.log('editing');
  // body...
};

var deleteTask = function() {
  console.log('deleting');
  // body...
};

var completedTask = function() {
  console.log('completeing tasks');
  // body...
};

var incompleteTask = function() {
  console.log("tasks still incomlete");
  // body...
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  var checkBox = taskListItem.querySelector('input[type=checkbox]'),
      editButton = taskListItem.querySelector('Button.edit'),
      deleteButton = taskListItem.querySelector('button.delete');

      // Sets onclick handlers
      editButton.onclick = editTask;
      deleteButton.ocnlick = deleteTask;
      checkBox.onchange = checkBoxEventHandler;
      console.log('Binding');
};

// Sets click handler to tasks()'s
addButton.onclick = addTask;

// iterates through all the incomplete list items
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
  // stores child list item in var
  var listItem = incompleteTaskHolder.children[i];
  // binds events to completedTasks()
  bindTaskEvents(listItem, completedTask);
}

// iterates through all the completed list items
for (var i = 0; i < completedTaskHolder.children.length; i++) {
  // stores child list item in var
  var listItem = completedTaskHolder.children[i];
  // binds events to incompletedTasks()
  bindTaskEvents(listItem, incompleteTask);
}
