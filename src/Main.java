package src;

public class Main {

    public static void main(String[] args) {

        Estoque estoque = new Estoque();
        
        estoque.cadastrar(
            new Produto(1, "Mouse", 10, 25.90)
            );
            
        estoque.cadastrar(
            new Produto(2, "Teclado", 5, 79.90)
            );
            
        estoque.cadastrar(
            new Produto(3, "Monitor", 2, 899.90)
            );
            
        System.out.println("CÓD.   DESCRIÇÃO               QTD.       PREÇO         TOTAL");
        System.out.println("-------------------------------------------------------------");
            
        for (Produto p : estoque.listar()){
            
            
            System.out.printf(
                "%-6d %-25s %-5d %10.2f %10.2f\n",
                p.getCodigo(),
                p.getNome(),
                p.getQuant(),
                p.getPreco(),
                p.obterSubTotal()
            );
        }
        
        int totalProdutos = 0;
        double valorTotalEstoque = 0;
        
        for (Produto p : estoque.listar()){
            
            totalProdutos += p.getQuant();
            valorTotalEstoque += p.obterSubTotal();
        }
        
        System.out.println();
        System.out.println("RESUMO");
        System.out.println("-----------------");
        System.out.println("Modelos cadastrdos: " + estoque.getTotalModelos());
        System.out.println("Quantidade total: " + estoque.getQuantidadeTotal());
        System.out.printf("Valor total: R$ %.2f\n", estoque.getValorTotal());
    }
}