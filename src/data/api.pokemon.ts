export class PokemonApi {
  apiUrl: string;
  constructor() {
    this.apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async getPokemonInfo() {
    const response = await fetch(this.apiUrl);
    const result = await response.json();
    const pokemonInfo = await Promise.all(
      result.results.map(async (item: { url: string }) => {
        const singlePokemonUrl = item.url;
        const response = await fetch(singlePokemonUrl);
        const pokemonData = await response.json();
        return pokemonData;
      })
    );
    return pokemonInfo;
  }
}
