function total() {
    const quantidade = document.getElementById("quantidade");
    const valor = quantidade.value;
   
    if ((valor > 0) && (valor < 100)) {
        const precoTotal = valor * 69.90;
        document.getElementById('preco').value = `R$ ${precoTotal.toFixed(2)}`;
    }
}