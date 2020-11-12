import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../Components';
import Header from '../../Components/Header/Header';
import { MODE_TYPE } from '../../Types/Login/Login';
import { LoginForm } from './Login';
import { SignupForm } from './Signup';

function Auth() {
    const [MODE, setMode] = useState<MODE_TYPE>('LOGIN');

    return (
        <Container>
            <Header />
            <LoginCard>
                {/* <Title>{MODE}</Title> */}
                {MODE === 'LOGIN' ? (
                    <LoginForm changeMode={(mode) => setMode(mode)} />
                ) : (
                    <SignupForm changeMode={(mode) => setMode(mode)} />
                )}
            </LoginCard>
        </Container>
    );
}

export default React.memo(Auth);

const LoginCard = styled.div`
    position: absolute;
    width: 500px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 50px;

    background: ${(props) => props.theme.SECONDARY_BACKGROUND_COLOR};
    box-shadow: ${(props) => props.theme.SHADOW};
    border-radius: 10px;

    transition: all 0.25s linear;
`;
