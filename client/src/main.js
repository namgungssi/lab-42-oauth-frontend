import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
// TODO: Switch this out for MemoryRouter (and read up on it!)
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import createStore from './app/store'
import App from './components/app'

const store = createStore();

class Main extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        )
    }

}

ReactDom.render(<Main/>, document.getElementById('root'));
