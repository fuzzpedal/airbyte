const styles = {
  root: {
    margin: 'auto',
    width: 1200,
  },

  header: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 50,
  },

  selectedPokemon: {
    borderRadius: 10,
    boxShadow: '0px 0px 10px #ccc',
    padding: '10px 0px',
    height: 200,
    width: 400,
    fontSize: 48,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pokemonList: {
    borderRadius: 10,
    boxShadow: '0px 0px 10px #ccc',
    padding: '10px 0px',
  },

  pokemonListItem: {
    listStyleType: 'none',
    padding: 20,
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
  },

  pokemonListNumber: {
    fontWeight: 'bold',
    marginRight: 20,
  },

  pokemonListName: {
    textTransform: 'capitalize',
  },

  pagination: {
    borderRadius: 10,
    boxShadow: '0px 0px 10px #ccc',
    padding: '5px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 50,
  },

  paginationLink: {
    cursor: 'pointer',
  },


} as const


export default styles
