function calcularMedia(){
  let primeiraNota = parseFloat(document.getElementById("primeiranota").value);
  let segundaNota = parseFloat(document.getElementById("segundanota").value);
  let terceiraNota = parseFloat(document.getElementById("terceiranota").value);
  let quartaNota = parseFloat(document.getElementById("quartanota").value);

  let somaNotas = (primeiraNota + segundaNota + terceiraNota + quartaNota);
 return somaNotas/4;
}  

function mostraResultado(){
  var notaFinal = calcularMedia();
  var resultado;
  var textoResultado = document.getElementById("resultado");
  
  if (notaFinal>=7){
    resultado = "Parabéns, sua média final foi " + notaFinal.toFixed(2) + "!<br> Você foi aprovado.";
  } else if (notaFinal < 7 && notaFinal>=5){
    resultado = "Sua média final foi " + notaFinal.toFixed(2) + ", não sendo suficiente para a aprovação.<br> Realize o exame final para complementar sua nota."
  } else if (notaFinal < 5){
    resultado = "Sua média final foi " + notaFinal.toFixed(2) + ".<br> Você foi reprovado."
  } else
    resultado = "Por favor, informe a nota das quatro provas."
  
  textoResultado.innerHTML = resultado;
  
}


//implementar: todas as notas devem ser informadas
//média com exame
//limpar campos
//limitar nota de 0 a 10