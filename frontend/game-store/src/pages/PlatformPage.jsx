import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PlatformPage = () => {
    const [games, setGames] = useState()
    const [platformName, setPlatformName] = useState()
    const {platform} = useParams();
    useEffect(()=> {
        fetch(`http://127.0.0.1:8000/api/${platform}/`)
        .then((response) => response.json())
        .then((data)=> {
            setGames(data)
        })
        const capitalize = (value) => String(value).charAt(0).toUpperCase() + String(value).slice(1);
        setPlatformName(capitalize(platform))
    },[])
  return (
    <>
          {games && <div>
            <h1>Games for: {platformName}</h1>
            
            </div>}
    </>
  )
}

export default PlatformPage