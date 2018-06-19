import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import {Provider} from 'react-redux';
import rootReducer from "./reducers/rootReducer";
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(connectRouter(history)(rootReducer), applyMiddleware(sagaMiddleware, routerMiddleware(history)));
sagaMiddleware.run(rootSaga);

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    )
}

render();
store.subscribe(render);
registerServiceWorker();
