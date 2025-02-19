//Escreva uma função que recebe um endereço de e-mail como argumento 
// e retorna true se o e-mail for válido ou false caso contrário. 
// Um e-mail válido deve conter um único símbolo '@' e pelo menos um ponto '.' após o '@'.

function validarEmail(email) {
  if (!email.includes("@") || !email.includes('.')) {
    return false;
  }
    return true;
}
console.log("validando...");
console.log(validarEmail("ema@valido.com"));
console.log(validarEmail("emailinvalido.com"));