import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './Redux';
import RouteStack from './route';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Styles/themes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

export const MyTheme = React.createContext<any>(null);

function App() {
    const [isDarkMode, setMode] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    const toggleTheme = () => {
        setMode(!isDarkMode);
    };

    return (
        <Provider store={store}>
            <MyTheme.Provider value={{ isDarkMode, toggleTheme }}>
                <ThemeProvider theme={!isDarkMode ? lightTheme : darkTheme}>
                    <AppContainer>
                        <RouteStack />
                    </AppContainer>
                </ThemeProvider>
            </MyTheme.Provider>
        </Provider>
    );
}

export default App;

const AppContainer = styled.div`
    background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
    transition: all 2s linear;
`;
