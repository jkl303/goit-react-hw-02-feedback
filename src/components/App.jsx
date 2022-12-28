import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
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
    const options = ["good", "neutral", "bad"];
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(good, neutral, bad);
    
    return (<>
    
    <Section title="Please leave your feedback"><FeedbackOptions options={options} onLeaveFeedback={this.update}></FeedbackOptions>
    </Section>
      <Section title="Statistics">
        {good+neutral+bad > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics> : <Notification message="There is no feedback"></Notification>}
    </Section>
    </>)
  }
};
