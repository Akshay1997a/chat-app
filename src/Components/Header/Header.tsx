import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { MyTheme } from '../../App';

export function Header() {
    const toggleTheme = useContext(MyTheme);
    const changeTheme = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        toggleTheme();
    };

    return (
        <HeaderBar fluid={true}>
            <div onClick={changeTheme} style={{ color: 'red' }}>
                Togal dark mode
            </div>
        </HeaderBar>
    );
}

export default Header;

const HeaderBar = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
    width: 100%;
    height: 80px;
`;
