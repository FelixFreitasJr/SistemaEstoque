# 📦 Sistema de Estoque

Aplicação web para gerenciamento de produtos, desenvolvida como projeto prático de estudos em Java Web. O sistema integra uma interface em HTML, CSS e JavaScript a uma API REST construída com Java e Spring Boot.

O projeto está em evolução, com foco no aprendizado de desenvolvimento backend, integração entre frontend e API e operações CRUD.

## ✨ Funcionalidades

- **Listagem de produtos:** exibe código, descrição, quantidade, preço unitário e valor total por produto.
- **Cadastro:** registra produtos pela API Java.
- **Edição:** atualiza os dados de um produto existente.
- **Exclusão:** permite remover um produto com confirmação.
- **Resumo do estoque:** apresenta a quantidade de modelos, a quantidade total de unidades e o valor total estimado.
- **Atualização da interface:** recarrega a listagem após as operações de edição e exclusão.
- **Prevenção de códigos duplicados no formulário:** verifica se o código já existe antes de enviar o cadastro.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| Java 25 | Linguagem do backend |
| Spring Boot 4.1.1 | Aplicação web e API REST |
| Spring Web MVC | Endpoints HTTP |
| Maven | Gerenciamento de dependências e build |
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização da interface |
| JavaScript | Interatividade e integração com a API |
| Git e GitHub | Versionamento e repositório |

## 🧱 Arquitetura

O frontend estático é servido pelo próprio Spring Boot. Dessa forma, a interface e a API podem funcionar na mesma origem, sem precisar hospedar o frontend separadamente.

```text
SistemaEstoque/
├── backend/
│   ├── mvnw
│   ├── pom.xml
│   └── src/
│       └── main/
│           ├── java/
│           │   └── br/com/felix/sistemaestoque/
│           │       ├── BackendApplication.java
│           │       ├── controller/
│           │       │   └── ProdutoController.java
│           │       └── model/
│           │           └── Produto.java
│           └── resources/
│               └── static/
│                   ├── index.html
│                   └── web/
│                       ├── pages/
│                       ├── css/
│                       └── js/
├── index.html
├── src/
└── web/
```

> A aplicação Spring Boot utiliza os arquivos estáticos dentro de `backend/src/main/resources/static/`. As pastas de frontend na raiz são mantidas separadamente no repositório.

## 🚀 Como executar localmente

### Pré-requisitos

- JDK 25 instalado.
- Git.
- Terminal ou IDE compatível com Java.

### 1. Clone o repositório

```bash
git clone https://github.com/FelixFreitasJr/SistemaEstoque.git
cd SistemaEstoque
```

### 2. Execute os testes

```bash
cd backend
./mvnw clean test
```

No Windows, se necessário, utilize:

```powershell
.\mvnw.cmd clean test
```

### 3. Inicie a aplicação

No Linux, macOS ou GitHub Codespaces:

```bash
./mvnw spring-boot:run
```

No Windows:

```powershell
.\mvnw.cmd spring-boot:run
```

### 4. Acesse o sistema

Abra no navegador:

- Aplicação: http://localhost:8080/
- Listagem da API: http://localhost:8080/api/produtos

## 🔌 API REST

A API utiliza a rota base `/api/produtos`.

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/produtos` | Lista os produtos |
| POST | `/api/produtos` | Cadastra um produto |
| PUT | `/api/produtos/{codigo}` | Atualiza um produto |
| DELETE | `/api/produtos/{codigo}` | Exclui um produto |

### Exemplo de produto em JSON

```json
{
  "codigo": 103,
  "descricao": "Teclado",
  "quantidade": 5,
  "preco": 79.90
}
```

### Exemplo de consulta

```bash
curl http://localhost:8080/api/produtos
```

## ⚠️ Estado atual e limitações

- Os produtos são armazenados em uma lista na memória do backend.
- Os dados cadastrados ou alterados são perdidos quando a aplicação é reiniciada.
- A prevenção de códigos duplicados está implementada no formulário; a API ainda precisa de validações equivalentes no servidor.
- O projeto ainda não utiliza banco de dados.
- A aplicação está em desenvolvimento e não deve ser utilizada para controlar estoque real sem as melhorias necessárias.

## 🗺️ Próximas melhorias

- [ ] Persistência de dados com banco de dados relacional.
- [ ] Validação dos dados no backend.
- [ ] Garantia de unicidade do código na API e no banco.
- [ ] Tratamento padronizado de erros HTTP.
- [ ] Testes automatizados dos endpoints CRUD.
- [ ] Preparação e publicação da aplicação em uma plataforma de hospedagem.
- [ ] Documentação da API.

## 👨‍💻 Autor

**Felix Freitas Júnior**

- GitHub: [@FelixFreitasJr](https://github.com/FelixFreitasJr)
- LinkedIn: [felixfreitasjr](https://www.linkedin.com/in/felixfreitasjr/)

---

Projeto desenvolvido para fins de estudo e evolução prática em desenvolvimento web com Java.
