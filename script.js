function copiarChavePix() {
    // Define o texto da chave Pix diretamente
    var chavePix = '123456789';
    
    // Usa a API Clipboard para copiar o texto para a área de transferência
    navigator.clipboard.writeText(chavePix).then(function() {
      // Sucesso ao copiar
      alert(
      ` 
      Chave Pix copiada: [${chavePix}] \n 
      ROSE \n 
      Banco: NUBANK\n 
      `
      );
    }, function(err) {
      // Falha ao copiar
      console.error('Erro ao copiar a chave Pix, fale com atendente.');
    });
  }