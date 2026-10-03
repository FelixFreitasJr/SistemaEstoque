# 📦 Sistema de Estoque

Projeto desenvolvido durante o curso de programação, utilizando **VisualG / Portugol**, com o objetivo de praticar lógica de programação, procedimentos, vetores, estruturas de repetição, decisões e manipulação de dados.

O projeto começou a partir de uma atividade proposta pelo professor e foi posteriormente ampliado com novas funcionalidades para aprofundar os estudos.

## 🎯 Objetivo

Criar um sistema simples de controle de estoque capaz de cadastrar, consultar e gerenciar produtos.

Além da proposta original do exercício, foram implementadas funcionalidades adicionais para simular situações comuns de um sistema de estoque.

## ⚙️ Funcionalidades

* Cadastro de produtos
* Exibição dos produtos cadastrados
* Consulta de produto pelo código
* Edição de produtos
* Exclusão de produtos
* Entrada de estoque
* Saída de estoque
* Cadastro de novos produtos diretamente pelo gerenciamento do estoque
* Cálculo do valor total de cada item
* Cálculo da quantidade total em estoque
* Cálculo do valor total do estoque
* Atualização automática da tabela após as operações

## 🧠 Conceitos praticados

Durante o desenvolvimento foram utilizados:

* Variáveis
* Constantes
* Vetores
* Procedimentos
* Parâmetros
* Variáveis locais
* Estruturas `se / senao`
* Estruturas `para`
* Estruturas `enquanto`
* Estrutura `repita / ate`
* Contadores
* Acumuladores
* Busca por código
* Atualização de registros
* Exclusão de registros
* Validação de operações

## 🗂️ Estrutura do sistema

O sistema possui procedimentos responsáveis pelas principais operações:

```text
cadastrarEstoque()
exibirEstoque()
verificarEstoque()
editarEstoque()
excluirEstoque()
entradaEstoque()
saidaEstoque()
```

Os produtos são armazenados em vetores durante a execução do programa:

```text
codigo[]
nome[]
quant[]
preco[]
```

Cada posição dos vetores representa um produto cadastrado.

## 🔄 Fluxo do sistema

```text
                 SISTEMA DE ESTOQUE
                         │
        ┌────────────────┼────────────────┐
        │                │                │
    Cadastrar         Exibir          Verificar
        │                │                │
        │        ┌───────┼────────┐       │
        │        │       │        │       │
        │      Editar  Entrada  Saída   Consultar
        │        │       │        │       │
        │        └───────┼────────┘       │
        │                │                │
        │             Excluir             │
        │                │                │
        └────────────────┴────────────────┘
                         │
                        Sair
```

## 📊 Exemplo

Após cadastrar alguns produtos, o sistema apresenta informações como:

```text
Código    Descrição       Quant.    Preço Unit.    Valor Total
--------------------------------------------------------------
101       Arroz           10        R$ 14,99       R$ 149,90
102       Feijao           5        R$  5,99       R$  29,95
103       Cafe             5        R$ 27,98       R$ 139,90
104       Macarrao         6        R$  6,99       R$  41,94
```

Também é apresentado um resumo:

```text
Produtos cadastrados: 4
Quantidade total:     26
Valor total:          R$ 361,69
```

## 🚀 Evolução do projeto

O projeto foi desenvolvido de forma incremental.

A primeira versão atendia aos requisitos básicos da atividade proposta. Após concluir a versão solicitada, foram adicionadas funcionalidades para praticar novos conceitos e aproximar o exercício de um sistema real de estoque.

Entre as melhorias desenvolvidas estão:

* identificação dos produtos por código;
* edição e exclusão de registros;
* entrada e saída de estoque;
* atualização automática das informações;
* gerenciamento dos produtos diretamente pela tela de estoque.

## 📚 Observação

Este é um projeto de **estudo e prática de programação**. Os dados são armazenados apenas durante a execução do programa e não utilizam banco de dados.

O projeto representa uma etapa de aprendizado antes da implementação de sistemas com armazenamento permanente de dados.

---

**Desenvolvido por Felix Freitas Jr.**

Projeto de estudos em programação.
