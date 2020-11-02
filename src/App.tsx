import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouteStack } from './route';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
    return (
        <div className="App">
            <RouteStack />
        </div>
    );
}

export default App;
