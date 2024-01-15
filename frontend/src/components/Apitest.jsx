import React, { useEffect, useState } from 'react'

const URL = 'https://www.boredapi.com/api/activity';
const Apitest = () => {
    const [results,setResults] = useState([]);
    useEffect(()=>{
        async function getData(){
            const response = await fetch(URL);
            const data = await response.text();
            setResults(data);
        }
        getData();
        console.log(results);
    },[]);
  return (
    <div>{results}</div>
  )
}

export default Apitest