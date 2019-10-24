import React,{Fragment} from "react"
import "./App.css"
import logo from './logo.svg';


class Working extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            working: props.working
         };
    }

    workingClick = () => {
        this.setState({
            working: !this.state.working
        });

    }
    render() {
        const click= this.state.working ? 'Working' : 'Not working';
        return (
        <Fragment>
            
            <button 
            onClick={this.workingClick
            }
            >
            <p >{click }</p> 
            </button>

            <img className={this.workingClick ? "App-logo" : "logo"} src={logo} alt="image"></img>
        </Fragment>
        );
    }
}

export default Working;