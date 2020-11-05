import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteStack from './route';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Styles/themes';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

export const MyTheme = React.createContext<any>(null);

function App() {
    const [isDarkMode, setMode] = useState(false);

    const toggleTheme = () => {
        setMode(!isDarkMode);
    };

    return (
        <MyTheme.Provider value={toggleTheme}>
            <ThemeProvider theme={!isDarkMode ? lightTheme : darkTheme}>
                <AppContainer>
                    <RouteStack />
                </AppContainer>
            </ThemeProvider>
        </MyTheme.Provider>
    );
}

export default App;

const AppContainer = styled.div`
    background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
    transition: all 2s linear;
`;
