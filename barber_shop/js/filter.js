var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){
    console.log(this.value); // lê o input a cada caracter modificado;
    var produtos = document.querySelectorAll(".item");
   
    if (this.value.length > 0){

        for(var i = 0; i< produtos.length; i++){
            var produto = produtos[i];
            var nomeProduto = produto.querySelector(".produto");
            var nome = nomeProduto.textContent;
            console.log(nome);
            var expressao = new RegExp(this.value, "i");
            if(!expressao.test(nome)){
                produto.setAttribute('id', "invisivel");
            } else{
                produto.removeAttribute('id', "invisivel");
            }

        }
    } else{
        for (var i = 0; i < produtos.length; i++){
            var produto = produtos[i];
            produto.removeAttribute('id', "invisivel");
        }
    }
});