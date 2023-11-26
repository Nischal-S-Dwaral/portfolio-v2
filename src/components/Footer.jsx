import React from 'react';
import styled from "styled-components";
import WaveBackground from "../assests/wave.png"
import MailIcon from '../assests/gmail.png';
import LinkedInIcon from '../assests/linkedin.png';
import GitHubIcon from '../assests/github.png';

const Container = styled.div `
  display: flex;
  align-items: center;
  margin: -0.5rem -3.5rem;
  position: relative;
`;

const BackgroundImage = styled.img `
  width: 100%;
`;

const Content = styled.div `
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
`;

const Text = styled.span `
  color: white;
  text-align: center;
`;

const Icons = styled.div `
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
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

const Footer = () => {
    return (
        <Container>
            <BackgroundImage src={WaveBackground} alt="Background"/>
            <Content>
                <Text>
                    Loosely designed in Figma and coded in Webstrom IDE by yours truly. <br/>
                    Built with <span style={{ fontWeight: 'bold' }}>React.Js</span>, deployed with GitHub pages.
                </Text>
                <Icons>
                    <Mail src={MailIcon}/>
                    <LinkedIn src={LinkedInIcon}/>
                    <GitHub src={GitHubIcon}/>
                </Icons>
            </Content>
        </Container>
    );
};

export default Footer;