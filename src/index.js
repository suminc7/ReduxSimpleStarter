
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDylqlMq6-y9m5Um6vpmoq2sr6Upwv4fCM';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};


ReactDOM.render(<App/>, document.querySelector('.container'));