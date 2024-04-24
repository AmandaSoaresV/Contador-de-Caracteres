const inputTexto = document.querySelector("#input");
const btnContar = document.querySelector("#btn-contar");
const divContador = document.querySelector("[txt-contador]");

let contagemCaracteres = true;

const contarCaracteres = (texto) => {
    return texto.length;
};

const contarPalavras = (texto) => {
    const palavras = texto.trim().split(" ");
    return palavras.length;
};

const atualizarContador = () => {
    if (contagemCaracteres) {
        const caracteres = contarCaracteres(inputTexto.value);
        divContador.textContent = `${caracteres} caracteres`;
    } else {
        const palavras = contarPalavras(inputTexto.value);
        divContador.textContent = `${palavras} palavras`;
    }
};

const handleBtnContar = () => {
    contagemCaracteres = !contagemCaracteres;
    if (contagemCaracteres) {
        btnContar.innerText = "Contar Palavras";
    } else {
        btnContar.innerText = "Contar Caracteres";
    }
    atualizarContador();
};

btnContar.addEventListener("click", handleBtnContar);
inputTexto.addEventListener("input", atualizarContador);


// function saudacao(evento) {
    //     console.log("ola")
    //     console.log(evento.target)
    // } funcao declarativa

// btnContar.onclick = handleBtnContar   -> outra forma