import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from './AppRouter';


const App = () => {
    return <AppRouter/>;
}

ReactDOM.render(<App/>,  document.getElementById('root'));
