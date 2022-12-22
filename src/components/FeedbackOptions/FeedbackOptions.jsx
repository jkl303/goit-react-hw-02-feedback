export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
            <ul>
                {options.map(option => { return (<li key ={option}><button type="button" name={option} onClick={onLeaveFeedback}>{option.charAt(0).toUpperCase() + option.slice(1)}</button></li>)})
                }</ul>
    )
}