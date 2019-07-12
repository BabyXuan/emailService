import React from 'react';

import styled from 'styled-components';

import './header.css';

const HeaderContainer = styled.div`
    text-align: center;
    margin: 50px auto 0;
    height: 50px;
    max-width: 640px;
`;
const Image = styled.img`
  width: 114px;
  max-width: 50%;
  margin: 5px auto;
  border-radius: 8px;
`;

const Header = () => (
    <HeaderContainer>
        <Image src="https://ci6.googleusercontent.com/proxy/OBlkgJi8Rysi-ICnRX8VCEYgxCDIjmbqZRiR4k9cTjkpqtvljtiDsENSUKb_Y9WJNYuSUMNuVYsWnHsd48t5hC20cZfwMUtk7Q5RGAWjZVNPd4jD2oetw-awNfiwKg=s0-d-e1-ft#https://webservices.healthtap.com/imgs/sunrise/healthtap/healthtap_logo.png"/>
    </HeaderContainer>
);

export default Header;
