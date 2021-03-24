import React from 'react';
import { Container,  Spinners,  } from './styles';


const Spinner = (props) => {
    return (
        <Container>
            <h1>L O A D I N G</h1>
            <Spinners>  </Spinners>
        </Container>
    )
}

export default Spinner;