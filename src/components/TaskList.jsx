import styled from 'styled-components'

export const TaskList = styled.div`
    align-items: center;
    height: calc(100vh - 40px);
    padding: 20px 100px;

    & ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
`