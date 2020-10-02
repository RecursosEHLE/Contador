export class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {count: 0};
      }
      
      sum = () => {
        this.setState({count: this.state.count +1});
      }

    render() {
      return (
        React.createElement('div', {className: 'alert alert-primary'}, 
        React.createElement('button', {onClick: this.sum, className: 'btn btn-primary'}, 'Contar'),
        React.createElement('h1', {className: 'display-2'}, this.state.count)
      ));
    }
  }