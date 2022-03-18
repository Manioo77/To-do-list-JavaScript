window.addEventListener("load", () => {
  const boxForm = document.querySelector("#newTaskForm");
  const boxInput = document.querySelector("#newTaskInput");
  const boxListElement = document.querySelector("#tasks");

  boxForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = boxInput.value;

    if (!task) {
      alert("Proszę, wpisz swoje zadanie");
      return;
    }

    const boxTaskElement = document.createElement("div");
    boxTaskElement.classList.add("task");

    const boxTaskContentElement = document.createElement("div");
    boxTaskContentElement.classList.add("content");

    boxTaskElement.appendChild(boxTaskContentElement);

    boxListElement.appendChild(boxTaskElement);
  });
});
