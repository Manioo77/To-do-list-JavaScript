window.addEventListener("load", () => {
  const boxForm = document.querySelector("#newTaskForm");
  const boxInput = document.querySelector("#newTaskInput");
  const boxListElement = document.querySelector("#tasks");

  boxForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = boxInput.value;

    if (!task) {
      alert("Please enter the task");
      return;
    }

    const boxTaskElement = document.createElement("div");
    boxTaskElement.classList.add("task");

    const boxTaskContentElement = document.createElement("div");
    boxTaskContentElement.classList.add("content");

    boxTaskElement.appendChild(boxTaskContentElement);

    boxListElement.appendChild(boxTaskElement);

    const taskInputElement = document.createElement("input");
    taskInputElement.classList.add("text");
    taskInputElement.type = "text";
    taskInputElement.value = task;
    taskInputElement.setAttribute("readonly", "readonly");

    boxTaskContentElement.appendChild(taskInputElement);

    const taskActionElement = document.createElement("div");
    taskActionElement.classList.add("actions");

    const taskEditElement = document.createElement("button");
    taskEditElement.classList.add("edit");
    taskEditElement.innerHTML = "edit";

    const taskDeleteElement = document.createElement("button");
    taskDeleteElement.classList.add("delete");
    taskDeleteElement.innerHTML = "done";

    taskActionElement.appendChild(taskEditElement);
    taskActionElement.appendChild(taskDeleteElement);

    boxTaskElement.appendChild(taskActionElement);

    boxListElement.appendChild(boxTaskElement);

    boxInput.value = "";

    taskEditElement.addEventListener("click", () => {
      if (taskEditElement.innerHTML.toLowerCase() == "edit") {
        taskInputElement.removeAttribute("readonly");
        taskInputElement.focus();
        taskEditElement.innerHTML = "Save";
      } else {
        taskInputElement.setAttribute("readonly", "readonly");
        taskEditElement.innerHTML = "edit";
      }
    });

    taskDeleteElement.addEventListener("click", () => {
      boxListElement.removeChild(boxTaskElement);
    });
  });
});
