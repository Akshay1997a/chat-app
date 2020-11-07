import React from 'react';
import styled, { useTheme } from 'styled-components';
import { metrics } from '../../Styles';
import { TextInputProps } from './index.d';

export const TextInput = (props: TextInputProps) => {
    const theme = useTheme();
    return (
        <InputContainer
            style={{
                backgroundColor:
                    props.verient === 'primary'
                        ? theme.SECONDARY_BACKGROUND_COLOR
                        : theme.PRIMARY_BACKGROUND_COLOR,
            }}>
            {props.iconLeft}
            <Input {...props} style={{ marginLeft: props.iconLeft ? 20 : 0 }} />
            {props.iconRight}
        </InputContainer>
    );
};

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 20px;
    border-radius: ${metrics.baseRadius}px;
    border: none;
    margin: ${metrics.baseMargin}px 0px;
    background-color: ${(props) => props.theme.SECONDARY_BACKGROUND_COLOR};

    font-style: Roboto;
`;

const Input: any = styled.input`
    color: ${(props) => props.theme.SECONDARY_TEXT_COLOR};
    width: 95%;
    border: none;
    background-color: transparent;
`;
