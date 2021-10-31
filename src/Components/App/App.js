import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import PageBody from "../PageBody/PageBody";
import Filters from "../Filters/Filters";
import SortOptions from '../SortOptions/SortOptions';


function App() {
    return (
        <div className="App">
            <Header/>
            <PageBody>
                <Filters/>
                <SortOptions/>
            </PageBody>
        </div>
    );
}

export default App;

