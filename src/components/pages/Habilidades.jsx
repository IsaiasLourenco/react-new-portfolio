import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faDocker,
  faGitAlt,
  faPhp,
  faJava
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";

const Habilidades = ({ visible, onClose }) => {
  const theme = useTheme();

  const habilidades = [
    {
      id: 1,
      title: "PHP / Laravel",
      description: "Desenvolvimento de aplicações web e sistemas de negócio com PHP, orientação a objetos, MVC, Laravel, MySQL, APIs, autenticação, regras de negócio e manutenção de sistemas.",
      image: "phpIcon",
      color: theme.iconPhp,
    },
    {
      id: 2,
      title: "JavaScript",
      description: "Desenvolvimento de interfaces e funcionalidades dinâmicas, manipulação do DOM, consumo de APIs, AJAX, programação assíncrona e integração entre frontend e backend.",
      image: "jsIcon",
      color: theme.iconJs,
    },
    {
      id: 3,
      title: "TypeScript",
      description: "Uso de tipagem estática para aumentar a segurança, previsibilidade e manutenção do código, especialmente em aplicações React e projetos JavaScript modernos.",
      image: "./TS.png",
      color: "#0068AF",
    },
    {
      id: 4,
      title: "React",
      description: "Desenvolvimento de interfaces componentizadas e aplicações SPA utilizando componentes funcionais, Hooks, Context API, React Router e integração com APIs REST.",
      image: "reactIcon",
      color: theme.iconReact,
    },
    {
      id: 5,
      title: "HTML / CSS",
      description: "Construção de interfaces responsivas, semânticas e acessíveis, com foco em estrutura, responsividade, organização visual e experiência do usuário.",
      image: "htmlCssIcon",
      color: theme.iconHtml,
    },
    {
      id: 6,
      title: "SQL & Databases",
      description: "Experiência com MySQL, PostgreSQL, Oracle e DB2, incluindo modelagem relacional, SQL, consultas, índices, transações e integração com aplicações.",
      image: "databaseIcon",
      color: theme.iconDb,
    },
    {
      id: 7,
      title: "Node.js / Express",
      description: "Desenvolvimento de APIs e serviços backend com JavaScript, Node.js, Express, integração com bancos de dados e processamento assíncrono.",
      image: "nodeIcon",
      color: theme.iconNode,
    },
    {
      id: 8,
      title: "Docker",
      description: "Containerização de aplicações e configuração de ambientes consistentes para desenvolvimento, testes e execução de serviços.",
      image: "dockerIcon",
      color: theme.iconDocker,
    },
    {
      id: 9,
      title: "Java / Spring Boot",
      description: "Desenvolvimento e estudo de aplicações backend com Java e Spring Boot, incluindo APIs REST, microsserviços, integração com bancos de dados e comunicação assíncrona.",
      image: "javaIcon",
      color: theme.iconJava,
    },
    {
      id: 10,
      title: "Git / GitHub",
      description: "Versionamento de código, branches, commits, pull requests, resolução de conflitos e organização de projetos utilizando fluxos de trabalho colaborativos.",
      image: "gitIcon",
      color: theme.iconGit,
    },
  ];

  const iconMap = {
    jsIcon: faJs,
    reactIcon: faReact,
    nodeIcon: faNodeJs,
    gitIcon: faGitAlt,
    dockerIcon: faDocker,
    databaseIcon: faDatabase,
    phpIcon: faPhp,
    javaIcon: faJava,
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
    <SlidingHabilidades $visible={visible} theme={theme}>
      <CloseButton onClick={onClose}>×</CloseButton>

      <HabilidadesSection id="habilidades">
        <Title>Habilidades</Title>

        <Subtitle>
          Tecnologias e ferramentas que fazem parte da minha atuação atual
          no desenvolvimento de aplicações e soluções digitais.
        </Subtitle>

        <Grid>
          {habilidades.map((habilidade) => (
            <Card key={habilidade.id}>
              {habilidade.image === "htmlCssIcon" ? (
                <IconGroup>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    color={theme.iconHtml}
                  />

                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    color={theme.iconCss}
                  />
                </IconGroup>
              ) : iconMap[habilidade.image] ? (
                <FontAwesomeIcon
                  icon={iconMap[habilidade.image]}
                  color={habilidade.color}
                  style={{ width: '58px', height: '58px' }}
                />
              ) : (
                <Image
                  src={habilidade.image}
                  alt={habilidade.title}
                />
              )}

              <CardTitle>{habilidade.title}</CardTitle>

              <Description>
                {habilidade.description}
              </Description>
            </Card>
          ))}
        </Grid>
      </HabilidadesSection>
    </SlidingHabilidades>
  );
};

export default Habilidades;

const SlidingHabilidades = styled.div`
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

const HabilidadesSection = styled.section`
  padding: 70px 30px 50px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 10px;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  }
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  svg {
    width: 52px;
    height: 58px;
  }
`;

const Image = styled.img`
  width: 58px;
  height: 58px;
  object-fit: contain;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin: 20px 0 12px;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  margin: 0;
  opacity: 0.85;
`;
