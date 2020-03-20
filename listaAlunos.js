class ListaAlunos{
    
    constructor(){
        var alunos = [
            {nome: 'Luiz'},
            {nome: 'Pedro'},
            {nome: 'João'}
        ]
        
        this.getAluno = function(nome){
            alunos.forEach(function(item){
                if(item.nome===nome)
                    return item;
            })
        }
    }
    
}