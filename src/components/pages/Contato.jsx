import React, { useRef, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPrint, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../context/ThemeContext";

const Contact = ({ visible, onClose }) => {
  const theme = useTheme();
  const iframeRef = useRef(null); // Usando ref para manipular o iframe

  const handlePrint = () => {
    iframeRef.current.contentWindow.print(); // Acionando a impressão no iframe
  };

  useEffect( () => {
    const handleKeyUp = (e) => {
      const key = e.key || e.keyCode;
      const isKeyPressed = key === "Escape" || key === 27;

      if (isKeyPressed && visible) {
        onClose();
      };
    };

    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [ visible, onClose ]);

  return (
    <SlidingContact $visible={visible} theme={theme}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <Title>Entre em Contato</Title>
      <SocialLinks>
        <SocialIcon href="https://github.com/IsaiasLourenco" target="_blank" title="Meu GitHub">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/isaias-lourenco/" target="_blank" title="Meu LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </SocialIcon>
        <EmailLink href="mailto:isaiaslourenço2020@gmail.com?subject=Contato%20via%20Portfolio&body=Olá%20Isaias,%20gostaria%20de%20entrar%20em%20contato..." title="Me mande um e-mail">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </EmailLink>
        <SocialIcon href="https://wa.me/5519996745466?text=Sobre%20o%20seu%20portfólio" target="_blank" title="Me mande uma mensagem por WhatsApp">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </SocialIcon>
      </SocialLinks>
      <div>
        <TitleD>Faça o download ou imprima meu CV</TitleD>
        <ActionsContainer>
          <DownloadButton href="/IsaiasLourenço_DevWebFullStack.pdf" download="Curriculo_Isaias_Lourenco.pdf" title="Baixar Currículo">
            <FontAwesomeIcon icon={faFilePdf} size="2x" />
          </DownloadButton>
          <PrintButton onClick={handlePrint} title="Imprimir Currículo">
            <FontAwesomeIcon icon={faPrint} size="2x" />
          </PrintButton>
        </ActionsContainer>
        <iframe
          ref={iframeRef}
          src="/IsaiasLourenço_DevWebFullStack.pdf"
          style={{ display: "none" }} // Ocultando o iframe
        />
      </div>
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
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  transform: ${(props) => (props.$visible ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;
  z-index: 1000;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 40px;
  text-align: center;
  margin-top: 20px;
`;

const SocialLinks = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 18px;
  border: 1px solid white;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.invers};
  }
`;

const EmailLink = styled(SocialIcon)``;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  background: ${({ theme }) => theme.background};
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  z-index: 1100;

  &:hover {
    color: ${({ theme }) => theme.buttonHover};
  }
`;

const TitleD = styled.h2`
  font-size: 20px;
  margin-bottom: 40px;
  text-align: center;
  margin-top: 40px;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const DownloadButton = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.buttonBackground};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const PrintButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.printButton};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.ptnBtnSobre};
  }
`;
