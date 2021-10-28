import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import PageBody from "../PageBody/PageBody";
import Filters from "../Filters/Filters";


function App() {
    return (
        <div className="App">
            <Header/>
            <PageBody>
                <Filters/>
            </PageBody>
        </div>
    );
}

export default App;
