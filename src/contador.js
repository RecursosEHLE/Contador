export class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {count: 0};
      }
           
      sum = () => {
       this.interval = setInterval(() => {
       this.setState({count: this.state.count +1});
        }, 1000)
      }

      stop = () =>{
        clearInterval(this.interval);
      }

      reset = () => {
        this.setState({count: 0});
      }

    render() {
      return (
        React.createElement('div', {className: 'alert alert-primary'},
        React.createElement('div', {className: 'btn-group'}, 
        React.createElement('button', {onClick: this.sum, className: 'btn btn-primary'}, 'Start'),
        React.createElement('button', {onClick: this.stop, className: 'btn btn-danger'}, 'Stop')),
        React.createElement('h1', {className: 'display-2'}, this.state.count),
        React.createElement('button', {onClick: this.reset, className: 'btn btn-warning'}, 'Reset')
      ));
    }
  }
