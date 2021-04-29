import React,{useState} from 'react';
import './App.css'
import Client from './Components/Client'

const App = () => {

const [data, setData] = useState([])
const [search, setSearch] = useState('')



const inputVal= () => {
  return search.length > 2
}
const fetchData = () => {
  fetch(`api/clients?search=${search}`)
  .then(res=>res.json())
  .then(data=>{
    setData(data)
   console.log(data);
  })
  .catch(function(){})
}

  return (
    <div className="App">
      <h1>Veterinarian admin-clients</h1>
      <input 
        type="text" 
        onChange={(e) => setSearch(e.target.value)} 
        value={search} 
        placeholder="Search for people's detalis"
      />
      <button disabled={!inputVal()} onClick={()=>fetchData()}>Search</button>
      {data.map((item,i) => <Client
                        item={item}
                        key={i}
      />)} 
    </div>
  )
}

export default App
