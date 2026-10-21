package src;
import java.util.ArrayList;
import java.util.List;

public class Estoque {

    private List<Produto> produtos = new ArrayList<>();

    public void cadastrar(Produto produto) {
        produtos.add(produto);
    }

    public List<Produto> listar() {
        return produtos;
    }

    public Produto localizar(int codigo) {

        for (Produto p : produtos) {

            if (p.getCodigo() == codigo) {
                return p;
            }

        }

        return null;
    }
    
    public int getTotalModelos(){
        return produtos.size();
    }
    
    public int getQuantidadeTotal(){
        
        int total = 0;
        
        for (Produto p : produtos){
            total += p.getQuant();
        }
        return total;
    }
    
    public double getValorTotal(){
        
        double total = 0;
        
        for (Produto p : produtos){
            total += p.obterSubTotal();
        }
        return total;
    }
}