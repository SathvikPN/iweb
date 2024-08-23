import { useState } from "react"

const Header = (courseObj) => {
  console.log(courseObj.course.name)
    return (
      <div>
        <h1>{courseObj['course']['name']} </h1>
      </div>
    )
}

const Content = (courseObj) => {
  console.log(courseObj['course']['parts'][0]['name'])
  return (
    <div>
      <p>{courseObj['course']['parts'][0]['name']} {courseObj['course']['parts'][0]['exercises']}</p>
      <p>{courseObj['course']['parts'][1]['name']} {courseObj['course']['parts'][1]['exercises']}</p>
      <p>{courseObj['course']['parts'][2]['name']} {courseObj['course']['parts'][2]['exercises']}</p>
    </div>
  )
}

const Total = () => {

}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  const [counter, setCounter] = useState(0)
  const [date, setDate] = useState(new Date().toLocaleString())
  setTimeout(
    () => {
      setDate(new Date().toLocaleString())
    },
    1000
  )


  const increaseByOne = () => setCounter(counter + 1)
  const resetToZero = () => setCounter(0)

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <hr />

      <p>Counter : {counter}</p>
      <button onClick={increaseByOne}>
        plus
      </button>

      <button onClick={resetToZero}>
        reset
      </button>


      <hr />
      <div>Min: {date} </div>
    </div>
  )
}

export default App