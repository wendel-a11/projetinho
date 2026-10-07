// ==========================================
// SISTEMA DE BIBLIOTECA
// ==========================================

// Recupera os livros salvos
let livros = JSON.parse(localStorage.getItem("livros")) || [];


// ==========================================
// CADASTRAR / ALTERAR LIVRO
// ==========================================

const formLivro = document.getElementById("formLivro");

if (formLivro) {

    formLivro.addEventListener("submit", function(event) {

        event.preventDefault();

        const id = document.getElementById("id").value;

        const livro = {

            id: id ? Number(id) : Date.now(),

            titulo: document.getElementById("titulo").value,

            autor: document.getElementById("autor").value,

            ano: document.getElementById("ano").value,

            categoria: document.getElementById("categoria").value,

            quantidade: document.getElementById("quantidade").value
        };


        // ALTERAÇÃO

        if (id) {

            livros = livros.map(function(item) {

                if (item.id === Number(id)) {
                    return livro;
                }

                return item;

            });

            alert("Livro alterado com sucesso!");

        }

        // CADASTRO

        else {

            livros.push(livro);

            alert("Livro cadastrado com sucesso!");
        }


        // Salva no navegador

        localStorage.setItem(
            "livros",
            JSON.stringify(livros)
        );


        // Limpa formulário

        formLivro.reset();

        document.getElementById("id").value = "";

    });

}


// ==========================================
// LISTAR LIVROS
// ==========================================

function mostrarLivros(lista = livros) {

    const container =
        document.getElementById("listaLivros");

    if (!container) {
        return;
    }


    container.innerHTML = "";


    // Nenhum livro

    if (lista.length === 0) {

        container.innerHTML =
            "<p>Nenhum livro cadastrado.</p>";

        return;
    }


    // Mostra os livros

    lista.forEach(function(livro) {

        const div = document.createElement("div");

        div.className = "livro";


        div.innerHTML = `

            <h3>${livro.titulo}</h3>

            <p>
                <strong>Autor:</strong>
                ${livro.autor}
            </p>

            <p>
                <strong>Ano:</strong>
                ${livro.ano}
            </p>

            <p>
                <strong>Categoria:</strong>
                ${livro.categoria}
            </p>

            <p>
                <strong>Quantidade:</strong>
                ${livro.quantidade}
            </p>

            <div class="acoes">

                <button
                    class="botao btn-editar"
                    onclick="editarLivro(${livro.id})"
                >
                    Editar
                </button>

                <button
                    class="botao btn-excluir"
                    onclick="excluirLivro(${livro.id})"
                >
                    Excluir
                </button>

            </div>
        `;


        container.appendChild(div);

    });

}


// ==========================================
// EXCLUIR LIVRO
// ==========================================

function excluirLivro(id) {

    const confirmar = confirm(
        "Deseja realmente excluir este livro?"
    );


    if (!confirmar) {
        return;
    }


    livros = livros.filter(function(livro) {

        return livro.id !== id;

    });


    localStorage.setItem(
        "livros",
        JSON.stringify(livros)
    );


    mostrarLivros();

    alert("Livro excluído com sucesso!");
}


// ==========================================
// EDITAR LIVRO
// ==========================================

function editarLivro(id) {

    const livro = livros.find(function(item) {

        return item.id === id;

    });


    if (!livro) {
        return;
    }


    localStorage.setItem(
        "livroEditar",
        JSON.stringify(livro)
    );


    window.location.href = "cadastro.html";
}


// ==========================================
// CARREGAR LIVRO PARA EDIÇÃO
// ==========================================

if (formLivro) {

    const livroEditar =
        JSON.parse(
            localStorage.getItem("livroEditar")
        );


    if (livroEditar) {

        document.getElementById("id").value =
            livroEditar.id;

        document.getElementById("titulo").value =
            livroEditar.titulo;

        document.getElementById("autor").value =
            livroEditar.autor;

        document.getElementById("ano").value =
            livroEditar.ano;

        document.getElementById("categoria").value =
            livroEditar.categoria;

        document.getElementById("quantidade").value =
            livroEditar.quantidade;


        localStorage.removeItem("livroEditar");
    }
}


// ==========================================
// PESQUISA DE LIVROS
// ==========================================

const pesquisa =
    document.getElementById("pesquisa");


if (pesquisa) {

    pesquisa.addEventListener(
        "input",
        function() {

            const texto =
                pesquisa.value.toLowerCase();


            const resultado =
                livros.filter(function(livro) {

                    return (

                        livro.titulo
                            .toLowerCase()
                            .includes(texto)

                        ||

                        livro.autor
                            .toLowerCase()
                            .includes(texto)

                    );

                });


            mostrarLivros(resultado);

        }
    );

}


// ==========================================
// FORMULÁRIO DE CONTATO
// ==========================================

const formContato =
    document.getElementById("formContato");


if (formContato) {

    formContato.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Mensagem enviada com sucesso!"
            );

            formContato.reset();

        }
    );

}


// ==========================================
// FORMULÁRIO DE EMPRÉSTIMO
// ==========================================

const formEmprestimo =
    document.getElementById("formEmprestimo");


if (formEmprestimo) {

    formEmprestimo.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Empréstimo registrado com sucesso!"
            );

            formEmprestimo.reset();

        }
    );

}


// ==========================================
// MOSTRAR LIVROS
// ==========================================

mostrarLivros();
