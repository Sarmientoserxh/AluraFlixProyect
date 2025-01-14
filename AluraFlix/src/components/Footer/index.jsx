import logo from '/images/logo.png';
import styled from "styled-components";

const Foot = styled.footer`
    width: 100%;
    box-sizing: border-box;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        width: 100%;
    }
`

const Footer = () => {
    return (
        <Foot>
            <img src={logo} alt="Logo AluraFlix"/>
        </Foot>
    )
}
export default Footer;
