import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Title = () => {
  return (
    <h1>Give Feedback</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}> 
      {props.name} 
    </button>
  )
}

const StatisticLine = (props) => {
  let symbolPercentage = ''
  if (props.name === "positive") {
    symbolPercentage = "%"
  }
  return (
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td>{props.value} {symbolPercentage}</td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  let avgScore = (props.good * 1) + (props.neutral * 0) +  (props.bad * (-1))
  let positivePercentage = (props.good / all) * 100

  if (all === 0) {
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }


  return(
    <div>
      <h1>Statistics</h1>
      <table>
        <StatisticLine name="good" value={props.good} />
        <StatisticLine name="neutral" value={props.neutral} />
        <StatisticLine name="bad" value={props.bad} />
        <StatisticLine name="all" value={all} />
        <StatisticLine name="average" value={avgScore} />
        <StatisticLine name="positive" value={positivePercentage} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log("good upd", updatedGood)
  }

  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log("n upd", updatedNeutral)
  }

  const handleClickBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    console.log("n upd", updatedBad)
  }

  return (
    <div>
      <Title/>
      <Button handleClick={handleClickGood} name='Good'/> 
      <Button handleClick={handleClickNeutral} name='Neutral'/> 
      <Button handleClick={handleClickBad} name='Bad'/> 
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App