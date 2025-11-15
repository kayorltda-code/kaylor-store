import { Buffer } from "buffer";

export default function handler(req, res) {
  try {
    const base64 = `
INSIRA_O_BASE64_AQUI
`.trim();

    const pdfBuffer = Buffer.from(base64, "base64");

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="kaylor.pdf"');
    res.send(pdfBuffer);

  } catch (error) {
    res.status(500).send("Erro ao gerar PDF");
  }
}
