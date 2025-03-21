import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'; // FontAwesome
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // Alteração aqui, ícone de banco de dados
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contato";
import Experiencia from "./Experiencia";  // Importando o novo componente
import Habilidades from "./Habilidades";
import ThemeContext from "../context/ThemeContext";
import ThemeToggler from "../ThemeToggler";

const Home = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false); // Estado para o componente de contato
  const [showExperiencia, setShowExperiencia] = useState(false); // Estado para o componente de experiência
  const [showHabilidades, setShowHabilidades] = useState(false);

  const handleProjectsClick = () => {
    setShowProjects(true); // Exibe a seção de projetos
  };

  const handleArrowClick = () => {
    // Rola suavemente até a seção "Sobre Mim"
    document.getElementById("sobre-mim").scrollIntoView({ behavior: "smooth" });
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

  return (
    <HomeContainer>
      
        {/* <ThemeToggler /> */}
      
      <Section>
        <TechIconsLeft>
          <FontAwesomeIcon icon={faHtml5} size="3x" color="#E34F26" />
          <FontAwesomeIcon icon={faCss3Alt} size="3x" color="#1572B6" />
          <FontAwesomeIcon icon={faJs} size="3x" color="#F7DF1E" />
        </TechIconsLeft>

        <TextContainer>
          <Title>Olá, sou Isaias Lourenço</Title>
          <Subtitle>Dev Full Stack e Criador de Soluções Digitais</Subtitle>
          <ButtonsContainer>
            <CallToAction onClick={handleProjectsClick}>Meus projetos →</CallToAction>
            <ContactButton onClick={handleContactClick}>Fale Comigo →</ContactButton>
            <CallToAction onClick={handleHabilidadesClick}>← Minhas Habilidades</CallToAction>
            <ContactButton onClick={handleExperienciaClick}>← Experiência Profissional</ContactButton>
          </ButtonsContainer>
          <Arrow onClick={handleArrowClick}>
            <span>Sobre Mim</span>
          </Arrow>
        </TextContainer>

        <TechIconsRight>
          <FontAwesomeIcon icon={faReact} size="3x" color="#61DAFB" />
          <FontAwesomeIcon icon={faNodeJs} size="3x" color="#8CC84B" />
          <FontAwesomeIcon icon={faDatabase} size="3x" color="#306D8C" />
        </TechIconsRight>
      </Section>

      <About />
      <SlidingProjects visible={showProjects}>
        <CloseButton onClick={() => setShowProjects(false)}>×</CloseButton>
        <Projects />
      </SlidingProjects>

      {/* Adicionando o componente Contact com controle de visibilidade */}
      <Contact visible={showContact} onClose={handleCloseContact} />
      <Experiencia visible={showExperiencia} onClose={handleCloseExperiencia} /> {/* Novo componente de experiência */}
      <Habilidades visible={showHabilidades} onClose={handleCloseHabilidades} />
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
  height: 150%
`;

const bounce = keyframes`
  0% {
    transform: translate(-50%, 0); /* Posição inicial */
  }
  50% {
    transform: translate(-50%, -10px); /* Move para cima */
  }
  100% {
    transform: translate(-50%, 0); /* Volta à posição inicial */
  }
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 25px;
  height: 25px;
  background: url(/seta_preta.png) no-repeat center;
  background-size: contain;
  animation: ${bounce} 0.8s infinite ease-in-out;
  border: none;
  outline: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;

  span {
    margin-top: 80px; /* Espaço entre o texto e a imagem da seta */
  }

  cursor: pointer; /* Cursor de clique */

  @media (max-width: 480px) {
    bottom: 20px;
    width: 80px;
    height: 40px;
    left: 55%;
    transform: translateX(-50%);
  }

`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1e90ff, #000);
  color: white;
  text-align: center;

    @media (max-width: 480px) {
    width: 100%; /* Garante que cobre toda a largura */
    padding-top: 20px;
    top: -50px;
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
    max-width: 100%; /* Garante que os botões ocupem mais espaço */
    width: 80%;
    padding: 0 20px; /* Ajuste para centralizar */
    margin-left: 20px;
  }
`;

const CallToAction = styled.button`
  background-color: #ff4500;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px 0;
  transition: background 0.3s;
  
  &:hover {
    background-color: #e03e00;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

`;

const ContactButton = styled.button`
  font-size: 18px;
  color: #fff;
  background: #ff4500;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ff6347;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const TechIconsLeft = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TechIconsRight = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SlidingProjects = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%; /* Pode ajustar para uma largura menor, como 80% */
  max-width: 700px;
  background-color: #222;
  color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  transform: ${(props) => (props.visible ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;
  z-index: 1000;
  overflow-y: auto; /* Para rolagem interna, caso necessário */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 1100;

  &:hover {
    color: #ff6347;
  }
`;
