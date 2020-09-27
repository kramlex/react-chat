import React, { Component } from "react";
// import socket from './socket'
import JoinBlock from './components/JoinBlock';
import GlobalStyles from './global';
import 'antd/dist/antd.css'


const App = () => {
    return (
        <div className={'app'}>
            <GlobalStyles/>
            <JoinBlock/>
        </div>
    )
}

export default App;