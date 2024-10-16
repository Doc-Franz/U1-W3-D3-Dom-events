const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.onsubmit = function (event) {
  event.preventDefault();

  const task = document.getElementById("task");
  const taskName = task.value;

  const div = document.createElement("div");
  const li = document.createElement("li");
  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Delete task";
  li.textContent = taskName;
  ul.appendChild(div);
  div.appendChild(li);
  div.appendChild(buttonDelete);

  task.value = "";

  const listSelected = document.querySelector("li");
  li.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  buttonDelete.onclick = function () {
    div.remove();
  };
};
