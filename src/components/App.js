//Topic: dad jokes API: Lab to learn how to fetch from an API using useEffect and useState for react
//Date: May 3rd 2023

import '../styles/App.css';
import React, { useEffect, useState } from 'react'; //Step 1/5: Import useEffect and useState hooks from React package


function App() {

  const [joke, setJoke] = useState(null);  //Step 2/5: declare variables to store the data fetched from the API

  //Step 3/5: create a function that will `fetch ` the API to make a GET request to API endpoint(see doc), translate data into json, and pass the data into the setJoke variable.
  const fetchJoke = async () => {   
    const response = await fetch(`https://icanhazdadjoke.com/`, {
      headers: {                         //from the API documentation
        'Accept': 'application/json'  
      }
    })
    const data = await response.json();
    setJoke(data);
  };


  useEffect(() => {  //Step 4/5: use the useEffect hook to fetch data from the API by calling the functionn
    fetchJoke();
  }, []);


  return ( //Step 5/5: Render the data in your return component
    <div className="App">
      <h1>DadJokes API</h1>
      <h2>using useEffect and useState</h2>
      <button onClick={fetchJoke}>New Joke</button>  
      {joke && (
        <div key={joke.id}>
          <h3> {joke.joke} </h3>
        </div>
      )}

    </div>
  );
}


export default App;

/*
   0. import react + hooks
   1. Setup component state - useState (loading, jokes)
   2. Create onLoad handler - test Code is executing without error
   3. test async handler - useEffect
   4. Refactor onLoad() - add fetch and test before modifying JSX
   5. Verify local state is being updated 
   6. Refactor JSX to display new joke content
   7. verify page refresh displays new joke
   8. Add button + getNewJoke handler
   9. Update state and display new joke
*/ 