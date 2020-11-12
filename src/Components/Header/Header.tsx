import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { MyTheme } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    const switchRef = React.createRef<HTMLDivElement>();
    const { isDarkMode, toggleTheme } = useContext(MyTheme);

    const darkMode = () => {
        switchRef.current?.style.setProperty('left', '33px');
        switchRef.current?.style.setProperty('transition', '.25s linear');
    };

    const lightMode = () => {
        switchRef.current?.style.setProperty('left', '3px');
        switchRef.current?.style.setProperty('transition', '.25s linear');
    };

    const changeTheme = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        toggleTheme();

        if (isDarkMode) {
            lightMode();
        } else {
            darkMode();
        }
    };

    useEffect(() => {
        if (isDarkMode) {
            darkMode();
        } else {
            lightMode();
        }
    });

    return (
        <HeaderBar fluid={true}>
            <SwitchContainer onClick={changeTheme}>
                <Icon icon={faMoon} size="1x" />
                <Icon icon={faSun} size="1x" />
                <Ball ref={switchRef} />
            </SwitchContainer>
        </HeaderBar>
    );
}

export default Header;

const HeaderBar = styled(Container)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
    width: 100%;
    height: 80px;
    transition: all 0.25s linear;
`;

const SwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 60px;
    height: 30px;
    background: #262d31;
    color: gold;
    border-radius: 50px;
    padding: 1px 5px;
    position: relative;
    cursor: pointer;
`;

const Ball = styled.div`
    height: 22px;
    width: 22px;
    position: absolute;
    background-color: #fafafa;
    border-radius: 50%;
    //top: 2.2px;
    left: 3px;
`;

const Icon = styled(FontAwesomeIcon)`
    padding: 0px 2px;
    font-size: 20px;
`;
