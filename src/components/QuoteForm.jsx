import React from "react"
import "./QuoteForm.css"




const MAX_LENGHT = 30;

class QuoteForm extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            character:"Homer Simpson"
        }
        this.formChange= this.formChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this)
    }

    formChange(event){
            if(event.target.value.length > MAX_LENGHT){
                return
            }
            this.setState({character: event.target.value})
          }

    formSubmit(event){
        event.preventDefault()
    }
    


    render() {
        const maxReach = this.state.character.length >= MAX_LENGHT;

        const numRemain = MAX_LENGHT - this.state.character.length
        
        return (
        <form
          className="QuoteForm"
          onSubmit={this.formSubmit}
        >
          <label htmlFor="character">Characters:</label>
          <input
            className={maxReach ? "length-maximum-reached" : "length-ok"}
            id="name"
            name="character"
            type="text"
            value={this.state.character} onChange={this.formChange}
          />
          <small className="remaining-characters">
              {numRemain} remaining characters
          </small>
          <p>
              You typed : <strong>{this.state.character}</strong>
          </p>
        </form>
      );
    }
  }
  














export default QuoteForm