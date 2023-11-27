const users = [
    { username: 'admin', password: 'password' }
];

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username == username && u.password == password);

    if (user) {
        window.location.href = 'admin.html';
    } else {
        showMessage('Credenciales incorrectas. Inténtelo de nuevo.');
    }
}

/* local storage para guardar la información en el navegador*/
localStorage.setItem("Nombre de usuario" , "sabor italia");

/*Aqui muestra la información guardada en el navegador por local storage*/ 
let usuarioGuardado = localStorage.getItem("Nombre de usuario");
console.log("Los usuarios logueados  son: ", usuarioGuardado );