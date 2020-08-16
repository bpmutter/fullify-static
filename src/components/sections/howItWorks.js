import React from "react"
import styled from "styled-components"
import { Container, Section } from "../global"
import upload from "../../images/product/upload-img.svg"; 
import marketing from "../../images/product/minions-working.svg" 
import connect from "../../images/product/messaging-people.svg" 

const GetStarted = () => (
  <StyledSection id="how-it-works">
    <HowItWorksContainer>
      <HowItWorksTitle>How It Works</HowItWorksTitle>
      <Subtitle>Streamline your property management marketing.</Subtitle>
      <HowItWorksSteps>
        <Step>
          <HiwImgWrapper>
            <HiwImg src={upload} alt="Upload listings" />
          </HiwImgWrapper>
          <HiwSectionTitle>Upload Listings</HiwSectionTitle>
          <HiWSectionDescription>derp derp derp</HiWSectionDescription>
        </Step>
        <Step>
          <HiwImgWrapper>
            <HiwImg src={marketing} alt="Marketing automation" />
          </HiwImgWrapper>
          <HiwSectionTitle>Marketing Automation</HiwSectionTitle>
          <HiWSectionDescription>derp derp derp</HiWSectionDescription>
        </Step>
        <Step>
          <HiwImgWrapper>
            <HiwImg src={connect} alt="connect with prospects" />
          </HiwImgWrapper>
          <HiwSectionTitle>Connect with Leads</HiwSectionTitle>
          <HiWSectionDescription>derp derp derp</HiWSectionDescription>
        </Step>
      </HowItWorksSteps>
    </HowItWorksContainer>
  </StyledSection>
)

export default GetStarted;

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.white};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  padding-top: 40px;
`

const HowItWorksContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 0 40px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    ${"" /* margin-top: 30px; */}
    position: relative;
    zIndex: 0;
  }
`

const HowItWorksTitle = styled.h3`
  margin: 0 auto;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    ${'' /* margin-top: 30px; */}
    position: relative;
    zIndex: 500;
  }
`
const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  ${'' /* padding-top: 16px; */}
  font-size: 14px;
  color: ${props => props.theme.color.primary};
`

const HowItWorksSteps = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: space-evenly;
  flex-flow: row wrap;
  padding: 80px 0 40px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    align-items: center;
  }
`

const Step = styled.div`
  border-radius: 1em;
  width: 325px;
  min-height: 350px;
  border: 1px solid ${props => props.theme.color.black.lightest};
  padding: 10px;
  margin: 15px;
  box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  background-color: ${props => props.theme.color.white.lessdark};
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 275px;
  }
`

const HiwImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0 20px;
    height: 200px;
`;
const HiwImg = styled.img`
    ${'' /* width: 250px; */}
    height: 175px;
    margin: 0 auto;
`;
const HiwSectionTitle = styled.h4`
  margin: 0 auto 22px;
  text-align: center;
`;
const HiWSectionDescription = styled.p`
    color: ${props=>props.theme.color.black.light};
`;
