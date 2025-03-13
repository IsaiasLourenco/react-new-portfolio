import React from "react";
import styled from "styled-components";

// const handleBackToTopClick = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };

const About = () => {
  return (
    <Section id="sobre-mim">
      <Content>
        <ProfileImage src="/eu-pequeno.png" alt="Isaias Lourenço" />
        <TextContainer>
          <Title>Sobre Mim</Title>
          <Description>
            Trabalhei por 10 anos como programador Cobol e Visual Basic for Applications na IBM, seis meses como programador PL-SQL na New Soft Intelligence e seis meses como Quality Assurance na BairesDev.
            Sou estudante dedicado de Análise e Desenvolvimento de Sistemas e cursando Dev em Dobro Desenvolvimento Full Stack desde janeiro de 2025. Possuo habilidades sólidas em HTML, CSS, JavaScript, SQL, Git e GitHub. Aprendendo Node.js, TypeScript e Express.
            Estou comprometido em aprimorar minhas habilidades técnicas e adquirir experiência prática no desenvolvimento de soluções web. Determinado a me destacar na criação de interfaces visuais intuitivas e no desenvolvimento de sistemas robustos e escaláveis no FrontEnd e no BackEnd.
            Busco oportunidades para aplicar meu conhecimento e paixão pela tecnologia em projetos desafiadores e contribuir para o sucesso da equipe.<br></br><br></br>
            📧 <EmailLink href="mailto:isaiaslourenco2020@gmail.com?subject=Contato%20via%20Portfolio&body=Olá%20Isaias,%20gostaria%20de%20entrar%20em%20contato..." title="Me envie um e-mail" >
              isaiaslourenco2020@gmail.com
            </EmailLink>
          </Description>
        </TextContainer>
      </Content>
      {/* <BackToTop onClick={handleBackToTopClick} /> */}
    </Section>
  );
};

export default About;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #ff7f7f, #660000); /* Gradiente vermelho suave */
  color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  max-width: 1000px;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
`;

const TextContainer = styled.div`
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #ccc;
`;

const EmailLink = styled.a`
  color: #ffffee; /* Cor personalizada */
  text-decoration: none; /* Remove o sublinhado */
  font-weight: bold;

  &:hover {
    color:rgb(122, 112, 112);
    text-decoration: underline;
  }
`;

// const BackToTop = styled.div`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   width: 40px;
//   height: 40px;
//   background: url(/seta_topo.png) no-repeat center;
//   background-size: contain;
//   cursor: pointer;
//   z-index: 1000;

//   animation: pulse 1.5s infinite; /* Efeito pulsante */
//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const pulse = keyframes`
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.1);
//   }
//   100% {
//     transform: scale(1);
//   }
// `;
