function transformador(temperatura, unidadeOrigem, unidadeDestino){
    let resultado;
    
    if(unidadeOrigem === "celsius" && unidadeDestino === "kelvin"){
      resultado = temperatura + 273.15;
    } else if(unidadeOrigem === "celsius" && unidadeDestino === "fahrenheit"){
      resultado = (temperatura * 1.8) + 32;
    }
  
     else if(unidadeOrigem === "kelvin" && unidadeDestino === "celsius"){
      resultado = temperatura - 273.15;
    } else if(unidadeOrigem === "kelvin" && unidadeDestino === "fahrenheit"){
      resultado = (temperatura - 273.15) * 1.8 + 32;
    }
  
     else if(unidadeOrigem === "fahrenheit" && unidadeDestino === "celsius"){
      resultado = (temperatura - 32) / 1.8;
    } else if(unidadeOrigem === "fahrenheit" && unidadeDestino === "kelvin"){
      resultado = (temperatura - 32) / 1.8 + 273.15;
    }
    else if (unidadeOrigem === unidadeDestino) {
      resultado = temperatura;
    } else {
      return "Unidade de conversão inválida";
    }
  
    return `Resultado: ${resultado.toFixed(2)} ${unidadeDestino}`;
  
  }
  
  console.log(transformador(23, "celsius", "fahrenheit"));
  console.log(transformador(230, "kelvin", "celsius"));