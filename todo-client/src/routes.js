import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import App from './components/App';


export default class TodoRouter extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path='/' component={App}></Route>
                </div>
                
            </Router>
        );
    }
}
