import { useState } from 'react'
import { Home } from './Home'

function App() {
  // const [count, setCount] = useState(0)
  let obj = {
    Productname : "Macbook",
    btn : "Read",
    img : "",
  }
  return (
    <>
      <Home Productname="Macbook" btn="Read more" img="https://cdn.mos.cms.futurecdn.net/GfinEMFXnT42BFxAcDc2rA-1200-80.jpg"/>
      <Home Productname = "Macbook Air" btn ="More Info" img ="https://images.firstpost.com/uploads/2023/07/MacBook-Air-15-inch-Review-All-the-laptop-that-youll-ever-need-2.jpg?im=FitAndFill=(596,336)"/>
    </>
  )
}

export default App
