import React, { useEffect } from "react";
import styled, { keyframes, useTheme } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBug } from '@fortawesome/free-solid-svg-icons';

const SplashScreen = ({ onFinish }) => {
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 10000);

    return () => {
      clearTimeout(timer);
    };

  }, [onFinish]);

  return (
    <SplashContainer theme={theme}>
      <Section theme={theme}>
        <Content>
          <PersonalContainer>
            <Myself
              src="/foto_2.png"
              alt="Isaias Lourenço"
            />
          </PersonalContainer>
          <BoxPraCima>
            <Logo src="/ico.png" alt="Logo Portfolio" />
            <Text theme={theme}>Bem-vindo ao meu Perfil Profissional!</Text>
            <SubText theme={theme}>Portfolio de Isaias Lourenço...</SubText>
          </BoxPraCima>
        </Content>
      </Section>
      <TechIconsLeft>
        <FontAwesomeIcon icon={faHtml5} size="3x" color={theme.iconHtml} />
        <FontAwesomeIcon icon={faCss3Alt} size="3x" color={theme.iconCss} />
        <FontAwesomeIcon icon={faJs} size="3x" color={theme.iconJs} />
        <FontAwesomeIcon icon={faReact} size="3x" color={theme.iconReact} />
      </TechIconsLeft>
      <TechIconsRight>
        <FontAwesomeIcon icon={faPhp} size="3x" color={theme.iconPhp} />
        <FontAwesomeIcon icon={faNodeJs} size="3x" color={theme.iconNode} />
        <FontAwesomeIcon icon={faDatabase} size="3x" color={theme.iconDb} />
        <FontAwesomeIcon icon={faBug} size="3x" color={theme.iconBug} />
      </TechIconsRight>
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

const revealPhoto = keyframes`

  0% {
    opacity: 0;
    transform: scale(0.55);
    filter: blur(12px);
  }

  20% {
    opacity: 0;
    transform: scale(0.55);
    filter: blur(12px);
  }

  55% {
    opacity: 1;
    transform: scale(1.08);
    filter: blur(2px);
  }

  75% {
    opacity: 1;
    transform: scale(0.98);
    filter: blur(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
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
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px){
    margin-top: 15px;
    margin-bottom: 80px;
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
  position: relative;
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
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35);

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
    border-width: 4px;
  }
`;

const Myself = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  animation: ${revealPhoto} 3.5s ease-out forwards;
`;

const Logo = styled.img`
  width: 150px;
  animation: ${pulse} 1.5s infinite;

  @media (max-width: 480px) {
    width: 120px;
  }
`;

const Text = styled.h1`
  margin-top: 10px;
  font-size: 16px;
  animation: ${shake} 0.5s infinite;
  color: ${({ theme }) => theme.text};

  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 15px;
  }
`;

const SubText = styled.h1`
  margin-top: 10px;
  font-size: 10px;
  animation: ${shake} 0.5s infinite;
  color: ${({ theme }) => theme.text};

  @media (max-width: 480px) {
    margin-top: 5px;
    margin-bottom: 20px;
  }
`;

const TechIconsLeft = styled.div`
  position: absolute;
  left: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;

  @media (max-width: 900px) {
    left: 5%;
    gap: 25px;
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 600px) {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    gap: 20px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const TechIconsRight = styled.div`
  position: absolute;
  right: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;

  @media (max-width: 900px) {
    right: 5%;
    gap: 25px;
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 600px) {
    bottom: 30px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    gap: 20px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;
