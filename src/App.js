import React from 'react';
import NavBar from './components/NavBar'
import QuoteForm from "./components/QuoteForm"
import QuoteList from "./components/QuoteList"
import Citation from "./components/Citation"
import axios from "axios"
import Lamp from "./Lamp"
import Working from "./Working"
import './App.css';

const quote= {
  quote:"Ha ha!",
  character:"Nelson Muntz",
  image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection:"Left"
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      simpson: quote
    }
    this.getQuote = this.getQuote.bind(this);

  }



getQuote(){
  axios.get("https://quests.wilders.dev/simpsons-quotes/quotes?count=e")
    .then(response => response.data)
    .then(data => {
      console.log(data)
      this.setState({
        simpson: data[0],
      })
    })
}

render(){
  return (
    
    <div className="App">
    <NavBar />
    <QuoteForm />
    <QuoteList />
    <Citation simpson={this.state.simpson}/>
      <button type="button" onClick={this.getQuote}> Get quotes</button>
    <Lamp />
    <Working />
    </div>
  )
}
}


export default App;
