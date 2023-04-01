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

    let [watchTime, setWatchTime] = useState('00')

    const handleWatchTime =(id) =>{
      const time = JSON.parse(localStorage.getItem('ReadMin'))
      if (time){
        const sum = time + id
        localStorage.setItem('ReadMin', sum)
        setWatchTime(sum)
      } else{
        localStorage.setItem('ReadMin', id)
        setWatchTime(id)
      }
    }


  return (
    <div className="App">
      <Header></Header>
      <Container className='grid-cols-9' handleWatchTime={handleWatchTime} watchTime={watchTime} datas={datas} key={datas.map(data => data.id)}></Container>

    </div>
  )
}

export default App
