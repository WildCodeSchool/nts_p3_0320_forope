import React from 'react';
import styled from 'styled-components';
import { Flex } from '../mainStyle';

const ClientContainer = styled(Flex)`
  margin: 1rem 9rem;
  justify-content: space-around;
  ${(props) => props.theme.mediaMax.small`
    flex-direction:column;
    margin:1rem 1rem;
  `};
`;

const ClientText = styled.div`
  width: 30%;
  text-align: left;
  font-size: 19px;
  ${(props) => props.theme.mediaMax.small`
    width:100%;
    text-align:center;
    margin-bottom:1rem;

  `};
`;

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  ${(props) => props.theme.mediaMax.small`
    width:100%;
    justify-content:center;
    align-items:center;
    
  `};
`;

const Logo = styled.img`
  padding: 0 1rem 1rem 0;
  height: 80px;
`;

export default function Partners() {
  return (
    <ClientContainer>
      <ClientText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        maxime laborum, doloremque aspernatur in dolore a voluptatem, atque
        veritatis illo sunt ullam necessitatibus consequuntur ratione? Nulla
        assumenda totam ipsam cumque!
      </ClientText>
      <Logos>
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
        <Logo src="https://via.placeholder.com/100" alt="placeholder" />
      </Logos>
    </ClientContainer>
  );
}
