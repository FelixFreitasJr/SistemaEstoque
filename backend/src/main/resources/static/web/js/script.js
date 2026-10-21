const produtos = [];

async function cadastrarProduto(event) {
    event.preventDefault();

    // Captura os dados do formulário
    const codigo = Number(document.getElementById("codigo").value);
    const descricao = document.getElementById("descricao").value.trim();
    const quantidade = Number(document.getElementById("quantidade").value);
    const preco = Number(document.getElementById("preco").value);

    try {
        // Busca os produtos já cadastrados na API
        const respostaConsulta = await fetch("/api/produtos");

        if (!respostaConsulta.ok) {
            throw new Error("Não foi possível consultar os produtos.");
        }

        const produtos = await respostaConsulta.json();

        // Verifica se o código já existe
        const existe = produtos.some(produto => {
            return Number(produto.codigo) === codigo;
        });

        if (existe) {
            alert("Já existe um produto cadastrado com esse código!");
            return;
        }

        // Envia o novo produto para a API Java
        const respostaCadastro = await fetch("/api/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                codigo,
                descricao,
                quantidade,
                preco
            })
        });

        if (!respostaCadastro.ok) {
            throw new Error("Não foi possível cadastrar o produto.");
        }

        alert("Produto cadastrado com sucesso!");

        // Limpa os campos do formulário
        event.target.reset();

    } catch (erro) {
        console.error("Erro ao cadastrar produto:", erro);
        alert("Erro: " + erro.message);
    }
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
                    <td class="acoes">
                        <button
                            class="btn-acao btn-editar"
                            onclick="editarProduto(${produto.codigo})"
                            title="Editar produto"
                            aria-label="Editar produto">
                            ✏
                        </button>

                        <button
                            class="btn-acao btn-excluir"
                            onclick="excluirProduto(${produto.codigo})"
                            title="Excluir produto"
                            aria-label="Excluir produto">
                            ×
                        </button>
                    </td>
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


async function editarProduto(codigo) {
    try {
        // Busca os produtos na API
        const respostaConsulta = await fetch("/api/produtos");

        if (!respostaConsulta.ok) {
            throw new Error("Não foi possível consultar os produtos.");
        }

        const produtos = await respostaConsulta.json();

        const produto = produtos.find(
            item => Number(item.codigo) === Number(codigo)
        );

        if (!produto) {
            alert("Produto não encontrado.");
            return;
        }

        // Solicita os novos dados
        const descricao = prompt("Nova descrição:", produto.descricao);
        if (descricao === null) return;

        const quantidade = prompt("Nova quantidade:", produto.quantidade);
        if (quantidade === null) return;

        const preco = prompt("Novo preço:", produto.preco);
        if (preco === null) return;

        const dadosAtualizados = {
            codigo: Number(codigo),
            descricao: descricao.trim(),
            quantidade: Number(quantidade),
            preco: Number(preco)
        };

        if (
            !dadosAtualizados.descricao ||
            !Number.isInteger(dadosAtualizados.quantidade) ||
            dadosAtualizados.quantidade < 0 ||
            !Number.isFinite(dadosAtualizados.preco) ||
            dadosAtualizados.preco < 0
        ) {
            alert("Informe descrição, quantidade inteira não negativa e preço válido.");
            return;
        }

        // Envia as alterações para o Java
        const resposta = await fetch(`/api/produtos/${codigo}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosAtualizados)
        });

        if (!resposta.ok) {
            throw new Error("Não foi possível atualizar o produto.");
        }

        alert("Produto atualizado com sucesso!");
        await carregarProdutos();

    } catch (erro) {
        console.error("Erro ao editar produto:", erro);
        alert(erro.message);
    }
}

async function excluirProduto(codigo) {
    const confirmar = confirm(
        `Deseja realmente excluir o produto ${codigo}?`
    );

    if (!confirmar) return;

    try {
        const resposta = await fetch(`/api/produtos/${codigo}`, {
            method: "DELETE"
        });

        if (resposta.status === 404) {
            alert("Produto não encontrado.");
            return;
        }

        if (!resposta.ok) {
            throw new Error("Não foi possível excluir o produto.");
        }

        alert("Produto excluído com sucesso!");
        await carregarProdutos();

    } catch (erro) {
        console.error("Erro ao excluir produto:", erro);
        alert(erro.message);
    }
}
