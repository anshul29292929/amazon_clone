import './App.css'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Footer from './components/footer/Index'
import Header from './components/header/Index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {

  return (
    <>
    <Header/>
    <Footer/>
    </>
  )
}

export default App
