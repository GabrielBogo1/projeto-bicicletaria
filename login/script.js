alert ('Entre como usuário digitando - email: user senha: password')
alert ('Ou entre como admin digitando:  email: admin senha: admin')

function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === 'user' && password === 'password') {
        localStorage.setItem('loggedIn', 'true');
        window.location = '../produtos/produtos.html';
    } else if (email == 'admin' && password == 'admin'){
        localStorage.setItem('loggedIn', 'false');
        window.location = '../home/home.html';
    } else {
        alert('Usuário inválido');
    }


}
