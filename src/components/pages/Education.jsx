import React from "react";
import styled from "styled-components";

const Education = () => {

    return (
        <Section id="education">
            <Title>Educação</Title>
            <EducationList>
                <EducationItem>
                    <Year>2023 - 2025</Year>
                    <Institution>DevEmDobro</Institution>
                    <Course>Full Stack Development</Course>
                    <Description>
                        FrontEnd → HTML, CSS, JavaScript, C.L.I., VSCode, Git, GitHub, Clean Code, Jest (Testes Automatizados), React, Redux, TypeScript.<br></br>
                        BackEnd → PostGreSQL, Node.JS, HTML, Express.js, Prisma, Docker.
                    </Description>
                </EducationItem>
                <EducationItem>
                    <Year>2014 - 2015</Year>
                    <Institution>UNYLEYA EDITORA E CURSOS S/A</Institution>
                    <Course>Extensão Universitária em Sistemas de Informação com Ênfase em Logística.</Course>
                    <Description>
                        Abordagem integrativa entre tecnologia e gestão para otimizar processos logísticos. O curso abrange tópicos como uso de sistemas ERP, WMS e TMS para aprimorar a cadeia de suprimentos, planejamento estratégico de transporte e estoques, além de conceitos avançados de logística internacional e produção. Com foco em soluções modernas, explora ferramentas como Lean Logistics, Logística 4.0, Big Data e automação, capacitando profissionais a implementar tecnologias emergentes e metodologias eficientes, como o Lean Six Sigma, para melhorar processos e reduzir custos, proporcionando vantagem competitiva às empresas.
                    </Description>
                </EducationItem>
                <EducationItem>
                    <Year>2008 - 2011</Year>
                    <Institution>Anhanguera Educacional - FAC III - Campinas/SP</Institution>
                    <Course>Bacharel em Ciências da Computação.</Course>
                    <Description>
                        Curso voltado para formar profissionais com sólida base teórica e prática no desenvolvimento de sistemas, programação, inteligência artificial, banco de dados, redes de computadores e segurança cibernética. Ao longo da graduação, aprendemos a resolver problemas complexos por meio de algoritmos e tecnologia, desenvolvendo habilidades como pensamento lógico, inovação e aplicação de soluções computacionais em diversas áreas, como saúde, finanças, jogos e logística. Aprendemos entre outras coisas, Compiladores, Programação Orientada a Objetos e Administração de Banco de Dados.
                    </Description>
                </EducationItem>
            </EducationList>
            <LadoAlado>
                <BackToAbout onClick={HandleBackToAbout}>
                    ↑ Sobre Mim
                </BackToAbout>
                <BackToHomeButton onClick={handleBackToHomeClick}>
                    ↑ Home
                </BackToHomeButton>
            </LadoAlado>

        </Section>
    );
};

const HandleBackToAbout = () => {
    document.getElementById("sobre-mim").scrollIntoView({ behavior: "smooth" });
};

const handleBackToHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export default Education;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg,rgb(116, 111, 111),rgb(37, 34, 34)); /* Gradiente vermelho suave */
  color: white;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
  margin-top: 20px;
`;

const EducationList = styled.div`
    margin: 0 20px; /* Adiciona margem lateral */
    padding: 0 40px;
`;

const EducationItem = styled.div`
  margin-bottom: 30px;
`;

const Year = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const Institution = styled.p`
  font-size: 16px;
  font-style: italic;
  color: #bbb;
`;

const Course = styled.h4`
  font-size: 20px;
  margin-top: 5px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
  line-height: 1.5;
`;


const BackToHomeButton = styled.button`
  margin-top: -10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  align-self: center;

  &:hover {
    background-color: #e03e00;
  }
`;

const BackToAbout = styled.button`
  margin-top: -10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  align-self: center;

  &:hover {
    background-color: #e03e00;
  }
`;

const LadoAlado = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 480px){
    justify-content: center;
  }


`