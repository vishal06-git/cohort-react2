import React from 'react'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {

  function btnClicked(){
    console.log('button clicked');
    
  }

  const user1 = {
    name : 'vishal',
    age: 20,
    gender: 'male'
  }
  const user2 = {
    name : 'aadhya',
    age: 20,
    gender: 'female'
  }
  



  return (
    <div >
           <Navbar title='vishal' color='red' links={['Home','Account','Contact', 'User']} />
           <Navbar title='tanishk' color='blue' links={['Home', 'About' ,'Callback', 'Profile']} />
           <Navbar title='chetan' color='green' links={['Logo', 'Product' ,'Services', 'Details']}/>

           <div className='text-white font-bold m-3' >
            {user2.gender == 'male'? <Men/> : <Women/>}
           </div>



           <div>
            <button onClick={btnClicked} className=' active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-3'>click to dowload!</button>
           </div>

    </div>
  )
}

export default App
