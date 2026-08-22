import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Education = ({ visible, onClose }) => {
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
    <SlidingEducation $visible={visible} theme={theme}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <Title>Educação</Title>
      <EducationList>
        <EducationItem>
          <Year>2023 - 2025</Year>
          <Institution>DevEmDobro</Institution>
          <Course>Formação Full Stack Development</Course>
          <Description>
            Formação prática em desenvolvimento Full Stack, com foco na construção de aplicações modernas.
            <br></br><br></br>
            <strong>Front-end:</strong> HTML, CSS, JavaScript, React, Redux, TypeScript, Git, GitHub, Clean Code e testes automatizados com Jest.
            <br></br><br></br>
            <strong>Back-end:</strong> Node.js, Express, PostgreSQL, Prisma, Docker e desenvolvimento de APIs.
          </Description>
        </EducationItem>
        <EducationItem>
          <Year>2014 - 2015</Year>
          <Institution>UNYLEYA EDITORA E CURSOS S/A</Institution>
          <Course>Extensão Universitária em Sistemas de Informação com Ênfase em Logística</Course>
          <Description>
            Formação voltada à integração entre tecnologia e gestão aplicada à logística. O curso abordou sistemas e processos utilizados na cadeia de suprimentos, incluindo conceitos relacionados a ERP, WMS e TMS, planejamento de transportes e gestão de estoques.
            <br></br><br></br>
            Também foram explorados temas como automação, Big Data, Logística 4.0, Lean Logistics e metodologias de melhoria contínua, ampliando minha visão sobre o uso da tecnologia para otimização de processos e tomada de decisões.
          </Description>
        </EducationItem>
        <EducationItem>
          <Year>2008 - 2011</Year>
          <Institution>Anhanguera Educacional - FAC III - Campinas/SP</Institution>
          <Course>Bacharelado em Ciências da Computação</Course>
          <Description>
            Graduação com formação sólida nos fundamentos da computação, abrangendo programação, algoritmos, estruturas de dados, banco de dados, redes de computadores, engenharia de software e inteligência artificial.
            <br></br><br></br>
            Durante o curso, desenvolvi uma base teórica e prática para análise e resolução de problemas computacionais, com estudos em áreas como Programação Orientada a Objetos, compiladores e administração de banco de dados.
          </Description>
        </EducationItem>
      </EducationList>
    </SlidingEducation>
  );
};

export default Education;

const SlidingEducation = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    max-width: 700px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    transform: ${(props) => (props.$visible ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.5s ease-in-out;
    z-index: 1000;
    overflow-y: auto;
    padding-bottom: 30px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    background: none;
    border: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    z-index: 1100;
    transition: color 0.3s ease;
    &:hover {
        color: ${({ theme }) => theme.buttonHover};
    }
`;

const Title = styled.h2`
    font-size: 32px;
    text-align: center;
    margin: 30px 60px 40px;
    color: ${({ theme }) => theme.text};

    @media (max-width: 480px) {
        font-size: 26px;
        margin: 30px 50px 30px;
    }
`;

const EducationList = styled.div`
    padding: 0 40px;
    box-sizing: border-box;
    @media (max-width: 480px) {
        padding: 0 25px;
    }
`;

const EducationItem = styled.div`
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }
`;

const Year = styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.text};
`;

const Institution = styled.p`
    font-size: 16px;
    font-style: italic;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.text};
`;

const Course = styled.h4`
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;

const Description = styled.p`
    font-size: 16px;
    margin-top: 10px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text};
    text-align: justify;
    @media (max-width: 480px) {
        font-size: 15px;
        text-align: left;
    }
`;
