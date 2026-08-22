import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Projects = ({ visible, onClose }) => {
  const theme = useTheme();
  const projectList = [
    {
      id: 1,
      title: "Vetor256 — Tecnologia e Soluções Digitais",
      description: "Site institucional desenvolvido para uma empresa de tecnologia, com foco em apresentação de serviços e soluções digitais. O projeto destaca desenvolvimento com JavaScript, HTML e CSS, com interface responsiva e adaptação estruturada para desktop, tablets e dispositivos móveis. Como evolução futura, o projeto pode receber uma área de abertura e acompanhamento de tickets para clientes e equipe técnica.",
      image: "/vetor256.gif",
      link: "https://vetor256.com",
    },
    {
      id: 2,
      title: "Pokédex — React + PokéAPI",
      description: "Aplicação desenvolvida em React com consumo da PokéAPI, carregamento incremental de Pokémon, filtro por tipo, navegação entre listagem e detalhes e persistência do estado da aplicação com localStorage. Utiliza Hooks, Context API, React Router, Axios e Styled Components, além de tratamento de fallback para imagens indisponíveis.",
      image: "/pokemonApi.gif",
      link: "https://isaiaslourenco-pokedex.vercel.app/",
    },
    {
      id: 3,
      title: "Marvel Characters — React",
      description: "Aplicação desenvolvida em React, originalmente integrada à API oficial da Marvel. Após a indisponibilidade das credenciais de acesso, o projeto foi adaptado para utilizar dados simulados, preservando suas funcionalidades. Implementa carregamento incremental, navegação entre listagem e detalhes, persistência de estado, fallback de imagens e layout responsivo.",
      image: "/marvelAPI.gif",
      link: "https://isaiaslourenco-api-marvel.vercel.app/",
    },
    {
      id: 4,
      title: "GitHub Profile API — JavaScript",
      description: "Aplicação desenvolvida em JavaScript para consulta e apresentação detalhada de perfis do GitHub utilizando Fetch API. Além dos dados do perfil e repositórios, apresenta seguidores, seguindo e os últimos eventos do usuário, incluindo repositório, commit, forks, stars, watchers e principal linguagem utilizada.",
      image: "/apigithubresult.gif",
      link: "https://isaiaslourenco.github.io/api-github/",
    },
    {
      id: 5,
      title: "Consulta de CEP — JavaScript e React",
      description: "Ferramenta reutilizável para consulta e preenchimento de endereços a partir do CEP, utilizada como base em diversos projetos. Desenvolvida inicialmente em JavaScript puro e posteriormente recriada em React, utilizando React Hook Form e React Query. Possui validação do CEP, tratamento de dados inválidos ou inexistentes e integração com a API ViaCEP.",
      image: "/CEP.gif",
      linkReact: "https://isaiaslournco-api-cep.vercel.app/",
      linkJavaScript: "https://isaiaslourenco.github.io/consulta-cep/",
    },
    {
      id: 6,
      title: "Sistema para Restaurante — Full Stack",
      description: "Sistema completo desenvolvido para restaurantes, integrando site e painel administrativo. Permite gerenciamento de cardápio, fotos e mensagens de clientes, reservas de mesas, controle de estoque e fluxo de caixa, além de relatórios gerenciáveis e envio de avisos aos clientes por e-mail e WhatsApp. Desenvolvido com HTML, CSS, Bootstrap, JavaScript, AJAX, PHP e MySQL.",
      image: "/restaurante.gif",
      link: "https://restaurante.vetor256.com/",
    },
    {
      id: 7,
      title: "Sistema de Gerenciamento de Vendas — PDV",
      description: "Sistema Full Stack para gerenciamento de vendas e operações comerciais, desenvolvido para diferentes tipos de estabelecimentos. Possui controle de produtos e estoque, ponto de venda, fluxo de caixa, relatórios gerenciáveis e painel para acompanhamento das informações do negócio. Desenvolvido com HTML, CSS, Bootstrap, JavaScript, AJAX, PHP e MySQL.",
      image: "/pdv.gif",
      link: "https://pdv.vetor256.com/",
    },
    {
      id: 8,
      title: "Sistema de Gestão Imobiliária — Vetor256",
      description: "Sistema Full Stack desenvolvido em PHP e MySQL com arquitetura MVC e gerenciamento de dependências via Composer. Possui área pública para consulta de imóveis e painel administrativo para gerenciamento de imóveis, proprietários, tipos, finalidades e status. Conta com cadastro e edição de imóveis, upload de imagem de capa, galeria com múltiplas fotos, exclusão de imagens, páginas públicas de detalhes, imóveis para venda e locação, sistema de favoritos e recursos preparados para expansão.",
      image: "/imobiliaria.gif",
      link: "https://imobiliaria.vetor256.com/",
    },
    {
      id: 9,
      title: "Sistema de Delivery — Vetor256",
      description: "Sistema Full Stack para lanchonetes e restaurantes, desenvolvido para centralizar pedidos, reservas, estoque, gestão de conteúdo e acompanhamento operacional. O projeto utiliza PHP, MySQL, JavaScript, AJAX e Bootstrap, com funcionalidades de pedidos para entrega, balcão e mesa, gerenciamento de estoque, reservas, relatórios e comunicação com clientes. Atualmente em processo de evolução e finalização.",
      image: "/delivery.gif",
      link: "https://delivery.vetor256.com/",
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
    <SlidingProjects $visible={visible} theme={theme} >
      <CloseButton onClick={onClose}>×</CloseButton>
      <ProjectsSection id="projects">
        <Title>Meus Projetos</Title>
        <Grid>
          {projectList.map((project) => (
            <Card key={project.id}>
              <Image src={project.image} alt={project.title} />
              <CardTitle>{project.title}</CardTitle>
              <Description>{project.description}</Description>
              {project.linkReact && project.linkJavaScript ? (
                <ButtonGroup>
                  <Button href={project.linkReact} target="_blank" rel="noopener noreferrer">
                    Versão React
                  </Button>

                  <Button href={project.linkJavaScript} target="_blank" rel="noopener noreferrer">
                    Versão JavaScript
                  </Button>
                </ButtonGroup>
              ) : (
                <Button href={project.link} target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                </Button>
              )}
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
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
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
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  z-index: 1100;

  &:hover {
    color: ${({ theme }) => theme.buttonHover};
  }
`;

const ProjectsSection = styled.section`
  padding: 50px 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.a`
  font-size: 16px;
  color: ${({ theme }) => theme.buttonText};
  background: ${({ theme }) => theme.buttonBackground};
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.buttonHover};
  }
`;
