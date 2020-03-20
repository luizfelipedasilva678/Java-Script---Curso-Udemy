class Aluno{
   constructor(nome){
        var nome = nome || "";
        var faltas = 0;
        this.adicionaFalta =(() =>{faltas += 1}) 
        this.getFaltas = (()=>{return faltas})
        this.getNome = (() =>{return nome})
        this.setNome = ((name) =>{nome = name})
   }
}