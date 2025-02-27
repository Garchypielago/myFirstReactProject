// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/132.png

function PokemonList() {
    const pokes= [
        {
            id: 1,
            name: "bulbasaur",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png"
        },
        {
            id: 2,
            name: "charmander",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/4.png"
        },
        {
            id: 3,
            name: "squirtle",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/7.png"
        }
    ];

    const HTMLPokes = pokes.map((poke)=>{
        return (
            <li key={poke.name}>
                <h3>{poke.name}</h3>
                <img src={poke.img} alt={poke.name} width={200} />
            </li>
        )
    })

    return (
        <section>
        <div>PokemonList</div>
        <ul>
            {HTMLPokes}
        </ul>
        </section>
    )
}

export default PokemonList