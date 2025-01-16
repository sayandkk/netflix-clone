import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import RowPost1 from './Components/RowPost/RowPost1'
import Details from './Components/Details/Details'
import Questions from './Components/Questions/Questions'

function App() {
  return (
    <div>
      <NavBar />
      <Banner></Banner>
      <RowPost content="Trending"></RowPost>
      <RowPost1 content="Only on Netflix"></RowPost1>
      <Details />
      <Questions />

    </div>
  )
}

export default App
