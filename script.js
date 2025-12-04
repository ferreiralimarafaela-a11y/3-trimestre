const botoes = document.querySelectorAll(".btn-proximo");

for (let botao of botoes) {
    botao.addEventListener("click", function () {
        const atual = this.parentNode;
        const proximo = document.getElementById("passo-" + this.getAttribute("data-proximo"));

        atual.classList.remove("ativo");
        proximo.classList.add("ativo");
    });
}
