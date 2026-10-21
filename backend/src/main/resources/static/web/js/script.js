const produtos = [];

function cadastrarProduto(event) {
    event.preventDefault();

    //recupera os dados armazenados
    let produtos =
        JSON.parse(localStorage.getItem("produtos")) || [];

    //captura os dados do formulario
    const codigo = Number(document.getElementById("codigo").value);
    const descricao = document.getElementById("descricao").value;
    const quantidade = Number(document.getElementById("quantidade").value);
    const preco = Number(document.getElementById("preco").value);

    //verifica se o codigo ja existe
    const existe = produtos.some(produto => {
        return Number(produto.codigo) === codigo;
    });

    //interrompe o cadastro se houver duplicidade
    if (existe) {
        alert("Já existe um produto cadastrado com esse código!");
        return;
    }

    //cria o objeto do produto
    const produto = {
        codigo,
        descricao,
        quantidade,
        preco
    };

    produtos.push(produto);

    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );

    alert("Produto cadastrado com sucesso!");

    event.target.reset();
}


async function carregarProdutos() {
    try {
        // Busca os produtos na API Java
        const resposta = await fetch("/api/produtos");

        if (!resposta.ok) {
            throw new Error("Falha ao buscar produtos na API.");
        }

        const produtos = await resposta.json();

        const tabela = document.getElementById("tabelaProdutos");

        tabela.innerHTML = "";

        let quantidadeTotal = 0;
        let valorTotal = 0;

        produtos.forEach(produto => {
            const total = produto.quantidade * produto.preco;

            quantidadeTotal += Number(produto.quantidade);
            valorTotal += total;

            tabela.innerHTML += `
                <tr>
                    <td>${produto.codigo}</td>
                    <td>${produto.descricao}</td>
                    <td>${produto.quantidade}</td>
                    <td>${Number(produto.preco).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}</td>
                    <td>${total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}</td>
                    <td>Em breve</td>
                </tr>
            `;
        });

        // Atualiza o resumo do estoque
        document.getElementById("totalModelos").textContent =
            produtos.length;

        document.getElementById("quantidadeTotal").textContent =
            quantidadeTotal;

        document.getElementById("valorTotal").textContent =
            valorTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });

    } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
        alert("Não foi possível carregar os produtos da API.");
    }
}


function excluirProduto(codigo) {

    //recuperar os produtos cadastrados
    let produtos =
        JSON.parse(localStorage.getItem("produtos")) || [];

    //confirmar a exclusao
    const confirmar = confirm(
        `Deseja excluir o produto ${codigo}?`
    );

    if (!confirmar) {
        return;
    }

    //remove o produto da lista
    produtos = produtos.filter(item => {
        return Number(item.codigo) !== Number(codigo);
    });

    //atualiza os dados armazenados
    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );

    //atualiza a tabela e o resumo
    carregarProdutos();

    alert("Produto excluido com sucesso!");
}

function editarProduto(codigo) {

    //recupera os produtos cadastrados
    let produtos =
        JSON.parse(localStorage.getItem("produtos")) || [];

    //localiza o porduto pelo codigo
    const produtoEncontrado = produtos.find(item => {
        return Number(item.codigo) === Number(codigo);
    });

    //verifica se o produto existe
    if (!produtoEncontrado) {
        alert("Produto não encontrado!")
        return;
    }

    //solicita os nova dados
    const novaDescricao = prompt(
        "Nova descrição:",
        produtoEncontrado.descricao
    );

    if (novaDescricao === null) {
        return;
    }

    const novaQuantidade = prompt(
        "Nova Quantidade:",
        produtoEncontrado.quantidade
    );

    if (novaQuantidade === null) {
        return;
    }

    const novoPreco = prompt(
        "Novo Preço:",
        produtoEncontrado.preco
    );

    if (novoPreco === null) {
        return;
    }

    //converte e valida os dados numericos
    const quantidade = Number(novaQuantidade);
    const preco = Number(novoPreco);

    if (
        novaDescricao.trim() === "" ||
        novaQuantidade.trim() === "" ||
        !Number.isInteger(quantidade) ||
        quantidade < 0 ||
        novoPreco.trim() === "" ||
        !Number.isFinite(preco) ||
        preco < 0
    ){
        alert("Informe valores válidos!");
        return;
    }

    //atualizar os dados do produto
    produtoEncontrado.descricao = novaDescricao.trim();
    produtoEncontrado.quantidade = novaQuantidade;
    produtoEncontrado.preco = preco;

    //salva a lista atualizada
    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );

    //atualiza a tabela e o resumo
    carregarProdutos();

    alert("Produto atualizado com sucesso!");

}

async function testarAPI() {
    try {
        const resposta = await fetch(
            "https://animated-sniffle-g9xr597q9x53w46-8080.app.github.dev/api/produtos"
        );

        const produtosAPI = await resposta.json();

        console.log("Produtos recebidos da API:", produtosAPI);
    
    } catch (erro) {
        console.error("Erro ao conectar com a API:", erro);
    }
    
}

testarAPI();