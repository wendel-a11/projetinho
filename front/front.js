const formLogin = document.getElementById("formLogin");

if (formLogin) {

    formLogin.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Login realizado!");

        window.location.href = "livros.html";
    });
}


const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {

    formCadastro.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Usuário cadastrado!");

        window.location.href = "index.html";
    });
}


const formLivro = document.getElementById("formLivro");

if (formLivro) {

    formLivro.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Livro cadastrado!");

        window.location.href = "livros.html";
    });
}


const formEditarLivro = document.getElementById("formEditarLivro");

if (formEditarLivro) {

    formEditarLivro.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Livro alterado!");

        window.location.href = "livros.html";
    });
}


function excluirLivro() {

    const confirmar = confirm(
        "Tem certeza que deseja excluir este livro?"
    );

    if (confirmar) {
        alert("Livro excluído!");
    }
}
