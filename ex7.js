let nota = 4.6;

if (nota >= 7 && nota <= 10){
   console.log('Aprovado');
}else if (nota >= 5 && nota <6.9){
   console.log('Recuperação');
}else if (nota < 5){
   console.log('Reprovado');
}else {console.log('Você digitou um número não valído, digite o valor da nota em uma escala de 0 a 10')}