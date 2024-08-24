var anoNascimento = window.document.getElementById("ano")
var anoAtual = new Date()
var i = anoAtual.getDate() - anoNascimento.value // anotando pra lembra que a lógica ta dando errado.

function idade() {
    alert(i)
}