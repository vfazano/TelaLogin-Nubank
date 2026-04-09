//Comentário de uma linha 
/*Comentar multilinhas

    public class teste{
    public static void main (String)

    int teste = 4;
    teste ="Hello World!!"

    System.out.println(teste);
}


var teste = 0;
teste = "HelloWorld!" //string
teste = true // Boolean
teste = ""string
teste = void // vazio
teste = undefined // tipo não definido 
teste = null // nulo 


const -> Variavel tipo Constante 
const teste = 10;

var / let -> Variável 
var teste = 10;
teste = "Hello World!"


ESCOPO 
LOCAL = POLÍCIA ESTADUAL
GLOBAL = POLÍCIA FEDERAL

var global = "Lava Jato"
function policiaSP(){
    if(global = "Lava Jato"){
        console.log("Deixa com a PF.")
    }
     else{
        var bandidosSP = "Alunos do SENAI Sorocaba "
    }   
}

console.log(global) -> "Lava Jato"
console.log(bandidosSP) ->

*/

const botao = document.getElementById("entrar")
const form = document.getElementById("formLogin")
console.log(botao)

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    if (email === "" || senha === "") {
        alert("Erro na validação")
    }
    else {
        alert("Formulario Enviado ")
        console.log({
            email: email,
            senha: senha

        })


    }

})//MÉTODO

