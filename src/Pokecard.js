import React from 'react';
import './Pokecard.css'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = ({name, id, type, exp}) => {
    let imgSrc = `${POKE_API}${id}.png`;
    return (
        <div className='poke-card'>
            <div className='poke-name'>{name}</div>
            <img clasName='poke-img' alt='pokemon' src={imgSrc}/>
            <p className='poke-type'>Type: {type}</p>
            <p className='poke-exp'>EXP: {exp}</p>
        </div>
    )
}

export default Pokecard