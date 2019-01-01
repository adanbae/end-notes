import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';     // 1-8
import { ApolloProvider } from "react-apollo";
import client from "./apollo";

// 1-7
// client --> prop?
ReactDOM.render (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
