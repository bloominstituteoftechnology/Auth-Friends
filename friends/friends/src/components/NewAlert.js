import React from 'react';
import { Alert } from 'react-bootstrap';
import styled  from 'styled-components';

const AlertContainer = styled.div`
     padding-top:10px;
`;

const AlertSuccess2 = props => {
    return (
        <AlertContainer>
            <Alert bsStyle="warning">
                Congratulations! The record was <strong> added </strong> successfully.
            </Alert>
        </AlertContainer>

    );
};

export default AlertSuccess2;