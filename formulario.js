const form = document.getElementById("formulario_contato"); // acesso ao formulário pelo DOM

form.addEventListener("submit", function (evento) {
    evento.preventDefault(); // impede o recarregamento automático da página

    const nome = document.getElementById("nome").value.trim(); // acesso aos dados preenchidos
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // A seguir os dados são checados se estão corretos e validados
    if (!nome) {
        alert("Por favor, informe seu nome.");
        return;
    }

    if (!email) {
        alert("Por favor, informe seu e-mail.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (!mensagem) {
        alert("Escreva sua mensagem antes de enviar.");
        return;
    }

    // mensagem para indicar caso os dados estejam corretos
    alert("Mensagem enviada com sucesso!");

    form.reset();
});