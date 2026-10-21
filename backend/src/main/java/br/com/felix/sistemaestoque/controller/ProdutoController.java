package br.com.felix.sistemaestoque.controller;

import br.com.felix.sistemaestoque.model.Produto;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "https://animated-sniffle-g9xr597q9x53w46-5500.app.github.dev")
@RequestMapping("/api/produtos")
public class ProdutoController {

    private final List<Produto> produtos = new ArrayList<>(
            List.of(
                    new Produto(101, "Mouse", 10, 25.90),
                    new Produto(102, "Monitor", 2, 899.99)));

    @GetMapping
    public List<Produto> listarProdutos() {
        return produtos;
    }

    @PostMapping
    public Produto cadastrarProduto(@RequestBody Produto produto) {
        produtos.add(produto);
        return produto;
    }
}