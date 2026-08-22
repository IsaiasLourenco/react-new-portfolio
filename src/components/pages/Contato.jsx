import React, { useRef, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPrint, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ visible, onClose }) => {
  const theme = useTheme();
  const iframeRef = useRef(null);
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
          <EmailLink
            href="mailto:isaiaslourenco2020@gmail.com?subject=Contato%20via%20Portfolio&body=Olá%20Isaias,%20gostaria%20de%20entrar%20em%20contato..."
            title="Me mande um e-mail"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </EmailLink>
          <SocialIcon
            href="https://wa.me/5519996745466?text=Olá%20Isaias,%20conheci%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato."
            target="_blank"
            rel="noopener noreferrer"
            title="Me mande uma mensagem por WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </SocialIcon>
        </SocialLinks>
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

const EmailLink = styled(SocialIcon)``;

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
