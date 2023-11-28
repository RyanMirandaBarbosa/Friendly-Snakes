// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function logout() {
    sessionStorage.clear();
    window.location = "../Login.html";
}

// carregamento (loading)
function aguardar() {
    var loading = document.getElementById("loading");
    loading.style.display = "flex";
}

function finalizarAguardar(texto) {
    var loading = document.getElementById("loading");
    loading.style.display = "none";

    // var divErrosLogin = document.getElementById("div_erros_login");
    // if (texto) {
    //     divErrosLogin.style.display = "flex";
    //     divErrosLogin.innerHTML = texto;
    // }
}

