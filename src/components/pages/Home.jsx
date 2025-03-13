import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contato";

const Home = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false); // Estado para o componente de contato

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

  return (
    <HomeContainer>
      <Section>
        <TextContainer>
          <Title>Olá, sou Isaias Lourenço</Title>
          <Subtitle>Desenvolvedor Front-End e Criador de Soluções Digitais</Subtitle>
          <ButtonsContainer>
            <CallToAction onClick={handleProjectsClick}>Veja meus projetos →</CallToAction>
            <ContactButton onClick={handleContactClick}>Fale Comigo →</ContactButton>
          </ButtonsContainer>
          <Arrow onClick={handleArrowClick}>
            <span>Sobre Mim</span>
          </Arrow>
        </TextContainer>
      </Section>
      <About />
      <SlidingProjects visible={showProjects}>
        <CloseButton onClick={() => setShowProjects(false)}>×</CloseButton>
        <Projects />
      </SlidingProjects>
      {/* Adicionando o componente Contact com controle de visibilidade */}
      <Contact visible={showContact} onClose={handleCloseContact} />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
  width: 100%;
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
  width: 35px;
  height: 35px;
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
`;

const TextContainer = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
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
