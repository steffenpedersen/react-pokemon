import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
// Library which makes it easier to make requests to an API 
import axios from 'axios';

function App() {
  // Declare Pokémon state variables from State Hook
  // The first variable is the current state
  // The next is the variable we will be using 
  // to update the state
  const [pokemon, setPokemon] = useState([]);

  // Declare pagination state variables from State Hook
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  // Declare loading state variables from State Hook
  const [loading, setLoading] = useState(true);

  // Hook when we want to rerender our app
  // or changes on the props, we are passing
  useEffect(() => { 
    // Every time we make a request the loading should be true
    setLoading(true)

    // Default empty variable for CancelToken
    let cancel
    
    // Make a request for a Pokémon's name
    axios.get(currentPageUrl, {
      // Every time we make a reqeust,
      // we set the cancel variable to the cancel token 
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      // When the request was succesful,
      // the loading should be false
      setLoading(false)

      // Get the data for next and previous from the API
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)

      // Get new Pokémon names
      setPokemon(res.data.results.map(p => p.name))
    })

    // This will cancel our request, everytime we make a new one
    return () => cancel()

    // Every time the currentPageUrl changes
    // rerun the code inside the useEffect hook
  }, [currentPageUrl])

  // Function used by the pagination component
  function gotoNextPage() {
    // Set the current page to the next url
    setCurrentPageUrl(nextPageUrl)
  }

  // Function used by the pagination component
  function gotoPrevPage() {
    // Set the current page to the previous url
    setCurrentPageUrl(prevPageUrl)
  }

  // Return some basic loading text
  if (loading) {
    return (
      <div class="loading loading-lg"></div>
    )
  }

  return (
    // In JavaScript you can only return one object
    <>
      <PokemonList pokemon={pokemon}/>
      <Pagination
        // Use turnary to check if we have an url
        // if we have that, then return the function,
        // otherwise return nothing
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
