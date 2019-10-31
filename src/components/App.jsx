import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ProfilePageContainer from '../containers/ProfilePageContainer';

const App = (props) => {
    return (
        <BrowserRouter>
            <Route path='/' render={() => <ProfilePageContainer />} />
        </BrowserRouter>
    )
} 

export default App;