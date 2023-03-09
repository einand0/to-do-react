import styled from 'styled-components'

export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgb(0,0,0,0.4);
    display: ${(prop) => prop.isOpen === true ? "flex" : "none"};
    align-items: center;
    justify-content: center;
`