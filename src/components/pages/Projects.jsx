import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Projects = ({ visible, onClose }) => {
  const theme = useTheme();
  const projectList = [
    {
      id: 1,
      title: "Site da empresa Vetor256.",
      description: "Empresa de tecnologia. Desenvolvimento de softwares comerciais e site.",
      image: "/vetor256.gif",
      link: "https://vetor256.com",
    },
    {
      id: 2,
      title: "Consumo API Pokédex",
      description: "Aplicação web para buscar detalhes de Pokémons e mostrar detalhes, contraste em tema claro e escuro.",
      image: "/pokemonApi.gif",
      link: "https://isaiaslourenco-pokedex.vercel.app/",
    },
    {
      id: 3,
      title: "Marvel API consume - Personagens dos HQ's",
      description: "Consumo de API busca direto do site oficial da Marvel todos os personagens dos quadrinhos desde a década de 60.",
      image: "/marvelAPI.gif",
      link: "https://isaiaslourenco-api-marvel.vercel.app/",
    },
    {
      id: 4,
      title: "Git Profile API consume",
      description: "Busca do perfil de usuários do GitHub com seus repositórios e todas as particularidades de cada repo.",
      image: "/apigithubresult.gif",
      link: "https://isaiaslourenco.github.io/api-github/",
    },
    {
      id: 5,
      title: "API CEP Consume - Utilizando React",
      description: "Projeto de consumo de API do site dos correios, que está pronto para ser aplicado em outros projetos maiores, para busca de cep's de todo o Brasil. Projeto Inicial em JavaScript, atualizado para React, mas o de JS tem funcionalidades mais robustas, como uso de máscaras para validar o campo, busca de CEP's inválidos e inexistentes com tratamento de erros e volta para o campo CEP automática.",
      image: "/CEP.gif",
      link: "https://isaiaslourenco.github.io/consulta-cep/",
    },
    {
      id: 6,
      title: "Portfólio - Isaias Lourenço",
      description: "Projeto Portfolio para apresentar minhas experiências e habilidades, além do resumo Educacional, feito em React com tecnologias como Route, Hooks, Styled-Components e um Splash Screen inicial para um toque especial.",
      image: "/portfolioIsaias.gif",
      link: "https://isaiaslourenco-portfolio.vercel.app/",
    },
    {
      id: 7,
      title: "Restaurante",
      description: "Projeto feito em HTML, CSS, Bootstrap, JavaScript, AJAX, PHP e MySQL para Restaurantes. Site auto gerenciável pelo próprio sistema, com cardápio, fotos e mensagens de clientes dinâmicas gerenciadas pelo sistema. Reserva de mesas, controle total de estoque e fluxo de caixa, aviso para clientes via e-mail e whatsapp, relatórios gerenciáveis de todas as funcionalidades do sistema. Obs. Site/Sistema não está online, em breve novidades.",
      image: "/restaurante.gif",
      link: "https://restaurante.vetor256.com/",
    },
    {
      id: 8,
      title: "Sistema Gerenciamento de Vendas - PDV",
      description: "Sistema de gerenciamento de vendas (PDV) utilizando HTML, CSS, Bootstrap, JavaScript, AJAX, PHP e MySQL, voltado para comércios que necessitam de um ponto de venda eficiente, como supermercados, lanchonetes, beers, adegas e lojas de diversos segmentos. O sistema permite controle de estoque, gestão de fluxo de caixa, emissão de relatórios gerenciáveis e integração com e-mail e WhatsApp para avisos automáticos. Além disso, oferece um painel intuitivo para acompanhamento das métricas do negócio em tempo real, proporcionando praticidade e otimização na administração comercial.",
      image: "/pdv.gif",
      link: "https://pdv.vetor256.com/",
    },
    {
      id: 9,
      title: "Site Estático - Padoca",
      description: "Site de apresentação da sua Padaria, Lanchonete, Restaurante, Supermercado, Beers, Adegas e Lojas, utilizando HTML, CSS e JavaScript, voltado para comércios que necessitam de identidade visal na internet a fim de propagar seus negócios de forma eficiente. O site permite receber e-mail dos clientes automaticamente.",
      image: "/padoca.gif",
      link: "https://isaiaslourenco.github.io/padoca/",
    },
    {
      id: 10,
      title: "E-Commerce - Vetor256",
      description: "Comércio eletrônico em desenvolvimento utilizando PHP e MySQL, focado em proporcionar uma plataforma robusta e intuitiva para vendas online. O sistema permite o gerenciamento completo de produtos, controle de estoque, carrinho de compras e integração com múltiplos métodos de pagamento. Além disso, oferece funcionalidades de gestão de pedidos, acompanhamento de status de envio, e emissão de relatórios detalhados. A estrutura foi projetada para proporcionar uma experiência de compra fluida e otimizada para o cliente, com foco na escalabilidade e segurança, garantindo o sucesso nas transações online.",
      image: "/e-commerce.gif",
      link: "https://e-commerce.vetor256.com/",
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

const Button = styled.a`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.buttonBackground};
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.buttonHover};
  }
`;
