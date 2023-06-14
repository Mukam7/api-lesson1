const postContainer = document.querySelector('.post-cards')

function getCardPost({id , title, body }) {
	return `
  <div class="post-card">
    <h1>${id}</h1>
    <h3>${title}</h3>
    <p>${body}</p>
    <div class='post-btn'>
      <a href='comment.html' onclick='savePostId(${id})'>Comments</a>
    </div>
  </div>
  `
}

async function getUser() {
	let postId = localStorage.getItem('usersId')
	let res = await fetch(
		`https://jsonplaceholder.typicode.com/users/${postId}/posts`
	)
	let post = await res.json()
	postContainer.innerHTML = ''
	post.forEach(element => {
		postContainer.innerHTML += getCardPost(element)
	})
}
getUser()