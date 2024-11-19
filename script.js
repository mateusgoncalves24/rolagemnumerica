// Aguarda até que o conteudo da pag. esteja totalmente carregado
document.addEventListener("DOMContentLoaded", () => {

    // seleciona todos os elementos com a classe "contador"
    const contadores = document.querySelectorAll(".contador");

    //Intera sobre cada elemento de contadores aplicando a animação da contagem
    contadores.forEach(contador => {

        //valor inicial do contador
        contador.innerText = "0"

        //função que faz o contador aumentar gradativamente até o data-alvo 
        const atualizarContador = () => {
            const alvo = +contador.getAttribute("data-alvo");
            const contagem = +contador.innerText;
            // define o incremento que é uma fração do valor alvo para garantir uma rolagem suave
            const incremento = alvo / 2000

            if (contagem < alvo) {
                contador.innerText = Math.ceil(contagem + incremento);
                setTimeout(atualizarContador, 20);

            } else {
                contador.innerText = 0
                atualizarContador();

            }
        };
        atualizarContador();
    })
})