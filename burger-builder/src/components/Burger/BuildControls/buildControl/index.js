import React from 'react';
import { Container, Label,Less,More} from './styles';

const BuildControl = (props) => {
    return (
        <Container>
            <Label>{props.label}</Label>
            <Less onClick={props.removed} disabled={props.disabled} >Less</Less>
            <More onClick={props.added}>More</More>
        </Container>
    )
}

export default BuildControl;