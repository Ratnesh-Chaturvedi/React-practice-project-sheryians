import { useState } from 'react'
import Background from './componenrts/Background'
import Foreground from './componenrts/foreground'
import Cards from './componenrts/Cards'



function App() {


  return (
   <>
<div className='w-full h-screen bg-blue-400'>
 <Background/>
<Foreground/>
{/* <Cards/> */}
</div>
    </>
  )
}

export default App
