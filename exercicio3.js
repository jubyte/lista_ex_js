function balancoAnual() {
    let ganhoAnual = 0;
    let gastoAnual = 0;
    const meses = 3;

    for (let i = 1; i <= 12; i++) {
        let ganho = Number(prompt("Ganho do mês " + i));
        let gasto = Number(prompt("Gasto do mês " + i));

        ganhoAnual += ganho;
        gastoAnual += gasto;
    }

    let saldo = ganhoAnual - gastoAnual;
        console.log("Ganho anual: " + ganhoAnual);
        console.log("Gasto anual: " + gastoAnual);
        console.log("Saldo: " + saldo);

    if (saldo > 0) {
        console.log("Lucro");
    } else {
        console.log("Prejuízo");
    }
}
