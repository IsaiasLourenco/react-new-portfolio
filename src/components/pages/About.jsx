import React from "react";
import styled, { useTheme } from "styled-components";
import Education from "./Education";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {

  const theme = useTheme();

  const handleBtnEducationClick = () => {
    // Rola suavemente até a seção "Educação"
    document.getElementById("education").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="sobre-mim" theme={theme}>
      <Content>
        <ProfileImage src="/eu-pequeno.png" alt="Isaias Lourenço" />
        <TextContainer>
          <Title>Sobre Mim</Title>
          <Description>
            <Paragraph>
              Com mais de 10 anos de experiência em programação Cobol e VBA na IBM, além de atuações como desenvolvedor PL-SQL na New Soft Intelligence e Quality Assurance na BairesDev, construí uma base técnica sólida e versátil.
              Sou apaixonado por tecnologia e atualmente me especializo em desenvolvimento Full Stack. Tenho habilidades avançadas em PHP e Ajax, além de domínio em HTML, CSS, JavaScript, SQL, Git e GitHub. Estou aprimorando meu conhecimento em Node.js, TypeScript e Express, sempre buscando expandir minhas competências.
              Meu compromisso é criar soluções eficientes e escaláveis, tanto no Frontend quanto no Backend. Busco oportunidades que me permitam aplicar minhas habilidades em projetos desafiadores e contribuir para o sucesso da equipe com dedicação e inovação.
            </Paragraph>
            <EmailLink href="mailto:isaiaslourenco2020@gmail.com?subject=Contato%20via%20Portfolio&body=Olá%20Isaias,%20gostaria%20de%20entrar%20em%20contato..." title="Me envie um e-mail" >
              📧 isaiaslourenco2020@gmail.com
            </EmailLink>
          </Description>
          <LadoAlado>
            <GoToEducationButton onClick={handleBtnEducationClick}>
              ↓ Educação
            </GoToEducationButton>
            <BackToHomeButton onClick={handleBackToHomeClick}>
              ↑ Home
            </BackToHomeButton>
          </LadoAlado>
        </TextContainer>
      </Content>
      <Education />
    </Section>
  );
};

const handleBackToHomeClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default About;

const Section = styled.div`
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background: ${({ theme }) => theme.backgroundSobre};
  color: white;
  width: 100%;
  min-height: 100vh;
  overflow: hidden:
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  max-width: 1000px;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.text};
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
`;

const TextContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;

      @media (max-width: 480px){
    justify-content: center;
    margin: 0 25px; /* Adiciona margem lateral */

`;

const Title = styled.h2`
  margin-top: 50px;
  font-size: 32px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text};
  `;

const Description = styled.p`
  margin-top: 50px;
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  text-align: justify;
`;

const EmailLink = styled.a`
  display: block; /* Faz o link ocupar toda a largura disponível */
  text-align: start; /* Centraliza o e-mail */
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px; 

  &:hover {
    color: ${({ theme }) => theme.txtSobreHover};
    text-decoration: underline;
  }
`;

const BackToHomeButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.btnSobre};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  align-self: center;

  &:hover {
    background-color: ${({ theme }) => theme.btnSobreHover};
  }
`;

const GoToEducationButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.btnSobre};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  align-self: center;

  &:hover {
    background-color: ${({ theme }) => theme.btnSobreHover};
  }
`;

const LadoAlado = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 480px){
    justify-content: center;
  }


`