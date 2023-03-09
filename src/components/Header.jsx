import styled from 'styled-components'

export const Header = styled.header`
    background-color: #007993;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;


    & h1{
       color: #fff;
       text-transform: uppercase;
       letter-spacing: 2px;
    }

    & button{
        background-color: #ffffff;
        border: none;
        width: 65px;
        height: 25px;
        border-radius: 10px;
        color: #00596C;

        &:hover{
            background-color: #00596C;
            color: #fff;
            cursor: pointer;
        }
    }
`