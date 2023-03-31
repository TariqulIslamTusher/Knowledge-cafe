import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Container from './component/Container/Container'


function App() {
  const [datas, setData] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
    }, [])

    const handleBookmark =(id) =>{
      const min = JSON.parse(localStorage.getItem('ReadMin'))
      if (min){
        const sum = min + id
        localStorage.setItem('ReadMin', sum)
      } else{
        localStorage.setItem('ReadMin', id)
      }
    }

  return (
    <div className="App">
      <Header></Header>
      <Container className='grid-cols-9' handleBookmark={handleBookmark} datas={datas} key={datas.map(data => data.id)}></Container>

    </div>
  )
}

export default App
