import React from 'react';
import { Spinner } from 'react-bootstrap';
import { colors, metrics } from '../../Styles';
import { PrimaryButtonsProps } from '../../Types/BasicComponents/Buttons';
import styled from 'styled-components';

export const Button = (props: PrimaryButtonsProps) => {
    const { isLoading } = props;
    return (
        <ButtonContainer {...props}>
            {!isLoading ? (
                <ButtonText>{props.children}</ButtonText>
            ) : (
                <Spinner animation="border" style={{ color: colors.primary }} />
            )}
        </ButtonContainer>
    );
};

const ButtonText = styled.p`
    color: #fff;
    font-size: 24px;
    margin: 0px;
    user-select: none;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props: PrimaryButtonsProps) =>
        !props.isLoading ? colors.primary : '#fff'};
    padding: 15px;
    border-radius: ${metrics.baseRadius / 2}px;
    cursor: ${(props: PrimaryButtonsProps) =>
        !props.isLoading ? 'pointer' : 'default'};
    border: none;
    overflow: hidden;

    &:hover {
        background-color: ${(props: PrimaryButtonsProps) =>
            !props.isLoading ? '#6366fb' : '#fff'};
    }
`;
