import React from 'react'
import { useCharacters } from '../hooks/useCharacters'
import { CharacterProps } from '../interfaces/Types'

const Characters = () => {
  const { loading, data, error } = useCharacters()

  if (loading) return <h1>Loading</h1>
  if (error) return <h1>Something went wrong</h1>

  return (
    <div className="grid grid-cols-4 mx-2">
        {data.characters.results.map((character: CharacterProps) => (
            <div key={character.id} className="">
                <h2> {character.name} </h2>
                <img src={character.image} alt="" />
            </div>
        ))}
    </div>
  )
}

export default Characters