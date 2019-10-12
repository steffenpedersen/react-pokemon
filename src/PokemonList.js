import React from 'react'

// Parameters are called with destructuring
export default function PokemonList({ pokemon }) {
    return (
        <div className="panel-body">
            {/* Loop through the Pokémons with map
                and a callback function */}
            <ul>
            {pokemon.map(name =>
                // React expects a key when iterating inside a loop
                <div key={name} className="tile">
                    <div className="tile-icon">
                        <div className="example-tile-icon">
                        <i className="icon icon-file centered"></i>
                        </div>
                    </div>
                    <div className="tile-content">
                        <p className="tile-title text-bold">{name}</p>
                    </div>
                </div>
            )}
            </ul>
        </div>
    )
}
