import React from 'react';

import Header from '../common/header';
import Footer from '../common/footer';

import styled from 'styled-components';

const Content = styled.div`
    max-width: 640px;
    margin: 0 auto;
    border: 1px solid #ccc;
    background-color: #fff;
    text-align: center;
`;
const WelcomeEmail = (props) => {
    console.log('123', props);
    return (
        <Content>
            <Header/>
            <div>This is the content from email body</div>
            <Footer/>
        </Content>
    );
};

export default WelcomeEmail;
