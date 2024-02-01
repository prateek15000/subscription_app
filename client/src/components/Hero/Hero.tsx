import styled from "styled-components";
import {Container} from "react-bootstrap";
import ModalComponent from "../Modal/Modal";


const HeroComponent = styled.header`
padding: 5rem 0;
height: 60vh;
background-image: url("https://images.unsplash.com/photo-1705900489630-db9ce0afc624?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
background-size: cover;
background-position: center;
`;

const HeaderContainer = styled.div`
background-color: rgb(189,154,122);
padding: 3rem;
color: white;
width: 32.5rem;

`;

const Heading = styled.h1`
font-size: 2rem
`;

const SubHeading = styled.h5`
margin: 1rem 0;
font-weight: 100;
`

const Hero = () =>{
    return(
<HeroComponent> 
   <Container>
   <HeaderContainer>
    <Heading>
   Feed your mind with the best resources you get
    </Heading>
    <SubHeading>
      Grow, learn, and become more successfully by reading some of the top articles by highly reputable individuals  
    </SubHeading>
    <ModalComponent
     text="signup" variant="primary" isSignupFlow={true}/>
     
     <ModalComponent
     text="Login" variant="danger" isSignupFlow={false}/>
    
   </HeaderContainer>
   </Container>
</HeroComponent>
    );

};

export default Hero;