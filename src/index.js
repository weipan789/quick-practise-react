import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();




function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('rendering-elements')
  );
}

setInterval(tick, 1000);


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(Welcome({name:"jack"}),document.getElementById("components-and-props"));
class Welcome2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
ReactDOM.render(new Welcome2({name:"jack2"}).render(),document.getElementById("components-and-props-2"));

const elementWelcomeSara = <Welcome name="Sara" />;
ReactDOM.render(elementWelcomeSara,document.getElementById("components-and-props-3"));

function App() {
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("components-and-props-app"));


class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date};
    }

    componentDidMount(){
        this.timerId=setInterval(
            ()=>this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
           date:new Date()
        });
    }

    render(){
        return (
          <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
    }

}

ReactDOM.render(<div>
      <Clock />
      <Clock />
      <Clock />
    </div>, document.getElementById("state-and-lifecycle"));


class Toggle extends  React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        //this binding is nessary to make 'this' work in the callback
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(){
        this.setState(prevState=>({
            isToggleOn:!prevState.isToggleOn
        }));
    }
    
    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
        );
    }
}
ReactDOM.render(<Toggle/>, document.getElementById('handling-events'));


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControll extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render (){
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if(isLoggedIn) {
            button=<LogoutButton onClick={this.handleLogoutClick}/>
        }else{
            button=<LoginButton onClick={this.handleLoginClick}/>
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}

ReactDOM.render(<LoginControll/>, document.getElementById("conditional-rendering"));