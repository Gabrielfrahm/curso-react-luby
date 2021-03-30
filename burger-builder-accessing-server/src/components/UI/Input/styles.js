import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 10px;
` 

export const Label = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
` 

export const Inputs = styled.input`
    outline: none;
    width: 100%;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;

    &:focus{
        outline: none;
        background-color: #ccc;
    }

`;


export const TextArea = styled.textarea`
    width: 100%;
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;

    &:focus{
        outline: none;
        background-color: #ccc;
    }
`;

export const Select = styled.select`
    width: 100%;
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;

    &:focus{
        outline: none;
        background-color: #ccc;
    }
`;