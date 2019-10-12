import React from 'react'

// Parameters are called with destructuring
export default function PokemonList({ pokemon }) {
    return (
        <div>
            {/* Loop through the Pokémons with map
                and a callback function */}
            {pokemon.map(name =>
                // React expects a key when iterating inside a loop
                <div key={name}>{name}</div>
            )}
        </div>
    )
}
