import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const About = ({ visible, onClose }) => {

  const theme = useTheme();

  useEffect(() => {
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
  }, [visible, onClose]);

  return (
    <SlidingAbout $visible={visible} theme={theme}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <Content>
        <ProfileImage src="/foto_2.png" alt="Isaias Lourenço" />
        <TextContainer>
          <Title>Sobre Mim</Title>
          <Description>
            <Paragraph>
              Minha carreira profissional em tecnologia começou em 2008, após meu primeiro contato com programação ainda em 1994. Ao longo dessa trajetória, construí experiência em desenvolvimento, testes de software, banco de dados e infraestrutura, atuando em empresas como IBM, BairesDev, DXC Technology e em projetos próprios pela Vetor256.
              Tenho experiência no desenvolvimento de aplicações Full Stack, trabalhando principalmente com PHP, Laravel, JavaScript, React, TypeScript, Node.js, HTML, CSS e bancos de dados como MySQL e PostgreSQL. Também possuo experiência com APIs REST, AJAX, Docker, Git, GitHub e desenvolvimento de sistemas seguindo boas práticas e arquitetura MVC.
              Minha trajetória também inclui desenvolvimento COBOL, VBA, PL/SQL, Oracle Forms e Reports, além de Quality Assurance e testes automatizados. Essa diversidade de experiências me proporcionou uma visão ampla do ciclo de desenvolvimento de software, desde a análise e qualidade até a construção e manutenção de aplicações.
              Atualmente, sigo desenvolvendo projetos web e ampliando constantemente minhas competências, incluindo soluções com React, Laravel, APIs, Docker e desenvolvimento mobile com React Native e Expo. Meu objetivo é criar soluções eficientes, escaláveis e bem estruturadas, contribuindo com experiência prática, capacidade de adaptação e paixão por tecnologia para projetos e equipes desafiadoras.
            </Paragraph>
          </Description>
        </TextContainer>
      </Content>
    </SlidingAbout>
  );
};

export default About;

const SlidingAbout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 900px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  transform: ${(props) => (props.$visible ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;
  z-index: 1000;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 30px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  z-index: 1100;
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.buttonHover};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  padding: 60px 50px 40px;
  box-sizing: border-box;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    padding: 70px 25px 40px;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.text};
  flex-shrink: 0;
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
`;

const TextContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 32px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  text-align: justify;
  @media (max-width: 768px) {
    text-align: left;
  }
`;
