import React, { Fragment } from 'react';

import NavBar from './NavBar';
import Main from './Main';

class App extends React.Component
{
    render()
    {
        return (
            <Fragment>
                <NavBar />
                <Main />
            </Fragment>
        );
    }
}

export default App;