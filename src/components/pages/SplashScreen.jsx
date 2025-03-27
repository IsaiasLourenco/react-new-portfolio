import React, { useEffect, useState } from "react";
import styled, { keyframes, useTheme } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'; // FontAwesome
import { ThemeContext } from "../context/ThemeContext";
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // PostgreSQL

const SplashScreen = ({ onFinish }) => {
  const theme = useTheme();
  console.log("Valor do theme.boxBackground:", theme.boxBackground);
  const [showFullBody, setShowFullBody] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFullBody(true); // Troca para a foto de corpo inteiro
    }, 5000); // Mostra o rosto por 5 segundos

    const timer2 = setTimeout(() => {
      onFinish(); // Finaliza a splash
    }, 10000); // Duração total da splash (10 segundos)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <SplashContainer theme={theme}>
      <Section theme={theme}>
        <Content>
          <PersonalContainer>
            <Myself
              src="/eu-pequeno.png"
              alt="Isaias Rosto"
              $visible={!showFullBody}
              $small
            />
            <Myself
              src="/eu-grande.png"
              alt="Isaias Corpo Inteiro"
              $visible={showFullBody}
            />
          </PersonalContainer>
          <BoxPraCima>
            <Logo src="/ico.png" alt="Logo Portfolio" />
            <Text theme={theme}>Bem-vindo ao meu Perfil Profissional!</Text>
            <SubText theme={theme}> Portfolio de Isaias Lourenço...</SubText>
          </BoxPraCima>
        </Content>
      </Section>

      {/* Ícones em colunas com 3 ícones à esquerda e 3 à direita */}
      <IconsContainer>
        <IconsColumn>
          <FontAwesomeIcon icon={faHtml5} size="3x" color={theme.iconHtml} />
          <FontAwesomeIcon icon={faCss3Alt} size="3x" color={theme.iconCss} />
          <FontAwesomeIcon icon={faJs} size="3x" color={theme.iconJs} />
        </IconsColumn>
        <IconsColumn>
          <FontAwesomeIcon icon={faReact} size="3x" color={theme.iconReact} />
          <FontAwesomeIcon icon={faNodeJs} size="3x" color={theme.iconNode} />
          <FontAwesomeIcon icon={faDatabase} size="3x" color={theme.iconDb} />
        </IconsColumn>
      </IconsContainer>
    </SplashContainer>
  );
};

export default SplashScreen;

// Animações
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  75% {
    transform: translateX(2px);
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.boxBackground};
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }

`;

const BoxPraCima = styled.div`
  margin-top: -50px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px){
      margin-bottom: 250px;
      margin-left: 80px;
  }

`;

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.background}; 
  color: ${({ theme }) => theme.text};
  text-align: center;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
  gap: 10px;

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    
  }
`;

const PersonalContainer = styled.div`
  position: relative;
  width: 150px; 
  height: 300px;
`;

const Myself = styled.img`
  position: absolute;
  width: ${(props) => (props.$small ? "80%" : "100%")};
  height: auto;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 1s ease-in-out; 
  margin-top: 70px;
  margin-bottom: 0px;
  margin-left: -75px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction:column;
    margin-top: 50px;
    margin-left: 10px;
  }

`;

const Logo = styled.img`
  width: 150px;
  animation: ${pulse} 1.5s infinite;
  
  @media (max-width: 480px) {
     margin-right: 80px;=  
  }

  }
`;

const Text = styled.h1`
  margin-top: 10px;
  font-size: 16px;
  animation: ${shake} 0.5s infinite;
  color: ${({ theme }) => theme.text};

  @media (max-width: 480px) {
    margin-left: -50px;
    margin-top: 20px;
  }
`;

const SubText = styled.h1`
  margin-top: 10px;
  font-size: 10px;
  animation: ${shake} 0.5s infinite;
  color: ${({ theme }) => theme.text};

  @media (max-width: 480px) {
    margin-left: -50px;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`;

// Container dos ícones
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%; 
  position: absolute;
  `;

const IconsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;