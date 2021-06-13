export default {
  root: {
    margin: 'auto',
    width: 1200,
  },

  header: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    textTransform: 'capitalize',
  },


} as const
