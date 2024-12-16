
let num1, num2;


//* Quando carrega a página rodará está função
window.onload = function(){
    num1 = getRandomInt(1, 1000);
    num2 = getRandomInt(1, 1000);

    num1html.innerHTML = num1;
    num2html.innerHTML = num2;


    // setTimeout(() => {
    //     alert("Hello World! Mensagem para o examinador.");
    // }, 1000);
}

//* Soma números randomicos
function somaNumeros() {
    if (num1 !== undefined && num2 !== undefined) {
        return num1 + num2;
    } else {
        console.error("Os números ainda não foram definidos!");
    }
};


document.getElementById('form-btn').onclick = function () {

    const valor = document.getElementById('resposta');
    const result = valor.value;
    
    if(somaNumeros() == result){
        let greeting = "Resposta correta!";
        validate.innerHTML = greeting;
        // alert("Parabéns, você acertou!");
    }else{
        let incorrect = "Resposta incorreta";
        notvalidate.innerHTML = incorrect;
    }



    // setTimeout(() => {
    //     console.log("Soma dos números:", somaNumeros());
    // }, 100);

};


//* Função para gerar um número aleatório
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}