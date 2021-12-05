import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useState, useEffect} from 'react'
import { Routes, Route } from  "react-router-dom";
import {useNavigate } from 'react-router-dom'
import Homepage from './components/Homepage';
import AllBeers from './components/AllBeers';
import BeerDetail from "./components/BeerDetail"
import NewBeer from './components/NewBeer';
import Randombeer from './components/RandomBeer';




function App() {

  const [beers, setBeers] = useState([])

   const navigate = useNavigate()

   useEffect(() => {

    const getData = async () => {
      let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      setBeers(response.data)
      console.log(response.data)
    }
    getData()
   }, [])

   useEffect(() => {
    navigate('/')
  }, [beers])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value,
      completed: false,
    }
    // Pass an object as a 2nd param in POST requests
    let response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
    setBeers([response.data, ...beers])
}

  return (
    <div>
      <Routes>
      <Route path="/" element={<Homepage  /> } />
        <Route path="/beers" element={ <AllBeers beers={beers} />} />
        <Route path="/todo/:beerId" element={<BeerDetail beers={beers} />} />
        <Route path="/NewBeer" element={<NewBeer btnSubmit={handleSubmit}/> } />
        <Route path="/beers" element={ <Randombeer beers={beers}/> } />
      </Routes>

    </div>
  );
}

export default App;
