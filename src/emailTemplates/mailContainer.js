import React from 'react';
import styled from 'styled-components';

import WelcomeEmail from './emails/welcomeEmail';

// Our single Styled Component definition
const Container = styled.div`
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

//adjust different types of emails according to different conditions here:
const MailContainer = (props) => {
    console.log('type', props);
    let content = false;
    switch (props.type) {
        case 'welcome':
            content = (<WelcomeEmail/>);
            break;
    }
    return (
        <Container>
            {content}
        </Container>
    );
};

export default MailContainer;
