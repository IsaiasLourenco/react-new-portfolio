import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBug } from '@fortawesome/free-solid-svg-icons';
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contato";
import Experiencia from "./Experiencia";  // Importando o novo componente
import Habilidades from "./Habilidades";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggler from "../ThemeToggler";

const Home = () => {
  const theme = useTheme();
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false); // Estado para o componente de contato
  const [showExperiencia, setShowExperiencia] = useState(false); // Estado para o componente de experiência
  const [showHabilidades, setShowHabilidades] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  const handleProjectsClick = () => {
    setShowProjects(true); // Exibe a seção de projetos
  };

  const handleCloseProjects = () => {
    setShowProjects(false);
  };


  const handleContactClick = () => {
    setShowContact(true); // Exibe o contato
  };

  const handleCloseContact = () => {
    setShowContact(false); // Fecha o contato
  };

  const handleExperienciaClick = () => {
    setShowExperiencia(true); // Exibe a seção de experiências
  };

  const handleCloseExperiencia = () => {
    setShowExperiencia(false); // Fecha a seção de experiências
  };

  const handleHabilidadesClick = () => {
    setShowHabilidades(true); // Exibe a seção de habilidades
  };

  const handleCloseHabilidades = () => {
    setShowHabilidades(false); // Fecha a seção de habilidades
  };

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
  };

  const handleEducationClick = () => {
    setShowEducation(true);
  };

  const handleCloseEducation = () => {
    setShowEducation(false);
  };

  return (
    <HomeContainer theme={theme}>

      <ThemeToggler />

      <Section>
        <TechIconsLeft>
          <FontAwesomeIcon icon={faHtml5} size="3x" color={theme.iconHtml} />
          <FontAwesomeIcon icon={faCss3Alt} size="3x" color={theme.iconCss} />
          <FontAwesomeIcon icon={faJs} size="3x" color={theme.iconJs} />
          <FontAwesomeIcon icon={faReact} size="3x" color={theme.iconReact} />
        </TechIconsLeft>
        <TextContainer>
          <Title>Olá, sou Isaias Lourenço</Title>
          <Subtitle>Dev Full Stack e Criador de Soluções Digitais</Subtitle>
          <ButtonsContainer>
            <CallToAction onClick={handleProjectsClick}>Meus Projetos →</CallToAction>
            <ContactButton onClick={handleContactClick}>Fale Comigo →</ContactButton>
            <CallToAction onClick={handleAboutClick}>Sobre Mim →</CallToAction>
            <CallToAction onClick={handleHabilidadesClick}>← Minhas Habilidades</CallToAction>
            <ContactButton onClick={handleExperienciaClick}>← Experiência Profissional</ContactButton>
            <CallToAction onClick={handleEducationClick}>← Educação</CallToAction>
          </ButtonsContainer>
        </TextContainer>
        <TechIconsRight>
          <FontAwesomeIcon icon={faPhp} size="3x" color={theme.iconPhp} />
          <FontAwesomeIcon icon={faNodeJs} size="3x" color={theme.iconNode} />
          <FontAwesomeIcon icon={faDatabase} size="3x" color={theme.iconDb} />
          <FontAwesomeIcon icon={faBug} size="3x" color={theme.iconBug} />
        </TechIconsRight>
      </Section>

      {/* Adicionando componentes com controle de visibilidade */}
      <Projects visible={showProjects} onClose={handleCloseProjects} />
      <Contact visible={showContact} onClose={handleCloseContact} />
      <About visible={showAbout} onClose={handleCloseAbout} />
      <Experiencia visible={showExperiencia} onClose={handleCloseExperiencia} />
      <Habilidades visible={showHabilidades} onClose={handleCloseHabilidades} />
      <Education visible={showEducation} onClose={handleCloseEducation} />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150%;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 100px minmax(500px, 700px) 100px;
  align-items: center;
  justify-content: center;
  column-gap: 40px;
  width: 100%;
  min-height: 100vh;
  padding: 40px 30px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.boxBackground};
  color: ${({ theme }) => theme.text};
  text-align: center;

  @media (max-width: 900px) {
    grid-template-columns: 70px minmax(0, 1fr) 70px;
    column-gap: 20px;
    padding: 30px 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    row-gap: 20px;
    padding: 20px;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;

  @media(max-width: 480px){
    font-size: 20px;
  }

`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 30px;

  @media (max-width: 480px){
    font-size: 15px
  }

`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 150px;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
  max-width: 300px;

  @media (max-width: 480px) {
    align-items: center;
    max-width: 100%;
    width: 80%;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CallToAction = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 12px 24px;
  font-size: 17px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0;
  transition: transform 0.2s ease, background 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
    transform: translateY(-2px);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 12px;
    font-weight: bold;
  }
`;

const ContactButton = styled.button`
  width: 100%;
  font-size: 17px;
  color: ${({ theme }) => theme.buttonText};
  background: ${({ theme }) => theme.buttonBackground};
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 0;
  transition: transform 0.2s ease, background 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.buttonHover};
    transform: translateY(-2px);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 12px;
    font-weight: bold;
  }
`;

const TechIconsLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;

  @media (max-width: 900px) {
    gap: 25px;
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 600px) {
    grid-row: 1;
    flex-direction: row;
    gap: 20px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const TechIconsRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;

  @media (max-width: 900px) {
    gap: 25px;
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 600px) {
    grid-row: 3;
    flex-direction: row;
    gap: 20px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.buttonText};
  font-size: 24px;
  cursor: pointer;
  z-index: 1100;

  &:hover {
    color: ${({ theme }) => theme.buttonHover};
  }
`;
