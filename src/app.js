import { Button } from './contador.js'

class App extends React.Component {
    render() {
        return  (
            React.createElement('div', null,
            React.createElement('h1', {className: 'display-1 text-primary'}, 'Simple contador'),
            React.createElement(Button, null, null)
        ));
    }
}

ReactDOM.render(
    React.createElement(App, null, null), 
    document.getElementById('root'));