import { AiOutlinePlusCircle } from 'react-icons/ai';
import React from 'react'
import ActiveAlarm from './ActiveAlarm';
import AlarmContainer from './AlarmContainer';
import AlarmForm from './AlarmForm';
const App = () => {

  const defaultAlarms = [
    {
        label: "Interview at abc", 
        alarmTime: "08:30"
    },
    {
        label: "Interview at xyz", 
        alarmTime: "19:30"
    },
    {
        label: "Interview at pqr", 
        alarmTime: "20:45"
    },
  ]

  return (
    <div id="main">
    {/*Use icon in this way*/}
  {/*<AiOutlinePlusCircle/>*/}
    </div>
  )
}


export default App;