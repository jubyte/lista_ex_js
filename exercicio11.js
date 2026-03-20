function folhaPagamentoPlus() {
    let salario = Number(prompt("Salário bruto:"));
    let taxa = 0;

    if (salario <= 1000) {
        taxa = 0.08;
    } else if (salario <= 1500) {
        taxa = 0.085;
    } else {
        taxa = 0.09;
    }

    let desconto = salario * taxa;
    let liquido = salario - desconto;

    console.log("Salário: " + salario);
    console.log("Taxa: " + (taxa * 100) + "%");
    console.log("Desconto: " + desconto);
    console.log("Líquido: " + liquido);
}