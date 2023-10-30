fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const first15Posts = posts.slice(0, 15);
        const postariContainer = document.getElementById('postari');
        first15Posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                        <hr>
                    `;
            postariContainer.appendChild(postElement);
        });
    })







