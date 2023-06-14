const commentsContainer = document.querySelector('.comments-cards')

function getCardComments({ name, body, email }) {
	return `
  <div class="comments-card">
    <h3>${name}</h3>
    <div class='comments-btn'>
      <a href='#'>${email}</a>
    </div>
    <p>${body}</p>
  </div>
  `
}

async function getUser() {
	let commentsId = localStorage.getItem('usersId')
	let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${commentsId}/comments`)
	let comments = await res.json()
	commentsContainer.innerHTML = ''
	comments.forEach(element => {
		commentsContainer.innerHTML += getCardComments(element)
	})
}

getUser()