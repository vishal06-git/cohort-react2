import React ,{useState}from 'react'

const App = () => {
  const [user, setUser] = useState('vishal')

  const btnClicked = () => {
    if(user == 'vishal'){
      setUser('Om')
    }
    else{
      setUser('vishal')
    }
  }



  return (
    <div>
      <h1>{user}</h1>
      <button onClick={btnClicked} >change-user</button>
    </div>
  )
}

export default App
