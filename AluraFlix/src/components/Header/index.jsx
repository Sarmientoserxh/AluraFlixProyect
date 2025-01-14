import { useState } from "react";
import styled from "styled-components";
import imagen from "/images/LogoMain.png?url";
import { Button, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2271D1",
        },
        secondary: {
            main: "#ffffff",
        },
    },
});

const Div = styled.header`
    box-sizing: border-box;
    top: 0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 34px;
    background-color: #262626;
    z-index: 10;
    border: 5px solid transparent;
    box-shadow: 0 0 15px 3px #2271D1;
`;

const Header = ({ onNewVideo }) => {
    const [activeButton, setActiveButton] = useState("home");

    const handleButtonClick = (button) => {
        setActiveButton(button);
        if (button === "newVideo") {
            onNewVideo();
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Div>
                <img src={imagen} alt="Logo AluraFlix" />
                <div style={{ display: "flex", gap: "20px" }}>
                    <Button
                        variant={activeButton === "home" ? "contained" : "outlined"}
                        size="large"
                        color="primary"
                        onClick={() => handleButtonClick("home")}
                    >
                        Home
                    </Button>
                    <Button
                        variant={activeButton === "newVideo" ? "contained" : "outlined"}
                        size="large"
                        color="secondary"
                        onClick={() => handleButtonClick("newVideo")}
                    >
                        Nuevo video
                    </Button>
                </div>
            </Div>
        </ThemeProvider>
    );
};

export default Header;
