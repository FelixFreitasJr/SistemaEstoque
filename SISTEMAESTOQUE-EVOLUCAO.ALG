Algoritmo "SistemaEstoque-Evolucao"
// Programação Java
// Prof. Ronaldo Candido
// Descrição:   Criar um sistema de estoque:
//              melhorado pelo aluno apos o exercicio pratico
//
// Autor(a)    : Felix Freitas Jr
// Data atual  : 01/10/2026

Const
   //Valor fixo no algoritimo
   MAX = 15

Var
   // Seção de Declarações das variáveis

   //vetores
   codigo     : vetor[1..MAX] de inteiro
   nome       : vetor[1..MAX] de caracter
   quant      : vetor[1..MAX] de inteiro
   preco      : vetor[1..MAX] de real

   //contadores
   totalItens : inteiro

   //índices
   x          : inteiro

   //calculos
   valorItem       : real

   //acumuladores
   valorTotal      : real
   quantidadeTotal : inteiro

   //validação
   continuar  : caracter
   opcao      : inteiro

   //controle
   codigoBusca     : inteiro

procedimento cadastrarEstoque()
inicio

   escreval()
   escreval("========= Cadastrar Estoque ==========")

   continuar <- "S"

   enquanto (continuar = "s") ou (continuar = "S") faça

      totalItens <- totalItens + 1

      escreval()
      escreval("Digite os dados do item ", totalItens)

      escreva("Digite o código: ")
      leia(codigo[totalItens])

      escreva("Digite o Descrição: ")
      leia(nome[totalItens])

      escreva("Digite o Quantidade: ")
      leia(quant[totalItens])

      escreva("Digite o Preço: ")
      leia(preco[totalItens])

      escreval()
      escreval(totalItens, "º Item cadastrado com sucesso")
      escreval()

      se (totalItens < MAX) entao
         escreva("Deseja cadastrar outro item? (S/N) ")
         leia(continuar)
      senao
         escreval("Limite máximo de itens atingido!")
         continuar <- "N"
      fimse
   fimenquanto

fimprocedimento // cadastrarEstoque


procedimento editarEstoque(codigoBusca : inteiro)
var
   encontrado : logico
inicio

   encontrado <- falso

   escreval()
   escreval("=========== EDITAR ESTOQUE ===========")

   para x de 1 ate totalItens faca
      se (codigo[x] = codigoBusca) entao

         encontrado <- verdadeiro

         escreval()
         escreval("Item encontrado!")
         escreval("Código: ", codigo[x])
         escreval("Descrição: ", nome[x])
         escreval("Quantidade: ", quant[x])
         escreval("Preço: R$ ", preco[x]:8:2)

         escreval()
         escreval("Digite os novos dados:")

         escreva("Nova descrição: ")
         leia(nome[x])

         escreva("Nova quantidade: ")
         leia(quant[x])

         escreva("Novo preço: ")
         leia(preco[x])

         escreval()
         escreval("Item atualizado com sucesso!")
      fimse
   fimpara

   se (encontrado = falso) entao
      escreval()
      escreval("Item não encontrado.")
   fimse

fimprocedimento //editarEstoque

procedimento entradaEstoque()
var
   encontrado : logico
   quantidadeEntrada : inteiro
inicio

   encontrado <- falso

   escreval()
   escreval("=========== ENTRADA DE ESTOQUE ===========")

   escreva("Digite o código do item: ")
   leia(codigoBusca)

   para x de 1 ate totalItens faca
      se (codigo[x] = codigoBusca) entao

         encontrado <- verdadeiro

         escreval()
         escreval("Item encontrado!")
         escreval("---------------------------------------")
         escreval("Código: ", codigo[x])
         escreval("Descrição: ", nome[x])
         escreval("Quantidade atual: ", quant[x])
         escreval("---------------------------------------")

         escreval()
         escreva("Digite a quantidade de entrada: ")
         leia(quantidadeEntrada)

         quant[x] <- quant[x] + quantidadeEntrada

         escreval()
         escreval("Entrada registrada com sucesso!")
         escreval("Nova quantidade: ", quant[x])
      fimse
   fimpara

   se (encontrado = falso) entao
      escreval()
      escreval("Item não encontrado.")
   fimse

fimprocedimento //entradaEstoque


procedimento saidaEstoque(codigoBusca : inteiro)
var
   encontrado : logico
   quantidadeSaida : inteiro
inicio

   encontrado <- falso

   escreval()
   escreval("=========== SAÍDA DE ESTOQUE ===========")

   para x de 1 ate totalItens faca
      se (codigo[x] = codigoBusca) entao

         encontrado <- verdadeiro

         escreval()
         escreval("Item encontrado!")
         escreval("---------------------------------------")
         escreval("Código: ", codigo[x])
         escreval("Descrição: ", nome[x])
         escreval("Quantidade atual: ", quant[x])
         escreval("---------------------------------------")

         escreval()
         escreva("Digite a quantidade de saída: ")
         leia(quantidadeSaida)

         se (quantidadeSaida <= quant[x]) entao

            quant[x] <- quant[x] - quantidadeSaida

            escreval()
            escreval("Saída registrada com sucesso!")
            escreval("Nova quantidade: ", quant[x])
         senao
            escreval()
            escreval("Quantidade de saída maior que o estoque disponível!")
            escreval("Saída não realizada.")
         fimse
      fimse
   fimpara

   se (encontrado = falso) entao
      escreval()
      escreval("Item não encontrado.")
   fimse

fimprocedimento //saidaEstoque

procedimento exibirEstoque()
var
   acao : inteiro
inicio

   repita

      valorTotal <- 0
      quantidadeTotal <- 0

      escreval()
      escreval("==============================================================")
      escreval("                    ESTOQUE")
      escreval("==============================================================")
      escreval("Código    Descrição       Quant.    Preço Unit.    Valor Total")
      escreval("--------------------------------------------------------------")

      para x de 1 ate totalItens faca

         valorItem <- quant[x] * preco[x]

         quantidadeTotal <- quantidadeTotal + quant[x]
         valorTotal <- valorTotal + valorItem

         escreva(codigo[x], "       ")
         escreva(nome[x], "       ")
         escreva(quant[x], "       ")
         escreva("R$ ", preco[x]:8:2, "       ")
         escreval("R$ ", valorItem:8:2)

      fimpara

      escreval("--------------------------------------------------------------")
      escreval("                    RESUMO DO ESTOQUE")
      escreval("--------------------------------------------------------------")
      escreval("Produtos cadastrados: ", totalItens)
      escreval("Quantidade total:     ", quantidadeTotal)
      escreval("Valor total:          R$ ", valorTotal:8:2)
      escreval("==============================================================")

      escreval()
      escreval("O que deseja fazer?")
      escreval("1 - Editar item")
      escreval("2 - Excluir item")
      escreval("3 - Entrada Estoque")
      escreval("4 - Saída Estoque")
      escreval("5 - Voltar ao menu")
      escreva("Digite uma opção: ")
      leia(acao)

      se (acao = 1) entao
         escreva("Digite o código do item que deseja editar: ")
         leia(codigoBusca)
         editarEstoque(codigoBusca)
      fimse

      se (acao = 2) entao
         escreva("Digite o código do item que deseja excluir: ")
         leia(codigoBusca)
         excluirEstoque(codigoBusca)
      fimse

      se (acao = 3) entao
         escreva("Digite o código do item que deseja dar Entrada: ")
         leia(codigoBusca)
         entradaEstoque(codigoBusca)
      fimse

      se (acao = 4) entao
         escreva("Digite o código do item que deseja dar Saida: ")
         leia(codigoBusca)
         saidaEstoque(codigoBusca)
      fimse

   ate acao = 5

fimprocedimento // exibirEstoque

procedimento excluirEstoque(codigoBusca : inteiro)
var
   encontrado : logico
   confirmacao : caracter
inicio

   encontrado <- falso

   para x de 1 ate totalItens faca
      se (codigo[x] = codigoBusca) entao

         encontrado <- verdadeiro

         escreval()
         escreval("=========== EXCLUIR ESTOQUE ===========")
         escreval()
         escreval("Item encontrado!")
         escreval("Código: ", codigo[x])
         escreval("Descrição: ", nome[x])
         escreval("Quantidade: ", quant[x])
         escreval("Preço: R$ ", preco[x]:8:2)

         escreval()
         escreva("Confirma a exclusão? (S/N): ")
         leia(confirmacao)

         se (confirmacao = "s") ou (confirmacao = "S") entao
            para x de x ate totalItens - 1 faca

               codigo[x] <- codigo[x + 1]
               nome[x] <- nome[x + 1]
               quant[x] <- quant[x + 1]
               preco[x] <- preco[x + 1]

            fimpara

            totalItens <- totalItens - 1

            escreval()
            escreval("Item excluído com sucesso!")
         senao
            escreval()
            escreval("Exclusão cancelada.")
         fimse
      fimse
   fimpara

   se (encontrado = falso) entao
      escreval()
      escreval("Item não encontrado.")
   fimse

fimprocedimento  //excluirEstoque

procedimento verificarEstoque()
var
   encontrado : logico
   acao       : inteiro
inicio

   encontrado <- falso

   escreval()
   escreval("=========== VERIFICAR ESTOQUE ===========")
   escreva("Digite o código do item: ")
   leia(codigoBusca)

   para x de 1 ate totalItens faca
      se (codigo[x] = codigoBusca) entao

         encontrado <- verdadeiro

         escreval()
         escreval("Item encontrado!")
         escreval("---------------------------------------")
         escreval("Código: ", codigo[x])
         escreval("Descrição: ", nome[x])
         escreval("Quantidade: ", quant[x])
         escreval("Preço unitário: R$ ", preco[x]:8:2)
         escreval("Valor em estoque: R$ ", (quant[x] * preco[x]):8:2)
         escreval("---------------------------------------")

         escreval()
         escreval("O que deseja fazer?")
         escreval("1 - Editar item")
         escreval("2 - Excluir item")
         escreval("3 - Voltar")
         escreva("Digite uma opção: ")
         leia(acao)

         se (acao = 1) entao
            editarEstoque(codigoBusca)
         fimse

         se (acao = 2) entao
            excluirEstoque(codigoBusca)
         fimse
      fimse
   fimpara

   se (encontrado = falso) entao
      escreval()
      escreval("Item não encontrado.")
   fimse

fimprocedimento     //verificarEstoque


Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   totalitens <- 0

   repita
      escreval()
      escreval("==========================")
      escreval("   SISTEMA DE ESTOQUE")
      escreval("==========================")
      escreval()
      escreval("Menu:")
      escreval("1 - Cadastrar Estoque")
      escreval("2 - Exibir Estoque")
      escreval("3 - Verificar Estoque")
      escreval("4 - Entrada de Estoque")
      escreval("5 - Saída de Estoque")
      escreval("6 - Sair do Sistema")
      escreva("Digite uma opção: ")
      leia(opcao)

      se (opcao = 1) entao
         cadastrarEstoque()
      fimse

      se (opcao = 2) entao
         exibirEstoque()
      fimse

      se (opcao = 3) entao
         verificarEstoque()
      fimse

      se (opcao = 4) entao
         entradaEstoque()
      fimse

      se (opcao = 5) entao
         saidaEstoque()
      fimse
   ate opcao = 6

Fimalgoritmo