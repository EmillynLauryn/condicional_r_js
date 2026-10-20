
const C = document.getElementById("calculadora_desconto");

C.addEventListener("submit", function(e) {
    e.preventDefault();

    const V = Number(document.getElementById("num1").value);
    let desconto = 0;

    if (V > 500) {
        desconto = V * 0.1;
    } else if (V > 100) {
        desconto = V * 0.05;
    }

    const valor_total = V - desconto;

    document.getElementById("resultado").innerHTML = `
        <p>Valor da compra: R$ ${V.toFixed(2)}</p>
        <p>Desconto: R$ ${desconto.toFixed(2)}</p>
        <p>Valor total: R$ ${valor_total.toFixed(2)}</p>
    `;

});
