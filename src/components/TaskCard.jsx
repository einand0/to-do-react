import styled from 'styled-components'

export const TaskCard = styled.div`
    background-color: #f7f3f3;
    width: 300px;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3px;
    border: 1px solid gainsboro;
    padding: 10px 20px;
    text-align: center;
    text-decoration: ${(prop) => prop.status === true ? "line-through" : "none"};

    & hr{
        width: 90%;
        border: 1px solid #828485;
    }

    & h2{
        font-size: 1.2rem;
        font-weight: 500;
        color: #00596C;
    }

    & p{
        font-size: 0.9rem;
        margin-bottom: 20px;
    }

    & .button-wrapper{
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    & .checkBtn{
        background-color: ${(prop) => prop.status === true ? "cornflowerblue" : "transparent"};
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 3px;
        border-radius: 5px;
        border: 1px solid gray;
    }

    & .deleteBtn{
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 3px;
        border-radius: 5px;
        border: 1px solid gray;
    }

    
`