import React from 'react'
import { Firstsec } from './Firstsec'
import { Secondsec } from './Secondsec'
import { Header } from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {
  return (
    <>
    <Header/>
    <Firstsec/>
    <Secondsec/>
    </>
  )
}

export default Index;