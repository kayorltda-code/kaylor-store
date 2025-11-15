async function baixarPDF() {
  const resp = await fetch("quebra.pdf.base64");
  const base64 = await resp.text();

  // Converter base64 em bytes
  const byteCharacters = atob(base64.replace(/\s/g, ""));
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  // Criar PDF no navegador
  const blob = new Blob([byteArray], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  // Baixar
  const link = document.createElement("a");
  link.href = url;
  link.download = "quebra.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

baixarPDF();
