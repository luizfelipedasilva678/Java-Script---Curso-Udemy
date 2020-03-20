function calcularMedia(){
    var ForEach = Array.prototype.forEach;
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(arguments[x]){
    ForEach.call(arguments, function(item){
        total += item 
    })
     return (total / qtd).toFixed(2);
}

function sortear(n){
	return Math.ceil(Math.random()*n);
}	

