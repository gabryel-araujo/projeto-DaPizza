const enviarButton = document.querySelector('#enviar');
enviarButton.addEventListener('click', prices());
function prices(){
    let texto;
    var formulario1 = document.querySelector('input[name="tamanho"]:checked').value;
    var formulario2 = document.querySelector('input[name="massa"]:checked').value;
    var formulario3 = document.querySelector('input[name="queijo"]:checked').value;
    var formulario4 = document.querySelector('input[name="recheio"]:checked').value;
    var formulario5 = document.querySelector('input[name="borda"]:checked').value;
    const mensagem = document.getElementById('#mensagem');
    
    let preco1
    let preco2
    let preco3
    let preco4
    let preco5
    switch(formulario1){
        case "Pequena":
            preco1 = 15;
            break;
        case "Média":
            preco1 = 20;
            break;
        case "Grande":
            preco1 = 25;
            break;
        case "Família":
            preco1 = 30;
            break;
    }
    switch(formulario2){
        case "Tradicional":
            preco2 = 15;
            break;
        case "Integral":
            preco2 = 20;
            break;
        case "Siciliana":
            preco2 = 25;
            break;
        case "Napolitana":
            preco2 = 30;
            break;
    }
    switch(formulario3){
        case "Mussarela":
            preco3 = 15;
            break;
        case "Parmessão":
            preco3 = 20;
            break;
        case "Provolone":
            preco3 = 25;
            break;
        case "Cheddar":
            preco3 = 30;
            break;
    }
    switch(formulario4){
        case "Calabresa":
            preco4 = 15;
            break;
        case "Bacon":
            preco4 = 20;
            break;
        case "Ovo":
            preco4 = 25;
            break;
        case "Manjericão":
            preco4 = 30;
            break;
    }
    switch(formulario5){
        case "Chocolate":
            preco5 = 15;
            break;
        case "Catupiry":
            preco5 = 20;
            break;
        case "Cheddar":
            preco5 = 25;
            break;
        case "Sem Borda":
            preco5 = 30;
            break;
    }
    let total = preco1 + preco2 + preco3 + preco4 + preco5;
    texto = `De tamanho ${formulario1} massa ${formulario2} com queijo ${formulario3}, recheio de ${formulario4} e borda recheada de ${formulario5}, ficou um total de: ${total}R$`;
    mensagem.innerText = texto;
}
