import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

import PokemonCard from '../components/PokemonCard';
import { fetchData } from '../database/pokemons-db';

class PokemonList extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { pokemons: [] };
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ pokemons: data });
  }

  render() {
    return (
      <Grid container direction="row" justify="center">
        {
          this.state.pokemons.map(pokemon => {
            const props = {
              id: pokemon._id,
              name: pokemon.name,
              types: pokemon.types.map(type => type.name)
            }
            return <PokemonCard key={pokemon._id} {...props} />
          })
        }
      </Grid>
    );
  }
}

export default PokemonList;
