import React, {useState, useEffect} from "react";
import Autocomplete from "./components/autocomplete/autocomplete";
import axios from "axios"
const API = {
  getStocks: () => {
    return axios.get("/api/alpaca")
  },
}

function App() {
  const [stocks,setStocks] = useState([])
  useEffect(()=>{
   loadStocks()
  },[])
  function loadStocks(){
    API.getStocks()
    .then(res=>{
console.log(res)
      setStocks(res.data)
    })
    .catch(err=> console.log(err))
  }
  return (
    <div>
      <Autocomplete
      stocks={stocks} />
    </div>
  );
}

export default App;
