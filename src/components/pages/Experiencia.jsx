import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

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
      <Title>Experiência Profissional</Title>
      <ExperienceList>
        <Experience>
          <Year>2023 - 2024</Year>
          <Position>Analista de Infraestrutura</Position>
          <Company>Enterprise Services Brasil Serviços de Tecnologia Ltda - DXC Technology</Company>
          <Description>
            Analista de Infra em chão de fábrica, troca de periféricos, atualização e manutenção de software para sistema de produção em linha, redes de computadores, impressoras. Abertura de chamados através do Service Now.
          </Description>
          <Description>
            Versionamento para todos os clientes usando o Office, liberação do produto de acordo com cargo e necessidade para uso do Office dentro do projeto Pepsico México.
          </Description>
          <Description>
            Abertura e tratativa de incidentes de Telefonia Móvel (via Service Now) para colaboradores do time de vendas da PepsiCo Brasil.
          </Description>
        </Experience>
        <Experience>
          <Year>2022 - 2022</Year>
          <Position>QA Engineer</Position>
          <Company>BairesDev</Company>
          <Description>
            Engenheiro de Qualidade de Software para cliente Nomad Health Medical Jobs on demand. Responsável pela execução de casos de teste feitos pela equipe de desenvolvedores. O resultado esperado era passado para eles continuarem com o processo de desenvolvimento. Tecnologias usadas: GitHub, Jira, Atlassian.
          </Description>
        </Experience>
        <Experience>
          <Year>2021 - 2022</Year>
          <Position>Full Stack Developer</Position>
          <Company>Vetor256</Company>
          <Description>
            - Desenvolvimento de sistemas web utilizando PHP com o framework Laravel, seguindo boas práticas de arquitetura MVC para garantir código limpo e escalável.
            - Criação de interfaces responsivas com HTML, CSS e JavaScript, garantindo uma experiência intuitiva e otimizada para o usuário.
            - Utilização de JQuery e Ajax para implementar funcionalidades dinâmicas e interativas nas aplicações front-end.
            - Construção e integração de APIs RESTful, conectando sistemas e serviços de forma segura e eficiente.
            - Modelagem, manutenção e otimização de banco de dados MySQL, focando em performance e confiabilidade.
            - Uso de Docker para padronização de ambientes de desenvolvimento e deploy contínuo.
            - Colaboração em projetos inovadores, propondo melhorias técnicas com foco em qualidade, segurança e escalabilidade.
            - Participação em reuniões técnicas e revisões de código, contribuindo ativamente para decisões arquiteturais.
            - Estudo e aplicação de tecnologias complementares como AWS, React e WordPress, em alinhamento com as metas estratégicas da empresa.
          </Description>
        </Experience>
        <Experience>
          <Year>2018 - 2019</Year>
          <Position>PL-SQL Developer</Position>
          <Company>NSI Informática</Company>
          <Description>
            Desenvolvedor Oracle Forms e Oracle Reports, criação de novas funcionalidades e atualizações de funcionalidades existentes para o software E-Commex, utilizado para comércio de Importação e Exportação de produtos.
          </Description>
        </Experience>
        <Experience>
          <Year>2008 - 2018</Year>
          <Position>Developer/Tester</Position>
          <Company>IBM</Company>
          <Description>
            Programador COBOL (Z-os, JCL, Cics, Db2, C-Sect). Analista de Sistemas (VBA, Excel Avançado, Java, VB). Analista de Teste de Software (Rational Manual Tester (Certificado), Rational Clear Case, Rational Clear Quest, Manual Test Cases for Jobs e JCL no Mainframe).
          </Description>
        </Experience>
      </ExperienceList>
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

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 40px;
  text-align: center;
  margin-top: 20px;
`;

const ExperienceList = styled.div`
  padding: 0 20px;
`;

const Experience = styled.div`
  margin-bottom: 30px;
`;

const Year = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const Position = styled.h4`
  font-size: 16px;
  margin-top: 5px;
  font-weight: bold;
`;

const Company = styled.p`
  font-size: 14px;
  font-style: italic;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
  line-height: 1.5;
`;
