let algoritimo = ["video1","video2","video3"];
for()
function remove1(){
    algoritimo.shift()
}
function add1(){
    algoritimo.unshift("recomendação")
}
function decicao(i){
    if(i= algoritimo.indexOf("video1") , i===0){
        remove1()
    }else{
        add1()
        console.log(123)
    }
}
decicao()
console.log(algoritimo)