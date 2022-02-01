import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color: #FF6464;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
`

export const Form = styled.form`

`

export const Input = styled.input`
    margin: 0.5rem;
    padding: 1rem;
    border: none;
    outline:none;
`

export const Button = styled.button`
    padding: 0.8rem 3rem 0.8rem 2rem;
    color: whitesmoke;
    background-color: transparent;
    border: solid white 2px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin: 0.5rem;

    :hover {
        background-color: whitesmoke;
        color: #FF6464;
    }
`