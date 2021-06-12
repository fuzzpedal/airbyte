import { useEffect, useState } from 'react'

import { HeightMetric } from './components/HeightMetric'
import { WeightMetric } from './components/WeightMetric'
import { XPMetric } from './components/XPMetric'

import css from './index.css'
import styles from './styles'


type PokemonLink = {
  name: string
  url: string
}

type PokemonListResponse = {
  count: number
  next: string | null
  previous: string | null
  results: PokemonLink[]
}

type Pokemon = {
  base_experience: number
  height: number
  name: string
  weight: number
}


function App() {
  // Constants
  const pageSize = 20
  const baseUrl = "https://pokeapi.co/api/v2"

  // State
  const [selectedPokemonLink, setSelectedPokemonLink] = useState<PokemonLink>()
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>()
  const [pokemonList, setPokemonList] = useState<PokemonListResponse>()
  const [listOffset, setListOffset] = useState<number>(0)
  const [pokemonListUrl, setPokemonListUrl] = useState<string|null|undefined>(`${baseUrl}/pokemon?limit=${pageSize}&offset=${listOffset}`)

  // Effects
  useEffect(() => {
    if (pokemonListUrl) {
      fetch(pokemonListUrl)
        .then((res: Response) => res.json())
        .then((result: PokemonListResponse) => {
          setPokemonList(result)
          console.log(result)
        }, (error: any) => {
          console.log(error)
        })
    }
  }, [pokemonListUrl])

  useEffect(() => {
    if (selectedPokemonLink) {
      fetch(selectedPokemonLink.url)
        .then((res: Response) => res.json())
        .then((result: Pokemon) => {
          setSelectedPokemon(result)
        }, (error: any) => {
          console.log(error)
        })
    }
  }, [selectedPokemonLink])

  // Functions
  const prevPage = () => {
    setListOffset(listOffset - pageSize)
    setPokemonListUrl(pokemonList?.previous)
  }

  const nextPage = () => {
    setListOffset(listOffset + pageSize)
    setPokemonListUrl(pokemonList?.next)
  }

  return (
    <div className="App">
      <header style={styles.header}>
        {selectedPokemon && (
          <div>
            <div>Selected pokemon: {selectedPokemon.name}</div>
            <HeightMetric height={selectedPokemon.height} />
            <WeightMetric weight={selectedPokemon.weight} />
            <XPMetric xp={selectedPokemon.base_experience} />
          </div>
        )}
      </header>
      <main>
        {pokemonList?.results.map((pokemonLink: PokemonLink) => (
          <p
            key={pokemonLink.name}
            style={styles.pokemonLink}
            onClick={() => setSelectedPokemonLink(pokemonLink)}>
              {pokemonLink.name}
          </p>
        ))}
        {pokemonList?.previous && (
          <p onClick={prevPage}>Prev {pageSize}</p>
        )}
        <p>Results {listOffset} to {listOffset + pageSize}</p>
        {pokemonList?.next && (
          <p onClick={nextPage}>Next {pageSize}</p>
        )}
      </main>
    </div>
  )
}

export default App
