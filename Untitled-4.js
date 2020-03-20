const player = {
  name: 'Cloud'
}

const enemy = {
  name: 'Sephirot'
}

// Função declarada global.
// Se chamar direto, o 'this' seria 'global' ou 'window'.
const sayName = function () {
  console.log(this.name)
}

// Usando 'bind' para criar novas funções que fazem a mesma coisa
// da função 'sayName', mas definindo o 'this' manualmente.
const sayPlayerName = sayName.bind(player);
const sayEnemyName = sayName.bind(enemy);

sayPlayerName() // Cloud
sayEnemyName() // Sephirot