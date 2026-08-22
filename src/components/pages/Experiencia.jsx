import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";

const Experiencia = ({ visible, onClose }) => {
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
    <SlidingExperiencia $visible={visible} theme={theme}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <Content>
        <Title>Experiência Profissional</Title>
        <Subtitle>
          Experiência em desenvolvimento de software, sistemas corporativos,
          qualidade, bancos de dados e soluções digitais.
        </Subtitle>
        <ExperienceList>
          <Experience>
            <Year>Nov 2024 - Presente</Year>
            <Position>IT Systems Analyst / Full-Stack Developer</Position>
            <Company>Vetor256</Company>
            <Description>
              Desenvolvimento de aplicações e soluções digitais utilizando PHP,
              Laravel, JavaScript, TypeScript, React, MySQL, APIs e tecnologias
              modernas. Atuação em todo o ciclo de desenvolvimento, incluindo
              análise de requisitos, arquitetura, implementação, banco de dados,
              testes, debugging e deploy.
            </Description>
            <TechStack>
              PHP • Laravel • React • JavaScript • TypeScript • MySQL • Redis • Docker • APIs
            </TechStack>
          </Experience>
          <Experience>
            <Year>Mar 2022 - Dez 2022</Year>
            <Position>QA Engineer</Position>
            <Company>BairesDev</Company>
            <Description>
              Execução de testes manuais e automatizados para aplicações de
              clientes internacionais da área de saúde. Criação e execução de
              casos de teste, validação de fluxos de UI, integração e regressão,
              identificação de defeitos e colaboração com equipes Agile.
            </Description>
            <TechStack>
              Selenium • Testes de Software • Jira • GitHub • Agile
            </TechStack>
          </Experience>
          <Experience>
            <Year>2023 - 2024</Year>
            <Position>Analista de Infraestrutura</Position>
            <Company>DXC Technology</Company>
            <Description>
              Suporte à infraestrutura e aos sistemas utilizados em ambientes
              corporativos e de produção, incluindo manutenção de equipamentos,
              software, redes, impressoras e gestão de incidentes através do
              ServiceNow.
            </Description>
            <TechStack>
              Infraestrutura • Redes • ServiceNow • Suporte Corporativo
            </TechStack>
          </Experience>
          <Experience>
            <Year>Jul 2018 - Dez 2018</Year>
            <Position>PL/SQL Developer</Position>
            <Company>NSI Informática</Company>
            <Description>
              Desenvolvimento e manutenção de funcionalidades utilizando Oracle
              PL/SQL, Oracle Forms e Oracle Reports para sistemas voltados a
              processos de importação e exportação, incluindo integração de dados
              e suporte à evolução das aplicações.
            </Description>
            <TechStack>
              Oracle • PL/SQL • Oracle Forms • Oracle Reports • SQL
            </TechStack>
          </Experience>
          <Experience>
            <Year>Abr 2008 - Nov 2017</Year>
            <Position>Software Quality Assurance Analyst / Systems Analyst</Position>
            <Company>IBM</Company>
            <Description>
              Atuação em sistemas corporativos de missão crítica, envolvendo
              desenvolvimento, análise e qualidade de software. Experiência com
              COBOL, DB2, VBA, ambientes IBM z/OS, testes funcionais, integração,
              regressão, análise de requisitos e investigação de defeitos.
            </Description>
            <TechStack>
              COBOL • DB2 • z/OS • JCL • VBA • SAP • ClearCase • ClearQuest • RUP
            </TechStack>
          </Experience>
        </ExperienceList>
      </Content>
    </SlidingExperiencia>
  );
};

export default Experiencia;

const SlidingExperiencia = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-width: 700px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
  transform: ${(props) => (props.$visible ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.5s ease-in-out;
  z-index: 1000;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 32px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  z-index: 1100;
  line-height: 1;
  &:hover {
    color: ${({ theme }) => theme.buttonHover};
  }
`;

const Content = styled.div`
  padding: 70px 30px 50px;
`;

const Title = styled.h2`
  font-size: 36px;
  margin: 0 0 10px;
  text-align: center;
`;

const Subtitle = styled.p`
  max-width: 580px;
  margin: 0 auto 40px;
  text-align: center;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Experience = styled.div`
  padding: 22px 20px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  }
`;

const Year = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px;
  color: ${({ theme }) => theme.buttonHover};
`;

const Position = styled.h4`
  font-size: 20px;
  margin: 0 0 6px;
  font-weight: bold;
`;

const Company = styled.p`
  font-size: 15px;
  font-style: italic;
  margin: 0;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
`;

const Description = styled.p`
  font-size: 15px;
  margin: 16px 0 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;

const TechStack = styled.p`
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
`;
