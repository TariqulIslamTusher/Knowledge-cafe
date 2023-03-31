import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Container from './component/Container/Container'
import Bookmark from './component/Bookmark/Bookmark'

function App() {
  const [datas, setData] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  console.log(datas);

  return (
    <div className="App">
      <Header></Header>
      <div>
        <Container datas={datas} key={datas.map(data => data.id)}></Container>
        <Bookmark></Bookmark>
      </div>
    </div>
  )
}

export default App
