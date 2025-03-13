import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <ContactSection id="contato">
            <Title>Entre em Contato</Title>
            <SocialLinks>
                <SocialIcon href="https://github.com/IsaiasLourenco" target="_blank" title="Meu GitHub">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/isaias-lourenco/" target="_blank" title="Meu Linkedln">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </SocialIcon>
                <EmailLink href="mailto:isaiaslourenco2020@gmail.com?subject=Contato%20via%20Portfolio&body=Olá%20Isaias,%20gostaria%20de%20entrar%20em%20contato...">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </EmailLink>
                <SocialIcon href="https://wa.me/5519996745466?text=Sobre%20o%20seu%20portfólio" target="_blank" title="Me mande uma mensagem por WhatsApp">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </SocialIcon>
            </SocialLinks>
        </ContactSection>
    );
};

export default Contact;

const ContactSection = styled.section`
  padding: 50px 20px;
  background: linear-gradient(135deg, #000, #333);
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  max-width: 500px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  height: 150px;
`;

const Button = styled.button`
  background: #ff4500;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #ff6347;
  }
`;

const SocialLinks = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  border: 1px solid white;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: white;
    color: black;
  }
`;

const EmailLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  border: 1px solid white;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: white;
    color: black;
  }
`;