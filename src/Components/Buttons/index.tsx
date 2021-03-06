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
    background-color: ${(props: any) =>
        !props.isLoading
            ? colors.primary
            : props.theme.SECONDARY_BACKGROUND_COLOR};
    padding: 15px;
    border-radius: ${metrics.baseRadius / 2}px;
    cursor: ${(props: PrimaryButtonsProps) =>
        !props.isLoading ? 'pointer' : 'default'};
    border: none;
    overflow: hidden;
    transition: all 0.25s linear;

    &:hover {
        background-color: ${(props: any) =>
            !props.isLoading
                ? '#6366fb'
                : props.theme.SECONDARY_BACKGROUND_COLOR};
    }

    &:active {
        scale: 0.95;
        transition: all 0.25s linear;
    }
`;
