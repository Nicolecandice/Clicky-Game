import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./matchcards.json";
import "./App.css";

let score = 0;
let topScore = 0;
let clickMessage = "Click on an image to earn points, but don't click on any more than once!";
class App extends Component {
    
    // Setting this.state.matches to the matches json array
    state = {
        matches,
        score,
        topScore,
        clickMessage
    };

    setClicked = id => {

        // Make a copy of the state matches array to work with
        const matches = this.state.matches;

        // Filter for the clicked match
        const clickedMatch = matches.filter(match => match.id === id);

        // If the matched image's clicked value is already true, 
        // do the game over actions
        if (clickedMatch[0].clicked){

            console.log ("Score: " + score);
            console.log ("Top Score: " + topScore);

            score = 0;
            clickMessage = "You guessed incorrectly!"

            for (let i = 0 ; i < matches.length ; i++){
                matches[i].clicked = false;
            }

            this.setState({clickMessage});
            this.setState({ score });
            this.setState({matches});

        // Otherwise, if clicked = false, and the user hasn't finished
        } else if (score < 11) {

            // Set its value to true
            clickedMatch[0].clicked = true;

            // increment the appropriate counter
            score++;
            
            clickMessage = "You guessed correctly!";

            if (score > topScore){
                topScore = score;
                this.setState({ topScore });
            }

            // Shuffle the array to be rendered in a random order
            matches.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.matches equal to the new matches array
            this.setState({ matches });
            this.setState({score});
            this.setState({clickMessage});
        } else {

            // Set its value to true
            clickedMatch[0].clicked = true;

            // restart the guess counter
            score = 0;

            // Egg on the user to play again
            clickMessage = "WOW!!! You got ALL of them!!! Now, let's see if you can do it again!";
            topScore = 12;
            this.setState({ topScore });
            
            for (let i = 0 ; i < matches.length ; i++){
                matches[i].clicked = false;
            }

            // Shuffle the array to be rendered in a random order
            matches.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.matches equal to the new matches array
            this.setState({ matches });
            this.setState({score});
            this.setState({clickMessage});

        }
    };

    render() {
        return (
            <Wrapper>
            
                <Title>Clicky Game!</Title>
        
                <h3 className="scoreSummary">
                    {this.state.clickMessage}
                </h3>
                
                <h3 className="scoreSummary">
                    Score: {this.state.score} 
                    <br />
                    Top Score: {this.state.topScore} 
                </h3>
                <div className="container-fluid">
<div className= "row matchCards">

                {this.state.matches.map(match => (
                    <MatchCard
                        setClicked={this.setClicked}
                        id={match.id}
                        key={match.id}
                        image={match.image}
                    />
                ))}
                </div>
                </div>
            </Wrapper>
        );
    }
}

export default App;
