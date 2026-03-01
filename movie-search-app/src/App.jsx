import { useState } from "react";
import "./App.css"; 

function App() {

  // state initialization
  // movie → stores what user types
  // setMovie → function to update movie value
  const [movie, setMovie] = useState("");

  // data → stores movie details from API
  const [data, setData] = useState(null);    // null because it is object, no data yet

  // loading → true while fetching data
  const [loading, setLoading] = useState(false);     // loading is boolean, at beginning no loading so false.

  // error → stores error message
  const [error, setError] = useState("");

  // Function runs when Search button is clicked
  const searchMovie = async () => {

    // If input box is empty, stop function
    if (!movie) return;

    setLoading(true);   // Start loading
    setError("");       // Clear previous error
    setData(null);      // Clear previous movie data

    try {

      // Send request to OMDb API
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=104bac96&t=${movie}`
      );

      // Convert response into JSON format
      const result = await response.json();

      // If API returns movie not found
      if (result.Response === "False") {
        setError("Movie not found");
      } else {
        // Store movie data
        setData(result);
      }

    } catch (err) {
      // If network error happens
      setError("Something went wrong");
    }

    // Stop loading after request completes
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">

      {/* Title with responsive icon and text size */}
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6 flex items-center justify-center gap-2">
        <i className="fas fa-film text-red-500 text-3xl sm:text-4xl"></i> 
        Movie Search App
      </h1>

      {/* Input and Button Section – responsive stack on small screens */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-6">

        {/* Input field */}
        <input
          type="text"
          placeholder="Enter movie title"

          // value connects input box with movie state
          value={movie}

          // When user types, update movie state
          onChange={(e) => setMovie(e.target.value)}

          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Search Button */}
        <button
          onClick={searchMovie} // Call function on click
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>

      </div>

      {/* ---------------- CONDITIONAL RENDERING PART ---------------- */}

      {/* 
        Curly braces {} allow us to write JavaScript inside JSX.
        Here we are using logical AND (&&) operator.
      */}

      {/* 
        If loading is TRUE → show "Loading..."
        If loading is FALSE → show nothing
      */}
      {loading && (
        <p className="text-yellow-500 font-semibold">
          Loading...
        </p>
      )}

      {/* 
        If error contains text → show error message
        If error is empty → show nothing
      */}
      {error && (
        <p className="text-red-500 font-semibold">
          {error}  {/* Display error text */}
        </p>
      )}

      {/* 
        If data exists (not null) → show movie card
        If data is null → show nothing
      */}
      {data && (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full text-center">

          {/* Movie Poster */}
          <img
            src={data.Poster} // Poster URL from API
            alt={data.Title}
            className="w-full h-80 object-cover rounded-lg mb-4"
          />

          {/* Movie Title */}
          <h2 className="text-xl font-bold mb-2">
            {data.Title}
          </h2>

          {/* Movie Year */}
          <p className="text-gray-600 mb-1">
            <strong>Year:</strong> {data.Year}
          </p>

          {/* Movie Genre */}
          <p className="text-gray-600">
            <strong>Genre:</strong> {data.Genre}
          </p>

        </div>
      )}

    </div>
  );
}

export default App;