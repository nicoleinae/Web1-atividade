//obter elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obter número informado
    const n = Number(frm.inNumero.value);

    let resposta = ""
    let fat = 1

    //criar um laço de repetição de 1 até n
    for(let i = 1; i<= n; i++) {
        fat = fat*i
    }
    resposta = fat + "\n";
    // alterara o conteúdo da tag pre
    resp.innerText = resposta;

})