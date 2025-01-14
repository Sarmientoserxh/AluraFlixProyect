import styled from "styled-components";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Div = styled.div`
    width: 400px;
    height: 350px;
    border-radius: 10px;
    border: 5px solid transparent;
    box-shadow: 0 0 15px 3px ${({ color }) => color};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #000;
    overflow: hidden;
`;

const FrameContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
`;

const ActionButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background: #000;
`;

const Card = ({ color, frame, onDelete, onEdit }) => {
    return (
        <Div color={color}>
            <FrameContainer
                dangerouslySetInnerHTML={{ __html: frame }}
            ></FrameContainer>
            <ActionButtons>
                <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={onDelete}
                >
                    Borrar
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<BorderColorIcon />}
                    onClick={onEdit}
                >
                    Editar
                </Button>
            </ActionButtons>
        </Div>
    );
};

export default Card;
