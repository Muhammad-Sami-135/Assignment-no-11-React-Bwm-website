import React, { useState } from 'react'
import BmwUi from './Components/BmwUI/BmwUi'
import Signup from './Components/SignUp/SignUp';

const App = () => {
  const [Bmw,setBmw] = useState(true);
  let Toogle = () =>{
    setBmw(false);
  }
  return (
    <>
    <div>
      {
        Bmw === true ? <Signup toogleFunc ={Toogle}/> : <BmwUi/>
      }
    </div>
    </>
  )
}

export default App