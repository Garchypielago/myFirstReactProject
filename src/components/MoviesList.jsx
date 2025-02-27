import { useEffect } from "react";

function MoviesList() {
    const movies= ["Dune", "GoT", "Star wars"];

    const HTMLMovies = movies.map((movie, index)=>  {
        return <p key={movie}>{index+1}-{movie}</p>
    })

    useEffect(()=>{
        console.log("MovieList mounted");
    }, [])
    // array vacio se ejecuta solo cuando se monte el componente

    useEffect(()=>{
        return ()=>{
            console.log("MovieList unmonted");
        }
    }, [])
    // con el return es cuando se desmonta

    return (
        <section>
            <h2>Movies</h2>

            {HTMLMovies}
        </section>
    )
}

export default MoviesList
