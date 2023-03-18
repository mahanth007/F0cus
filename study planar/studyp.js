// Get the form and table body<--comments for the dev jam project
const addRowForm = document.getElementById("add-row-form");
const tableBody = document.querySelector("tbody");

// Add an event listener to the form
addRowForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input values from the form
  const subjectInput = document.getElementById("subject-input");
  const topicInput = document.getElementById("topic-input");
  const timeInput = document.getElementById("time-input");

  // Create a new table row
  const newRow = document.createElement("tr");

  // Create the table cells for the new row
  const subjectCell = document.createElement("td");
  subjectCell.textContent = subjectInput.value;

  const topicCell = document.createElement("td");
  topicCell.textContent = topicInput.value;

  const timeCell = document.createElement("td");
  timeCell.textContent = timeInput.value;

  const completedCell = document.createElement("td");
  const completedInput = document.createElement("input");
  completedInput.type = "checkbox";
  completedCell.appendChild(completedInput);

  // Add the cells to the new row
  newRow.appendChild(subjectCell);
  newRow.appendChild(topicCell);
  newRow.appendChild(timeCell);
  newRow.appendChild(completedCell);

  // Add the new row to the table
  tableBody.appendChild(newRow);

  // Reset the form
  addRowForm.reset();
});

