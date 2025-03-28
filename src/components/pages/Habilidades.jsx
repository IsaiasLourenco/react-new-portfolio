import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faDocker, faGitSquare, faGithub, faAngular } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { ThemeContext } from '../context/ThemeContext';

const Habilidades = ({ visible, onClose }) => {
  const theme = useTheme();
  const habilidades = [
    {
      id: 1,
      description: "Especialista em HTML5, com amplo domínio na estruturação de páginas web semânticas e acessíveis. Experiente no uso de elementos modernos para otimizar SEO, melhorar a navegabilidade e promover boas práticas de acessibilidade (ARIA). Capaz de criar layouts eficientes e bem organizados, garantindo compatibilidade entre navegadores e dispositivos. Comprometido em construir bases sólidas para aplicações web, aliando estrutura, clareza e funcionalidade no desenvolvimento de projetos.",
      image: "htmlIcon",
      color: theme.iconHtml,
    },
    {
      id: 2,
      description: "Profissional com domínio em CSS3, especializado em criar estilos modernos e responsivos para interfaces web. Experiente na utilização de seletores avançados, pseudoelementos e media queries para garantir designs adaptáveis e acessíveis em diferentes dispositivos. Hábil no uso de animações, transições e transformações para proporcionar interatividade e sofisticação visual. Comprometido em seguir princípios de design, organização modular e reutilização de código, garantindo eficiência e estética no desenvolvimento front-end.",
      image: "cssIcon",
      color: theme.iconCss,
    },
    {
      id: 3,
      description: "Desenvolvedor experiente em JavaScript, com domínio em criar aplicações dinâmicas e interativas. Possuo habilidade em manipulação de DOM, gerenciamento de eventos, consumo de APIs e desenvolvimento de funcionalidades personalizadas. Trabalho com técnicas modernas, como programação assíncrona e uso eficiente de Promises e Async/Await. Focado em escrever código modular, reutilizável e bem documentado, garantindo escalabilidade e manutenibilidade nos projetos.",
      image: "jsIcon",
      color: theme.iconJs,
    },
    {
      id: 4,
      description: "Experiente no uso de Git, com sólida habilidade em versionamento de código e trabalho colaborativo em projetos de software. Domínio em operações essenciais, como commit, pull, push e criação e gerenciamento de branches. Proficiente em resolver conflitos de merge e em rastrear alterações no código para garantir a integridade do projeto. Hábil em criar workflows eficientes utilizando tags, stashes e rebase, maximizando a produtividade no desenvolvimento e na integração contínua.",
      image: "gitIcon",
      color: theme.iconGit,
    },
    {
      id: 5,
      description: "Usuário experiente do GitHub, com habilidade em gerenciar repositórios, colaborar em projetos e controlar versões de código de forma eficiente. Familiarizado com o uso de branches, merge, pull requests e resolução de conflitos para trabalho em equipe. Capaz de criar e manter documentações claras e informativas, como README, para guiar colaboradores e usuários. Proativo na utilização de issues e projetos para organizar tarefas e acompanhar o progresso no desenvolvimento de software.",
      image: "githubIcon",
      color: theme.iconGitHub,
    },
    {
      id: 6,
      description: "Desenvolvedor habilidoso com experiência em React, especializado na criação de interfaces de usuário reutilizáveis e dinâmicas. Proficiente no uso de componentes funcionais, hooks (como useState e useEffect) e no gerenciamento eficiente de estado com bibliotecas como Redux ou Context API. Experiente na integração com APIs RESTful e no uso de rotas com React Router para criar aplicações single-page robustas. Comprometido em seguir boas práticas e otimizar o desempenho para proporcionar experiências de usuário fluidas e modernas.",
      image: "reactIcon",
      color: theme.iconReact,
    },
    {
      id: 7,
      description: "Especialista em Node.js, com ampla experiência no desenvolvimento de aplicações backend robustas e escaláveis. Hábil em criar APIs RESTful eficientes e na integração com bancos de dados como PostgreSQL e MongoDB. Experiência no uso de frameworks como Express.js para gerenciar rotas e middlewares, garantindo máxima performance. Familiaridade com conceitos de programação assíncrona e streams de dados, focado em criar soluções otimizadas para sistemas de alta demanda.",
      image: "nodeIcon",
      color: theme.iconNode,
    },
    {
      id: 8,
      description: "Profundo entendimento de Docker para criação e gerenciamento de ambientes containerizados. Capacidade de configurar e otimizar Dockerfiles, além de orquestrar múltiplos containers usando Docker Compose para ambientes de desenvolvimento e produção. Experiência em integrar Docker com pipelines de CI/CD para entrega contínua. Comprometido em garantir consistência e escalabilidade em aplicações distribuídas.",
      image: "dockerIcon",
      color: theme.iconDocker,
    },
    {
      id: 9,
      description: "Sólido domínio no design, criação e gerenciamento de bancos de dados PostgreSQL, MySQL, Oracle e IBM/DB2. Experiência em modelagem relacional, otimização de consultas e administração de índices para melhorar a performance das aplicações. Conhecimento de criação de Views para melhor manutenção e seleção de tabelas referenciadas. Habilidade em escrever queries complexas usando SQL e PL/pgSQL, além de integrar o banco de dados com linguagens backend como Node.js.. Familiarizado com backup, replicação e configuração de permissões para manter segurança e confiabilidade dos dados.",
      image: "databaseIcon",
      color: theme.iconDb,
    },
    {
      id: 10,
      description: "Especialista em TypeScript, com vasta experiência na integração dessa poderosa linguagem de tipagem estática em projetos modernos. Hábil na criação de tipos personalizados, interfaces e generics para garantir segurança e clareza no código. Domínio em transformar projetos JavaScript em aplicações escaláveis e robustas ao utilizar TypeScript em frameworks como React e Node.js.. Experiência na configuração de compiladores, integração com bibliotecas de terceiros e uso de ferramentas avançadas de desenvolvimento. Focado em promover boas práticas, reduzir erros em tempo de execução e melhorar a manutenção de sistemas de alta complexidade.",
      image: "./TS.png",
      color: "#0068AF",
    },
    {
      id: 11,
      description: "Desenvolvedor habilidoso em Angular, especializado na criação de aplicações single-page (SPAs) escaláveis e dinâmicas. Proficiente em recursos avançados do framework, como componentes reutilizáveis, injeção de dependências, RxJS para programação reativa e gerenciamento de estado com NgRx. Experiente na integração com APIs RESTful, otimização de desempenho com lazy loading e testes com Jasmine/Karma. Comprometido em seguir boas práticas e criar interfaces modernas e responsivas, garantindo soluções robustas e de alta qualidade.",
      image: "angularIcon",
      color: theme.iconAngular,
    },
  ];

  // Mapeamento de ícones
  const iconMap = {
    htmlIcon: faHtml5,
    cssIcon: faCss3Alt,
    jsIcon: faJs,
    githubIcon: faGithub,
    reactIcon: faReact,
    nodeIcon: faNodeJs,
    gitIcon: faGitSquare,
    dockerIcon: faDocker,
    databaseIcon: faDatabase,
    angularIcon: faAngular,
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
    <SlidingHabilidades $visible={visible} theme={theme} >
      <CloseButton onClick={onClose}>×</CloseButton>
      <HabilidadesSection id="habilidades">
        <Title>Habilidades</Title>
        <Grid>
          {habilidades.map((habilidade) => (
            <Card key={habilidade.id}>
              {iconMap[habilidade.image] ? (
                <FontAwesomeIcon  icon={iconMap[habilidade.image]} 
                                  size="3x" 
                                  color={habilidade.color}
                                  style={{ width: '60px', height: '60px'}}                  
                />
              ) : (
                <Image  src={habilidade.image} 
                        alt={habilidade.title} 
                        style={{ width: '80px', height: '60px', marginBottom: '1px'}}
                />
              )}
              <Description>{habilidade.description}</Description>
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
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  z-index: 1100;

  &:hover {
    color: ${({ theme }) => theme.buttonHover};
  }
`;

const HabilidadesSection = styled.section`
  padding: 50px 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;
