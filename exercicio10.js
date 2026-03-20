function folhaPagamento() {
    let nome = prompt("Nome do funcionário:");
    let salario = Number(prompt("Salário bruto:"));

    let desconto = salario * 0.08;
    let liquido = salario - desconto;

    console.log("Nome: " + nome);
    console.log("Salário Bruto: " + salario);
    console.log("Desconto do INSS: " + desconto);
    console.log("Líquido: " + liquido);
}