package src;
public class Produto {

    private int codigo;
    private String nome;
    private int quant;
    private double preco;
    
    public Produto() {
    }
    
    public Produto(int codigo, String nome, int quant, double preco){
        this.codigo = codigo;
        this.nome = nome;
        this.quant = quant;
        this.preco = preco;
    }
    
    public double obterSubTotal(){
        return quant * preco;
    }
    
    @Override
    public String toString() {
        return String.format("%-6s %-25s %-5d %,10.2f", 
            codigo, 
            nome, 
            quant, 
            preco);
    }
    
    public int getCodigo() {
        return codigo;
    }


    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }


    public String getNome() {
        return nome;
    }


    public void setNome(String nome) {
        this.nome = nome;
    }


    public int getQuant() {
        return quant;
    }


    public void setQuant(int quant) {
        this.quant = quant;
    }


    public double getPreco() {
        return preco;
    }


    public void setPreco(double preco) {
        this.preco = preco;
    }
    
}