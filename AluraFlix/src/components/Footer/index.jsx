import logo from '/images/LogoMain.png?url';
import styled from "styled-components";

const Foot = styled.footer`
    width: 100%;
    box-sizing: border-box;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border: 5px solid transparent;
    box-shadow: 0 0 15px 3px #2271D1;
    
    img {
        width: 15%;
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
