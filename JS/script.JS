var anoNascimento = window.document.getElementById("ano");
var anoAtual = new Date();
var msg = window.document.getElementById("msg");
var img = window.document.getElementById("img");
var m = window.document.getElementById("masculino");
var f = window.document.getElementById("feminino");
var sexo;

const imgs = [
    "./IMG/criança_h.jpg",
    "./IMG/adulto_h.jpg",
    "./IMG/jovem_h.png",
    "./IMG/velho_h.jpg",

    "./IMG/criança_m.jpg",
    "./IMG/jovem_m.jpg",
    "./IMG/adulto_m.jpg",
    "./IMG/velho_m.jpg"
];

function verificadorDeSexo(s) {
    if (s == 'm') {
        sexo = true
    }else if (s == 'f') {
        sexo = false
    };
};

function idade() {
    var i = anoAtual.getFullYear() - anoNascimento.value
    if (i <= 10) {
        if (sexo == true) {
            msg.innerHTML = `Sua idade é <strong>${i}</strong></br> Você é criança!`
            img.src = imgs[0]
        }else if (sexo == false) {
            msg.innerHTML = `Sua idade é <strong>${i}</strong></br> Você é criança!`
            img.src = imgs[4]
        };
    }else if (i <= 18) {
        if (sexo == true) {
            msg.innerHTML = `Sua idade é <strong>${i}</strong></br> Você é jovem!`
            img.src = imgs[2]
        }else if (sexo == false) {
            msg.innerHTML = `Sua idade é <strong>${i}</strong></br> Você é jovem!`
            img.src = imgs[5]
        };
    }else if (i <= 60 ) {
        if (sexo == true) {
            msg.innerHTML = `Sua idade é <strong>${i}</strong></br> Você é adulto!`
            img.src = imgs[1]
        }else if (sexo == false) {
            msg.innerHTML = `Sua idade é <strong>${i}</strong></br> Você é adulto!`
            img.src = imgs[6]
        };
    }else if (i <= 100) {
        if (sexo == true) {
            msg.innerHTML = `Sua idade é <strong>${i}</strong></br> Você é idoso!`
            img.src = imgs[3]
        }else if (sexo == false) {
            msg.innerHTML = `Sua idade é <strong>${i}</strong></br> Você é idoso!`
            img.src = imgs[7]
        };
    }else {
        msg.innerText = 'Algo deu errado tente novamente'
    };
}