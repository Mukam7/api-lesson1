const todosContainer = document.querySelector(".todos-cards");

function getCardTodos({ id, title, completed }) {
  return `
	<div class='todos-card'>
        <h1>${id}</h1>
		<h3>${title}</h3>
		<p>${completed}</p>
	</div>
  `;
}

async function getUser() {
  let todosId = localStorage.getItem("usersId");
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${todosId}/todos`
  );
  let todos = await res.json();
  todosContainer.innerHTML = "";
  todos.forEach((element) => {
    todosContainer.innerHTML += getCardTodos(element);
  });
}

getUser();
