const cargarPosts = document.getElementById('cargar');
cargarPosts.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const respuesta = JSON.parse(this.responseText);
            let contenido = '';
            respuesta.forEach(function(post) {
                contenido += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
            });
            document.getElementById('listado').innerHTML = contenido;
        }
    }

    xhr.send();
});