import React from 'react';
import { Container as BSContainer } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../Styles';

export const Container = styled(BSContainer).attrs({
    fluid: true,
})`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
    transition: all 0.25s linear;
`;

export const View = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const Text = styled.p`
    margin: 0px 10px;
`;

export const Title = styled.p`
    position: relative;
    font-size: 35px;
    font-weight: bold;
    color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};

    &::before {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 15%;
        height: 4px;
        z-index: 0;
        background-color: ${colors.primary};
    }
`;

export const Saperator = styled.div`
    width: 100%;
    height: 0px;

    opacity: 0.3;
    border: 1px solid #000000;
`;

export const SaperatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const TextButton = styled.p`
    cursor: pointer;
    text-align: center;

    color: ${(props) => props.theme.SECONDARY_TEXT_COLOR};
`;

export const AnimatedView = styled.div`
    opacity: 1;
    animation: anim 0.15s linear;

    @keyframes anim {
        from {
            opacity: 0;
            transform: translateX(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }
`;
