function calcularMedia(){
  let primeiraNota = parseFloat(document.getElementById("primeiranota").value);
  let segundaNota = parseFloat(document.getElementById("nota2").value);
  let terceiraNota = parseFloat(document.getElementById("nota3").value);
  let quartaNota = parseFloat(document.getElementById("nota4").value);

  let somaNotas = (primeiraNota + segundaNota + terceiraNota + quartaNota);
 return somaNotas/4;
}  

function mostraResultado(){
  //var notaFinal = calcularMedia();
  var resultado;
  var textoResultado = document.getElementById("resultado");
  
  //if (notaFinal>=7){
  //  resultado = "Parabéns, sua média final foi " + notaFinal.toFixed(2) + "! Você foi aprovado.";
  //} else if (notaFinal < 7 && notaFinal>=5){
   // resultado = "Sua média final foi " + notaFinal.toFixed(2) + ", não sendo suficiente para a aprovação.<br> Realize o exame final para complementar sua nota."
  //} else {
   // resultado = "Sua média final foi " + notaFinal.toFixed(2) + ". Você foi reprovado."
  //}
  
  textoResultado.innerHTML = "estude mais";
  
}


//implementar: todas as notas devem ser informadas
//média com exame
//limpar campos
//limitar nota de 0 a 10