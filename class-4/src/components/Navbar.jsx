import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className=' flex justify-between items-center px-8 py-3 text-white'>
        <div>{props.title}</div>
        <div className='flex gap-10' >
            {props.links.map(function(elem , idx){
                return <h4 key={idx}>{elem}</h4>
            })}

        </div>
     
      
    </div>
  )
}

export default Navbar
