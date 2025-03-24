/*
Objetos poddem ser criados usando literalmente d objeto ou palavra-chave new Object()
*/

//literal de objetos
const pessoa = {
    nome: "maria",
    idade: 30,
    saudacoes:function(){
        return `ola, meu nome ${this.nome} e tenho ${this.idade} anos`
    }
};
console.log(pessoa.saudacoes());
//