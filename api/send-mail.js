import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Método não permitido."
    });
  }

  const { nome, email, telefone, mensagem } = req.body;
  if (!nome || !email || !mensagem) {
    return res.status(400).json({
      message: "Preencha todos os campos obrigatórios."
    });
  }
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Portfolio - ${nome}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "Novo contato pelo Portfolio",
      html: `
        <h2>Novo contato recebido pelo Portfolio</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || "Não informado"}</p>
        <hr>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, "<br>")}</p>
      `
    });

    return res.status(200).json({
      message: "Mensagem enviada com sucesso!"
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return res.status(500).json({
      message: "Erro ao enviar a mensagem."
    });
  }
}
