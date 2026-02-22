import  { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const oldUsers = [...allUsers]

    oldUsers.push({ title, email })
    console.log(oldUsers);
    setAllUsers(oldUsers)

    setTitle('')
    setEmail('')
    
  }
  

  return (
    <div>
      
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
        type="text"
        placeholder='Enter your name...'
        value={title} 
        required
        onChange={(e) => {
          setTitle(e.target.value)
          
        }}
        />

        <input
        type="text"
        placeholder='Enter your email...'
        value={email} 
        required
        onChange={(e) => {
          setEmail(e.target.value)
          
        }}
        />
        
        <button>Submit</button>
      </form>
      {allUsers.map(function(elem,idx){
              return <div key={idx}>
                <h4>{elem.title}</h4>
              <p>{elem.email}</p>
              </div>
              
            })}
            
    </div>
  )
}

export default App
