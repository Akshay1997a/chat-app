import React, { Component } from 'react';
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap';

interface Props { }
interface State { }

class Header extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <HeaderBar fluid="true" >
                <Logo>Chat</Logo>
            </HeaderBar>
        )
    }
}

export default Header

const HeaderBar = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #fff;
padding: 20px;
width: 100%;
height: 80px;
-webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
-moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

const Logo = styled.h2`
font-size: 34px;
font-weight: bold;
color: black;
`;

const LeftContainer = styled.div`
height: 80px;
border: 1px solid black;
`;