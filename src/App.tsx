import { useEffect, useState } from 'react'

import { HeightMetric } from './components/HeightMetric'
import { WeightMetric } from './components/WeightMetric'
import { XPMetric } from './components/XPMetric'

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
    <div style={styles.root}>
      <header style={styles.header}>
          <div style={styles.selectedPokemon}>{selectedPokemon?.name || 'Select'}</div>
          <HeightMetric height={selectedPokemon?.height} />
          <WeightMetric colour="#39c" weight={selectedPokemon?.weight} />
          <XPMetric colour="#39c" xp={selectedPokemon?.base_experience} />
      </header>
      <main>
        <ol style={styles.pokemonList}>
          {pokemonList?.results.map((pokemonLink: PokemonLink, i: number) => (

            <li style={styles.pokemonListItem}
              key={pokemonLink.name}
              onClick={() => setSelectedPokemonLink(pokemonLink)}>
                <span style={styles.pokemonListNumber}>{i + listOffset + 1}</span>
                <span style={styles.pokemonListName}> {pokemonLink.name}</span>
            </li>
          ))}
        </ol>

        <div style={styles.pagination}>
          {pokemonList?.previous ? (
            <p style={styles.paginationLink} onClick={prevPage}>&lt; Previous {pageSize}</p>
          ) : <div />}
          <p>Results {listOffset + 1} to {listOffset + pageSize}</p>
          {pokemonList?.next && (
            <p style={styles.paginationLink} onClick={nextPage}>Next {pageSize} &gt;</p>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
