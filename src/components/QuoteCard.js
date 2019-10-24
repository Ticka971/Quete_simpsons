import React from "react";
import "./Quotecard.css"

class QuoteCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favorite: false
          }
    }
    render(){
    return (
        <div className="QuoteCard">
            <figure class="QuoteCard">
                <img src={this.props.image}
                    alt={this.props.character} />
                <figcaption>
                    <blockquote>
                        {this.props.quote}
                    </blockquote>
                    <p>
                    <cite>{this.props.character}</cite>
                    <span onClick={event => {
                        const newFavorite = !this.state.favorite;
                        this.setState({
                            favorite: newFavorite
                        })
                    }} className={this.state.favorite ? "is-favorite" : "chaîne-vide"}>&#9733;</span>
                    </p>
                </figcaption>
            </figure>
        </div>
    );
    }
}

export default QuoteCard;

