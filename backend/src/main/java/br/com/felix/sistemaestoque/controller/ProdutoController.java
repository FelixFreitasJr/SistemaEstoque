
package br.com.felix.sistemaestoque.controller;

import br.com.felix.sistemaestoque.model.Produto;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    private final List<Produto> produtos = new ArrayList<>(
        List.of(
            new Produto(101, "Mouse", 10, 25.90),
            new Produto(102, "Monitor", 2, 899.99)
        )
    );

    @GetMapping
    public List<Produto> listarProdutos() {
        return produtos;
    }

    @PostMapping
    public Produto cadastrarProduto(@RequestBody Produto produto) {
        produtos.add(produto);
        return produto;
    }

    @PutMapping("/{codigo}")
    public ResponseEntity<Produto> atualizarProduto(
            @PathVariable int codigo,
            @RequestBody Produto produto) {

        for (int i = 0; i < produtos.size(); i++) {
            if (produtos.get(i).getCodigo() == codigo) {
                produto.setCodigo(codigo);
                produtos.set(i, produto);
                return ResponseEntity.ok(produto);
            }
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{codigo}")
    public ResponseEntity<Void> excluirProduto(
            @PathVariable int codigo) {

        boolean removido = produtos.removeIf(
            produto -> produto.getCodigo() == codigo
        );

        if (!removido) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.noContent().build();
    }
}
