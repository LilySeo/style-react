import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import SassComponent from "./SassComponent";


class App extends Component {
    render() {
        return (
            <div>
                <SassComponent />
            </div>
        )
        // return (
        //     <div className="App">
        //         <header>
        //             <img src={logo} className="App-logo" alt="logo" />
        //             <p>
        //                 Edit <code>src/app.js</code> and save to reload.
        //             </p>
        //             <a
        //                 className="App-link"
        //                 href="https://reactjs.org"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 Learn React
        //             </a>
        //         </header>
        //     </div>
        // )
    }
}

export default App
