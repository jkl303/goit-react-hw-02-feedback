import { Component } from "react";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    update = (e) => {
        const name = e.target.name;
        if(name === "good") {
        this.setState((prevState) => ({ good : prevState.good +1,
        
        }))
        }
        if(name === "neutral") {
        this.setState((prevState) => ({ neutral : prevState.neutral +1,
        
        }))
        }

        if(name === "bad") {
        this.setState((prevState) => ({ bad : prevState.bad +1,
        
        }))
        }

    }

    countTotalFeedback(good, neutral, bad) {
        return(<p>Total: {good+neutral+bad}</p>)
    }

    countPositiveFeedbackPercentage(good, neutral, bad) {
        const total = good + neutral + bad;
        return(<p>Positive feedback: {total>0 ? Math.round(good/total*100) : 0}%</p>)
        
    }

    render() {
        const { good, neutral, bad } = this.state;
        return (<section>
        <h2>Please leave your feedback</h2>
            <ul>
                <li><button type="button" name="good" onClick={this.update}>Good</button></li>
            <li><button type="button" name="neutral" onClick={this.update}>Neutral</button></li>
            <li><button type="button" name="bad" onClick={this.update}>Bad</button></li>
            </ul>
            <h2>Statistics</h2>
            <ul>
                <li>
                    <p>Good: {good}</p>
                </li>
                <li>
                    <p>Neutral: {neutral}</p>
                </li>
                <li>
                    <p>Bad: {bad}</p>
                </li>
                <li>
                    {this.countTotalFeedback(good, neutral, bad)}
                </li>
                <li>
                    {this.countPositiveFeedbackPercentage(good, neutral, bad)}
                </li>
            </ul>
        </section>)
    }
}