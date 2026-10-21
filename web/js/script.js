const produtos = [];

function cadastrarProduto() {

    let produtos =
        JSON.parse(localStorage.getItem("produtos")) || [];

    const codigo = document.getElementById("codigo").value;
    const descricao = document.getElementById("descricao").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;

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
}

function carregarProdutos() {

    const produtos =
        JSON.parse(localStorage.getItem("produtos")) || [];

    const tabela =
        document.getElementById("tabelaProdutos");

    tabela.innerHTML = "";

    produtos.forEach(produto => {

        const total =
            produto.quantidade * produto.preco;

        tabela.innerHTML += `
        <tr>
            <td>${produto.codigo}</td>
            <td>${produto.descricao}</td>
            <td>${produto.quantidade}</td>
            <td>R$ ${Number(produto.preco).toFixed(2)}</td>
            <td>R$ ${total.toFixed(2)}</td>
        </tr>
        `;

    });
}