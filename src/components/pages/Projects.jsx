import React, { useEffect } from "react";
import styled from "styled-components";

const Projects = ({ visible, onClose }) => {
  const projectList = [
    {
      id: 1,
      title: "Site da empresa Vetor256.",
      description: "Empresa de tecnologia. Desenvolvimento de softwares comerciais e site.",
      image: "/vetor256.gif",
      link: "https://isaiaslourenco.github.io/vetor256/",
    },
    {
      id: 2,
      title: "Consumo API Pokédex",
      description: "Aplicação web para buscar detalhes de Pokémons e mostrar detalhes, contraste em tema claro e escuro.",
      image: "/pokemonApi.gif",
      link: "https://pokedex-2uarb7f2z-isaias-lourencos-projects.vercel.app/",
    },
    {
      id: 3,
      title: "Marvel API consume - Personagens dos HQ's",
      description: "Consumo de API busca direto do site oficial da Marvel todos os personagens dos quadrinhos desde a década de 60.",
      image: "/marvelAPI.gif",
      link: "https://marvel-497cvyj5k-isaias-lourencos-projects.vercel.app/",
    },
    {
      id: 4,
      title: "Git Profile API consume",
      description: "Busca do perfil de usuários do GitHub com seus repositórios e todas as particularidades de cada repo.",
      image: "/apigithubresult.gif",
      link: "https://isaiaslourenco.github.io/api-github/",
    },
  ];

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
    <SlidingProjects $visible={visible}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <ProjectsSection id="projects">
        <Title>Meus Projetos</Title>
        <Grid>
          {projectList.map((project) => (
            <Card key={project.id}>
              <Image src={project.image} alt={project.title} />
              <CardTitle>{project.title}</CardTitle>
              <Description>{project.description}</Description>
              <Button href={project.link} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </Button>
            </Card>
          ))}
        </Grid>
      </ProjectsSection>
    </SlidingProjects>
  );
};

export default Projects;

const SlidingProjects = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 700px;
  background-color: #222;
  color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  transform: ${(props) => (props.$visible ? "translateX(0)" : "translateX(100%)")};
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
  color: white;
  cursor: pointer;
  z-index: 1100;

  &:hover {
    color: #ff6347;
  }
`;

const ProjectsSection = styled.section`
  padding: 50px 20px;
  background: linear-gradient(135deg, #000, #333);
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 40px;
  text-align: center;
  margin-top: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #222;
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
  color: #ccc;
  margin-bottom: 20px;
`;

const Button = styled.a`
  font-size: 16px;
  color: white;
  background: #ff4500;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #ff6347;
  }
`;
