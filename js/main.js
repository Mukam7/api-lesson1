const usersContainer = document.querySelector(".users-cards");

let page = 1;
let limit = 10;

function getCardUsers({
  id,
  name,
  username,
  email,
  address: {
    geo: { lat, lng },
  },
  company: { name: companyName },
}) {
  return `
    <div class="user-card">
      <h2>${name}</h2>
      <h2>${username}</h2>
      <a href="#">${email}</a>
      <p>${lat}</p>
      <p>${lng}</p>
      <h2>${companyName}</h2>
      <div class="user-btn">
      <button><a class="user_btn-todos" onclick="saveId(${id})" href="todos.html">User todos</a></button>
      <button><a class="user_btn-post" onclick="saveId(${id})" href="post.html">User post</a></button>
      <button><a class="user_btn-album" onclick="saveId(${id})" href="album.html">User album</a></button>
      <button><a class="user_btn-photos" onclick="saveId(${id})" href="photos.html">User photos</a></button>
      </div>
    </div>
  `;
}

function saveId(id) {
  localStorage.setItem("usersId", id);
}

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  usersContainer.innerHTML = "";
  users.forEach((user) => {
    usersContainer.innerHTML += getCardUsers(user);
  });
}

getUser();
