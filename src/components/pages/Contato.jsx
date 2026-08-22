import React, { useRef, useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPrint, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ visible, onClose }) => {
  const theme = useTheme();
  const iframeRef = useRef(null);

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

  const [sending, setSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    let valor = value;

    if (name === 'telefone') {

      valor = value.replace(/\D/g, '');

      valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
      valor = valor.replace(/(\d{5})(\d)/, '$1-$2');

    }

    setFormData({
      ...formData,
      [name]: valor
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setEmailStatus("");

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao enviar a mensagem.");
      }

      setEmailStatus("Mensagem enviada com sucesso!");

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
      });

    } catch (error) {
      setEmailStatus(error.message || "Erro ao enviar a mensagem.");
    } finally {
      setSending(false);
    }
  };

  const handlePrint = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.print();
    }
  };

  useEffect(() => {
    const handleKeyUp = (e) => {
      const key = e.key || e.keyCode;
      const isKeyPressed = key === "Escape" || key === 27;

      if (isKeyPressed && visible) {
        onClose();
      }
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [visible, onClose]);

  return (
    <SlidingContact $visible={visible} theme={theme}>
      <CloseButton onClick={onClose}>×</CloseButton>

      <Content>
        <Title>Entre em Contato</Title>

        <Subtitle>
          Vamos conversar sobre oportunidades, projetos e tecnologia.
        </Subtitle>

        <SocialLinks>
          <SocialIcon
            href="https://github.com/IsaiasLourenco"
            target="_blank"
            rel="noopener noreferrer"
            title="Meu GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </SocialIcon>

          <SocialIcon
            href="https://www.linkedin.com/in/isaias-lourenco/"
            target="_blank"
            rel="noopener noreferrer"
            title="Meu LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </SocialIcon>

          <EmailButton
            onClick={() => {
              setShowEmailForm(true);
              setEmailStatus("");
            }}
            title="Me mande um e-mail"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </EmailButton>

          <SocialIcon
            href="https://wa.me/5519996745466?text=Olá%20Isaias,%20conheci%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato"
            target="_blank"
            rel="noopener noreferrer"
            title="Me mande uma mensagem por WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </SocialIcon>
        </SocialLinks>

        {showEmailForm && (
          <EmailFormContainer>
            <CloseEmailFormButton
              onClick={() => {
                setShowEmailForm(false);
                setEmailStatus("");
              }}
              title="Fechar Formulário"
              type="button"
            >
              ×
            </CloseEmailFormButton>

            <EmailFormTitle>Envie uma Mensagem</EmailFormTitle>

            <EmailFormSubtitle>
              Preencha o formulário abaixo e entrarei em contato com você.
            </EmailFormSubtitle>

            <EmailForm onSubmit={handleSubmit}>
              <Input
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />

              <Input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                type="tel"
                name="telefone"
                placeholder="Seu telefone (opcional)"
                value={formData.telefone}
                onChange={handleChange}
                maxLength={15}
              />

              <TextArea
                name="mensagem"
                placeholder="Escreva sua mensagem..."
                rows="5"
                value={formData.mensagem}
                onChange={handleChange}
                required
              />

              <SendButton type="submit" disabled={sending}>
                <FontAwesomeIcon icon={faEnvelope} />
                {sending ? "Enviando..." : "Enviar Mensagem"}
              </SendButton>
            </EmailForm>

            {emailStatus && (
              <EmailStatus $success={emailStatus === "Mensagem enviada com sucesso!"}>
                {emailStatus}
              </EmailStatus>
            )}
          </EmailFormContainer>
        )}

        <Divider />

        <CurriculumSection>
          <TitleD>Currículo Profissional</TitleD>

          <CurriculumDescription>
            Conheça minha experiência profissional, minha trajetória em desenvolvimento de software,
            qualidade, sistemas corporativos e as tecnologias que fazem parte da minha atuação atual.
          </CurriculumDescription>

          <ActionsContainer>
            <DownloadButton
              href="/IsaiasLourenço_DevWebFullStack.pdf"
              download="Curriculo_Isaias_Lourenco.pdf"
              title="Baixar Currículo"
            >
              <FontAwesomeIcon icon={faFilePdf} />
              Baixar Currículo
            </DownloadButton>

            <PrintButton
              onClick={handlePrint}
              title="Imprimir Currículo"
            >
              <FontAwesomeIcon icon={faPrint} />
              Imprimir Currículo
            </PrintButton>
          </ActionsContainer>

          <iframe
            ref={iframeRef}
            src="/Isaias_Lourenco_Full_Stack_CV.pdf"
            title="Currículo de Isaias Lourenço"
            style={{ display: "none" }}
          />
        </CurriculumSection>
      </Content>
    </SlidingContact>
  );
};

export default Contact;

const SlidingContact = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 700px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.4);
  transform: ${({ $visible }) => ($visible ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;
  z-index: 1000;
  overflow-y: auto;
`;

const Content = styled.div`
  min-height: 100%;
  padding: 80px 40px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    padding: 70px 20px 40px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  line-height: 1;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  z-index: 1100;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.buttonHover};
    transform: scale(1.1);
  }
`;

const Title = styled.h2`
  font-size: 32px;
  margin: 0 0 15px;
  text-align: center;
`;

const Subtitle = styled.p`
  max-width: 500px;
  margin: 0 auto 25px;
  text-align: center;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  opacity: 0.85;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const SocialIcon = styled.a`
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease, border-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
    border-color: ${({ theme }) => theme.buttonBackground};
    transform: translateY(-3px);
  }
`;

const EmailButton = styled.button`
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease, border-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
    border-color: ${({ theme }) => theme.buttonBackground};
    transform: translateY(-3px);
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 500px;
  height: 1px;
  margin: 50px 0 35px;
  background: rgba(255, 255, 255, 0.12);
`;

const CurriculumSection = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

const TitleD = styled.h2`
  font-size: 26px;
  margin: 0 0 15px;
  text-align: center;
`;

const CurriculumDescription = styled.p`
  max-width: 450px;
  margin: 0 auto 30px;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  opacity: 0.85;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const DownloadButton = styled.a`
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 20px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.buttonText};
  text-decoration: none;
  background-color: ${({ theme }) => theme.buttonBackground};
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
    transform: translateY(-2px);
  }
`;

const PrintButton = styled.button`
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 20px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.printButton};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.ptnBtnSobre};
    transform: translateY(-2px);
  }
`;

const EmailFormContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin-top: 35px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 16px;
  background: ${({ theme }) => theme.boxBackground};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const CloseEmailFormButton = styled.button`
  position: absolute;
  top: 12px;
  right: 15px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.buttonHover};
    transform: scale(1.15);
  }
`;

const EmailFormTitle = styled.h2`
  margin: 0 0 10px;
  text-align: center;
  font-size: 24px;
`;

const EmailFormSubtitle = styled.p`
  margin: 0 0 25px;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.8;
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 13px 15px;
  box-sizing: border-box;
  font-size: 15px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  border: 1px solid rgba(128, 128, 128, 0.35);
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.buttonBackground};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 13px 15px;
  box-sizing: border-box;
  resize: vertical;
  font-family: inherit;
  font-size: 15px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  border: 1px solid rgba(128, 128, 128, 0.35);
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.buttonBackground};
  }
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 20px;
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.buttonText};
  background: ${({ theme }) => theme.buttonBackground};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease, opacity 0.3s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.buttonHover};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const EmailStatus = styled.p`
  margin: 20px 0 0;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: ${({ $success }) => $success ? "#2ecc71" : "#e74c3c"};
`;
