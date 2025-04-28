function multiplicar () {
    const valor_multiplica1 = Number(document.getElementById(`num1_m`).value);
    const valor_multiplica2 = Number(document.getElementById(`num2_m`).value);
    
    const produto_m = valor_multiplica1 * valor_multiplica2; 
    
    document.getElementById(`resultado_multiplicacao`).innerText = produto_m;
    
}

function dividir() {
    const valor_dividir1 = Number(document.getElementById('num1_d').value);
    const valor_dividir2 = Number(document.getElementById('num2_d').value);

    const produto_d = valor_dividir1 / valor_dividir2;

    document.getElementById('resultado_divisao').innerText = produto_d;
}

function soma() {
    const valor_somar1 = Number(document.getElementById(`num1_som`).value);
    const valor_somar2 = Number(document.getElementById(`num2_som`).value);

    const produto_soma = valor_somar1 + valor_somar2;

    document.getElementById(`resultado_soma`).innerText = produto_soma;
}

function subtracao () {
    const valor_subtracao1 = Number(document.getElementById(`num1_sub`).value);
    const valor_subtracao2 = Number(document.getElementById(`num2_sub`).value);

    const produto_subtracao = valor_subtracao1 - valor_subtracao2;

    document.getElementById(`resultado_subtracao`).innerText = produto_subtracao;
}