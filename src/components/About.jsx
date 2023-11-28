
import React from 'react';
import styled from "styled-components";
import MailIcon from '../assests/gmail.png';
import LinkedInIcon from '../assests/linkedin.png';
import GitHubIcon from '../assests/github.png';
import Vector1 from '../assests/Vector1.png';
import Vector2 from '../assests/Vector2.png';
import Coder from '../assests/coder.webp';
import FloatingDiv from "./FloatingDiv";
import DevelopingIcon from '../assests/developing.png';
import JavaScriptIcon from "../assests/java-script.png";
import JavaIcon from "../assests/java.png"
import SpringBootIcon from "../assests/spring-boot-logo.png"
import SqlIcon from "../assests/sql.png"
import NoSqlIcon from "../assests/nosql.png"
import ReactIcon from "../assests/react.png"
import {mobile} from "../responsive";

const Container = styled.div `
  display: flex;
  margin-top: 4rem;
  border-bottom: 0.5px solid wheat;
  padding-bottom: 3rem;

  ${mobile({
    flexDirection: "column",
    height: "64rem"
  })}
`;

const Left = styled.div `
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
`;

const Name = styled.div `
  display: flex;
  flex-direction: column;
`;

const DummyText = styled.span `
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

const NameText = styled.span `
  color: #FCA61F;
  font-size: 3rem;
  font-weight: bold;
`;

const IntroText = styled.span `
  font-size: 1rem;
  color: wheat;
  margin-top: 10px;
`;

const ContactMeButton = styled.button `
  border-radius: 34px;
  border: none;
  font-size: 16px;
  color: white;
  padding: 10px;
  background: linear-gradient(180deg, #fde50f 26.71%, #fb982f 99.36%);
  box-shadow: 0 20px 24px 3px rgba(251, 161, 40, 0.42);
  width: 6rem;
  height: 2rem;

  &:hover {
    cursor: pointer;
    background: white;
    color: #FCA61F;
    border: 1px solid #FCA61F;
  }
`;

const Icons = styled.div `
  margin-top: 1.5rem;
  display: flex;
  gap: 2rem;
  
  ${mobile({
    justifyContent: "center"
  })}
`;

const Mail = styled.img `
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const LinkedIn = styled.img `
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const GitHub = styled.img `
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const Right = styled.div `
  flex: 1;
  position: relative;

  > * {
    position: absolute;
    z-index: 1;
  }

  ${mobile({
    transform: "scale(0.75)",
    left: "-5rem"
  })}
`;

const Vector1Image = styled.img `
  transform: scale(0.69);
  left: -15%;
  top: -9%;
`;

const Vector2Image = styled.img `
  transform: scale(0.67);
  left: -3rem;
  top: -4.6rem;
`;

const CoderImage = styled.img `
  transform: scale(0.8);
`;

const WebDeveloperDiv = styled.div `
  top: 8%;
  left: 65%;

  ${mobile({
    top: "8%",
    left: "100%"
  })}
`;

const JavaDiv = styled.div `
  top: 18rem;
  left: 0;

  ${mobile({
    top: "18rem",
    left: "15%"
  })}
`;

const JavaScriptDiv = styled.div `
  left: 65%;
  top: 18rem;

  ${mobile({
    top: "18rem",
    left: "100%"
  })}
`;

const CSharpDiv = styled.div `
  top: 8%;
  left: -2%;

  ${mobile({
    top: "8%",
    left: "15%"
  })}
`;

const About = () => {

    return (
        <Container>
            <Left>
                <Name>
                    <DummyText>Hi! I am</DummyText>
                    <NameText>Nischal Dwaral</NameText>
                    <IntroText>
                        I'm a full-stack developer passionate about building things that make a difference. 🚀
                        <br/><br/>
                        🎓 3 years of real-world experience in web application development
                        <br/><br/>
                        🌍 Worked in various industries, from e-commerce giants to conversational AI innovators, as well as in the renewable energy sector.
                    </IntroText>
                </Name>
                <ContactMeButton onClick={() => window.location.href = 'mailto:nischal.dwaral@gmail.com'}>Contact Me</ContactMeButton>
                <Icons>
                    <Mail src={MailIcon} onClick={() => window.location.href = 'mailto:nischal.dwaral@gmail.com'}/>
                    <LinkedIn src={LinkedInIcon} onClick={() => window.open('https://www.linkedin.com/in/nischal-srinivas-dwaral/', '_blank')}/>
                    <GitHub src={GitHubIcon} onClick={() => window.open('https://github.com/Nischal-S-Dwaral', '_blank')}/>
                </Icons>
            </Left>
            <Right>
                <Vector1Image src={Vector1}/>
                <Vector2Image src={Vector2}/>
                <CoderImage src={Coder}/>
                <WebDeveloperDiv>
                    <FloatingDiv image={DevelopingIcon} text1="Full Stack" text2="Developer" type="text"/>
                </WebDeveloperDiv>
                <JavaDiv>
                    <FloatingDiv icon1={JavaScriptIcon} icon2={ReactIcon}/>
                </JavaDiv>
                <JavaScriptDiv>
                    <FloatingDiv icon1={SqlIcon} icon2={NoSqlIcon}/>
                </JavaScriptDiv>
                <CSharpDiv>
                    <FloatingDiv icon1={JavaIcon} icon2={SpringBootIcon}/>
                </CSharpDiv>
            </Right>
        </Container>
    );
};

export default About;