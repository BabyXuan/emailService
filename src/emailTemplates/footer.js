import React from 'react';

import styled from 'styled-components';

const FooterContainer = styled.div`
  text-align: center;
  width: 330px;
  margin: 0 auto;
  color: #aaa;
`;

const Link = styled.a`
    text-decoration: none!important;
    color: #32c0d4;
`;
const Footer = () => (
    <FooterContainer>
        <p>We're only here to help. If you'd like to no longer receive this type of email, you may always change your
            <Link> notification preference</Link> or <Link>unsubscribe.</Link></p>
        <p>Together we're healthier HealthTap, <Link>2465 Latham Street, Suite 300, Mountain View, CA 94040</Link></p>
    </FooterContainer>
);

export default Footer;
