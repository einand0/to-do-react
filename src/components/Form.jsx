import styled from 'styled-components'

export const Form = styled.form`
    background-color: #fff;
    height: 350px;
    width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    & .input-wrapper{
        width: 90%;
    }
 
    & label{
        color: #006E86;
        font-size: 1rem;
    }

    & input{
        width: 100%;
        height: 35px;
        background-color: #fff;
        padding-left: 10px;
        border: none;
        border-bottom: 1px solid gray;
        outline: none;
        margin: 5px 0 20px 0;
        color: #003A46;
    }

    & .button-wrapper{
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }

    & button{
        background-color: #006E86;
        width: 100px;
        height: 40px;
        border: none;
        border-radius: 10px;
        color: #fff;
    }

    & button:hover{
        background-color: #00596C;
        cursor: pointer;
    }

 
`